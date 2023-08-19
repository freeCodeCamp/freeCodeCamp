import { Row, Col, Alert } from '@freecodecamp/react-bootstrap';
import type { TFunction } from 'i18next';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import { Container } from '@freecodecamp/ui';
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
import { PaymentContext } from '../../../config/donation-settings';

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
        <Spacer size='large'>
          <Row>
            <>
              <Col lg={6} lgOffset={0} md={8} mdOffset={2} sm={10} smOffset={1}>
                <Row>
                  <Col className={'text-center'} xs={12}>
                    {isDonating ? (
                      <h2>{t('donate.thank-you')}</h2>
                    ) : (
                      <h2>{t('donate.help-more')}</h2>
                    )}
                    <Spacer size='medium' />
                  </Col>
                </Row>
                {isDonating ? (
                  <Alert data-cy='donate-alert' closeLabel={t('buttons.close')}>
                    <p data-cy='donate.thank-you'>{t('donate.thank-you')}</p>
                    <br />
                    <DonationOptionsAlertText />
                  </Alert>
                ) : null}
                <DonationText />
                <Row>
                  <Col xs={12}>
                    <DonateForm paymentContext={PaymentContext.DonatePage} />
                  </Col>
                </Row>
                <Spacer size='exLarge' />
                <Row className='donate-support' id='FAQ'>
                  <Col className={'text-center'} xs={12}>
                    <hr />
                    <h2>{t('donate.faq')}</h2>
                    <Spacer size='medium' />
                  </Col>
                  <Col xs={12}>
                    <DonationFaqText />
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <CampersImage pageName='donate' />
              </Col>
            </>
          </Row>
        </Spacer>
      </Container>
    </>
  );
}

DonatePage.displayName = 'DonatePage';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DonatePage));
