import { connect } from 'react-redux';
import { addTask } from '../../actions/task_actions';
import Tasks from './task';

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  addTask: task => dispatch(addTask(task))
});

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
