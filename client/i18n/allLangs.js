/* an error will be thrown if:
 * the clientLocale variable in the .env file doesn't match an item in the
 * availableLangs.client array
 * or similarily, the curriculumLocale variable in the .env file needs to be in
 * the curriculum array below
 */
const availableLangs = {
  client: ['english', 'espanol'],
  curriculum: ['english', 'chinese']
};

// Each available client language needs an entry in the rest of the variable below

/* These are the strings to set the i18next langauge. It needs to be the two
 * character string for the language to take advantage of available
 * functionality
 */
const i18nextCodes = {
  english: 'en',
  espanol: 'es'
};

// These are for the language selector dropdown menu
const langDisplayNames = {
  english: 'English',
  espanol: 'Español'
};

/* These are for formatting dates and numbers and such
 * Make sure the code is supported by JS .toLocaleString()
 */
const langCodes = {
  english: 'en-US',
  espanol: 'es-419'
};

exports.availableLangs = availableLangs;
exports.i18nextCodes = i18nextCodes;
exports.langDisplayNames = langDisplayNames;
exports.langCodes = langCodes;
