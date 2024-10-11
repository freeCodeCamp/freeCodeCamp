import React, { ReactNode, useEffect } from 'react';

import { useFeature } from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  isSignedInSelector,
  isRandomCompletionThresholdSelector,
  userIdSelector,
  userFetchStateSelector
} from '../../redux/selectors';
import { setIsRandomCompletionThreshold } from '../../redux/actions';
import { UserFetchState } from '../../redux/prop-types';
import callGA from '../../analytics/call-ga';

const mapStateToProps = createSelector(
  isSignedInSelector,
  isRandomCompletionThresholdSelector,
  userIdSelector,
  userFetchStateSelector,
  (
    isSignedIn: boolean,
    isRandomCompletionThreshold: boolean,
    userId: string,
    userFetchState: UserFetchState
  ) => ({
    isSignedIn,
    isRandomCompletionThreshold,
    userId,
    userFetchState
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = { setIsRandomCompletionThreshold: (arg: boolean) => void };

interface GrowthBookReduxConnector extends StateProps, DispatchProps {
  children: ReactNode;
}

const mapDispatchToProps = {
  setIsRandomCompletionThreshold
};

const GrowthBookReduxConnector = ({
  children,
  isSignedIn,
  isRandomCompletionThreshold,
  userId,
  setIsRandomCompletionThreshold,
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

  const showModalsRandomly = useFeature('show-modal-randomly').on;
  useFeature('aa-test');
  useEffect(() => {
    if (isSignedIn && showModalsRandomly && !isRandomCompletionThreshold) {
      setIsRandomCompletionThreshold(true);
    }
  }, [
    isSignedIn,
    isRandomCompletionThreshold,
    showModalsRandomly,
    setIsRandomCompletionThreshold
  ]);
  return <>{children}</>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrowthBookReduxConnector);
