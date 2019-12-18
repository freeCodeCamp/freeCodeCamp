import React from 'react';
import Helmet from 'react-helmet';
import { Grid } from '@freecodecamp/react-bootstrap';

import { Spacer, FullWidthRow } from '../components/helpers';
import YearEndDonationForm from '../components/YearEndGift/YearEndDonationForm';

function YearEndGiftPage() {
  return (
    <>
      <Helmet title='Support our nonprofit | freeCodeCamp.org' />
      <Grid>
        <main>
          <Spacer />
          <FullWidthRow>
            <YearEndDonationForm />
          </FullWidthRow>
          <Spacer />
          <Spacer />
        </main>
      </Grid>
    </>
  );
}

YearEndGiftPage.displayName = 'YearEndGiftPage';

export default YearEndGiftPage;
