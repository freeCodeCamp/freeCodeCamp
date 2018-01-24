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

import { userSelector } from '../../../redux';

const mapStateToProps = createSelector(
  userSelector,
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
    username
  }) => ({
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
    username
  })
);

function mapDispatchToProps() {
  return {};
}

const propTypes = {
  is2018DataVisCert: PropTypes.bool,
  is2018FullStackCert: PropTypes.bool,
  isApisMicroservicesCert: PropTypes.bool,
  isBackEndCert: PropTypes.bool,
  isDataVisCert: PropTypes.bool,
  isFrontEndCert: PropTypes.bool,
  isFrontEndLibsCert: PropTypes.bool,
  isFullStackCert: PropTypes.bool,
  isInfosecQaCert: PropTypes.bool,
  isJsAlgoDataStructCert: PropTypes.bool,
  isRespWebDesignCert: PropTypes.bool,
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
  isRespWebDesignCert,
  is2018DataVisCert,
  isFrontEndLibsCert,
  isJsAlgoDataStructCert,
  isApisMicroservicesCert,
  isInfosecQaCert,
  is2018FullStackCert,
  isFrontEndCert,
  isBackEndCert,
  isDataVisCert,
  isFullStackCert,
  username
}) {
  const currentCerts = [
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
  ];

  const legacyCerts = [
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
  ];
  const renderCertShowWithUsername = _.curry(renderCertShow)(username);
  const hasModernCert = (
    isRespWebDesignCert ||
    is2018DataVisCert ||
    isFrontEndLibsCert ||
    isJsAlgoDataStructCert ||
    isApisMicroservicesCert ||
    isInfosecQaCert
  );
  const hasLegacyCert = (isFrontEndCert || isBackEndCert || isDataVisCert);
  return (
    <div>
      <h2 className='text-center'>FreeCodeCamp Certificates</h2>
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
