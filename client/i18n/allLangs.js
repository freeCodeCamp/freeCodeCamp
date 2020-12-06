/* An error will be thrown if the CLIENT_LOCALE and CURRICULUM_LOCALE variables
 * from the .env file aren't found in their respective arrays below
 */
const availableLangs = {
  client: ['english', 'espanol'],
  curriculum: ['english', 'chinese']
};

// Each available client language needs an entry in the rest of the variables below

/* These are the strings to set the i18next langauge. It needs to be the two
 * character string for the language to take advantage of available
 * functionality
 * see the 639-1 codes here https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */
const i18nextCodes = {
  english: 'en',
  espanol: 'es'
};

// These are for the language selector dropdown menu in the footer
const langDisplayNames = {
  english: 'English',
  espanol: 'Español'
};

/* These are for formatting dates and numbers and such
 * Make sure the code is supported by JS .toLocaleString()
 * There's an example in profile/components/Camper.js
 */
const langCodes = {
  english: 'en-US',
  espanol: 'es-419'
};

exports.availableLangs = availableLangs;
exports.i18nextCodes = i18nextCodes;
exports.langDisplayNames = langDisplayNames;
exports.langCodes = langCodes;
