import React from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import BuildingViewer from './src/components/BuildingViewer';
import useBuildingsData from './src/hooks/useBuildingsData';
import styles from './src/theme/styles';

function App(): JSX.Element {
  const {data, loading, error} = useBuildingsData();

  const renderContent = () => {
    if (error) {
      return <Text>{error}</Text>;
    }
    if (loading) {
      return <ActivityIndicator size="large" />;
    }
    return <BuildingViewer data={data} />;
  };

  return <SafeAreaView style={styles.fullSize}>{renderContent()}</SafeAreaView>;
}

export default App;
