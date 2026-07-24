import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Spacer, Button, Callout } from '@freecodecamp/ui';

import { CodeAllyButton } from '../../../components/growth-book/codeally-button';
import RdbLocalLogoutAlert from '../codeally/rdb-local-logout-alert';

interface CodespacesInstructionsProps {
  challengeType: number;
  copyUserToken: () => void;
  generateUserToken: () => Promise<void>;
  isSignedIn: boolean;
  title: string;
  userToken: string | null;
}

export function CodespacesInstructions({
  challengeType,
  copyUserToken,
  generateUserToken,
  isSignedIn,
  title,
  userToken
}: CodespacesInstructionsProps) {
  const { t } = useTranslation();

  function openCodespaces() {
    const codespacesUrl = `https://codespaces.new/freeCodeCamp/back-end-development-and-apis`;

    window.open(codespacesUrl, '_blank');
  }

  return (
    <div className='ca-description'>
      <p>{t('learn.freecodecamp-os.codespaces.intro')}</p>
      <CodespacesContinueAlert title={title} />
      <ol>
        <li>
          <Trans i18nKey='learn.freecodecamp-os.codespaces.step-1'>
            <a
              href='https://github.com/signup'
              rel='noopener noreferrer'
              target='_blank'
            >
              placeholder
            </a>
          </Trans>
        </li>
        {isSignedIn && (
          <>
            <Spacer size='xs' />
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
              <li>{t('learn.freecodecamp-os.token-modal')}</li>
              <Spacer size='xs' />
              <RdbLocalLogoutAlert title={title} />
            </ol>
            <Spacer size='s' />
          </>
        )}
        <li>{t('learn.freecodecamp-os.codespaces.step-2')}</li>
        <li style={{ listStyle: 'none' }}>
          <Spacer size='xxs' />
          <CodeAllyButton
            challengeType={challengeType}
            onClick={openCodespaces}
          />
        </li>
      </ol>
      <ol start={3}>
        <li>{t('learn.freecodecamp-os.codespaces.step-3')}</li>
        <li>
          <Trans i18nKey='learn.freecodecamp-os.codespaces.step-4'>
            <code>placeholder</code>
          </Trans>
        </li>
        <li>{t('learn.freecodecamp-os.codespaces.step-5')}</li>
        <li>{t('learn.freecodecamp-os.codespaces.step-6')}</li>
      </ol>
    </div>
  );
}

interface CodespacesContinueAlertProps {
  title: string;
}

function CodespacesContinueAlert({ title }: CodespacesContinueAlertProps) {
  const { t } = useTranslation();
  return (
    <Callout variant='note' label={t('misc.note')}>
      <Trans
        values={{ title }}
        i18nKey='learn.freecodecamp-os.codespaces.continue-project'
      >
        <a
          href='https://github.com/freeCodeCamp/back-end-development-and-apis'
          rel='noopener noreferrer'
          target='_blank'
        >
          placeholder
        </a>
      </Trans>
    </Callout>
  );
}
