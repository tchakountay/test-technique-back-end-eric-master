export default class LunchBoxNotFoundError extends Error {
  constructor(message: string) {
    super(`[ LunchBoxNotFoundError ] - ${message}`);
  }
}
