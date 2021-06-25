import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

function Spacer(props: unknown): JSX.Element {
  const { t } = useTranslation();

  const svgStyle = {
    paddingTop: '5'
  };

  return (
    <Fragment>
      <span className='sr-only'>{t('icons.spacer')}</span>
      <svg
        className='tick'
        height='50'
        style={svgStyle}
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
    </Fragment>
  );
}

Spacer.displayName = 'Spacer';

export default Spacer;
