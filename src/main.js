import { createServer } from "@graphql-yoga/node";
import Query from "./resolvers/Query";
import db from "./db";
import Author from "./resolvers/Author";
import Book from "./resolvers/Book";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query,
};

const context = {
  db,
  prisma,
};

const server = new createServer({
  schema: {
    typeDefs: "/src/schema.graphql",
    resolvers,
  },
});

const server2 = createServer({
  schema: {
    typeDefs: `
      type Query {
        ping: String
      }
    `,
    resolvers: {
      Query: {
        ping: () => "pong",
      },
    },
  },
});

server.start({ port: 8000 }, ({ port }) =>
  console.log(`Server is running on localhost: ${port}`)
);
