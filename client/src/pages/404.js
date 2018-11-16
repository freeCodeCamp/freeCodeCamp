import React from 'react';
import { Router } from '@reach/router';
// eslint-disable-next-line  max-len
import ShowProfileOrFourOhFour from '../client-only-routes/ShowProfileOrFourOhFour';

function FourOhFourPage() {
  return (
    <Router>
      <ShowProfileOrFourOhFour path='/:maybeUser/:splat' />
      <ShowProfileOrFourOhFour path='/:maybeUser' />
    </Router>
  );
}

FourOhFourPage.displayName = 'FourOhFourPage';

export default FourOhFourPage;
