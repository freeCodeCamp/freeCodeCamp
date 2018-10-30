"use strict";

// Browserify's process implementation doesn't have hrtime, and this package is small so not much of a burden for
// Node.js users.
const hrtime = require("browser-process-hrtime");

function toMS([sec, nanosec]) {
  return sec * 1e3 + nanosec / 1e6;
}

module.exports = { hrtime, toMS };
