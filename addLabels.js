require('dotenv').config();
const { owner, repo } = require('./constants');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);

octokit.authenticate(octokitAuth);

const addLabels = (number, labels, log) => {
  octokit.issues.addLabels({ owner, repo, number, labels })
  .then(() => {
    console.log(`PR #${number} added ${JSON.stringify(labels)}\n`);
  })
  .catch((err) => {
    console.log(`PR #${number} had an error when trying to label with ${JSON.stringify(labels)}\n`);
    console.log(err)
    log.finish()
  })
};

module.exports = { addLabels };
