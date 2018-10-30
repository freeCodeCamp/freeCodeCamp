module.exports = hasPreviousPage

const getPageLinks = require('./get-page-links')

function hasPreviousPage (link) {
  return getPageLinks(link).prev
}
