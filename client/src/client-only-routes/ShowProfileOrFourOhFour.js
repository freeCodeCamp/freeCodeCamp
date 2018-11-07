import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import Loader from '../components/helpers/Loader';
import Layout from '../components/layouts/Default';
import {
  userByNameSelector,
  userProfileFetchStateSelector,
  fetchProfileForUser,
  usernameSelector
} from '../redux';
import FourOhFourPage from '../components/FourOhFour';
import Profile from '../components/profile/Profile';

const propTypes = {
  fetchProfileForUser: PropTypes.func.isRequired,
  isSessionUser: PropTypes.bool,
  maybeUser: PropTypes.string,
  requestedUser: PropTypes.shape({
    username: PropTypes.string,
    profileUI: PropTypes.object
  }),
  showLoading: PropTypes.bool,
  splat: PropTypes.string
};

const createRequestedUserSelector = () => (state, { maybeUser }) =>
  userByNameSelector(maybeUser)(state);
const createIsSessionUserSelector = () => (state, { maybeUser }) =>
  maybeUser === usernameSelector(state);

const makeMapStateToProps = () => (state, props) => {
  const requestedUserSelector = createRequestedUserSelector();
  const isSessionUserSelector = createIsSessionUserSelector();
  const fetchState = userProfileFetchStateSelector(state, props);
  return {
    requestedUser: requestedUserSelector(state, props),
    isSessionUser: isSessionUserSelector(state, props),
    showLoading: fetchState.pending,
    fetchState
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchProfileForUser }, dispatch);

class ShowFourOhFour extends Component {
  componentDidMount() {
    const { requestedUser, maybeUser, splat, fetchProfileForUser } = this.props;
    if (!splat && isEmpty(requestedUser)) {
      console.log(requestedUser);
      return fetchProfileForUser(maybeUser);
    }
    return null;
  }

  render() {
    const { isSessionUser, requestedUser, showLoading, splat } = this.props;
    if (splat) {
      // the uri path for this component is /:maybeUser/:splat
      // if splat is defined then we on a route that is not a profile
      // and we should just 404
      return <FourOhFourPage />;
    }
    if (showLoading) {
      // We don't know if /:maybeUser is a user or not, we will show the loader
      // until we get a response from the API
      return (
        <Layout>
          <div className='loader-wrapper'>
            <Loader />
          </div>
        </Layout>
      );
    }
    if (isEmpty(requestedUser)) {
      // We have a response from the API, but there is nothing in the store
      // for /:maybeUser. We can derive from this state the /:maybeUser is not
      // a user the API recognises, so we 404
      return <FourOhFourPage />;
    }

    // We have a response from the API, and we have some state in the
    // store for /:maybeUser, we now handover rendering to the Profile component
    return <Profile isSessionUser={isSessionUser} user={requestedUser} />;
  }
}

ShowFourOhFour.displayName = 'ShowFourOhFour';
ShowFourOhFour.propTypes = propTypes;

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(ShowFourOhFour);
