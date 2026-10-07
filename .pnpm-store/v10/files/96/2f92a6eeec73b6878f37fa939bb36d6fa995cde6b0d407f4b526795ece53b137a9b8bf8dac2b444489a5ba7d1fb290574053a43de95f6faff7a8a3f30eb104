'use strict'

function shouldRouteHide (schema, opts) {
  const { hiddenTag, hideUntagged } = opts

  if (schema?.hide) {
    return true
  }

  const tags = schema?.tags || []

  if (tags.length === 0 && hideUntagged) {
    return true
  }

  if (tags.includes(hiddenTag)) {
    return true
  }

  return false
}

module.exports = {
  shouldRouteHide
}
