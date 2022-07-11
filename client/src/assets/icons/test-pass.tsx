import React from 'react';
import { useTranslation } from 'react-i18next';

function TestPass(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g>
        <title>{t('icons.passed')}</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d={
            'M9.9999 19.6004C15.3018 19.6004 19.5999 15.3023 19.5999 10.0004C19.5999 4.69846 ' +
            '15.3018 0.400391 9.9999 0.400391C4.69797 0.400391 0.399902 4.69846 0.399902 ' +
            '10.0004C0.399902 15.3023 4.69797 19.6004 9.9999 19.6004ZM14.4484 8.44892C14.9171 ' +
            '7.98029 14.9171 7.22049 14.4484 6.75186C13.9798 6.28323 13.22 6.28323 12.7514 ' +
            '6.75186L8.7999 10.7033L7.24843 9.15186C6.7798 8.68323 6.02 8.68323 5.55137 ' +
            '9.15186C5.08274 9.62049 5.08274 10.3803 5.55137 10.8489L7.95137 13.2489C8.42 ' +
            '13.7175 9.1798 13.7175 9.64843 13.2489L14.4484 8.44892Z'
          }
          fill='#137D60'
        />
      </g>
    </svg>
  );
}

TestPass.displayName = 'TestPass';

export default TestPass;
