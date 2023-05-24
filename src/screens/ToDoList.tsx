import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../App';
import { Dimensions } from 'react-native';
import { Checkbox } from 'react-native-paper';

const ToDoList = () => {
  const [checked, setChecked] = React.useState(false);
  let dispatch = useDispatch();
  let data = useSelector<RootState, any>(state => state);

  const remove = (id: any) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const complete = (id: any) => {
    dispatch({ type: 'COMPLETE_TODO', payload: id });
  };

  if (data.length < 1) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20 ,color:"black", fontWeight:"bold"}}>No ToDo Items.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {data.some((item:any) => !item.completed) && (
        <>
          <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, color: 'black' }}>
            Incomplete
          </Text>
          <FlatList
            style={{ flex: 1 }}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              if (!item.completed) {
                return (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 10,
                      margin: 10,
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      elevation: 5,
                    }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => complete(item.id)}
                      />
                      <Text
                        style={{
                          fontSize: 20,
                          textDecorationLine: item.completed ? 'line-through' : 'none',
                          color: item.completed ? '#aaa' : '#000',
                          marginLeft: 15,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        onPress={() => remove(item.id)}
                        style={{
                          backgroundColor: '#fff',
                          padding: 10,
                          borderRadius: 10,
                          elevation: 5,
                        }}
                      >
                        <Text style={{ color: '#000' }}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }
              return null;
            }}
          />
        </>
      )}

      {data.some((item:any) => item.completed) && (
        <>
          <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, color: 'black' }}>
            Completed
          </Text>
          <FlatList
            style={{ flex: 1 }}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }: any) => {
              if (item.completed) {
                return (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 10,
                      margin: 10,
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      elevation: 5,
                    }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => complete(item.id)}
                      />
                      <Text
                        style={{
                          fontSize: 20,
                          textDecorationLine: item.completed ? 'line-through' : 'none',
                          color: item.completed ? '#aaa' : '#000',
                          marginLeft: 15,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        onPress={() => remove(item.id)}
                        style={{
                          backgroundColor: '#fff',
                          padding: 10,
                          borderRadius: 10,
                          elevation: 5,
                        }}
                      >
                        <Text style={{ color: '#000' }}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }
              return null;
            }}
          />
        </>
      )}
    </View>
  );
};

export default ToDoList;
