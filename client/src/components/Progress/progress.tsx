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
// NOTE: we intentionally do not show per-project counts in the completion
// modal for certification projects. This avoids misleading "1 out of 1"
// messages while a longer-term fix is discussed.
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
import { getIsDailyCodingChallenge } from '../../../../shared-dist/config/challenge-types';
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
  _id,
  superBlock,
  challengeType,
  _completedChallengesInBlock,
  completedPercent,
  t,
  updateAllChallengesInfo,
  updateSuperBlockStructures,
  superBlockStructures: superBlockStructuresFromStore
}: ProgressProps): JSX.Element {
  let blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);

  // Display the date of the challenge in the completion modal for daily challenges
  // `getIsDailyCodingChallenge` has types that can be imprecise in some
  // build/test environments; cast it to a safe function type before calling.
  const _isDaily = (
    getIsDailyCodingChallenge as unknown as (ct: number) => boolean
  )(challengeType);

  if (_isDaily) {
    const dateParam =
      new URLSearchParams(window.location.search).get('date') || '';

    if (isValidDateString(dateParam)) {
      blockTitle += `: ${formatDisplayDate(dateParam)}`;
    }
  }

  const { challengeNodes, certificateNodes, superBlockStructureNodes } =
    useGetAllChallengeData();

  useEffect(() => {
    // The action creators have complex typings coming from redux; cast to a
    // safer call signature here to satisfy the linter.

    (
      updateAllChallengesInfo as unknown as (arg: {
        challengeNodes: ChallengeNode[];
        certificateNodes: CertificateNode[];
      }) => void
    )({ challengeNodes, certificateNodes });

    const structuresMap: Record<string, SuperBlockStructure> = {};

    // The super block structures are pretty static, so we only want to
    // update them if we don't already have them in the store.
    if (Object.keys(superBlockStructuresFromStore).length === 0) {
      superBlockStructureNodes.forEach((node: SuperBlockStructure) => {
        // Ensure the key is a string to avoid computed-name typing issues.
        const key = String(node.superBlock);
        structuresMap[key] = node;
      });

      (
        updateSuperBlockStructures as unknown as (
          arg: Record<string, SuperBlockStructure>
        ) => void
      )(structuresMap);
    }
  }, [
    challengeNodes,
    certificateNodes,
    superBlockStructureNodes,
    updateAllChallengesInfo,
    updateSuperBlockStructures,
    superBlockStructuresFromStore
  ]);

  const _totalChallengesInBlock = currentBlockIds?.length ?? 0;

  // Temporary behavior: always show percent-complete in the completion modal.
  // This hides the "Completed X of Y certification projects" line which has
  // been causing incorrect messages (e.g. "1 out of 1").
  const meta = t('learn.percent-complete', {
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

// Export the raw component for testing. The default export remains the
// connected, translated component used in the app.
export { Progress };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(withTranslation()(Progress));
