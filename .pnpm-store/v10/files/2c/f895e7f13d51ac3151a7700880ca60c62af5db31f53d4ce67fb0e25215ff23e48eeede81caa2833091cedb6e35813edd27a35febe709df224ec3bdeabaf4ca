Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const getDefaultExport = require('../../utils/get-default-export.js');
const constants = require('./constants.js');
const object = require('../../utils/object.js');
const clientSubscriptions = require('./client-subscriptions.js');

function patchHttpRequest(httpModule, options) {
  if (!object.getOriginalFunction(httpModule.request)) {
    const { [constants.HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated } = clientSubscriptions.getHttpClientSubscriptions({
      ...options,
      http: httpModule
    });
    const originalRequest = httpModule.request;
    object.wrapMethod(httpModule, "request", function patchedRequest(...args) {
      const request = originalRequest.apply(this, args);
      onHttpClientRequestCreated({ request }, constants.HTTP_ON_CLIENT_REQUEST);
      return request;
    });
  }
}
function patchHttpGet(httpModule) {
  if (!object.getOriginalFunction(httpModule.get)) {
    object.wrapMethod(httpModule, "get", function patchedGet(input, options, cb) {
      const request = httpModule.request.call(this, input, options, cb);
      request.end();
      return request;
    });
  }
}
function patchModule(httpModuleExport, options = {}) {
  const httpDefault = getDefaultExport.getDefaultExport(httpModuleExport);
  const httpModule = httpModuleExport;
  if (httpDefault !== httpModuleExport) {
    patchModule(httpDefault, options);
    for (const method of ["get", "request"]) {
      const desc = Object.getOwnPropertyDescriptor(httpDefault, method);
      if (desc) {
        Object.defineProperty(httpModule, method, desc);
      }
    }
    return httpModule;
  }
  patchHttpRequest(httpModule, options);
  patchHttpGet(httpModule);
  return httpModuleExport;
}
const patchHttpModuleClient = (httpModuleExport, options = {}) => patchModule(httpModuleExport, options);

exports.patchHttpModuleClient = patchHttpModuleClient;
//# sourceMappingURL=client-patch.js.map
