import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import {
  Button,
  Dropdown,
  MenuItem,
  Spacer,
  Container,
  Row,
  Col
} from '@freecodecamp/ui';
import { isEmpty } from 'lodash';
import { useTranslation, withTranslation } from 'react-i18next';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import LearnLayout from '../../../components/layouts/learn';
import ChallengeTitle from '../components/challenge-title';
import useDetectOS from '../utils/use-detect-os';
import { ChallengeNode, CompletedChallenge } from '../../../redux/prop-types';
import {
  completedChallengesSelector,
  isSignedInSelector
} from '../../../redux/selectors';
import { examAttempts } from '../../../utils/ajax';
import MissingPrerequisites from '../exam/components/missing-prerequisites';
import { isChallengeCompletedSelector } from '../redux/selectors';
import { Attempts } from './attempts';
import ExamTokenControls from './exam-token-controls';

import './show.css';

interface GitProps {
  tag_name: string;
  assets: {
    browser_download_url: string;
  }[];
}

const mapStateToProps = createSelector(
  completedChallengesSelector,
  isChallengeCompletedSelector,
  isSignedInSelector,
  (
    completedChallenges: CompletedChallenge[],
    isChallengeCompleted: boolean,
    isSignedIn: boolean
  ) => ({
    completedChallenges,
    isChallengeCompleted,
    isSignedIn
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
  isSignedIn
}: ShowExamDownloadProps): JSX.Element {
  const [latestVersion, setLatestVersion] = useState<string | null>(null);

  const [downloadLink, setDownloadLink] = useState<string | undefined>('');
  const [downloadLinks, setDownloadLinks] = useState<string[]>([]);

  const getExamsQuery = examAttempts.useGetExamsQuery(undefined, {
    skip: !isSignedIn
  });
  const examIdsQuery = examAttempts.useGetExamIdsByChallengeIdQuery(id, {
    skip: !isSignedIn
  });

  const os = useDetectOS();

  const { t } = useTranslation();

  function handleDownloadLink(downloadLinks: string[]) {
    const win = downloadLinks.find(link => link.match(/\.exe/));
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

  const examId = examIdsQuery.data?.at(0)?.examId;
  const exam = getExamsQuery.data?.find(examItem => examItem.id === examId);
  const unmetPrerequisites = exam?.prerequisites?.filter(
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
            {!!missingPrerequisites.length && (
              <MissingPrerequisites
                missingPrerequisites={missingPrerequisites}
              />
            )}
            <h2>{t('exam.download-header')}</h2>
            <p>{t('exam.explanation')}</p>
            <Spacer size='l' />
            {isSignedIn && (
              <>
                <h2>{t('exam.attempts')}</h2>
                <Attempts examChallengeId={id} />
                <Spacer size='l' />
                <ExamTokenControls />
              </>
            )}
            <p>
              {t('exam.version', {
                version: latestVersion || '...'
              })}
            </p>
            {/* TODO: confirm this works on MacOS */}
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
            <Dropdown dropup>
              <Dropdown.Toggle>{t('exam.download-details')}</Dropdown.Toggle>
              <Dropdown.Menu>
                {downloadLinks
                  .filter(link => !link.match(/\.sig|\.json/))
                  .map((link, index) => {
                    const urlEnd = link.split('/').pop() ?? '';
                    return (
                      <MenuItem
                        href={link}
                        download={link}
                        key={index}
                        variant='primary'
                      >
                        {urlEnd}
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
