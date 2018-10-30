module.exports = getNextPage

const getPage = require('./get-page')

function getNextPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'next', headers, callback)
}
