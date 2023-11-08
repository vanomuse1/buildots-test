import React from 'react';
import GenericViewerItem from './GenericViewerItem';

import IArea from '../../interfaces/common/Area';

export default ({
  area,
  isSelected,
  onPress,
}: {
  area: IArea;
  isSelected: boolean;
  onPress: (itemId: string) => void;
}): JSX.Element => {
  return (
    <GenericViewerItem item={area} isSelected={isSelected} onPress={onPress} />
  );
};
