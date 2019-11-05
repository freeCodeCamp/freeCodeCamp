import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { Loader } from '../../components/helpers';
import {
  userSelector,
  userFetchStateSelector,
  isSignedInSelector
} from '../../redux';
import createRedirect from '../../components/createRedirect';
import DonateModal from '../Donation';

import 'prismjs/themes/prism.css';
import './prism.css';
import './prism-night.css';
import 'react-reflex/styles.css';
import './learn.css';

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState, isSignedIn, user) => ({
    fetchState,
    isSignedIn,
    user
  })
);

const RedirectAcceptPrivacyTerm = createRedirect('/accept-privacy-terms');

function LearnLayout({
  fetchState: { pending, complete },
  isSignedIn,
  user: { acceptedPrivacyTerms },
  children
}) {
  if (pending && !complete) {
    return <Loader fullScreen={true} />;
  }

  if (isSignedIn && !acceptedPrivacyTerms) {
    return <RedirectAcceptPrivacyTerm />;
  }

  return (
    <Fragment>
      <main id='learn-app-wrapper'>{children}</main>
      <DonateModal />
    </Fragment>
  );
}

LearnLayout.displayName = 'LearnLayout';
LearnLayout.propTypes = {
  children: PropTypes.any,
  fetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  isSignedIn: PropTypes.bool,
  user: PropTypes.shape({
    acceptedPrivacyTerms: PropTypes.bool
  })
};

export default connect(mapStateToProps)(LearnLayout);
