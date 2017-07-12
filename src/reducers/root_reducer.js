import { combineReducers } from 'redux';
import taskReducer from './task_reducer';

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;
