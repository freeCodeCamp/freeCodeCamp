import React from 'react';
import { Alert, Button } from '@freecodecamp/react-bootstrap';
import Spinner from 'react-spinkit';
import { useTranslation } from 'react-i18next';

import './Donation.css';

type DonatateCompletionProps = {
  error: string | null;
  processing: boolean;
  redirecting: boolean;
  reset: () => void;
  success: boolean;
};

function DonateCompletion({
  processing,
  reset,
  success,
  redirecting,
  error = null
}: DonatateCompletionProps): JSX.Element {
  /* eslint-disable no-nested-ternary */
  const { t } = useTranslation();
  const style: string =
    processing || redirecting ? 'info' : success ? 'success' : 'danger';
  const heading: string = redirecting
    ? `${t('donate.redirecting')}`
    : processing
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
            <Button bsStyle='primary' onClick={reset}>
              {t('buttons.try-again')}
            </Button>
          </div>
        )}
      </div>
    </Alert>
  );
}

export default DonateCompletion;
