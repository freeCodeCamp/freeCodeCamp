import React from 'react';

interface RibbonProps {
  value: number;
  isClaimed: boolean;
  isCompleted: boolean;
}

export const Arrow = () => (
  <svg
    width='14'
    height='35'
    viewBox='0 0 14 35'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M7 0V30' stroke='var(--secondary-color)' strokeDasharray='6 1.3' />
    <path
      d='M7.71803 30.3038L1.57973 24.1655L0.87262 24.8726L7.01092 31.0109L7.71803 30.3038Z'
      fill='var(--secondary-color)'
    />
    <path
      d='M12.4658 24.12L6.29289 30.2929L7 31L13.1729 24.8271L12.4658 24.12Z'
      fill='var(--secondary-color)'
    />
  </svg>
);

export const RibbonIcon = ({
  value,
  isCompleted: completed,
  isClaimed
}: RibbonProps): JSX.Element => {
  const properClassName = completed ? 'completeIcon' : 'incompleteIcon';
  const textColor = completed
    ? 'var(--secondary-background)'
    : 'var(--secondary-color)';

  return (
    <svg
      width='45'
      height='51'
      viewBox='0 0 45 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={properClassName}
    >
      {isClaimed && (
        <>
          <path
            d='M25 35.3418L35.4851 28L44.5957 41.0113L36.2658 39.7151L34.1106 48.353L25 35.3418Z'
            fill='var(--secondary-color)'
          />
          <path
            d='M9.11059 29L19.5957 36.3418L10.4851 49.353L8.85418 41.0821L-4.67677e-07 42.0113L9.11059 29Z'
            fill='var(--secondary-color)'
          />
        </>
      )}

      <circle
        cx='22'
        cy='21'
        r='20'
        stroke='var(--secondary-color)'
        strokeWidth='3'
      />
      {completed && (
        <circle
          cx='22'
          cy='21'
          r='17.5'
          fill='var(--secondary-color)'
          stroke='var(--secondary-background)'
          strokeWidth='3'
        />
      )}
      <g>
        <text
          x='48%'
          y='55%'
          fontFamily='lato'
          color={textColor}
          fontSize='1.0rem'
          fill={textColor}
          textAnchor='middle'
        >
          {value}
        </text>
      </g>
    </svg>
  );
};

RibbonIcon.displayName = 'RibbonIcon';
