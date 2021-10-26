import IGetLunchBoxQuery from '../../domain/queries/IGetLunchBoxQuery';
import ILunchBoxRepository from '../../domain/repositories/ILunchBoxRepository';
import LunchBox from '../../domain/models/LunchBox';
import Person from '../../domain/models/Person';
import LunchBoxNotFoundError from '../../domain/errors/LunchBoxNotFoundError';

export default class GetLunchBoxQuery implements IGetLunchBoxQuery {
  private lunchBoxRepository: ILunchBoxRepository;

  constructor(params: { lunchBoxRepository: ILunchBoxRepository }) {
    this.lunchBoxRepository = params.lunchBoxRepository;
  }

  async execute(owner: Person): Promise<LunchBox[]> {
    const lunchBoxes = await this.lunchBoxRepository.getLunchBoxesByOwner(owner);
    if (lunchBoxes.length < 1)
      throw new LunchBoxNotFoundError(`No Lunchbox found for owner first: ${owner.firstName}, last: ${owner.lastName}`);
    return lunchBoxes;
  }
}
