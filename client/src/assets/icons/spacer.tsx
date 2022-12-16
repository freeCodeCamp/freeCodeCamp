import React from 'react';
import { useTranslation } from 'react-i18next';

interface SpacerPropTypes {
  style: Record<string, unknown>;
}

function Spacer(props: SpacerPropTypes): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <svg
        className='tick'
        aria-hidden='true'
        height='50'
        viewBox='-10 -45 200 200'
        width='50'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <g>
          <title>{t('icons.spacer')}</title>
          <rect fillOpacity='0' height='200' width='200' />
        </g>
      </svg>
    </>
  );
}

Spacer.displayName = 'Spacer';

export default Spacer;
