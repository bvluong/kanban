import { RECEIVE_TASK } from '../actions/task_actions';
import { merge } from 'lodash';

const defaultState = {
  "Do this": "Do this",
  "And this": "And this",
  "Also this": "Also this"
};

const taskReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      let newState = merge({}, state, {[action.task]: action.task});
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
