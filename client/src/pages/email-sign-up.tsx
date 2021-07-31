import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import SectionHeader from '../components/settings/section-header';
import IntroDescription from '../components/Intro/components/IntroDescription';
import { TFunction, withTranslation } from 'react-i18next';

import { Row, Col, Button, Grid } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { createSelector } from 'reselect';

import { ButtonSpacer, Spacer } from '../components/helpers';
import { acceptTerms, userSelector } from '../redux';
import createRedirect from '../components/create-redirect';

import './email-sign-up.css';

interface AcceptPrivacyTermsProps {
  acceptTerms: (accept: boolean | null) => void;
  acceptedPrivacyTerms: boolean;
  t: TFunction;
}

const mapStateToProps = createSelector(
  userSelector,
  ({ acceptedPrivacyTerms }: { acceptedPrivacyTerms: boolean }) => ({
    acceptedPrivacyTerms
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ acceptTerms }, dispatch);
const RedirectToLearn = createRedirect('/learn');

function AcceptPrivacyTerms({
  acceptTerms,
  acceptedPrivacyTerms,
  t
}: AcceptPrivacyTermsProps) {
  useEffect(() => {
    return () => {
      // if a user navigates away from here we should set acceptedPrivacyTerms
      // to true (so they do not get pulled back) without changing their email
      // preferences (hence the null payload)
      // This makes sure that the user has to opt in to Quincy's emails and that
      // they are only asked twice
      if (!acceptedPrivacyTerms) {
        acceptTerms(null);
      }
    };
    // We're ignoring all dependencies, since this effect must only run once
    // (when the user leaves the page).
    // TODO: figure out how to useCallback to only run this effect once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onClick(isWeeklyEmailAccepted: boolean) {
    acceptTerms(isWeeklyEmailAccepted);
  }

  return acceptedPrivacyTerms ? (
    <RedirectToLearn />
  ) : (
    <>
      <Helmet>
        <title>{t('misc.email-signup')} | freeCodeCamp.org</title>
      </Helmet>
      <Grid className='default-page-wrapper email-sign-up'>
        <SectionHeader>{t('misc.email-signup')}</SectionHeader>
        <Row>
          <IntroDescription />
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <strong>{t('misc.quincy')}</strong>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Spacer />
            <p>{t('misc.email-blast')}</p>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Spacer />
          </Col>

          <Col md={4} mdOffset={2} sm={5} smOffset={1} xs={12}>
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='big-cta-btn'
              onClick={() => onClick(true)}
            >
              {t('buttons.yes-please')}
            </Button>
            <ButtonSpacer />
          </Col>
          <Col md={4} sm={5} xs={12}>
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='big-cta-btn'
              onClick={() => onClick(false)}
            >
              {t('buttons.no-thanks')}
            </Button>
            <ButtonSpacer />
          </Col>
          <Col xs={12}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Spacer />
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(AcceptPrivacyTerms));
