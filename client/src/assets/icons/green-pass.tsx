import React from 'react';
import { useTranslation } from 'react-i18next';

function GreenPass(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <span className='sr-only'>{t('icons.passed')}</span>
      <svg
        height='50'
        viewBox='0 0 200 200'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g>
          <title>{t('icons.passed')}</title>
          <circle
            cx='100'
            cy='99'
            fill='var(--primary-color)'
            r='95'
            stroke='var(--primary-color)'
            strokeDasharray='null'
          />
          <rect
            fill='var(--primary-background)'
            height='30'
            stroke='var(--primary-background)'
            strokeDasharray='null'
            transform='rotate(-45, 120, 106.321)'
            width='128.85878'
            x='55.57059'
            y='91.32089'
          />
          <rect
            fill='var(--primary-background)'
            height='30'
            stroke='var(--primary-background)'
            strokeDasharray='null'
            transform='rotate(45, 66.75, 123.75)'
            width='80.66548'
            x='26.41726'
            y='108.75'
          />
        </g>
      </svg>
    </>
  );
}

GreenPass.displayName = 'GreenPass';

export default GreenPass;
