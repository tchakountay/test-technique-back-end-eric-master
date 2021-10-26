import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './interfaces/graphql/schema';
import createContainer from './infrastructure/ioc/container';
import IApolloContext from '/src/IApolloContext';

const app = express();
const context: IApolloContext = {
  container: createContainer()
};
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context
});

app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen(
  { port: 3000 },
  (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`)
);

module.exports = app;
