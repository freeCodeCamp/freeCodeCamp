const { owner, repo, octokitConfig, octokitAuth } = require('../lib/constants');
const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('../lib/get-prs');
const { ProcessingLog, rateLimiter } = require('../lib/utils');
const { validLabels } = require('../lib/validation/valid-labels');

octokit.authenticate(octokitAuth);

let languageLabel;
const [languageArg] = process.argv.slice(2);
if (languageArg) {
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
    for (let i = 0; i < openPRs.length; i++) {
      let { labels, number, head: { repo: headRepo } } = openPRs[i];

      const hasLanguage = languageLabel && labels.some(
        ({ name }) => languageLabel === name
      );

      if (headRepo === null && (!languageLabel || hasLanguage )) {        
        const {
          data: { mergeable_state: mergeableState }
        } = await octokit.pullRequests.get({ owner, repo, number });
        count++;

        if (mergeableState === 'dirty' || mergeableState === 'unknown') {
          log.add(number, { number, mergeableState });
          console.log(`${number} (${mergeableState})`);
        }
        if (count > 4000) {
          await rateLimiter(2350);
        }
      }
    }
    console.log(`There were ${count} PRs with unknown repos received from GitHub`);
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
