import React from 'react';

import styles from './skeletonStyles';

function SkeletonSprite() {
  return (
    <div className='sprite-container'>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <svg className='sprite-svg'>
        <rect
          className='sprite'
          fill='#ccc'
          height='100%'
          stroke='#ccc'
          width='2px'
          x='0'
          y='0'
        />
      </svg>
    </div>
  );
}

SkeletonSprite.displayName = 'SkeletonSprite';

export default SkeletonSprite;
