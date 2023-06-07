import type { CompletedChallenge } from '../redux/prop-types';
import { challengeTypes } from '../../utils/challenge-types';
import { maybeUrlRE } from '.';

// eslint-disable-next-line @typescript-eslint/naming-convention
type DisplayType =
  | 'none'
  | 'showMultifileProjectSolution'
  | 'showUserCode'
  | 'showProjectAndGithubLinks'
  | 'showProjectLink';

export const getSolutionDisplayType = ({
  solution,
  githubLink,
  challengeFiles,
  challengeType
}: CompletedChallenge): DisplayType => {
  if (challengeFiles?.length)
    return challengeType === challengeTypes.multifileCertProject
      ? 'showMultifileProjectSolution'
      : 'showUserCode';
  if (!solution) return 'none';
  // Some of the user records still have JavaScript project solutions stored as
  // solution strings
  if (!maybeUrlRE.test(solution)) return 'showUserCode';
  if (maybeUrlRE.test(githubLink ?? '')) return 'showProjectAndGithubLinks';
  return 'showProjectLink';
};
