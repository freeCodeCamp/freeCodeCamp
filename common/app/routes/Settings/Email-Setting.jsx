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
        <FA name='envelope' />
        Update my Email
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
        <p className='large-p text-center'>
          <em>{ email }</em>
        </p>
      </Row>
      <Row>
        <UpdateEmailButton />
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p className='large-p'>
            Send me announcement emails
            <br />
            (we'll send you these every Thursday)
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
            <br />
            (these will pertain to your account)
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
            <br />
            (with new articles every Tuesday)
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
