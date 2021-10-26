// @typescript
import LunchBox from '/src/domain/models/LunchBox';

export default interface IGetLunchBoxQuery {
  execute(owner: { firstName: string, lastName: string }): Promise<LunchBox[]>
}
