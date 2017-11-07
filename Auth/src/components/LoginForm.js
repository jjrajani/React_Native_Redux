import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

const fields = [
  { label: 'Email', placeholder: 'user@gmail.com', accsr: 'email', secureTextEntry: false },
  { label: 'Password', placeholder: 'password', accsr: 'password', secureTextEntry: true }
];

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  onButtonPress = () => {
    const { email, password } = this.state;
    // Remove error state, add loading State
    this.setState({ error: '', loading: true });
    firebase
      // Sign In
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        // Create an Account
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  };

  onLoginSuccess = () => {
    this.setState({ error: '', loading: false, email: '', password: '' });
  };

  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed.', loading: false });
  };

  renderButton() {
    return this.state.loading ? (
      <Spinner size={'small'} />
    ) : (
      <Button onPress={this.onButtonPress}>Login</Button>
    );
  }
  render() {
    return (
      <Card>
        {fields.map(f => (
          <CardSection key={f.accsr}>
            <Input
              secureTextEntry={f.secureTextEntry}
              label={f.label}
              placeholder={f.placeholder}
              value={this.state[f.accsr]}
              onChangeText={text => this.setState({ [f.accsr]: text })}
            />
          </CardSection>
        ))}

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
