import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from '@freecodecamp/react-bootstrap';
import Spinner from 'react-spinkit';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import './Donation.css';

const propTypes = {
  error: PropTypes.string,
  processing: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  success: PropTypes.bool
};

function DonateCompletion({ processing, reset, success, error = null }) {
  /* eslint-disable no-nested-ternary */
  const { t } = useTranslation();
  const style = processing ? 'info' : success ? 'success' : 'danger';
  const heading = processing
    ? `${t('donate.processing')}`
    : success
    ? `${t('donate.thank-you')}`
    : `${t('donate.error')}`;
  return (
    <Alert bsStyle={style} className='donation-completion'>
      <h4>
        <b>{heading}</b>
      </h4>
      <div className='donation-completion-body'>
        {processing && (
          <Spinner
            className='user-state-spinner'
            color='#0a0a23'
            fadeIn='none'
            name='line-scale'
          />
        )}
        {success && (
          <div>
            <p>
              <Trans>donate.free-tech</Trans>
            </p>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
      <div className='donation-completion-buttons'>
        {error && (
          <div>
            <Button bsStyle='primary' onClick={reset}>
              <Trans>buttons.try-again</Trans>
            </Button>
          </div>
        )}
      </div>
    </Alert>
  );
}

DonateCompletion.displayName = 'DonateCompletion';
DonateCompletion.propTypes = propTypes;

export default DonateCompletion;
