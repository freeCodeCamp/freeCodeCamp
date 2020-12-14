const { Octokit } = require('@octokit/rest');

const {
  github: { owner, secret }
} = require('./config');

const octokit = new Octokit({ auth: secret });

/* eslint-disable camelcase */
const methodProps = {
  org: owner,
  sort: 'full_name',
  direction: 'asc',
  page: 1,
  per_page: 100
};

const reposPaginate = async () => {
  let response = await octokit.repos.listForOrg(methodProps);
  let { data } = response;
  while (octokit.hasNextPage(response)) {
    response = await octokit.getNextPage(response);
    let { data: moreData } = response;
    data = data.concat(moreData);
  }
  return data;
};

const getRepos = async () => await reposPaginate();

module.exports = { getRepos };
