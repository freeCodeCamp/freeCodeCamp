import React from 'react';
import { Router } from '@reach/router';

import RedirectHome from '../components/RedirectHome';
import ShowUnsubscribed from '../client-only-routes/ShowUnsubscribed';

function Unsubscribed() {
  return (
    <Router>
      <ShowUnsubscribed path='/unsubscribed/:unsubscribeId' />
      <ShowUnsubscribed path='/unsubscribed' />
      <RedirectHome default={true} />
    </Router>
  );
}

Unsubscribed.displayName = 'Unsubscribed';

export default Unsubscribed;
