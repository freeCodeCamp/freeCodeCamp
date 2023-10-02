import React from 'react';
import { useTranslation } from 'react-i18next';

interface GreenPassProps
  extends JSX.IntrinsicAttributes,
    React.SVGProps<SVGSVGElement> {
  hushScreenReaderText?: boolean;
}
function GreenPass(props: GreenPassProps): JSX.Element {
  const { t } = useTranslation();
  const { hushScreenReaderText = false, ...rest } = props;
  return (
    <>
      <svg
        {...(hushScreenReaderText && { 'aria-hidden': true })}
        {...(!hushScreenReaderText && { 'aria-label': t('icons.passed') })}
        height='15'
        viewBox='0 0 200 200'
        width='15'
        xmlns='http://www.w3.org/2000/svg'
        {...rest}
      >
        <g aria-hidden='true'>
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
