import React, { Fragment } from 'react';
import { curry } from 'lodash-es';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Col, Row } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import { certificatesByNameSelector } from '../../../redux';
import { ButtonSpacer, FullWidthRow, Link, Spacer } from '../../helpers';
import './certifications.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: any, props: ICertificationProps) =>
  createSelector(
    certificatesByNameSelector(props.username),
    ({
      hasModernCert,
      hasLegacyCert,
      currentCerts,
      legacyCerts
    }: Pick<
      ICertificationProps,
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

interface ICert {
  show: boolean;
  title: string;
  certSlug: string;
}

interface ICertificationProps {
  currentCerts?: ICert[];
  hasLegacyCert?: boolean;
  hasModernCert?: boolean;
  legacyCerts?: ICert[];
  username: string;
}

function renderCertShow(username: string, cert: ICert): React.ReactNode {
  return cert.show ? (
    <Fragment key={cert.title}>
      <Row>
        <Col className='certifications' sm={10} smPush={1}>
          <Link
            className='btn btn-lg btn-primary btn-block'
            external={true}
            to={`/certification/${username}/${cert.certSlug}`}
          >
            View {cert.title}
          </Link>
        </Col>
      </Row>
      <ButtonSpacer />
    </Fragment>
  ) : null;
}

function Certificates({
  currentCerts,
  legacyCerts,
  hasLegacyCert,
  hasModernCert,
  username
}: ICertificationProps): JSX.Element {
  const { t } = useTranslation();
  const renderCertShowWithUsername = curry(renderCertShow)(username);
  return (
    <FullWidthRow className='certifications'>
      <h2 className='text-center'>{t('profile.fcc-certs')}</h2>
      <br />
      {hasModernCert && currentCerts ? (
        currentCerts.map(renderCertShowWithUsername)
      ) : (
        <p className='text-center'>{t('profile.no-certs')}</p>
      )}
      {hasLegacyCert ? (
        <div>
          <br />
          <h3 className='text-center'>{t('settings.headings.legacy-certs')}</h3>
          <br />
          {legacyCerts && legacyCerts.map(renderCertShowWithUsername)}
          <Spacer size={2} />
        </div>
      ) : null}
      <hr />
    </FullWidthRow>
  );
}

Certificates.displayName = 'Certifications';

export default connect(mapStateToProps)(Certificates);
