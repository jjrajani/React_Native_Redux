import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {
  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee });
  };
  render() {
    const { employee } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{employee.name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
};

EmployeeListItem.PropTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeListItem;
