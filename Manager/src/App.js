import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import FIREBASE_CONFIG from './firebaseConfig';
import reducers from './reducers';

class App extends Component {
  componentWillMount = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
  };
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;