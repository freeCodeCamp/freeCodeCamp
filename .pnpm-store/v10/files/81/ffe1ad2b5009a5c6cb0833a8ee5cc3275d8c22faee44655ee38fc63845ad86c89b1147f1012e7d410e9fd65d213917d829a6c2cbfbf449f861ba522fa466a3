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
var HttpHandler_exports = {};
__export(HttpHandler_exports, {
  HttpHandler: () => HttpHandler,
  HttpMethods: () => HttpMethods
});
module.exports = __toCommonJS(HttpHandler_exports);
var import_executeHandlers = require("../utils/executeHandlers");
var import_devUtils = require("../utils/internal/devUtils");
var import_isStringEqual = require("../utils/internal/isStringEqual");
var import_getStatusCodeColor = require("../utils/logging/getStatusCodeColor");
var import_getTimestamp = require("../utils/logging/getTimestamp");
var import_serializeRequest = require("../utils/logging/serializeRequest");
var import_serializeResponse = require("../utils/logging/serializeResponse");
var import_matchRequestUrl = require("../utils/matching/matchRequestUrl");
var import_toPublicUrl = require("../utils/request/toPublicUrl");
var import_getRequestCookies = require("../utils/request/getRequestCookies");
var import_cleanUrl = require("../utils/url/cleanUrl");
var import_RequestHandler = require("./RequestHandler");
var HttpMethods = /* @__PURE__ */ ((HttpMethods2) => {
  HttpMethods2["HEAD"] = "HEAD";
  HttpMethods2["GET"] = "GET";
  HttpMethods2["POST"] = "POST";
  HttpMethods2["PUT"] = "PUT";
  HttpMethods2["PATCH"] = "PATCH";
  HttpMethods2["OPTIONS"] = "OPTIONS";
  HttpMethods2["DELETE"] = "DELETE";
  return HttpMethods2;
})(HttpMethods || {});
class HttpHandler extends import_RequestHandler.RequestHandler {
  constructor(method, predicate, resolver, options) {
    const displayPath = typeof predicate === "function" ? "[custom predicate]" : predicate;
    super({
      info: {
        header: `${method}${displayPath ? ` ${displayPath}` : ""}`,
        path: predicate,
        method
      },
      resolver,
      options
    });
    this.checkRedundantQueryParameters();
  }
  checkRedundantQueryParameters() {
    const { method, path } = this.info;
    if (!path || path instanceof RegExp || typeof path === "function") {
      return;
    }
    const url = (0, import_cleanUrl.cleanUrl)(path);
    if (url === path) {
      return;
    }
    import_devUtils.devUtils.warn(
      `Found a redundant usage of query parameters in the request handler URL for "${method} ${path}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/http/intercepting-requests#querysearch-parameters`
    );
  }
  async parse(args) {
    const url = new URL(args.request.url);
    const cookies = (0, import_getRequestCookies.getAllRequestCookies)(args.request);
    if (typeof this.info.path === "function") {
      const customPredicateResult = await this.info.path({
        request: args.request,
        cookies
      });
      const match2 = typeof customPredicateResult === "boolean" ? {
        matches: customPredicateResult,
        params: {}
      } : customPredicateResult;
      return {
        match: match2,
        cookies
      };
    }
    const match = this.info.path ? (0, import_matchRequestUrl.matchRequestUrl)(url, this.info.path, args.resolutionContext?.baseUrl) : { matches: false, params: {} };
    return {
      match,
      cookies
    };
  }
  async predicate(args) {
    const hasMatchingMethod = this.matchMethod(args.request.method);
    const hasMatchingUrl = args.parsedResult.match.matches;
    return hasMatchingMethod && hasMatchingUrl;
  }
  matchMethod(actualMethod) {
    return this.info.method instanceof RegExp ? this.info.method.test(actualMethod) : (0, import_isStringEqual.isStringEqual)(this.info.method, actualMethod);
  }
  extendResolverArgs(args) {
    return {
      params: args.parsedResult.match?.params || {},
      cookies: args.parsedResult.cookies
    };
  }
  async log(args) {
    const publicUrl = (0, import_toPublicUrl.toPublicUrl)(args.request.url);
    const loggedRequest = await (0, import_serializeRequest.serializeRequest)(args.request);
    const loggedResponse = await (0, import_serializeResponse.serializeResponse)(args.response);
    const statusColor = (0, import_getStatusCodeColor.getStatusCodeColor)(loggedResponse.status);
    console.groupCollapsed(
      import_devUtils.devUtils.formatMessage(
        `${(0, import_getTimestamp.getTimestamp)()} ${args.request.method} ${publicUrl} (%c${loggedResponse.status} ${loggedResponse.statusText}%c)`
      ),
      `color:${statusColor}`,
      "color:inherit"
    );
    console.log("Request", loggedRequest);
    console.log("Handler:", this);
    console.log("Response", loggedResponse);
    console.groupEnd();
  }
}
//# sourceMappingURL=HttpHandler.js.map