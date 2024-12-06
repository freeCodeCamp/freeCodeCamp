import { NavigationPaths } from '../../../redux/prop-types';

export const getChallengePaths = ({
  showNextCurriculum,
  currentCurriculumPaths,
  nextCurriculumPaths
}: {
  showNextCurriculum: boolean;
  currentCurriculumPaths: NavigationPaths;
  nextCurriculumPaths: NavigationPaths;
}): NavigationPaths => {
  const nextChallengePath = showNextCurriculum
    ? nextCurriculumPaths.nextChallengePath
    : currentCurriculumPaths.nextChallengePath;

  const prevChallengePath = showNextCurriculum
    ? nextCurriculumPaths.prevChallengePath
    : currentCurriculumPaths.prevChallengePath;
  return {
    nextChallengePath,
    prevChallengePath
  };
};
