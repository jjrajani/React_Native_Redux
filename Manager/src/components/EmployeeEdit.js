import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    const { uid } = this.props.employee;
    this.props.employeeSave({ name, phone, shift, uid });
  };
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>
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
  employeeSave
})(EmployeeEdit);
