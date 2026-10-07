function onError(err) {
  throw err; /* ↓ Check stack trace ↓ */
}

module.exports = function jiti(filename, opts) {
  const jiti = require("../dist/jiti");

  opts = { onError, ...opts };

  if (!opts.transform) {
    opts.transform = require("../dist/babel");
  }

  return jiti(filename, opts);
};
