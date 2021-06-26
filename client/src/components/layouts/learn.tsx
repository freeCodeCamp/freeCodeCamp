import React, { Fragment, Component } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Loader } from '../../components/helpers';
import {
  userSelector,
  userFetchStateSelector,
  isSignedInSelector,
  tryToShowDonationModal
} from '../../redux';
import createRedirect from '../create-redirect';
import DonateModal from '../Donation/DonationModal';

import './prism.css';
import './prism-night.css';
import 'react-reflex/styles.css';
import './learn.css';

type fetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

type user = {
  acceptedPrivacyTerms: boolean;
};

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: fetchState, isSignedIn, user: user) => ({
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
  fetchState: fetchState;
  user: user;
  tryToShowDonationModal: () => void;
  children?: React.ReactNode;
};

class LearnLayout extends Component<LearnLayoutProps> {
  static displayName = 'LearnLayout';

  componentDidMount() {
    this.props.tryToShowDonationModal();
  }

  componentWillUnmount() {
    const metaTag = document.querySelector(`meta[name="robots"]`);
    if (metaTag) {
      metaTag.remove();
    }
  }

  render() {
    const {
      fetchState: { pending, complete },
      isSignedIn,
      user: { acceptedPrivacyTerms },
      children
    } = this.props;

    if (pending && !complete) {
      return <Loader fullScreen={true} />;
    }

    if (isSignedIn && !acceptedPrivacyTerms) {
      return <RedirectEmailSignUp />;
    }

    return (
      <Fragment>
        <Helmet>
          <meta content='noindex' name='robots' />
        </Helmet>
        <main id='learn-app-wrapper'>{children}</main>
        <DonateModal />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnLayout);
