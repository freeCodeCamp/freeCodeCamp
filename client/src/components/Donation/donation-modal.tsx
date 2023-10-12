import { Modal, Button, Row } from '@freecodecamp/react-bootstrap';
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
  Col
} from '@freecodecamp/ui';
import { WindowLocation } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useFeature } from '@growthbook/growthbook-react';
import { goToAnchor } from 'react-scrollable-anchor';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { createSelector } from 'reselect';

import {
  PaymentContext,
  subscriptionAmounts,
  defaultDonation,
  defaultTierAmount,
  type DonationAmount
} from '../../../../shared/config/donation-settings';
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
import { formattedAmountLabel, convertToTimeContributed } from './utils';

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

function getctaNumberBetween1To10() {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ModalHeader({
  closeLabel,
  ctaNumber,
  showMultiTier,
  recentlyClaimedBlock
}: {
  closeLabel: boolean;
  ctaNumber: number;
  showMultiTier: boolean;
  recentlyClaimedBlock: RecentlyClaimedBlock;
}) {
  const { t } = useTranslation();
  return (
    <div className='text-center block-modal-text'>
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
            {showMultiTier ? (
              <h2>{t('donate.help-us-develop')}</h2>
            ) : (
              <b>{t(`donate.progress-modal-cta-${ctaNumber}`)}</b>
            )}
          </Col>
        )}
      </Row>
      <Spacer size='small' />
    </div>
  );
}

function SelectionTabs({
  loadElementsIndividually,
  donationAmount,
  setDonationAmount,
  setShowDonateForm
}: {
  loadElementsIndividually: boolean;
  donationAmount: DonationAmount;
  setDonationAmount: React.Dispatch<React.SetStateAction<DonationAmount>>;
  setShowDonateForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();
  return (
    <Row className={'donate-btn-group'}>
      <Col
        xs={12}
        {...(loadElementsIndividually && {
          className: 'two-seconds-delay-fade-in'
        })}
      >
        <b>
          {t('donate.confirm-monthly', {
            usd: formattedAmountLabel(donationAmount)
          })}
        </b>
        <Spacer size='small' />
        <Tabs
          className={'donate-btn-group'}
          defaultValue={donationAmount.toString()}
        >
          <TabsList className='nav-lists'>
            {subscriptionAmounts.map(value => (
              <TabsTrigger
                key={value}
                value={value.toString()}
                onClick={() => setDonationAmount(value)}
              >
                ${formattedAmountLabel(value)}
              </TabsTrigger>
            ))}
          </TabsList>
          <Spacer size='small' />
          {subscriptionAmounts.map(value => {
            const usd = formattedAmountLabel(donationAmount);
            const hours = convertToTimeContributed(donationAmount);
            const donationDescription = t('donate.your-donation-2', {
              usd,
              hours
            });

            return (
              <TabsContent
                key={value}
                className='tab-content'
                value={value.toString()}
              >
                <p>{donationDescription}</p>
              </TabsContent>
            );
          })}
        </Tabs>
        <Button
          block={true}
          bsStyle='primary'
          className='text-center confirm-donation-btn donate-btn-group'
          type='submit'
          onClick={() => setShowDonateForm(true)}
        >
          {t('buttons.donate')}
        </Button>
        <Spacer size='medium' />
      </Col>
    </Row>
  );
}

function CloseButtonRow({
  showSkipButton,
  isDisabled,
  closeLabel,
  closeDonationModal
}: {
  showSkipButton: boolean;
  isDisabled: boolean;
  closeLabel: boolean;
  closeDonationModal: () => void;
}) {
  const { t } = useTranslation();
  return (
    <Row>
      <Col
        sm={4}
        smOffset={4}
        xs={8}
        xsOffset={2}
        className={showSkipButton ? 'no-delay-fade-in' : 'no-opacity'}
      >
        <Button
          bsSize='sm'
          bsStyle='primary'
          className='btn-link close-button'
          onClick={closeDonationModal}
          tabIndex='0'
          disabled={isDisabled}
        >
          {closeLabel ? t('buttons.close') : t('buttons.ask-later')}
        </Button>
      </Col>
    </Row>
  );
}

function DonationBody({
  closeLabel,
  ctaNumber,
  showMultiTier,
  recentlyClaimedBlock,
  donationAmount,
  loadElementsIndividually,
  handleProcessing,
  setShowDonateForm,
  closeDonationModal,
  isDisabled,
  showSkipButton
}: {
  closeLabel: boolean;
  ctaNumber: number;
  showMultiTier: boolean;
  recentlyClaimedBlock: RecentlyClaimedBlock;
  donationAmount: DonationAmount;
  loadElementsIndividually: boolean;
  handleProcessing: () => void;
  setShowDonateForm: React.Dispatch<React.SetStateAction<boolean>>;
  closeDonationModal: () => void;
  isDisabled: boolean;
  showSkipButton: boolean;
}) {
  return (
    <>
      <ModalHeader
        closeLabel={closeLabel}
        ctaNumber={ctaNumber}
        recentlyClaimedBlock={recentlyClaimedBlock}
        showMultiTier={showMultiTier}
      />
      <DonationFormRow
        donationAmount={donationAmount}
        handleProcessing={handleProcessing}
        showMultiTier={showMultiTier}
        loadElementsIndividually={loadElementsIndividually}
        setShowDonateForm={setShowDonateForm}
      />
      <CloseButtonRow
        closeDonationModal={closeDonationModal}
        closeLabel={closeLabel}
        isDisabled={isDisabled}
        showSkipButton={showSkipButton}
      />
    </>
  );
}

function DonationFormRow({
  handleProcessing,
  loadElementsIndividually,
  showMultiTier,
  setShowDonateForm,
  donationAmount
}: {
  handleProcessing: () => void;
  loadElementsIndividually: boolean;
  showMultiTier: boolean;
  setShowDonateForm: React.Dispatch<React.SetStateAction<boolean>>;
  donationAmount: DonationAmount;
}) {
  return (
    <Row>
      <Col
        xs={12}
        {...(loadElementsIndividually && {
          className: 'two-seconds-delay-fade-in'
        })}
      >
        <DonateForm
          handleProcessing={handleProcessing}
          isMinimalForm={true}
          paymentContext={PaymentContext.Modal}
          editAmount={
            showMultiTier ? () => setShowDonateForm(false) : undefined
          }
          selectedDonationAmount={donationAmount}
        />
        <Spacer size='medium' />
      </Col>
    </Row>
  );
}

function MultiTierDonationBody({
  closeLabel,
  ctaNumber,
  showMultiTier,
  recentlyClaimedBlock,
  donationAmount,
  loadElementsIndividually,
  setDonationAmount,
  setShowDonateForm,
  closeDonationModal,
  isDisabled,
  showSkipButton,
  showDonateForm,
  handleProcessing
}: {
  closeLabel: boolean;
  ctaNumber: number;
  showMultiTier: boolean;
  recentlyClaimedBlock: RecentlyClaimedBlock;
  donationAmount: DonationAmount;
  loadElementsIndividually: boolean;
  setDonationAmount: React.Dispatch<React.SetStateAction<DonationAmount>>;
  setShowDonateForm: React.Dispatch<React.SetStateAction<boolean>>;
  closeDonationModal: () => void;
  isDisabled: boolean;
  showSkipButton: boolean;
  showDonateForm: boolean;
  handleProcessing: () => void;
}) {
  return (
    <>
      <div {...(showDonateForm && { className: 'hide' })}>
        <ModalHeader
          closeLabel={closeLabel}
          ctaNumber={ctaNumber}
          recentlyClaimedBlock={recentlyClaimedBlock}
          showMultiTier={showMultiTier}
        />
        <SelectionTabs
          donationAmount={donationAmount}
          loadElementsIndividually={loadElementsIndividually}
          setDonationAmount={setDonationAmount}
          setShowDonateForm={setShowDonateForm}
        />
        <CloseButtonRow
          closeDonationModal={closeDonationModal}
          closeLabel={closeLabel}
          isDisabled={isDisabled}
          showSkipButton={showSkipButton}
        />
      </div>
      <div {...(!showDonateForm && { className: 'hide' })}>
        <DonationFormRow
          donationAmount={donationAmount}
          handleProcessing={handleProcessing}
          showMultiTier={showMultiTier}
          loadElementsIndividually={loadElementsIndividually}
          setShowDonateForm={setShowDonateForm}
        />
        {closeLabel && (
          <CloseButtonRow
            closeDonationModal={closeDonationModal}
            closeLabel={closeLabel}
            isDisabled={isDisabled}
            showSkipButton={showSkipButton}
          />
        )}
      </div>
    </>
  );
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
  const [showDonateForm, setShowDonateForm] = useState(true);
  const [donationAmount, setDonationAmount] = useState(
    defaultDonation.donationAmount
  );
  const loadElementsIndividually = useFeature('load_elements_individually').on;
  const showMultiTier = useFeature('multi-tier').on;

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

  useEffect(() => {
    if (showMultiTier) {
      setShowDonateForm(false);
      setDonationAmount(defaultTierAmount);
    }
  }, [showMultiTier]);

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
        {showMultiTier ? (
          <MultiTierDonationBody
            recentlyClaimedBlock={recentlyClaimedBlock}
            setDonationAmount={setDonationAmount}
            setShowDonateForm={setShowDonateForm}
            showDonateForm={showDonateForm}
            showMultiTier={showMultiTier}
            showSkipButton={showSkipButton}
            closeDonationModal={closeDonationModal}
            closeLabel={closeLabel}
            ctaNumber={ctaNumber}
            donationAmount={donationAmount}
            handleProcessing={handleProcessing}
            isDisabled={isDisabled}
            loadElementsIndividually={loadElementsIndividually}
          />
        ) : (
          <DonationBody
            closeDonationModal={closeDonationModal}
            closeLabel={closeLabel}
            ctaNumber={ctaNumber}
            donationAmount={donationAmount}
            isDisabled={isDisabled}
            handleProcessing={handleProcessing}
            loadElementsIndividually={loadElementsIndividually}
            recentlyClaimedBlock={recentlyClaimedBlock}
            setShowDonateForm={setShowDonateForm}
            showMultiTier={showMultiTier}
            showSkipButton={showSkipButton}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

DonateModal.displayName = 'DonateModal';

export default connect(mapStateToProps, mapDispatchToProps)(DonateModal);
