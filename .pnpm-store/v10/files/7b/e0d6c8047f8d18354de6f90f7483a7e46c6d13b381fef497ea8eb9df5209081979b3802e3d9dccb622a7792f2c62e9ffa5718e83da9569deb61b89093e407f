import { NODE_VERSION } from '../../nodeVersion.js';
import { localVariablesAsyncIntegration } from './local-variables-async.js';
import { localVariablesSyncIntegration } from './local-variables-sync.js';

const localVariablesIntegration = (options = {}) => {
  return NODE_VERSION.major < 19 ? localVariablesSyncIntegration(options) : localVariablesAsyncIntegration(options);
};

export { localVariablesIntegration };
//# sourceMappingURL=index.js.map
