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
            d='M24.8 36.3L35.3 29L44.3 42L35.5 41L33.4 49.3L24.8 36.3Z'
            fill='var(--secondary-color)'
          />
          <path
            d='M9.1 29L19.6 36.3L11 49.3L8.9 41L0.1 42L9.1 29Z'
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
