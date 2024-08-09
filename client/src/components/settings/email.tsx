import {
  HelpBlock,
  Alert,
  FormGroup,
  FormGroupProps,
  FormControl,
  ControlLabel,
  Button
} from '@freecodecamp/ui';
import React, { useState } from 'react';
import type { TFunction } from 'i18next';
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import isEmail from 'validator/lib/isEmail';

import { updateMyEmail } from '../../redux/settings/actions';
import { maybeEmailRE } from '../../utils';

import BlockSaveButton from '../helpers/form/block-save-button';
import FullWidthRow from '../helpers/full-width-row';
import Spacer from '../helpers/spacer';
import Link from '../helpers/link';
import SectionHeader from './section-header';
import ToggleButtonSetting from './toggle-button-setting';

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

interface EmailForm {
  currentEmail: string;
  newEmail: string;
  confirmNewEmail: string;
  isPristine: boolean;
}

interface EmailValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

function EmailSettings({
  email,
  isEmailVerified,
  sendQuincyEmail,
  t,
  updateMyEmail,
  updateQuincyEmail
}: EmailProps): JSX.Element {
  const [emailForm, setEmailForm] = useState<EmailForm>({
    currentEmail: email,
    newEmail: '',
    confirmNewEmail: '',
    isPristine: true
  });

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    updateMyEmail(emailForm.newEmail);
  }

  function createHandleEmailFormChange(
    key: 'newEmail' | 'confirmNewEmail'
  ): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return e => {
      e.preventDefault();
      const userInput = e.target.value.slice();
      setEmailForm(prev => ({
        ...prev,
        [key]: userInput,
        isPristine: userInput === prev.currentEmail
      }));
    };
  }

  function getValidationForNewEmail(): EmailValidation {
    const { newEmail, currentEmail } = emailForm;
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
  }

  function getValidationForConfirmEmail(): EmailValidation {
    const { confirmNewEmail, newEmail } = emailForm;
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
  }

  const { newEmail, confirmNewEmail, currentEmail, isPristine } = emailForm;

  const { state: newEmailValidation, message: newEmailValidationMessage } =
    getValidationForNewEmail();

  const {
    state: confirmEmailValidation,
    message: confirmEmailValidationMessage
  } = getValidationForConfirmEmail();
  const isDisabled =
    newEmailValidation !== 'success' ||
    confirmEmailValidation !== 'success' ||
    isPristine;
  if (!currentEmail) {
    return (
      <div>
        <FullWidthRow>
          <p className='large-p text-center'>{t('settings.email.missing')}</p>
        </FullWidthRow>
        <FullWidthRow>
          <Button
            block={true}
            size='large'
            variant='primary'
            href='/update-email'
          >
            {t('buttons.edit')}
          </Button>
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
            <Alert
              variant='info'
              className='text-center'
              data-playwright-test-label='email-verification-alert'
            >
              {t('settings.email.not-verified')}
              <br />
              <Trans i18nKey='settings.email.check'>
                <Link
                  data-playwright-test-label='email-verification-link'
                  to='/update-email'
                />
              </Trans>
            </Alert>
          </HelpBlock>
        </FullWidthRow>
      )}
      <FullWidthRow>
        <form
          id='form-update-email'
          {...(!isDisabled
            ? { onSubmit: handleSubmit }
            : { onSubmit: e => e.preventDefault() })}
        >
          <FormGroup controlId='current-email'>
            <ControlLabel>{t('settings.email.current')}</ControlLabel>
            <FormControl.Static>{currentEmail}</FormControl.Static>
          </FormGroup>
          <div role='group' aria-label={t('settings.email.heading')}>
            <FormGroup
              controlId='new-email'
              validationState={newEmailValidation}
            >
              <ControlLabel htmlFor='new-email-input'>
                {t('settings.email.new')}
              </ControlLabel>
              <FormControl
                onChange={createHandleEmailFormChange('newEmail')}
                type='email'
                value={newEmail}
                id='new-email-input'
              />
              {newEmailValidationMessage ? (
                <HelpBlock data-playwright-test-label='new-email-validation'>
                  {newEmailValidationMessage}
                </HelpBlock>
              ) : null}
            </FormGroup>
            <FormGroup
              controlId='confirm-email'
              validationState={confirmEmailValidation}
            >
              <ControlLabel htmlFor='confirm-email-input'>
                {t('settings.email.confirm')}
              </ControlLabel>
              <FormControl
                onChange={createHandleEmailFormChange('confirmNewEmail')}
                type='email'
                value={confirmNewEmail}
                id='confirm-email-input'
              />
              {confirmEmailValidationMessage ? (
                <HelpBlock data-playwright-test-label='confirm-email-validation'>
                  {confirmEmailValidationMessage}
                </HelpBlock>
              ) : null}
            </FormGroup>
          </div>
          <BlockSaveButton
            disabled={isDisabled}
            bgSize='large'
            {...(isDisabled && { tabIndex: -1 })}
          >
            {t('buttons.save')}{' '}
            <span className='sr-only'>{t('settings.email.heading')}</span>
          </BlockSaveButton>
        </form>
      </FullWidthRow>
      <Spacer size='medium' />
      <FullWidthRow>
        <ToggleButtonSetting
          action={t('settings.email.weekly')}
          flag={sendQuincyEmail}
          flagName='sendQuincyEmail'
          offLabel={t('buttons.no-thanks')}
          onLabel={t('buttons.yes-please')}
          toggleFlag={() => updateQuincyEmail(!sendQuincyEmail)}
        />
      </FullWidthRow>
    </div>
  );
}

EmailSettings.displayName = 'EmailSettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(EmailSettings));
