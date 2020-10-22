import React from 'react';
import { Router } from '@reach/router';

import FourOhFour from '../components/FourOhFour';
/* eslint-disable max-len */
import ShowProfileOrFourOhFour from '../client-only-routes/ShowProfileOrFourOhFour';
/* eslint-enable max-len */

function FourOhFourPage() {
  return (
    <Router>
      <ShowProfileOrFourOhFour path='/:maybeUser' />
      <FourOhFour default={true} />
    </Router>
  );
}

FourOhFourPage.displayName = 'FourOhFourPage';

export default FourOhFourPage;
