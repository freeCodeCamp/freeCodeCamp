module.exports = getFirstPage

const getPage = require('./get-page')

function getFirstPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'first', headers, callback)
}
