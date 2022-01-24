import React from 'react';

function DropDown(): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='389'
      height='254'
      viewBox='0 0 389 254'
      fill='none'
    >
      <path
        d='M194.5 0L388.5 254H307.5L194.5 99L78.5 254H0.5L194.5 0Z'
        style={{
          stroke: 'var(--primary-color)',
          fill: 'var(--primary-color)',
          strokeWidth: '1px'
        }}
      />
    </svg>
  );
}

DropDown.displayName = 'DropDown';

export default DropDown;
