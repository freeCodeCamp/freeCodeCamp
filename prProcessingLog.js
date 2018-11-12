const path = require('path');
const fs = require('fs');
const { saveToFile } = require('./fileFunctions');

class PrProcessingLog {
  constructor() {
    this._start = null;
    this._lastUpdate = null;
    this._lastPRlogged = null;
    this._finish = null;
    this._prs = {};
    //path.resolve(__dirname, '../../../guide');
    this._logfile = path.resolve(__dirname, './data/open-prs-processed.json');
  }

  import() {
    return JSON.parse(fs.readFileSync(this._logfile, 'utf8'));
  }

  export() {
    let sortedPRs = Object.keys(this._prs)
     .sort((a, b) => a - b)
     .map(num => ({ [num]: this._prs[num] }));
    const log = {
      start: this._start,
      finish: this._finish,
      prs: sortedPRs
    };
    saveToFile(this._logfile, JSON.stringify(log))
  }

  add(prNum, prop) {
    this._prs[prNum] = {};
    this._prs[prNum][prop] = null;
  }

  update(prNum, prop, value) {
    this._prs[prNum][prop] = value;
  }

  start() {
    this._start = new Date();
  }

  finish() {
    this._finish = new Date();
    this.export();
  }
};

module.exports = { PrProcessingLog };
