import React, { Fragment } from 'react';

function ToggleCheck(props) {
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
          <title>Passed</title>
          <rect
            fill='white'
            height='60'
            strokeDasharray='null'
            strokeLinecap='null'
            strokeLinejoin='null'
            transform='rotate(-45, 66.75, 123.75)'
            width='148.85878'
            x='65.57059'
            y='75.32089'
          />
          <rect
            fill='white'
            height='60'
            strokeDasharray='null'
            strokeLinecap='null'
            strokeLinejoin='null'
            transform='rotate(45, 66.75, 123.75)'
            width='120.66548'
            x='-42.41726'
            y='99.75'
          />
          <rect
            fill='black'
            height='30'
            strokeDasharray='null'
            strokeLinecap='null'
            strokeLinejoin='null'
            transform='rotate(-45, 66.75, 123.75)'
            width='128.85878'
            x='65.57059'
            y='92.32089'
          />
          <rect
            fill='black'
            height='30'
            strokeDasharray='null'
            strokeLinecap='null'
            strokeLinejoin='null'
            transform='rotate(-135, 66.75, 123.75)'
            width='88.85878'
            x='68.57059'
            y='103.32089'
          />
        </g>
      </svg>
    </Fragment>
  );
}

ToggleCheck.displayName = 'ToggleCheck';

export default ToggleCheck;
