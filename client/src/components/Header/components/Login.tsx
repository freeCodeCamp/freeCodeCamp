import { Button } from '@freecodecamp/react-bootstrap';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import envData from '../../../../../config/env.json';
import { isSignedInSelector } from '../../../redux';

const { apiLocation, homeLocation } = envData;

const mapStateToProps = createSelector(isSignedInSelector, isSignedIn => ({
  isSignedIn
}));

export interface LoginProps {
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
    <Button
      bsStyle='default'
      className={(block ? 'btn-cta-big btn-block' : '') + ' signup-btn btn-cta'}
      data-test-label={dataTestLabel}
      href={href}
    >
      <span className='login-btn-icon'>
        <svg viewBox='0 -100 500 500' xmlns='http://www.w3.org/2000/svg'>
          <path d='M168,126v-96a20,20 0 01 34-12l177,177a20,20 0 01 0,27l-177,177a20,20 0 01-34-12v-96h-146a20,20 0 01-20-20v-125a20,20 0 01 21-20z' />
          <path d='M290,10a10,10 0 01 10-10h100a100,100 0 01 100,100v215a100,100 0 01-100,100h-100a10,10 0 01-10-10v-20a10,10 0 01 10-10h105a55,55 0 00 55-55v-225a55,55 0 00-55-55h-105a10,10 0 01-10-10z' />
        </svg>
      </span>
      <span className='login-btn-text'>{children || t('buttons.sign-in')}</span>
    </Button>
  );
};

Login.displayName = 'Login';

export default connect(mapStateToProps)(Login);
