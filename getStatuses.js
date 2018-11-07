require('dotenv').config();
const { owner, repo } = require('./constants');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);

octokit.authenticate(octokitAuth);

exports.getStatuses = async function getStatuses (method, methodProps) {
  const { data } = await method(methodProps);
  return data
}
