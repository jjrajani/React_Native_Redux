import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, clearForm } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.clearForm();
  }
  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  };
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

EmployeeCreate.PropTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
  employeeCreate: PropTypes.func.isRequired
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
  employeeCreate,
  clearForm
})(EmployeeCreate);
