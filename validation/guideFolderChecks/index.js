const fetch = require('node-fetch');

const { addComment } = require('../../prTasks');
const { rateLimiter } = require('../../utils');
const { createErrorMsg } = require('./createErrorMsg');
const { checkPath } = require('./checkPath');

/* check for guide folder issues and add applicable comment */
const guideFolderChecks = async (number, prFiles, user) => {
  let prErrors = [];
  for (let { filename: fullPath, raw_url: fileUrl } of prFiles) {
    let newErrors;
    if (/^guide\//.test(fullPath)) {
      const response = await fetch(fileUrl);
      const fileContent = await response.text();
      newErrors = checkPath(fullPath, fileContent);
    }
    if (newErrors) {
      prErrors = prErrors.concat(newErrors);
    }
  }

  if (prErrors.length) {
    const comment = createErrorMsg(prErrors, user)
    if (process.env.PRODUCTION_RUN === 'true') {
      const result = await addComment(number, comment);
    }
    await rateLimiter(+process.env.RATELIMIT_INTERVAL | 1500);
    return comment;
  }
  else {
    return null;
  }
};

module.exports = { guideFolderChecks };
