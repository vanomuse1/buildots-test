import React from 'react';
import GenericViewerItem from './GenericViewerItem';
import {FlatList, LayoutAnimation} from 'react-native';
import LevelItem from './LevelItem';
import IBuilding from '../../interfaces/common/Building';
import {
  arraysEqualLength,
  isItemInArray,
  toggleItemInArray,
} from '../../utilts/helpers';

export default ({
  building,
  isSelected,
  onPress,
}: {
  building: IBuilding;
  isSelected: boolean;
  onPress: (itemId: string) => void;
}): JSX.Element => {
  const [selectedLevels, setSelectedLevels] = React.useState<string[]>([]);

  const onPressLevel = (itemId: string) => {
    const newLevels = toggleItemInArray(selectedLevels, itemId);
    LayoutAnimation.easeInEaseOut();
    setSelectedLevels(newLevels);
  };

  return (
    <GenericViewerItem
      item={building}
      isSelected={isSelected}
      allItemsSelected={arraysEqualLength(selectedLevels, building.levels)}
      onPress={onPress}>
      <FlatList
        data={isSelected ? building.levels : []}
        renderItem={({item: levelItem}) => (
          <LevelItem
            level={levelItem}
            key={levelItem.id}
            onPress={onPressLevel}
            isSelected={isItemInArray(selectedLevels, levelItem.id)}
          />
        )}
      />
    </GenericViewerItem>
  );
};
