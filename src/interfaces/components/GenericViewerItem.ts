import {ViewStyle} from 'react-native';
import IBuilding from '../common/Building';
import ILevel from '../common/Level';
import IArea from '../common/Area';

export default interface IGenericViewerItem {
  isSelected: boolean;
  onPress: (itemId: string) => void;
  item: IBuilding | ILevel | IArea;
  allItemsSelected?: boolean;
  children?: JSX.Element;
  containerStyle?: ViewStyle;
}
