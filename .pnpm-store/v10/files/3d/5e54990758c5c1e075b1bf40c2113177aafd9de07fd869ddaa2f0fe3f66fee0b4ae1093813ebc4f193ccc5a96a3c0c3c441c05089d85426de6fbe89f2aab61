Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const nodeVersion = require('../../nodeVersion.js');
const localVariablesAsync = require('./local-variables-async.js');
const localVariablesSync = require('./local-variables-sync.js');

const localVariablesIntegration = (options = {}) => {
  return nodeVersion.NODE_VERSION.major < 19 ? localVariablesSync.localVariablesSyncIntegration(options) : localVariablesAsync.localVariablesAsyncIntegration(options);
};

exports.localVariablesIntegration = localVariablesIntegration;
//# sourceMappingURL=index.js.map
