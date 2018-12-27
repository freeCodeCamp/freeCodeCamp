/*
This is a one-off script to run on all open PRs to add the
"status: need to test locally" label to any PR with an existing "scope: curriculum"
label on it.
*/

require('dotenv').config({ path: '../.env' });
const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('../get-prs');
const { addLabels } = require('../pr-tasks');
const { rateLimiter, savePrData, ProcessingLog } = require('../utils');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog('all-locally-tested-labels');

(async () => {
  const { totalPRs, firstPR, lastPR } = await getUserInput();
  const prPropsToGet = ['number', 'labels'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    savePrData(openPRs, firstPR, lastPR);
    log.start();
    console.log('Starting labeling process...');
    for (let count in openPRs) {
      let { number, labels } = openPRs[count];
      const labelsToAdd = {}; // holds potential labels to add based on file path
      const existingLabels = labels.map(({ name }) => name);
      if (existingLabels.includes('scope: curriculum')) {
        labelsToAdd['status: need to test locally'] = 1;
      }

      /* this next section only adds needed labels which are NOT currently on the PR. */
      const newLabels = Object.keys(labelsToAdd).filter(label => !existingLabels.includes(label));
      if (newLabels.length) {
        log.add(number, { labels: newLabels });
        if (process.env.PRODUCTION_RUN === 'true') {
          addLabels(number, newLabels, log);
          await rateLimiter(+process.env.RATELIMIT_INTERVAL | 1500);
        }
      }
      else {
        log.add(number, { number, labels: 'none added' });
      }
    }
  }
})()
.then(() => {
  log.finish();
  console.log('Successfully completed labeling');
})
.catch(err => {
  log.finish();
  console.log(err)
})
