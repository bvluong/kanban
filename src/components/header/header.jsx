import React from 'react';
import TasksContainer from './task_container';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div className='main-header'>
      <ul className='header-list'>
        <li>
          <h3 className='header'>To be Completed</h3>
          <TasksContainer headerId={1}/>
        </li>
        <li>
          <h3 className='header'>To be Reviewed</h3>
          <TasksContainer headerId={2}/>
        </li>
        <li>
          <h3 className='header'>Completed</h3>
          <TasksContainer headerId={3}/>
        </li>
      </ul>
    </div>
    );
  }
}

export default Header;
