import { Modal, Button, Col, Row } from '@freecodecamp/react-bootstrap';
import { WindowLocation } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useFeature } from '@growthbook/growthbook-react';
import { goToAnchor } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { PaymentContext } from '../../../../config/donation-settings';
import Cup from '../../assets/icons/cup';
import Heart from '../../assets/icons/heart';
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

const RenderIlustration = ({
  recentlyClaimedBlock
}: {
  recentlyClaimedBlock: RecentlyClaimedBlock;
}) => {
  const showModalBears = useFeature('show-modal-bears').on;
  if (showModalBears) {
    return recentlyClaimedBlock ? (
      <BearBlockCompletion className='donation-icon' />
    ) : (
      <BearProgressModal className='donation-icon' />
    );
  } else {
    return recentlyClaimedBlock ? (
      <Cup className='donation-icon' />
    ) : (
      <Heart className='donation-icon' />
    );
  }
};

function getctaNumberBetween1To10() {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DonateModal({
  show,
  closeDonationModal,
  executeGA,
  location,
  recentlyClaimedBlock
}: DonateModalProps): JSX.Element {
  const [closeLabel, setCloseLabel] = useState(false);
  const [ctaNumber, setCtaNumber] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const loadElementsIndividually = useFeature('load_elements_individually').on;
  const { t } = useTranslation();

  // test wheather the conversions are being distributed properly
  useFeature('aa-test-in-component');

  const handleProcessing = () => {
    setCloseLabel(true);
  };

  useEffect(() => {
    if (loadElementsIndividually) {
      const timer = setTimeout(() => {
        setIsDisabled(false);
        setShowSkipButton(true);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
      setShowSkipButton(true);
    }
  }, [loadElementsIndividually]);

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

  useEffect(() => {
    if (show) setCtaNumber(getctaNumberBetween1To10());
  }, [show]);

  const handleModalHide = () => {
    // If modal is open on a SuperBlock page
    if (isLocationSuperBlock(location)) {
      goToAnchor('claim-cert-block');
    }
  };

  const donationText = (
    <div className=' text-center block-modal-text'>
      <div className='donation-icon-container'>
        <RenderIlustration recentlyClaimedBlock={recentlyClaimedBlock} />
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
            <b>{t(`donate.progress-modal-cta-${ctaNumber}`)}</b>
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
      <Modal.Body className={'no-delay-fade-in'}>
        {donationText}
        <Spacer size='medium' />
        <Row>
          <Col
            xs={12}
            className={loadElementsIndividually && 'two-seconds-delay-fade-in'}
          >
            <DonateForm
              handleProcessing={handleProcessing}
              isMinimalForm={true}
              paymentContext={PaymentContext.Modal}
            />
          </Col>
        </Row>
        <Spacer size='medium' />
        <Row>
          <Col
            sm={4}
            smOffset={4}
            xs={8}
            xsOffset={2}
            className={showSkipButton ? 'no-delay-fade-in' : 'no-opacity'}
          >
            <Button
              block={true}
              bsSize='sm'
              bsStyle='primary'
              className='btn-link'
              onClick={closeDonationModal}
              tabIndex='0'
              disabled={isDisabled}
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
