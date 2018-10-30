// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var path = require("path")

"use strict"

function urix(aPath) {
  if (path.sep === "\\") {
    return aPath
      .replace(/\\/g, "/")
      .replace(/^[a-z]:\/?/i, "/")
  }
  return aPath
}

module.exports = urix
