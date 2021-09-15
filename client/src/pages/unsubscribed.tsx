import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowUnsubscribed from '../client-only-routes/show-unsubscribed';
import RedirectHome from '../components/redirect-home';

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
