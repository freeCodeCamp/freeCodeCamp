import React from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

import RedirectHome from '../components/RedirectHome';
import ShowSettings from '../client-only-routes/show-settings';

function Settings() {
  return (
    <Router>
      <ShowSettings path={withPrefix('/settings')} />
      <RedirectHome default={true} />
    </Router>
  );
}

Settings.displayName = 'Settings';

export default Settings;
