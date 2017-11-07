import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import FIREBASE_CONFIG from './firebaseConfig';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp(FIREBASE_CONFIG);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true: {
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      }
      case false: {
        return <LoginForm />;
      }
      default:
        return (
          <View style={styles.loadingStyles}>
            <Spinner size="large" />
          </View>
        );
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Firebase Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  loadingStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: '70%'
  }
};
