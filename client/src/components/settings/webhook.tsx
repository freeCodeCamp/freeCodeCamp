import {
  HelpBlock,
  FormGroup,
  FormControl,
  FormGroupProps,
  ControlLabel
} from '@freecodecamp/ui';

import React, { useState } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { updateMyWebhook } from '../../redux/settings/actions';

import BlockSaveButton from '../helpers/form/block-save-button';
import FullWidthRow from '../helpers/full-width-row';
import SectionHeader from './section-header';

type WebhookProps = {
  webhook: string;
  t: TFunction;
  updateMyWebhook: (webhook: string) => void;
};

interface WebhookForm {
  currentWebhook: string;
  newWebhook: string;
  confirmNewWebhook: string;
  isPristine: boolean;
}

interface WebhookValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateMyWebhook }, dispatch);

function WebhookSettings({
  webhook,
  updateMyWebhook,
  t
}: WebhookProps): JSX.Element {
  const [webhookForm, setWebhookForm] = useState<WebhookForm>({
    currentWebhook: webhook,
    newWebhook: '',
    confirmNewWebhook: '',
    isPristine: true
  });

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    console.log('handleSubmit');
    updateMyWebhook(webhookForm.newWebhook);
  }

  function getValidationForNewWebhook(): WebhookValidation {
    // const { newWebhook, currentWebhook } = webhookForm;
    // if (!maybeEmailRE.test(newEmail)) {
    //   return {
    //     state: null,
    //     message: ''
    //   };
    // }
    // if (newEmail === currentEmail) {
    //   return {
    //     state: 'error',
    //     message: t('validation.same-email')
    //   };
    // }
    // if (isEmail(newEmail)) {
    //   return { state: 'success', message: '' };
    // } else {
    //   return {
    //     state: 'error',
    //     message: t('validation.invalid-email')
    //   };
    // }

    return { state: 'success', message: '' };
  }

  function createHandleWebhookFormChange(
    key: 'newWebhook' | 'confirmNewWebhook'
  ): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return e => {
      e.preventDefault();
      const userInput = e.target.value.slice();

      setWebhookForm(prev => ({
        ...prev,
        [key]: userInput,
        isPristine: userInput === prev.currentWebhook
      }));
    };
  }

  const { state: newWebhookValidation, message: newWebhookValidationMessage } =
    getValidationForNewWebhook();

  const { newWebhook, isPristine, currentWebhook } = webhookForm;

  const isDisabled = newWebhookValidation !== 'success' || isPristine;

  return (
    <div className='webhook-settings'>
      <SectionHeader dataPlaywrightTestLabel='webhook-settings-header'>
        {t('settings.webhook.heading')}
      </SectionHeader>
      <FullWidthRow>
        <form
          id='form-update-email'
          data-cy='form-update-email'
          {...(!isDisabled
            ? { onSubmit: handleSubmit }
            : { onSubmit: e => e.preventDefault() })}
        >
          <FormGroup controlId='current-webhook'>
            {/* TODO: i18n */}
            <ControlLabel>Current Webhook</ControlLabel>
            <FormControl.Static data-playwright-test-label='current-email'>
              {currentWebhook}
            </FormControl.Static>
          </FormGroup>

          <div role='group' aria-label={t('settings.webhook.heading')}>
            <FormGroup
              controlId='current-email'
              // validationState={newWebhookValidation}
            >
              <ControlLabel>{t('settings.webhook.new')}</ControlLabel>
              <FormControl
                data-cy='webhook-input'
                data-playwright-test-label='new-webhook-input'
                onChange={createHandleWebhookFormChange('newWebhook')}
                type='text'
                value={newWebhook}
              />
              <HelpBlock data-cy='validation-message'>
                {newWebhookValidationMessage}
              </HelpBlock>
            </FormGroup>
          </div>

          <BlockSaveButton
            data-playwright-test-label='save-email-button'
            aria-disabled={isDisabled}
            bgSize='lg'
            {...(isDisabled && { tabIndex: -1 })}
          >
            {t('buttons.save')}{' '}
            <span className='sr-only'>{t('settings.webhook.heading')}</span>
          </BlockSaveButton>
        </form>
      </FullWidthRow>
    </div>
  );
}

WebhookSettings.displayName = 'WebhookSettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(WebhookSettings));
