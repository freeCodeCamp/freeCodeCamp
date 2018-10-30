module.exports = hasFirstPage

const getPageLinks = require('./get-page-links')

function hasFirstPage (link) {
  return getPageLinks(link).first
}
