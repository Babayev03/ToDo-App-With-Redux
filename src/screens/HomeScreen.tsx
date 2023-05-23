import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import React from 'react';
import {RootState} from '../../App';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const HomeScreen = () => {
  let data = useSelector<RootState, string>(state => state);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <AddToDo />
      <ToDoList />
    </View>
  );
};

export default HomeScreen;
