require('dotenv').config({ path: '../.env' });
const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('../getPRs');
const { addLabels } = require('../prTasks');
const { rateLimiter, savePrData, ProcessingLog } = require('../utils');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog();

(async () => {
  const { firstPR, lastPR } = await getUserInput();
  const prPropsToGet = ['number', 'labels'];
  const { openPRs } = await getPRs(firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    savePrData(openPRs, firstPR, lastPR);
    log.start();
    console.log('Starting labeling process...');
    for (let count in openPRs) {
      let { number, labels } = openPRs[count];
      log.add(number, 'labels');
      const labelsToAdd = {}; // holds potential labels to add based on file path
      const existingLabels = labels.map(({ name }) => name);
      if (existingLabels.includes('scope: curriculum')) {
        labelsToAdd['status: need to test locally'] = 1;
      }

      /* this next section only adds needed labels which are NOT currently on the PR. */
      const newLabels = Object.keys(labelsToAdd).filter(label => !existingLabels.includes(label));
      if (newLabels.length) {
        log.update(number, 'labels', newLabels);
        if (process.env.PRODUCTION_RUN === 'true') {
          addLabels(number, newLabels, log);
          await rateLimiter(+process.env.RATELIMIT_INTERVAL | 1500);
        }
      }
      else {
        log.update(number, 'labels', 'none added');
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
