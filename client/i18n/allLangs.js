/* An error will be thrown if the CLIENT_LOCALE and CURRICULUM_LOCALE variables
 * from the .env file aren't found in their respective arrays below
 */
const availableLangs = {
  client: ['english', 'espanol', 'chinese'],
  curriculum: ['english', 'chinese']
};

// Each client language needs an entry in the rest of the variables below

<<<<<<< HEAD
/* These strings set the i18next langauge. It needs to be the two character
=======
/* These strings set the i18next language. It needs to be the two character
>>>>>>> ee868f0a7ba6a3a6b49ec30f9a1214d97850383c
 * string for the language to take advantage of available functionality.
 * Use a 639-1 code here https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */
const i18nextCodes = {
  english: 'en',
  espanol: 'es',
  chinese: 'zh'
};

// These are for the language selector dropdown menu in the footer
const langDisplayNames = {
  english: 'English',
  espanol: 'Español',
  chinese: '中文'
};

/* These are for formatting dates and numbers. Used with JS .toLocaleString().
 * There's an example in profile/components/Camper.js
 * List: https://github.com/unicode-cldr/cldr-dates-modern/tree/master/main
 */
const langCodes = {
  english: 'en-US',
  espanol: 'es-419',
  chinese: 'zh'
};

exports.availableLangs = availableLangs;
exports.i18nextCodes = i18nextCodes;
exports.langDisplayNames = langDisplayNames;
exports.langCodes = langCodes;
