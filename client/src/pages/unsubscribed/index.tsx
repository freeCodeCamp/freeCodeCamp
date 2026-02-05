import { Router } from '@gatsbyjs/reach-router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowUnsubscribed from '../../client-only-routes/show-unsubscribed';
import RedirectHome from '../../components/redirect-home';

function Unsubscribed(): JSX.Element {
  return (
    <Router basepath={withPrefix('/unsubscribed')}>
      <ShowUnsubscribed path='/:unsubscribeId' />
      <ShowUnsubscribed path='/' />
      <RedirectHome default />
    </Router>
  );
}

Unsubscribed.displayName = 'Unsubscribed';

export default Unsubscribed;
