// languages that are allowed to be built:
const availableLangs = {
  client: ['english', 'espanol'],
  curriculum: ['english', 'chinese']
};

// These are the strings to set the i18next langauge
// Needs to be the two character string for the language
// to take advantage of available functionality
const i18nextCodes = {
  english: 'en',
  espanol: 'es'
};

// These are for the language selector dropdown menu
const langDisplayNames = {
  english: 'English',
  espanol: 'Español'
};

// These are for formatting dates and numbers and such
// Make sure the code is supported by JS .toLocaleString()
const langCodes = {
  english: 'en-US',
  espanol: 'es-419'
};

exports.availableLangs = availableLangs;
exports.i18nextCodes = i18nextCodes;
exports.langDisplayNames = langDisplayNames;
exports.langCodes = langCodes;
