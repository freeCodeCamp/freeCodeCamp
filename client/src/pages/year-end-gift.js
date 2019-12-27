import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Grid } from '@freecodecamp/react-bootstrap';
import { connect } from 'react-redux';
import { reportGaEvent } from '../redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Spacer, FullWidthRow } from '../components/helpers';
import YearEndDonationForm from '../components/YearEndGift/YearEndDonationForm';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      reportGaEvent
    },
    dispatch
  );

const propTypes = {
  reportGaEvent: PropTypes.func
};

function YearEndGiftPage({ reportGaEvent }) {
  useEffect(() => {
    reportGaEvent({
      category: 'Donation',
      action: `Displayed year end gift page`,
      nonInteraction: true
    });
  }, [reportGaEvent]);
  const handleProcessing = (duration, amount) => {
    reportGaEvent({
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
YearEndGiftPage.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps
)(YearEndGiftPage);
