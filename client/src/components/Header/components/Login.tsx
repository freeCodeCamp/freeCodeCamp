import { Button } from '@freecodecamp/react-bootstrap';
import React from 'react';
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
