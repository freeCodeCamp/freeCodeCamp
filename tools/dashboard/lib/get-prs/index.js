const _cliProgress = require('cli-progress');

const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);
const { getRange, getCount } = require('./pr-stats');

octokit.authenticate(octokitAuth);

const methodProps = {
  owner,
  repo,
  state: 'open',
  base: 'master',
  sort: 'created',
  direction: 'asc',
  page: 1,
  per_page: 100
};

const prsPaginate = async(
  method,
  firstPR,
  lastPR,
  prPropsToGet,
  progressBar
) => {
  const prFilter = (prs, first, last, prPropsToGet) => {
    const filtered = [];
    for (let pr of prs) {
      if (pr.number >= first && pr.number <= last) {
        const propsObj = prPropsToGet.reduce((obj, prop) => {
          obj[prop] = pr[prop];
          return obj;
        }, {});
        filtered.push(propsObj);
      }
      if (pr.number >= last) {
        done = true;
        return filtered;
      }
    }
    return filtered;
  };

  // will be true when lastPR is seen in paginated results
  let done = false;
  let response = await method(methodProps);
  let { data } = response;
  data = prFilter(data, firstPR, lastPR, prPropsToGet);
  while (octokit.hasNextPage(response) && !done) {
    response = await octokit.getNextPage(response);
    let dataFiltered = prFilter(response.data, firstPR, lastPR, prPropsToGet);
    data = data.concat(dataFiltered);
    progressBar.increment(dataFiltered.length);
  }
  return data;
};

const getUserInput = async(rangeType = '') => {
  let data, firstPR, lastPR;
  if (rangeType === 'all') {
    data = await getRange().then(data => data);
    firstPR = data[0];
    lastPR = data[1];
  } else {
    let [type, start, end] = process.argv.slice(2);
    data = await getRange().then(data => data);
    firstPR = data[0];
    lastPR = data[1];
    if (type !== 'all' && type !== 'range') {
      throw 'Please specify either all or range for 1st arg.';
    }
    if (type === 'range') {
      start = parseInt(start, 10);
      end = parseInt(end, 10);
      if (!start || !end) {
        throw 'Specify both a starting PR # (2nd arg) and ending PR # (3rd arg).';
      }
      if (start > end) {
        throw 'Starting PR # must be less than or equal to end PR #.';
      }
      if (start < firstPR) {
        throw `Starting PR # can not be less than first open PR # (${firstPR})`;
      }
      firstPR = start;
      if (end > lastPR) {
        throw `Ending PR # can not be greater than last open PR # (${lastPR})`;
      }
      lastPR = end;
    }
  }
  const totalPRs = await getCount().then(data => data);
  return { totalPRs, firstPR, lastPR };
};

const getPRs = async (totalPRs, firstPR, lastPR, prPropsToGet) => {
  let progressText = `Retrieve PRs (${firstPR}-${lastPR}) [{bar}] `;
  progressText += '{percentage}% | Elapsed Time: {duration_formatted} ';
  progressText += '| ETA: {eta_formatted}';
  const getPRsBar = new _cliProgress.Bar(
    {
      format: progressText,
      etaBuffer: 50
    },
    _cliProgress.Presets.shades_classic
  );
  getPRsBar.start(totalPRs, 0);
  let openPRs = await prsPaginate(
    octokit.pullRequests.list,
    firstPR,
    lastPR,
    prPropsToGet,
    getPRsBar
  );
  getPRsBar.update(totalPRs);
  getPRsBar.stop();
  console.log(`# of PRs retrieved: ${openPRs.length}`);
  return { firstPR, lastPR, openPRs };
};


const filesPaginate = async number => {
  let response = await octokit.pullRequests.listFiles({
    number, ...methodProps
  });

  let { data } = response;
  while (octokit.hasNextPage(response)) {
    response = await octokit.getNextPage(response);
    let { data: moreData } = response;
    data = data.concat(moreData);
  }
  return data;
};

const getFiles = async number => await filesPaginate(number);

const getFilenames = async number => (
  await getFiles(number)
).map(({ filename }) => filename);

module.exports = { getPRs, getUserInput, getFiles, getFilenames };
