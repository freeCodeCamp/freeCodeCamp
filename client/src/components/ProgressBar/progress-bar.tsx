import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { TFunction, withTranslation } from 'react-i18next';
import {
  completedChallengesIds,
  challengeMetaSelector
} from '../../templates/Challenges/redux/selectors';
import { isSignedInSelector } from '../../redux/selectors';
import { AllChallengeNode } from '../../redux/prop-types';
import { dasherize } from '../../../../utils/slugs';
import { isFinalProject } from '../../../utils/challenge-types';
import { certMap } from '../../resources/cert-and-project-map';
import ProgressBarInner from './progress-bar-inner';

interface ProgressBarProps {
  completedPercent: number;
  completedChallengesIds: string[];
  certification: string;
  challengeType: number;
  block: string;
  superBlock: string;
  id: string;
  isSignedIn: boolean;
  t: TFunction;
}

interface CertificateNode {
  challenge: {
    certification: string;
    tests: { id: string }[];
  };
}

const mapStateToProps = createSelector(
  completedChallengesIds,
  challengeMetaSelector,
  isSignedInSelector,

  (
    completedChallengesIds: string[],
    {
      certification,
      id,
      challengeType,
      block,
      superBlock
    }: {
      certification: string;
      id: string;
      challengeType: number;
      block: string;
      superBlock: string;
    },
    isSignedIn: boolean
  ) => ({
    completedChallengesIds,
    certification,
    id,
    challengeType,
    block,
    superBlock,
    isSignedIn
  })
);

function ProgressBar({
  completedChallengesIds,
  certification,
  id,
  challengeType,
  block,
  superBlock,
  isSignedIn,
  t
}: ProgressBarProps): JSX.Element {
  const currentBlockIds = useCurrentBlockIds(
    block,
    certification,
    isFinalProject(challengeType)
  );

  console.log({ currentBlockIds });

  const blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);

  const completedChallengesInBlock = getCompletedChallengesInBlock(
    completedChallengesIds,
    currentBlockIds,
    id
  );

  const completedPercent = isSignedIn
    ? getCompletedPercent(currentBlockIds, completedChallengesInBlock)
    : 0;

  const isCertificationProject = certMap.some(cert => {
    // @ts-expect-error If `projects` does not exist, no consequences
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return cert.projects?.some((project: { id: string }) => project.id === id);
  });

  const totalChallengesInBlock = currentBlockIds?.length ?? 0;

  const meta = isCertificationProject
    ? t('learn.project-complete', {
        completedChallengesInBlock,
        totalChallengesInBlock
      })
    : t('learn.percent-complete', {
        percent: completedPercent
      });
  return (
    <ProgressBarInner
      title={blockTitle}
      meta={meta}
      completedPercent={completedPercent}
    />
  );
}

export function getCompletedPercent(
  currentBlockIds: string[] = [],
  completedChallengesInBlock: number
): number {
  const completedPercent = Math.round(
    (completedChallengesInBlock / currentBlockIds.length) * 100
  );

  console.log({ currentBlockIds, completedChallengesInBlock });

  return completedPercent > 100 ? 100 : completedPercent;
}

function getCompletedChallengesInBlock(
  completedChallengesIds: string[],
  currentBlockChallengeIds: string[],
  currentChallengeId: string
) {
  const oldCompletionCount = completedChallengesIds.filter(challengeId =>
    currentBlockChallengeIds.includes(challengeId)
  ).length;

  const isAlreadyCompleted =
    completedChallengesIds.includes(currentChallengeId);

  return isAlreadyCompleted ? oldCompletionCount : oldCompletionCount + 1;
}

const useCurrentBlockIds = (
  block: string,
  certification: string,
  isFinalProjectBlock: boolean
) => {
  const {
    allChallengeNode: { edges: challengeEdges },
    allCertificateNode: { nodes: certificateNodes }
  }: {
    allChallengeNode: AllChallengeNode;
    allCertificateNode: { nodes: CertificateNode[] };
  } = useStaticQuery(graphql`
    query getCurrentBlockNodes {
      allChallengeNode(
        sort: {
          fields: [
            challenge___superOrder
            challenge___order
            challenge___challengeOrder
          ]
        }
      ) {
        edges {
          node {
            challenge {
              block
              id
            }
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
    }
  `);

  const currentCertificateIds = certificateNodes
    .filter(
      node => dasherize(node.challenge.certification) === certification
    )[0]
    ?.challenge.tests.map(test => test.id);
  const currentBlockIds = challengeEdges
    .filter(edge => edge.node.challenge.block === block)
    .map(edge => edge.node.challenge.id);

  return isFinalProjectBlock ? currentCertificateIds : currentBlockIds;
};

ProgressBar.displayName = 'ProgressBar';

export default connect(mapStateToProps, null)(withTranslation()(ProgressBar));
