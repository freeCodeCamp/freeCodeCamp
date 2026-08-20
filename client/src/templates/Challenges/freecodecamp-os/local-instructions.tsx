import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Spacer, Button } from '@freecodecamp/ui';

import { Link } from '../../../components/helpers';
import RdbLocalLogoutAlert from '../codeally/rdb-local-logout-alert';

interface LocalInstructionsProps {
  copyUserToken: () => void;
  generateUserToken: () => Promise<void>;
  isSignedIn: boolean;
  title: string;
  userToken: string | null;
}

export function LocalInstructions({
  copyUserToken,
  generateUserToken,
  isSignedIn,
  title,
  userToken
}: LocalInstructionsProps) {
  const { t } = useTranslation();

  return (
    <div className='ca-description'>
      <p>{t('learn.freecodecamp-os.local.intro')}</p>
      <ul>
        <li>
          <Link external={true} to='https://docs.docker.com/engine/'>
            Docker Engine
          </Link>
        </li>
        <li>
          <Trans i18nKey='learn.local.download-vscode'>
            <Link external={true} to='https://code.visualstudio.com/download'>
              placeholder
            </Link>
            <Link
              external={true}
              to='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers'
            >
              placeholder
            </Link>
          </Trans>
        </li>
        <li>
          <Link external={true} to='https://git-scm.com/downloads'>
            Git
          </Link>
        </li>
      </ul>
      <Spacer size='m' />
      <p>{t('learn.freecodecamp-os.local.heading')}</p>
      <ol>
        <li>
          <Trans i18nKey='learn.freecodecamp-os.local.step-1'>
            <code>placeholder</code>
          </Trans>
        </li>
        <li>
          <Trans i18nKey='learn.freecodecamp-os.local.step-2'>
            <code>placeholder</code>
            <code>placeholder</code>
            <code>placeholder</code>
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
              <li>{t('learn.freecodecamp-os.token-modal')}</li>
              <Spacer size='xs' />
              <RdbLocalLogoutAlert title={title} />
            </ol>
            <Spacer size='s' />
          </>
        )}
        <li>
          <Trans i18nKey='learn.freecodecamp-os.local.step-3'>
            <code>placeholder</code>
          </Trans>
        </li>
        <li>{t('learn.freecodecamp-os.local.step-4')}</li>
        <li>
          <Trans i18nKey='learn.freecodecamp-os.local.step-5'>
            <code>placeholder</code>
          </Trans>
        </li>
        <li>{t('learn.freecodecamp-os.local.step-6')}</li>
        <li>{t('learn.freecodecamp-os.local.step-7')}</li>
      </ol>
    </div>
  );
}
