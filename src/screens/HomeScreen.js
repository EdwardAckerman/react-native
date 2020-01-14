import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>This is the HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      ></Button>

      <Button
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Demo"
      ></Button>

      <Button
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Images"
      ></Button>
      
      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title="Go to Counter"
      ></Button>
      {/* <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
});

export default HomeScreen;
