import React from 'react';
import {View, FlatList, LayoutAnimation} from 'react-native';
import styles from './styles';

import IBuilding from '../../interfaces/common/Building';
import BuildingItem from './BuildingItem';
import {isItemInArray, toggleItemInArray} from '../../utilts/helpers';

const BuildingViewer = ({data}: {data: IBuilding[]}): JSX.Element => {
  const [selectedBuildings, setSelectedBuildings] = React.useState<string[]>(
    [],
  );

  const onPressBuilding = (itemId: string) => {
    const newBuildings = toggleItemInArray(selectedBuildings, itemId);
    LayoutAnimation.easeInEaseOut();
    setSelectedBuildings(newBuildings);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <BuildingItem
            building={item}
            isSelected={isItemInArray(selectedBuildings, item.id)}
            onPress={onPressBuilding}
          />
        )}
      />
    </View>
  );
};

export default BuildingViewer;
