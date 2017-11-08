import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = text => this.props.emailChanged(text);
  onPasswordChange = text => this.props.passwordChanged(text);
  loginUser = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };
  renderButton = () => {
    if (this.props.loading) return <Spinner size="large" />;
    return <Button onPress={this.loginUser}>Login</Button>;
  };
  render() {
    const { email, password, error, user } = this.props;
    return user === null ? (
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
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    ) : (
      <Card>
        <CardSection>
          <Button onPress={this.props.logoutUser}>Logout</Button>
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
  const { email, password, error, loading, user } = auth;
  return {
    email,
    password,
    error,
    loading,
    user
  };
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  logoutUser
})(LoginForm);
