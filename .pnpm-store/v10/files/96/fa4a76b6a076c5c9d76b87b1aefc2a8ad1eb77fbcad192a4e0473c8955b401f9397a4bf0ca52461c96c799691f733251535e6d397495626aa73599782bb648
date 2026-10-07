Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const internalTypes = require('./internal-types.js');

const addNewStackLayer = (request) => {
  if (Array.isArray(request[internalTypes._LAYERS_STORE_PROPERTY]) === false) {
    Object.defineProperty(request, internalTypes._LAYERS_STORE_PROPERTY, {
      enumerable: false,
      value: []
    });
  }
  request[internalTypes._LAYERS_STORE_PROPERTY].push("/");
  const stackLength = request[internalTypes._LAYERS_STORE_PROPERTY].length;
  return () => {
    if (stackLength === request[internalTypes._LAYERS_STORE_PROPERTY].length) {
      request[internalTypes._LAYERS_STORE_PROPERTY].pop();
    } else {
      api.diag.warn("Connect: Trying to pop the stack multiple time");
    }
  };
};
const replaceCurrentStackRoute = (request, newRoute) => {
  if (newRoute) {
    request[internalTypes._LAYERS_STORE_PROPERTY].splice(-1, 1, newRoute);
  }
};
const generateRoute = (request) => {
  return request[internalTypes._LAYERS_STORE_PROPERTY].reduce((acc, sub) => acc.replace(/\/+$/, "") + sub);
};

exports.addNewStackLayer = addNewStackLayer;
exports.generateRoute = generateRoute;
exports.replaceCurrentStackRoute = replaceCurrentStackRoute;
//# sourceMappingURL=utils.js.map
