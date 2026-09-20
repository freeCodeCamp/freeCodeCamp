import React from 'react';

function Stars(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1.3rem'
      height='1.3rem'
      viewBox='0 0 15 15'
      fill='none'
      {...props}
    >
      <g clipPath='url(#clip0_2310_64)'>
        <path
          d='M9 3C10.1053 7.18421 10.8158 8.21053 15 9C10.7368 9.86842 10.1053 10.8158 9.1579 15C8.28947 10.7368 7.57895 10.0263 3 9C7.5 8.05263 7.97368 7.26316 9 3Z'
          fill='currentColor'
        />
        <path
          d='M3 0C3.55263 2.09211 3.90789 2.60526 6 3C3.86842 3.43421 3.55263 3.90789 3.07895 6C2.64474 3.86842 2.28947 3.51316 0 3C2.25 2.52632 2.48684 2.13158 3 0Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
}

Stars.displayName = 'Stars';

export default Stars;
