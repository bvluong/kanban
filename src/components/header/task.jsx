import React from 'react';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='tasks'>
        <ul className='tasks-lists'>
          <li>
            Do this
          </li>
        </ul>
      </div>
    );
  }
}

export default Tasks;
