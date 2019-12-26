import React from 'react';
import Helmet from 'react-helmet';
import { Grid } from '@freecodecamp/react-bootstrap';
import ga from '../analytics';

import { Spacer, FullWidthRow } from '../components/helpers';
import YearEndDonationForm from '../components/YearEndGift/YearEndDonationForm';

function YearEndGiftPage() {
  const handleProcessing = (duration, amount) => {
    ga.event({
      category: 'donation',
      action: 'year-end-gift strip form submission',
      label: duration,
      value: amount
    });
  };
  return (
    <>
      <Helmet title='Support our nonprofit | freeCodeCamp.org' />
      <Grid>
        <main>
          <Spacer />
          <FullWidthRow>
            <YearEndDonationForm
              defaultTheme='light'
              handleProcessing={handleProcessing}
            />
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
