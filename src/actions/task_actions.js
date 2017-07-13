export const RECEIVE_TASK = "RECEIVE_TASK";

export const addTask = ( task ) => ({
  type: RECEIVE_TASK,
  task
});
