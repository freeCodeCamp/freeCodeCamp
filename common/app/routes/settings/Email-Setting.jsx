import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import FA from 'react-fontawesome';
import classnames from 'classnames';

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
    <div className='email-settings'>
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
          <ToggleButtonGroup
            className='toggle-btn-group'
            name='monthly-email'
            onChange={ toggleMonthlyEmail }
            type='radio'
            >
            <ToggleButton
              bsSize='lg'
              bsStyle='primary'
              className={
                classnames(
                  'positive-20',
                  { active: sendMonthlyEmail },
                  'btn-toggle'
                )
              }
              disabled={ sendMonthlyEmail }
              type='radio'
              value={ 1 }
              >
              On
            </ToggleButton>
            <ToggleButton
              bsSize='lg'
              bsStyle='primary'
              className={
                classnames(
                  'positive-20',
                  { active: !sendMonthlyEmail },
                  'btn-toggle'
                )
              }
              disabled={ !sendMonthlyEmail }
              type='radio'
              value={ 2 }
              >
              Off
            </ToggleButton>
          </ToggleButtonGroup>
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
          <ToggleButtonGroup
            className='toggle-btn-group'
            name='notification-email'
            onChange={ toggleNotificationEmail }
            type='radio'
            >
            <ToggleButton
              bsSize='lg'
              bsStyle='primary'
              className={
                classnames(
                  'positive-20',
                  { active: sendNotificationEmail },
                  'btn-toggle'
                )
              }
              disabled={ sendNotificationEmail }
              type='radio'
              value={ 1 }
              >
              On
            </ToggleButton>
            <ToggleButton
              bsSize='lg'
              bsStyle='primary'
              className={
                classnames(
                  'positive-20',
                  { active: !sendNotificationEmail },
                  'btn-toggle'
                )
              }
              disabled={ !sendNotificationEmail }
              type='radio'
              value={ 2 }
              >
              Off
            </ToggleButton>
          </ToggleButtonGroup>
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
          <ToggleButtonGroup
            className='toggle-btn-group'
            name='quincy-email'
            onChange={ toggleQuincyEmail }
            type='radio'
            >
            <ToggleButton
              bsSize='lg'
              bsStyle='primary'
              className={
                classnames(
                  'positive-20',
                  { active: sendQuincyEmail },
                  'btn-toggle'
                )
              }
              disabled={ sendQuincyEmail }
              type='radio'
              value={ 1 }
              >
              On
            </ToggleButton>
            <ToggleButton
              bsSize='lg'
              bsStyle='primary'
              className={
                classnames(
                  'positive-20',
                  { active: !sendQuincyEmail },
                  'btn-toggle'
                )
              }
              disabled={ !sendQuincyEmail }
              type='radio'
              value={ 2 }
              >
              Off
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

EmailSettings.displayName = 'EmailSettings';
EmailSettings.propTypes = propTypes;
