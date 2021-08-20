import { Col, Row } from '@freecodecamp/react-bootstrap';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { certificatesByNameSelector } from '../../../redux';
import { ButtonSpacer, FullWidthRow, Link, Spacer } from '../../helpers';
import './certifications.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: any, props: CertificationProps) =>
  createSelector(
    certificatesByNameSelector(props.username),
    ({
      hasModernCert,
      hasLegacyCert,
      currentCerts,
      legacyCerts
    }: Pick<
      CertificationProps,
      'hasModernCert' | 'hasLegacyCert' | 'currentCerts' | 'legacyCerts'
    >) => ({
      hasModernCert,
      hasLegacyCert,
      currentCerts,
      legacyCerts
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  )(state, props);

interface Cert {
  show: boolean;
  title: string;
  certSlug: string;
}

interface CertificationProps {
  currentCerts?: Cert[];
  hasLegacyCert?: boolean;
  hasModernCert?: boolean;
  legacyCerts?: Cert[];
  username: string;
}

interface CertLinkProps {
  username: string;
  cert: Cert;
}

function CertLink({ username, cert }: CertLinkProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col className='certifications' sm={10} smPush={1}>
          <Link
            className='btn btn-lg btn-primary btn-block'
            to={`/certification/${username}/${cert.certSlug}`}
          >
            View {t(`certs:certNames.${cert.certSlug}`)}
          </Link>
        </Col>
      </Row>
      <ButtonSpacer />
    </>
  );
}

function Certificates({
  currentCerts,
  legacyCerts,
  hasLegacyCert,
  hasModernCert,
  username
}: CertificationProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <FullWidthRow className='certifications'>
      <h2 className='text-center'>{t('profile.fcc-certs')}</h2>
      <br />
      {hasModernCert && currentCerts ? (
        currentCerts
          .filter(({ show }) => show)
          .map(cert => (
            <CertLink cert={cert} key={cert.title} username={username} />
          ))
      ) : (
        <p className='text-center'>{t('profile.no-certs')}</p>
      )}
      {hasLegacyCert ? (
        <div>
          <br />
          <h3 className='text-center'>{t('settings.headings.legacy-certs')}</h3>
          <br />
          {legacyCerts &&
            legacyCerts
              .filter(({ show }) => show)
              .map(cert => (
                <CertLink cert={cert} key={cert.title} username={username} />
              ))}
          <Spacer size={2} />
        </div>
      ) : null}
      <hr />
    </FullWidthRow>
  );
}

Certificates.displayName = 'Certifications';

export default connect(mapStateToProps)(Certificates);
