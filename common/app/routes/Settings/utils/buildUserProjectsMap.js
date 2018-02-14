import { dasherize } from '../../../../../server/utils/index';

export const jsProjectSuperBlock = 'javascript-algorithms-and-data-structures';

export function buildUserProjectsMap(projectBlock, challengeMap) {
  const {
    challengeNameIdMap,
    challenges,
    superBlock
  } = projectBlock;
  return {
    [superBlock]: challenges.reduce((solutions, current) => {
      const dashedName = dasherize(current)
        .replace('java-script', 'javascript')
        .replace('metric-imperial', 'metricimperial');
      const completed = challengeMap[challengeNameIdMap[dashedName]];
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
