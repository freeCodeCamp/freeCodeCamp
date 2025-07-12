import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container } from '@freecodecamp/ui';
import EmailOptions from '../email-options';
import { acceptTerms } from '../../redux/actions';
import { userSelector, isSignedInSelector } from '../../redux/selectors';

interface EmailSignUpAlertProps {
  acceptTerms: (accept: boolean | null) => void;
  acceptedPrivacyTerms: boolean;
  isSignedIn: boolean;
  completedChallengeCount?: number;
}

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  (
    {
      acceptedPrivacyTerms,
      completedChallengeCount
    }: { acceptedPrivacyTerms: boolean; completedChallengeCount: number },
    isSignedIn: boolean
  ) => ({
    acceptedPrivacyTerms,
    isSignedIn,
    completedChallengeCount
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ acceptTerms }, dispatch);

function EmailSignUpAlert({
  acceptTerms,
  acceptedPrivacyTerms,
  isSignedIn,
  completedChallengeCount = 0
}: EmailSignUpAlertProps) {
  const newAccount = isSignedIn && completedChallengeCount < 1;

  // Don't show the alert if privacy terms are already accepted
  // change this as we only want to show this to new users
  if (acceptedPrivacyTerms || newAccount) {
    return null;
  }

  return (
    <Container fluid={true} className='email-sign-up-alert'>
      <EmailOptions isSignedIn={isSignedIn} acceptTerms={acceptTerms} />
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailSignUpAlert);
