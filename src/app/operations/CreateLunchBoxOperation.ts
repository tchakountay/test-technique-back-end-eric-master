import ICreateLunchBoxOperation from '/src/domain/operations/ICreateLunchBoxOperation';
import ILunchBoxRepository from '/src/domain/repositories/ILunchBoxRepository';
import ICreateLunchBoxContract from '/src/domain/contracts/CreateLunchBoxContract';

export default class CreateLunchBoxOperation implements ICreateLunchBoxOperation {
  private lunchBoxRepository: ILunchBoxRepository;

  constructor(params: { lunchBoxRepository: ILunchBoxRepository }) {
    this.lunchBoxRepository = params.lunchBoxRepository;
  }

  async execute(params: ICreateLunchBoxContract): Promise<void> {
    await this.lunchBoxRepository.addLunchBox(params);
  }
}
