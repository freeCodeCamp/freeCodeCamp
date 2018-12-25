const path = require('path');
// require('dotenv').config({ path: '../.env' });
require('dotenv').config();
const formatDate = require('date-fns/format');
const fs = require('fs');
const _cliProgress = require('cli-progress');
const fetch = require('node-fetch');
const FormData = require('form-data');

const HOST = process.env.NODE_DEV
  ? process.env.LOCAL_HOST
  : process.env.GLITCH_API_URL;

const getExistingData = async () => {
  const url = `${HOST}/getCurrData`;
  const response = await fetch(url);
  const data = await response.json();
  return data ? data : { indices: {}, prs: [] };
};

const { owner, repo, octokitConfig, octokitAuth } = require('../constants');
const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('../get-prs');
const { rateLimiter, savePrData, ProcessingLog } = require('../utils');

octokit.authenticate(octokitAuth);

const log = new ProcessingLog('pr-relations');
(async () => {
  const { totalPRs, firstPR, lastPR } = await getUserInput('all');
  log.start();
  const { indices: oldIndices, prs: oldPRs } = await getExistingData();
  if (!oldPRs.length) {
     console.log('No existing PRs data found, so it will take a while to download PRs/filenames data.');
  }
  const prPropsToGet = ['number', 'user', 'title', 'updated_at', 'files'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    const getFilesBar = new _cliProgress.Bar({
      format: `Update PRs [{bar}] {percentage}% | {value}/{total} | Time Elapsed: {duration_formatted} | ETA: {eta_formatted}`,
      etaBuffer: 50
    }, _cliProgress.Presets.shades_classic);
    getFilesBar.start(openPRs.length, 0);

    let prsUpdated = '';
    for (let count in openPRs) {
      let { number, updated_at, title, user: { login: username } } = openPRs[count];
      let oldUpdated_at;
      let oldPrData = oldPRs[oldIndices[number]];
      if (oldPrData) {
        oldUpdated_at = oldPrData.updated_at;
      }
      if (!oldIndices.hasOwnProperty(number) || updated_at > oldUpdated_at) {
        const { data: prFiles } = await octokit.pullRequests.listFiles({ owner, repo, number });
        const filenames = prFiles.map(({ filename }) => filename);
        log.add(number, { number, updated_at, title, username, filenames });
        if (+count > 3000 ) {
          await rateLimiter(1400);
        }
        prsUpdated += `PR #${number} added or updated\n`;
      }
      else {
        let { username: oldUsername, title: oldTitle, filenames: oldFilenames } = oldPrData;
        log.add(number, { number, updated_at: oldUpdated_at, username: oldUsername, title: oldTitle, filenames: oldFilenames });
      }

      if (+count % 10 === 0) {
        getFilesBar.update(+count);
      }
    }
    getFilesBar.update(openPRs.length);
    getFilesBar.stop();
    console.log(prsUpdated);
  }
  else {
    throw 'There were no open PRs received from Github';
  }
})()
.then(async () => {
  log.finish();
  console.log('Finished retrieving Dashboard data');

  const formData = new FormData();
  formData.append('file', fs.createReadStream(log._logfile));
  const result = await fetch(`${HOST}/upload?password=${process.env.GLITCH_UPLOAD_SECRET}`, {
    method: 'POST',
    body: formData
  })
  .then(() => {
    console.log(`Finished uploading data for ${HOST}`);
  })
  .catch((err) => {
    console.log(err);
  });
})
.catch(err => {
  log.finish();
  console.log(err)
})
