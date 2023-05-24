import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const addToDo = () => {
    if (title === '') {
      Alert.alert('Empty ToDo', 'Please Enter ToDo then press Add again', [
        { text: 'OK' },
      ]);
      return;
    }

    let newTodoItem = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      completed: false,
    };

    dispatch({ type: 'ADD_TODO', payload: newTodoItem });
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        placeholderTextColor={'purple'}
        placeholder="Enter ToDo"
        value={title}
      />
      <TouchableOpacity
        onPress={addToDo}
        style={styles.addButton}
      >
        <Text style={styles.buttonText}>Add ToDo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    color: '#000',
  },
  addButton: {
    backgroundColor: 'purple',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
});

export default AddTodo;
