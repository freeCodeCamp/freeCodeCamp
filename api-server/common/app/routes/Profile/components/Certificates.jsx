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

import { FullWidthRow } from '../../../helperComponents';

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
        title: 'Full Stack Certification',
        showURL: '2018-full-stack'
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
      <Col sm={ 10 } smPush={ 1 }>
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='primary'
          href={ `/certification/${username}/${cert.showURL}`}
          >
          View {cert.title}
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
      <FullWidthRow>
        <h2 className='text-center'>freeCodeCamp Certifications</h2>
        <br />
        {
          hasModernCert ?
          currentCerts.map(renderCertShowWithUsername) :
          <p className='text-center' >
            No certifications have been earned under the current curriculum
          </p>
        }
        {
          hasLegacyCert ?
          <div>
            <br />
            <h3 className='text-center'>Legacy Certifications</h3>
            <br />
            {
              legacyCerts.map(renderCertShowWithUsername)
            }
          </div> :
          null
        }
      </FullWidthRow>
      <hr />
    </div>
  );
}

Certificates.propTypes = propTypes;
Certificates.displayName = 'Certificates';

export default connect(mapStateToProps, mapDispatchToProps)(Certificates);
