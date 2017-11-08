import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = text => this.props.emailChanged(text);
  onPasswordChange = text => this.props.passwordChanged(text);
  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };
  render() {
    const { email, password, error } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange}
            value={email}
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            onChangeText={this.onPasswordChange}
            label="Password"
            secureTextEntry
            placeholder="password"
            value={password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress}>Login</Button>
        </CardSection>
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

LoginForm.PropTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

function mapStateToProps({ auth }) {
  const { email, password, error } = auth;
  return {
    email,
    password,
    error
  };
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
