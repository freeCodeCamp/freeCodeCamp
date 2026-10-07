import {} from '../utils/executeHandlers.mjs';
import { devUtils } from '../utils/internal/devUtils.mjs';
import { isStringEqual } from '../utils/internal/isStringEqual.mjs';
import { getStatusCodeColor } from '../utils/logging/getStatusCodeColor.mjs';
import { getTimestamp } from '../utils/logging/getTimestamp.mjs';
import { serializeRequest } from '../utils/logging/serializeRequest.mjs';
import { serializeResponse } from '../utils/logging/serializeResponse.mjs';
import {
  matchRequestUrl
} from '../utils/matching/matchRequestUrl.mjs';
import { toPublicUrl } from '../utils/request/toPublicUrl.mjs';
import { getAllRequestCookies } from '../utils/request/getRequestCookies.mjs';
import { cleanUrl } from '../utils/url/cleanUrl.mjs';
import {
  RequestHandler
} from './RequestHandler.mjs';
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
class HttpHandler extends RequestHandler {
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
    const url = cleanUrl(path);
    if (url === path) {
      return;
    }
    devUtils.warn(
      `Found a redundant usage of query parameters in the request handler URL for "${method} ${path}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/http/intercepting-requests#querysearch-parameters`
    );
  }
  async parse(args) {
    const url = new URL(args.request.url);
    const cookies = getAllRequestCookies(args.request);
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
    const match = this.info.path ? matchRequestUrl(url, this.info.path, args.resolutionContext?.baseUrl) : { matches: false, params: {} };
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
    return this.info.method instanceof RegExp ? this.info.method.test(actualMethod) : isStringEqual(this.info.method, actualMethod);
  }
  extendResolverArgs(args) {
    return {
      params: args.parsedResult.match?.params || {},
      cookies: args.parsedResult.cookies
    };
  }
  async log(args) {
    const publicUrl = toPublicUrl(args.request.url);
    const loggedRequest = await serializeRequest(args.request);
    const loggedResponse = await serializeResponse(args.response);
    const statusColor = getStatusCodeColor(loggedResponse.status);
    console.groupCollapsed(
      devUtils.formatMessage(
        `${getTimestamp()} ${args.request.method} ${publicUrl} (%c${loggedResponse.status} ${loggedResponse.statusText}%c)`
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
export {
  HttpHandler,
  HttpMethods
};
//# sourceMappingURL=HttpHandler.mjs.map