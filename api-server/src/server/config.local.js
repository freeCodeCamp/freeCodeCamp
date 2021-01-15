var globalConfig = require('../common/config.global');

module.exports = {
  restApiRoot: globalConfig.restApi,
  sessionSecret: process.env.SESSION_SECRET,

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }
};
