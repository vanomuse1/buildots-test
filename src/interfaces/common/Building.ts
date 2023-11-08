import ILevel from './Level';

export default interface IBuilding {
  id: string;
  name: string;
  levels: ILevel[];
}
