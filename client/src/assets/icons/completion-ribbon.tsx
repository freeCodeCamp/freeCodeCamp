import React from 'react';

interface RibbonProps {
  value: number;
}

export const Arrow = () => (
  <svg
    className='arrow'
    width='30'
    height='30'
    viewBox='0 0 50 50'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M25 50L0 0H50z' fill='black' transform='rotate(180deg)' />
  </svg>
);

export const RibbonIcon = ({ value }: RibbonProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='75%'
      height='75%'
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
      <circle cx='21.9999' cy='21' r='20' fill='black' />
      <circle
        cx='22.5'
        cy='21'
        r='17.5'
        fill='black'
        stroke='white'
        strokeWidth='2'
      />
      <text
        x='48%'
        y='57%'
        fontFamily='Verdana'
        color='black'
        fontSize='1.3rem'
        fill='#fff'
        textAnchor='middle'
        alignmentBaseline='central'
      >
        {value}
      </text>
    </svg>
  );
};

export const IncompleteIcon = ({ value }: RibbonProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='75%'
      height='75%'
      viewBox='0 0 45 50'
      fill='none'
      aria-hidden='true'
    >
      <circle cx='21.9999' cy='21' r='20' fill='grey' />
      <circle
        cx='22.5'
        cy='21'
        r='17.5'
        fill='grey'
        stroke='white'
        strokeWidth='2'
      />
      <text
        x='48%'
        y='57%'
        fontFamily='Verdana'
        color='black'
        fontSize='1.3rem'
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

IncompleteIcon.displayName = 'IncompleteIcon';
