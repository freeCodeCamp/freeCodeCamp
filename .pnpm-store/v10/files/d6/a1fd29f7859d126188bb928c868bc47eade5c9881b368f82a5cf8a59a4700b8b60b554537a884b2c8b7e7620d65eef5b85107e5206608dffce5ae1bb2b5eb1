import { getClient } from '../currentScopes.js';
import { isError, isRequest } from '../utils/is.js';
import { fill, addNonEnumerableProperty } from '../utils/object.js';
import { supportsNativeFetch } from '../utils/supports.js';
import { timestampInSeconds } from '../utils/time.js';
import { GLOBAL_OBJ } from '../utils/worldwide.js';
import { addHandler, maybeInstrument, triggerHandlers } from './handlers.js';

function addFetchInstrumentationHandler(handler, skipNativeFetchCheck) {
  const type = "fetch";
  const removeHandler = addHandler(type, handler);
  maybeInstrument(type, () => instrumentFetch(void 0, skipNativeFetchCheck));
  return removeHandler;
}
function addFetchEndInstrumentationHandler(handler) {
  const type = "fetch-body-resolved";
  const removeHandler = addHandler(type, handler);
  maybeInstrument(type, () => instrumentFetch(streamHandler));
  return removeHandler;
}
function instrumentFetch(onFetchResolved, skipNativeFetchCheck = false) {
  if (skipNativeFetchCheck && !supportsNativeFetch()) {
    return;
  }
  fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
    return function(...args) {
      const virtualError = new Error();
      const { method, url } = parseFetchArgs(args);
      const handlerData = {
        args,
        fetchData: {
          method,
          url
        },
        startTimestamp: timestampInSeconds() * 1e3,
        // // Adding the error to be able to fingerprint the failed fetch event in HttpClient instrumentation
        virtualError,
        headers: getHeadersFromFetchArgs(args)
      };
      if (!onFetchResolved) {
        triggerHandlers("fetch", {
          ...handlerData
        });
      }
      return originalFetch.apply(GLOBAL_OBJ, args).then(
        async (response) => {
          if (onFetchResolved) {
            onFetchResolved(response);
          } else {
            triggerHandlers("fetch", {
              ...handlerData,
              endTimestamp: timestampInSeconds() * 1e3,
              response
            });
          }
          return response;
        },
        (error) => {
          triggerHandlers("fetch", {
            ...handlerData,
            endTimestamp: timestampInSeconds() * 1e3,
            error
          });
          if (isError(error) && error.stack === void 0) {
            error.stack = virtualError.stack;
            addNonEnumerableProperty(error, "framesToPop", 1);
          }
          const client = getClient();
          const enhanceOption = client?.getOptions().enhanceFetchErrorMessages ?? "always";
          const shouldEnhance = enhanceOption !== false;
          if (shouldEnhance && error instanceof TypeError && (error.message === "Failed to fetch" || error.message === "Load failed" || error.message === "NetworkError when attempting to fetch resource.")) {
            try {
              const url2 = new URL(handlerData.fetchData.url);
              const hostname = url2.host;
              if (enhanceOption === "always") {
                error.message = `${error.message} (${hostname})`;
              } else {
                addNonEnumerableProperty(error, "__sentry_fetch_url_host__", hostname);
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
    triggerHandlers("fetch-body-resolved", {
      endTimestamp: timestampInSeconds() * 1e3,
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
        isRequest(resource) && hasProp(resource, "method") ? String(resource.method).toUpperCase() : "GET"
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
    if (isRequest(requestArgument)) {
      return new Headers(requestArgument.headers);
    }
  } catch {
  }
  return;
}

export { addFetchEndInstrumentationHandler, addFetchInstrumentationHandler, parseFetchArgs };
//# sourceMappingURL=fetch.js.map
