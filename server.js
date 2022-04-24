const path = require('path');
const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const { connectDB } = require ('./startup/db');

async function startApolloServer() {
    const app = express();
  
    const schema = makeExecutableSchema({
      typeDefs: typesArray,
      resolvers: resolversArray,
    });

    const server = new ApolloServer({
      schema
    });
  
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
  
    app.listen(5000, () => {
      console.log('Running GraphQL server...5000');
    });
  }
  
  startApolloServer();
  connectDB();



  /* const {typeDefs} = require ("./users/typeDef");
const {resolvers} = require ('./users/user.resolvers'); */