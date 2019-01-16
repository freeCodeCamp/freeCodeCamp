import React from 'react';
import { Router } from '@reach/router';

import NotFoundPage from '../components/FourOhFour';
/* eslint-disable max-len */
import ShowProfileOrFourOhFour from '../client-only-routes/ShowProfileOrFourOhFour';
/* eslint-enable max-len */

function FourOhFourPage() {
  return (
    <Router>
      <ShowProfileOrFourOhFour path='/:maybeUser' />
      <NotFoundPage default={true} />
    </Router>
  );
}

FourOhFourPage.displayName = 'FourOhFourPage';

export default FourOhFourPage;
