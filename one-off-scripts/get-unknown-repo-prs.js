const { owner, repo, octokitConfig, octokitAuth } = require('../lib/constants');
const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('../lib/get-prs');
const { ProcessingLog, rateLimiter } = require('../lib/utils');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog('unknown-repo-prs-with-merge-conflicts');
log.start();
(async() => {
  const { totalPRs, firstPR, lastPR } = await getUserInput('all');
  const prPropsToGet = ['number', 'user', 'head'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);
  if (openPRs.length) {
    let count = 0;
    for (let i = 0; i < openPRs.length; i++) {
      let {
        number,
        head: { repo: headRepo }
      } = openPRs[i];
      if (headRepo === null) {
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
  } else {
    throw 'There were no open PRs received from Github';
  }
})()
  .then(async() => {
    log.finish();
    console.log('Finished finding unknown repo PRs with merge conflicts');
  })
  .catch(err => {
    log.finish();
    console.log(err);
  });
