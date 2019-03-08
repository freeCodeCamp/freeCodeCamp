import React, { Fragment } from 'react';

function GreenPass(props) {
  console.log(props);
  return (
    <Fragment>
      <span className='sr-only'>Passed</span>
      <svg
        height='50'
        viewBox='-10 -45 200 200'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g>
          <title>Spacer</title>
          <rect fillOpacity='0' height='200' paddingTop='5' width='200' />
        </g>
      </svg>
    </Fragment>
  );
}

GreenPass.displayName = 'GreenPass';

export default GreenPass;
