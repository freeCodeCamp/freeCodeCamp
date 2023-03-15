import { Grid, Row, Col, Image, Button } from '@freecodecamp/react-bootstrap';
import { isEmpty } from 'lodash-es';
import { QRCodeSVG } from 'qrcode.react';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';

import envData from '../../../config/env.json';
import { getLangCode } from '../../../config/i18n';
import FreeCodeCampLogo from '../assets/icons/freecodecamp';
import DonateForm from '../components/Donation/donate-form';

import { createFlashMessage } from '../components/Flash/redux';
import { Loader, Spacer } from '../components/helpers';
import RedirectHome from '../components/redirect-home';
import { Themes } from '../components/settings/theme';
import { showCert, executeGA, fetchProfileForUser } from '../redux/actions';
import {
  showCertSelector,
  showCertFetchStateSelector,
  userFetchStateSelector,
  isDonatingSelector,
  userByNameSelector,
  usernameSelector
} from '../redux/selectors';
import { UserFetchState, User } from '../redux/prop-types';
import { certMap } from '../resources/cert-and-project-map';
import certificateMissingMessage from '../utils/certificate-missing-message';
import reallyWeirdErrorMessage from '../utils/really-weird-error-message';
import standardErrorMessage from '../utils/standard-error-message';

import { PaymentContext } from '../../../config/donation-settings';
import ShowProjectLinks from './show-project-links';

const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);
type Cert = {
  username: string;
  name: string;
  certName: string;
  certTitle: string;
  completionTime: number;
  date: number;
};
interface ShowCertificationProps {
  cert: Cert;
  certDashedName: string;
  certSlug: string;
  createFlashMessage: typeof createFlashMessage;
  executeGA: (payload: Record<string, unknown>) => void;
  fetchProfileForUser: (username: string) => void;
  fetchState: {
    pending: boolean;
    complete: boolean;
    errored: boolean;
  };
  isDonating: boolean;
  isValidCert: boolean;
  location: {
    pathname: string;
  };
  showCert: ({
    username,
    certSlug
  }: {
    username: string;
    certSlug: string;
  }) => void;
  signedInUserName: string;
  user: User;
  userFetchState: UserFetchState;
  userFullName: string;
  username: string;
}

const requestedUserSelector = (state: unknown, { username = '' }) =>
  userByNameSelector(username.toLowerCase())(state) as User;

const validCertSlugs = certMap.map(cert => cert.certSlug);

const mapStateToProps = (state: unknown, props: ShowCertificationProps) => {
  const isValidCert = validCertSlugs.some(slug => slug === props.certSlug);
  return createSelector(
    showCertSelector,
    showCertFetchStateSelector,
    usernameSelector,
    userFetchStateSelector,
    isDonatingSelector,
    requestedUserSelector,
    (
      cert: Cert,
      fetchState: ShowCertificationProps['fetchState'],
      signedInUserName: string,
      userFetchState: UserFetchState,
      isDonating: boolean,
      user
    ) => ({
      cert,
      fetchState,
      isValidCert,
      signedInUserName,
      userFetchState,
      isDonating,
      user
    })
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { createFlashMessage, showCert, fetchProfileForUser, executeGA },
    dispatch
  );

const ShowCertification = (props: ShowCertificationProps): JSX.Element => {
  const { t } = useTranslation();
  const [isDonationSubmitted, setIsDonationSubmitted] = useState(false);
  const [isDonationDisplayed, setIsDonationDisplayed] = useState(false);
  const [isDonationClosed, setIsDonationClosed] = useState(false);

  useEffect(() => {
    const { username, certSlug, isValidCert, showCert } = props;
    if (isValidCert) {
      showCert({ username, certSlug });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const {
      userFetchState: { complete: userComplete },
      signedInUserName,
      isDonating,
      cert: { username = '' },
      fetchProfileForUser,
      user,
      executeGA
    } = props;

    if (!signedInUserName || signedInUserName !== username) {
      if (isEmpty(user) && username) {
        fetchProfileForUser(username);
      }
    }

    if (
      !isDonationDisplayed &&
      userComplete &&
      signedInUserName &&
      signedInUserName === username &&
      !isDonating
    ) {
      setIsDonationDisplayed(true);
      executeGA({
        event: 'donation_view',
        action: 'Displayed Certificate Donation'
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isDonationDisplayed,
    props.userFetchState,
    props.signedInUserName,
    props.isDonating,
    props.cert,
    props.executeGA
  ]);

  const hideDonationSection = () => {
    setIsDonationDisplayed(false);
    setIsDonationClosed(true);
  };

  const handleProcessing = () => {
    setIsDonationSubmitted(true);
  };

  const {
    cert,
    fetchState,
    isValidCert,
    createFlashMessage,
    signedInUserName,
    location: { pathname }
  } = props;

  if (!isValidCert) {
    createFlashMessage(certificateMissingMessage);
    return <RedirectHome />;
  }

  const { pending, complete, errored } = fetchState;

  if (pending) {
    return <Loader fullScreen={true} />;
  }

  if (!pending && errored) {
    createFlashMessage(standardErrorMessage);
    return <RedirectHome />;
  }

  if (!pending && !complete && !errored) {
    createFlashMessage(reallyWeirdErrorMessage);
    return <RedirectHome />;
  }

  const {
    date,
    name: userFullName = null,
    username,
    certTitle,
    completionTime
  } = cert;

  const { user } = props;

  const displayName = userFullName ?? username;

  const certDate = new Date(date);
  const certYear = certDate.getFullYear();
  const certMonth = certDate.getMonth();
  const certURL = `https://freecodecamp.org${pathname}`;

  const donationCloseBtn = (
    <div>
      <Button
        block={true}
        bsSize='sm'
        bsStyle='primary'
        onClick={hideDonationSection}
      >
        {t('buttons.close')}
      </Button>
    </div>
  );

  const donationSection = (
    <div className='donation-section'>
      <Spacer size='large' />
      {!isDonationSubmitted && (
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <p>{t('donate.only-you')}</p>
          </Col>
        </Row>
      )}
      <Row>
        <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
          <DonateForm
            defaultTheme={Themes.Default}
            handleProcessing={handleProcessing}
            isMinimalForm={true}
            paymentContext={PaymentContext.Certificate}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={4} smOffset={4} xs={6} xsOffset={3}>
          {isDonationSubmitted && donationCloseBtn}
        </Col>
      </Row>
      <Spacer size='large' />
    </div>
  );

  const shareCertBtns = (
    <Row className='text-center'>
      <Col xs={12}>
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${certTitle}&organizationId=4831032&issueYear=${certYear}&issueMonth=${
            certMonth + 1
          }&certUrl=${certURL}`}
          target='_blank'
        >
          {t('profile.add-linkedin')}
        </Button>
        <Spacer size='medium' />
        <Button
          block={true}
          bsSize='lg'
          bsStyle='primary'
          href={`https://twitter.com/intent/tweet?text=${t('profile.tweet', {
            certTitle: certTitle,
            certURL: certURL
          })}`}
          target='_blank'
        >
          {t('profile.add-twitter')}
        </Button>
      </Col>
      <Spacer size='large' />
    </Row>
  );

  return (
    <Grid className='certificate-outer-wrapper'>
      {isDonationDisplayed && !isDonationClosed ? donationSection : ''}
      <Row className='certificate-wrapper certification-namespace'>
        <header>
          <Col md={5} sm={12}>
            <div className='logo'>
              <FreeCodeCampLogo aria-hidden='true' />
            </div>
          </Col>
          <Col md={7} sm={12}>
            <div className='issue-date' data-cy='issue-date'>
              {t('certification.issued')}&nbsp;
              <strong>
                {certDate.toLocaleString([localeCode, 'en-US'], {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </strong>
            </div>
          </Col>
        </header>

        <main className='information'>
          <div className='information-container'>
            <Trans i18nKey='certification.fulltext' title={certTitle}>
              <h3>placeholder</h3>
              <h1>
                <strong>{{ user: displayName }}</strong>
              </h1>
              <h3>placeholder</h3>
              <h1>
                <strong>
                  {{ title: t(`certification.title.${certTitle}`, certTitle) }}
                </strong>
              </h1>
              <h4>{{ time: completionTime }}</h4>
            </Trans>
          </div>
        </main>
        <footer>
          <div className='row signatures'>
            <Image
              alt="Quincy Larson's Signature"
              src={
                'https://cdn.freecodecamp.org' +
                '/platform/english/images/quincy-larson-signature.svg'
              }
            />
            <p>
              <strong>Quincy Larson</strong>
            </p>
            <p>{t('certification.executive')}</p>
          </div>
          <span className='qr-wrap'>
            <QRCodeSVG className='qr-code' value={certURL} />
          </span>
          <Row>
            <p className='verify'>
              {t('certification.verify', { certURL: certURL })}
            </p>
          </Row>
        </footer>
      </Row>
      <div className='row certificate-links'>
        <Spacer size='large' />
        {signedInUserName === username ? shareCertBtns : ''}
        <Spacer size='large' />
        <ShowProjectLinks certName={certTitle} name={displayName} user={user} />
        <Spacer size='large' />
      </div>
    </Grid>
  );
};

ShowCertification.displayName = 'ShowCertification';

export default connect(mapStateToProps, mapDispatchToProps)(ShowCertification);
