import { useTranslation } from 'react-i18next';
import { Router } from '@gatsbyjs/reach-router';
import { withPrefix } from 'gatsby';
import PageHead from '../components/page-head';
import React from 'react';

import ShowUpdateEmail from '../client-only-routes/show-update-email';
import RedirectHome from '../components/redirect-home';

function UpdateEmail(): JSX.Element {
  return (
    <Router>
      <ShowUpdateEmail path={withPrefix('/update-email')} />

      <RedirectHome default />
    </Router>
  );
}

UpdateEmail.displayName = 'UpdateEmail';

export default UpdateEmail;

export function Head() {
  const { t } = useTranslation();
  return <PageHead title={`${t('misc.update-email-1')} | freeCodeCamp.org`} />;
}
