import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import FIREBASE_CONFIG from './firebaseConfig';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
  };
  render() {
    // reducers, initialState, middlewares
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
