import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'react-bootstrap';
import Spinner from 'react-spinkit';

const propTypes = {
  close: PropTypes.func.isRequired,
  error: PropTypes.string,
  processing: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  success: PropTypes.bool
};

function DonateCompletion({ close, processing, reset, success, error = null }) {
  /* eslint-disable no-nested-ternary */
  const style = processing ? 'info' : success ? 'success' : 'danger';
  const heading = processing
    ? 'We are processing your donation'
    : success
      ? 'Donation successful. Thank you for supporting the freeCodeCamp ' +
        'community!'
      : 'Something went wrong with your donation';
  return (
    <Alert bsStyle={style}>
      <h4>{heading}</h4>
      <div id='donation-completion-body'>
        {processing && (
          <Spinner
            className='user-state-spinner'
            color='#006400'
            fadeIn='none'
            name='line-scale'
          />
        )}
        {error && error}
      </div>
      <p className='donation-completion-buttons'>
        {error && (
          <Fragment>
            <Button bsStyle='primary' onClick={reset}>
              Try again
            </Button>
            <span />
          </Fragment>
        )}
        {!processing && <Button onClick={close}>Close</Button>}
      </p>
    </Alert>
  );
}

DonateCompletion.displayName = 'DonateCompletion';
DonateCompletion.propTypes = propTypes;

export default DonateCompletion;
