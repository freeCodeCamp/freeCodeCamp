Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');
const is = require('../utils/is.js');
const object = require('../utils/object.js');
const supports = require('../utils/supports.js');
const time = require('../utils/time.js');
const worldwide = require('../utils/worldwide.js');
const handlers = require('./handlers.js');

function addFetchInstrumentationHandler(handler, skipNativeFetchCheck) {
  const type = "fetch";
  const removeHandler = handlers.addHandler(type, handler);
  handlers.maybeInstrument(type, () => instrumentFetch(void 0, skipNativeFetchCheck));
  return removeHandler;
}
function addFetchEndInstrumentationHandler(handler) {
  const type = "fetch-body-resolved";
  const removeHandler = handlers.addHandler(type, handler);
  handlers.maybeInstrument(type, () => instrumentFetch(streamHandler));
  return removeHandler;
}
function instrumentFetch(onFetchResolved, skipNativeFetchCheck = false) {
  if (skipNativeFetchCheck && !supports.supportsNativeFetch()) {
    return;
  }
  object.fill(worldwide.GLOBAL_OBJ, "fetch", function(originalFetch) {
    return function(...args) {
      const virtualError = new Error();
      const { method, url } = parseFetchArgs(args);
      const handlerData = {
        args,
        fetchData: {
          method,
          url
        },
        startTimestamp: time.timestampInSeconds() * 1e3,
        // // Adding the error to be able to fingerprint the failed fetch event in HttpClient instrumentation
        virtualError,
        headers: getHeadersFromFetchArgs(args)
      };
      if (!onFetchResolved) {
        handlers.triggerHandlers("fetch", {
          ...handlerData
        });
      }
      return originalFetch.apply(worldwide.GLOBAL_OBJ, args).then(
        async (response) => {
          if (onFetchResolved) {
            onFetchResolved(response);
          } else {
            handlers.triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: time.timestampInSeconds() * 1e3,
              response
            });
          }
          return response;
        },
        (error) => {
          handlers.triggerHandlers("fetch", {
            ...handlerData,
            endTimestamp: time.timestampInSeconds() * 1e3,
            error
          });
          if (is.isError(error) && error.stack === void 0) {
            error.stack = virtualError.stack;
            object.addNonEnumerableProperty(error, "framesToPop", 1);
          }
          const client = currentScopes.getClient();
          const enhanceOption = client?.getOptions().enhanceFetchErrorMessages ?? "always";
          const shouldEnhance = enhanceOption !== false;
          if (shouldEnhance && error instanceof TypeError && (error.message === "Failed to fetch" || error.message === "Load failed" || error.message === "NetworkError when attempting to fetch resource.")) {
            try {
              const url2 = new URL(handlerData.fetchData.url);
              const hostname = url2.host;
              if (enhanceOption === "always") {
                error.message = `${error.message} (${hostname})`;
              } else {
                object.addNonEnumerableProperty(error, "__sentry_fetch_url_host__", hostname);
              }
            } catch {
            }
          }
          throw error;
        }
      );
    };
  });
}
async function resolveResponse(res, onFinishedResolving) {
  if (res?.body) {
    const body = res.body;
    const responseReader = body.getReader();
    const maxFetchDurationTimeout = setTimeout(
      () => {
        body.cancel().then(null, () => {
        });
      },
      90 * 1e3
      // 90s
    );
    let readingActive = true;
    while (readingActive) {
      let chunkTimeout;
      try {
        chunkTimeout = setTimeout(() => {
          body.cancel().then(null, () => {
          });
        }, 5e3);
        const { done } = await responseReader.read();
        clearTimeout(chunkTimeout);
        if (done) {
          onFinishedResolving();
          readingActive = false;
        }
      } catch {
        readingActive = false;
      } finally {
        clearTimeout(chunkTimeout);
      }
    }
    clearTimeout(maxFetchDurationTimeout);
    responseReader.releaseLock();
    body.cancel().then(null, () => {
    });
  }
}
function streamHandler(response) {
  let clonedResponseForResolving;
  try {
    clonedResponseForResolving = response.clone();
  } catch {
    return;
  }
  resolveResponse(clonedResponseForResolving, () => {
    handlers.triggerHandlers("fetch-body-resolved", {
      endTimestamp: time.timestampInSeconds() * 1e3,
      response
    });
  });
}
function hasProp(obj, prop) {
  return !!obj && typeof obj === "object" && !!obj[prop];
}
function getUrlFromResource(resource) {
  if (typeof resource === "string") {
    return resource;
  }
  if (!resource) {
    return "";
  }
  if (hasProp(resource, "url")) {
    return resource.url;
  }
  if (resource.toString) {
    return resource.toString();
  }
  return "";
}
function parseFetchArgs(fetchArgs) {
  if (fetchArgs.length === 0) {
    return { method: "GET", url: "" };
  }
  if (fetchArgs.length === 2) {
    const [resource, options] = fetchArgs;
    return {
      url: getUrlFromResource(resource),
      method: hasProp(options, "method") ? String(options.method).toUpperCase() : (
        // Request object as first argument
        is.isRequest(resource) && hasProp(resource, "method") ? String(resource.method).toUpperCase() : "GET"
      )
    };
  }
  const arg = fetchArgs[0];
  return {
    url: getUrlFromResource(arg),
    method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
  };
}
function getHeadersFromFetchArgs(fetchArgs) {
  const [requestArgument, optionsArgument] = fetchArgs;
  try {
    if (typeof optionsArgument === "object" && optionsArgument !== null && "headers" in optionsArgument && optionsArgument.headers) {
      return new Headers(optionsArgument.headers);
    }
    if (is.isRequest(requestArgument)) {
      return new Headers(requestArgument.headers);
    }
  } catch {
  }
  return;
}

exports.addFetchEndInstrumentationHandler = addFetchEndInstrumentationHandler;
exports.addFetchInstrumentationHandler = addFetchInstrumentationHandler;
exports.parseFetchArgs = parseFetchArgs;
//# sourceMappingURL=fetch.js.map
