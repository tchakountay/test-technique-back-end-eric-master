// @typescript
import Person from "./Person";

export default interface LunchBox {
  owner: Person;
  items: string[];
}
