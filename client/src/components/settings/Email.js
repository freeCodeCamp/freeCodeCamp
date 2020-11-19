import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import {
  HelpBlock,
  Alert,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from '@freecodecamp/react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import { updateMyEmail } from '../../redux/settings';
import { maybeEmailRE } from '../../utils';

import FullWidthRow from '../helpers/FullWidthRow';
import Spacer from '../helpers/Spacer';
import SectionHeader from './SectionHeader';
import BlockSaveButton from '../helpers/form/BlockSaveButton';
import ToggleSetting from './ToggleSetting';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMyEmail }, dispatch);

const propTypes = {
  email: PropTypes.string,
  isEmailVerified: PropTypes.bool,
  sendQuincyEmail: PropTypes.bool,
  updateMyEmail: PropTypes.func.isRequired,
  updateQuincyEmail: PropTypes.func.isRequired
};

export function UpdateEmailButton() {
  return (
    <Link style={{ textDecoration: 'none' }} to='/update-email'>
      <Button block={true} bsSize='lg' bsStyle='primary'>
        <Trans>buttons.edit</Trans>
      </Button>
    </Link>
  );
}

class EmailSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailForm: {
        currentEmail: props.email,
        newEmail: '',
        confirmNewEmail: '',
        isPristine: true
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      emailForm: { newEmail }
    } = this.state;
    const { updateMyEmail } = this.props;
    return updateMyEmail(newEmail);
  };

  createHandleEmailFormChange = key => e => {
    e.preventDefault();
    const userInput = e.target.value.slice();
    return this.setState(state => ({
      emailForm: {
        ...state.emailForm,
        [key]: userInput,
        isPristine: userInput === state.emailForm.currentEmail
      }
    }));
  };

  getValidationForNewEmail = () => {
    const {
      emailForm: { newEmail, currentEmail }
    } = this.state;

    if (!maybeEmailRE.test(newEmail)) {
      return {
        state: null,
        message: ''
      };
    }
    if (newEmail === currentEmail) {
      return {
        state: 'error',
        message: 'This email is the same as your current email'
      };
    }
    if (isEmail(newEmail)) {
      return { state: 'success', message: '' };
    } else {
      return {
        state: 'error',
        message:
          'We could not validate your email correctly, ' +
          'please ensure it is correct'
      };
    }
  };

  getValidationForConfirmEmail = () => {
    const {
      emailForm: { confirmNewEmail, newEmail }
    } = this.state;

    if (!maybeEmailRE.test(newEmail)) {
      return {
        state: null,
        message: ''
      };
    }
    const isMatch = newEmail === confirmNewEmail;
    if (maybeEmailRE.test(confirmNewEmail)) {
      return {
        state: isMatch ? 'success' : 'error',
        message: isMatch ? '' : 'Both new email addresses must be the same'
      };
    } else {
      return {
        state: null,
        message: ''
      };
    }
  };

  render() {
    const {
      emailForm: { newEmail, confirmNewEmail, currentEmail, isPristine }
    } = this.state;
    const { isEmailVerified, updateQuincyEmail, sendQuincyEmail } = this.props;

    const {
      state: newEmailValidation,
      message: newEmailValidationMessage
    } = this.getValidationForNewEmail();

    const {
      state: confirmEmailValidation,
      message: confirmEmailValidationMessage
    } = this.getValidationForConfirmEmail();

    const { t } = useTranslation();
    if (!currentEmail) {
      return (
        <div>
          <FullWidthRow>
            <p className='large-p text-center'>
              <Trans>settings.email.missing</Trans>
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
        <SectionHeader>
          <Trans>settings.email.heading</Trans>
        </SectionHeader>
        {isEmailVerified ? null : (
          <FullWidthRow>
            <HelpBlock>
              <Alert bsStyle='info' className='text-center'>
                <Trans>settings.email.not-verified</Trans>
                <br />
                <Trans>settings.email.check-text</Trans>{' '}
                <Link to='/update-email'>
                  <Trans>settings.email.check-link</Trans>
                </Link>
                .
              </Alert>
            </HelpBlock>
          </FullWidthRow>
        )}
        <FullWidthRow>
          <form id='form-update-email' onSubmit={this.handleSubmit}>
            <FormGroup controlId='current-email'>
              <ControlLabel>
                <Trans>settings.email.current</Trans>
              </ControlLabel>
              <FormControl.Static>{currentEmail}</FormControl.Static>
            </FormGroup>
            <FormGroup
              controlId='new-email'
              validationState={newEmailValidation}
            >
              <ControlLabel>
                <Trans>settings.email.new</Trans>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleEmailFormChange('newEmail')}
                type='email'
                value={newEmail}
              />
              {newEmailValidationMessage ? (
                <HelpBlock>{newEmailValidationMessage}</HelpBlock>
              ) : null}
            </FormGroup>
            <FormGroup
              controlId='confirm-email'
              validationState={confirmEmailValidation}
            >
              <ControlLabel>
                <Trans>settings.email.confirm</Trans>
              </ControlLabel>
              <FormControl
                onChange={this.createHandleEmailFormChange('confirmNewEmail')}
                type='email'
                value={confirmNewEmail}
              />
              {confirmEmailValidationMessage ? (
                <HelpBlock>{confirmEmailValidationMessage}</HelpBlock>
              ) : null}
            </FormGroup>
            <BlockSaveButton
              disabled={
                newEmailValidation !== 'success' ||
                confirmEmailValidation !== 'success' ||
                isPristine
              }
            />
          </form>
        </FullWidthRow>
        <Spacer />
        <FullWidthRow>
          <form id='form-quincy-email' onSubmit={this.handleSubmit}>
            <ToggleSetting
              action={t('settings.email.weekly')}
              flag={sendQuincyEmail}
              flagName='sendQuincyEmail'
              offLabel={t('settings.email.no')}
              onLabel={t('settings.email.yes')}
              toggleFlag={() => updateQuincyEmail(!sendQuincyEmail)}
            />
          </form>
        </FullWidthRow>
      </div>
    );
  }
}

EmailSettings.displayName = 'EmailSettings';
EmailSettings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailSettings);
