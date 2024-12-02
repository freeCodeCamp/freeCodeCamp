import React, { useEffect, useState } from 'react';
import { Button, Spacer } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { FullWidthRow } from '../../../components/helpers';
import useDetectOS from '../utils/use-detect-os';
interface GitProps {
  tag_name: string;
  assets: {
    browser_download_url: string;
  }[];
}

function ShowExamDownload(): JSX.Element {
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const os = useDetectOS();

  const { t } = useTranslation();

  useEffect(() => {
    const checkLatestVersion = async () => {
      return await fetch(
        'https://api.github.com/repos/freeCodeCamp/exam-env/releases/latest'
      );
    };
    checkLatestVersion()
      .then(response => {
        if (response.ok) {
          void response.json().then(data => {
            const { tag_name } = data as GitProps;
            setLatestVersion(tag_name);
          });
        }
      })
      .catch(() => {
        setLatestVersion('...');
      });

    console.log(os);
  });

  return (
    <FullWidthRow>
      <Spacer size='l' />
      <h2>{t('exam.download-header')}</h2>
      <p>{t('exam.explanation')}</p>
      <p>
        {t('exam.version', {
          version: latestVersion || '...'
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
