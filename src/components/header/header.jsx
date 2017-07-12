import React from 'react';
import Tasks from './task';

class Header extends React.Component {

  render () {
    return (
    <div className='main-header'>
      <ul>
        <li>
          <h3>To be Completed</h3>
          <Tasks/>
        </li>
        <li>To be Reviewed</li>
        <li>Completed</li>
      </ul>
    </div>
    );
  }
}

export default Header;
