import { useTranslation } from 'react-i18next';
/* oxlint-disable filenames-simple/naming-convention */
import PageHead from '../components/page-head';
import React from 'react';

import FourOhFour from '../components/FourOhFour';

function FourOhFourPage(): JSX.Element {
  return <FourOhFour />;
}

FourOhFourPage.displayName = 'FourOhFourPage';

export default FourOhFourPage;

export function Head() {
  const { t } = useTranslation();
  return <PageHead title={`${t('404.page-not-found')} | freeCodeCamp.org`} />;
}
