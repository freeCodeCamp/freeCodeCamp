import React from 'react';
import Helmet from 'react-helmet';
import { withTranslation, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Row, Col, Spacer } from '@freecodecamp/ui';
import BigCallToAction from '../components/landing/components/big-call-to-action';

import {
  isSignedInSelector,
  isDonatingSelector,
  updateCardStateSelector
} from '../redux/selectors';
import { updateCard, updateCardComplete } from '../redux/actions';
import { UpdateCardState } from '../redux/types';

import {
  DonationFaqText,
  ThankYouMessage,
  SupportBenefitsText,
  CurrentInitiativesText
} from '../components/Donation/donation-text-components';
import SupporterBadge from '../assets/icons/supporter-badge';

interface SupportersPageProps {
  isNewEmail: boolean;
  resetDonationFormState: () => void;
  isSignedIn: boolean;
  isDonating: boolean;
  updateCardState: UpdateCardState;
  updateCard: () => void;
  updateCardComplete: () => void;
}

const mapStateToProps = createSelector(
  isSignedInSelector,
  isDonatingSelector,
  updateCardStateSelector,
  (
    isSignedIn: boolean,
    isDonating: boolean,
    updateCardState: UpdateCardState
  ) => ({
    isSignedIn,
    isDonating,
    updateCardState
  })
);

const mapDispatchToProps = { updateCard, updateCardComplete };

function ConditionalContent({
  isSignedIn,
  isDonating
}: {
  isSignedIn: boolean;
  isDonating: boolean;
}) {
  const { t } = useTranslation();

  if (isSignedIn && !isDonating) {
    return (
      <Col md={12}>
        <Spacer size='l' />
        <h1 id='content-start' className='text-center'>
          {t('learn.donation-record-not-found')}
        </h1>
        <Spacer size='m' />
        <p className='text-center'>{t('learn.contact-support-mistake')}</p>
        <Spacer size='l' />
      </Col>
    );
  } else if (isSignedIn && isDonating) {
    return (
      <>
        <Col lg={6} lgOffset={0} md={8} mdOffset={1} sm={12}>
          <div className='supporter-badge-container'>
            <SupporterBadge />
          </div>
          <ThankYouMessage askForDonation={false} thankContributon={true} />
        </Col>
        <Col lg={6} lgOffset={0} md={8} mdOffset={1} sm={12}>
          <CurrentInitiativesText isSupportersPage={true} />
          <Spacer size='m' />
          <SupportBenefitsText isSupportersPage={true} />
        </Col>
      </>
    );
  } else
    return (
      <Col md={12}>
        <Spacer size='l' />
        <h1 id='content-start' className='text-center'>
          {t('learn.sign-in-see-benefits')}
        </h1>
        <Spacer size='l' />
        <BigCallToAction text={t('buttons.sign-in')} />
        <Spacer size='l' />
      </Col>
    );
}

function SupportersPage({ isSignedIn, isDonating }: SupportersPageProps) {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('misc.supporters-page-title')} | freeCodeCamp.org</title>
      </Helmet>
      <Container
        fluid={true}
        className={`${isDonating && 'supporters-background'} `}
      >
        <Container className='donate-supporter-page-section'>
          <main>
            <Row className={'donation-section'}>
              <ConditionalContent
                isSignedIn={isSignedIn}
                isDonating={isDonating}
              />
            </Row>
          </main>
        </Container>
      </Container>
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <hr />
          </Col>
        </Row>
      </Container>
      <Container className='donate-supporter-page-section'>
        <Spacer size='l' />
        <Row>
          <Col lg={10} lgOffset={0} md={8} mdOffset={2} sm={10}>
            <DonationFaqText />
          </Col>
        </Row>
        <Spacer size='l' />
      </Container>
    </>
  );
}

SupportersPage.displayName = 'Supporters-Page';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SupportersPage));
