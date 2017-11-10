import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, ConfirmModal } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onSavePress = () => {
    const { name, phone, shift } = this.props;
    const { uid } = this.props.employee;
    this.props.employeeSave({ name, phone, shift, uid });
  };
  onTextPress = () => {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };
  onFirePress = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  onAccept = () => {
    const { uid } = this.props.employee;
    this.setState({ showModal: false });
    this.props.employeeDelete(uid);
  };
  onDecline = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSavePress}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onFirePress}>Fire Employee</Button>
        </CardSection>

        <ConfirmModal
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete this?
        </ConfirmModal>
      </Card>
    );
  }
}

EmployeeEdit.PropTypes = {
  employeeUpdate: PropTypes.func.isRequired,
  employeeCreate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employee: PropTypes.object
};

function mapStateToProps({ employeeForm }) {
  const { name, phone, shift } = employeeForm;
  return {
    name,
    phone,
    shift
  };
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
