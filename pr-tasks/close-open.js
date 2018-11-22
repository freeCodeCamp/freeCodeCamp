require('dotenv').config();

const { owner, repo, octokitConfig, octokitAuth } = require('../constants');
const octokit = require('@octokit/rest')(octokitConfig);

octokit.authenticate(octokitAuth);

/* closes and reopens an open PR with applicable comment */
const prOpenClose = async (number) => {
  const result = await octokit.pullRequests.update({ owner, repo , number, state: 'closed', base: 'master' })
  .then(() => {
    return octokit.pullRequests.update({ owner, repo , number, state: 'open', base: 'master' })
  })
  .then(() => {
    addComment(number, 'Closed and Reopened this PR to attempt to resolve a specific Travis build failure.');
  })
  .catch((err) => {
    console.log(err)
  })
};

module.exports = prOpenClose;
