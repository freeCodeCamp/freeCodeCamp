import React, { ReactNode, useEffect } from 'react';

import { useFeature } from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  isSignedInSelector,
  showMultipleProgressModalsSelector,
  userIdSelector,
  userFetchStateSelector
} from '../../redux/selectors';
import { setShowMultipleProgressModals } from '../../redux/actions';
import { UserFetchState } from '../../redux/prop-types';
import callGA from '../../analytics/call-ga';

const mapStateToProps = createSelector(
  isSignedInSelector,
  showMultipleProgressModalsSelector,
  userIdSelector,
  userFetchStateSelector,
  (
    isSignedIn: boolean,
    showMultipleProgressModals: boolean,
    userId: string,
    userFetchState: UserFetchState
  ) => ({
    isSignedIn,
    showMultipleProgressModals,
    userId,
    userFetchState
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = { setShowMultipleProgressModals: (arg: boolean) => void };

interface GrowthBookReduxConnector extends StateProps, DispatchProps {
  children: ReactNode;
}

const mapDispatchToProps = {
  setShowMultipleProgressModals
};

const GrowthBookReduxConnector = ({
  children,
  isSignedIn,
  showMultipleProgressModals,
  userId,
  setShowMultipleProgressModals,
  userFetchState
}: GrowthBookReduxConnector) => {
  // Send user id to GA
  useEffect(() => {
    if (userFetchState.complete && isSignedIn) {
      callGA({
        event: 'user_data',
        user_id: userId
      });
    }
  }, [userFetchState, userId, isSignedIn]);

  const displayProgressModalMultipleTimes = useFeature(
    'display_progress_modal_multiple_times'
  ).on;
  useFeature('aa-test');
  useEffect(() => {
    if (
      isSignedIn &&
      displayProgressModalMultipleTimes &&
      !showMultipleProgressModals
    ) {
      setShowMultipleProgressModals(true);
    }
  }, [
    isSignedIn,
    showMultipleProgressModals,
    displayProgressModalMultipleTimes,
    setShowMultipleProgressModals
  ]);
  return <>{children}</>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrowthBookReduxConnector);
