import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash-es';

import Loader from '../components/helpers/loader';
import {
  userByNameSelector,
  userProfileFetchStateSelector,
  fetchProfileForUser,
  usernameSelector
} from '../redux';
import FourOhFour from '../components/FourOhFour';
import Profile from '../components/profile/Profile';
import { isBrowser } from '../../utils/index';
import { UserType } from '../redux/prop-types';

interface IShowProfileOrFourOhFourProps {
  fetchProfileForUser: (username: string) => void;
  fetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
  };
  isSessionUser: boolean;
  maybeUser: string;
  requestedUser: UserType;
  showLoading: boolean;
}

const createRequestedUserSelector =
  () =>
  (state: unknown, { maybeUser = '' }) =>
    userByNameSelector(maybeUser.toLowerCase())(state) as string;
const createIsSessionUserSelector =
  () =>
  (state: unknown, { maybeUser = '' }) =>
    maybeUser.toLowerCase() === usernameSelector(state);

const makeMapStateToProps =
  () => (state: unknown, props: IShowProfileOrFourOhFourProps) => {
    const requestedUserSelector = createRequestedUserSelector();
    const isSessionUserSelector = createIsSessionUserSelector();
    const fetchState = userProfileFetchStateSelector(
      state
    ) as IShowProfileOrFourOhFourProps['fetchState'];
    return {
      requestedUser: requestedUserSelector(
        state,
        props
      ) as IShowProfileOrFourOhFourProps['requestedUser'],
      isSessionUser: isSessionUserSelector(state, props),
      showLoading: fetchState.pending,
      fetchState
    };
  };

const mapDispatchToProps: {
  fetchProfileForUser: IShowProfileOrFourOhFourProps['fetchProfileForUser'];
} = {
  fetchProfileForUser
};

class ShowProfileOrFourOhFour extends Component<IShowProfileOrFourOhFourProps> {
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
    // eslint-disable-next-line
    // @ts-ignore TODO: sort out whether user.portfolio is an array or obj. lit.
    return <Profile isSessionUser={isSessionUser} user={requestedUser} />;
  }
}

// eslint-disable-next-line
// @ts-ignore
ShowProfileOrFourOhFour.displayName = 'ShowProfileOrFourOhFour';

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(ShowProfileOrFourOhFour);
