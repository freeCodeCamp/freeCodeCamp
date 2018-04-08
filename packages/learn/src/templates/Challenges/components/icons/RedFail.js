import React from 'react';

const propTypes = {};

function RedFail() {
  return (
    <svg
      height='50'
      viewBox='0 0 200 200'
      width='50'
      xmlns='http://www.w3.org/2000/svg'
      >
      <g>
        <title>Test failed</title>
        <circle
          cx='100'
          cy='99'
          fill='#ff0000'
          r='95'
          stroke='#ff0000'
          strokeDasharray='null'
          strokeLinecap='null'
          strokeLinejoin='null'
        />
        <rect
          fill='#ffffff'
          height='30'
          stroke='#ffffff'
          strokeDasharray='null'
          strokeLinecap='null'
          strokeLinejoin='null'
          transform='rotate(-45, 100, 103.321)'
          width='128.85878'
          x='35'
          y='88'
        />
        <rect
          fill='#ffffff'
          height='30'
          stroke='#ffffff'
          strokeDasharray='null'
          strokeLinecap='null'
          strokeLinejoin='null'
          transform='rotate(45, 99.5, 104)'
          width='128.85878'
          x='35'
          y='88'
        />
      </g>
    </svg>
  );
}

RedFail.displayName = 'RedFail';
RedFail.propTypes = propTypes;

export default RedFail;
