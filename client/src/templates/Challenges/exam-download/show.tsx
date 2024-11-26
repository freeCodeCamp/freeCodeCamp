import React from 'react';
import { Button, Spacer } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { FullWidthRow } from '../../../components/helpers';

function ShowExamDownload(): JSX.Element {
  // const handleCorrectDownloadLink = () => {};

  // const checkLatestVersion = () => {};

  const { t } = useTranslation();

  return (
    <FullWidthRow>
      <Spacer size='l' />
      <h2>{t('exam.download-header')}</h2>
      <p>{t('exam.explanation')}</p>
      <p>
        {t('exam.version', {
          version: 'v-TBD'
        })}
      </p>
      <Button>{t('buttons.download-latest-version')}</Button>
      <Spacer size='l' />
      <strong>{t('exam.download-trouble')}</strong>
      <a href='mailto: support@freecodecamp.org'>support@freecodecamp.org</a>
      <Spacer size='l' />
    </FullWidthRow>
  );
}

export default ShowExamDownload;
