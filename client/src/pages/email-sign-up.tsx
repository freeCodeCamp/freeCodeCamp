import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Spacer } from '@freecodecamp/ui';

import createRedirect from '../components/create-redirect';
import { Loader } from '../components/helpers';
import EmailOptions from '../components/email-options';
import { updateMyQuincyEmail } from '../redux/settings/actions';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector
} from '../redux/selectors';
import type { User } from '../redux/prop-types';

interface EmailSignUpProps {
  updateQuincyEmail: (isSendQuincyEmail: boolean) => void;
  sendQuincyEmail: boolean | null | undefined;
  isSignedIn: boolean;
  showLoading: boolean;
}

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  signInLoadingSelector,
  (user: User | null, isSignedIn: boolean, showLoading: boolean) => ({
    sendQuincyEmail: user?.sendQuincyEmail,
    isSignedIn,
    showLoading
  })
);
const mapDispatchToProps = {
  updateQuincyEmail: (sendQuincyEmail: boolean) =>
    updateMyQuincyEmail({ sendQuincyEmail })
};
const RedirectToLearn = createRedirect('/learn');

function EmailSignUp({
  updateQuincyEmail,
  sendQuincyEmail,
  isSignedIn,
  showLoading
}: EmailSignUpProps) {
  const userHasMadeSelection = isSignedIn && sendQuincyEmail !== null;

  return userHasMadeSelection ? (
    <RedirectToLearn />
  ) : (
    <>
      <Container>
        <Spacer size='l' />
        {showLoading ? (
          <Loader fullScreen={true} />
        ) : (
          <EmailOptions
            isSignedIn={isSignedIn}
            updateQuincyEmail={updateQuincyEmail}
            isPage={true}
          />
        )}
      </Container>
      <Spacer size='l' />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailSignUp);

export function Head() {
  const { t } = useTranslation();
  return <title>{t('misc.email-signup')} | freeCodeCamp.org</title>;
}
