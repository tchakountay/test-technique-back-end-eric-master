import { IResolvers } from 'graphql-tools';
import GetLunchBox from '../../interfaces/graphql/queries/GetLunchBox';
import CreateLunchBox from '../../interfaces/graphql/operations/CreateLunchBox';

const resolvers: IResolvers = {
  Query: {
    getLunchBoxByOwner: GetLunchBox,
  },
  Mutation: {
    createLunchBox: CreateLunchBox,
  }
};

export default resolvers;
