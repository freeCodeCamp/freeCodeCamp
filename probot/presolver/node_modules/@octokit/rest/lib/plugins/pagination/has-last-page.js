module.exports = hasLastPage

const getPageLinks = require('./get-page-links')

function hasLastPage (link) {
  return getPageLinks(link).last
}
