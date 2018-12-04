const { validLabels } = require('../validation');
const { addLabels } = require('./add-labels');
const { rateLimiter } = require('../utils');

const labeler = async (number, prFiles, currentLabels, guideFolderErrorsComment) => {
  const labelsToAdd = {}; // holds potential labels to add based on file path
  if (guideFolderErrorsComment) {
    labelsToAdd['status: needs update'] = 1;
  }
  const existingLabels = currentLabels.map(({ name }) => name);
  prFiles.forEach(({ filename }) => {
    /* remove '/challenges' from filename so language variable hold the language */
    const filenameReplacement = filename.replace(/^curriculum\/challenges\//, 'curriculum\/');
    const regex = /^(docs|curriculum|guide)(?:\/)(arabic|chinese|portuguese|russian|spanish)?\/?/
    const [ _, articleType, language ] = filenameReplacement.match(regex) || []; // need an array to pass to labelsAdder

    if (articleType && validLabels[articleType]) {
      labelsToAdd[validLabels[articleType]] = 1
    }
    if (language && validLabels[language]) {
      labelsToAdd[validLabels[language]] = 1
    }
    if (articleType === 'curriculum') {
      labelsToAdd['status: need to test locally'] = 1;
    }
  })

  /* this next section only adds needed labels which are NOT currently on the PR. */
  const newLabels = Object.keys(labelsToAdd).filter(label => !existingLabels.includes(label));
  if (newLabels.length) {
    if (process.env.PRODUCTION_RUN === 'true') {
      addLabels(number, newLabels);
    }
    await rateLimiter(+process.env.RATELIMIT_INTERVAL | 1500);
  }
  return newLabels;
};

module.exports = { labeler };
