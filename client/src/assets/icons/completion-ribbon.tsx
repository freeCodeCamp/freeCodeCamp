import React from 'react';

interface RibbonProps {
  value: number;
}

const RibbonIcon = ({ value }: RibbonProps): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      viewBox='0 0 45 50'
      fill='none'
      aria-hidden='true'
    >
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

RibbonIcon.displayName = 'RibbonIcon';

export default RibbonIcon;
