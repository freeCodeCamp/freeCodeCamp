import PropTypes from 'prop-types';
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import TB from './Toggle-Button';
import FA from 'react-fontawesome';

import ns from './ns.json';
import { onRouteUpdateEmail } from './redux';
import { Link } from '../../Router';

const propTypes = {
  email: PropTypes.string,
  sendMonthlyEmail: PropTypes.bool,
  sendNotificationEmail: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  toggleMonthlyEmail: PropTypes.func.isRequired,
  toggleNotificationEmail: PropTypes.func.isRequired,
  toggleQuincyEmail: PropTypes.func.isRequired
};

export function UpdateEmailButton() {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={ onRouteUpdateEmail() }
      >
      <Button
        block={ true }
        bsSize='lg'
        bsStyle='primary'
        className='btn-link-social'
        >
        Edit
      </Button>
    </Link>
  );
}

export default function EmailSettings({
  email,
  sendMonthlyEmail,
  sendNotificationEmail,
  sendQuincyEmail,
  toggleMonthlyEmail,
  toggleNotificationEmail,
  toggleQuincyEmail
}) {
  if (!email) {
    return (
      <div>
        <Row>
          <p className='large-p text-center'>
            You don't have an email id associated to this account.
          </p>
        </Row>
        <Row>
          <UpdateEmailButton />
        </Row>
      </div>
    );
  }
  return (
    <div className={ `${ns}-email-container` }>
      <Row>
        <Col sm={ 8 }>
          <p className='large-p'>
            { email }
          </p>
        </Col>
        <Col sm={ 4 }>
          <UpdateEmailButton />
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p className='large-p'>
            Send me announcement emails
          </p>
        </Col>
        <Col sm={ 4 }>
          <TB
            name='monthly-email'
            onChange={ toggleMonthlyEmail }
            value={ sendMonthlyEmail }
          />
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p className='large-p'>
            Send me notification emails
          </p>
        </Col>
        <Col sm={ 4 }>
          <TB
            name='notifications-email'
            onChange={ toggleNotificationEmail }
            value={ sendNotificationEmail }
          />
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p className='large-p'>
            Send me Quincy's weekly email
          </p>
        </Col>
        <Col sm={ 4 }>
          <TB
            name='quincy-email'
            onChange={ toggleQuincyEmail }
            value={ sendQuincyEmail }
          />
        </Col>
      </Row>
    </div>
  );
}

EmailSettings.displayName = 'EmailSettings';
EmailSettings.propTypes = propTypes;
