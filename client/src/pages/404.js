import React from 'react';
import { Router } from '@reach/router';

import NotFoundPage from '../components/FourOhFour';
import RedirectNews from '../components/RedirectNews';
/* eslint-disable max-len */
import ShowProfileOrFourOhFour from '../client-only-routes/ShowProfileOrFourOhFour';
import ShowDynamicNewsOrFourOhFour from '../client-only-routes/ShowDynamicNewsOrFourOhFour';
/* eslint-enable max-len */

function FourOhFourPage() {
  return (
    <Router>
      <ShowProfileOrFourOhFour path='/:maybeUser' />
      <ShowDynamicNewsOrFourOhFour path='/news/:author/:articleSlug' />
      <RedirectNews path='/news/:author' />
      <NotFoundPage default={true} />
    </Router>
  );
}

FourOhFourPage.displayName = 'FourOhFourPage';

export default FourOhFourPage;
