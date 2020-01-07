import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//Here I've imported all that I want, declared what I will return from the component.
const ComponentsScreen = () => {
  const name = 'Edward';
  const age = 24;
  
  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>Hello {name}! You are {age} years old!</Text>
    </View>
  );
};

// Here styles are declared.
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

// Here the component is exported.
export default ComponentsScreen;