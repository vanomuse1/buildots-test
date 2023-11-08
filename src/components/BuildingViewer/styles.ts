import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  itemText: {
    fontSize: 32,
    marginVertical: 15,
    marginLeft: 15,
  },
  allSelectedHintText: {
    fontSize: 12,
  },
  selectedItem: {
    flex: 1,
    borderWidth: 1,
  },
  defaultItem: {
    flex: 1,
    borderWidth: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  defaultItemMarker: {},
  selectedItemMarker: {
    width: 25,
    height: 1,
    backgroundColor: 'black',
  },
});
