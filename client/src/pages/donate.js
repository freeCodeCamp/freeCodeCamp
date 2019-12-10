import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid } from '@freecodecamp/react-bootstrap';

import { Spacer, FullWidthRow } from '../components/helpers';
import DonateText from '../components/Donation/components/DonateText';

function DonatePage() {
  return (
    <Fragment>
      <Helmet title='Support our nonprofit | freeCodeCamp.org' />
      <Grid>
        <main>
          <Spacer />
          <FullWidthRow>
            <h1 className='text-center'>Become a Supporter</h1>
            <DonateText />
          </FullWidthRow>
          <Spacer />
          <Spacer />
        </main>
      </Grid>
    </Fragment>
  );
}

DonatePage.displayName = 'DonatePage';

export default DonatePage;
