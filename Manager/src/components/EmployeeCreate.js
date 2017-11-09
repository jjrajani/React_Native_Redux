import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  };
  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="name"
            placeholder="Jane"
            value={name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={styles.cardStyle}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            {days.map(d => <Picker.Item key={d} label={d} value={d} />)}
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  cardStyle: {
    flexDirection: 'column'
  },
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

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
  employeeCreate
})(EmployeeCreate);
