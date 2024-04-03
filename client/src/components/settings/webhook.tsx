import { Button } from '@freecodecamp/react-bootstrap';

import {
  HelpBlock,
  FormGroup,
  FormControl,
  FormGroupProps,
  ControlLabel
} from '@freecodecamp/ui';

import React, { useEffect, useState } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import isURL from 'validator/lib/isURL';

import { updateMyWebhook, removeMyWebhook } from '../../redux/settings/actions';

import BlockSaveButton from '../helpers/form/block-save-button';
import FullWidthRow from '../helpers/full-width-row';
import SectionHeader from './section-header';

type WebhookProps = {
  webhook: string;
  webhookSecret: string;
  t: TFunction;
  updateMyWebhook: (value: { webhook: string; webhookSecret: string }) => void;
  removeMyWebhook: (webhook: string) => void;
};

interface WebhookForm {
  currentWebhook: string;
  currentWebhookSecret: string;
  newWebhook: string;
  newWebhookSecret: string;
  isPristine: boolean;
}

interface WebhookValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateMyWebhook, removeMyWebhook }, dispatch);

function WebhookSettings({
  webhook,
  webhookSecret,
  updateMyWebhook,
  removeMyWebhook,
  t
}: WebhookProps): JSX.Element {
  const [webhookForm, setWebhookForm] = useState<WebhookForm>({
    currentWebhook: webhook,
    currentWebhookSecret: webhookSecret,
    newWebhook: '',
    newWebhookSecret: '',
    isPristine: true
  });

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    updateMyWebhook({
      webhook: webhookForm.newWebhook,
      webhookSecret: webhookForm.newWebhookSecret
    });
  }

  function handleRemoveWebhook(e: React.FormEvent): void {
    e.preventDefault();
    removeMyWebhook(webhookForm.currentWebhook);
  }

  function getValidationForNewWebhook(): WebhookValidation {
    const { newWebhook } = webhookForm;

    if (!newWebhook) {
      return {
        state: null,
        message: ''
      };
    }

    if (!isURL(newWebhook)) {
      return {
        state: 'error',
        message: 'Invalid URL'
      };
    }

    return { state: 'success', message: '' };
  }

  function createHandleWebhookFormChange(
    key: 'newWebhook' | 'newWebhookSecret'
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

  const { newWebhook, currentWebhook, currentWebhookSecret, newWebhookSecret } =
    webhookForm;

  const isDisabled = newWebhookValidation !== 'success';

  useEffect(() => {
    setWebhookForm({
      newWebhook: '',
      isPristine: true,
      newWebhookSecret: '',
      currentWebhook: webhook,
      currentWebhookSecret: webhookSecret
    });
  }, [webhook, webhookSecret]);

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
          {currentWebhook && (
            <FormGroup controlId='current-webhook'>
              <ControlLabel>{t('settings.webhook.current')}</ControlLabel>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    width: '60%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <FormControl.Static data-playwright-test-label='current-email'>
                    {t('settings.webhook.url', 'URL')}: {currentWebhook}
                  </FormControl.Static>
                  <FormControl.Static data-playwright-test-label='current-email'>
                    {t('settings.webhook.secret', 'Secret')}:{' '}
                    {currentWebhookSecret}
                  </FormControl.Static>
                </div>
                <Button
                  variant='danger'
                  onClick={handleRemoveWebhook}
                  style={{ marginLeft: 'auto' }}
                >
                  Remove
                </Button>
              </div>
            </FormGroup>
          )}

          {!currentWebhook && (
            <>
              <div role='group' aria-label={t('settings.webhook.heading')}>
                <p>
                  This feature is in <strong>Beta</strong> and is expected to
                  change. Webhooks allow you to receive notifications at a
                  specified endpoint when events occur. If you provide a URL,
                  data will be emitted each time you complete a challenge. That
                  data will take the following shape:
                </p>
                <pre>
                  <code>
                    {JSON.stringify(
                      {
                        username: 'certifieduser',
                        secret: 'some-secret',
                        completedChallenge: {
                          id: '5dc174fcf86c76b9248c6eb2',
                          files: undefined,
                          completedDate: 1702499864614
                        },
                        points: 1
                      },
                      null,
                      2
                    )}
                  </code>
                </pre>
                <FormGroup
                  controlId='current-email'
                  validationState={newWebhookValidation}
                >
                  <ControlLabel>
                    {t('settings.webhook.new', 'Payload url')}
                  </ControlLabel>
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

                  <ControlLabel>
                    {t('settings.webhook.secret', 'Secret')}
                  </ControlLabel>
                  <FormControl
                    data-cy='webhook-secret'
                    data-playwright-test-label='new-webhook-secret'
                    onChange={createHandleWebhookFormChange('newWebhookSecret')}
                    type='text'
                    value={newWebhookSecret}
                  />
                </FormGroup>
              </div>

              <BlockSaveButton
                data-playwright-test-label='save-webhook-button'
                aria-disabled={isDisabled}
                bgSize='lg'
                {...(isDisabled && { tabIndex: -1 })}
              >
                {t('buttons.save')}{' '}
                <span className='sr-only'>{t('settings.webhook.heading')}</span>
              </BlockSaveButton>
            </>
          )}
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
