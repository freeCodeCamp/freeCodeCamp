import { getDefaultExport } from '../../utils/get-default-export.js';
import { HTTP_ON_CLIENT_REQUEST } from './constants.js';
import { getOriginalFunction, wrapMethod } from '../../utils/object.js';
import { getHttpClientSubscriptions } from './client-subscriptions.js';

function patchHttpRequest(httpModule, options) {
  if (!getOriginalFunction(httpModule.request)) {
    const { [HTTP_ON_CLIENT_REQUEST]: onHttpClientRequestCreated } = getHttpClientSubscriptions({
      ...options,
      http: httpModule
    });
    const originalRequest = httpModule.request;
    wrapMethod(httpModule, "request", function patchedRequest(...args) {
      const request = originalRequest.apply(this, args);
      onHttpClientRequestCreated({ request }, HTTP_ON_CLIENT_REQUEST);
      return request;
    });
  }
}
function patchHttpGet(httpModule) {
  if (!getOriginalFunction(httpModule.get)) {
    wrapMethod(httpModule, "get", function patchedGet(input, options, cb) {
      const request = httpModule.request.call(this, input, options, cb);
      request.end();
      return request;
    });
  }
}
function patchModule(httpModuleExport, options = {}) {
  const httpDefault = getDefaultExport(httpModuleExport);
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

export { patchHttpModuleClient };
//# sourceMappingURL=client-patch.js.map
