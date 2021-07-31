import React, { Component } from 'react';
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from '@freecodecamp/react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import { TFunction, Trans, withTranslation } from 'react-i18next';
import type { Dispatch } from 'redux';

import { updateMyEmail } from '../../redux/settings';
import { maybeEmailRE } from '../../utils';

import FullWidthRow from '../helpers/full-width-row';
import Spacer from '../helpers/spacer';
import SectionHeader from './section-header';
import BlockSaveButton from '../helpers/form/block-save-button';
import ToggleSetting from './toggle-setting';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateMyEmail }, dispatch);

type EmailProps = {
  email: string;
  isEmailVerified: boolean;
  sendQuincyEmail: boolean;
  t: TFunction;
  updateMyEmail: (email: string) => void;
  updateQuincyEmail: (sendQuincyEmail: boolean) => void;
};

type EmailState = {
  emailForm: {
    currentEmail: string;
    newEmail: string;
    confirmNewEmail: string;
    isPristine: boolean;
  };
};

export function UpdateEmailButton(this: EmailSettings): JSX.Element {
  const { t } = this.props;
  return (
    <Link style={{ textDecoration: 'none' }} to='/update-email'>
      <Button block={true} bsSize='lg' bsStyle='primary'>
        {t('buttons.edit')}
      </Button>
    </Link>
  );
}

class EmailSettings extends Component<EmailProps, EmailState> {
  static displayName: string;
  constructor(props: EmailProps) {
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

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {
      emailForm: { newEmail }
    } = this.state;
    const { updateMyEmail } = this.props;
    return updateMyEmail(newEmail);
  };

  createHandleEmailFormChange =
    (key: 'newEmail' | 'confirmNewEmail') =>
    (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      const userInput = (e.target as HTMLInputElement).value.slice();
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
    const { t } = this.props;

    if (!maybeEmailRE.test(newEmail)) {
      return {
        state: null,
        message: ''
      };
    }
    if (newEmail === currentEmail) {
      return {
        state: 'error',
        message: t('validation.same-email')
      };
    }
    if (isEmail(newEmail)) {
      return { state: 'success', message: '' };
    } else {
      return {
        state: 'error',
        message: t('validation.invalid-email')
      };
    }
  };

  getValidationForConfirmEmail = () => {
    const {
      emailForm: { confirmNewEmail, newEmail }
    } = this.state;
    const { t } = this.props;

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
        message: isMatch ? '' : t('validation.email-mismatch')
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

    const { isEmailVerified, updateQuincyEmail, sendQuincyEmail, t } =
      this.props;

    const { state: newEmailValidation, message: newEmailValidationMessage } =
      this.getValidationForNewEmail();

    const {
      state: confirmEmailValidation,
      message: confirmEmailValidationMessage
    } = this.getValidationForConfirmEmail();

    if (!currentEmail) {
      return (
        <div>
          <FullWidthRow>
            <p className='large-p text-center'>{t('settings.email.missing')}</p>
          </FullWidthRow>
          <FullWidthRow>
            <UpdateEmailButton />
          </FullWidthRow>
        </div>
      );
    }
    return (
      <div className='email-settings'>
        <SectionHeader>{t('settings.email.heading')}</SectionHeader>
        {isEmailVerified ? null : (
          <FullWidthRow>
            <HelpBlock>
              <Alert bsStyle='info' className='text-center'>
                {t('settings.email.not-verified')}
                <br />
                <Trans i18nKey='settings.email.check'>
                  <Link to='/update-email' />
                </Trans>
              </Alert>
            </HelpBlock>
          </FullWidthRow>
        )}
        <FullWidthRow>
          <form id='form-update-email' onSubmit={this.handleSubmit}>
            <FormGroup controlId='current-email'>
              <ControlLabel>{t('settings.email.current')}</ControlLabel>
              <FormControl.Static>{currentEmail}</FormControl.Static>
            </FormGroup>
            <FormGroup
              controlId='new-email'
              validationState={newEmailValidation}
            >
              <ControlLabel>{t('settings.email.new')}</ControlLabel>
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
              <ControlLabel>{t('settings.email.confirm')}</ControlLabel>
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
              offLabel={t('buttons.no-thanks')}
              onLabel={t('buttons.yes-please')}
              toggleFlag={() => updateQuincyEmail(!sendQuincyEmail)}
            />
          </form>
        </FullWidthRow>
      </div>
    );
  }
}

EmailSettings.displayName = 'EmailSettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(EmailSettings));
