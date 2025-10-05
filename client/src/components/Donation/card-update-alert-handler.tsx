import React from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from 'react-spinkit';
import { Alert } from '@freecodecamp/ui';

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

  const message = redirecting
    ? `${t('donate.redirecting')}`
    : success
      ? `${t('donate.success-card-update')}`
      : `${t('donate.error-card-update')}`;

  return (
    <Alert variant={style} className='donation-completion'>
      <p>{message}</p>
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
            <button type='button' className='try-again-button' onClick={reset}>
              {t('buttons.try-again')}
            </button>
          </div>
        )}
      </div>
    </Alert>
  );
}

CardUpdateAlertHandler.displayName = 'CardUpdateAlertHandler';

export default CardUpdateAlertHandler;
