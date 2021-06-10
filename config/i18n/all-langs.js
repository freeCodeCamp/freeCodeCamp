/* An error will be thrown if the CLIENT_LOCALE and CURRICULUM_LOCALE variables
 * from the .env file aren't found in their respective arrays below
 */
const availableLangs = {
  client: ['english', 'espanol', 'chinese', 'chinese-traditional'],
  curriculum: ['english', 'espanol', 'chinese', 'chinese-traditional']
};

// Each client language needs an entry in the rest of the variables below

/* These strings set the i18next language. It needs to be the two character
 * string for the language to take advantage of available functionality.
 * Use a 639-1 code here https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */
const i18nextCodes = {
  english: 'en',
  espanol: 'es',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant'
};

// These are for the language selector dropdown menu in the footer
const langDisplayNames = {
  english: 'English',
  espanol: 'Español',
  chinese: '中文（简体字）',
  'chinese-traditional': '中文（繁體字）'
};

/* These are for formatting dates and numbers. Used with JS .toLocaleString().
 * There's an example in profile/components/Camper.js
 * List: https://github.com/unicode-cldr/cldr-dates-modern/tree/master/main
 */
const langCodes = {
  english: 'en-US',
  espanol: 'es-419',
  chinese: 'zh',
  'chinese-traditional': 'zh-Hant'
};

exports.availableLangs = availableLangs;
exports.i18nextCodes = i18nextCodes;
exports.langDisplayNames = langDisplayNames;
exports.langCodes = langCodes;
