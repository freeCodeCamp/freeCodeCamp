import { AllChallengesInfo } from '../redux/prop-types';
import { isProjectBased } from './curriculum-layout';

export function getCompletedPercentage(
  completedChallengesIds: string[] = [],
  currentBlockIds: string[] = [],
  currentChallengeId: string
): number {
  const completedChallengesInBlock = getCompletedChallengesInBlock(
    completedChallengesIds,
    currentBlockIds,
    currentChallengeId
  );
  const completedPercent = Math.round(
    (completedChallengesInBlock / currentBlockIds.length) * 100
  );

  return completedPercent > 100 ? 100 : completedPercent;
}

export function getCompletedChallengesInBlock(
  completedChallengesIds: string[],
  currentBlockIds: string[],
  currentChallengeId: string
): number {
  const oldCompletionCount = completedChallengesIds.filter(challengeId =>
    currentBlockIds.includes(challengeId)
  ).length;

  const isAlreadyCompleted =
    completedChallengesIds.includes(currentChallengeId);

  return isAlreadyCompleted ? oldCompletionCount : oldCompletionCount + 1;
}

export const getCurrentBlockIds = (
  allChallengesInfo: AllChallengesInfo,
  block: string,
  certification: string,
  challengeType: number
): string[] => {
  const { challengeNodes, certificateNodes } = allChallengesInfo;
  const currentCertificateIds =
    certificateNodes
      .filter(node => node.challenge.certification === certification)[0]
      ?.challenge.tests.map(test => test.id) ?? [];
  const currentBlockIds = challengeNodes
    .filter(node => node.challenge.block === block)
    .map(node => node.challenge.id);

  return isProjectBased(challengeType)
    ? currentCertificateIds
    : currentBlockIds;
};
