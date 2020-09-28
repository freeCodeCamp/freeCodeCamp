/*
This script was created to find all open PRs with unknown repos which 
potentially have merge conflicts.

To run the script for a specific language, call the script with the language
name as the first argument.

Note: If any PR displayed in the console shows "unknown", you will need to rerun
the script again.
*/

const { owner, repo, octokitConfig, octokitAuth } = require('../lib/constants');
const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('../lib/get-prs');
const { ProcessingLog, rateLimiter } = require('../lib/utils');
const { validLabels } = require('../lib/validation/valid-labels');

octokit.authenticate(octokitAuth);

let languageLabel;
let [languageArg] = process.argv.slice(2);
if (languageArg) {
  languageArg = languageArg.toLowerCase();
  languageLabel = validLabels[languageArg] ? validLabels[languageArg] : null;
}

if (languageLabel) {
  console.log(`finding PRs with label = ${languageLabel}`);
}

const log = new ProcessingLog('unknown-repo-prs-with-merge-conflicts');
log.start();
(async () => {
  const { totalPRs, firstPR, lastPR } = await getUserInput('all');
  const prPropsToGet = ['number', 'labels', 'user', 'head'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);
  if (openPRs.length) {
    let count = 0;
    let mergeConflictCount = 0;

    for (let i = 0; i < openPRs.length; i++) {
      let { labels, number, head: { repo: headRepo } } = openPRs[i];

      const hasLanguage = languageLabel && labels.some(
        ({ name }) => languageLabel === name
      );

      if (headRepo === null && (!languageLabel || hasLanguage )) {
        let data = await octokit.pullRequests.get({ owner, repo, number });
        let mergeableState = data.data.mergeable_state;
        if (mergeableState === 'unknown') {
          await rateLimiter(4000); // allow time to let GitHub determine status
          data = await octokit.pullRequests.get({ owner, repo, number });
          mergeableState = data.data.mergeable_state;
        }
        count++;

        if (mergeableState === 'dirty' || mergeableState === 'unknown') {
          log.add(number, { number, mergeableState });
          console.log(`${number} (${mergeableState})`);
          mergeConflictCount++;
        }
        if (count > 4000) {
          await rateLimiter(2350);
        }
      }
    }
    console.log(`There were ${mergeConflictCount} PRs with potential merge conflicts out of ${count} unknown repos received from GitHub`);
  } else {
    throw 'There were no open PRs received from Github';
  }
})()
  .then(async () => {
    log.finish();
    console.log('Finished finding unknown repo PRs with merge conflicts');
  })
  .catch(err => {
    log.finish();
    console.log(err);
  });
