const config = require('../../config');
const formatDate = require('date-fns/format');
const path = require('path');
const fs = require('fs');

const { saveToFile } = require('./save-to-file');

class ProcessingLog {
  constructor(script) {
    this._script = script;
    this._startTime = null;
    this._finishTime = null;
    this._elapsedTime = null;
    this._prs = [];
    this._prCount = null;
    this._logfile = path.resolve(
      __dirname,
      `../../work-logs/data-for_${this.getRunType()}_${this._script}.json`
    );
  }

  getRunType() {
    return config.oneoff.productionRun ? 'production' : 'test';
  }

  export() {
    const log = {
      startTime: this._startTime,
      finishTime: this._finishTime,
      elapsedTime: this._elapsedTime,
      prCount: this._prs.length,
      firstPR: this._firstPR,
      lastPR: this._lastPR,
      prs: this._prs
    };
    saveToFile(this._logfile, JSON.stringify(log, null, 2));
  }

  add(prNum, props) {
    this._prs.push(props);
  }

  getPrRange() {
    if (this._prs.length) {
      const first = this._prs[0].number;
      const last = this._prs[this._prs.length - 1].number;
      return [first, last];
    }
    console.log('Current log file does not contain any PRs');
    return [null, null];
  }

  start() {
    this._startTime = new Date();
    this.export();
  }

  finish(logFileName = '') {
    this._finishTime = new Date();
    const minutesElapsed = (this._finishTime - this._startTime) / 1000 / 60;
    this._elapsedTime = minutesElapsed.toFixed(2) + ' mins';
    let [first, last] = this.getPrRange();
    this._firstPR = first;
    this._lastPR = last;
    this.export();
    this.changeFilename(logFileName);
  }

  changeFilename(logFileName) {
    const now = formatDate(new Date(), 'YYYY-MM-DDTHHmmss');
    const prRange = `${this._firstPR}-${this._lastPR}`;
    let finalFilename = `${this.getRunType()}_${
      this._script
    }_${prRange}_${now}.json`;
    let newFilename = path.resolve(
      __dirname,
      `../../work-logs/${finalFilename}`
    );
    if (logFileName) {
      newFilename = logFileName;
    }
    fs.renameSync(this._logfile, newFilename);
    if (!fs.existsSync(newFilename)) {
      throw 'File rename unsuccessful.';
    }
    this._logfile = newFilename;
  }
}

module.exports = { ProcessingLog };
