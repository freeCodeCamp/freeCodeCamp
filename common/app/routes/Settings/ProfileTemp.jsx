import React from 'react';
import {
  Button,
  Row,
  Col
} from 'react-bootstrap';

const propTypes = {};

export default function ProfileTemp({}) {
  return (
    <div className='profile'>
      <div>
        <Row>
          <Col md={ 4 }>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              href='/settings'
              >
              Update my settings
            </Button>
          </Col>
          <Col md={ 4 } mdPush={ 2 }>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              href='/logout'
              >
              Sign me out of freeCodeCamp
            </Button>
          </Col>
        </Row>
        { /* Profile image */ }
        { /* Social media links */ }
        <h2 className='text-center'>Full name</h2>
        <h2 className='text-center'>@username</h2>
        <h2 className='text-center'>X points</h2>
        <h2 className='text-center'>Location</h2>
        <p>
          Bio.
        </p>
      </div>
      <div>
        { /* Heatmap */ }
      </div>
      <div>
        <h1 className='text-center'>FreeCodeCamp Certificates</h1>
        <Row>
          <Col sm={ 8 }>
            <p>
              <strong>
                Responsive Web Design Certificate:
              </strong>
            </p>
          </Col>
          <Col sm={ 2 }>
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
          <Col sm={ 2 }>
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
          <Col sm={ 2 }>
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
          <Col sm={ 2 }>
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
          <Col sm={ 2 }>
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
          <Col sm={ 2 }>
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
      <div>
        <h1 className='text-center'>Portfolio</h1>
      </div>
      <div>
        <h1 className='text-center'>Timeline</h1>
      </div>
    </div>
  );
}

ProfileTemp.displayName = 'Profile';
ProfileTemp.propTypes = propTypes;
