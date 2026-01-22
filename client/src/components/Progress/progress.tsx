import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createSelector } from 'reselect';
import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { useStaticQuery, graphql } from 'gatsby';

import {
  challengeMetaSelector,
  currentBlockIdsSelector,
  completedChallengesInBlockSelector,
  completedPercentageSelector
} from '../../templates/Challenges/redux/selectors';
import { liveCerts } from '../../../config/cert-and-project-map';
import { updateAllChallengesInfo } from '../../redux/actions';
import type {
  CertificateNode,
  ChallengeNode,
  SuperBlockStructure
} from '../../redux/prop-types';
import {
  updateSuperBlockStructures,
  superBlockStructuresSelector
} from '../../templates/Introduction/redux';
import { getIsDailyCodingChallenge } from '@freecodecamp/shared/config/challenge-types';
import {
  isValidDateString,
  formatDisplayDate
} from '../daily-coding-challenge/helpers';
import ProgressInner from './progress-inner';

const mapStateToProps = createSelector(
  currentBlockIdsSelector,
  challengeMetaSelector,
  completedChallengesInBlockSelector,
  completedPercentageSelector,
  superBlockStructuresSelector,
  (
    currentBlockIds: string[],
    {
      challengeType,
      id,
      block,
      superBlock
    }: {
      challengeType: number;
      id: string;
      block: string;
      superBlock: string;
    },
    completedChallengesInBlock: number,
    completedPercent: number,
    superBlockStructures: Record<string, SuperBlockStructure>
  ) => ({
    currentBlockIds,
    challengeType,
    id,
    block,
    superBlock,
    completedChallengesInBlock,
    completedPercent,
    superBlockStructures
  })
);

const mapDispatchToProps = {
  updateAllChallengesInfo,
  updateSuperBlockStructures
};

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ProgressProps extends PropsFromRedux {
  t: TFunction;
}
function Progress({
  currentBlockIds,
  block,
  id,
  superBlock,
  challengeType,
  completedChallengesInBlock,
  completedPercent,
  t,
  updateAllChallengesInfo,
  updateSuperBlockStructures,
  superBlockStructures: superBlockStructuresFromStore
}: ProgressProps): JSX.Element {
  let blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);
  // Always false for legacy full stack, since it has no projects.
  const isCertificationProject = liveCerts.some(cert =>
    cert.projects?.some((project: { id: string }) => project.id === id)
  );

  // Display the date of the challenge in the completion modal for daily challenges
  if (getIsDailyCodingChallenge(challengeType)) {
    const dateParam =
      new URLSearchParams(window.location.search).get('date') || '';

    if (isValidDateString(dateParam)) {
      blockTitle += `: ${formatDisplayDate(dateParam)}`;
    }
  }

  const { challengeNodes, certificateNodes, superBlockStructureNodes } =
    useGetAllChallengeData();

  useEffect(() => {
    updateAllChallengesInfo({ challengeNodes, certificateNodes });

    const structuresMap: Record<string, SuperBlockStructure> = {};

    // The super block structures are pretty static, so we only want to
    // update them if we don't already have them in the store.
    if (Object.keys(superBlockStructuresFromStore).length === 0) {
      superBlockStructureNodes.forEach((node: SuperBlockStructure) => {
        structuresMap[node.superBlock] = node;
      });

      updateSuperBlockStructures(structuresMap);
    }
  }, [
    challengeNodes,
    certificateNodes,
    superBlockStructureNodes,
    updateAllChallengesInfo,
    updateSuperBlockStructures,
    superBlockStructuresFromStore
  ]);

  const totalChallengesInBlock = currentBlockIds?.length ?? 0;
  const meta =
    isCertificationProject && totalChallengesInBlock > 0
      ? t('learn.project-complete', {
          completedChallengesInBlock,
          totalChallengesInBlock
        })
      : t('learn.percent-complete', {
          percent: completedPercent
        });
  return (
    <div
      className='progress-bar-container'
      data-playwright-test-label='progress-bar-container'
    >
      <ProgressInner
        title={blockTitle}
        meta={meta}
        completedPercent={completedPercent}
      />
    </div>
  );
}

// TODO: extract this hook and call it when needed (i.e. here, in the lower-jaw
// and in completion-modal). Then we don't have to pass the data into redux.
// This would mean that we have to memoize any complex calculations in the hook.
// Otherwise, this will undo all the recent performance improvements.
const useGetAllChallengeData = () => {
  const {
    allChallengeNode: { nodes: challengeNodes },
    allCertificateNode: { nodes: certificateNodes },
    allSuperBlockStructure: { nodes: superBlockStructureNodes }
  }: {
    allChallengeNode: { nodes: ChallengeNode[] };
    allCertificateNode: { nodes: CertificateNode[] };
    allSuperBlockStructure: { nodes: SuperBlockStructure[] };
  } = useStaticQuery(graphql`
    query getBlockNode {
      allChallengeNode(
        sort: {
          fields: [
            challenge___superOrder
            challenge___order
            challenge___challengeOrder
          ]
        }
      ) {
        nodes {
          challenge {
            block
            id
          }
        }
      }
      allCertificateNode {
        nodes {
          challenge {
            certification
            tests {
              id
            }
          }
        }
      }
      allSuperBlockStructure {
        nodes {
          superBlock
          chapters {
            dashedName
            comingSoon
            modules {
              dashedName
              comingSoon
              moduleType
              blocks
            }
          }
        }
      }
    }
  `);

  return { challengeNodes, certificateNodes, superBlockStructureNodes };
};

Progress.displayName = 'Progress';

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(withTranslation()(Progress));
