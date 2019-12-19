import React from 'react';
import Helmet from 'react-helmet';
import { Grid, Alert } from '@freecodecamp/react-bootstrap';

import { Spacer, FullWidthRow } from '../components/helpers';

import '../components/Donation/Donation.css';

function YearEndGiftPage() {
  return (
    <>
      <Helmet title='Support our nonprofit | freeCodeCamp.org' />
      <Grid>
        <main>
          <Spacer size={3} />
          <FullWidthRow>
            <Alert bsStyle='success' className='donation-completion'>
              <div>
                <h4>
                  <b>Thank you for your donation.</b>
                </h4>
                <p>You should receive a receipt in your email.</p>
              </div>
            </Alert>
          </FullWidthRow>
          <Spacer size={2} />
        </main>
      </Grid>
    </>
  );
}

YearEndGiftPage.displayName = 'YearEndGiftPage';

export default YearEndGiftPage;
