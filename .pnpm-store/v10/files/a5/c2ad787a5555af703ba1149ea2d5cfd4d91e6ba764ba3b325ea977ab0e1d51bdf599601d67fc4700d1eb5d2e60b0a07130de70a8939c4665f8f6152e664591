"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/native/index.ts
var index_exports = {};
__export(index_exports, {
  defaultNetworkOptions: () => defaultNetworkOptions,
  setupServer: () => setupServer
});
module.exports = __toCommonJS(index_exports);
var import_fetch = require("@mswjs/interceptors/fetch");
var import_XMLHttpRequest = require("@mswjs/interceptors/XMLHttpRequest");
var import_define_network2 = require("../core/experimental/define-network");
var import_interceptor_source2 = require("../core/experimental/sources/interceptor-source");

// src/node/setup-server-common.ts
var import_define_network = require("../core/experimental/define-network");
var import_interceptor_source = require("../core/experimental/sources/interceptor-source");
var import_compat = require("../core/experimental/compat");
function defineSetupServerApi(network) {
  return {
    events: network.events,
    listen(options) {
      network.configure({
        onUnhandledFrame: (0, import_compat.fromLegacyOnUnhandledRequest)(() => {
          return options?.onUnhandledRequest || "warn";
        })
      });
      network.enable();
    },
    use: network.use.bind(network),
    resetHandlers: network.resetHandlers.bind(network),
    restoreHandlers: network.restoreHandlers.bind(network),
    listHandlers: network.listHandlers.bind(network),
    close() {
      if (network.readyState === import_define_network.NetworkReadyState.DISABLED) {
        return;
      }
      network.disable();
    }
  };
}

// src/native/index.ts
var defaultInterceptors = [
  new import_fetch.FetchInterceptor(),
  new import_XMLHttpRequest.XMLHttpRequestInterceptor()
];
var defaultNetworkOptions = {
  sources: [
    new import_interceptor_source2.InterceptorSource({
      interceptors: defaultInterceptors
    })
  ],
  onUnhandledFrame: "warn",
  context: {
    quiet: true
  }
};
function setupServer(...handlers) {
  const network = (0, import_define_network2.defineNetwork)({
    ...defaultNetworkOptions,
    handlers
  });
  return defineSetupServerApi(network);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultNetworkOptions,
  setupServer
});
//# sourceMappingURL=index.js.map