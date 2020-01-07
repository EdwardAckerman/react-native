import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Philip', age: 25 },
    { name: 'Carlos', age: 25 },
    { name: 'Weesley', age: 25 },
    { name: 'Real', age: 25 },
    { name: 'JS', age: 25 },
    { name: 'Daniel', age: 25 },
    { name: 'Gabe', age: 25 },
    { name: 'Scroll', age: 25 },
    { name: 'Bottom', age: 25 },
  ];

  // keyExtractor={friend => friend.name} is an option when the object has no "keys";
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
});

export default ListScreen;