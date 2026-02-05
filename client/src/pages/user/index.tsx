import { Router } from '@gatsbyjs/reach-router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowUser from '../../client-only-routes/show-user';
import RedirectHome from '../../components/redirect-home';

function User(): JSX.Element {
  return (
    <Router basepath={withPrefix('/user')}>
      {/* @ts-expect-error Adding path property breaks username typing */}
      <ShowUser path='/:username/report-user' />
      <RedirectHome default />
    </Router>
  );
}

User.displayName = 'User';

export default User;
