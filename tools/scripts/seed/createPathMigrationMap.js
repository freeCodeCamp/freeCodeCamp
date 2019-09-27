const { flatten } = require('lodash');

const { dasherize } = require('../../../utils/slugs');

function createPathMigrationMap(curriculum) {
  return Object.keys(curriculum)
    .map(key => curriculum[key].blocks)
    .reduce((challenges, current) => {
      const superChallenges = Object.keys(current).map(
        key => current[key].challenges
      );
      return challenges.concat(flatten(superChallenges));
    }, [])
    .filter(({ isPrivate }) => !isPrivate)
    .reduce((map, challenge) => {
      const { title, block, superBlock } = challenge;
      const dashedTitle = dasherize(title);
      map[dashedTitle] = `/learn/${dasherize(superBlock)}/${dasherize(
        block
      )}/${dashedTitle}`;
      return map;
    }, {});
}

exports.createPathMigrationMap = createPathMigrationMap;
