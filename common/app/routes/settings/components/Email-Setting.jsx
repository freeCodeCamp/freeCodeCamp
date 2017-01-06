import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Row, Col } from 'react-bootstrap';
import FA from 'react-fontawesome';
import classnames from 'classnames';

export function UpdateEmailButton() {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      to='/settings/update-email'
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
    <div>
      <Row>
        <p className='large-p text-center'>
          <em>{ email }</em>
        </p>
      </Row>
      <Row>
        <UpdateEmailButton />
      </Row>
      <Row>
        <Col xs={ 9 }>
          <p className='large-p'>
            Send me announcement emails
            <br />
            (we'll send you these every Thursday)
          </p>
        </Col>
        <Col xs={ 3 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className={
              classnames(
                'positive-20',
                { active: sendMonthlyEmail },
                'btn-toggle'
              )
            }
            onClick={ toggleMonthlyEmail }
            >
            { sendMonthlyEmail ? 'On' : 'Off' }
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={ 9 }>
          <p className='large-p'>
            Send me notification emails
            <br />
            (these will pertain to your account)
          </p>
        </Col>
        <Col xs={ 3 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className={
              classnames(
                'positive-20',
                { active: sendNotificationEmail },
                'btn-toggle'
              )
            }
            onClick={ toggleNotificationEmail }
            >
            { sendNotificationEmail ? 'On' : 'Off' }
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={ 9 }>
          <p className='large-p'>
            Send me Quincy's weekly email
            <br />
            (with new articles every Tuesday)
          </p>
        </Col>
        <Col xs={ 3 }>
          <Button
            block={ true }
            bsSize='lg'
            bsStyle='primary'
            className={
              classnames(
                'positive-20',
                { active: sendQuincyEmail },
                'btn-toggle'
              )
            }
            onClick={ toggleQuincyEmail }
            >
            { sendQuincyEmail ? 'On' : 'Off' }
          </Button>
        </Col>
      </Row>
    </div>
  );
}

EmailSettings.propTypes = {
  email: PropTypes.string,
  sendMonthlyEmail: PropTypes.bool,
  sendNotificationEmail: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  toggleMonthlyEmail: PropTypes.func.isRequired,
  toggleNotificationEmail: PropTypes.func.isRequired,
  toggleQuincyEmail: PropTypes.func.isRequired
};
