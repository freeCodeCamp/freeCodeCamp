const fs = require('fs');
const path = require('path');

const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { buildMobileCurriculum } = require('./build-mobile-curriculum');

const globalConfigPath = path.resolve(__dirname, '../../../config');

// We are defaulting to English because the ids for the challenges are same
// across all languages.
getChallengesForLang('english')
  .then(JSON.stringify)
  .then(json => {
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
    buildMobileCurriculum(json);
  });
