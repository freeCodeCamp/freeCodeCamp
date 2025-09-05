import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container } from '@freecodecamp/ui';
import EmailOptions from '../email-options';
import { updateMyQuincyEmail } from '../../redux/settings/actions';
import { userSelector, isSignedInSelector } from '../../redux/selectors';
import { CompletedChallenge } from '../../redux/prop-types';

interface EmailSignUpAlertProps {
  updateQuincyEmail: (isSendQuincyEmail: boolean) => void;
  sendQuincyEmail: boolean | null;
  isSignedIn: boolean;
  completedChallengesCount: number;
}

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  (
    {
      sendQuincyEmail,
      completedChallenges
    }: {
      sendQuincyEmail: boolean | null;
      completedChallenges: CompletedChallenge[];
    },
    isSignedIn: boolean
  ) => ({
    sendQuincyEmail,
    isSignedIn,
    completedChallengesCount: completedChallenges.length
  })
);

const mapDispatchToProps = {
  updateQuincyEmail: (sendQuincyEmail: boolean) =>
    updateMyQuincyEmail({ sendQuincyEmail })
};

function EmailSignUpAlert({
  updateQuincyEmail,
  sendQuincyEmail,
  isSignedIn,
  completedChallengesCount = 0
}: EmailSignUpAlertProps) {
  const newAccount = isSignedIn && completedChallengesCount < 1;
  const userHasMadeEmailSelection = sendQuincyEmail !== null;

  // Don't show the alert if user is new or if user has already made a selection
  if (userHasMadeEmailSelection || newAccount) {
    return null;
  }

  return (
    <Container fluid={true} className='email-sign-up-alert'>
      <EmailOptions
        isSignedIn={isSignedIn}
        updateQuincyEmail={updateQuincyEmail}
      />
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailSignUpAlert);
