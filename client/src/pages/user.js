import React from 'react';
import { Router } from '@reach/router';

import RedirectHome from '../components/RedirectHome';
import ShowUser from '../client-only-routes/ShowUser';

function User() {
  return (
    <Router>
      <ShowUser path='/user/:username/report-user' />
      <RedirectHome default={true} />
    </Router>
  );
}

User.displayName = 'User';

export default User;
