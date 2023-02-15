import React from 'react';
import { useTranslation } from 'react-i18next';

export const ShareTemplate = ({
  handleClick,
  isCopied
}: {
  handleClick: () => void;
  isCopied: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <button
      className='btn-block btn'
      data-testid='share-template'
      onClick={handleClick}
    >
      {isCopied ? (
        <span> {t('buttons.copied-succesfully')} </span>
      ) : (
        <span> {t('buttons.copy-link-to-share')} </span>
      )}
    </button>
  );
};
