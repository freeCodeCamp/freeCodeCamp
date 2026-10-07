const path = require('path');

const include_dir = path.relative('.', __dirname);

module.exports = {
  include: `"${__dirname}"`, // deprecated, can be removed as part of 4.0.0
  include_dir,
  gyp: path.join(include_dir, 'node_api.gyp:nothing'),
  isNodeApiBuiltin: true,
  needsFlag: false
};
