import React from 'react';
import { useTranslation } from 'react-i18next';

import './empty-search.css';

function EmptySearch(): JSX.Element {
  const { t } = useTranslation();

  return <div className='empty-search-wrapper'>{t('search.try')}</div>;
}

EmptySearch.displayName = 'EmptySearch';

export default EmptySearch;
