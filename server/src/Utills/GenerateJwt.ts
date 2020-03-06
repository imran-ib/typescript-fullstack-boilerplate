import * as jwt from "jsonwebtoken";

const GenUserTokenwithCookies = (userId, response) => {
  const Token = jwt.sign({ userId: userId }, process.env.APP_SECRET);

  // set JWT as cookie on the response
  response.cookie("Token", Token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365 // 1year cookie
  });
};

export default GenUserTokenwithCookies;
