import { isEmpty } from 'lodash-es';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { isBrowser } from '../../utils/index';
import FourOhFour from '../components/FourOhFour';
import Loader from '../components/helpers/loader';
import Profile from '../components/profile/profile';
import { fetchProfileForUser } from '../redux/actions';
import {
  userSelector,
  userProfileFetchStateSelector,
  createUserByNameSelector
} from '../redux/selectors';
import type { User } from '../redux/prop-types';
import { Socials } from '../components/profile/components/internet';

interface ShowProfileOrFourOhFourProps {
  fetchProfileForUser: (username: string) => void;
  updateMyPortfolio: () => void;
  submitNewAbout: () => void;
  updateMySocials: (formValues: Socials) => void;
  isSessionUser: boolean;
  maybeUser?: string;
  requestedUser: User | null;
  showLoading: boolean;
}

const makeMapStateToProps =
  () =>
  (state: unknown, { maybeUser = '' }) => {
    const username = maybeUser.toLowerCase();
    const requestedUser = (
      createUserByNameSelector as (
        maybeUser: string
      ) => (state: unknown) => User | null
    )(username)(state);
    const sessionUser = userSelector(state) as User | null;
    const isSessionUser = username === sessionUser?.username;
    const fetchState = userProfileFetchStateSelector(state) as {
      pending: boolean;
    };

    return {
      requestedUser,
      isSessionUser,
      showLoading: fetchState.pending
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
  isSessionUser,
  showLoading
}: ShowProfileOrFourOhFourProps) {
  useEffect(() => {
    // If the user is not already in the store, fetch it
    if (isEmpty(requestedUser) && maybeUser) {
      fetchProfileForUser(maybeUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isBrowser()) {
    return null;
  }

  return isEmpty(requestedUser) ? (
    showLoading ? (
      <Loader fullScreen={true} />
    ) : (
      <FourOhFour />
    )
  ) : (
    <Profile isSessionUser={isSessionUser} user={requestedUser} />
  );
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(ShowProfileOrFourOhFour);
