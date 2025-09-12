import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Spacer, Button } from '@freecodecamp/ui';

import { postUserToken } from '../../../utils/ajax';
import { createFlashMessage } from '../../../components/Flash/redux';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import { CodeAllyButton } from '../../../components/growth-book/codeally-button';

import RdbOnaContinueAlert from './rdb-ona-continue-alert';
import RdbOnaLogoutAlert from './rdb-ona-logout-alert';

interface OneInstructionsProps {
  title: string;
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  userToken: string | null;
  generateUserToken: () => Promise<void>;
  copyUserToken: () => void;
  copyUrl: () => void;
  updateUserToken: (token: string) => void;
  challengeType: number;
}

export function OnaInstructions({
  title,
  isSignedIn,
  generateUserToken,
  copyUserToken,
  copyUrl,
  userToken,
  updateUserToken,
  challengeType
}: OneInstructionsProps) {
  const { t } = useTranslation();

  async function startCourse() {
    if (!isSignedIn) {
      openOna();
    } else if (!userToken) {
      const createUserTokenResponse = await postUserToken();
      const { data = { userToken: null } } = createUserTokenResponse;

      if (data?.userToken) {
        updateUserToken(data.userToken);
        openOna();
      } else {
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.StartProjectErr
        });
      }
    } else {
      openOna();
    }
  }

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
      <CodeAllyButton
        challengeType={challengeType}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={startCourse}
      />
    </div>
  );
}
