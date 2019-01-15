const challengePageCreators = require('./challengePageCreator');
const guidePageCreators = require('./guidePageCreator');
const newsPageCreators = require('./newsPageCreator');

module.exports = {
  ...challengePageCreators,
  ...guidePageCreators,
  ...newsPageCreators
};
