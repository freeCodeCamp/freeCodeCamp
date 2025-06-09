import { WindowLocation } from '@gatsbyjs/reach-router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { goToAnchor } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { Modal } from '@freecodecamp/ui';
import { useFeature } from '@growthbook/growthbook-react';

import { closeDonationModal } from '../../redux/actions';
import {
  isDonationModalOpenSelector,
  donatableSectionRecentlyCompletedSelector
} from '../../redux/selectors';

import { isLocationSuperBlock } from '../../utils/path-parsers';
import { playTone } from '../../utils/tone';
import callGA from '../../analytics/call-ga';
import { DonatableSectionRecentlyCompleted } from './types';
import DonationModalBody from './donation-modal-body';

const mapStateToProps = createSelector(
  isDonationModalOpenSelector,
  donatableSectionRecentlyCompletedSelector,
  (
    show: boolean,
    donatableSectionRecentlyCompleted: DonatableSectionRecentlyCompleted
  ) => ({
    show,
    donatableSectionRecentlyCompleted
  })
);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ closeDonationModal }, dispatch);

type DonateModalProps = {
  activeDonors?: number;
  closeDonationModal: typeof closeDonationModal;
  location?: WindowLocation;
  donatableSectionRecentlyCompleted: DonatableSectionRecentlyCompleted;
  show: boolean;
};

function DonateModal({
  show,
  closeDonationModal,
  location,
  donatableSectionRecentlyCompleted
}: DonateModalProps): JSX.Element {
  const [canClose, setCanClose] = useState(false);
  const isA11yFeatureEnabled = useFeature('a11y-donation-modal').on;

  useEffect(() => {
    if (show) {
      void playTone('donation');
      callGA({ event: 'pageview', pagePath: '/donation-modal' });
      callGA({
        event: 'donation_view',
        action: `Displayed ${
          donatableSectionRecentlyCompleted !== null ? 'Block' : 'Progress'
        } Donation Modal`
      });
    }
  }, [show, donatableSectionRecentlyCompleted]);

  const handleModalHide = () => {
    // If modal is open on a SuperBlock page
    if (isLocationSuperBlock(location)) {
      goToAnchor('claim-cert-block');
    }

    if (isA11yFeatureEnabled && canClose) {
      closeDonationModal();
    }
  };

  return (
    <Modal size='large' onClose={handleModalHide} open={show}>
      <DonationModalBody
        closeDonationModal={closeDonationModal}
        donatableSectionRecentlyCompleted={donatableSectionRecentlyCompleted}
        setCanClose={setCanClose}
      />
    </Modal>
  );
}

DonateModal.displayName = 'DonateModal';

export default connect(mapStateToProps, mapDispatchToProps)(DonateModal);
