const path = require('path');

const includeDir = path.relative('.', __dirname);

module.exports = {
  include: `"${__dirname}"`, // deprecated, can be removed as part of 4.0.0
  include_dir: includeDir,
  gyp: path.join(includeDir, 'node_api.gyp:nothing'),
  isNodeApiBuiltin: true,
  needsFlag: false
};
