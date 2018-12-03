require('dotenv').config({ path: '../.env' });
const formatDate = require('date-fns/format');

const path = require('path');
const fs = require('fs');
const _cliProgress = require('cli-progress');

const { saveToFile } = require('../utils/save-to-file');

class Log {
  constructor() {
    this._startTime = null;
    this._finishTime = null;
    this._elapsedTime = null;
    this._prsArr = [];
    this._indicesObj = {};
    this._logfile = path.resolve(__dirname, `../work-logs/pr-relations.json`);
  }

  export() {
    const log = {
      startTime: this._startTime,
      finishTime: this._finishTime,
      elapsedTime: this._elapsedTime,
      indices: this._indicesObj,
      prs: this._prsArr
    };
    saveToFile(this._logfile, JSON.stringify(log))
  }

  getPrRange() {
    const first = this._prsArr[0].number;
    const last = this._prsArr[this._prsArr.length -1].number;
    return [first, last];
  }

  add(prNum, props) {
    this._prsArr.push(props);
    this._indicesObj[prNum] = this._prsArr.length -1;
  }

  start() {
    this._startTime = new Date();
    this.export();
  }

  finish() {
    this._finishTime = new Date();
    const minutesElapsed = (this._finishTime - this._startTime) / 1000 / 60;
    this._elapsedTime =  minutesElapsed.toFixed(2) + ' mins';
    this.export();
    this.changeFilename(this.getPrRange());
  }

  changeFilename( [first, last] ) {
    const now = formatDate(new Date(), 'YYYY-MM-DDTHHmmss');
    const newFilename = path.resolve(__dirname,`./work-logs/pr-relations_${first}-${last}_${now}.json`);
    fs.rename(this._logfile, newFilename, function(err) {
      if (err) {
        throw('ERROR: ' + err);
      }
    });
  }
};

const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);

const { getPRs, getUserInput } = require('../get-prs');
const { rateLimiter, savePrData } = require('../utils');

octokit.authenticate(octokitAuth);

const log = new Log();
(async () => {
  const { totalPRs, firstPR, lastPR } = await getUserInput();
  const prPropsToGet = ['number', 'user', 'files'];
  const { openPRs } = await getPRs(totalPRs, firstPR, lastPR, prPropsToGet);

  if (openPRs.length) {
    log.start();
    let numFilenameRequests = 0;
    const getFilesBar = new _cliProgress.Bar({
      format: `Part 2 of 2: Retrieving filenames [{bar}] {percentage}% | {value}/{total}`
    }, _cliProgress.Presets.shades_classic);
    getFilesBar.start(openPRs.length, 0);
    for (let count in openPRs) {
      let { number, user: { login: username } } = openPRs[count];
      const { data: prFiles } = await octokit.pullRequests.listFiles({ owner, repo, number });
      const filenames = prFiles.map(({ filename }) => filename);
      log.add(number, { number, username, filenames });
      if (numFilenameRequests > 3000 ) {
        await rateLimiter(1250);
      }
      if (numFilenameRequests % 10 === 0) {
        getFilesBar.update(numFilenameRequests);
      }
      numFilenameRequests++;
    }
    getFilesBar.update(openPRs.length);
    getFilesBar.stop();
  }
})()
.then(() => {
  log.finish();
  console.log('Finished retrieving pr-relations data');
})
.catch(err => {
  log.finish();
  console.log(err)
})
