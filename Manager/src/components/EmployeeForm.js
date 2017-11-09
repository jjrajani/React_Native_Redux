import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { CardSection, Input } from './common';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift } = this.props;
    return (
      <View>
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
      </View>
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

EmployeeForm.PropTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
  employeeCreate: PropTypes.func.isRequired
};

export default EmployeeForm;
