import React, { Fragment } from 'react';

const propTypes = {};

function Heart(props) {
  return (
    <Fragment>
      <span className='sr-only'>Heart</span>
      <svg
        height={184}
        version='1.1'
        viewBox='0 0 200 184'
        width={200}
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g fill='none' fillRule='evenodd'>
          <g fill='var(--love-color)'>
            <ellipse cx='140.5' cy={59} id='a' rx='59.5' ry={59} />
            <circle cx={59} cy={59} r={59} />
            <rect
              height={118}
              transform='translate(100 100) rotate(-45) translate(-100 -100)'
              width={118}
              x={41}
              y={41}
            />
          </g>
        </g>
      </svg>
    </Fragment>
  );
}

Heart.displayName = 'Heart';
Heart.propTypes = propTypes;

export default Heart;
