require('dotenv').config({ path: '../.env' });
const Travis = require('travis-ci');

const path = require('path');
const fetch = require('node-fetch');

const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);
const { getPRs, getUserInput } = require('../getPRs');
const { savePrData, ProcessingLog } = require('../utils');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog();

const errorsToFind = require(path.resolve(__dirname, '../input-files/failuresToFind.json'));

(async () => {
  const { firstPR, lastPR } = await getUserInput();
  const prPropsToGet = ['number', 'head'];
  const { openPRs } = await getPRs(firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    savePrData(openPRs, firstPR, lastPR);
    log.start();
    console.log('Starting error finding process...');
    for (let count in openPRs) {
      let { number, head: { sha: ref } } = openPRs[count];
      log.add(number, 'error');
      const { data: statuses } = await octokit.repos.getStatuses({ owner, repo, ref });

      if (statuses.length) {
        const { state, target_url } = statuses[0]; // first element contain most recent status
        const hasProblem = state === 'failure' || state === 'error';
        if (hasProblem) {
          let buildNum = Number(target_url.match(/\/builds\/(\d+)\?/i)[1]);'
          const logNumber = 'need to use Travis api to access the full log for the buildNum above'
          const travisLogUrl = `https://api.travis-ci.org/v3/job/${logNumber}/log.txt`;
          const response = await fetch(travisLogUrl)
          const logText = await response.text();
          let found = false;
          let error;
          for (let { error: errorDesc, regex } of errorsToFind) {
            regex = RegExp(regex);
            if (regex.test(logText)) {
              error = errorDesc;
              found = true;
              break;
            }
          }
          const errorDesc = error ? error : 'unkown error';
          log.update(number, 'error', { errorDesc, buildLog: travisLogUrl });
        }
      }
    }
  }
})()
.then(() => {
  log.finish();
  console.log('Successfully finding all specified errors.');
})
.catch(err => {
  log.finish();
  console.log(err)
})
