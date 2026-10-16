import React from 'react';

function OutlineLightbulb(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='5 2.5 14 20.2'
      width='1.31rem'
      height='1.4rem'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <path d='M12 3.5a6 6 0 0 0-3.86 10.59c.9.78 1.43 1.57 1.43 2.41v1h4.86v-1c0-.84.53-1.63 1.43-2.41A6 6 0 0 0 12 3.5z' />
      <path d='M9.75 17.5h4.5' />
      <path d='M9.8 19.3a2.2 2.2 0 0 0 4.4 0' />
    </svg>
  );
}

OutlineLightbulb.displayName = 'OutlineLightbulb';

export default OutlineLightbulb;
