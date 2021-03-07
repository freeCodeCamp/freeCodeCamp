/*
This one-off script can be used to make any string in a Crowdin project to be marked as "Done" in case a workflow
change inadvertently causes strings, which already have translations (and even an approved translation), to be
reverted to "To Do".

Specifying a projectId in the .env file allows the script to find any string with at least one translation, 
adds a new temporary translation to it, and then delete the newly added translation.  It is the addition of a
new translation that switches the status back to "Done" in the Crowdsourcing view on Crowdin.

*/

require('dotenv').config({ path: `${__dirname}/../.env` });

const getLanguages = require('../utils/get-languages');

const {
  addTranslation,
  deleteTranslation,
  getLanguageTranslations
} = require('../utils/strings');

const markTranslatedStringsAsDone = async projectId => {
  console.log('starting script...');
  const languageIds = await getLanguages(projectId);
  for (let languageId of languageIds) {
    const translations = await getLanguageTranslations({
      projectId,
      languageId
    });
    if (translations && translations.length) {
      console.log(
        `${languageId} has ${translations.length} strings with at least one translation`
      );
      for (let translation of translations) {
        const { stringId } = translation.data;
        const newTranslation = await addTranslation(
          projectId,
          stringId,
          languageId,
          'this is a camperbot test translation'
        );
        if (newTranslation && newTranslation.id);
        console.log(
          `added new translation (translationId: ${newTranslation.id}) for stringId: ${stringId}`
        );
        await deleteTranslation(projectId, newTranslation.id);
      }
    }
  }
  console.log('complete');
};

const projectId = process.env.CROWDIN_PROJECT_ID;
markTranslatedStringsAsDone(projectId);
