module.exports = getPreviousPage

const getPage = require('./get-page')

function getPreviousPage (octokit, link, headers, callback) {
  return getPage(octokit, link, 'prev', headers, callback)
}
