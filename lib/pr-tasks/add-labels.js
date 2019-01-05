const { owner, repo, octokitConfig, octokitAuth } = require('../constants');
const octokit = require('@octokit/rest')(octokitConfig);

octokit.authenticate(octokitAuth);

const addLabels = (number, labels, log) => {
  octokit.issues
    .addLabels({ owner, repo, number, labels })
    .then(() => {
      console.log(`PR #${number} added ${JSON.stringify(labels)}\n`);
    })
    .catch(err => {
      console.log(
        `PR #${number} had an error when trying to labels: ${JSON.stringify(
          labels
        )}\n`
      );
      console.log(err);
      log.finish();
    });
};

module.exports = { addLabels };
