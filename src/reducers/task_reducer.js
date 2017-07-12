import { RECEIVE_TASK } from '../actions/task_actions';
import { merge } from './lodash';

const taskReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      let newState = merge({},state, {[action.task.id]: action.task});
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
