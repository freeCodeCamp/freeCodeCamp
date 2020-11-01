import React, { Fragment } from 'react';

function Spacer(props) {
  return (
    <Fragment>
      <span className='sr-only'>Passed</span>
      <svg
        className='tick'
        height='50'
        viewBox='-10 -45 200 200'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g>
          <title>Spacer</title>
          <rect fillOpacity='0' height='200' paddingtop='5' width='200' />
        </g>
      </svg>
    </Fragment>
  );
}

Spacer.displayName = 'Spacer';

export default Spacer;
