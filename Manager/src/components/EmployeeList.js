import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount = () => {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  };
  componentWillReceiveProps = nextProps => {
    this.createDataSource(nextProps);
  };
  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  };
  renderRow = employee => <EmployeeListItem employee={employee} />;
  render() {
    return <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

EmployeeList.PropTypes = {
  employees: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  return { employees };
}

export default connect(mapStateToProps, {
  employeesFetch
})(EmployeeList);
