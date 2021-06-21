import React from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

import FourOhFour from '../components/FourOhFour';
/* eslint-disable max-len */
import ShowProfileOrFourOhFour from '../client-only-routes/show-profile-or-four-oh-four';
/* eslint-enable max-len */

function FourOhFourPage() {
  return (
    <Router>
      <ShowProfileOrFourOhFour path={withPrefix('/:maybeUser')} />
      <FourOhFour default={true} />
    </Router>
  );
}

FourOhFourPage.displayName = 'FourOhFourPage';

export default FourOhFourPage;
