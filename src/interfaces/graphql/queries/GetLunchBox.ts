import { ApolloError } from 'apollo-server-express';
import IApolloContext from '/src/IApolloContext';
import IGetLunchBoxQuery from '/src/domain/queries/IGetLunchBoxQuery';
import Person from '/src/domain/models/Person';
import LunchBox from '/src/domain/models/LunchBox';
import LunchBoxNotFoundError from '../../../domain/errors/LunchBoxNotFoundError';

export default async function GetLunchBox(parent: void, args: Person, context: IApolloContext): Promise<LunchBox[]> {
  const getLunchBoxQuery: IGetLunchBoxQuery = context.container.resolve('getLunchBoxQuery');
  try {
    return await getLunchBoxQuery.execute(args);
  } catch (e) {
    if (e instanceof LunchBoxNotFoundError) {
      throw new ApolloError(e.message, '404');
    }
    throw e;
  }
}
