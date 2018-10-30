module.exports = paginationPlugin

function paginationPlugin (octokit) {
  octokit.getFirstPage = require('./get-first-page').bind(null, octokit)
  octokit.getLastPage = require('./get-last-page').bind(null, octokit)
  octokit.getNextPage = require('./get-next-page').bind(null, octokit)
  octokit.getPreviousPage = require('./get-previous-page').bind(null, octokit)
  octokit.hasFirstPage = require('./has-first-page')
  octokit.hasLastPage = require('./has-last-page')
  octokit.hasNextPage = require('./has-next-page')
  octokit.hasPreviousPage = require('./has-previous-page')
}
