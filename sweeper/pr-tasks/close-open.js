require('dotenv').config();

const { addComment } = require('./add-comment');
const { rateLimiter } = require('../utils');
const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);
octokit.authenticate(octokitAuth);

/* closes and reopens an open PR with applicable comment */
const closeOpen = async number => {
  const result = await octokit.pullRequests
    .update({ owner, repo, number, state: 'closed', base: 'master' })
    .then(async () => {
      await rateLimiter(5000);
      return octokit.pullRequests.update({
        owner,
        repo,
        number,
        state: 'open',
        base: 'master'
      });
    })
    .then(async () => {
      await rateLimiter(1000);
      await addComment(
        number,
        'Closed and Reopened this PR to attempt to resolve a specific Travis build failure.'
      );
    })
    .catch(async err => {
      const { errors } = JSON.parse(err.message); // Octokit stores message as a stringified object
      const errorMg = errors[0].message;
      if (
        errorMg ===
        'state cannot be changed. The repository that submitted this pull request has been deleted.'
      ) {
        await rateLimiter(1000);
        await addComment(
          number,
          `This PR was closed because user's repo was deleted.`
        );
        console.log(
          `PR #${number} was closed because user's repo was deleted.`
        );
      } else {
        console.log(err);
      }
    });
};

module.exports = { closeOpen };
