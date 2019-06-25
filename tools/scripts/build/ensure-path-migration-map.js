const fs = require('fs');
const path = require('path');
const debug = require('debug');

const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { createPathMigrationMap } = require('../seed/createPathMigrationMap');

const log = debug('fcc:tools:ensure-env');

log.enabled = true;

const apiPath = path.resolve(__dirname, '../../api-server');

const migrationMapPath = `${apiPath}/server/resources/pathMigration.json`;

// The migrationMap is to try and resolve pre-learn challenge urls to
// current challenge urls
// defaulting to english as there were no other languages available
// that would require this mapping
getChallengesForLang('english')
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
