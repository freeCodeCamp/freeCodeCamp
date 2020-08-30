const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const debug = require('debug');

const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { createPathMigrationMap } = require('./createPathMigrationMap');

const log = debug('fcc:tools:seedChallenges');
const { LOCALE: lang = 'english' } = process.env;

getChallengesForLang(lang).then(curriculum => {
  log('generating path migration map');
  const pathMap = createPathMigrationMap(curriculum);
  const outputDir = path.resolve(
    __dirname,
    '../../../api-server/server/resources/pathMigration.json'
  );
  fs.writeFile(outputDir, JSON.stringify(pathMap), err => {
    if (err) {
      console.error('failed to save pathMigration');
      console.error(err);
    } else {
      log('path migration map generated');
    }
  });
});
