import React from 'react';

interface RibbonProps {
  value: number;
}

const RibbonIcon = ({ value }: RibbonProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='45'
      height='50'
      viewBox='0 0 45 50'
      fill='none'
      aria-hidden='true'
    >
      <path
        d='M25 35.3418L35.4851 28L44.5957 41.0113L36.2658 39.7151L34.1106 48.353L25 35.3418Z'
        className='map-icon'
      />
      <path
        d='M9.11059 29L19.5957 36.3418L10.4851 49.353L8.85418 41.0821L-4.67677e-07 42.0113L9.11059 29Z'
        className='map-icon'
      />
      <circle cx='21.9999' cy='21' r='20' stroke='black' strokeWidth='2' />
      <circle
        cx='22.5'
        cy='21'
        r='17.5'
        fill='black'
        stroke='white'
        strokeWidth='3'
      />
      <text
        x='22.5'
        y='21'
        fontFamily='Verdana'
        color='black'
        fontSize='15'
        fill='#fff'
        textAnchor='middle'
        alignmentBaseline='central'
      >
        {value}
      </text>
    </svg>
  );
};

RibbonIcon.displayName = 'RibbonIcon';

export default RibbonIcon;
