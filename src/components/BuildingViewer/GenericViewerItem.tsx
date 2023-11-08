import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import commonStyles from '../../theme/styles';
import IGenericViewerItem from '../../interfaces/components/GenericViewerItem';

export default ({
  isSelected,
  onPress,
  item,
  children,

  allItemsSelected,
}: IGenericViewerItem): JSX.Element => {
  const itemStyle = isSelected ? styles.selectedItem : {};
  const markerStyle = isSelected
    ? styles.selectedItemMarker
    : styles.defaultItemMarker;

  return (
    <View style={styles.row}>
      <View style={markerStyle} />
      <TouchableOpacity
        style={[commonStyles.fullSize, itemStyle]}
        onPress={() => onPress(item.id)}>
        <Text style={styles.itemText}>
          {item.name}
          <Text style={styles.allSelectedHintText}>
            {allItemsSelected ? '(selected all)' : ''}
          </Text>
        </Text>

        {children}
      </TouchableOpacity>
    </View>
  );
};
