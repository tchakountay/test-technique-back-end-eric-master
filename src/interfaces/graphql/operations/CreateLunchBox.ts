import IApolloContext from '/src/IApolloContext';
import ICreateLunchBoxOperation from '/src/domain/operations/ICreateLunchBoxOperation';
import ICreateLunchBoxContract from '/src/domain/contracts/CreateLunchBoxContract';

export default async function CreateLunchBox(parent: void, args: ICreateLunchBoxContract, context: IApolloContext): Promise<boolean> {
  const createLunchBoxOperation: ICreateLunchBoxOperation = context.container.resolve('createLunchBoxOperation');
  try {
    await createLunchBoxOperation.execute(args);
    return true;
  } catch (e) {
    return false;
  }
}
