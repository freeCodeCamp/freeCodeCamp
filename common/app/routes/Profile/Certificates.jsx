import PropTypes from 'prop-types';
import React from 'react';

import {
  Button,
  Row,
  Col
} from 'react-bootstrap';

const propTypes = {
  isBackEndCert: PropTypes.bool,
  isDataVisCert: PropTypes.bool,
  isFrontEndCert: PropTypes.bool,
  isFullStackCert: PropTypes.bool,
  username: PropTypes.string
};

export default function Certificates({
  isFrontEndCert,
  isBackEndCert,
  isDataVisCert,
  isFullStackCert,
  username
}) {
  return (
    <div>
      { isFrontEndCert ? <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              Front End Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href={username + '/front-end-certification'}
            >
            Show
          </Button>
        </Col>
      </Row> : '' }
      { isBackEndCert ? <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              Back End Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href={username + '/back-end-certification'}
            >
            Show
          </Button>
        </Col>
      </Row> : '' }
      { isDataVisCert ? <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              Data Visualization Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href='data-visualization-certification'
            >
            Show
          </Button>
        </Col>
      </Row> : '' }
      { isFullStackCert ? <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              Full Stack Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href='full-stack-certification'
            >
            Show
          </Button>
        </Col>
      </Row> : '' }
      <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              Responsive Web Design Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href='responsive-web-design-certification'
            >
            Show
          </Button>
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              JavaScript Algorithms and Data Structures Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href='javascript-algorithms-and-data-structures-certification'
            >
            Show
          </Button>
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              Front End Libraries Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href='front-end-libraries-certification'
            >
            Show
          </Button>
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              Data Visualization Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href='data-visualization-certification'
            >
            Show
          </Button>
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              APIs and Microservices Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href='apis-and-microservices-certification'
            >
            Show
          </Button>
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p>
            <strong>
              Information Security and Quality Assurance Certificate:
            </strong>
          </p>
        </Col>
        <Col sm={ 2 } smPush={ 2 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            href='information-security-and-quality-assurance-certification'
            >
            Show
          </Button>
        </Col>
      </Row>
    </div>
  );
}

Certificates.propTypes = propTypes;
Certificates.displayName = 'Certificates';
