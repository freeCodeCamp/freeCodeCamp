import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  Col,
  ControlLabel,
  FormControl,
  Row,
  ToggleButton,
  ToggleButtonGroup
} from 'react-bootstrap';
import classnames from 'classnames';

import { onRouteUpdateEmail } from '../redux';
import { Link } from '../../../Router';
import { userSelector } from '../../../redux';
import {
  editUserFlag,
  toggleUserFlag,
  updateUserBackend
} from '../../../entities/user';

const mapStateToProps = createSelector(
  userSelector,
  ({
    email,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail,
    username
  }) => ({
    email,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail,
    username
  })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editUserFlag,
    toggleUserFlag,
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  editUserFlag: PropTypes.func.isRequired,
  email: PropTypes.string,
  sendMonthlyEmail: PropTypes.bool,
  sendNotificationEmail: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  toggleUserFlag: PropTypes.func.isRequired,
  updateUserBackend: PropTypes.func.isRequired,
  username: PropTypes.string
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

class EmailSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { updateUserBackend, email } = this.props;
    updateUserBackend({ flag: 'email', newValue: email });
  }

  render() {
    const {
      editUserFlag,
      email,
      sendMonthlyEmail,
      sendNotificationEmail,
      sendQuincyEmail,
      toggleUserFlag,
      username
    } = this.props;

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
    const updateEmail = event =>
      editUserFlag('email', username, event.target.value);
    const toggleMonthlyEmail = () =>
      toggleUserFlag('sendMonthlyEmail', username);
    const toggleNotificationEmail = () =>
      toggleUserFlag('sendNotificationEmail', username);
    const toggleQuincyEmail = () => toggleUserFlag('sendQuincyEmail', username);
    return (
      <div className='email-settings'>
        <Row>
          <form onSubmit={ this.handleSubmit }>
            <Col sm={ 6 } xs={ 12 }>
              <ControlLabel htmlFor='email'>
                Email
              </ControlLabel>
            </Col>
            <Col sm={ 5 } xs={ 12 }>
              <FormControl
                bsSize='sm'
                id='email'
                onChange={ updateEmail }
                placeholder='email'
                type='email'
                value={ email }
              />
            </Col>
            <Col sm={ 1 } xs={ 12 }>
              <Button
                bsStyle='primary'
                type='submit'
                >
                Save
              </Button>
            </Col>
          </form>
        </Row>
        <Row>
          <Col sm={ 8 }>
            <p>
              <strong>Send me announcement emails</strong>
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
            <p>
              <strong>Send me notification emails</strong>
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
            <p>
              <strong>Send me Quincy's weekly email</strong>
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
}

EmailSettings.displayName = 'EmailSettings';
EmailSettings.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(EmailSettings);
