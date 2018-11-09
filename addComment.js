require('dotenv').config();
const { owner, repo } = require('./constants');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);

octokit.authenticate(octokitAuth);

const addComment = (number, comment) => {
  setTimeout(async () => {
    octokit.issues.createComment({ owner, repo, number, body: comment })
    .then(() => {
      console.log(`PR #${number} successfully added a comment\n`);
    })
    .catch((err) => {
      console.log(`PR #${number} had an error when trying to add a comment\n`);
      console.log(err)
    })
  }, 1000);  // wait one second to comment for API rate limiting compliance
};

exports.addComment = addComment;
