require('dotenv').config();
const formatDate = require('date-fns/format');
const path = require('path');
const fs = require('fs');

const { saveToFile } = require('./save-to-file');

class ProcessingLog {
  constructor(script) {
    this._script = script;
    this._start = null;
    this._finish = null;
    this._elapsedTime = null;
    this._prs = {};
    this._prCount = null;
    this._logfile = path.resolve(__dirname, `../work-logs/data-for_${this.getRunType()}_${this._script}.json`);
  }

  getRunType() {
    return process.env.PRODUCTION_RUN === 'true' ? 'production' : 'test';
  }

  export() {
    let sortedPRs = Object.keys(this._prs)
     .sort((a, b) => a - b)
     .map(num => ({ number: num, data: this._prs[num] }));

    const log = {
      start: this._start,
      finish: this._finish,
      elapsedTime: this._elapsedTime,
      prCount: sortedPRs.length,
      firstPR: this._firstPR,
      lastPR: this._lastPR,
      prs: sortedPRs
    };
    saveToFile(this._logfile, JSON.stringify(log))
  }

  add(prNum, props) {
    this._prs[prNum] = props;
  }

  setFirstLast({ firstPR, lastPR }) {
    this._firstPR = firstPR;
    this._lastPR = lastPR;
  }

  start() {
    this._start = new Date();
  }

  finish() {
    this._finish = new Date();
    const minutesElapsed = (this._finish - this._start) / 1000 / 60;
    this._elapsedTime =  minutesElapsed.toFixed(2) + ' mins';
    this.export();
    this.changeFilename();
  }

  changeFilename() {
    const now = formatDate(new Date(), 'YYYY-MM-DDTHHmmss');
    const newFilename = path.resolve(__dirname,`../work-logs/${this.getRunType()}_${this._script}_${this._firstPR}-${this._lastPR}_${now}.json`);
    fs.rename(this._logfile, newFilename, function(err) {
      if (err) {
        throw(err);
      }
    });
  }
};

module.exports = { ProcessingLog };
