'use strict';

const debug = require('debug')('wait-port');
const detect = require('./detect-port');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitPort(port, options = {}) {
  const { retryInterval = 1000, retries = Infinity } = options;
  let count = 1;

  async function loop() {
    debug('retries', retries, 'count', count);
    if (count > retries) {
      const err = new Error('retries exceeded');
      err.retries = retries;
      err.count = count;
      throw err;
    }
    count++;
    const freePort = await detect(port);
    if (freePort === port) {
      await sleep(retryInterval);
      return loop();
    }
    return true;
  }

  return await loop();
}

module.exports = waitPort;
