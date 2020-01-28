import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Feed extends React.Component {
  render() {
    const initialRegion = {
      latitude: 6.90866,
      longitude: 79.97,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    return (
      <View style={styles.container}>
        <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={initialRegion}
       >
        <MapView.Marker
          coordinate={initialRegion}
          pinColor="red"
        />
    </MapView>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
});