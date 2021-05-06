import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';
import Spinner from 'react-spinkit';
import { useTranslation } from 'react-i18next';

import './Donation.css';

const propTypes = {
  error: PropTypes.string,
  processing: PropTypes.bool,
  redirecting: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  success: PropTypes.bool
};

function DonateCompletion({
  processing,
  reset,
  success,
  redirecting,
  error = null
}) {
  /* eslint-disable no-nested-ternary */
  const { t } = useTranslation();
  const style =
    processing || redirecting ? 'info' : success ? 'success' : 'danger';
  const heading = redirecting
    ? `${t('donate.redirecting')}`
    : processing
    ? `${t('donate.processing')}`
    : success
    ? `${t('donate.thank-you')}`
    : `${t('donate.error')}`;
  return (
    <Alert className='donation-completion' variant={style}>
      <h4>
        <b>{heading}</b>
      </h4>
      <div className='donation-completion-body'>
        {(processing || redirecting) && (
          <Spinner
            className='user-state-spinner'
            color='#0a0a23'
            fadeIn='none'
            name='line-scale'
          />
        )}
        {success && (
          <div>
            <p>{t('donate.free-tech')}</p>
            <p>{t('donate.no-halo')}</p>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
      <div className='donation-completion-buttons'>
        {error && (
          <div>
            <Button onClick={reset} variant='primary'>
              {t('buttons.try-again')}
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
