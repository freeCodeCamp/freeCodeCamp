import React from 'react';

interface RibbonProps {
  value: number;
  isClaimed: boolean;
  isCompleted: boolean;
}

export const Arrow = () => (
  <svg width={70} height={40} xmlns='http://www.w3.org/2000/svg'>
    <line
      x1={50}
      y1={0}
      x2={50}
      y2={35}
      stroke='black'
      strokeWidth={3}
      strokeDasharray='6,1.3'
      className='map-arrow-icon'
    />
    <rect
      x={36}
      y={35}
      width={15}
      height={2}
      fill='black'
      transform='rotate(45, 50, 36)'
      className='map-arrow-icon'
    />
    <rect
      x={49}
      y={35}
      width={15}
      height={2}
      fill='black'
      transform='rotate(-45, 50, 36)'
      className='map-arrow-icon'
    />
  </svg>
);

export const RibbonIcon = ({
  value,
  isCompleted: completed,
  isClaimed
}: RibbonProps): JSX.Element => {
  const properClassName = completed ? 'completeIcon' : 'incompleteIcon';
  const fillColor = completed ? 'black' : 'gray';
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='75%'
      height='75%'
      viewBox='0 0 45 50'
      fill='none'
      className={properClassName}
      aria-hidden='true'
    >
      {isClaimed && (
        <>
          <path
            d='M25 35.3418L35.4851 28L44.5957 41.0113L36.2658 39.7151L34.1106 48.353L25 35.3418Z'
            className='map-icon'
          />
          <path
            d='M9.11059 29L19.5957 36.3418L10.4851 49.353L8.85418 41.0821L-4.67677e-07 42.0113L9.11059 29Z'
            className='map-icon'
          />
        </>
      )}

      <circle cx={21.9999} cy={21} r={20} fill={fillColor} />
      <circle
        cx={22.5}
        cy={21}
        r={17.5}
        fill={fillColor}
        stroke='white'
        strokeWidth={2}
      />
      <text
        x='50%'
        y='50%'
        fontFamily='Verdana'
        color={fillColor}
        fontSize='1.0rem'
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
