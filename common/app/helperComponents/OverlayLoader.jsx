import React from 'react';
import PropTypes from 'prop-types';

import styles from './overlayLoader-styles';

function LoaderCircle({ delay, origin }, i) {
  return (
    <circle
      className='innerCircle'
      cx='50%'
      cy='50%'
      fill='transparent'
      key={ i }
      r='5%'
      stroke='#006400'
      strokeWidth='3'
      style={{ animationDelay: '' + delay, transformOrigin: '' + origin }}
    />
  );
}

LoaderCircle.propTypes = {
  delay: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired
};
LoaderCircle.displayName = 'LoaderCircle';

const animationProps = [
  {
    delay: '-1.5s',
    origin: '1% 1%'
  },
  {
    delay: '-1s',
    origin: '1% 99%'
  },
  {
    delay: '-0.5s',
    origin: '99% 1%'
  },
  {
    delay: '0s',
    origin: '99% 99%'
  }
];

function OverlayLoader() {
  return (
    <div className='svg-container'>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      <svg className='svg' height='100%' width='100%'>
        {
          animationProps.map(LoaderCircle)
        }
      </svg>
    </div>
  );
}

OverlayLoader.displayName = 'OverlayLoader';

export default OverlayLoader;
