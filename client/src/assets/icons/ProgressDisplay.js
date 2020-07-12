import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CHECK_MARK_PATH =
  'M 10 14 l -2 2 l 6 6 l 10 -10 l -2 -2 l -8 8 l -4 -4 z';

function generateArcPath(x, y, radius, angle) {
  /* eslint-disable */
  return [
    'M', x, y,
    'l', 0, -radius,
    'a',
      radius, radius,
      0, (angle <= Math.PI)?0:1, 1,
      radius * Math.sin(angle), radius * (1 - Math.cos(angle)),
    'z'
  ].join(' ');
  /* eslint-enable */
}

function ProgressDisplay(props) {
  const progress = props.progress;
  const title = `Progress: ${Math.round(progress * 100)}%`;

  return (
    <Fragment>
      <span className='sr-only'>{title}</span>
      <svg
        className='progress-display'
        height='32'
        viewBox='0 0 32 32'
        width='32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <title>{title}</title>
          <circle
            cx='16'
            cy='16'
            fill='var(--secondary-background)'
            r='14'
            stroke='var(--secondary-color)'
            strokeWidth='3'
          />
          <path
            d={
              progress < 1
                ? generateArcPath(16, 16, 10, progress * 2 * Math.PI)
                : CHECK_MARK_PATH
            }
            fill='var(--secondary-color)'
            stroke='null'
          />
        </g>
      </svg>
    </Fragment>
  );
}

ProgressDisplay.displayName = 'ProgressDisplay';
ProgressDisplay.propTypes = {
  progress: PropTypes.number
};

export default ProgressDisplay;
