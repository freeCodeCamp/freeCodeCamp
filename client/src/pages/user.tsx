import React from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

import RedirectHome from '../components/RedirectHome';
import ShowUser from '../client-only-routes/show-user';

function User(): JSX.Element {
  return (
    <Router>
      <ShowUser path={withPrefix('/user/:username/report-user')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

User.displayName = 'User';

export default User;
