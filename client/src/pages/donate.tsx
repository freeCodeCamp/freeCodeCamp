import { Alert, Container, Col, Row } from '@freecodecamp/ui';
import type { TFunction } from 'i18next';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import DonateForm from '../components/Donation/donate-form';
import {
  DonationText,
  DonationOptionsAlertText,
  DonationFaqText
} from '../components/Donation/donation-text-components';
import { Spacer, Loader } from '../components/helpers';
import CampersImage from '../components/landing/components/campers-image';
import { executeGA } from '../redux/actions';
import { signInLoadingSelector, userSelector } from '../redux/selectors';
import { PaymentContext } from '../../../shared/config/donation-settings';

export interface ExecuteGaArg {
  event: string;
  action: string;
  duration?: string;
  amount?: number;
}
interface DonatePageProps {
  executeGA: (arg: ExecuteGaArg) => void;
  isDonating?: boolean;
  showLoading: boolean;
  t: TFunction;
}

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ isDonating }: { isDonating: boolean }, showLoading: boolean) => ({
    isDonating,
    showLoading
  })
);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ executeGA }, dispatch);

function DonatePage({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  executeGA = () => {},
  isDonating = false,
  showLoading,
  t
}: DonatePageProps) {
  useEffect(() => {
    executeGA({
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
      <Container className='donate-page-wrapper'>
        <Spacer size='medium' />
        <Row>
          <Col lg={6} lgOffset={0} md={8} mdOffset={2} sm={10} smOffset={1}>
            {isDonating ? (
              <h2
                data-playwright-test-label='main-head'
                className='text-center'
              >
                {t('donate.thank-you')}
              </h2>
            ) : (
              <h2
                data-playwright-test-label='main-head'
                className='text-center'
              >
                {t('donate.help-more')}
              </h2>
            )}
            <Spacer size='medium' />
            {isDonating ? (
              <Alert variant='info' data-cy='donate-alert'>
                <p data-cy='donate.thank-you'>{t('donate.thank-you')}</p>
                <br />
                <DonationOptionsAlertText />
              </Alert>
            ) : null}
            <DonationText />
            <DonateForm paymentContext={PaymentContext.DonatePage} />
            <Spacer size='exLarge' />
            <hr />
            <h2 data-playwright-test-label='faq-head' className={'text-center'}>
              {t('donate.faq')}
            </h2>
            <Spacer size='medium' />
            <DonationFaqText />
          </Col>
          <Col lg={6}>
            <CampersImage pageName='donate' />
          </Col>
        </Row>
        <Spacer size='medium' />
      </Container>
    </>
  );
}

DonatePage.displayName = 'DonatePage';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DonatePage));
