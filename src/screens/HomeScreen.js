import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is the HomeScreen</Text>
      <Button
        onPress={() => console.log('asdasd')}
        title="Go to Components Demo"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
