require('dotenv').config();
const { owner, repo } = require('./constants');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);

octokit.authenticate(octokitAuth);

const getOpenPrCount = async () => {
  const { data } = await octokit.search.issues({
    q: 'repo:freeCodeCamp/freeCodeCamp+is:open+type:pr+base:master',
    sort: 'created', order: 'asc', page: 1, per_page: 1
  });
  return data.length;
};

const getFirstPr = async () => {
  const state = `open`;
  const base = 'master';
  const sort = 'created';
  const page = 1;
  const per_page = 1;
  let methodProps = {owner, repo, state, base, sort, direction: 'asc', page, per_page};
  let response = await octokit.pullRequests.getAll(methodProps);
  return response.data[0].number;
};

const getOpenPrRange = async () => {
  const state = `open`;
  const base = 'master';
  const sort = 'created';
  const page = 1;
  const per_page = 1;
  let methodProps = {owner, repo, state, base, sort, direction: 'asc', page, per_page};
  let response = await octokit.pullRequests.getAll(methodProps);
  const firstPR = response.data[0].number;
  methodProps = {owner, repo, state, base, sort, direction: 'desc', page, per_page};
  response = await octokit.pullRequests.getAll(methodProps);
  const lastPR = response.data[0].number;
  return [firstPR, lastPR];
};

exports.getOpenPrCount = getOpenPrCount;
exports.getFirstPr = getFirstPr;
exports.getOpenPrRange = getOpenPrRange;
