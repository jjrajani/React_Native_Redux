import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = { name: '', shift: '', phone: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE: {
      // action.payload === { prop: 'name', value: 'Jane' }
      const { prop, value } = action.payload;
      return { ...state, [prop]: value };
    }
    default:
      return state;
  }
};
