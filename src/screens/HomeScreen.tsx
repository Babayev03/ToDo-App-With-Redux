import {View} from 'react-native';
import React from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <AddToDo />
      <ToDoList />
    </View>
  );
};

export default HomeScreen;
