module.exports = hasNextPage

const getPageLinks = require('./get-page-links')

function hasNextPage (link) {
  return getPageLinks(link).next
}
