const fs = require('fs');
const path = require('path');

const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { buildMobileCurriculum } = require('./build-mobile-curriculum');
const { buildExtCurriculumData } = require('./build-external-curricula-data');

const { CURRICULUM_LOCALE } = process.env;

const globalConfigPath = path.resolve(__dirname, '../../../config');

// We are defaulting to English because the ids for the challenges are same
// across all languages.
getChallengesForLang('english')
  .then(result => {
    if (CURRICULUM_LOCALE === 'english') {
      buildMobileCurriculum(result);
      buildExtCurriculumData('v1', result);
    }
    return result;
  })
  .then(JSON.stringify)
  .then(json => {
    fs.writeFileSync(`${globalConfigPath}/curriculum.json`, json);
  });
