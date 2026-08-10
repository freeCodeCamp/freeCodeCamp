import React from 'react';

function RosettaCodeIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      height='16'
      width='14'
      viewBox='0 0 448 512'
      {...props}
    >
      <path d='M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM176 432h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z' />
    </svg>
  );
}

RosettaCodeIcon.displayName = 'RosettaCodeIcon';

export default RosettaCodeIcon;
