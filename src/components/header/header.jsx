import React from 'react';
import Tasks from './task';

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
