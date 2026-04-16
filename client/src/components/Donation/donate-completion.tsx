import React, { useEffect } from 'react'; import { useTranslation } from 'react-i18next'; import Spinner from 'react-spinkit'; import { Alert, Spacer } from '@freecodecamp/ui';

import { Link } from '../helpers';

type DonateCompletionProps = { error: string | null; processing: boolean; redirecting: boolean; reset: () => unknown; success: boolean; isSignedIn: boolean; };

export default function DonateCompletion({ processing, reset, success, redirecting, isSignedIn, error = null }: DonateCompletionProps): JSX.Element { const { t } = useTranslation();

const style = processing || redirecting ? 'info' : success ? 'success' : 'danger';

const heading = redirecting ? t('donate.redirecting') : processing ? t('donate.processing') : success ? t('donate.thank-you') : t('donate.error');

// Auto reset after success
   useEffect(() => { if (success) { const timer = setTimeout(() => reset(), 5000); return () => clearTimeout(timer); } }, [success, reset]);
// Debug logging    
  useEffect(() => { if (error) { console.error('Donation Error:', error); } }, [error]);
                                                                                                                                                     
return ( <div aria-live="polite" role="status"> <Alert type={style}> <h3>{heading}</h3>

{(processing || redirecting) && (
      <>
        <Spacer size='small' />
        <Spinner name="circle" fadeIn="none" />
      </>
    )}

    {success && (
      <>
        <Spacer size='small' />
        <p>{t('donate.success-message')}</p>

        {isSignedIn && (
          <>
            <Spacer size='small' />
            <Link to="/settings/donation-history">
              {t('donate.view-history')}
            </Link>
          </>
        )}
      </>
    )}

    {error && !processing && !redirecting && (
      <>
        <Spacer size='small' />
        <pre style={{ whiteSpace: 'pre-wrap' }}>{error}</pre>
        <Spacer size='small' />
        <button onClick={reset}>{t('donate.try-again')}</button>
      </>
    )}
  </Alert>
</div>

); }                >
                  {t('buttons.go-to-supporters')}
                </Link>
              </>
            )}
          </>
        )}
        {error && <p>{error}</p>}
      </div>
      <div className='donation-completion-buttons'>
        {error && (
          <button type='button' className='try-again-button' onClick={reset}>
            {t('buttons.try-again')}
          </button>
        )}
      </div>
    </Alert>
  );
}

DonateCompletion.displayName = 'DonateCompletion';

export default DonateCompletion;
