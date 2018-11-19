import React from 'react';
import { Router } from '@reach/router';
/* eslint-disable max-len */
import ShowProfileOrFourOhFour from '../client-only-routes/ShowProfileOrFourOhFour';
import ShowDynamicNewsOrFourOhFour from '../client-only-routes/ShowDynamicNewsOrFourOhFour';
/* eslint-enable max-len */

function FourOhFourPage() {
  return (
    <Router>
      <ShowProfileOrFourOhFour path='/:maybeUser/:splat' />
      <ShowProfileOrFourOhFour path='/:maybeUser' />
      <ShowDynamicNewsOrFourOhFour path='/news/:author/' />
      <ShowDynamicNewsOrFourOhFour path='/news/:author/:articleSlug' />
      <ShowDynamicNewsOrFourOhFour path='/news/:author/:articleSlug/:splat' />
    </Router>
  );
}

FourOhFourPage.displayName = 'FourOhFourPage';

export default FourOhFourPage;
