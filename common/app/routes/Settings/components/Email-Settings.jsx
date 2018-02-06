import React, { PureComponent } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  HelpBlock,
  Row
} from 'react-bootstrap';

import TB from '../Toggle-Button';
import EmailForm from './EmailForm.jsx';
import { Link } from '../../../Router';
import { FullWidthRow } from '../../../helperComponents';
import { userSelector } from '../../../redux';
import { onRouteUpdateEmail } from '../redux';
import {
  updateUserBackend
} from '../../../entities/user';

const mapStateToProps = createSelector(
  userSelector,
  ({
    email,
    isEmailVerified,
    sendMonthlyEmail,
    sendNotificationEmail,
    sendQuincyEmail
  }) => ({
    email,
    initialValues: { email },
    isEmailVerified,
    options: [
      {
        flag: 'sendQuincyEmail',
        label: 'Send me Quincy\'s weekly email',
        bool: sendQuincyEmail
      },
      {
        flag: 'sendMonthlyEmail',
        label: 'Send me announcement emails',
        bool: sendMonthlyEmail
      },
      {
        flag: 'sendNotificationEmail',
        label: 'Send me notification emails',
        bool: sendNotificationEmail
      }
    ]
  })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  email: PropTypes.string,
  isEmailVerified: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string,
      label: PropTypes.string,
      bool: PropTypes.bool
    })
  ),
  updateUserBackend: PropTypes.func.isRequired
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

  handleSubmit(values) {
    this.props.updateUserBackend(values);
  }

  renderToggleOptions(options) {
    const { updateUserBackend } = this.props;
    return options.map(option => {
      const id = _.kebabCase(option.label);
      return (
        <Row className='inline-form' key={ id }>
          <Col sm={ 8 }>
            <ControlLabel htmlFor={ id }>
              { option.label }
            </ControlLabel>
          </Col>
          <Col sm={ 4 }>
            <TB
              id={ id }
              name={ id }
              onChange={
                () => updateUserBackend({
                  [option.flag]: !option.bool
                })
              }
              value={ option.bool }
            />
          </Col>
        </Row>
      );
    });
  }

  render() {
    const {
      email,
      isEmailVerified,
      options
    } = this.props;
    if (!email) {
      return (
        <div>
          <FullWidthRow>
            <p className='large-p text-center'>
              You do not have an email associated with this account.
            </p>
          </FullWidthRow>
          <FullWidthRow>
            <UpdateEmailButton />
          </FullWidthRow>
        </div>
      );
    }
    return (
      <div className='email-settings'>
        <FullWidthRow>
          <h2>Email Settings</h2>
          <br />
        </FullWidthRow>
        {
          isEmailVerified ? null :
          <FullWidthRow>
            <HelpBlock>
              <Alert bsStyle='info'>
              A change of email adress has not been verified.
              To use your new email, you must verify it first using the link
              we sent you.
              </Alert>
            </HelpBlock>
          </FullWidthRow>
        }
        <FullWidthRow>
          <EmailForm
            initialValues={{ email, confrimEmail: ''}}
          />
        </FullWidthRow>
        <FullWidthRow>
          { this.renderToggleOptions(options) }
        </FullWidthRow>
      </div>
    );
  }
}

EmailSettings.displayName = 'EmailSettings';
EmailSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'email-settings',
    fields: [ 'email' ]
  },
  mapStateToProps,
  mapDispatchToProps
)(EmailSettings);
