module.exports = authenticationPlugin

const authenticate = require('./authenticate')
const beforeRequest = require('./before-request')

function authenticationPlugin (octokit) {
  const state = {
    auth: false
  }
  octokit.authenticate = authenticate.bind(null, state)
  octokit.hook.before('request', beforeRequest.bind(null, state))
}
