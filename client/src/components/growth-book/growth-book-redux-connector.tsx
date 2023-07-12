/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode, useEffect } from 'react';

import { useFeature } from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  isSignedInSelector,
  showMultipleProgressModalsSelector
} from '../../redux/selectors';
import { setShowMultipleProgressModals } from '../../redux/actions';

const mapStateToProps = createSelector(
  isSignedInSelector,
  showMultipleProgressModalsSelector,
  (isSignedIn, showMultipleProgressModals: boolean) => ({
    isSignedIn,
    showMultipleProgressModals
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
  setShowMultipleProgressModals
}: GrowthBookReduxConnector) => {
  const displayProgressModalMultipleTimes = useFeature(
    'display_progress_modal_multiple_times'
  ).on;
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
