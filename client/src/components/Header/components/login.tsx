import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import envData from '../../../../config/env.json';
import { isSignedInSelector } from '../../../redux/selectors';
import callGA from '../../../analytics/call-ga';

const { apiLocation, homeLocation } = envData;

const mapStateToProps = createSelector(isSignedInSelector, isSignedIn => ({
  isSignedIn
}));

interface LoginProps {
  block?: boolean;
  children?: ReactNode;
  'data-test-label'?: string;
  isSignedIn?: boolean;
}

const Login = ({
  block,
  children,
  'data-test-label': dataTestLabel,
  isSignedIn
}: LoginProps): JSX.Element => {
  const { t } = useTranslation();

  const href = isSignedIn ? `${homeLocation}/learn` : `${apiLocation}/signin`;
  return (
    <a
      className={(block ? 'btn-cta-big btn-block' : '') + ' signup-btn btn-cta'}
      data-test-label={dataTestLabel}
      data-playwright-test-label='header-sign-in-button'
      href={href}
      onClick={() => {
        callGA({
          event: 'sign_in'
        });
      }}
    >
      <span className='login-btn-icon'>
        <FontAwesomeIcon icon={faRightToBracket} />
        <span className='sr-only'> {t('buttons.sign-in')}</span>
      </span>
      <span className='login-btn-text'>{children || t('buttons.sign-in')}</span>
    </a>
  );
};

Login.displayName = 'Login';

export default connect(mapStateToProps)(Login);
