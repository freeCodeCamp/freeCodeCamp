import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowUser from '../client-only-routes/show-user';
import RedirectHome from '../components/redirect-home';

function User(): JSX.Element {
  return (
    <Router>
      {/* @ts-expect-error Adding path property breaks username typing */}
      <ShowUser path={withPrefix('/user/:username/report-user')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

User.displayName = 'User';

export default User;
