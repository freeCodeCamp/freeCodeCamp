import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Spacer } from '@freecodecamp/ui';

import createRedirect from '../components/create-redirect';
import { Loader } from '../components/helpers';
import EmailOptions from '../components/email-options';
import { acceptTerms } from '../redux/actions';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector
} from '../redux/selectors';
interface AcceptPrivacyTermsProps {
  acceptTerms: (accept: boolean | null) => void;
  acceptedPrivacyTerms: boolean;
  isSignedIn: boolean;
  showLoading: boolean;
  completedChallengeCount?: number;
}

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  signInLoadingSelector,
  (
    {
      acceptedPrivacyTerms,
      completedChallengeCount
    }: { acceptedPrivacyTerms: boolean; completedChallengeCount: number },
    isSignedIn: boolean,
    showLoading: boolean
  ) => ({
    acceptedPrivacyTerms,
    isSignedIn,
    showLoading,
    completedChallengeCount
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ acceptTerms }, dispatch);
const RedirectToLearn = createRedirect('/learn');

function AcceptPrivacyTerms({
  acceptTerms,
  acceptedPrivacyTerms,
  isSignedIn,
  showLoading,
  completedChallengeCount: _completedChallengeCount = 0
}: AcceptPrivacyTermsProps) {
  const { t } = useTranslation();
  const acceptedPrivacyRef = useRef(acceptedPrivacyTerms);
  const acceptTermsRef = useRef(acceptTerms);

  useEffect(() => {
    acceptedPrivacyRef.current = acceptedPrivacyTerms;
    acceptTermsRef.current = acceptTerms;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return acceptedPrivacyTerms ? (
    <RedirectToLearn />
  ) : (
    <>
      <Helmet>
        <title>{t('misc.email-signup')} | freeCodeCamp.org</title>
      </Helmet>
      <Container>
        <Spacer size='l' />
        {showLoading ? (
          <Loader fullScreen={true} />
        ) : (
          <EmailOptions
            isSignedIn={isSignedIn}
            acceptTerms={acceptTerms}
            isPage={true}
          />
        )}
      </Container>
      <Spacer size='l' />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptPrivacyTerms);
