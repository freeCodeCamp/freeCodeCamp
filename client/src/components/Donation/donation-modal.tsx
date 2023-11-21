import { Modal, Button } from '@freecodecamp/react-bootstrap';
import { Col, Row } from '@freecodecamp/ui';
import { WindowLocation } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { goToAnchor } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { useFeature } from '@growthbook/growthbook-react';

import BearProgressModal from '../../assets/images/components/bear-progress-modal';
import BearBlockCompletion from '../../assets/images/components/bear-block-completion-modal';
import { closeDonationModal, executeGA } from '../../redux/actions';
import {
  isDonationModalOpenSelector,
  recentlyClaimedBlockSelector
} from '../../redux/selectors';
import { isLocationSuperBlock } from '../../utils/path-parsers';
import { playTone } from '../../utils/tone';
import { Spacer } from '../helpers';
import { PaymentContext } from '../../../../shared/config/donation-settings'; //
import MultiTierDonationForm from './multi-tier-donation-form';

type RecentlyClaimedBlock = null | { block: string; superBlock: string };

const mapStateToProps = createSelector(
  isDonationModalOpenSelector,
  recentlyClaimedBlockSelector,
  (show: boolean, recentlyClaimedBlock: RecentlyClaimedBlock) => ({
    show,
    recentlyClaimedBlock
  })
);

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      closeDonationModal,
      executeGA
    },
    dispatch
  );

type DonateModalProps = {
  activeDonors?: number;
  closeDonationModal: typeof closeDonationModal;
  executeGA: typeof executeGA;
  location?: WindowLocation;
  recentlyClaimedBlock: RecentlyClaimedBlock;
  show: boolean;
};

const Illustration = ({
  recentlyClaimedBlock
}: {
  recentlyClaimedBlock: RecentlyClaimedBlock;
}) => {
  return recentlyClaimedBlock ? (
    <BearBlockCompletion className='donation-icon' />
  ) : (
    <BearProgressModal className='donation-icon' />
  );
};

function ModalHeader({
  recentlyClaimedBlock
}: {
  recentlyClaimedBlock: RecentlyClaimedBlock;
}) {
  const { t } = useTranslation();
  return (
    <Row className='text-center block-modal-text'>
      <Col sm={10} smOffset={1} xs={12}>
        {recentlyClaimedBlock !== null && (
          <b>
            {t('donate.nicely-done', {
              block: t(
                `intro:${recentlyClaimedBlock.superBlock}.blocks.${recentlyClaimedBlock.block}.title`
              )
            })}
          </b>
        )}
        <h2>{t('donate.help-us-develop')}</h2>
      </Col>
    </Row>
  );
}

function CloseButtonRow({
  donationAttempted,
  closeDonationModal
}: {
  donationAttempted: boolean;
  closeDonationModal: () => void;
}) {
  const { t } = useTranslation();
  return (
    <Row>
      <Col sm={4} smOffset={4} xs={8} xsOffset={2}>
        <Button
          bsSize='sm'
          bsStyle='primary'
          className='btn-link close-button'
          onClick={closeDonationModal}
          tabIndex='0'
        >
          {donationAttempted ? t('buttons.close') : t('buttons.ask-later')}
        </Button>
      </Col>
    </Row>
  );
}

function DonateModal({
  show,
  closeDonationModal,
  executeGA,
  location,
  recentlyClaimedBlock
}: DonateModalProps): JSX.Element {
  const [donationAttempted, setDonationAttempted] = useState(false);
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);

  const handleProcessing = () => {
    setDonationAttempted(true);
  };

  useFeature('aa-test-in-component');

  useEffect(() => {
    if (show) {
      void playTone('donation');
      executeGA({ event: 'pageview', pagePath: '/donation-modal' });
      executeGA({
        event: 'donation_view',
        action: `Displayed ${
          recentlyClaimedBlock !== null ? 'Block' : 'Progress'
        } Donation Modal`
      });
    }
  }, [show, recentlyClaimedBlock, executeGA]);

  const handleModalHide = () => {
    // If modal is open on a SuperBlock page
    if (isLocationSuperBlock(location)) {
      goToAnchor('claim-cert-block');
    }
  };

  return (
    <Modal
      bsSize='lg'
      className='donation-modal'
      onExited={handleModalHide}
      show={show}
    >
      <Modal.Body className='no-delay-fade-in'>
        <div className='donation-icon-container'>
          <Illustration recentlyClaimedBlock={recentlyClaimedBlock} />
        </div>
        {showHeaderAndFooter && !donationAttempted && (
          <ModalHeader recentlyClaimedBlock={recentlyClaimedBlock} />
        )}
        <Spacer size='small' />
        <MultiTierDonationForm
          setShowHeaderAndFooter={setShowHeaderAndFooter}
          handleProcessing={handleProcessing}
          paymentContext={PaymentContext.Modal}
          isMinimalForm={true}
        />
        {(showHeaderAndFooter || donationAttempted) && (
          <CloseButtonRow
            closeDonationModal={closeDonationModal}
            donationAttempted={donationAttempted}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

DonateModal.displayName = 'DonateModal';

export default connect(mapStateToProps, mapDispatchToProps)(DonateModal);
