import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange = text => this.props.emailChanged(text);
  render() {
    const { email } = this.props;
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
          <Input label="Password" secureTextEntry placeholder="password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

LoginForm.PropTypes = {
  email: PropTypes.string.isRequired
};

function mapStateToProps({ auth }) {
  return { email: auth.email };
}

export default connect(mapStateToProps, {
  emailChanged
})(LoginForm);
