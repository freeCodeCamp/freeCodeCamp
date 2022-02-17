import type { CompletedChallenge } from '../redux/prop-types';
import { maybeUrlRE } from '.';

export const getSolutionDisplayType = ({
  solution,
  githubLink,
  challengeFiles
}: CompletedChallenge) => {
  if (challengeFiles?.length) return 'showFilesSolution';
  if (!solution) return 'none';
  // Some of the user records still have JavaScript project solutions stored as
  // solution strings
  if (!maybeUrlRE.test(solution)) return 'showFilesSolution';
  if (maybeUrlRE.test(githubLink ?? '')) return 'showProjectAndGitHubLinks';
  return 'showProjectLink';
};
