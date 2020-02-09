import './App.css';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppState, rootReducer, useTypedSelector} from './reducers';
import {Header} from './Header';
import {Products} from './Products';
import {Cart} from './Cart';

const store = createStore(rootReducer);

const Container = () => {
  const appState = useTypedSelector(state => state.app);
  const View = appState === AppState.PRODUCTS_VIEW ? Products : Cart;
  return (
    <div className="app">
      <Header />
      <View />
    </div>
  );
};

export const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);
