const { owner, repo, octokitConfig, octokitAuth } = require('../constants');

const octokit = require('@octokit/rest')(octokitConfig);

octokit.authenticate(octokitAuth);

let methodProps = {
  owner, repo, state: 'open',
  base: 'master', sort: 'created',
  page: 1, per_page: 1
};

const getCount = async() => {
  const { data: { total_count: count } } = await octokit.search.issues({
      q: `repo:${owner}/${repo}+is:open+type:pr+base:master`,
      sort: 'created', order: 'asc', page: 1, per_page: 1
    })
    .catch(err => console.log(err));
  return count;
};

const getFirst = async() => {
  const response = await octokit.pullRequests.list({
    direction: 'asc', ...methodProps
  });
  return response.data[0].number;
};

const getRange = async() => {
  let response = await octokit.pullRequests.list({
    direction: 'asc', ...methodProps
  });
  const firstPR = response.data[0].number;
  response = await octokit.pullRequests.list({
    direction: 'desc', ...methodProps }
  );
  const lastPR = response.data[0].number;
  return [ firstPR, lastPR ];
};

module.exports = { getCount, getFirst, getRange };
