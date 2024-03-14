import { Modal } from '@freecodecamp/react-bootstrap';
import { Col, Row } from '@freecodecamp/ui';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFeature } from '@growthbook/growthbook-react';
import BearProgressModal from '../../assets/images/components/bear-progress-modal';
import BearBlockCompletion from '../../assets/images/components/bear-block-completion-modal';
import { closeDonationModal } from '../../redux/actions';
import { Spacer } from '../helpers';
import { PaymentContext } from '../../../../shared/config/donation-settings'; //
import donationAnimation from '../../assets/images/donation-bear-animation.svg';
import supporterBear from '../../assets/images/supporter-bear.svg';
import callGA from '../../analytics/call-ga';
import MultiTierDonationForm from './multi-tier-donation-form';
import { ModalBenefitList } from './donation-text-components';

type RecentlyClaimedBlock = null | { block: string; superBlock: string };

type DonationModalBodyProps = {
  activeDonors?: number;
  closeDonationModal: typeof closeDonationModal;
  recentlyClaimedBlock: RecentlyClaimedBlock;
};

const Illustration = ({
  recentlyClaimedBlock,
  showAnimation
}: {
  recentlyClaimedBlock: RecentlyClaimedBlock;
  showAnimation?: boolean;
}) => {
  const { t } = useTranslation();
  if (showAnimation) {
    return (
      <img
        alt={t('donate.flying-bear')}
        id={'supporter-bear'}
        src={supporterBear}
        data-playwright-test-label='not-found-image'
      />
    );
  } else
    return recentlyClaimedBlock ? (
      <BearBlockCompletion className='donation-icon' />
    ) : (
      <BearProgressModal className='donation-icon' />
    );
};

function ModalHeader({
  recentlyClaimedBlock,
  showHeaderAndFooter,
  donationAttempted,
  showForm,
  donationAnimationFlag
}: {
  recentlyClaimedBlock: RecentlyClaimedBlock;
  showHeaderAndFooter: boolean;
  donationAttempted: boolean;
  showForm: boolean;
  donationAnimationFlag: boolean;
}) {
  const { t } = useTranslation();
  if (!showHeaderAndFooter || donationAttempted) {
    return null;
  } else if (!donationAnimationFlag) {
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
  } else if (!showForm) {
    return (
      <Row className='text-center block-modal-text'>
        <Col sm={10} smOffset={1} xs={12}>
          <h2>{t('donate.modal-benefits-title')}</h2>
        </Col>
      </Row>
    );
  } else {
    return null;
  }
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
        <button
          className='close-button'
          type='button'
          onClick={closeDonationModal}
        >
          {donationAttempted ? t('buttons.close') : t('buttons.ask-later')}
        </button>
      </Col>
    </Row>
  );
}

const Benefits = ({ setShowForm }: { setShowForm: (arg: boolean) => void }) => {
  const { t } = useTranslation();
  const handleBecomeSupporterClick = () => {
    callGA({
      event: 'donation_related',
      action: `Modal Become Supporter Click`
    });
    setShowForm(true);
  };
  return (
    <Row className={'donate-btn-group'}>
      <Col xs={12}>
        <ModalBenefitList />
        <Spacer size='small' />
        <button
          className='text-center confirm-donation-btn donate-btn-group'
          type='submit'
          onClick={handleBecomeSupporterClick}
        >
          {t('donate.become-supporter')}
        </button>
        <Spacer size='medium' />
      </Col>
    </Row>
  );
};

const AnimationContainer = ({
  setIsAnimationVisible
}: {
  setIsAnimationVisible: (arg: boolean) => void;
}) => {
  const { t } = useTranslation();
  return (
    <>
      <p style={{ opacity: 0, position: 'absolute' }}>
        {t('donate.animation-description')}{' '}
      </p>
      <div className='donation-animation-container' aria-hidden='true'>
        <div className='donation-animation-bullet-points'>
          <p className='donation-animation-bullet-1'>
            {t('donate.become-supporter')}
          </p>
          <p className='donation-animation-bullet-2'>
            {t('donate.remove-distractions')}
          </p>
          <p className='donation-animation-bullet-3'>
            {t('donate.reach-goals-faster')}
          </p>
          <p className='donation-animation-bullet-4'>
            {t('donate.help-millions-learn')}
          </p>
        </div>
        <img
          alt=''
          src={donationAnimation}
          id={'donation-animation'}
          data-playwright-test-label='not-found-image'
        />
      </div>
      <button
        style={{ opacity: 0, position: 'absolute' }}
        className={'sr-only'}
        onClick={() => setIsAnimationVisible(false)}
      >
        {t('buttons.skip-advertisement')}
      </button>
    </>
  );
};

const BecomeASupporterConfirmation = ({
  donationAnimationFlag,
  recentlyClaimedBlock,
  showHeaderAndFooter,
  closeDonationModal,
  donationAttempted,
  showForm,
  setShowHeaderAndFooter,
  handleProcessing,
  setShowForm
}: {
  donationAnimationFlag: boolean;
  recentlyClaimedBlock: RecentlyClaimedBlock;
  showHeaderAndFooter: boolean;
  closeDonationModal: () => void;
  donationAttempted: boolean;
  showForm: boolean;
  setShowHeaderAndFooter: (arg: boolean) => void;
  handleProcessing: () => void;
  setShowForm: (arg: boolean) => void;
}) => {
  return (
    <div className='no-delay-fade-in'>
      <div className='donation-icon-container'>
        <Illustration
          showAnimation={donationAnimationFlag}
          recentlyClaimedBlock={recentlyClaimedBlock}
        />
      </div>
      <ModalHeader
        recentlyClaimedBlock={recentlyClaimedBlock}
        showHeaderAndFooter={showHeaderAndFooter}
        donationAttempted={donationAttempted}
        showForm={showForm}
        donationAnimationFlag={donationAnimationFlag}
      />
      <Spacer size='small' />
      {showForm || !donationAnimationFlag ? (
        <MultiTierDonationForm
          setShowHeaderAndFooter={setShowHeaderAndFooter}
          handleProcessing={handleProcessing}
          paymentContext={PaymentContext.Modal}
          isMinimalForm={true}
          isAnimationEnabled={donationAnimationFlag}
        />
      ) : (
        <Benefits setShowForm={setShowForm} />
      )}
      {(showHeaderAndFooter || donationAttempted) && (
        <CloseButtonRow
          closeDonationModal={closeDonationModal}
          donationAttempted={donationAttempted}
        />
      )}
    </div>
  );
};

function DonationModalBody({
  closeDonationModal,
  recentlyClaimedBlock
}: DonationModalBodyProps): JSX.Element {
  const [donationAttempted, setDonationAttempted] = useState(false);
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);
  const donationAnimationFlag = useFeature('donation-animation').on;
  const [isAnimationVisible, setIsAnimationVisible] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const handleProcessing = () => {
    setDonationAttempted(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationVisible(false);
    }, 20000); // 20000 milliseconds = 20 seconds

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal.Body>
      <div aria-live={'polite'}>
        {donationAnimationFlag && isAnimationVisible ? (
          <AnimationContainer setIsAnimationVisible={setIsAnimationVisible} />
        ) : (
          <BecomeASupporterConfirmation
            donationAnimationFlag={donationAnimationFlag}
            recentlyClaimedBlock={recentlyClaimedBlock}
            showHeaderAndFooter={showHeaderAndFooter}
            closeDonationModal={closeDonationModal}
            donationAttempted={donationAttempted}
            showForm={showForm}
            setShowHeaderAndFooter={setShowHeaderAndFooter}
            handleProcessing={handleProcessing}
            setShowForm={setShowForm}
          />
        )}
      </div>
    </Modal.Body>
  );
}

DonationModalBody.displayName = 'DonationModalBody';

export default DonationModalBody;
