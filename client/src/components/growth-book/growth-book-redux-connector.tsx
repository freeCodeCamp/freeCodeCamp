import React, { ReactNode, useEffect } from 'react';

import { useFeature } from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  isSignedInSelector,
  changeDonationLogicSelector,
  userIdSelector,
  userFetchStateSelector
} from '../../redux/selectors';
import { setChangeDonationLogic } from '../../redux/actions';
import { UserFetchState } from '../../redux/prop-types';
import callGA from '../../analytics/call-ga';

const mapStateToProps = createSelector(
  isSignedInSelector,
  changeDonationLogicSelector,
  userIdSelector,
  userFetchStateSelector,
  (
    isSignedIn: boolean,
    changeDonationLogic: boolean,
    userId: string,
    userFetchState: UserFetchState
  ) => ({
    isSignedIn,
    changeDonationLogic,
    userId,
    userFetchState
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = { setChangeDonationLogic: (arg: boolean) => void };

interface GrowthBookReduxConnector extends StateProps, DispatchProps {
  children: ReactNode;
}

const mapDispatchToProps = {
  setChangeDonationLogic
};

const GrowthBookReduxConnector = ({
  children,
  isSignedIn,
  changeDonationLogic,
  userId,
  setChangeDonationLogic,
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
      !changeDonationLogic
    ) {
      setChangeDonationLogic(true);
    }
  }, [
    isSignedIn,
    changeDonationLogic,
    displayProgressModalMultipleTimes,
    setChangeDonationLogic
  ]);
  return <>{children}</>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrowthBookReduxConnector);
