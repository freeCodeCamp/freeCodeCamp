import { Headers as HeadersPolyfill } from "headers-polyfill";
import { getCallFrame } from '../utils/internal/getCallFrame.mjs';
import {
  isIterable
} from '../utils/internal/isIterable.mjs';
import {
} from '../HttpResponse.mjs';
import { getRawSetCookie } from '../utils/HttpResponse/decorators.mjs';
class RequestHandler {
  static cache = /* @__PURE__ */ new WeakMap();
  kind = "request";
  resolver;
  resolverIterator;
  resolverIteratorResult;
  options;
  info;
  /**
   * Indicates whether this request handler has been used
   * (its resolver has successfully executed).
   */
  isUsed;
  constructor(args) {
    this.resolver = args.resolver;
    this.options = args.options;
    const callFrame = getCallFrame(new Error());
    this.info = {
      ...args.info,
      callFrame
    };
    this.isUsed = false;
  }
  /**
   * Reset the runtime state accumulated during response resolution,
   * such as generator iterator progress. Called when this handler is
   * removed from the active handlers list so re-adding it later starts
   * from a clean state.
   */
  reset() {
    const iterator = this.resolverIterator;
    this.resolverIterator = void 0;
    this.resolverIteratorResult = void 0;
    if (typeof iterator?.return === "function") {
      void Promise.resolve(iterator.return());
    }
  }
  /**
   * Restore this handler so it can match requests again after being
   * exhausted (e.g. via `{ once: true }`). Also clears any accumulated
   * resolution state.
   */
  restore() {
    if (this.options?.once) {
      this.reset();
      this.isUsed = false;
    }
  }
  /**
   * Parse the intercepted request to extract additional information from it.
   * Parsed result is then exposed to other methods of this request handler.
   */
  async parse(_args) {
    return {};
  }
  /**
   * Test if this handler matches the given request.
   *
   * This method is not used internally but is exposed
   * as a convenience method for consumers writing custom
   * handlers.
   */
  async test(args) {
    const parsedResult = await this.parse({
      request: args.request,
      resolutionContext: args.resolutionContext
    });
    return this.predicate({
      request: args.request,
      parsedResult,
      resolutionContext: args.resolutionContext
    });
  }
  extendResolverArgs(_args) {
    return {};
  }
  // Clone the request instance before it's passed to the handler phases
  // and the response resolver so we can always read it for logging.
  // We only clone it once per request to avoid unnecessary overhead.
  cloneRequestOrGetFromCache(request) {
    const existingClone = RequestHandler.cache.get(request);
    if (typeof existingClone !== "undefined") {
      return existingClone;
    }
    const clonedRequest = request.clone();
    RequestHandler.cache.set(request, clonedRequest);
    return clonedRequest;
  }
  /**
   * Execute this request handler and produce a mocked response
   * using the given resolver function.
   */
  async run(args) {
    if (this.isUsed && this.options?.once) {
      return null;
    }
    const requestClone = this.cloneRequestOrGetFromCache(args.request);
    const parsedResult = await this.parse({
      request: args.request,
      resolutionContext: args.resolutionContext
    });
    const shouldInterceptRequest = await this.predicate({
      request: args.request,
      parsedResult,
      resolutionContext: args.resolutionContext
    });
    if (!shouldInterceptRequest) {
      return null;
    }
    if (this.isUsed && this.options?.once) {
      return null;
    }
    this.isUsed = true;
    const executeResolver = this.wrapResolver(this.resolver);
    const resolverExtras = this.extendResolverArgs({
      request: args.request,
      parsedResult
    });
    const mockedResponsePromise = executeResolver({
      ...resolverExtras,
      requestId: args.requestId,
      request: args.request
    }).catch((errorOrResponse) => {
      if (errorOrResponse instanceof Response) {
        return errorOrResponse;
      }
      throw errorOrResponse;
    });
    const mockedResponse = await mockedResponsePromise;
    if (mockedResponse) {
      forwardResponseCookies(mockedResponse);
    }
    const executionResult = this.createExecutionResult({
      // Pass the cloned request to the result so that logging
      // and other consumers could read its body once more.
      request: requestClone,
      requestId: args.requestId,
      response: mockedResponse,
      parsedResult
    });
    return executionResult;
  }
  wrapResolver(resolver) {
    return async (info) => {
      if (!this.resolverIterator) {
        const result = await resolver(info);
        if (!isIterable(result)) {
          return result;
        }
        this.resolverIterator = Symbol.iterator in result ? result[Symbol.iterator]() : result[Symbol.asyncIterator]();
      }
      this.isUsed = false;
      const { done, value } = await this.resolverIterator.next();
      const nextResponse = await value;
      if (nextResponse) {
        this.resolverIteratorResult = nextResponse.clone();
      }
      if (done) {
        this.isUsed = true;
        return this.resolverIteratorResult?.clone();
      }
      return nextResponse;
    };
  }
  createExecutionResult(args) {
    return {
      handler: this,
      request: args.request,
      requestId: args.requestId,
      response: args.response,
      parsedResult: args.parsedResult
    };
  }
}
function forwardResponseCookies(response) {
  if (typeof document === "undefined") {
    return;
  }
  const responseCookies = getRawSetCookie(response);
  if (!responseCookies) {
    return;
  }
  const allResponseCookies = HeadersPolyfill.prototype.getSetCookie.call(
    new Headers([["set-cookie", responseCookies]])
  );
  for (const cookieString of allResponseCookies) {
    document.cookie = cookieString;
  }
}
export {
  RequestHandler,
  forwardResponseCookies
};
//# sourceMappingURL=RequestHandler.mjs.map