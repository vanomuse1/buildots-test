import React from 'react';
import GenericViewerItem from './GenericViewerItem';
import {FlatList, LayoutAnimation} from 'react-native';
import ILevel from '../../interfaces/common/Level';
import AreaItem from './AreaItem';
import {
  arraysEqualLength,
  isItemInArray,
  toggleItemInArray,
} from '../../utilts/helpers';

export default ({
  level,
  isSelected,
  onPress,
}: {
  level: ILevel;
  isSelected: boolean;
  onPress: (itemId: string) => void;
}): JSX.Element => {
  const [selectedAreas, setSelectedAreas] = React.useState<string[]>([]);

  const onPressArea = (itemId: string) => {
    const newAreas = toggleItemInArray(selectedAreas, itemId);
    LayoutAnimation.easeInEaseOut();
    setSelectedAreas(newAreas);
  };

  return (
    <GenericViewerItem
      item={level}
      onPress={onPress}
      isSelected={isSelected}
      allItemsSelected={arraysEqualLength(selectedAreas, level.areas)}>
      <FlatList
        data={isSelected ? level.areas : []}
        renderItem={({item: areaItem}) => (
          <AreaItem
            area={areaItem}
            onPress={onPressArea}
            isSelected={isItemInArray(selectedAreas, areaItem.id)}
          />
        )}
      />
    </GenericViewerItem>
  );
};
