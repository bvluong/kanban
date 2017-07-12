import React from 'react';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addTask: false};
  }

  addHandler(e) {
    e.preventDefault();
    this.setState({addTask: true});
  }

  render() {
    const taskInputForm = <textarea className="input-task"></textarea>;
    return (
      <div className='tasks'>
        <ul className='tasks-lists'>
          <li>
            Do this
          </li>
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
