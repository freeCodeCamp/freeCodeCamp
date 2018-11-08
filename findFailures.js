require('dotenv').config();
const { owner, repo, fccBaseUrl, prBaseUrl } = require('./constants');
const fs = require('fs');
const formatDate = require('date-fns/format');
const { saveToFile, openJSONFile } = require('./fileFunctions');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
const { getOpenPrs, getPrRange } = require('./getOpenPrs');
const fetch = require('node-fetch');
const { getStatuses } = require('./getStatuses');

octokit.authenticate(octokitAuth);

//const { PrProcessingLog } = require('./prProcessingLog');
//const log = new PrProcessingLog();

const prPropsToGet = ['number', 'head'];

const errorsToFind = require('./failuresToFind.json');

(async () => {
  const { firstPR, lastPR } = await getPrRange();
  const { openPRs } = await getOpenPrs(firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    console.log(`# of PRs Retrieved: ${openPRs.length}`);
    console.log(`PR Range: ${firstPR} - ${lastPR}`);
    const now = formatDate(new Date(), 'YYYY-MM-DDTHHmmss');
    const fileName = `data/openprs_statuses_urls_${firstPR}-${lastPR}_${now}.json`;
    saveToFile(fileName, JSON.stringify(openPRs));
    console.log(`Data saved in file: ${fileName}`);

    //log.start();
    console.log('Starting error finding process...');
    let count = 0;
    const maxCount = openPRs.length;
    const failed = [];
    let interval = setInterval(async () => {
      if (count < maxCount ) {
        let { number, head: { sha: ref } } = openPRs[count];
        const statuses = await getStatuses(octokit.repos.getStatuses, {owner, repo, ref});
        //log.add(number)
        if (statuses.length) {
          const { state, target_url } = statuses[0]; // first element contain most recent status
          const hasProblem = state === 'failure' || state === 'error';
          if (hasProblem) {
            let buildNum = Number(target_url.match(/\/builds\/(\d+)\?/i)[1]);
            buildNum++; // full build log file is 1 # higher than buildNum (same as job number)
            const travisLogUrl = `https://api.travis-ci.org/v3/job/${buildNum}/log.txt`;
            console.log(number + '\'s errors:');
            errorsToFind.forEach(async ({ error: errorDesc, regex }) => {
              const response = await fetch(travisLogUrl)
              const logText = await response.text();
              regex = RegExp(regex);
              if (regex.test(logText)) {
                const error = {
                  errorDesc,
                  number,
                  buildLog: travisLogUrl
                }
                failed.push(error)
                console.log('  ' + errorDesc);
              }
              console.log()
            });
          }
        }
      }
      else {
        clearInterval(interval);
        interval = null;
        //log.export();
      }
      if (count % 25 === 0) {
         //log.export()
       }
      count++;
    }, 1000);
  }
})()
.then(() => {
  //log.finish();
  console.log('Successfully finding all specified errors.');
})
.catch(err => {
  //log.finish();
  console.log(err)
})
