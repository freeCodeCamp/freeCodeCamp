// browserify plugin to swap out the `stream` builtin node shim with the stream-browserify version in this repo.
module.exports = function (b) {
  b._mdeps.options.modules.stream = require.resolve('../index.js');
};
