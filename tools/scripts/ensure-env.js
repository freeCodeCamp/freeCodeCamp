const fs = require('fs');
const path = require('path');
const debug = require('debug');

const envPath = path.resolve(__dirname, '../../.env');
require('dotenv').config({ path: envPath });

const env = require('../../config/env');
const { createRedirects } = require('./createRedirects');

const log = debug('fcc:tools:ensure-env');
const {
  HOME_LOCATION: home,
  API_LOCATION: api,
  FORUM_LOCATION: forum,
  FORUM_PROXY_LOCATION: forumProxy
} = process.env;

const apiPath = path.resolve(__dirname, '../../api-server');
const clientPath = path.resolve(__dirname, '../../client');
const clientStaticPath = path.resolve(clientPath, 'static');

const redirects = createRedirects({ api, home, forum, forumProxy });

fs.writeFile(`${clientStaticPath}/_redirects`, redirects, function(err) {
  if (err) {
    log('Error');
    console.error(err);
  }
  log('_redirects written');
});

fs.access(`${apiPath}/server/rev-manifest.json`, function(err) {
  if (err) {
    log('creating manifest');
    return fs.writeFileSync(`${apiPath}/server/rev-manifest.json`, '{}');
  }
  log('rev-manifest present');
  return null;
});

fs.access(`${apiPath}/server/resources/pathMigration.json`, err => {
  if (err) {
    log('creating pathMigration');
    return fs.writeFileSync(
      `${apiPath}/server/resources/pathMigration.json`,
      '{}'
    );
  }
  log('pathMigration present');
  return null;
});

fs.writeFileSync(`${clientPath}/config/env.json`, JSON.stringify(env));
