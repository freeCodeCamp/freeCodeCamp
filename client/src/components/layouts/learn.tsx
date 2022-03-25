import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Loader } from '../../components/helpers';
import {
  userSelector,
  userFetchStateSelector,
  isSignedInSelector,
  tryToShowDonationModal
} from '../../redux';
import { openModal } from '../../templates/Challenges/redux';
import DonateModal from '../Donation/donation-modal';
import createRedirect from '../create-redirect';

import './prism.css';
import './prism-night.css';
import 'react-reflex/styles.css';
import './learn.css';

type FetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

type User = {
  acceptedPrivacyTerms: boolean;
};

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: FetchState, isSignedIn, user: User) => ({
    fetchState,
    isSignedIn,
    user
  })
);

const mapDispatchToProps = {
  tryToShowDonationModal,
  openShortcutsModal: () => openModal('shortcuts')
};

const RedirectEmailSignUp = createRedirect('/email-sign-up');

type LearnLayoutProps = {
  isSignedIn?: boolean;
  fetchState: FetchState;
  user: User;
  tryToShowDonationModal: () => void;
  openShortcutsModal: () => void;
  children?: React.ReactNode;
};

function LearnLayout({
  isSignedIn,
  fetchState,
  user,
  tryToShowDonationModal,
  openShortcutsModal,
  children
}: LearnLayoutProps): JSX.Element {
  useEffect(() => {
    tryToShowDonationModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      const metaTag = document.querySelector(`meta[name="robots"]`);
      if (metaTag) {
        metaTag.remove();
      }
    };
  }, []);

  const keyPressHandler = (e: React.KeyboardEvent): void => {
    if (e.key === '?') {
      openShortcutsModal();
    }
  };

  if (fetchState.pending && !fetchState.complete) {
    return <Loader fullScreen={true} />;
  }

  if (isSignedIn && !user.acceptedPrivacyTerms) {
    return <RedirectEmailSignUp />;
  }

  return (
    <>
      <Helmet>
        <meta content='noindex' name='robots' />
      </Helmet>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <main id='learn-app-wrapper' onKeyPress={keyPressHandler}>
        {children}
      </main>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      /* @ts-ignore  */}
      <DonateModal />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnLayout);
