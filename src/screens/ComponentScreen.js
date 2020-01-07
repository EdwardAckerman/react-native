import React from 'react';
import { Text, StyleSheet } from 'react-native';

//Here I've imported all that I want, declared what I will return from the component.
const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the ComponentsScreen</Text>;
};

// Here styles are declared.
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

// Here the component is exported.
export default ComponentsScreen;