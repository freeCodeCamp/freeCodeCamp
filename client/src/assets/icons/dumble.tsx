import React from 'react';
function DumbleIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='62'
      height='55'
      viewBox='0 0 62 42'
      fill='none'
      {...props}
    >
      <rect y='17.2132' width='61.5396' height='7.69244' fill='#d0d0d5' />
      <rect
        x='12.8208'
        y='0.973633'
        width='8.54716'
        height='41.0264'
        fill='#d0d0d5'
      />
      <rect
        x='39.3169'
        y='0.973633'
        width='8.54716'
        height='41.0264'
        fill='#d0d0d5'
      />
      <rect
        x='4.14014'
        y='5.84572'
        width='8.77419'
        height='31.2822'
        fill='#d0d0d5'
      />
      <rect
        x='47.0361'
        y='5.84572'
        width='8.77419'
        height='31.2822'
        fill='#d0d0d5'
      />
    </svg>
  );
}

DumbleIcon.displayName = 'DumbleIcon';

export default DumbleIcon;
