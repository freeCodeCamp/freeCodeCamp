import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { curry } from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Button, Row, Col } from '@freecodecamp/react-bootstrap';

import { userByNameSelector } from '../../../redux';
import FullWidthRow from '../../helpers/FullWidthRow';
import { ButtonSpacer, Spacer } from '../../helpers';

const mapStateToProps = (state, props) =>
  createSelector(
    userByNameSelector(props.username),
    ({
      isRespWebDesignCert,
      is2018DataVisCert,
      isFrontEndLibsCert,
      isJsAlgoDataStructCert,
      isApisMicroservicesCert,
      isInfosecQaCert,
      isFrontEndCert,
      isBackEndCert,
      isDataVisCert,
      isFullStackCert
    }) => ({
      hasModernCert:
        isRespWebDesignCert ||
        is2018DataVisCert ||
        isFrontEndLibsCert ||
        isJsAlgoDataStructCert ||
        isApisMicroservicesCert ||
        isInfosecQaCert ||
        isFullStackCert,
      hasLegacyCert: isFrontEndCert || isBackEndCert || isDataVisCert,
      currentCerts: [
        {
          show: isFullStackCert,
          title: 'Full Stack Certification',
          showURL: 'full-stack'
        },
        {
          show: isRespWebDesignCert,
          title: 'Responsive Web Design Certification',
          showURL: 'responsive-web-design'
        },
        {
          show: isJsAlgoDataStructCert,
          title: 'JavaScript Algorithms and Data Structures Certification',
          showURL: 'javascript-algorithms-and-data-structures'
        },
        {
          show: isFrontEndLibsCert,
          title: 'Front End Libraries Certification',
          showURL: 'front-end-libraries'
        },
        {
          show: is2018DataVisCert,
          title: 'Data Visualization Certification',
          showURL: 'data-visualization'
        },
        {
          show: isApisMicroservicesCert,
          title: 'APIs and Microservices Certification',
          showURL: 'apis-and-microservices'
        },
        {
          show: isInfosecQaCert,
          title: 'Information Security and Quality Assurance Certification',
          showURL: 'information-security-and-quality-assurance'
        }
      ],
      legacyCerts: [
        {
          show: isFullStackCert,
          title: 'Full Stack Certification',
          showURL: 'legacy-full-stack'
        },
        {
          show: isFrontEndCert,
          title: 'Front End Certification',
          showURL: 'legacy-front-end'
        },
        {
          show: isBackEndCert,
          title: 'Back End Certification',
          showURL: 'legacy-back-end'
        },
        {
          show: isDataVisCert,
          title: 'Data Visualization Certification',
          showURL: 'legacy-data-visualization'
        }
      ]
    })
  )(state, props);

const certArrayTypes = PropTypes.arrayOf(
  PropTypes.shape({
    show: PropTypes.bool,
    title: PropTypes.string,
    showURL: PropTypes.string
  })
);

const propTypes = {
  currentCerts: certArrayTypes,
  hasLegacyCert: PropTypes.bool,
  hasModernCert: PropTypes.bool,
  legacyCerts: certArrayTypes,
  username: PropTypes.string
};

function renderCertShow(username, cert) {
  return cert.show ? (
    <Fragment key={cert.title}>
      <Row>
        <Col sm={10} smPush={1}>
          <Link to={`/certification/${username}/${cert.showURL}`}>
            <Button
              block={true}
              bsSize='lg'
              bsStyle='primary'
              className='btn-invert'
              >
              View {cert.title}
            </Button>
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
  const renderCertShowWithUsername = curry(renderCertShow)(username);
  return (
    <FullWidthRow>
      <h2 className='text-center'>freeCodeCamp Certifications</h2>
      <br />
      {hasModernCert ? (
        currentCerts.map(renderCertShowWithUsername)
      ) : (
        <p className='text-center'>
          No certifications have been earned under the current curriculum
        </p>
      )}
      {hasLegacyCert ? (
        <div>
          <br />
          <h3 className='text-center'>Legacy Certifications</h3>
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
