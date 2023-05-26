import { isEmpty } from 'lodash-es';
import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';

import { isBrowser } from '../../utils/index';
import Loader from '../components/helpers/loader';
import { fetchProfileForUser } from '../redux/actions';
import {
  usernameSelector,
  userByNameSelector,
  userProfileFetchStateSelector
} from '../redux/selectors';
import { User } from '../redux/prop-types';

const Profile = lazy(() => import('../components/profile/profile'));
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

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

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
  return (
    <Suspense fallback={<Loader fullScreen={true} />}>
      <ErrorBoundary fallback={<FourOhFour />}>
        <Profile isSessionUser={isSessionUser} user={requestedUser} />
      </ErrorBoundary>
    </Suspense>
  );
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(ShowProfileOrFourOhFour);
