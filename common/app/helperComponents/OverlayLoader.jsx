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
    delay: '0.24s',
    origin: '0% 0%'
  },
  {
    delay: '0.95s',
    origin: '0% 100%'
  },
  {
    delay: '0.67s',
    origin: '100% 0%'
  },
  {
    delay: '1.33s',
    origin: '100% 100%'
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
