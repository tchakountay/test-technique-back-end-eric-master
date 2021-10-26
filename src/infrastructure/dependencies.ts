import { asClass } from 'awilix';
import LunchBoxRepository from './database/repositories/LunchBoxRepository';
import PersonRepository from './database/repositories/PersonRepository';

export default {
  lunchBoxRepository: asClass(LunchBoxRepository).singleton(),
  personRepository: asClass(PersonRepository).singleton()
};
