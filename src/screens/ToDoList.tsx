import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../App';
import { Checkbox } from 'react-native-paper';
import { completeTodo, deleteTodo, getAllTodo } from '../redux/todo/TodoSlice';

const ToDoList = () => {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { todoReducer } = useSelector<RootState, any>(state => state);
  const data = todoReducer.data;

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  const remove = (id: any) => {
    dispatch(deleteTodo(id));
  };

  const complete = (item: any) => {
    dispatch(completeTodo(item));
  };

  const incompleteData = data.filter((item: any) => !item.completed);
  const completedData = data.filter((item: any) => item.completed);

  if (data.length < 1) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.noItemsText}>No ToDo Items.</Text>
      </View>
    );
  }

  return (
    <View>
      {incompleteData.length > 0 && (
        <>
          <Text style={styles.titleText}>Incomplete</Text>
          <FlatList
            style={styles.listContainer}
            data={incompleteData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View key={item.id} style={styles.itemContainer}>
                  <View style={styles.itemContent}>
                    <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => complete(item)}
                    />
                    <View style={styles.titleContainer}>
                      <Text
                        style={[
                          styles.itemText,
                          {
                            textDecorationLine: item.completed ? 'line-through' : 'none',
                            color: item.completed ? '#aaa' : '#000',
                          },
                        ]}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => remove(item.id)}
                      style={styles.removeButton}
                    >
                      <Text style={styles.buttonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </>
      )}

      {completedData.length > 0 && (
        <>
          <Text style={styles.titleText}>Completed</Text>
          <FlatList
            style={styles.listContainer}
            data={completedData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View key={item.id} style={styles.itemContainer}>
                  <View style={styles.itemContent}>
                    <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => complete(item)}
                    />
                    <View style={styles.titleContainer}>
                      <Text
                        style={[
                          styles.itemText,
                          {
                            textDecorationLine: item.completed ? 'line-through' : 'none',
                            color: item.completed ? '#aaa' : '#000',
                          },
                        ]}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => remove(item.id)}
                      style={styles.removeButton}
                    >
                      <Text style={styles.buttonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: 200,
  },
  noItemsText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  listContainer: {
    height: 260,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 15,
    marginLeft: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  removeButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
  },
});
