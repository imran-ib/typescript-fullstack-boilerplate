require("dotenv").config();
// const helmet = require("helmet");
import * as helmet from "helmet";
import * as cors from "cors";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as jwt from "jsonwebtoken";

import createServer from "./server";

const db = require("./db");

const server = createServer();

server.express.use(cookieParser());
server.express.use(helmet());
server.express.use(cors());
server.express.use(logger("dev"));

server.express.use((req, res, next) => {
  const { Token }: any = req.cookies;
  if (Token) {
    const { userId }: any = jwt.verify(Token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});

//Create a middleware that populates the user on each request
server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();

  const user = await db.query.user(
    { where: { id: req.userId } },
    "{ id, permissions, email, name }"
  );

  req.user = user;

  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
