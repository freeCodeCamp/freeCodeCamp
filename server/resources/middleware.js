var R = require('ramda');

/**
 *
 * @param req
 * @param res
 * @returns null
 * Middleware to migrate users from fragmented challenge structure to unified
 * challenge structure
 */
exports.userMigration = function(req, res, next) {
  if (!req.user || req.user.completedChallenges.length !== 0) {
    return next();
  }
  req.user.completedChallenges = R.filter(function (elem) {
    return elem; // getting rid of undefined
  }, R.concat(
      req.user.completedCoursewares,
      req.user.completedBonfires.map(function (bonfire) {
        return ({
          completedDate: bonfire.completedDate,
          _id: bonfire._id,
          name: bonfire.name,
          completedWith: bonfire.completedWith,
          solution: bonfire.solution,
          githubLink: '',
          verified: false,
          challengeType: 5
        });
      })
    )
  );
  return next();
};
