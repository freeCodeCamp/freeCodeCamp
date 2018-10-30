var version = require('./package.json').version;
var ts = new Date().getTime();

module.exports = function(config) {
  var auth;

  try {
    auth = require('./test/auth/index');
  } catch(ex) {
    auth = {};
    auth.SAUCE_USERNAME = process.env.SAUCE_USERNAME || null;
    auth.SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY || null;
  }

  if (!auth.SAUCE_USERNAME || !auth.SAUCE_ACCESS_KEY) return;
  if (process.env.SKIP_SAUCE) return;

  var branch = process.env.TRAVIS_BRANCH || 'local'
  var browserConfig = require('./sauce.browsers');
  var browsers = Object.keys(browserConfig);
  var tags = [ 'chaijs_' + version, auth.SAUCE_USERNAME + '@' + branch ];
  var tunnel = process.env.TRAVIS_JOB_NUMBER || ts;

  if (process.env.TRAVIS_JOB_NUMBER) {
    tags.push('travis@' + process.env.TRAVIS_JOB_NUMBER);
  }

  config.browsers = config.browsers.concat(browsers);
  config.customLaunchers = browserConfig;
  config.reporters.push('saucelabs');
  config.captureTimeout = 300000;

  config.sauceLabs = {
      username: auth.SAUCE_USERNAME
    , accessKey: auth.SAUCE_ACCESS_KEY
    , startConnect: ('TRAVIS' in process.env) === false
    , tags: tags
    , testName: 'ChaiJS'
    , tunnelIdentifier: tunnel
  };
};
