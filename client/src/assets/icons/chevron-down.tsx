import React from 'react';
import { useTranslation } from 'react-i18next';

function ExternalLink(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg
      width='16'
      height='10'
      viewBox='0 0 16 10'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <title>{t('icons.chevron-down')}</title>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d={
          'M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L8 ' +
          '7.08579L14.2929 0.792893C14.6834 0.402369 15.3166 0.402369 15.7071 ' +
          '0.792893C16.0976 1.18342 16.0976 1.81658 15.7071 2.20711L8.70711 ' +
          '9.20711C8.31658 9.59763 7.68342 9.59763 7.29289 9.20711L0.292893 ' +
          '2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z'
        }
        fill='#137D60'
      />
    </svg>
  );
}

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;
