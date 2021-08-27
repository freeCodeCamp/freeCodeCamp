import React from 'react';
import { useTranslation } from 'react-i18next';

function IntroInformation(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <span className='sr-only'>{t('icons.info')}</span>
      <svg
        height='50'
        viewBox='0 0 200 200'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g>
          <title>{t('icons.info')}</title>
          <circle
            cx='100'
            cy='99'
            fill='var(--primary-background)'
            r='95'
            stroke='var(--primary-color)'
            strokeDasharray='null'
            strokeWidth='10'
          />
          <circle
            cx='100'
            cy='99'
            fill='var(--primary-color)'
            r='45'
            stroke='var(--primary-color)'
            strokeDasharray='null'
            strokeWidth='10'
          />
        </g>
      </svg>
    </>
  );
}

IntroInformation.displayName = 'IntroInformation';

export default IntroInformation;
