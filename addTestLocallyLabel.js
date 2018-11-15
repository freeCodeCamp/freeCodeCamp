require('dotenv').config();

const path = require('path');
const fs = require('fs');
const formatDate = require('date-fns/format');

const { owner, repo, fccBaseUrl, prBaseUrl } = require('./constants');
const { saveToFile, openJSONFile } = require('./fileFunctions');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
const { getOpenPrs, getPrRange } = require('./getOpenPrs');
const { addLabels } = require('./addLabels');
const { rateLimiter, savePrData } = require('./utils');

octokit.authenticate(octokitAuth);

const { PrProcessingLog } = require('./prProcessingLog');
const log = new PrProcessingLog();

const prPropsToGet = ['number', 'labels'];

(async () => {
  const { firstPR, lastPR } = await getPrRange();
  const { openPRs } = await getOpenPrs(firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    savePrData(openPRs, firstPR, lastPR);
    log.start();
    console.log('Starting labeling process...');
    for (let count = 0; count < openPRs.length; count++) {
      let { number, labels } = openPRs[count];
      log.add(number, 'labels');
      const labelsToAdd = {}; // holds potential labels to add based on file path
      const existingLabels = labels.map(({ name }) => name);
      if (existingLabels.includes('scope: curriculum')) {
        labelsToAdd['status: need to test locally'] = 1;
      }
      log.add(number, 'labels');

      /* this next section only adds needed labels which are NOT currently on the PR. */
      const newLabels = Object.keys(labelsToAdd).filter(label => !existingLabels.includes(label));
      if (newLabels.length) {
        log.update(number, 'labels', newLabels);
        if (process.env.PRODUCTION_RUN === 'true') {
          addLabels(number, newLabels, log);
          await rateLimiter(process.env.RATELIMIT_INTERVAL | 1500);
        }
      }
      else {
        log.update(number, 'labels', 'none added');
      }
      if (count % 25 === 0) {
        log.export()
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
