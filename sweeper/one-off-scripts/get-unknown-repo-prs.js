const path = require('path');
require('dotenv').config({ path: '../.env' });
const formatDate = require('date-fns/format');
const fs = require('fs');
const _cliProgress = require('cli-progress');

const { owner, repo, octokitConfig, octokitAuth } = require('../constants');
const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('../get-prs');
const { ProcessingLog, rateLimiter } = require('../utils');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog('unknown-repo-prs-with-merge-conflicts');
log.start();
(async () => {
  const { totalPRs, firstPR, lastPR } = await getUserInput('all');
  const prPropsToGet = ['number', 'user', 'head'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);
  if (openPRs.length) {
    for (let count in openPRs) {
      let { number, head: { repo: headRepo } } = openPRs[count];
      if (headRepo === null) {
        const { data: { mergeable, mergeable_state } } = await octokit.pullRequests.get({ owner, repo, number });
        if (mergeable_state === 'dirty' || mergeable_state === 'unknown') {
          log.add(number, { number, mergeable_state });
          console.log(`[${number} (mergeable_state: ${mergeable_state})](https://github.com/freeCodeCamp/freeCodeCamp/pull/${number})`);
        }
        await rateLimiter(1000);
      }
    }
  }
  else {
    throw 'There were no open PRs received from Github';
  }
})()
.then(async () => {
  log.finish();
  console.log('Finished finding unknown repo PRs with merge conflicts');
})
.catch(err => {
  log.finish();
  console.log(err)
})
