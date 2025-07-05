import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { useTranslation, Trans } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Button, Spacer } from '@freecodecamp/ui';

import createRedirect from '../components/create-redirect';
import { Loader, Link } from '../components/helpers';
import { apiLocation } from '../../config/env.json';

import { acceptTerms } from '../redux/actions';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector
} from '../redux/selectors';

import './email-sign-up.css';
interface AcceptPrivacyTermsProps {
  acceptTerms: (accept: boolean | null) => void;
  acceptedPrivacyTerms: boolean;
  isSignedIn: boolean;
  showLoading: boolean;
  completedChallengeCount?: number;
}

const mapStateToProps = createSelector(
  userSelector,
  isSignedInSelector,
  signInLoadingSelector,
  (
    {
      acceptedPrivacyTerms,
      completedChallengeCount
    }: { acceptedPrivacyTerms: boolean; completedChallengeCount: number },
    isSignedIn: boolean,
    showLoading: boolean
  ) => ({
    acceptedPrivacyTerms,
    isSignedIn,
    showLoading,
    completedChallengeCount
  })
);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ acceptTerms }, dispatch);
const RedirectToLearn = createRedirect('/learn');

function EmailListOptIn({
  isSignedIn,
  acceptTerms
}: {
  isSignedIn: boolean;
  acceptTerms: (accepted: boolean) => void;
}) {
  const { t } = useTranslation();
  if (isSignedIn) {
    return (
      <Container>
        <Row className='email-list-opt'>
          <Col md={4} mdOffset={2} sm={5} smOffset={1} xs={12}>
            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={() => acceptTerms(true)}
            >
              {t('buttons.yes-please')}
            </Button>
            <Spacer size='xs' />
          </Col>
          <Col md={4} sm={5} xs={12}>
            <Button
              block={true}
              size='large'
              variant='primary'
              onClick={() => acceptTerms(false)}
            >
              {t('buttons.no-thanks')}
            </Button>
            <Spacer size='xs' />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
        <Spacer size='xs' />
        <Button
          block={true}
          size='large'
          variant='primary'
          href={`${apiLocation}/signin`}
        >
          {t('buttons.sign-up-email-list')}
        </Button>
        <Spacer size='xs' />
      </Col>
    );
  }
}

function AcceptPrivacyTerms({
  acceptTerms,
  acceptedPrivacyTerms,
  isSignedIn,
  showLoading,
  completedChallengeCount = 0
}: AcceptPrivacyTermsProps) {
  const { t } = useTranslation();
  const acceptedPrivacyRef = useRef(acceptedPrivacyTerms);
  const acceptTermsRef = useRef(acceptTerms);
  const newAccount = isSignedIn && completedChallengeCount < 1;

  useEffect(() => {
    acceptedPrivacyRef.current = acceptedPrivacyTerms;
    acceptTermsRef.current = acceptTerms;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return acceptedPrivacyTerms ? (
    <RedirectToLearn />
  ) : (
    <>
      <Helmet>
        <title>{t('misc.email-signup')} | freeCodeCamp.org</title>
      </Helmet>
      <Container>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer size='l' />
            <h1 className='text-center'>
              {newAccount
                ? t('misc.brand-new-account')
                : t('misc.email-signup')}
            </h1>
            <Spacer size='xs' />
          </Col>
        </Row>
        {newAccount && (
          <Row>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <p>
                <Trans i18nKey='misc.duplicate-account-warning'>
                  <Link className='inline' to='/settings#danger-zone' />
                </Trans>
              </p>
              <hr />
            </Col>
          </Row>
        )}
        <Row className='email-sign-up'>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer size='xs' />
            <p>{t('misc.email-blast')}</p>
            <Spacer size='xs' />
          </Col>
          {showLoading ? (
            <Loader fullScreen={true} />
          ) : (
            <EmailListOptIn isSignedIn={isSignedIn} acceptTerms={acceptTerms} />
          )}
          <Col xs={12}>
            <Spacer size='m' />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptPrivacyTerms);
