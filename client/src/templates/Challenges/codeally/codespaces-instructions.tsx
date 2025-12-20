import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Spacer, Button, Callout } from '@freecodecamp/ui';

import { CodeAllyButton } from '../../../components/growth-book/codeally-button';

interface CodespacesInstructionsProps {
  challengeType: number;
  copyUrl: () => void;
  copyUserToken: () => void;
  generateUserToken: () => Promise<void>;
  isSignedIn: boolean;
  title: string;
  userToken: string | null;
}

export function CodespacesInstructions({
  challengeType,
  copyUrl,
  copyUserToken,
  generateUserToken,
  isSignedIn,
  title,
  userToken
}: CodespacesInstructionsProps) {
  const { t } = useTranslation();

  function openCodespaces() {
    const codespacesUrl = `https://codespaces.new/freeCodeCamp/rdb-alpha`;

    window.open(codespacesUrl, '_blank');
  }

  return (
    <div className='ca-description'>
      <p>{t('learn.codespaces.intro')}</p>
      <ol>
        <li>
          <Trans i18nKey='learn.codespaces.step-1'>
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
                <Trans i18nKey='learn.codespaces.sub-step-3'>
                  <a
                    href='https://github.com/settings/codespaces/secrets/new'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Codespaces secrets page
                  </a>
                </Trans>
              </li>
              <li>
                <Trans i18nKey='learn.codespaces.sub-step-4'>
                  <code>placeholder</code>
                </Trans>
              </li>
              <li>
                <Trans i18nKey='learn.codespaces.sub-step-5'>
                  <code>placeholder</code>
                </Trans>
              </li>
              <li>
                <Trans i18nKey='learn.codespaces.sub-step-6'>
                  <code>placeholder</code>
                  <code>placeholder</code>
                </Trans>
              </li>
            </ol>
            <Spacer size='s' />
          </>
        )}
        <li>{t('learn.codespaces.step-2')}</li>
        <li>{t('learn.codespaces.step-3')}</li>
        <li>
          {t('learn.codespaces.step-4')}
          <ul>
            <li>{t('learn.codespaces.step-5')}</li>
            <li>
              <Trans i18nKey='learn.codespaces.step-6'>
                <code>placeholder</code>
              </Trans>
            </li>
            <li>
              <Trans i18nKey='learn.codespaces.step-7'>
                <code>placeholder</code>
              </Trans>
            </li>
            <li>
              <Trans i18nKey='learn.codespaces.step-8'>
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
        <li>{t('learn.codespaces.step-9')}</li>
      </ol>
      <Spacer size='m' />
      <CodespacesContinueAlert title={title} />
      {isSignedIn && <CodespacesLogoutAlert course={title} />}
      <CodeAllyButton challengeType={challengeType} onClick={openCodespaces} />
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
      <Trans values={{ title }} i18nKey='learn.codespaces.continue-project'>
        <a
          href='https://github.com/freeCodeCamp/rdb-alpha'
          rel='noopener noreferrer'
          target='_blank'
        >
          placeholder
        </a>
      </Trans>
      <Spacer size='m' />
      <Trans i18nKey='learn.codespaces.learn-more'>
        <a
          href='https://forum.freecodecamp.org/t/relational-database-curriculum-in-codespaces/761449'
          rel='noopener noreferrer'
          target='_blank'
        >
          placeholder
        </a>
      </Trans>
    </Callout>
  );
}

interface CodespacesLogoutAlertProps {
  course: string;
}

function CodespacesLogoutAlert({
  course
}: CodespacesLogoutAlertProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Callout variant='caution' label={t('misc.caution')}>
      {t('learn.codespaces.logout-warning', { course })}
    </Callout>
  );
}
