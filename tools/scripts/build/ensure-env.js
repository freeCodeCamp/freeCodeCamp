const fs = require('fs');
const path = require('path');
const debug = require('debug');

const log = debug('fcc:tools:ensure-env');

const env = require('../../../config/env');
const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { createPathMigrationMap } = require('../seed/createPathMigrationMap');

const apiPath = path.resolve(__dirname, '../../../api-server');
const clientPath = path.resolve(__dirname, '../../../client');
const globalConfigPath = path.resolve(__dirname, '../../../config');

const { FREECODECAMP_NODE_ENV } = process.env;
const { locale } = env;

const migrationMapPath = `${apiPath}/server/resources/pathMigration.json`;
fs.access(migrationMapPath, err => {
  if (err && FREECODECAMP_NODE_ENV !== 'production') {
    log('creating pathMigration');
    return fs.writeFileSync(migrationMapPath, '{}');
  }
  if (FREECODECAMP_NODE_ENV === 'production') {
    return getChallengesForLang(locale)
      .then(createPathMigrationMap)
      .then(map => {
        fs.writeFileSync(migrationMapPath, JSON.stringify(map));
        log('pathMigration has been written');
      })
      .catch(err => {
        console.error(err);
        // eslint-disable-next-line
        process.exit(1);
      });
  }
  log('pathMigration present');
  return null;
});

fs.writeFileSync(`${clientPath}/config/env.json`, JSON.stringify(env));
fs.writeFileSync(`${globalConfigPath}/env.json`, JSON.stringify(env));
