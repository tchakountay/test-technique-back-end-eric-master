// @typescript
import ICreateLunchBoxContract from '/src/domain/contracts/CreateLunchBoxContract';

export default interface ICreateLunchBoxOperation {
  execute(params: ICreateLunchBoxContract): Promise<void>
}
