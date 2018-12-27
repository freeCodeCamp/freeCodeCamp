/*
This is a one-off script to find all open PRs which have one of the console.error
descriptions in the failuresToFind.json file.
*/

require('dotenv').config({ path: '../.env' });
const Travis = require('travis-ci');

const path = require('path');
const fetch = require('node-fetch');

const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);
const { getPRs, getUserInput } = require('../get-prs');
const { savePrData, ProcessingLog } = require('../utils');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog('find-failures-script');

const errorsToFind = require(path.resolve(__dirname, '../input-files/failuresToFind.json'));

(async () => {
  const { totalPRs, firstPR, lastPR } = await getUserInput();
  const prPropsToGet = ['number', 'labels', 'head'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    savePrData(openPRs, firstPR, lastPR);
    log.start();
    console.log('Starting error finding process...');
    for (let count in openPRs) {
      let { number, labels, head: { sha: ref } } = openPRs[count];
      const existingLabels = labels.map(({ name }) => name);

      if (!existingLabels.includes('status: merge conflict') && !existingLabels.includes('status: needs update') && !existingLabels.includes('status: discussing')) {
        const { data: statuses } = await octokit.repos.listStatusesForRef({ owner, repo, ref });
        if (statuses.length) {
          const { state, target_url } = statuses[0]; // first element contain most recent status
          const hasProblem = state === 'failure' || state === 'error';
          if (hasProblem) {
            let buildNum = Number(target_url.match(/\/builds\/(\d+)\?/i)[1]);
            //const logNumber = 'need to use Travis api to access the full log for the buildNum above'
            const logNumber = ++buildNum;
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
            const errorDesc = error ? error : 'unknown error';
            log.add(number, { number, errorDesc, buildLog: travisLogUrl });
          }
        }
      }
    }
  }
})()
.then(() => {
  log.finish();
  console.log('Successfully finished finding all specified errors.');
})
.catch(err => {
  log.finish();
  console.log(err)
})
