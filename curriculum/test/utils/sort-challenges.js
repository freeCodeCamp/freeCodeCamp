const { sortBy } = require('lodash');

exports.sortChallenges = arr => {
  return sortBy(arr, ['superOrder', 'order', 'challengeOrder']);
};
