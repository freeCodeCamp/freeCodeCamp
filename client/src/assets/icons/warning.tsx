import React from 'react';
import { useTranslation } from 'react-i18next';

function Warning(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg
      width='10'
      height='9'
      viewBox='0 0 10 9'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <title>{t('icons.fail')}</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d={
            'M3.95423 0.859306C4.413 0.0437243 5.58725 0.0437239 6.04602 ' +
            '0.859306L9.3942 6.81163C9.84416 7.61155 9.2661 8.59994 8.34831 ' +
            '8.59994H1.65194C0.734151 8.59994 0.156094 7.61156 0.606052 ' +
            '6.81163L3.95423 0.859306ZM5.60007 6.80001C5.60007 7.13138 5.33144 ' +
            '7.40001 5.00007 7.40001C4.6687 7.40001 4.40007 7.13138 4.40007 ' +
            '6.80001C4.40007 6.46864 4.6687 6.20001 5.00007 6.20001C5.33144 ' +
            '6.20001 5.60007 6.46864 5.60007 6.80001ZM5.00007 2.00001C4.6687 ' +
            '2.00001 4.40007 2.26864 4.40007 2.60001V4.40001C4.40007 4.73138 ' +
            '4.6687 5.00001 5.00007 5.00001C5.33144 5.00001 5.60007 4.73138 ' +
            '5.60007 4.40001V2.60001C5.60007 2.26864 5.33144 2.00001 5.00007 ' +
            '2.00001Z'
          }
          fill='currentColor'
        />
      </g>
    </svg>
  );
}

Warning.displayName = 'Warning';

export default Warning;
