import { isEmpty } from 'lodash-es';
import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import { isBrowser } from '../../utils/index';
import Loader from '../components/helpers/loader';
import Profile from '../components/profile/profile';
import { fetchProfileForUser } from '../redux/actions';
import {
  usernameSelector,
  userByNameSelector,
  userProfileFetchStateSelector
} from '../redux/selectors';
import { User } from '../redux/prop-types';

const FourOhFour = lazy(() => import('../components/FourOhFour'));

interface ShowProfileOrFourOhFourProps {
  fetchProfileForUser: (username: string) => void;
  fetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
  };
  isSessionUser: boolean;
  maybeUser?: string;
  requestedUser: User;
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
      fetchState
    };
  };

const mapDispatchToProps: {
  fetchProfileForUser: ShowProfileOrFourOhFourProps['fetchProfileForUser'];
} = {
  fetchProfileForUser
};

function ShowProfileOrFourOhFour({
  requestedUser,
  maybeUser,
  fetchProfileForUser,
  isSessionUser
}: ShowProfileOrFourOhFourProps) {
  useEffect(() => {
    // If the user is not already in the store, fetch it
    if (isEmpty(requestedUser)) {
      if (maybeUser) {
        fetchProfileForUser(maybeUser);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isBrowser()) {
    return null;
  }

  return isEmpty(requestedUser) ? (
    <Suspense fallback={<Loader fullScreen={true} />}>
      <FourOhFour />
    </Suspense>
  ) : (
    <Suspense fallback={<Loader fullScreen={true} />}>
      <Profile isSessionUser={isSessionUser} user={requestedUser} />
    </Suspense>
  );
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(ShowProfileOrFourOhFour);
