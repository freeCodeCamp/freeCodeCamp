import Loadable from '@loadable/component';
import { graphql, useStaticQuery } from 'gatsby';
import { reverse, sortBy } from 'lodash-es';
import React, { useMemo, useState } from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Table, Button, Modal, Spacer } from '@freecodecamp/ui';

import envData from '../../../../config/env.json';
import { getLangCode } from '../../../../../shared/config/i18n';
import { getCertIds, getPathFromID } from '../../../../utils';
import { regenerateMissingProperties } from '../../../../../shared/utils/polyvinyl';
import CertificationIcon from '../../../assets/icons/certification';
import type {
  ChallengeData,
  CompletedChallenge
} from '../../../redux/prop-types';
import ProjectPreviewModal from '../../../templates/Challenges/components/project-preview-modal';
import ExamResultsModal from '../../SolutionViewer/exam-results-modal';
import { openModal } from '../../../templates/Challenges/redux/actions';
import { Link, FullWidthRow } from '../../helpers';
import { SolutionDisplayWidget } from '../../solution-display-widget';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import TimelinePagination from './timeline-pagination';

const SolutionViewer = Loadable(
  () => import('../../SolutionViewer/solution-viewer')
);

const mapDispatchToProps = {
  openModal
};

const { clientLocale } = envData;
const localeCode = getLangCode(clientLocale);

// Items per page in timeline.
const ITEMS_PER_PAGE = 15;

interface TimelineProps {
  completedMap: CompletedChallenge[];
  openModal: (arg: string) => void;
  t: TFunction;
  username: string;
}

interface TimelineInnerProps extends TimelineProps {
  idToNameMap: Map<string, NameMap>;
  sortedTimeline: CompletedChallenge[];
  totalPages: number;
}

interface NameMap {
  challengeTitle: string;
  challengePath: string;
  certPath: string;
}

function TimelineInner({
  completedMap,
  idToNameMap,
  openModal,
  sortedTimeline,
  totalPages,
  t,
  username
}: TimelineInnerProps) {
  const [projectTitle, setProjectTitle] = useState('');
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [completedChallenge, setCompletedChallenge] =
    useState<CompletedChallenge | null>(null);

  function viewSolution(completedChallenge: CompletedChallenge): void {
    setCompletedChallenge(completedChallenge);
    setSolutionOpen(true);
  }

  function viewProject(completedChallenge: CompletedChallenge): void {
    setCompletedChallenge(completedChallenge);
    setProjectTitle(
      idToNameMap.get(completedChallenge.id)?.challengeTitle ?? ''
    );
    openModal('projectPreview');
  }

  function viewExamResults(completedChallenge: CompletedChallenge): void {
    setCompletedChallenge(completedChallenge);
    setProjectTitle(
      idToNameMap.get(completedChallenge.id)?.challengeTitle ?? ''
    );
    openModal('examResults');
  }

  function closeSolution(): void {
    setSolutionOpen(false);
    setCompletedChallenge(null);
  }

  function firstPage(): void {
    setPageNo(1);
  }
  function nextPage(): void {
    setPageNo(prev => prev + 1);
  }
  function prevPage(): void {
    setPageNo(prev => prev - 1);
  }
  function lastPage(): void {
    setPageNo(totalPages);
  }

  function renderViewButton(
    completedChallenge: CompletedChallenge
  ): React.ReactNode {
    const { id } = completedChallenge;
    const projectTitle = idToNameMap.get(id)?.challengeTitle || '';
    return (
      <SolutionDisplayWidget
        completedChallenge={completedChallenge}
        projectTitle={projectTitle}
        showUserCode={() => viewSolution(completedChallenge)}
        showProjectPreview={() => viewProject(completedChallenge)}
        showExamResults={() => viewExamResults(completedChallenge)}
        displayContext='timeline'
      ></SolutionDisplayWidget>
    );
  }

  function renderCompletion(completed: CompletedChallenge) {
    const { id } = completed;
    const challenge = idToNameMap.get(id);
    if (!challenge) return;
    const { challengeTitle, challengePath, certPath } = challenge;
    const completedDate = new Date(completed.completedDate);
    return (
      <tr className='timeline-row' key={id}>
        <td>
          {certPath ? (
            <Link
              className='timeline-cert-link'
              to={`/certification/${username}/${certPath}`}
            >
              {challengeTitle}
              <CertificationIcon />
            </Link>
          ) : (
            <Link to={challengePath}>{challengeTitle}</Link>
          )}
        </td>
        <td>{renderViewButton(completed)}</td>
        <td className='text-center'>
          <time dateTime={completedDate.toISOString()}>
            {completedDate.toLocaleString([localeCode, 'en-US'], {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
        </td>
      </tr>
    );
  }

  const challengeData: ChallengeData | null = completedChallenge
    ? {
        ...completedChallenge,
        // // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        challengeFiles:
          completedChallenge?.challengeFiles?.map(
            regenerateMissingProperties
          ) ?? null
      }
    : null;

  const id = challengeData?.id;
  const startIndex = (pageNo - 1) * ITEMS_PER_PAGE;
  const endIndex = pageNo * ITEMS_PER_PAGE;

  return (
    <FullWidthRow>
      <section className='card'>
        <h2>{t('profile.timeline')}</h2>
        <Spacer size='s' />
        {completedMap.length === 0 ? (
          <p className='text-center'>
            {t('profile.none-completed')}&nbsp;
            <Link to='/learn'>{t('profile.get-started')}</Link>
          </p>
        ) : (
          <Table condensed={true} striped={true}>
            <thead>
              <tr>
                <th>{t('profile.challenge')}</th>
                <th>{t('settings.labels.solution')}</th>
                <th className='text-center'>{t('profile.completed')}</th>
              </tr>
            </thead>
            <tbody>
              {sortedTimeline.slice(startIndex, endIndex).map(renderCompletion)}
            </tbody>
          </Table>
        )}
        {id && (
          <Modal onClose={closeSolution} open={solutionOpen} size='large'>
            <Modal.Header showCloseButton={true} closeButtonClassNames='close'>
              {`${username}'s Solution to ${
                idToNameMap.get(id)?.challengeTitle ?? ''
              }`}
            </Modal.Header>
            <Modal.Body alignment='left'>
              <SolutionViewer
                challengeFiles={challengeData.challengeFiles}
                solution={challengeData.solution ?? ''}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeSolution}>{t('buttons.close')}</Button>
            </Modal.Footer>
          </Modal>
        )}
        {totalPages > 1 && (
          <TimelinePagination
            firstPage={firstPage}
            lastPage={lastPage}
            nextPage={nextPage}
            pageNo={pageNo}
            prevPage={prevPage}
            totalPages={totalPages}
          />
        )}
        <ProjectPreviewModal
          challengeData={challengeData}
          closeText={t('buttons.close')}
          previewTitle={projectTitle}
        />
        <ExamResultsModal
          projectTitle={projectTitle}
          examResults={completedChallenge?.examResults}
        />
      </section>
    </FullWidthRow>
  );
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment,  @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call*/
function useIdToNameMap(t: TFunction): Map<string, NameMap> {
  const {
    allChallengeNode: { edges }
  } = useStaticQuery(graphql`
    query challengeNodes {
      allChallengeNode {
        edges {
          node {
            challenge {
              fields {
                slug
                blockName
              }
              id
              superBlock
              hasEditableBoundaries
              title
            }
          }
        }
      }
    }
  `);
  const idToNameMap = new Map();
  for (const id of getCertIds()) {
    const certPath = getPathFromID(id);
    const certName = t(`certification.title.${certPath}-cert`);
    idToNameMap.set(id, {
      challengeTitle: certName,
      certPath: certPath
    });
  }
  edges.forEach(
    ({
      node: {
        challenge: {
          // @ts-expect-error Graphql needs typing
          id,
          // @ts-expect-error Graphql needs typing
          superBlock,
          // @ts-expect-error Graphql needs typing
          title,
          // @ts-expect-error Graphql needs typing
          fields: { slug, blockName },
          // @ts-expect-error Graphql needs typing
          hasEditableBoundaries
        }
      }
    }) => {
      const blockNameTitle = t(`intro:${superBlock}.blocks.${blockName}.title`);
      const shouldAppendBlockNameToTitle =
        hasEditableBoundaries || superBlock === SuperBlocks.A2English;
      idToNameMap.set(id, {
        challengeTitle: `${
          shouldAppendBlockNameToTitle ? blockNameTitle + ' - ' : ''
        }${title}`,
        challengePath: slug
      });
    }
  );
  return idToNameMap;
  /* eslint-enable */
}

const Timeline = (props: TimelineProps): JSX.Element => {
  const { completedMap, t } = props;
  const idToNameMap = useIdToNameMap(t);
  // Get the sorted timeline along with total page count.
  const { sortedTimeline, totalPages } = useMemo(() => {
    const sortedTimeline = reverse(
      sortBy(completedMap, ['completedDate']).filter(challenge => {
        return idToNameMap.has(challenge.id);
      })
    );
    const totalPages = Math.ceil(sortedTimeline.length / ITEMS_PER_PAGE);
    return { sortedTimeline, totalPages };
  }, [completedMap, idToNameMap]);
  return (
    <TimelineInner
      idToNameMap={idToNameMap}
      sortedTimeline={sortedTimeline}
      totalPages={totalPages}
      {...props}
    />
  );
};

Timeline.displayName = 'Timeline';

export default connect(null, mapDispatchToProps)(withTranslation()(Timeline));
