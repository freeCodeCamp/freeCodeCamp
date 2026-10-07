const nodeFetch = require("../dist/index.cjs");

function fetch(input, options) {
  return nodeFetch.fetch(input, options);
}

for (const key in nodeFetch) {
  fetch[key] = nodeFetch[key];
}

module.exports = fetch;
