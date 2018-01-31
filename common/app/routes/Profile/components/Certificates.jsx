import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  Button,
  Row,
  Col
} from 'react-bootstrap';

import { userByNameSelector } from '../../../redux';

const mapStateToProps = createSelector(
  userByNameSelector,
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
    isFullStackCert,
    is2018FullStackCert,
    username
  }) => ({
    username,
    hasModernCert: (
      isRespWebDesignCert ||
      is2018DataVisCert ||
      isFrontEndLibsCert ||
      isJsAlgoDataStructCert ||
      isApisMicroservicesCert ||
      isInfosecQaCert
    ),
    hasLegacyCert: (isFrontEndCert || isBackEndCert || isDataVisCert),
    currentCerts: [
      {
        show: is2018FullStackCert,
        title: 'Full Stack Certificate:',
        showURL: '2018-full-stack'
      },
      {
        show: isRespWebDesignCert,
        title: 'Responsive Web Design Certificate:',
        showURL: 'responsive-web-design'
      },
      {
        show: isJsAlgoDataStructCert,
        title: 'JavaScript Algorithms and Data Structures Certificate:',
        showURL: 'javascript-algorithms-and-data-structures'
      },
      {
        show: isFrontEndLibsCert,
        title: 'Front End Libraries Certificate:',
        showURL: 'front-end-libraries'
      },
      {
        show: is2018DataVisCert,
        title: 'Data Visualization Certificate:',
        showURL: 'data-visualization-2018'
      },
      {
        show: isApisMicroservicesCert,
        title: 'APIs and Microservices Certificate:',
        showURL: 'apis-and-microservices'
      },
      {
        show: isInfosecQaCert,
        title: 'Information Security and Quality Assurance Certificate:',
        showURL: 'information-security-and-quality-assurance'
      }
    ],
    legacyCerts: [
      {
        show: isFullStackCert,
        title: 'Full Stack Certificate:',
        showURL: 'full-stack'
      },
      {
        show: isFrontEndCert,
        title: 'Front End Certificate:',
        showURL: 'front-end'
      },
      {
        show: isBackEndCert,
        title: 'Back End Certificate:',
        showURL: 'back-end'
      },
      {
        show: isDataVisCert,
        title: 'Data Visualization Certificate:',
        showURL: 'data-visualization'
      }
    ]
  })
);

function mapDispatchToProps() {
  return {};
}

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
    <Row key={ cert.showURL }>
      <Col sm={ 8 }>
        <p>
          <strong>
            { cert.title }
          </strong>
        </p>
      </Col>
      <Col sm={ 2 } smPush={ 2 }>
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='primary'
          href={ `/c/${username}/${cert.showURL}`}
          >
          Show
        </Button>
      </Col>
    </Row>
    ) :
    null;
}

function Certificates({
  currentCerts,
  legacyCerts,
  hasLegacyCert,
  hasModernCert,
  username
}) {
  const renderCertShowWithUsername = _.curry(renderCertShow)(username);
  return (
    <div>
      <h2 className='text-center'>freeCodeCamp Certificates</h2>
      <br />
      {
        hasModernCert ?
        currentCerts.map(renderCertShowWithUsername) :
        <p className='text-center' >
          No certificates have been earned under the current curriculum
        </p>
      }
      {
        hasLegacyCert ?
        <div>
          <h3>Legacy Certifications</h3>
          {
            legacyCerts.map(renderCertShowWithUsername)
          }
        </div> :
        null
      }
      <hr />
    </div>
  );
}

Certificates.propTypes = propTypes;
Certificates.displayName = 'Certificates';

export default connect(mapStateToProps, mapDispatchToProps)(Certificates);
