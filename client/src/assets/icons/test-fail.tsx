import React from 'react';
import { useTranslation } from 'react-i18next';

function TestFail(
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
        <title>{t('icons.fail')}</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d={
            'M9.9999 19.6004C15.3018 19.6004 19.5999 15.3023 19.5999 10.0004C19.5999 4.69846 ' +
            '15.3018 0.400391 9.9999 0.400391C4.69797 0.400391 0.399902 4.69846 0.399902 ' +
            '10.0004C0.399902 15.3023 4.69797 19.6004 9.9999 19.6004ZM8.44843 6.75186C7.9798 ' +
            '6.28323 7.22 6.28323 6.75137 6.75186C6.28274 7.22049 6.28274 7.98029 6.75137 ' +
            '8.44892L8.30285 10.0004L6.75137 11.5519C6.28274 12.0205 6.28274 12.7803 6.75137 ' +
            '13.2489C7.22 13.7175 7.9798 13.7175 8.44843 13.2489L9.9999 11.6974L11.5514 ' +
            '13.2489C12.02 13.7175 12.7798 13.7175 13.2484 13.2489C13.7171 12.7803 13.7171 ' +
            '12.0205 13.2484 11.5519L11.697 10.0004L13.2484 8.44892C13.7171 7.98029 13.7171 ' +
            '7.22049 13.2484 6.75186C12.7798 6.28323 12.02 6.28323 11.5514 6.75186L9.9999 ' +
            '8.30333L8.44843 6.75186Z'
          }
          fill='#BE405E'
        />
      </g>
    </svg>
  );
}

TestFail.displayName = 'TestFail';

export default TestFail;
