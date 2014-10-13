var path = require('path');
var r = function(suite) {
  return require(path.join(__dirname, suite))
}

var fetch = [
  "level1/core",
  "level1/html",
  "level1/svg",
  "level2/core",
  "level2/html",
  "level2/style",
  "level2/extra",
  "level3/core",
  "level3/ls",
  "level3/xpath",
  /*
   TODO: this needs work, will break everything if included.
   "window",*/
   "jsdom",
   "sizzle"
];

module.exports = {};


// TODO: filtering
fetch.forEach(function(k) {
  module.exports[k] = r(k);
});

