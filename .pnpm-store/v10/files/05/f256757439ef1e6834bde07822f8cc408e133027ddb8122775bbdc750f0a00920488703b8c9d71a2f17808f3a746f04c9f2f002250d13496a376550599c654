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
var HttpResponse_exports = {};
__export(HttpResponse_exports, {
  HttpResponse: () => HttpResponse,
  bodyType: () => bodyType,
  kDefaultContentType: () => kDefaultContentType
});
module.exports = __toCommonJS(HttpResponse_exports);
var import_interceptors = require("@mswjs/interceptors");
var import_decorators = require("./utils/HttpResponse/decorators");
const bodyType = Symbol("bodyType");
const kDefaultContentType = Symbol.for("kDefaultContentType");
class HttpResponse extends import_interceptors.FetchResponse {
  [bodyType] = null;
  constructor(body, init) {
    const responseInit = (0, import_decorators.normalizeResponseInit)(init);
    super(body, responseInit);
    (0, import_decorators.decorateResponse)(this, responseInit);
  }
  static error() {
    return super.error();
  }
  /**
   * Create a `Response` with a `Content-Type: "text/plain"` body.
   * @example
   * HttpResponse.text('hello world')
   * HttpResponse.text('Error', { status: 500 })
   */
  static text(body, init) {
    const responseInit = (0, import_decorators.normalizeResponseInit)(init);
    const hasExplicitContentType = responseInit.headers.has("Content-Type");
    if (!hasExplicitContentType) {
      responseInit.headers.set("Content-Type", "text/plain");
    }
    if (!responseInit.headers.has("Content-Length")) {
      responseInit.headers.set(
        "Content-Length",
        body ? new Blob([body]).size.toString() : "0"
      );
    }
    const response = new HttpResponse(body, responseInit);
    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false
      });
    }
    return response;
  }
  /**
   * Create a `Response` with a `Content-Type: "application/json"` body.
   * @example
   * HttpResponse.json({ firstName: 'John' })
   * HttpResponse.json({ error: 'Not Authorized' }, { status: 401 })
   */
  static json(body, init) {
    const responseInit = (0, import_decorators.normalizeResponseInit)(init);
    const hasExplicitContentType = responseInit.headers.has("Content-Type");
    if (!hasExplicitContentType) {
      responseInit.headers.set("Content-Type", "application/json");
    }
    const responseText = JSON.stringify(body);
    if (!responseInit.headers.has("Content-Length")) {
      responseInit.headers.set(
        "Content-Length",
        responseText ? new Blob([responseText]).size.toString() : "0"
      );
    }
    const response = new HttpResponse(responseText, responseInit);
    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false
      });
    }
    return response;
  }
  /**
   * Create a `Response` with a `Content-Type: "application/xml"` body.
   * @example
   * HttpResponse.xml(`<user name="John" />`)
   * HttpResponse.xml(`<article id="abc-123" />`, { status: 201 })
   */
  static xml(body, init) {
    const responseInit = (0, import_decorators.normalizeResponseInit)(init);
    const hasExplicitContentType = responseInit.headers.has("Content-Type");
    if (!hasExplicitContentType) {
      responseInit.headers.set("Content-Type", "text/xml");
    }
    const response = new HttpResponse(body, responseInit);
    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false
      });
    }
    return response;
  }
  /**
   * Create a `Response` with a `Content-Type: "text/html"` body.
   * @example
   * HttpResponse.html(`<p class="author">Jane Doe</p>`)
   * HttpResponse.html(`<main id="abc-123">Main text</main>`, { status: 201 })
   */
  static html(body, init) {
    const responseInit = (0, import_decorators.normalizeResponseInit)(init);
    const hasExplicitContentType = responseInit.headers.has("Content-Type");
    if (!hasExplicitContentType) {
      responseInit.headers.set("Content-Type", "text/html");
    }
    const response = new HttpResponse(body, responseInit);
    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false
      });
    }
    return response;
  }
  /**
   * Create a `Response` with an `ArrayBuffer` body.
   * @example
   * const buffer = new ArrayBuffer(3)
   * const view = new Uint8Array(buffer)
   * view.set([1, 2, 3])
   *
   * HttpResponse.arrayBuffer(buffer)
   */
  static arrayBuffer(body, init) {
    const responseInit = (0, import_decorators.normalizeResponseInit)(init);
    const hasExplicitContentType = responseInit.headers.has("Content-Type");
    if (!hasExplicitContentType) {
      responseInit.headers.set("Content-Type", "application/octet-stream");
    }
    if (body && !responseInit.headers.has("Content-Length")) {
      responseInit.headers.set("Content-Length", body.byteLength.toString());
    }
    const response = new HttpResponse(body, responseInit);
    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false
      });
    }
    return response;
  }
  /**
   * Create a `Response` with a `FormData` body.
   * @example
   * const data = new FormData()
   * data.set('name', 'Alice')
   *
   * HttpResponse.formData(data)
   */
  static formData(body, init) {
    return new HttpResponse(body, (0, import_decorators.normalizeResponseInit)(init));
  }
}
//# sourceMappingURL=HttpResponse.js.map