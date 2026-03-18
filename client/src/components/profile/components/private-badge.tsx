import React from 'react';
import { useTranslation } from 'react-i18next';
import './private-badge.css';

export const PrivateBadge = (): JSX.Element => {
  const { t } = useTranslation();
  return <span className='private-badge'>{t('profile.private-badge')}</span>;
};
