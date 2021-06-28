import React from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

import RedirectHome from '../components/redirect-home';
import ShowUnsubscribed from '../client-only-routes/show-unsubscribed';

function Unsubscribed(): JSX.Element {
  return (
    <Router>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ShowUnsubscribed path={withPrefix('/unsubscribed/:unsubscribeId')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ShowUnsubscribed path={withPrefix('/unsubscribed')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Unsubscribed.displayName = 'Unsubscribed';

export default Unsubscribed;
