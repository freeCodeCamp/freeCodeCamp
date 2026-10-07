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
  FetchHttpHandler: () => FetchHttpHandler,
  keepAliveSupport: () => keepAliveSupport,
  streamCollector: () => streamCollector
});
module.exports = __toCommonJS(src_exports);

// src/fetch-http-handler.ts
var import_protocol_http = require("@smithy/protocol-http");
var import_querystring_builder = require("@smithy/querystring-builder");

// src/request-timeout.ts
function requestTimeout(timeoutInMs = 0) {
  return new Promise((resolve, reject) => {
    if (timeoutInMs) {
      setTimeout(() => {
        const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}
__name(requestTimeout, "requestTimeout");

// src/fetch-http-handler.ts
var keepAliveSupport = {
  supported: Boolean(typeof Request !== "undefined" && "keepalive" in new Request("https://[::1]"))
};
var _FetchHttpHandler = class _FetchHttpHandler {
  /**
   * @returns the input if it is an HttpHandler of any class,
   * or instantiates a new instance of this handler.
   */
  static create(instanceOrOptions) {
    if (typeof (instanceOrOptions == null ? void 0 : instanceOrOptions.handle) === "function") {
      return instanceOrOptions;
    }
    return new _FetchHttpHandler(instanceOrOptions);
  }
  constructor(options) {
    if (typeof options === "function") {
      this.configProvider = options().then((opts) => opts || {});
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
  }
  destroy() {
  }
  async handle(request, { abortSignal } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    const requestTimeoutInMs = this.config.requestTimeout;
    const keepAlive = this.config.keepAlive === true;
    if (abortSignal == null ? void 0 : abortSignal.aborted) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return Promise.reject(abortError);
    }
    let path = request.path;
    const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
    if (queryString) {
      path += `?${queryString}`;
    }
    if (request.fragment) {
      path += `#${request.fragment}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
      const username = request.username ?? "";
      const password = request.password ?? "";
      auth = `${username}:${password}@`;
    }
    const { port, method } = request;
    const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
    const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
    const requestOptions = { body, headers: new Headers(request.headers), method };
    if (typeof AbortController !== "undefined") {
      requestOptions["signal"] = abortSignal;
    }
    if (keepAliveSupport.supported) {
      requestOptions["keepalive"] = keepAlive;
    }
    const fetchRequest = new Request(url, requestOptions);
    const raceOfPromises = [
      fetch(fetchRequest).then((response) => {
        const fetchHeaders = response.headers;
        const transformedHeaders = {};
        for (const pair of fetchHeaders.entries()) {
          transformedHeaders[pair[0]] = pair[1];
        }
        const hasReadableStream = response.body != void 0;
        if (!hasReadableStream) {
          return response.blob().then((body2) => ({
            response: new import_protocol_http.HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: body2
            })
          }));
        }
        return {
          response: new import_protocol_http.HttpResponse({
            headers: transformedHeaders,
            reason: response.statusText,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(
        new Promise((resolve, reject) => {
          abortSignal.onabort = () => {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };
        })
      );
    }
    return Promise.race(raceOfPromises);
  }
  updateHttpClientConfig(key, value) {
    this.config = void 0;
    this.configProvider = this.configProvider.then((config) => {
      config[key] = value;
      return config;
    });
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
};
__name(_FetchHttpHandler, "FetchHttpHandler");
var FetchHttpHandler = _FetchHttpHandler;

// src/stream-collector.ts
var import_util_base64 = require("@smithy/util-base64");
var streamCollector = /* @__PURE__ */ __name((stream) => {
  if (typeof Blob === "function" && stream instanceof Blob) {
    return collectBlob(stream);
  }
  return collectStream(stream);
}, "streamCollector");
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = (0, import_util_base64.fromBase64)(base64);
  return new Uint8Array(arrayBuffer);
}
__name(collectBlob, "collectBlob");
async function collectStream(stream) {
  let res = new Uint8Array(0);
  const reader = stream.getReader();
  let isDone = false;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      const prior = res;
      res = new Uint8Array(prior.length + value.length);
      res.set(prior);
      res.set(value, prior.length);
    }
    isDone = done;
  }
  return res;
}
__name(collectStream, "collectStream");
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
__name(readToBase64, "readToBase64");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  keepAliveSupport,
  FetchHttpHandler,
  streamCollector
});

