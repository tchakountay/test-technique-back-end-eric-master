// @typescript
import Person from '/src/domain/models/Person';
import LunchBox from '/src/domain/models/LunchBox';

export default interface ILunchBoxRepository {
  getLunchBoxesByOwner(owner: Person): Promise<LunchBox[]>
  addLunchBox(lunchBox: LunchBox): Promise<void>
}
