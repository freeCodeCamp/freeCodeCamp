import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Button, Spacer, Table } from '@freecodecamp/ui';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { FullWidthRow, Loader } from '../../../components/helpers';
import useDetectOS from '../utils/use-detect-os';
// import { getExamAttempts } from '../../../utils/ajax';
import type { Attempt } from '../../../utils/ajax';
import { ChallengeNode } from '../../../redux/prop-types';
import envData from '../../../../config/env.json';

interface GitProps {
  tag_name: string;
  assets: {
    browser_download_url: string;
  }[];
}

interface ShowExamDownloadProps {
  data: { challengeNode: ChallengeNode };
}

export const examAttempts = createApi({
  reducerPath: 'exam-attempts',
  baseQuery: fetchBaseQuery({ baseUrl: envData.apiLocation }),
  endpoints: build => ({
    getExamAttemptsByExamId: build.query<Attempt[], string>({
      query: examId => `/user/exam-environment/exams/${examId}/attempts`
    })
  })
});

function ShowExamDownload({
  data: {
    challengeNode: {
      challenge: { id }
    }
  }
}: ShowExamDownloadProps): JSX.Element {
  const [latestVersion, setLatestVersion] = useState<string | null>(null);

  const [downloadLink, setDownloadLink] = useState<string | undefined>('');
  const [downloadLinks, setDownloadLinks] = useState<string[]>([]);
  // const [attempts, setAttempts] = useState<Attempt[]>([]);

  const os = useDetectOS();

  const { t } = useTranslation();

  const {
    data: attempts,
    error,
    isLoading
  } = examAttempts.useGetExamAttemptsByExamIdQuery(id);

  function handleDownloadLink(downloadLinks: string[]) {
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
  }

  useEffect(() => {
    async function checkLatestVersion() {
      try {
        const response = await fetch(
          'https://api.github.com/repos/freeCodeCamp/exam-env/releases/latest'
        );
        if (response.ok) {
          const data = (await response.json()) as GitProps;
          const { tag_name, assets } = data;
          setLatestVersion(tag_name);
          const urls = assets.map(link => link.browser_download_url);
          setDownloadLink(handleDownloadLink(urls));
          setDownloadLinks(urls);
        }
      } catch {
        setLatestVersion('...');
      }
    }

    void checkLatestVersion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [os]);

  function renderAttempts() {
    if (isLoading) {
      return <Loader />;
    }
    if (error || !attempts) {
      return <p>{error}</p>;
    }

    if (attempts.length === 0) {
      return <p>No attempts yet</p>;
    }

    return (
      <Table striped>
        <thead>
          <tr>
            <th>Date Taken</th>
            <th>Score [%]</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attempts.map(attempt => (
            <tr key={attempt.startTimeInMS}>
              <td>{new Date(attempt.startTimeInMS).toTimeString()}</td>
              <td>
                {attempt.result ? `${attempt.result.percent}%` : 'Pending'}
              </td>
              <td>
                {attempt.result
                  ? attempt.result.passed
                    ? 'Passed'
                    : 'Failed'
                  : 'Pending'}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return (
    <FullWidthRow>
      <Spacer size='l' />
      <h2>{t('exam.download-header')}</h2>
      <p>{t('exam.explanation')}</p>
      <Spacer size='l' />
      <h2>Attempts</h2>
      {renderAttempts()}
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
      <strong>{t('exam.download-trouble')}</strong>{' '}
      <a href='mailto: support@freecodecamp.org'>support@freecodecamp.org</a>
    </FullWidthRow>
  );
}

export default ShowExamDownload;

// GraphQL
export const query = graphql`
  query ExamEnvironmentExam($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        id
      }
    }
  }
`;
