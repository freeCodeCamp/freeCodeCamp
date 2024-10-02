import React from 'react';
import { useTranslation } from 'react-i18next';

function RedFail(): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg
      height='50'
      viewBox='0 0 200 200'
      width='50'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <title>{t('icons.fail')}</title>
        <circle
          cx='100'
          cy='99'
          fill='var(--primary-color)'
          r='95'
          stroke='(var--primary-color)'
          strokeDasharray='null'
        />
        <rect
          fill='var(--primary-background)'
          height='30'
          stroke='var(--primary-background)'
          strokeDasharray='null'
          transform='rotate(-45, 100, 103.321)'
          width='128.85878'
          x='35'
          y='88'
        />
        <rect
          fill='var(--primary-background)'
          height='30'
          stroke='var(--primary-background)'
          strokeDasharray='null'
          transform='rotate(45, 99.5, 104)'
          width='128.85878'
          x='35'
          y='88'
        />
      </g>
    </svg>
  );
}

RedFail.displayName = 'RedFail';

export default RedFail;
