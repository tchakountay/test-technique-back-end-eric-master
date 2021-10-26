// @typescript
export default interface ICreateLunchBoxContract {
  owner: {
    firstName: string;
    lastName: string;
  };
  items: string[];
}
