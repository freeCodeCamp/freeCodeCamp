import React from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

import RedirectHome from '../components/RedirectHome';
import ShowSettings from '../client-only-routes/show-settings';

function Settings(): JSX.Element {
  return (
    <Router>
      <ShowSettings path={withPrefix('/settings')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Settings.displayName = 'Settings';

export default Settings;
