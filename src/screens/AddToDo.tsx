import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Checkbox } from 'react-native-paper';

const AddTodo = () => {
  const [title, settitle] = useState('');
  const [checked, setChecked] = React.useState(false);

  let dispatch = useDispatch();

  const addToDo = () => {
    if (title === '') {
      Alert.alert('Empty ToDo', 'Please Enter ToDo then press Add again', [
        {text: 'OK'},
      ]);
      return;
    }
    let newTodoItem = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      completed: false,
    };

    dispatch({type: 'ADD_TODO', payload: newTodoItem});
    settitle('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={settitle}
        placeholderTextColor={'purple'}
        placeholder="Enter To Do"
        value={title}
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
