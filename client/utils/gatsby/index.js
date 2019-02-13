const challengePageCreators = require('./challengePageCreator');
const guidePageCreators = require('./guidePageCreator');

module.exports = {
  ...challengePageCreators,
  ...guidePageCreators
};
