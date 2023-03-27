import { Modal, Button, Col, Row } from '@freecodecamp/react-bootstrap';
import { WindowLocation } from '@reach/router';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { goToAnchor } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import {
  modalDefaultDonation,
  PaymentContext
} from '../../../../config/donation-settings';
import Cup from '../../assets/icons/cup';
import Heart from '../../assets/icons/heart';

import { closeDonationModal, executeGA } from '../../redux/actions';
import {
  isDonationModalOpenSelector,
  recentlyClaimedBlockSelector
} from '../../redux/selectors';
import { isLocationSuperBlock } from '../../utils/path-parsers';
import { playTone } from '../../utils/tone';
import { Spacer } from '../helpers';
import DonateForm from './donate-form';

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

function DonateModal({
  show,
  closeDonationModal,
  executeGA,
  location,
  recentlyClaimedBlock
}: DonateModalProps): JSX.Element {
  const [closeLabel, setCloseLabel] = React.useState(false);
  const { t } = useTranslation();
  const handleProcessing = () => {
    setCloseLabel(true);
  };

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

  const getCommonDonationText = () => {
    const donationDuration = modalDefaultDonation.donationDuration;
    switch (donationDuration) {
      case 'one-time':
        return <b>{t('donate.duration')}</b>;
      case 'month':
        return <b>{t('donate.duration-2')}</b>;
      default:
        return <b>{t('donate.duration-4')}</b>;
    }
  };

  const handleModalHide = () => {
    // If modal is open on a SuperBlock page
    if (isLocationSuperBlock(location)) {
      goToAnchor('claim-cert-block');
    }
  };

  const donationText = (
    <div className=' text-center block-modal-text'>
      <div className='donation-icon-container'>
        {recentlyClaimedBlock !== null ? (
          <Cup className='donation-icon' />
        ) : (
          <Heart className='donation-icon' />
        )}
      </div>
      <Row>
        {!closeLabel && (
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
            {getCommonDonationText()}
          </Col>
        )}
      </Row>
    </div>
  );

  return (
    <Modal
      bsSize='lg'
      className='donation-modal'
      onExited={handleModalHide}
      show={show}
    >
      <Modal.Body>
        {donationText}
        <Spacer size='medium' />
        <Row>
          <Col xs={12}>
            <DonateForm
              handleProcessing={handleProcessing}
              isMinimalForm={true}
              paymentContext={PaymentContext.Modal}
            />
          </Col>
        </Row>
        <Spacer size='medium' />
        <Row>
          <Col sm={4} smOffset={4} xs={8} xsOffset={2}>
            <Button
              block={true}
              bsSize='sm'
              bsStyle='primary'
              className='btn-link'
              onClick={closeDonationModal}
              tabIndex='0'
            >
              {closeLabel ? t('buttons.close') : t('buttons.ask-later')}
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

DonateModal.displayName = 'DonateModal';

export default connect(mapStateToProps, mapDispatchToProps)(DonateModal);
