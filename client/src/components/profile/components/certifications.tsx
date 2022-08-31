import { Col, Row } from '@freecodecamp/react-bootstrap';
import { curry } from 'lodash-es';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { certificatesByNameSelector } from '../../../redux';
import type { CurrentCert } from '../../../redux/prop-types';
import { ButtonSpacer, FullWidthRow, Link, Spacer } from '../../helpers';
import './certifications.css';

const mapStateToProps = (
  state: Record<string, unknown>,
  props: CertificationProps
) =>
  createSelector(
    certificatesByNameSelector(props.username.toLowerCase()),
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
  )(state);

interface CertificationProps {
  currentCerts?: CurrentCert[];
  hasLegacyCert?: boolean;
  hasModernCert?: boolean;
  legacyCerts?: CurrentCert[];
  username: string;
}

function renderCertShow(username: string, cert: CurrentCert): React.ReactNode {
  return cert.show ? (
    <Fragment key={cert.title}>
      <Row>
        <Col className='certifications' sm={10} smPush={1}>
          <Link
            className='btn btn-lg btn-primary btn-block'
            to={`/certification/${username}/${cert.certSlug}`}
            data-cy='claimed-certification'
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
}: CertificationProps): JSX.Element {
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
