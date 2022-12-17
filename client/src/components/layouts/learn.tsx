import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Loader } from '../../components/helpers';
import { tryToShowDonationModal } from '../../redux/actions';
import {
  userFetchStateSelector,
  isSignedInSelector,
  userSelector
} from '../../redux/selectors';
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
  tryToShowDonationModal
};

const RedirectEmailSignUp = createRedirect('/email-sign-up');

type LearnLayoutProps = {
  isSignedIn?: boolean;
  fetchState: FetchState;
  user: User;
  tryToShowDonationModal: () => void;
  children?: React.ReactNode;
};

function LearnLayout({
  isSignedIn,
  fetchState,
  user,
  tryToShowDonationModal,
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
      <main id='learn-app-wrapper'>{children}</main>
      <DonateModal />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnLayout);
