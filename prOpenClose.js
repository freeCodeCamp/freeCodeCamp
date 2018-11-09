require('dotenv').config();
const { owner, repo, fccBaseUrl, prBaseUrl } = require('./constants');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
const { addComment } = require('./addComment');

octokit.authenticate(octokitAuth);

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

exports.prOpenClose = prOpenClose;
