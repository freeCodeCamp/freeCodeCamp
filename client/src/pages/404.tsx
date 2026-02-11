/* eslint-disable filenames-simple/naming-convention */
import React from 'react';
import { useTranslation } from 'react-i18next';

import FourOhFour from '../components/FourOhFour';

function FourOhFourPage(): JSX.Element {
  return <FourOhFour />;
}

FourOhFourPage.displayName = 'FourOhFourPage';

export default FourOhFourPage;

export function Head() {
  const { t } = useTranslation();
  return <title>{t('404.page-not-found')} | freeCodeCamp.org</title>;
}
