import { kebabCase } from 'lodash';

export const jsProjectSuperBlock = 'javascript-algorithms-and-data-structures';

export function buildUserProjectsMap(projectBlock, challengeMap) {
  const {
    challengeNameIdMap,
    challenges,
    superBlock
  } = projectBlock;
  return {
    [superBlock]: challenges.reduce((solutions, current) => {
      const completed = challengeMap[challengeNameIdMap[kebabCase(current)]];
      let solution = '';
      if (superBlock === jsProjectSuperBlock) {
        solution = {};
      }
      if (completed) {
        solution = 'solution' in completed ?
          completed.solution :
          completed.files;
      }
      return {
        ...solutions,
        [current]: solution
      };
    }, {})
  };
}
