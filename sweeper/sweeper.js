/*
This script was originally created to iterate over all open PRs to label and comment
on specific PR errors (i.e. guide related filenmame syntax and frontmatter).

Since the first run which covered over 10,000+ PRs, it is curently ran every couple of days
for just the most recent PRs.

To run the script for a specific range (i.e. label and comment on guide errors),
run `node sweeper.js range startingPrNumber endingPrNumber`
*/

const { owner, repo, octokitConfig, octokitAuth } = require('./constants');

const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('./get-prs');
 const { guideFolderChecks } = require('./validation');
const { savePrData, ProcessingLog, rateLimiter } = require('./utils');
const { labeler } = require('./pr-tasks');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog('sweeper');

log.start();
console.log('Sweeper started...');
(async () => {
  const { totalPRs, firstPR, lastPR } = await getUserInput();
  const prPropsToGet = ['number', 'labels', 'user'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    console.log('Processing PRs...');
    for (let count in openPRs) {
      let { number, labels: currentLabels, user: { login: username } } = openPRs[count];
      const { data: prFiles } = await octokit.pullRequests.listFiles({ owner, repo, number });

      const guideFolderErrorsComment = await guideFolderChecks(number, prFiles, username);
      const commentLogVal = guideFolderErrorsComment ? guideFolderErrorsComment : 'none';

      const labelsAdded = await labeler(number, prFiles, currentLabels, guideFolderErrorsComment);
      const labelLogVal = labelsAdded.length ? labelsAdded : 'none added';

      log.add(number, { number, comment: commentLogVal, labels: labelLogVal });
      await rateLimiter(+process.env.RATELIMIT_INTERVAL | 1500);
    }
  }
})()
.then(() => {
  log.finish();
  console.log('Sweeper complete');
})
.catch(err => {
  log.finish();
  console.log(err)
})
