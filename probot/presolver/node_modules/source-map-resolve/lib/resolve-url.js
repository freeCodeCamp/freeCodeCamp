// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var url = require("url")

function resolveUrl(/* ...urls */) {
  return Array.prototype.reduce.call(arguments, function(resolved, nextUrl) {
    return url.resolve(resolved, nextUrl)
  })
}

module.exports = resolveUrl
