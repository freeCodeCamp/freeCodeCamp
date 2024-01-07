import React from 'react';
import { useTranslation } from 'react-i18next';

const InputReset = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <span className='sr-only'>{t('icons.input-reset')}</span>
      <svg
        className='ais-SearchBox-resetIcon'
        height='10'
        viewBox='0 0 20 20'
        width='10'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z'></path>
      </svg>
    </>
  );
};

InputReset.displayName = 'InputReset';
export default InputReset;
