import {asClass} from 'awilix';

import GetLunchBoxQuery from './queries/GetLunchBoxQuery';
import CreateLunchBoxOperation from './operations/CreateLunchBoxOperation';

export default {
  // Queries
  getLunchBoxQuery: asClass(GetLunchBoxQuery).singleton(),

  // Operations
  createLunchBoxOperation: asClass(CreateLunchBoxOperation).singleton()
}
