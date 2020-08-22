/*
This is a one-off script to run on all open PRs to add the
"status: need to test locally" label to any PR with an existing
"scope: learn" label on it.
*/

const config = require('../config');

const { getPRs, getUserInput } = require('../lib/get-prs');
const { addLabels } = require('../lib/pr-tasks');
const { rateLimiter, ProcessingLog } = require('../lib/utils');

const log = new ProcessingLog('all-locally-tested-labels');

(async () => {
  const { totalPRs, firstPR, lastPR } = await getUserInput();
  const prPropsToGet = ['number', 'labels'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    log.start();
    console.log('Starting labeling process...');
    for (let count = 0; count < openPRs.length; count++) {
      let { number, labels } = openPRs[count];
      // holds potential labels to add based on file path
      const labelsToAdd = {};
      const existingLabels = labels.map(({ name }) => name);
      if (existingLabels.includes('scope: learn')) {
        labelsToAdd['status: need to test locally'] = 1;
      }

      // only adds needed labels which are NOT currently on the PR
      const newLabels = Object.keys(labelsToAdd).filter(label => {
        return !existingLabels.includes(label);
      });

      if (newLabels.length) {
        log.add(number, { number, labels: newLabels });
        if (config.oneoff.productionRun) {
          addLabels(number, newLabels, log);
          await rateLimiter();
        }
      } else {
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
    console.log(err);
  });
