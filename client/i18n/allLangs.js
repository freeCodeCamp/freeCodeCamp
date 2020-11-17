// client and curriculum languages will allow that language to
// be built. If it's not here, it will default to english
//
// forum and news means that those languages are available there
// and links to there from the client will go to that language -
// defaults to english if not found
const availableLangs = {
  client: ['english', 'espanol'],
  curriculum: ['english'],
  forum: ['english'],
  news: ['english']
};

// These are for the language selector dropdown menu
const langDisplayNames = {
  english: 'English',
  espanol: 'Espanol'
};

// These are for arguments to a formatting function used
// by the date-fns package in timeline.js
const langCodes = {
  english: 'en-US'
};

exports.availableLangs = availableLangs;
exports.langDisplayNames = langDisplayNames;
exports.langCodes = langCodes;
