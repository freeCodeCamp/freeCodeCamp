import React from 'react';
import { useTranslation } from 'react-i18next';

interface GreenNotCompletedProps
  extends JSX.IntrinsicAttributes,
    React.SVGProps<SVGSVGElement> {
  hushScreenReaderText?: boolean;
}

function GreenNotCompleted(props: GreenNotCompletedProps): JSX.Element {
  const { t } = useTranslation();
  const { hushScreenReaderText = false, ...rest } = props;
  return (
    <>
      {!hushScreenReaderText && (
        <span className='sr-only'>{t('icons.not-passed')}</span>
      )}
      <svg
        aria-hidden='true'
        height='15'
        viewBox='0 0 200 200'
        width='15'
        xmlns='http://www.w3.org/2000/svg'
        {...rest}
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
