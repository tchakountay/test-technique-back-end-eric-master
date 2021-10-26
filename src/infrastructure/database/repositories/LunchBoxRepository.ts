import LunchBox from '/src/domain/models/LunchBox';
import ILunchBoxRepository from '/src/domain/repositories/ILunchBoxRepository';
import Person from '/src/domain/models/Person';

const data: LunchBox[] = [
  {
    owner: {
      firstName: 'John',
      lastName: 'Cena',
    },
    items: [
      'banana',
      'spaghetti'
    ]
  },
  {
    owner: {
      firstName: 'John',
      lastName: 'Cena',
    },
    items: [
      'steak',
      'linguini'
    ]
  },
  {
    owner: {
      firstName: 'Freddie',
      lastName: 'Mercury',
    },
    items: []
  },
];

export default class LunchBoxRepository implements ILunchBoxRepository {

  async getLunchBoxesByOwner(owner: Person): Promise<LunchBox[]> {
    const { firstName, lastName } = owner;
    return data.filter((lb: LunchBox) =>
      lb.owner.firstName === firstName &&
      lb.owner.lastName === lastName);
  }

  async addLunchBox(lunchBox: LunchBox): Promise<void> {
    data.push(lunchBox);
  }

}
