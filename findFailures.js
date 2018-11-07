require('dotenv').config();
const { owner, repo, fccBaseUrl, prBaseUrl } = require('./constants');
const fs = require('fs');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
const { paginate } = require('./paginate');
const { saveToFile, writeToFile } = './fileFunctions';
const fetch = require('node-fetch');
const { getStatuses } = require('./getStatuses');

octokit.authenticate(octokitAuth);

const findFailures = async (errorsToFind, maxPrs) => {
  const methodProps = {
      owner,  repo,
      state: 'open',  base: 'master',  sort: 'created',
      direction: 'asc', page: 1, per_page: 100
  };
  if (maxPRs) {
    maxPages = Math.ceil(maxPrs / 100); // limits
  }

  const allOpenPRs = await paginate(octokit.pullRequests.getAll, methodProps, octokit, maxPages);

  const failedPRs = allOpenPRs.reduce(async (prevPromise, { number: pr, head: { sha: ref }) => {
    const failed = await prevPromise;
    const statuses = await getStatuses(octokit.repos.getStatuses, {owner, repo, ref});
    if (statuses.length) {
      const { state, target_url } = statuses[0]; // first element contain most recent status
      const hasProblem = state === 'failure' || state === 'error';
      if (hasProblem) {
        let buildNum = Number(target_url.match(/\/builds\/(\d+)\?/i)[1]);
        buildNum++; // full build log file is 1 # higher than buildNum (same as job number)
        const travisLogUrl = `https://api.travis-ci.org/v3/job/${buildNum}/log.txt`;
        errorsToFind.forEach(async ({ errorDesc, errorRegex }) => {
          const response = await fetch(travisLogUrl)
          const logText = await response.text();
          if (errorRegex.test(logText)) {
            failed.push({
              errorDesc,
              pr,
              buildLog: buildNum
            })
          }
        });
      }
    }
    return failed;
  }, Promise.resolve([]));

  return failedPRs;
};

/* Main Program */
const [ n, f, inputFile, outputFile, maxPRs ] = process.argv;
const inputFileMsg = 'Please specify an input file containing errors to find.\n';
const outputFileMsg = 'Please specify an output file to save the results of the search.\n';
const maxPRMsg = 'Please specify an integer from 1-4500 (inclusive) for the max # of PR to search.';
let errors = '';
if (!inputFile) { errors += inputFileMsg }
if (!outputFile) { errors += outputFileMsg }
if (!maxPRs || parseInt(maxPRs) < 1 || parseInt(maxPRs) > 4500) {
  errors += maxPRMsg;
}

if (errors) { return console.log(errors) }

fs.readFile(inputFile, 'utf8', (err, errorsToFind) => {
    if (err) { throw err }
    findFailures(errorsToFind, maxPRs)
      .then((failedPRs) => {
        saveToFile(outputFile, JSON.stringify(failedPRs));
        console.log(`# PRs matching specified error: ${failedPRs.length}`);
      })
});
