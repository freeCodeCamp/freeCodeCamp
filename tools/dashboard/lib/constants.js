const config = require('../config');

const owner = config.github.owner;
const freeCodeCampRepo = config.github.freeCodeCampRepo;
const fccBaseUrl = `https://github.com/${owner}/${freeCodeCampRepo}/`;
const prBaseUrl = `${fccBaseUrl}pull/`;

const octokitConfig = {
  // 0 means no request timeout
  timeout: 0,
  headers: {
    accept: 'application/vnd.github.v3+json',
    // v1.2.3 will be current version
    'user-agent': 'octokit/rest.js v1.2.3'
  },
  // custom GitHub Enterprise URL
  baseUrl: 'https://api.github.com',
  // Node only: advanced request options can be passed as http(s) agent
  /* eslint-disable no-undefined */
  agent: undefined
  /* eslint-enable no-undefined */
};

const octokitAuth = {
  type: 'basic',
  username: config.github.id,
  password: config.github.secret
};

module.exports = { owner, freeCodeCampRepo, prBaseUrl, octokitConfig, octokitAuth };
