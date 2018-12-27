require('dotenv').config();

const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);

octokit.authenticate(octokitAuth);

const state = `open`;
const base = 'master';
const sort = 'created';
const page = 1;
const per_page = 1;

const getCount = async () => {
  const {
    data: { total_count: count }
  } = await octokit.search
    .issues({
      q: `repo:${owner}/${repo}+is:open+type:pr+base:master`,
      sort: 'created',
      order: 'asc',
      page: 1,
      per_page: 1
    })
    .catch(err => {
      console.log(err);
    });
  return count;
};

const getFirst = async () => {
  let methodProps = {
    owner,
    repo,
    state,
    base,
    sort,
    direction: 'asc',
    page,
    per_page
  };
  let response = await octokit.pullRequests.list(methodProps);
  return response.data[0].number;
};

const getRange = async () => {
  let methodProps = {
    owner,
    repo,
    state,
    base,
    sort,
    direction: 'asc',
    page,
    per_page
  };
  let response = await octokit.pullRequests.list(methodProps);
  const firstPR = response.data[0].number;
  methodProps = {
    owner,
    repo,
    state,
    base,
    sort,
    direction: 'desc',
    page,
    per_page
  };
  response = await octokit.pullRequests.list(methodProps);
  const lastPR = response.data[0].number;
  return [firstPR, lastPR];
};

module.exports = { getCount, getFirst, getRange };
