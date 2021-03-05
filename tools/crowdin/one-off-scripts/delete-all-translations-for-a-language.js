/*
This one-off script can be used to delete all existing translations for a specified language on Crowdin.

Specifying a projectId and lanaguageId in the .env file allows the script to accomplish this task.
*/

require('dotenv').config({ path: `${__dirname}/../.env` });

const {
  getLanguageTranslations,
  deleteLanguageTranslations
} = require('../utils/strings');

const projectId = process.env.CROWDIN_PROJECT_ID;
const languageId = process.env.CROWDIN_LANGUAGE_ID;

(async (projectId, languageId) => {
  console.log('starting script...');
  const translations = await getLanguageTranslations({
    projectId,
    languageId
  });
  if (translations && translations.length) {
    for (let translation of translations) {
      const { stringId } = translation.data;
      await deleteLanguageTranslations(projectId, languageId, stringId);
    }
  }
  console.log('complete');
})(projectId, languageId);
