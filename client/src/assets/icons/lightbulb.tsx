import React from 'react';
import { useTranslation } from 'react-i18next';

function LightBulb(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        {...props}
      >
        <g aria-hidden='true'>
          <title>{t('icons.hint')}</title>

          <path
            d='M25 48.5C38.1168 48.5 48.75 37.8668 48.75 24.75C48.75 11.6332 38.1168 1 25 1C11.8832 1 1.25 11.6332 1.25 24.75C1.25 37.8668 11.8832 48.5 25 48.5Z'
            fill='var(--primary-color)'
            stroke='var(--primary-color)'
            strokeWidth='0.25'
          />
          <path
            d='M31.3494 27.9901C33.0751 26.3241 35 24.4657 35 19.5C35 14 30.2467 10 25 10C19.7533 10 15 14 15 19.5C15 24.5098 16.6928 26.3561 18.2307 28.0335C19.4555 29.3695 20.0464 30.4781 20.1412 33.1128C23.0869 33.1553 26.0383 33.1713 28.9835 33.1128C28.9835 30.45 29.9475 29.3436 31.3494 27.9901Z'
            fill='var(--primary-background)'
          />
          <path
            d='M20.1247 35.2025H28.9835C28.9835 35.2025 28.7011 38.7811 28.4835 39.2025C28.1437 39.8603 26.9835 41.7025 24.5404 41.7025C21.4835 41.7025 20.8417 39.8603 20.4835 39.2025C20.254 38.7811 20.1247 35.2025 20.1247 35.2025Z'
            fill='var(--primary-background)'
          />
        </g>
      </svg>
    </>
  );
}

LightBulb.displayName = 'LightBulb';

export default LightBulb;
