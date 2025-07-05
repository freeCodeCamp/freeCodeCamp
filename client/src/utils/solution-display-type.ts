import type { CompletedChallenge } from '../redux/prop-types';
import { challengeTypes } from '../../../shared/config/challenge-types';
import { hasProtocolRE } from '.';

type DisplayType =
  | 'none'
  | 'showMultifileProjectSolution'
  | 'showUserCode'
  | 'showProjectAndGithubLinks'
  | 'showProjectLink'
  | 'showExamResults';

export const getSolutionDisplayType = ({
  solution,
  githubLink,
  challengeFiles,
  challengeType,
  examResults
}: CompletedChallenge): DisplayType => {
  if (examResults) return 'showExamResults';
  if (challengeFiles?.length)
    return challengeType === challengeTypes.multifileCertProject
      ? 'showMultifileProjectSolution'
      : 'showUserCode';
  if (!solution) return 'none';
  // Some of the user records still have JavaScript project solutions stored as
  // solution strings
  if (!hasProtocolRE.test(solution)) return 'showUserCode';
  if (hasProtocolRE.test(githubLink ?? '')) return 'showProjectAndGithubLinks';
  return 'showProjectLink';
};
