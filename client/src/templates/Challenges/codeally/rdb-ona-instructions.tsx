import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

function RdbOnaInstructions(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='ca-description'>
      <p>{t('learn.ona.intro')}</p>
      <ol>
        <li>
          <Trans i18nKey='learn.ona.step-1'>
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
        <li>{t('learn.ona.step-2')}</li>
        <li>{t('learn.ona.step-3')}</li>
        <li>
          {t('learn.ona.step-4')}
          <ul>
            <li>{t('learn.ona.step-5')}</li>
            <li>{t('learn.ona.step-6')}</li>
            <li>{t('learn.ona.step-7')}</li>
            <li>{t('learn.ona.step-8')}</li>
          </ul>
        </li>
        <li>{t('learn.ona.step-9')}</li>
      </ol>
    </div>
  );
}

RdbOnaInstructions.displayName = 'RdbOnaInstructions';

export default RdbOnaInstructions;
