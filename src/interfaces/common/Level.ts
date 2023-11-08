import IArea from './Area';

export default interface ILevel {
  id: string;
  name: string;
  areas: IArea[];
}
