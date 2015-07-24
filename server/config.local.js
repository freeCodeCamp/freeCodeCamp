var globalConfig = require('../common/config.global');

module.exports = {
  restApiRoot: globalConfig.restApi,
  sessionSecret: process.env.SESSION_SECRET,

  trello: {
    key: process.env.TRELLO_KEY,
    secret: process.env.TRELLO_SECRET
  },

  blogger: {
    key: process.env.BLOGGER_KEY
  },

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }
};
