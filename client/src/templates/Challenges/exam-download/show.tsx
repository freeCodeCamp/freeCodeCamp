import React, { useEffect, useState } from 'react';
import { Button, Spacer } from '@freecodecamp/ui';
import { isEmpty } from 'lodash';
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
  const [downloadLinks, setDownloadLinks] = useState<string[]>([]);

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
      if (isEmpty(win)) return '';

      return win;
    }

    if (os.os === 'MAC') {
      if (os.architecture.toLowerCase() === 'arm') {
        if (isEmpty(macARM)) return '';

        return macARM;
      } else {
        if (isEmpty(macX64)) return '';

        return macX64;
      }
    }

    if (os.os === 'LINUX') {
      if (os.architecture.toLowerCase() === 'arm') {
        if (isEmpty(linuxARM)) return '';

        return linuxARM;
      } else {
        if (isEmpty(linuxX64)) return '';

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

            setDownloadLinks(assets.map(links => links.browser_download_url));
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
      {!downloadLink && <strong>{t('exam.unable-to-detect-os')}</strong>}
      <Spacer size='l' />
      <details>
        <summary>{t('exam.download-details')}</summary>
        <ul>
          {downloadLinks
            .filter(link => !link.match(/\.sig|\.json/))
            .map((link, index) => {
              return (
                <li key={index} style={{ listStyle: 'none' }}>
                  <a href={link} download={link}>
                    {link}
                  </a>
                </li>
              );
            })}
        </ul>
      </details>
      <Spacer size='l' />
      <strong>{t('exam.download-trouble')}</strong>
      <a href='mailto: support@freecodecamp.org'>support@freecodecamp.org</a>
    </FullWidthRow>
  );
}

export default ShowExamDownload;
