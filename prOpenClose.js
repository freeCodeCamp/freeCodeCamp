require('dotenv').config();
const { owner, repo, fccBaseUrl, prBaseUrl } = require('./constants');
const { octokitConfig, octokitAuth } = require('./octokitConfig');
const octokit = require('@octokit/rest')(octokitConfig);
octokit.authenticate(octokitAuth);

const prOpenClose = async (number) => {
  const result = await octokit.pullRequests.update({ owner, repo , number, state: 'closed', base: 'master' })
  .then(() => {
    return octokit.pullRequests.update({ owner, repo , number, state: 'open', base: 'master' })
  })
  .then(() => {
    console.log('success')
    //log.update(true)
  })
  .catch((err) => {
    console.log('catch')
    console.log(err)
    //log.update(false)
  })
};

exports.prOpenClose = prOpenClose;
