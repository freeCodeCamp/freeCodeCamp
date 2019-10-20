import React, { Fragment } from 'react';

const propTypes = {};

function GreenNotCompleted(props) {
  return (
    <Fragment>
      <span className='sr-only'>Not Passed</span>
      <svg
        height='50'
        viewBox='0 0 200 200'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g>
          <title>Not Passed</title>
          <circle
            cx='100'
            cy='99'
            fill='var(--primary-background)'
            r='95'
            stroke='var(--primary-color)'
            strokeDasharray='null'
            strokeLinecap='null'
            strokeLinejoin='null'
            strokeWidth='10'
          />
        </g>
      </svg>
    </Fragment>
  );
}

GreenNotCompleted.displayName = 'GreenNotCompleted';
GreenNotCompleted.propTypes = propTypes;

export default GreenNotCompleted;
