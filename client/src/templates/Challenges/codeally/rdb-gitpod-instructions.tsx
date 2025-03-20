import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

function RdbGitpodInstructions(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='ca-description'>
      <p>{t('learn.gitpod.intro')}</p>
      <ol>
        <li>
          <Trans i18nKey='learn.gitpod.step-1'>
            <a
              href='https://github.com/join'
              rel='noopener noreferrer'
              target='_blank'
              title={t('learn.source-code-link')}
            >
              placeholder
            </a>
          </Trans>
        </li>
        <li>{t('learn.gitpod.step-2')}</li>
        <li>{t('learn.gitpod.step-3')}</li>
        <li>
          {t('learn.gitpod.step-4')}
          <ul>
            <li>{t('learn.gitpod.step-5')}</li>
            <li>{t('learn.gitpod.step-6')}</li>
            <li>{t('learn.gitpod.step-7')}</li>
            <li>{t('learn.gitpod.step-8')}</li>
          </ul>
        </li>
        <li>{t('learn.gitpod.step-9')}</li>
      </ol>
    </div>
  );
}

RdbGitpodInstructions.displayName = 'RdbGitpodInstructions';

export default RdbGitpodInstructions;
