import { Container, Col, Row, Spacer } from '@freecodecamp/ui';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
import { Loader } from '../components/helpers';
import {
  signInLoadingSelector,
  userSelector,
  donationFormStateSelector
} from '../redux/selectors';
import { PaymentContext } from '@freecodecamp/shared/config/donation-settings';
import { DonateFormState } from '../redux/types';
import callGA from '../analytics/call-ga';
import type { User } from '../redux/prop-types';
interface DonatePageProps {
  isDonating?: boolean;
  showLoading: boolean;
  donationFormState: DonateFormState;
}

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  donationFormStateSelector,
  (
    user: User | null,
    showLoading: boolean,
    donationFormState: DonateFormState
  ) => ({
    isDonating: user?.isDonating || false,
    showLoading,
    donationFormState
  })
);

function DonatePage({
  isDonating = false,
  showLoading,
  donationFormState
}: DonatePageProps) {
  useEffect(() => {
    callGA({
      event: 'donation_view',
      action: `Displayed Donate Page`
    });
  }, []);

  return showLoading ? (
    <Loader fullScreen={true} />
  ) : (
    <>
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
            <Spacer size='l' />
            <SupportBenefitsText />
          </Col>
        </Row>
        <Row>
          <Col lg={6} lgOffset={0} md={8} mdOffset={2} sm={10}>
            <Spacer size='l' />
            <CurrentInitiativesText />
          </Col>
        </Row>
        <Row>
          <Col lg={6} lgOffset={0} md={8} mdOffset={2} sm={10}>
            <Spacer size='l' />
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
            <Spacer size='l' />
            <hr />
            <Spacer size='l' />
          </Col>
        </Row>
      </Container>
      <Container className='donate-supporter-page-section'>
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

DonatePage.displayName = 'DonatePage';

export default connect(mapStateToProps)(DonatePage);

export function Head() {
  const { t } = useTranslation();
  return <title>{`${t('donate.title')} | freeCodeCamp.org`}</title>;
}
