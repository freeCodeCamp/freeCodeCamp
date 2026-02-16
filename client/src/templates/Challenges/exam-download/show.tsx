import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import {
  Button,
  Callout,
  Dropdown,
  MenuItem,
  Spacer,
  Container,
  Row,
  Col
} from '@freecodecamp/ui';
import { Trans, useTranslation, withTranslation } from 'react-i18next';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import LearnLayout from '../../../components/layouts/learn';
import ChallengeTitle from '../components/challenge-title';
import useDetectOS, { type UserOSState } from '../utils/use-detect-os';
import type {
  ChallengeNode,
  CompletedChallenge,
  User
} from '../../../redux/prop-types';
import {
  completedChallengesSelector,
  isSignedInSelector,
  userSelector
} from '../../../redux/selectors';
import { examAttempts } from '../../../utils/ajax';
import MissingPrerequisites from '../exam/components/missing-prerequisites';
import { isChallengeCompletedSelector } from '../redux/selectors';
import envData from '../../../../config/env.json';
import { Attempts } from './attempts';
import ExamTokenControls from './exam-token-controls';

import './show.css';
import { Link } from '../../../components/helpers';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

const { deploymentEnv } = envData;

interface GitProps {
  tag_name: string;
  assets: {
    browser_download_url: string;
  }[];
  name: string;
  draft: boolean;
  prerelease: boolean;
}

function PrerequisitesCallout({
  id,
  completedChallenges,
  nodes,
  examSuperBlock,
  isSignedIn,
  isHonest
}: ExamPrerequisitesProps & {
  isSignedIn: boolean;
  isHonest: boolean;
}) {
  const { t } = useTranslation();
  if (!isSignedIn) {
    return null;
  }

  if (!isHonest) {
    return (
      <Callout variant='caution' label={t('misc.caution')}>
        <p>
          <Trans i18nKey={'learn.exam.not-honest'}>
            <Link to={'/settings#honesty'}>settings</Link>
          </Trans>
        </p>
      </Callout>
    );
  }

  return (
    <ExamPrerequisites
      id={id}
      completedChallenges={completedChallenges}
      nodes={nodes}
      examSuperBlock={examSuperBlock}
    />
  );
}

interface ExamPrerequisitesProps {
  id: string;
  completedChallenges: CompletedChallenge[];
  nodes: ChallengeNode[];
  examSuperBlock: SuperBlocks;
}

function ExamPrerequisites({
  id,
  completedChallenges,
  nodes,
  examSuperBlock
}: ExamPrerequisitesProps) {
  const { t } = useTranslation();
  const getExamsQuery = examAttempts.useGetExamsQuery();
  const examIdsQuery = examAttempts.useGetExamIdsByChallengeIdQuery(id);

  if (getExamsQuery.isFetching || examIdsQuery.isFetching) {
    return <Spinner />;
  }

  if (getExamsQuery.isError || examIdsQuery.isError) {
    console.error(getExamsQuery.error);
    console.error(examIdsQuery.error);
    return null;
  }

  if (!getExamsQuery.isSuccess || !examIdsQuery.isSuccess) {
    return null;
  }

  const examId = examIdsQuery.data.at(0)?.examId;
  const exam = getExamsQuery.data.find(examItem => examItem.id === examId);

  if (!exam) {
    // This should never happen
    return null;
  }

  const unmetPrerequisites = exam.prerequisites.filter(
    prereq => !completedChallenges.some(challenge => challenge.id === prereq)
  );
  const challenges = nodes.filter(
    ({ challenge }) =>
      unmetPrerequisites?.includes(challenge.id) &&
      challenge.superBlock === examSuperBlock
  );
  const missingPrerequisites = challenges.map(({ challenge }) => {
    return {
      id: challenge.id,
      title: challenge.title,
      slug: challenge.fields?.slug || ''
    };
  });

  if (missingPrerequisites.length < 1) {
    return (
      <Callout className='exam-qualified' variant='note' label={t('misc.note')}>
        <p>{t('learn.exam.qualified')}</p>
      </Callout>
    );
  }

  return <MissingPrerequisites missingPrerequisites={missingPrerequisites} />;
}

const mapStateToProps = createSelector(
  completedChallengesSelector,
  isChallengeCompletedSelector,
  isSignedInSelector,
  userSelector,
  (
    completedChallenges: CompletedChallenge[],
    isChallengeCompleted: boolean,
    isSignedIn: boolean,
    user: User | null
  ) => ({
    completedChallenges,
    isChallengeCompleted,
    isSignedIn,
    user
  })
);

interface ShowExamDownloadProps {
  data: {
    challengeNode: ChallengeNode;
    allChallengeNode: { nodes: ChallengeNode[] };
  };
  completedChallenges: CompletedChallenge[];
  isChallengeCompleted: boolean;
  isSignedIn: boolean;
  user: User | null;
}

function normalizeArch(name: string): string {
  const archMatch = name.match(
    /(aarch64|arm|arm64|amd64|x86_64|x64|x86|i386|i686)/i
  );

  const token = archMatch?.[0];

  if (!token) return '';
  const t = token.toLowerCase();
  if (/aarch64|arm64|arm/i.test(t)) return 'arm';
  if (/x86_64|x64|amd64/i.test(t)) return 'x64';
  if (/x86|i386|i686/i.test(t)) return 'x86';
  return t;
}

export function handleDownloadLink(
  { os, architecture }: UserOSState,
  downloadLinks: string[]
) {
  const items = downloadLinks.map(link => {
    const urlEnd = link.split('/').pop() ?? '';
    const name = urlEnd;
    let ext = '';
    if (name.endsWith('.app.tar.gz')) ext = '.app.tar.gz';
    else if (name.endsWith('.tar.gz')) ext = '.tar.gz';
    else if (name.endsWith('.AppImage')) ext = '.AppImage';
    else if (name.endsWith('.dmg')) ext = '.dmg';
    else if (name.endsWith('.exe')) ext = '.exe';
    else {
      const m = name.match(/(\.[^./]+)$/);
      ext = m ? m[0] : '';
    }

    return { link, name, ext, arch: normalizeArch(name) };
  });

  const detectedArch = normalizeArch(architecture || '');

  function pickByExts(exts: string[], preferArch?: string) {
    // prefer both ext + arch
    for (const ext of exts) {
      const found = items.find(it => it.ext === ext && it.arch === preferArch);
      if (found) return found.link;
    }
    // then any with ext and unspecified arch
    const withExt = items.find(
      it => exts.includes(it.ext) && (!preferArch || it.arch === '')
    );
    if (withExt) return withExt.link;
    // then any with ext
    const anyExt = items.find(it => exts.includes(it.ext));
    return anyExt ? anyExt.link : '';
  }

  if (os === 'WIN') {
    return pickByExts(['.exe'], detectedArch) || '';
  }

  if (os === 'MAC') {
    // prefer .dmg files
    return pickByExts(['.dmg'], detectedArch) || '';
  }

  if (os === 'LINUX') {
    // prefer AppImage, then .app.tar.gz, then .tar.gz
    return (
      pickByExts(['.AppImage', '.app.tar.gz', '.tar.gz'], detectedArch) || ''
    );
  }

  return '';
}

function ShowExamDownload({
  data: {
    challengeNode: {
      challenge: { id, superBlock: examSuperBlock, title, translationPending }
    },
    allChallengeNode: { nodes }
  },
  completedChallenges,
  isChallengeCompleted,
  isSignedIn,
  user
}: ShowExamDownloadProps): JSX.Element {
  const [latestVersion, setLatestVersion] = useState<string | null>(null);

  const [downloadLink, setDownloadLink] = useState<string | undefined>('');
  const [downloadLinks, setDownloadLinks] = useState<string[]>([]);

  const userOSState = useDetectOS();

  const { t } = useTranslation();

  useEffect(() => {
    async function checkLatestVersion() {
      try {
        let latest: GitProps;

        if (deploymentEnv !== 'production') {
          const response = await fetch(
            'https://api.github.com/repos/freeCodeCamp/exam-env/releases'
          );

          if (!response.ok) {
            setLatestVersion(null);
            return;
          }

          const data = (await response.json()) as GitProps[];
          if (!data || data.length === 0) {
            setLatestVersion(null);
            return;
          }
          latest = getLatest(data);
        } else {
          const response = await fetch(
            'https://api.github.com/repos/freeCodeCamp/exam-env/releases/latest'
          );
          if (!response.ok) {
            setLatestVersion(null);
            return;
          }
          const data = (await response.json()) as GitProps;
          if (!data) {
            setLatestVersion(null);
            return;
          }
          latest = data;
        }

        const { tag_name, assets } = latest;
        setLatestVersion(tag_name);
        const urls = assets.map(link => link.browser_download_url);
        setDownloadLink(handleDownloadLink(userOSState, urls));
        setDownloadLinks(urls);
      } catch {
        setLatestVersion(null);
      }
    }

    if (userOSState.os) {
      void checkLatestVersion();
    }
  }, [userOSState]);

  return (
    <LearnLayout>
      <Helmet>
        <title>
          {title ? `${title} | freeCodeCamp.org` : 'freeCodeCamp.org'}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer size='m' />
            <ChallengeTitle
              isCompleted={isChallengeCompleted}
              translationPending={translationPending}
            >
              {title}
            </ChallengeTitle>
            <Spacer size='m' />
            <PrerequisitesCallout
              isSignedIn={isSignedIn}
              isHonest={user?.isHonest ?? false}
              id={id}
              nodes={nodes}
              completedChallenges={completedChallenges}
              examSuperBlock={examSuperBlock}
            />
            <h2>{t('exam.download-header')}</h2>
            <p>{t('exam.explanation')}</p>
            <Spacer size='l' />
            {isSignedIn && (
              <>
                <h2>{t('exam.attempts')}</h2>
                <Attempts examChallengeId={id} />
                <Spacer size='l' />
                <ExamTokenControls email={user!.email} />
              </>
            )}
            <p>
              {t('exam.version', {
                version: latestVersion || '...'
              })}
            </p>
            <Button href={'exam-environment://'}>
              {t('exam.open-exam-application')}
            </Button>
            <Spacer size='s' />
            <div className='exam-download-buttons'>
              {downloadLink ? (
                <Button href={downloadLink} download={downloadLink}>
                  {t('buttons.download-latest-version')}
                </Button>
              ) : (
                <strong>{t('exam.unable-to-detect-os')}</strong>
              )}
            </div>
            <Spacer size='xs' />
            <Dropdown block={true} dropup>
              <Dropdown.Toggle>{t('exam.download-details')}</Dropdown.Toggle>
              <Dropdown.Menu>
                {downloadLinks
                  .filter(link => !link.match(/\.sig|\.json/))
                  .map((link, index) => {
                    const urlEnd = link.split('/').pop() ?? '';
                    // App naming scheme is <app_name>_<version>?_<arch>(-setup)?(-debug)?.<ext>
                    const urlParts = urlEnd.split('_');
                    const archAndExt = urlParts.at(urlParts.length - 1);
                    const arch = archAndExt?.split('-')?.at(0);
                    const ext = archAndExt?.slice(archAndExt?.indexOf('.'));

                    const recommendedOs =
                      arch && ext ? getRecommendedOs({ arch, ext }) : '';
                    return (
                      <MenuItem
                        href={link}
                        download={link}
                        key={index}
                        variant='primary'
                      >
                        {urlEnd} {recommendedOs && `(${recommendedOs})`}
                      </MenuItem>
                    );
                  })}
              </Dropdown.Menu>
            </Dropdown>
            <Spacer size='l' />
            <strong>{t('exam.download-trouble')}</strong>{' '}
            <a href='mailto: support@freecodecamp.org'>
              support@freecodecamp.org
            </a>
            <Spacer size='l' />
          </Col>
        </Row>
      </Container>
    </LearnLayout>
  );
}

function getRecommendedOs({
  arch,
  ext
}: {
  arch: string;
  ext: string;
}): string {
  const osToExt = {
    MacOS: ['.dmg', '.app', '.app.tar.gz'],
    Linux: ['.deb', '.rpm', '.AppImage', '.tar.gz', '.AppImage.tar.gz'],
    Windows: ['.exe', '.msi']
  } as const;
  const archToHuman: Record<string, string> = {
    x64: '64-bit',
    aarch64: 'ARM',
    amd64: '64-bit',
    i386: '32-bit',
    x86: '32-bit'
  };

  const os = Object.entries(osToExt).find(([_, exts]) => exts.includes(ext));

  return `${archToHuman[arch] ?? arch} ${os ? os[0] : ''}`;
}

function getLatest(releases: GitProps[]): GitProps {
  switch (deploymentEnv) {
    case 'staging':
      return (
        releases.find(r => {
          return !r.draft && r.name.endsWith('/staging');
        }) || releases[0]
      );
    // Currently, this is never the case
    case 'development':
      return (
        releases.find(r => {
          return !r.draft && r.name.endsWith('/development');
        }) || releases[0]
      );
    default:
      return (
        releases.find(r => {
          return !r.prerelease && !r.draft && r.name.endsWith('/production');
        }) || releases[0]
      );
  }
}

export default connect(mapStateToProps)(withTranslation()(ShowExamDownload));

// GraphQL
export const query = graphql`
  query ExamEnvironmentExam($id: String!) {
    challengeNode(id: { eq: $id }) {
      challenge {
        id
        superBlock
        title
        translationPending
      }
    }
    allChallengeNode {
      nodes {
        challenge {
          id
          title
          fields {
            slug
          }
          superBlock
        }
      }
    }
  }
`;
