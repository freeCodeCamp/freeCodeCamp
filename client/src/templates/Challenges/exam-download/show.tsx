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

  const [downloadLink, setDownloadLink] = useState<string | undefined>('');

  const os = useDetectOS();

  const { t } = useTranslation();

  const handleDownloadLink = (downloadLinks: string[]) => {
    const win = downloadLinks.find(link => link.match(/\.msi/));
    const macARM = downloadLinks.find(
      link => link.match(/aarch64/) && link.match(/\.dmg/)
    );
    const macX64 = downloadLinks.find(
      link => link.match(/x64/) && link.match(/\.dmg/)
    );

    const linuxARM = downloadLinks.find(
      link => link.match(/aarch64/) && link.match(/tar\.gz/)
    );

    const linuxX64 = downloadLinks.find(
      link => link.match(/amd64/) && link.match(/AppImage/)
    );

    if (os.os === 'WIN') {
      return win;
    }

    if (os.os === 'MAC') {
      if (os.architecture.toLowerCase() === 'arm') {
        return macARM;
      } else {
        return macX64;
      }
    }

    if (os.os === 'LINUX') {
      if (os.architecture.toLowerCase() === 'arm') {
        return linuxARM;
      } else {
        return linuxX64;
      }
    }

    return '';
  };

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
            const { tag_name, assets } = data as GitProps;
            setLatestVersion(tag_name);

            setDownloadLink(
              handleDownloadLink(
                assets.map(links => links.browser_download_url)
              )
            );
          });
        }
      })
      .catch(() => {
        setLatestVersion('...');
      });
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
      <Button
        disabled={!downloadLink}
        aria-disabled={!downloadLink}
        href={downloadLink}
        download={downloadLink}
      >
        {t('buttons.download-latest-version')}
      </Button>
      <Spacer size='l' />
      <strong>{t('exam.download-trouble')}</strong>
      <a href='mailto: support@freecodecamp.org'>support@freecodecamp.org</a>
      <Spacer size='l' />
    </FullWidthRow>
  );
}

export default ShowExamDownload;
