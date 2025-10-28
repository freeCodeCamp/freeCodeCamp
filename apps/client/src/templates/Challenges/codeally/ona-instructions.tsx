import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Spacer, Button } from '@freecodecamp/ui';

import { CodeAllyButton } from '../../../components/growth-book/codeally-button';

import RdbOnaContinueAlert from './rdb-ona-continue-alert';
import RdbOnaLogoutAlert from './rdb-ona-logout-alert';

interface OneInstructionsProps {
  challengeType: number;
  copyUrl: () => void;
  copyUserToken: () => void;
  generateUserToken: () => Promise<void>;
  isSignedIn: boolean;
  title: string;
  userToken: string | null;
}

export function OnaInstructions({
  challengeType,
  copyUrl,
  copyUserToken,
  generateUserToken,
  isSignedIn,
  title,
  userToken
}: OneInstructionsProps) {
  const { t } = useTranslation();

  function openOna() {
    const repoUrl = `https://github.com/freeCodeCamp/rdb-alpha`;
    const onaDomain = `https://app.ona.com/`;
    const onaUrl = `${onaDomain}#${repoUrl}`;

    window.open(onaUrl, '_blank');
  }

  return (
    <div className='ca-description'>
      <p>{t('learn.ona.intro')}</p>
      <ol>
        <li>
          <Trans i18nKey='learn.ona.step-1'>
            <a
              href='https://app.ona.com/login?navigateTo=%2Fsettings%2Fsecrets'
              rel='noopener noreferrer'
              target='_blank'
            >
              placeholder
            </a>
          </Trans>
        </li>
        {isSignedIn && (
          <>
            <Spacer size='s' />
            <p>{t('learn.local.sub-step-heading')}</p>
            <ol>
              <li>{t('learn.local.sub-step-1')}</li>
              <Spacer size='xxs' />
              <Button
                disabled={!!userToken}
                block={true}
                onClick={() => void generateUserToken()}
              >
                {t('learn.local.generate-token-btn')}
              </Button>
              <Spacer size='xs' />
              <li>{t('learn.local.sub-step-2')}</li>
              <Spacer size='xxs' />
              <Button
                disabled={!userToken}
                block={true}
                onClick={copyUserToken}
              >
                {t('learn.local.copy-token-btn')}
              </Button>
              <Spacer size='xs' />
              <li>
                <Trans i18nKey='learn.ona.sub-step-3'>
                  <a
                    href='https://app.ona.com/settings/secrets'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Ona secrets page
                  </a>
                </Trans>
              </li>
              <li>
                <Trans i18nKey='learn.ona.sub-step-4'>
                  <code>placeholder</code>
                </Trans>
              </li>
              <li>
                <Trans i18nKey='learn.ona.sub-step-5'>
                  <code>placeholder</code>
                </Trans>
              </li>
            </ol>
            <Spacer size='s' />
          </>
        )}
        <li>{t('learn.ona.step-2')}</li>
        <li>{t('learn.ona.step-3')}</li>
        <li>
          {t('learn.ona.step-4')}
          <ul>
            <li>{t('learn.ona.step-5')}</li>
            <li>
              <Trans i18nKey='learn.ona.step-6'>
                <code>placeholder</code>
              </Trans>
            </li>
            <li>
              <Trans i18nKey='learn.ona.step-7'>
                <code>placeholder</code>
              </Trans>
            </li>
            <li>
              <Trans i18nKey='learn.ona.step-8'>
                <code>placeholder</code>
              </Trans>
            </li>
            <li>{t('learn.local.step-6')}</li>
            <li>{t('learn.local.step-7')}</li>
            <Spacer size='xxs' />
            <Button block={true} onClick={copyUrl}>
              {t('learn.local.copy-url')}
            </Button>
            <Spacer size='xs' />
            <li>{t('learn.local.step-8')}</li>
          </ul>
        </li>
        <li>{t('learn.ona.step-9')}</li>
      </ol>
      <Spacer size='m' />
      <RdbOnaContinueAlert course={title} />
      {isSignedIn && <RdbOnaLogoutAlert course={title} />}
      <CodeAllyButton challengeType={challengeType} onClick={openOna} />
    </div>
  );
}
