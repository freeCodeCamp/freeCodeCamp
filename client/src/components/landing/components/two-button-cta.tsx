import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import envData from '../../../../config/env.json';
import { isSignedInSelector } from '../../../redux/selectors';
import callGA from '../../../analytics/call-ga';

const { apiLocation, homeLocation } = envData as {
  apiLocation: string;
  homeLocation: string;
};

interface TwoButtonCTAProps {
  isSignedIn?: boolean;
}

const TwoButtonCTA = ({ isSignedIn }: TwoButtonCTAProps): JSX.Element => {
  const { t } = useTranslation();

  const handleGoogleClick = () => callGA({ event: 'sign_in' });
  const handleMoreWaysClick = () => callGA({ event: 'sign_in' });

  const googleHref = isSignedIn
    ? `${homeLocation}/learn`
    : `${apiLocation}/signin/google`;
  const moreWaysHref = isSignedIn
    ? `${homeLocation}/learn`
    : `${apiLocation}/signin`;

  return (
    <div className='two-button-cta'>
      <a
        className='signup-btn btn btn-sm btn-block google-btn'
        data-test-label='landing-google-cta'
        data-playwright-test-label='landing-google-cta'
        href={googleHref}
        onClick={handleGoogleClick}
      >
        <span className='google-btn-icon' aria-hidden='true'>
          {/* Google "G" logo box per brand guidelines */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 48 48'
            width='18'
            height='18'
          >
            <path
              fill='#EA4335'
              d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.91-6.91C35.9 2.3 30.37 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.9 6.91C13.42 14.83 18.27 9.5 24 9.5z'
            />
            <path
              fill='#4285F4'
              d='M46.5 24c0-1.64-.15-3.2-.44-4.71H24v8.92h12.65c-.55 2.96-2.2 5.47-4.71 7.17l7.23 5.61C43.9 36.78 46.5 30.86 46.5 24z'
            />
            <path
              fill='#FBBC05'
              d='M11.46 28.13A14.5 14.5 0 0 1 10.5 24c0-1.46.25-2.87.7-4.19l-8.9-6.91A23.93 23.93 0 0 0 0 24c0 3.91.94 7.6 2.6 10.86l8.86-6.73z'
            />
            <path
              fill='#34A853'
              d='M24 48c6.48 0 11.93-2.14 15.9-5.86l-7.23-5.61c-2 1.35-4.62 2.13-8.67 2.13-5.73 0-10.58-5.33-12.53-10.63l-8.9 6.91C6.51 42.62 14.62 48 24 48z'
            />
            <path fill='none' d='M0 0h48v48H0z' />
          </svg>
        </span>
        <span>{t('buttons.sign-in-with-google')}</span>
      </a>

      <div className='cta-divider' role='separator' aria-label='or'>
        <span className='cta-divider-line' />
        <span>{t('misc.or')}</span>
        <span className='cta-divider-line' />
      </div>

      <a
        className='signup-btn btn btn-sm btn-block more-ways-btn'
        data-test-label='landing-more-ways-cta'
        data-playwright-test-label='landing-more-ways-cta'
        href={moreWaysHref}
        onClick={handleMoreWaysClick}
      >
        <span className='login-btn-text'>
          {t('buttons.more-ways-to-sign-in')}
        </span>
      </a>
    </div>
  );
};

TwoButtonCTA.displayName = 'TwoButtonCTA';

const mapStateToProps = createSelector(isSignedInSelector, isSignedIn => ({
  isSignedIn
}));

export default connect(mapStateToProps)(TwoButtonCTA);
