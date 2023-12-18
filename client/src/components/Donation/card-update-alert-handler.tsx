import { Alert, Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from 'react-spinkit';

type CardUpdateAlertHandlerProps = {
  error: string | null;
  redirecting: boolean;
  reset: () => void;
  success: boolean;
};

function CardUpdateAlertHandler({
  reset,
  success,
  redirecting,
  error = null
}: CardUpdateAlertHandlerProps): JSX.Element {
  const { t } = useTranslation();
  const style = redirecting ? 'info' : success ? 'success' : 'danger';

  const heading = redirecting
    ? `${t('donate.redirecting')}`
    : success
      ? `${t('donate.success-card-update')}`
      : `${t('donate.error-card-update')}`;

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
        {redirecting && (
          <Spinner
            className='user-state-spinner'
            color='#0a0a23'
            fadeIn='none'
            name='line-scale'
          />
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

CardUpdateAlertHandler.displayName = 'CardUpdateAlertHandler';

export default CardUpdateAlertHandler;
