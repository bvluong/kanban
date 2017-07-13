import React from 'react';
import TaskDetail from './task_detail';
import { values } from 'lodash';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTask: false,
      newTask: ""
    };
  }

  addHandler(e) {
    this.setState({addTask: true});
  }

  updateHandler(e) {
    e.preventDefault();
    this.setState({newTask: e.currentTarget.value});
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.addTask({
      headerId: this.props.headerId,
      task: this.state.newTask});
    this.setState({newTask: ""});
  }

  mapTask() {
    return values(this.props.tasks[this.props.headerId])
      .map( (task,idx) => <TaskDetail task={task} key={idx}/> );
  }

  render() {
    const taskInputForm =
      <form onSubmit={this.submitHandler.bind(this)}>
        <textarea className="input-task"
          onChange={this.updateHandler.bind(this)}
          value={this.state.newTask}>
        </textarea>
        <input type="submit"></input>
      </form>;
    return (
      <div className='tasks'>
        <ul className='tasks-lists'>
          {this.mapTask()}
          <li onClick={this.addHandler.bind(this)}>
            Add a task!
          </li>
          { this.state.addTask ? taskInputForm : ""}
        </ul>
      </div>
    );
  }
}

export default Tasks;
