import { isEmpty } from 'lodash-es';
import { QRCodeSVG } from 'qrcode.react';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Image, Button, Spacer } from '@freecodecamp/ui';

import envData from '../../config/env.json';
import { getLangCode } from '../../../shared/config/i18n';
import FreeCodeCampLogo from '../assets/icons/freecodecamp-logo';
import MicrosoftLogo from '../assets/icons/microsoft-logo';
import { createFlashMessage } from '../components/Flash/redux';
import { Loader } from '../components/helpers';
import RedirectHome from '../components/redirect-home';
import { LocalStorageThemes } from '../redux/types';
import { showCert, fetchProfileForUser } from '../redux/actions';
import {
  showCertSelector,
  showCertFetchStateSelector,
  userFetchStateSelector,
  isDonatingSelector,
  userByNameSelector,
  usernameSelector
} from '../redux/selectors';
import { UserFetchState, User } from '../redux/prop-types';
import { liveCerts } from '../../config/cert-and-project-map';
import {
  certificateMissingErrorMessage,
  reallyWeirdErrorMessage,
  standardErrorMessage
} from '../utils/error-messages';

import { PaymentContext } from '../../../shared/config/donation-settings';
import ribbon from '../assets/images/ribbon.svg';
import {
  Certification,
  CertSlug,
  linkedInCredentialIds
} from '../../../shared/config/certification-settings';
import MultiTierDonationForm from '../components/Donation/multi-tier-donation-form';
import callGA from '../analytics/call-ga';
import ShowProjectLinks from './show-project-links';

const { clientLocale } = envData;

const localeCode = getLangCode(clientLocale);
type Cert = {
  username: string;
  name: string;
  certSlug: CertSlug;
  certTitle: string;
  completionTime: number;
  date: number;
};
interface ShowCertificationProps {
  cert: Cert;
  certDashedName: string;
  certSlug: string;
  createFlashMessage: typeof createFlashMessage;
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

const mapStateToProps = (state: unknown, props: ShowCertificationProps) => {
  const isValidCert = liveCerts.some(
    ({ certSlug }) => String(certSlug) === props.certSlug
  );
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
      user: User
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
    { createFlashMessage, showCert, fetchProfileForUser },
    dispatch
  );

const DonationCloseBtn = ({ onClick }: { onClick: () => void }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Button block={true} size='small' variant='primary' onClick={onClick}>
        {t('buttons.close')}
      </Button>
    </div>
  );
};

const DonationSection = ({
  isDonationSubmitted,
  handleProcessing,
  hideDonationSection
}: {
  isDonationSubmitted: boolean;
  handleProcessing: () => void;
  hideDonationSection: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div
      className='donation-section'
      data-playwright-test-label='donation-section'
    >
      <Spacer size='l' />
      {!isDonationSubmitted && (
        <Row>
          <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
            <p data-playwright-test-label='donation-text'>
              {t('donate.only-you')}
            </p>
          </Col>
        </Row>
      )}
      <Row>
        <Col
          lg={8}
          lgOffset={2}
          sm={10}
          smOffset={1}
          xs={12}
          data-playwright-test-label='donation-form'
        >
          <MultiTierDonationForm
            defaultTheme={LocalStorageThemes.Light}
            handleProcessing={handleProcessing}
            isMinimalForm={true}
            paymentContext={PaymentContext.Certificate}
          />
        </Col>
      </Row>
      <Spacer size='m' />
      <Row>
        <Col sm={4} smOffset={4} xs={6} xsOffset={3}>
          {isDonationSubmitted && (
            <DonationCloseBtn onClick={hideDonationSection} />
          )}
        </Col>
      </Row>
      <Spacer size='l' />
    </div>
  );
};

const ShareCertBtns = ({
  username,
  certDate,
  certTitle,
  certSlug,
  certURL
}: {
  username: string;
  certDate: Date;
  certTitle: string;
  certSlug: CertSlug;
  certURL: string;
}) => {
  const { t } = useTranslation();

  const certYear = certDate.getFullYear();
  const certMonth = certDate.getMonth();
  const urlFriendlyCertTitle = encodeURIComponent(certTitle);
  const linkedInCredentialId = `${username}-${linkedInCredentialIds[certSlug]}`;

  return (
    <Row className='text-center'>
      <Col xs={12}>
        <Button
          block={true}
          size='large'
          variant='primary'
          href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${urlFriendlyCertTitle}&organizationId=4831032&issueYear=${certYear}&issueMonth=${
            certMonth + 1
          }&certUrl=${certURL}&certId=${linkedInCredentialId}`}
          target='_blank'
          data-playwright-test-label='linkedin-share-btn'
        >
          {t('profile.add-linkedin')}
        </Button>
        <Spacer size='m' />
        <Button
          block={true}
          size='large'
          variant='primary'
          href={`https://twitter.com/intent/tweet?text=${t('profile.tweet', {
            certTitle: urlFriendlyCertTitle,
            certURL
          })}`}
          target='_blank'
          data-playwright-test-label='twitter-share-btn'
        >
          {t('profile.add-twitter')}
        </Button>
        <Spacer size='m' />
        <Button
          block={true}
          size='large'
          variant='primary'
          href={`https://bsky.app/intent/compose?text=${t('profile.tweet', {
            certTitle: urlFriendlyCertTitle,
            certURL
          })}`}
          target='_blank'
          data-playwright-test-label='bluesky-share-btn'
        >
          {t('profile.add-bluesky')}
        </Button>
        <Spacer size='m' />
        <Button
          block={true}
          size='large'
          variant='primary'
          href={`https://threads.net/intent/post?text=${t('profile.tweet', {
            certTitle: urlFriendlyCertTitle,
            certURL
          })}`}
          target='_blank'
          data-playwright-test-label='thread-share-btn'
        >
          {t('profile.add-threads')}
        </Button>
      </Col>
      <Spacer size='l' />
    </Row>
  );
};

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
      user
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
      callGA({
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
    props.cert
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
  const { pending, complete, errored } = fetchState;

  useEffect(() => {
    if (!isValidCert) {
      createFlashMessage(certificateMissingErrorMessage);
    } else if (!pending && errored) {
      createFlashMessage(standardErrorMessage);
    } else if (!pending && !complete && !errored) {
      createFlashMessage(reallyWeirdErrorMessage);
    }
  }, [isValidCert, createFlashMessage, pending, errored, complete]);

  if (!isValidCert) {
    return <RedirectHome />;
  }

  if (pending) {
    return <Loader fullScreen={true} />;
  }

  if (errored || !complete) {
    return <RedirectHome />;
  }

  const {
    date,
    name: userFullName = null,
    username,
    certTitle,
    certSlug,
    completionTime
  } = cert;

  const { user } = props;

  const displayName = userFullName ?? username;

  const certDate = new Date(date);

  const certURL = `https://freecodecamp.org${pathname}`;

  const isMicrosoftCert = certSlug === Certification.FoundationalCSharp;

  return (
    <Container className='certificate-outer-wrapper'>
      {isDonationDisplayed && !isDonationClosed ? (
        <DonationSection
          hideDonationSection={hideDonationSection}
          handleProcessing={handleProcessing}
          isDonationSubmitted={isDonationSubmitted}
        />
      ) : (
        ''
      )}
      <div
        className='certificate-wrapper'
        data-playwright-test-label='cert-wrapper'
      >
        <div className='certification-namespace'>
          <header data-playwright-test-label='cert-header'>
            <Col sm={12}>
              {isMicrosoftCert ? (
                <>
                  <div
                    className='dual-logo fcc-logo'
                    data-playwright-test-label='cert-fcc-logo'
                  >
                    <FreeCodeCampLogo aria-hidden='true' />
                  </div>
                  <div
                    className='dual-logo ms-logo'
                    data-playwright-test-label='cert-microsoft-logo'
                  >
                    <MicrosoftLogo aria-hidden='true' />
                  </div>
                </>
              ) : (
                <div
                  className='logo'
                  data-playwright-test-label='cert-fcc-logo'
                >
                  <FreeCodeCampLogo aria-hidden='true' />
                </div>
              )}
            </Col>
          </header>
          <main className='information'>
            <div
              className='information-container'
              data-playwright-test-label='cert-info-container'
            >
              <Trans
                i18nKey={
                  isMicrosoftCert
                    ? 'certification.fulltextNoHours'
                    : 'certification.fulltext'
                }
                title={t(`certification.title.${certSlug}`, certTitle)}
              >
                <h3>placeholder</h3>
                <h1>
                  <strong>{{ user: displayName }}</strong>
                </h1>
                <h3 data-playwright-test-label='successful-completion'>
                  placeholder
                </h3>
                <h1 data-playwright-test-label='certification-title'>
                  <strong>
                    {{
                      title: t(`certification.title.${certSlug}`, certTitle)
                    }}
                  </strong>
                </h1>
                <h4 data-playwright-test-label='issue-date'>
                  {{
                    time: certDate.toLocaleString([localeCode, 'en-US'], {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  }}
                </h4>
                <h5 style={{ marginTop: '15px' }}>{{ completionTime }}</h5>
              </Trans>
            </div>
          </main>
          <footer data-playwright-test-label='cert-footer'>
            <div className='signatures'>
              {isMicrosoftCert ? (
                <>
                  <div>
                    <Image
                      data-playwright-test-label='quincy-signature'
                      alt={t('certification.quincy-larson-signature')}
                      src={
                        'https://cdn.freecodecamp.org' +
                        '/platform/english/images/quincy-larson-signature.svg'
                      }
                    />
                    <p className='signee-name'>
                      <strong>Quincy Larson</strong>
                    </p>
                    <p className='signee-role'>
                      {t('certification.executive')}
                    </p>
                  </div>
                  <div className='microsoft-signature'>
                    <Image
                      data-playwright-test-label='microsoft-signature'
                      alt={t('certification.julia-liuson-signature')}
                      src={
                        'https://cdn.freecodecamp.org' +
                        '/platform/english/images/microsoft-signature.png'
                      }
                    />
                    <div className='signature-underline'></div>
                    <p className='signee-name'>
                      <strong>Julia Liuson</strong>
                    </p>
                    <p className='signee-role'>
                      {t('certification.ms-president')}
                    </p>
                  </div>
                </>
              ) : (
                <div>
                  <Image
                    data-playwright-test-label='quincy-signature'
                    alt={t('certification.quincy-larson-signature')}
                    src={
                      'https://cdn.freecodecamp.org' +
                      '/platform/english/images/quincy-larson-signature.svg'
                    }
                  />
                  <p className='signee-name'>
                    <strong>Quincy Larson</strong>
                  </p>
                  <p className='signee-role'>{t('certification.executive')}</p>
                </div>
              )}
            </div>
            {!isMicrosoftCert && (
              <>
                <span className='ribbon-wrap'>
                  <Image alt='' className='ribbon' src={ribbon} />
                </span>
                <span className='qr-wrap'>
                  <QRCodeSVG className='qr-code' value={certURL} />
                </span>
              </>
            )}
            <Row>
              <p className='verify'>
                {t('certification.verify')}
                <br />
                {certURL}
              </p>
            </Row>
          </footer>
        </div>
      </div>
      <div
        className='row certificate-links'
        data-playwright-test-label='cert-links'
      >
        <Spacer size='l' />
        {signedInUserName === username ? (
          <ShareCertBtns
            username={username}
            certDate={certDate}
            certSlug={certSlug}
            certTitle={certTitle}
            certURL={certURL}
          />
        ) : (
          ''
        )}
        <Spacer size='l' />
        <ShowProjectLinks certSlug={certSlug} name={displayName} user={user} />
        <Spacer size='l' />
      </div>
    </Container>
  );
};

ShowCertification.displayName = 'ShowCertification';

export default connect(mapStateToProps, mapDispatchToProps)(ShowCertification);
