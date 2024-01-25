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
  if (showAnimation) {
    return (
      <img
        alt={'asdfasd'}
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
  showDonationAnimation
}: {
  recentlyClaimedBlock: RecentlyClaimedBlock;
  showHeaderAndFooter: boolean;
  donationAttempted: boolean;
  showForm: boolean;
  showDonationAnimation: boolean;
}) {
  const { t } = useTranslation();
  if (showHeaderAndFooter && !donationAttempted) {
    if (!showForm && showDonationAnimation) {
      return (
        <Row className='text-center block-modal-text'>
          <Col sm={10} smOffset={1} xs={12}>
            <h2>{t('donate.modal-benefits-title')}</h2>
          </Col>
        </Row>
      );
    }
    if (!showDonationAnimation)
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

  return null;
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
  return (
    <Row className={'donate-btn-group'}>
      <Col xs={12}>
        <ModalBenefitList />
        <Spacer size='small' />
        <button
          className='text-center confirm-donation-btn donate-btn-group'
          type='submit'
          onClick={() => setShowForm(true)}
        >
          {t('donate.become-supporter')}
        </button>
        <Spacer size='medium' />
      </Col>
    </Row>
  );
};

function DonationModalBody({
  closeDonationModal,
  recentlyClaimedBlock
}: DonationModalBodyProps): JSX.Element {
  const [donationAttempted, setDonationAttempted] = useState(false);
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);
  let showDonationAnimation = useFeature('donation-animation').on;

  // for testing
  showDonationAnimation = true;

  const handleProcessing = () => {
    setDonationAttempted(true);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 20000); // 20000 milliseconds = 20 seconds

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal.Body className='no-delay-fade-in'>
      {isVisible && (
        <img
          alt={'asdfasd'}
          src={donationAnimation}
          id={'donaition-animation'}
          data-playwright-test-label='not-found-image'
        />
      )}
      {!isVisible && (
        <>
          <div className='donation-icon-container'>
            <Illustration
              showAnimation={showDonationAnimation}
              recentlyClaimedBlock={recentlyClaimedBlock}
            />
          </div>
          <ModalHeader
            recentlyClaimedBlock={recentlyClaimedBlock}
            showHeaderAndFooter={showHeaderAndFooter}
            donationAttempted={donationAttempted}
            showForm={showForm}
            showDonationAnimation={showDonationAnimation}
          />
          <Spacer size='small' />
          {showForm ? (
            <MultiTierDonationForm
              setShowHeaderAndFooter={setShowHeaderAndFooter}
              handleProcessing={handleProcessing}
              paymentContext={PaymentContext.Modal}
              isMinimalForm={true}
            />
          ) : (
            <Benefits setShowForm={setShowForm} />
          )}
          {(showHeaderAndFooter || donationAttempted) && (
            <CloseButtonRow
              closeDonationModal={closeDonationModal}
              donationAttempted={donationAttempted}
            />
          )}{' '}
        </>
      )}
    </Modal.Body>
  );
}

DonationModalBody.displayName = 'DonationModalBody';

export default DonationModalBody;
