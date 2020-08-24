import React from 'react';

export default function LinkButton(props) {
  return (
    <svg
      aria-hidden='true'
      height='20px'
      version='1.1'
      viewBox='0 0 16 20'
      width='18px'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
      fill='inherit'
    >
      <g>
        <polygon
          points={
            '-2.68014473e-15 -1.06357708e-13 2.01917516 ' +
            '-1.06357708e-13 8.99824941 9.00746464 2.01917516 ' +
            '18.0149293 -2.66453526e-15 18.0149293 7.00955027 9'
          }
        />
        <polygon
          points={
            '7.99971435 -1.06357708e-13 10.0188895 ' +
            '-1.06357708e-13 16.9979638 9.00746464 ' +
            '10.0188895 18.0149293 7.99971435 18.0149293 15.0092646 9'
          }
        />
      </g>
    </svg>
  );
}
