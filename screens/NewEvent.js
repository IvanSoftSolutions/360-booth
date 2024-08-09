import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function NewEvent({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text>New Event</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    color: '#FFFFFF',
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    // justifyContent: 'center',
  },  
});