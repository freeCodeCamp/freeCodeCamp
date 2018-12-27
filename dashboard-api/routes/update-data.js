const router = require('express').Router();

require('dotenv').config({ path: './../sweeper/.env' });
const fs = require('fs');
const path = require('path');

const { getPRs, getUserInput, getFilenames } = require('../../sweeper/get-prs');
const { rateLimiter, savePrData, ProcessingLog } = require('../../sweeper/utils');
const container = require('../data');

const dataDotJSON = path.resolve(__dirname, '../data.json');

router.get('/', (request, response) => {
  const secret = process.env.UPDATE_SECRET;
  const { password } = request.query;
    if (!secret) {
      console.log('Environment variable for upload secret has not been set!');
    }

    if (!!secret && password === secret) {
      const log = new ProcessingLog('dashboard-data');

      (async () => {
        const { totalPRs, firstPR, lastPR } = await getUserInput('all');
        log.start();
        const { indices: oldIndices, prs: oldPRs } = JSON.parse(fs.readFileSync(dataDotJSON));
        if (!oldPRs.length) {
           console.log('No existing PRs data found, so it will take a while to download PRs/filenames data.');
        }
        const prPropsToGet = ['number', 'user', 'title', 'updated_at', 'files'];
        const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);

        if (openPRs.length) {
          let prsUpdated = '';
          for (let count in openPRs) {
            let { number, updated_at, title, user: { login: username } } = openPRs[count];
            let oldUpdated_at;
            let oldPrData = oldPRs[oldIndices[number]];
            if (oldPrData) {
              oldUpdated_at = oldPrData.updated_at;
            }
            if (!oldIndices.hasOwnProperty(number) || updated_at > oldUpdated_at) {
              const filenames = await getFilenames(number);
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
          }
          console.log(prsUpdated);
        }
        else {
          throw 'There were no open PRs received from Github';
        }
      })()
      .then(async () => {
        log.finish(dataDotJSON);
        const data = JSON.parse(fs.readFileSync(dataDotJSON));
        container.update(data);
        console.log('Finished retrieving Dashboard data');
      })
      .catch(err => {
        log.finish();
        console.log(err)
      })
    }
    else {
      response.json({
        ok: false,
        error: 'You are not authorized to update the data'
      });
    }
});

module.exports = router;
