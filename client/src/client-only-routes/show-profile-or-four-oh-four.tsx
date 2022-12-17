import { isEmpty } from 'lodash-es';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isBrowser } from '../../utils/index';
import FourOhFour from '../components/FourOhFour';
import Loader from '../components/helpers/loader';
import Profile from '../components/profile/profile';
import { fetchProfileForUser } from '../redux/actions';
import {
  usernameSelector,
  userByNameSelector,
  userProfileFetchStateSelector
} from '../redux/selectors';
import { User } from '../redux/prop-types';

interface ShowProfileOrFourOhFourProps {
  fetchProfileForUser: (username: string) => void;
  fetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
  };
  isSessionUser: boolean;
  maybeUser: string;
  requestedUser: User;
  showLoading: boolean;
}

const createRequestedUserSelector =
  () =>
  (state: unknown, { maybeUser = '' }) =>
    userByNameSelector(maybeUser.toLowerCase())(state) as User;
const createIsSessionUserSelector =
  () =>
  (state: unknown, { maybeUser = '' }) =>
    maybeUser.toLowerCase() === usernameSelector(state);

const makeMapStateToProps =
  () => (state: unknown, props: ShowProfileOrFourOhFourProps) => {
    const requestedUserSelector = createRequestedUserSelector();
    const isSessionUserSelector = createIsSessionUserSelector();
    const fetchState = userProfileFetchStateSelector(
      state
    ) as ShowProfileOrFourOhFourProps['fetchState'];
    return {
      requestedUser: requestedUserSelector(state, props),
      isSessionUser: isSessionUserSelector(state, props),
      showLoading: fetchState.pending,
      fetchState
    };
  };

const mapDispatchToProps: {
  fetchProfileForUser: ShowProfileOrFourOhFourProps['fetchProfileForUser'];
} = {
  fetchProfileForUser
};

class ShowProfileOrFourOhFour extends Component<ShowProfileOrFourOhFourProps> {
  componentDidMount() {
    const { requestedUser, maybeUser, fetchProfileForUser } = this.props;
    if (isEmpty(requestedUser)) {
      fetchProfileForUser(maybeUser);
    }
  }

  render() {
    if (!isBrowser()) {
      return null;
    }

    const { isSessionUser, requestedUser, showLoading } = this.props;
    if (isEmpty(requestedUser)) {
      if (showLoading) {
        // We don't know if /:maybeUser is a user or not, we will show
        // the loader until we get a response from the API
        return <Loader fullScreen={true} />;
      }
      // We have a response from the API, but there is nothing in the store
      // for /:maybeUser. We can derive from this state the /:maybeUser is not
      // a user the API recognises, so we 404
      return <FourOhFour />;
    }

    // We have a response from the API, and we have some state in the
    // store for /:maybeUser, we now handover rendering to the Profile component
    return <Profile isSessionUser={isSessionUser} user={requestedUser} />;
  }
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(ShowProfileOrFourOhFour);
