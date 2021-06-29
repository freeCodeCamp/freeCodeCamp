const { Octokit } = require('@octokit/rest');

const {
  github: { owner, secret, freeCodeCampRepo }
} = require('../../../lib/config');

const getPRs = async () => {
  const octokit = new Octokit({ auth: secret });

  /* eslint-disable camelcase */
  const methodProps = {
    owner,
    repo: freeCodeCampRepo,
    state: 'open',
    sort: 'created',
    direction: 'asc',
    per_page: 100
  };

  const openPRs = await octokit.paginate(octokit.pulls.list, methodProps);
  return openPRs;
};

module.exports = getPRs;
