/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Button } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import { isSignedInSelector } from '../../../redux';
import envData from '../../../../../config/env.json';

import './login.css';

const { apiLocation, homeLocation } = envData;

const mapStateToProps = createSelector(isSignedInSelector, isSignedIn => ({
  isSignedIn
}));

export interface LoginProps {
  block?: boolean;
  children?: unknown;
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
      {children || t('buttons.sign-in')}
    </Button>
  );
};

Login.displayName = 'Login';

export default connect(mapStateToProps)(Login);
