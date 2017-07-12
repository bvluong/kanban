export const RECEIVE_TASK = "RECEIVE_TASK";

export const receiveTask = ({ task }) => ({
  type: RECEIVE_TASK,
  task
});
