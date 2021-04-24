import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { curry } from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Row, Col } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import { certificatesByNameSelector } from '../../../redux';
import { ButtonSpacer, FullWidthRow, Link, Spacer } from '../../helpers';
import './certifications.css';
import { CurrentCertsType } from '../../../redux/propTypes';

const mapStateToProps = (state, props) =>
  createSelector(
    certificatesByNameSelector(props.username),
    ({ hasModernCert, hasLegacyCert, currentCerts, legacyCerts }) => ({
      hasModernCert,
      hasLegacyCert,
      currentCerts,
      legacyCerts
    })
  )(state, props);

const propTypes = {
  currentCerts: CurrentCertsType,
  hasLegacyCert: PropTypes.bool,
  hasModernCert: PropTypes.bool,
  legacyCerts: CurrentCertsType,
  username: PropTypes.string
};

function renderCertShow(username, cert) {
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
}) {
  const { t } = useTranslation();
  const renderCertShowWithUsername = curry(renderCertShow)(username);
  return (
    <FullWidthRow className='certifications'>
      <h2 className='text-center'>{t('profile.fcc-certs')}</h2>
      <br />
      {hasModernCert ? (
        currentCerts.map(renderCertShowWithUsername)
      ) : (
        <p className='text-center'>{t('profile.no-certs')}</p>
      )}
      {hasLegacyCert ? (
        <div>
          <br />
          <h3 className='text-center'>{t('settings.headings.legacy-certs')}</h3>
          <br />
          {legacyCerts.map(renderCertShowWithUsername)}
          <Spacer size={2} />
        </div>
      ) : null}
      <hr />
    </FullWidthRow>
  );
}

Certificates.propTypes = propTypes;
Certificates.displayName = 'Certifications';

export default connect(mapStateToProps)(Certificates);
