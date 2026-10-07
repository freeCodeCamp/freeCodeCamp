var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Field: () => Field,
  Fields: () => Fields,
  HttpRequest: () => HttpRequest,
  HttpResponse: () => HttpResponse,
  getHttpHandlerExtensionConfiguration: () => getHttpHandlerExtensionConfiguration,
  isValidHostname: () => isValidHostname,
  resolveHttpHandlerRuntimeConfig: () => resolveHttpHandlerRuntimeConfig
});
module.exports = __toCommonJS(src_exports);

// src/extensions/httpExtensionConfiguration.ts
var getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  let httpHandler = runtimeConfig.httpHandler;
  return {
    setHttpHandler(handler) {
      httpHandler = handler;
    },
    httpHandler() {
      return httpHandler;
    },
    updateHttpClientConfig(key, value) {
      httpHandler.updateHttpClientConfig(key, value);
    },
    httpHandlerConfigs() {
      return httpHandler.httpHandlerConfigs();
    }
  };
}, "getHttpHandlerExtensionConfiguration");
var resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
  return {
    httpHandler: httpHandlerExtensionConfiguration.httpHandler()
  };
}, "resolveHttpHandlerRuntimeConfig");

// src/Field.ts
var import_types = require("@smithy/types");
var _Field = class _Field {
  constructor({ name, kind = import_types.FieldPosition.HEADER, values = [] }) {
    this.name = name;
    this.kind = kind;
    this.values = values;
  }
  /**
   * Appends a value to the field.
   *
   * @param value The value to append.
   */
  add(value) {
    this.values.push(value);
  }
  /**
   * Overwrite existing field values.
   *
   * @param values The new field values.
   */
  set(values) {
    this.values = values;
  }
  /**
   * Remove all matching entries from list.
   *
   * @param value Value to remove.
   */
  remove(value) {
    this.values = this.values.filter((v) => v !== value);
  }
  /**
   * Get comma-delimited string.
   *
   * @returns String representation of {@link Field}.
   */
  toString() {
    return this.values.map((v) => v.includes(",") || v.includes(" ") ? `"${v}"` : v).join(", ");
  }
  /**
   * Get string values as a list
   *
   * @returns Values in {@link Field} as a list.
   */
  get() {
    return this.values;
  }
};
__name(_Field, "Field");
var Field = _Field;

// src/Fields.ts
var _Fields = class _Fields {
  constructor({ fields = [], encoding = "utf-8" }) {
    this.entries = {};
    fields.forEach(this.setField.bind(this));
    this.encoding = encoding;
  }
  /**
   * Set entry for a {@link Field} name. The `name`
   * attribute will be used to key the collection.
   *
   * @param field The {@link Field} to set.
   */
  setField(field) {
    this.entries[field.name.toLowerCase()] = field;
  }
  /**
   *  Retrieve {@link Field} entry by name.
   *
   * @param name The name of the {@link Field} entry
   *  to retrieve
   * @returns The {@link Field} if it exists.
   */
  getField(name) {
    return this.entries[name.toLowerCase()];
  }
  /**
   * Delete entry from collection.
   *
   * @param name Name of the entry to delete.
   */
  removeField(name) {
    delete this.entries[name.toLowerCase()];
  }
  /**
   * Helper function for retrieving specific types of fields.
   * Used to grab all headers or all trailers.
   *
   * @param kind {@link FieldPosition} of entries to retrieve.
   * @returns The {@link Field} entries with the specified
   *  {@link FieldPosition}.
   */
  getByType(kind) {
    return Object.values(this.entries).filter((field) => field.kind === kind);
  }
};
__name(_Fields, "Fields");
var Fields = _Fields;

// src/httpRequest.ts
var _HttpRequest = class _HttpRequest {
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static isInstance(request) {
    if (!request)
      return false;
    const req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    const cloned = new _HttpRequest({
      ...this,
      headers: { ...this.headers }
    });
    if (cloned.query)
      cloned.query = cloneQuery(cloned.query);
    return cloned;
  }
};
__name(_HttpRequest, "HttpRequest");
var HttpRequest = _HttpRequest;
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
__name(cloneQuery, "cloneQuery");

// src/httpResponse.ts
var _HttpResponse = class _HttpResponse {
  constructor(options) {
    this.statusCode = options.statusCode;
    this.reason = options.reason;
    this.headers = options.headers || {};
    this.body = options.body;
  }
  static isInstance(response) {
    if (!response)
      return false;
    const resp = response;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
};
__name(_HttpResponse, "HttpResponse");
var HttpResponse = _HttpResponse;

// src/isValidHostname.ts
function isValidHostname(hostname) {
  const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
  return hostPattern.test(hostname);
}
__name(isValidHostname, "isValidHostname");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  getHttpHandlerExtensionConfiguration,
  resolveHttpHandlerRuntimeConfig,
  Field,
  Fields,
  HttpRequest,
  HttpResponse,
  isValidHostname
});

