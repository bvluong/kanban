import { RECEIVE_TASK } from '../actions/task_actions';
import { merge } from 'lodash';

const defaultState = {
  1: ["Do this", "And this","Also this"],
  2: ["Hope it doenst break", "Did it break?", "Test everything?"],
  3: []
};

const taskReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK:
      let newState = merge({}, state);
      console.log(newState);
      console.log(action);
      newState[action.task.headerId].push(action.task.task);
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
