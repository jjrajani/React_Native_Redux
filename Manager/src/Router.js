import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="main">
        <Scene
          initial
          rightTitle="+"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      </Scene>
      <Scene key="auth">
        <Scene initial key="login" component={LoginForm} title="Please Login" />
      </Scene>
    </Stack>
  </Router>
);

export default RouterComponent;
