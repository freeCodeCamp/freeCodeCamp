import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Loader } from '../components/helpers';
import Landing from '../components/landing';
import {
  userSelector,
  userFetchStateSelector,
  isSignedInSelector
} from '../redux';
import createRedirect from '../components/createRedirect';

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
const RedirectLearn = createRedirect('/learn');

export const IndexPage = ({
  fetchState: { pending, complete },
  isSignedIn,
  user: { acceptedPrivacyTerms }
}) => {
  if (pending && !complete) {
    return <Loader fullScreen={true} />;
  }

  if (isSignedIn && !acceptedPrivacyTerms) {
    return <RedirectAcceptPrivacyTerm />;
  }

  if (isSignedIn) {
    return <RedirectLearn />;
  }

  return <Landing />;
};

const propTypes = {
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

IndexPage.propTypes = propTypes;
IndexPage.displayName = 'IndexPage';

export default connect(mapStateToProps)(IndexPage);
