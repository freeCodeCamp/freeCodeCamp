import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import envData from '../../../../config/env.json';
import { isSignedInSelector } from '../../../redux/selectors';
import callGA from '../../../analytics/call-ga';
import { challengeMetaSelector } from '../../../templates/Challenges/redux/selectors';
import type { ChallengeMeta } from '../../../redux/prop-types';
import { capturePreAuthState } from '../../../utils/pre-auth-redirect';

const { apiLocation, homeLocation } = envData;

const mapStateToProps = createSelector(
  isSignedInSelector,
  challengeMetaSelector,
  (isSignedIn, challengeMeta) => ({
    isSignedIn,
    challengeMeta
  })
);

interface LoginProps {
  block?: boolean;
  children?: ReactNode;
  'data-test-label'?: string;
  isSignedIn?: boolean;
  challengeMeta?: ChallengeMeta;
}

const Login = ({
  block,
  children,
  'data-test-label': dataTestLabel,
  isSignedIn,
  challengeMeta
}: LoginProps): JSX.Element => {
  const { t } = useTranslation();
  const href = isSignedIn ? `${homeLocation}/learn` : `${apiLocation}/signin`;
  const challengeSnapshot =
    challengeMeta && challengeMeta.id
      ? {
          id: challengeMeta.id,
          title: challengeMeta.title,
          block: challengeMeta.block,
          superBlock: challengeMeta.superBlock,
          challengeType: challengeMeta.challengeType,
          nextChallengePath: challengeMeta.nextChallengePath,
          prevChallengePath: challengeMeta.prevChallengePath
        }
      : undefined;
  return (
    <a
      className={(block ? 'btn-cta-big btn-block' : '') + ' signup-btn btn-cta'}
      data-test-label={dataTestLabel}
      data-playwright-test-label={
        dataTestLabel ? dataTestLabel : 'sign-in-button'
      }
      href={href}
      onClick={() => {
        if (!isSignedIn) {
          capturePreAuthState({
            reason: 'header-login',
            challenge: challengeSnapshot
          });
        }
        callGA({
          event: 'sign_in'
        });
      }}
    >
      <span className='login-btn-icon' aria-hidden='true'>
        <FontAwesomeIcon icon={faRightToBracket} />
      </span>
      <span className='login-btn-text'>{children || t('buttons.sign-in')}</span>
    </a>
  );
};

Login.displayName = 'Login';

export default connect(mapStateToProps)(Login);
