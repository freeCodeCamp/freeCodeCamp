import { type Certification } from '@freecodecamp/shared/config/certification-settings';
import { getIsLabChallenge } from '@freecodecamp/shared/config/challenge-types';
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
  certification: Certification,
  challengeType: number
): string[] => {
  const { challengeNodes, certificateNodes } = allChallengesInfo;
  const currentCertificateIds =
    certificateNodes
      .filter(node => node.challenge.certification === certification)[0]
      ?.challenge.tests.map(test => test.id) ?? [];
  const currentBlockIds = challengeNodes
    .filter(
      node =>
        node.challenge.block === block &&
        node.challenge.certification === certification
    )
    .map(node => node.challenge.id);

  // Labs are project-based, but each lab is its own standalone block rather than
  // part of a certification's project list. Excluding them keeps the progress bar
  // accurate (otherwise an already-completed lab reads 0% on resubmit). See #67867.
  if (isProjectBased(challengeType) && !getIsLabChallenge(challengeType)) {
    return currentCertificateIds.length > 0
      ? currentCertificateIds
      : currentBlockIds;
  }

  return currentBlockIds;
};
