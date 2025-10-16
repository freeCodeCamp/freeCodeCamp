import type { CompletedChallenge } from '../redux/prop-types';
import { challengeTypes } from '../../../shared-dist/config/challenge-types';
import { hasProtocolRE } from '.';

type DisplayType =
  | 'none'
  | 'showMultifileProjectSolution'
  | 'showUserCode'
  | 'showProjectAndGithubLinks'
  | 'showProjectLink'
  | 'showExamResults'
  | 'noSolutionToDisplay';

export const getSolutionDisplayType = ({
  solution,
  githubLink,
  challengeFiles,
  challengeType,
  examResults
}: CompletedChallenge): DisplayType => {
  if (challengeType === challengeTypes.examDownload)
    return 'noSolutionToDisplay';
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
