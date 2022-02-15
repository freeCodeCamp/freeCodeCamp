import type { CompletedChallenge } from '../redux/prop-types';
import { maybeUrlRE } from '.';

export const getSolutionDisplayType = ({
  solution,
  githubLink,
  challengeFiles
}: CompletedChallenge) => {
  if (challengeFiles?.length) return 'showFilesSolution';
  if (!solution) return 'none';
  if (maybeUrlRE.test(solution) && maybeUrlRE.test(githubLink ?? ''))
    return 'showProjectAndGitHubLinks';
  if (maybeUrlRE.test(solution ?? '')) return 'showProjectLink';
  return 'none';
};
