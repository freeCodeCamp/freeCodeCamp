import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col, Alert } from '@freecodecamp/react-bootstrap';
import { TFunction, withTranslation } from 'react-i18next';

import { Spacer, Loader } from '../components/helpers';
import DonateForm from '../components/Donation/DonateForm';
import {
  DonationText,
  DonationSupportText,
  DonationOptionsText,
  DonationOptionsAlertText
} from '../components/Donation/DonationTextComponents';
import { signInLoadingSelector, userSelector, executeGA } from '../redux';
import CampersImage from '../components/landing/components/CampersImage';

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
        {/* 'Spacer' cannot be used as a JSX component. */}
        {/* Its return type 'Element | Element[]' is not a valid JSX element. */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
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
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore */}
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
              <DonateForm handleProcessing={handleProcessing} />
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
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
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
