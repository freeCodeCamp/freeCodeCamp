require('dotenv').config();
const formatDate = require('date-fns/format');
const { owner, repo } = require('./constants');
const fs = require('fs');
const { saveToFile } = require('./fileFunctions');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
const { paginate } = require('./paginate');
const { getOpenPrRange } = require('./openPrStats');

octokit.authenticate(octokitAuth);

const getPrRange = async () => {
  let [ n, f, type, start, end ] = process.argv;
  let [ firstPR, lastPR ] = await getOpenPrRange().then(data => data);

  if (type !== 'all' && type !== 'range') {
    throw `Please specify either all or range for 1st arg.`;
  }
  if (type === 'range') {
    start = parseInt(start);
    end = parseInt(end);
    if (!start || !end) {
      throw `Please specify both a starting PR # (2nd arg) and ending PR # (3rd arg).`;
    }
    if (start > end) {
      throw `Starting PR # must be less than or equal to end PR #.`;
    }
    if (start < firstPR)  {
      throw `Starting PR # can not be less than first open PR # (${firstPR})`;
    }
    firstPR = start
    if (end > lastPR)  {
      throw `Ending PR # can not be greater than last open PR # (${lastPR})`;
    }
    lastPR = end;
  }
  return {firstPR, lastPR};
};

const getOpenPrs = async (firstPR, lastPR, prPropsToGet) => {
  console.log(`Retrieving PRs (#${firstPR} thru #${lastPR})`);
  let openPRs = await paginate(octokit.pullRequests.getAll, octokit, firstPR, lastPR, prPropsToGet);
  return { firstPR, lastPR, openPRs };
}

module.exports = { getOpenPrs, getPrRange };
