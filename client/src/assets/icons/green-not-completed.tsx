import React from 'react';
import { useTranslation } from 'react-i18next';

function GreenNotCompleted(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const suppressSrOnly = props['data-suppress-sronly'];
  return (
    <>
      {suppressSrOnly !== 'true' && (
        <span className='sr-only'>{t('icons.not-passed')}</span>
      )}
      <svg
        aria-hidden='true'
        height='50'
        viewBox='0 0 200 200'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g>
          <title>{t('icons.not-passed')}</title>
          <circle
            cx='100'
            cy='99'
            fill='var(--primary-background)'
            r='95'
            stroke='var(--primary-color)'
            strokeDasharray='null'
            strokeWidth='10'
          />
        </g>
      </svg>
    </>
  );
}

GreenNotCompleted.displayName = 'GreenNotCompleted';

export default GreenNotCompleted;
