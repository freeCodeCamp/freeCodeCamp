import React from 'react';
import NewsNav from './Nav.jsx';

export default React.createClass({
  displayName: 'News',
  render() {
    return (
      <div className='panel panel-info'>
        <div className='panel-heading text-center'>
          Camper News
        </div>
        <div className='panel-body'>
          <NewsNav />
        </div>
      </div>
    );
  }
});
