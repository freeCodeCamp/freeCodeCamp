import { Grid, Row, Col, Alert } from '@freecodecamp/react-bootstrap';
import type { TFunction } from 'i18next';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';

import DonateForm from '../components/Donation/DonateForm';
import {
  DonationText,
  DonationSupportText,
  DonationOptionsText,
  DonationOptionsAlertText
} from '../components/Donation/DonationTextComponents';
import { Spacer, Loader } from '../components/helpers';
import CampersImage from '../components/landing/components/CampersImage';
import { signInLoadingSelector, userSelector, executeGA } from '../redux';

interface ExecuteGaArg {
  type: string;
  data: {
    category: string;
    action: string;
    nonInteraction?: boolean;
    label?: string;
    value?: number;
  };
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
      type: 'event',
      data: {
        category: 'Donation View',
        action: `Displayed donate page`,
        nonInteraction: true
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleProcessing(duration: string, amount: number, action: string) {
    executeGA({
      type: 'event',
      data: {
        category: 'Donation',
        action: `donate page ${action}`,
        label: duration,
        value: amount
      }
    });
  }

  return showLoading ? (
    <Loader fullScreen={true} />
  ) : (
    <>
      <Helmet title={`${t('donate.title')} | freeCodeCamp.org`} />
      <Grid className='donate-page-wrapper'>
        <Spacer />
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
                  <Spacer />
                </Col>
              </Row>
              {isDonating ? (
                <Alert>
                  <p>{t('donate.thank-you-2')}</p>
                  <br />
                  <DonationOptionsAlertText />
                </Alert>
              ) : null}
              <DonationText />
              <Row>
                <Col xs={12}>
                  <DonateForm handleProcessing={handleProcessing} />
                </Col>
              </Row>
              <Row className='donate-support'>
                <Col xs={12}>
                  <hr />
                  <DonationOptionsText />
                  <DonationSupportText />
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <CampersImage page='donate' />
            </Col>
          </>
        </Row>
        <Spacer />
      </Grid>
    </>
  );
}

DonatePage.displayName = 'DonatePage';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DonatePage));
