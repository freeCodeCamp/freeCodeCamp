import { NavigationPaths } from '../../../redux/prop-types';

export const getChallengePaths = ({
  currentCurriculumPaths
}: {
  currentCurriculumPaths: NavigationPaths;
}): NavigationPaths => {
  return {
    nextChallengePath: currentCurriculumPaths.nextChallengePath,
    prevChallengePath: currentCurriculumPaths.prevChallengePath
  };
};
