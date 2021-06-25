import React from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

import RedirectHome from '../components/RedirectHome';
import ShowUnsubscribed from '../client-only-routes/show-unsubscribed';

function Unsubscribed() {
  return (
    <Router>
      <ShowUnsubscribed path={withPrefix('/unsubscribed/:unsubscribeId')} />
      <ShowUnsubscribed path={withPrefix('/unsubscribed')} />
      <RedirectHome default={true} />
    </Router>
  );
}

Unsubscribed.displayName = 'Unsubscribed';

export default Unsubscribed;
