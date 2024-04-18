import { FormGroup, FormControl, ControlLabel } from '@freecodecamp/ui';

import React, { useEffect, useState } from 'react';
import type { TFunction } from 'i18next';
import { Trans, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';

import { updateMyWebhook, removeMyWebhook } from '../../redux/settings/actions';

import BlockSaveButton from '../helpers/form/block-save-button';
import FullWidthRow from '../helpers/full-width-row';
import SectionHeader from './section-header';

type WebhookProps = {
  webhook: string;
  webhookSecret: string;
  t: TFunction;
  updateMyWebhook: (value: { webhook: string; webhookSecret: string }) => void;
  removeMyWebhook: () => void;
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateMyWebhook, removeMyWebhook }, dispatch);

const supportedDomains = ['https://codewars-tracker-be.herokuapp.com'];

function WebhookSettings({
  webhook,
  webhookSecret,
  updateMyWebhook,
  removeMyWebhook,
  t
}: WebhookProps): JSX.Element {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const [newWebhookUrl, setNewWebhookUrl] = useState(webhook);
  const [newWebhookSecret, setNewWebhookSecret] = useState(webhookSecret);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newWebhookUrl === '') {
      removeMyWebhook();
    } else {
      updateMyWebhook({
        webhook: newWebhookUrl,
        webhookSecret: newWebhookSecret
      });
    }
  }

  useEffect(() => {
    if (newWebhookUrl === webhook && newWebhookSecret === webhookSecret) {
      setIsSaveButtonDisabled(true);
    } else {
      setIsSaveButtonDisabled(false);
    }
  }, [newWebhookUrl, newWebhookSecret, webhook, webhookSecret]);

  return (
    <>
      <SectionHeader>{t('settings.webhook.heading')}</SectionHeader>
      <FullWidthRow>
        <p>{t('settings.webhook.beta')}</p>
        <Trans>
          <p>Currently, only the following domains are allowed:</p>
          <ul>
            {supportedDomains.map(domain => (
              <li key={domain}>
                <code>{domain}</code>
              </li>
            ))}
          </ul>
        </Trans>
        <form
          id='webhook-form'
          onSubmit={handleSubmit}
          data-playwright-test-label='webhook-form'
        >
          <div role='group' aria-label={t('settings.webhook.heading')}>
            <FormGroup controlId='webhook-url'>
              <ControlLabel htmlFor='webhook-url-input'>
                {t('settings.webhook.url')}
              </ControlLabel>
              <FormControl
                data-playwright-test-label='webhook-url-input'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewWebhookUrl(e.target.value)
                }
                placeholder='https://domain.com'
                type='url'
                value={newWebhookUrl}
                id='webhook-url-input'
              />
            </FormGroup>
            <FormGroup controlId='webhook-secret'>
              <ControlLabel htmlFor='webhook-secret-input'>
                {t('settings.webhook.secret')}
              </ControlLabel>
              <FormControl
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewWebhookSecret(e.target.value)
                }
                placeholder='token'
                type='text'
                value={newWebhookSecret}
                id='webhook-secret-input'
              />
            </FormGroup>
          </div>
          <BlockSaveButton
            disabled={isSaveButtonDisabled}
            bgSize='large'
            {...(isSaveButtonDisabled && { tabIndex: -1 })}
          >
            {t('buttons.save')}{' '}
            <span className='sr-only'>{t('settings.webhook.heading')}</span>
          </BlockSaveButton>
        </form>
      </FullWidthRow>
    </>
  );
}

WebhookSettings.displayName = 'WebhookSettings';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(WebhookSettings));
