require('dotenv').config();
const { owner, repo } = require('./constants');
const fs = require('fs');
const { saveToFile } = require('./fileFunctions');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
const { paginate } = require('./paginate');
const { getOpenPrRange } = require('./openPrStats');

octokit.authenticate(octokitAuth);

(async () => {
  let [ n, f, startingPR ] = process.argv;

  let [ firstPR, lastPR ] = await getOpenPrRange().then(data => data);
  if (startingPR) {
    startingPR = parseInt(startingPR);
    if (startingPR < firstPR)  {
      throw `Starting PR # can not be less than first open PR # (${firstPR})`;
    }
    firstPR = startingPR
  }

  const methodProps = {
    owner,  repo, state: 'open',
    base: 'master',  sort: 'created',
    direction: 'asc', page: 1, per_page: 100
  };

  console.log(`Retrieving PRs (starting at #${firstPR}) ...`);
  const openPRs = await paginate(octokit.pullRequests.getAll, methodProps, octokit);
  if (startingPR) {
    openPRs = openPRs.filter(pr => pr.number >= startingPR);
  }

  return { firstPR, lastPR, openPRs }
})()
.then(data => {
  console.log(`# of PRs Retrieved: ${data.openPRs.length}`);
  console.log(`PR Range: ${data.firstPR} - ${data.lastPR}`);
  saveToFile('data/open-prs.json', JSON.stringify(data));
})
.catch(err => {
  console.log(err);
})
