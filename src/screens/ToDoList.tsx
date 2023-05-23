import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../App';

const ToDoList = () => {
  let dispatch = useDispatch();
  let data = useSelector<RootState, any>(state => state);

  const remove = (id: any) => {
    dispatch({type: 'REMOVE_TODO', payload: id});
  };

  const complete = (id: any) => {
    dispatch({type: 'COMPLETE_TODO', payload: id});
  };

  console.log(data);

  return (
    <View>
      {data.length > 0 ? (
        data.map((item: any) => (
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
            }}>
            <Text
              style={{
                fontSize: 20,
                textDecorationLine: item.completed ? 'line-through' : 'none',
                color: item.completed ? '#aaa' : '#000',
              }}>
              {item.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => complete(item.id)}
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  borderRadius: 10,
                  elevation: 5,
                  marginRight: 10,
                }}>
                {item.completed ? (
                  <Text style={{color: '#000'}}>Not Complete</Text>
                ) : (
                  <Text style={{color: '#000'}}>Complete</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => remove(item.id)}
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  borderRadius: 10,
                  elevation: 5,
                }}>
                <Text style={{color: '#000'}}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text style={{textAlign: 'center', fontSize: 20, color:"#000",marginTop:50}}>No ToDo</Text>
        </View>
      )}
    </View>
  );
};

export default ToDoList;
