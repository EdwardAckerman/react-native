import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    {
      name: 'Philip',
      key: '1',
    },
    {
      name: 'Carlos',
      key: '2',
    },
    {
      name: 'Weesley',
      key: '3',
    },
    {
      name: 'Real',
      key: '4',
    },
    {
      name: 'JS',
      key: '5',
    },
    {
      name: 'Daniel',
      key: '6',
    },
  ];

  // keyExtractor={friend => friend.name} is an option when the object has no "keys";
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{ item.name }</Text>
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;