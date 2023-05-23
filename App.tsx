import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {ToDoReducer} from './src/redux/ToDoReducer';
import HomeScreen from './src/screens/HomeScreen';

const store = createStore(ToDoReducer);

export type RootState = ReturnType<typeof store.getState>;

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <HomeScreen />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
