import React from 'react';
import { Router } from '@reach/router';

import RedirectHome from '../components/RedirectHome';
import ShowSettings from '../client-only-routes/ShowSettings';

function Settings() {
  return (
    <Router>
      <ShowSettings path='/settings' />
      <RedirectHome default={true} />
    </Router>
  );
}

Settings.displayName = 'Settings';

export default Settings;
