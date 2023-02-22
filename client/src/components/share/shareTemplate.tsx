import React from 'react';
import { useTranslation } from 'react-i18next';

export const ShareTemplate = ({ handleClick }: { handleClick: () => Promise<void> }) => {
  const { t } = useTranslation();
  return (
    <button
      className='btn-block btn'
      data-testid='share-template'
      onClick={handleClick}
    >
      <span> {t('buttons.copy-link-to-share')} </span>
    </button>
  );
};
