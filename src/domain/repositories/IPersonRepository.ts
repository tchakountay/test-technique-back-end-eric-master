// @typescript
import Person from '/src/domain/models/Person';

export default interface IPersonRepository {
  getPersonByFirstAndLastName(first: string, last: string): Promise<Person | null>
}
