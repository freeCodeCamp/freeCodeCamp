import React from 'react';

interface RibbonProps {
  value: number;
  isClaimed: boolean;
  isCompleted: boolean;
  showNumbers?: boolean;
}

export const RibbonIcon = ({
  value,
  isCompleted: completed,
  showNumbers = false,
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
        fill='var(--secondary-background)'
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
      {showNumbers && (
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
      )}
    </svg>
  );
};

RibbonIcon.displayName = 'RibbonIcon';
