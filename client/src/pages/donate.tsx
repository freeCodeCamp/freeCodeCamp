import { Container, Col, Row } from '@freecodecamp/ui';
import type { TFunction } from 'i18next';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import MultiTierDonationForm from '../components/Donation/multi-tier-donation-form';
import {
  CtaText,
  ThankYouMessage,
  DonationFaqText,
  SupportBenefitsText,
  CurrentInitiativesText,
  CommunityAchievementsText,
  GetSupporterBenefitsText
} from '../components/Donation/donation-text-components';
import { Spacer, Loader } from '../components/helpers';
import {
  signInLoadingSelector,
  userSelector,
  donationFormStateSelector
} from '../redux/selectors';
import { PaymentContext } from '../../../shared/config/donation-settings';
import { DonateFormState } from '../redux/types';
import callGA from '../analytics/call-ga';
interface DonatePageProps {
  isDonating?: boolean;
  showLoading: boolean;
  t: TFunction;
  donationFormState: DonateFormState;
}

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  donationFormStateSelector,
  (
    { isDonating }: { isDonating: boolean },
    showLoading: boolean,
    donationFormState: DonateFormState
  ) => ({
    isDonating,
    showLoading,
    donationFormState
  })
);

function DonatePage({
  isDonating = false,
  showLoading,
  t,
  donationFormState
}: DonatePageProps) {
  useEffect(() => {
    callGA({
      event: 'donation_view',
      action: `Displayed Donate Page`
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return showLoading ? (
    <Loader fullScreen={true} />
  ) : (
    <>
      <Helmet title={`${t('donate.title')} | freeCodeCamp.org`} />
      <Container fluid={true} className='gradient-container'>
        <Container className='donate-supporter-page-section'>
          <main>
            <Row className={'donation-section'}>
              <Col lg={6} lgOffset={0} md={8} mdOffset={1} sm={12}>
                {isDonating ? (
                  <ThankYouMessage
                    askForDonation={!donationFormState.success}
                  />
                ) : (
                  <CtaText />
                )}
              </Col>
              <Col lg={6} lgOffset={0} md={8} mdOffset={1} sm={12}>
                {!isDonating || donationFormState.success ? (
                  <MultiTierDonationForm
                    paymentContext={PaymentContext.DonatePage}
                  />
                ) : null}
              </Col>
            </Row>
          </main>
        </Container>
      </Container>
      <Container className='donate-supporter-page-section'>
        <Row>
          <Col lg={6} lgOffset={0} md={8} mdOffset={2} sm={10}>
            <Spacer size='large' />
            <SupportBenefitsText />
          </Col>
        </Row>
        <Row>
          <Col lg={6} lgOffset={0} md={8} mdOffset={2} sm={10}>
            <Spacer size='large' />
            <CurrentInitiativesText />
          </Col>
        </Row>
        <Row>
          <Col lg={6} lgOffset={0} md={8} mdOffset={2} sm={10}>
            <Spacer size='large' />
            <CommunityAchievementsText />
          </Col>
        </Row>
        <Row>
          <Col lg={6} lgOffset={0} md={8} mdOffset={2} sm={10}>
            <GetSupporterBenefitsText isDonating={Boolean(isDonating)} />
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Spacer size='large' />
            <hr />
            <Spacer size='large' />
          </Col>
        </Row>
      </Container>
      <Container className='donate-supporter-page-section'>
        <Row>
          <Col lg={10} lgOffset={0} md={8} mdOffset={2} sm={10}>
            <DonationFaqText />
          </Col>
        </Row>
        <Spacer size='large' />
      </Container>
    </>
  );
}

DonatePage.displayName = 'DonatePage';

export default connect(mapStateToProps)(withTranslation()(DonatePage));
