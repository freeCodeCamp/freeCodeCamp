import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state: unknown) => {
  const user = userSelector(state) as {
    sendQuincyEmail: boolean | null;
    completedChallenges: CompletedChallenge[];
  };
  return {
    sendQuincyEmail: user.sendQuincyEmail,
    isSignedIn: isSignedInSelector(state),
    completedChallengesCount: user.completedChallenges.length
  };
};

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
