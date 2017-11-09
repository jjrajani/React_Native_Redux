import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {
  render() {
    const { employee } = this.props;
    // console.log('item', employee);
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{employee.name}</Text>
      </CardSection>
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
