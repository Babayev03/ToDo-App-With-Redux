import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const AddTodo = () => {
    
  const [title, settitle] = useState('');

  let dispatch = useDispatch();

  const addToDo = () => {
    let newTodoItem = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      completed: false,
    };

    dispatch({type: 'ADD_TODO', payload: newTodoItem});
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={settitle}
        placeholderTextColor={'purple'}
        placeholder="Enter To Do"
      />
      <TouchableOpacity
        onPress={addToDo}
        style={{
          backgroundColor: 'purple',
          marginHorizontal: 80,
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 15, color: '#fff'}}>Add To Do</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#000',
  },
});
