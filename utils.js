const path = require('path');
const fs = require('fs');
const formatDate = require('date-fns/format');

const { saveToFile } = require('./fileFunctions');

const rateLimiter = (delay) => {
  return new Promise(resolve => setTimeout(() => resolve(true), delay));
};

const savePrData = (openPRs, firstPR, lastPR) => {
  const now = formatDate(new Date(), 'YYYY-MM-DDTHHmmss');
  const filename = path.resolve(__dirname, `./work-logs/openprs_${firstPR}-${lastPR}_${now}.json`);
  console.log(`# of PRs Retrieved: ${openPRs.length}`);
  console.log(`PR Range: ${firstPR} - ${lastPR}`);
  saveToFile(filename, JSON.stringify(openPRs));
  console.log(`Data saved in file: ${filename}`);
};

module.exports = { rateLimiter, savePrData };
