import { Alert, Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from 'react-spinkit';

type DonateCompletionProps = {
  error: string | null;
  processing: boolean;
  redirecting: boolean;
  reset: () => unknown;
  success: boolean;
  isSignedIn: boolean;
};

function DonateCompletion({
  processing,
  reset,
  success,
  redirecting,
  isSignedIn,
  error = null
}: DonateCompletionProps): JSX.Element {
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
    <Alert
      bsStyle={style}
      className='donation-completion'
      closeLabel={t('buttons.close')}
    >
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
            {isSignedIn && <p>{t('donate.no-halo')}</p>}
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

DonateCompletion.displayName = 'DonateCompletion';

export default DonateCompletion;
