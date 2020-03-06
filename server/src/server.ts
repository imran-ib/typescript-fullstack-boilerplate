import { resolvers } from "./resolvers/index";

import { GraphQLServer } from "graphql-yoga";

import db from "./db";

function CreateServer() {
  const server = new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: resolvers as any,
    // w
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({
      ...req,
      prisma: db
    })
  });
  return server;
}

export default CreateServer;
