import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import {store} from './src/redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  );
};

export default App;
