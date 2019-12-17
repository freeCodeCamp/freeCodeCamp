import React from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import { Spacer, FullWidthRow } from '../../components/helpers';
import YearEndDonationForm from './YearEndDonationForm';

const DonateText = () => {
  return (
    <Grid>
      <main>
        <Spacer />
        <FullWidthRow>
          <h1 className='text-center'>Become a Supporter</h1>
          <YearEndDonationForm />
        </FullWidthRow>
        <Spacer />
        <Spacer />
      </main>
    </Grid>
  );
};

DonateText.displayName = '';

export default DonateText;
