import { find } from 'lodash';

export const jsProjectSuperBlock = 'javascript-algorithms-and-data-structures';

export function buildUserProjectsMap(projectBlock, completedChallenges) {
  const {
    challenges,
    superBlock
  } = projectBlock;
  return {
    [superBlock]: challenges.reduce((solutions, current) => {
      const { id } = current;
      const completed = find(
        completedChallenges,
        ({ id: completedId }) => completedId === id
      );
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
        [current.title]: solution
      };
    }, {})
  };
}
