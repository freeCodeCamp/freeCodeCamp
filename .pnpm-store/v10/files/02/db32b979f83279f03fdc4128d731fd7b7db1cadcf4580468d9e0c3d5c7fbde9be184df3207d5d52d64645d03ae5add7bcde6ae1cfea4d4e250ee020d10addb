import { defineIntegration, getClient, captureException, debug } from '@sentry/core';
import { isMainThread } from 'worker_threads';
import { DEBUG_BUILD } from '../debug-build.js';
import { logAndExitProcess } from '../utils/errorhandling.js';

const INTEGRATION_NAME = "OnUncaughtException";
const onUncaughtExceptionIntegration = defineIntegration((options = {}) => {
  const optionsWithDefaults = {
    exitEvenIfOtherHandlersAreRegistered: false,
    ...options
  };
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      if (!isMainThread) {
        return;
      }
      global.process.on("uncaughtException", makeErrorHandler(client, optionsWithDefaults));
    }
  };
});
function makeErrorHandler(client, options) {
  const timeout = 2e3;
  let caughtFirstError = false;
  let caughtSecondError = false;
  let calledFatalError = false;
  let firstError;
  const clientOptions = client.getOptions();
  return Object.assign(
    (error) => {
      let onFatalError = logAndExitProcess;
      if (options.onFatalError) {
        onFatalError = options.onFatalError;
      } else if (clientOptions.onFatalError) {
        onFatalError = clientOptions.onFatalError;
      }
      const userProvidedListenersCount = global.process.listeners("uncaughtException").filter((listener) => {
        return (
          // as soon as we're using domains this listener is attached by node itself
          listener.name !== "domainUncaughtExceptionClear" && // the handler we register in this integration
          listener._errorHandler !== true
        );
      }).length;
      const processWouldExit = userProvidedListenersCount === 0;
      const shouldApplyFatalHandlingLogic = options.exitEvenIfOtherHandlersAreRegistered || processWouldExit;
      if (!caughtFirstError) {
        firstError = error;
        caughtFirstError = true;
        if (getClient() === client) {
          captureException(error, {
            originalException: error,
            captureContext: {
              level: "fatal"
            },
            mechanism: {
              handled: false,
              type: "auto.node.onuncaughtexception"
            }
          });
        }
        if (!calledFatalError && shouldApplyFatalHandlingLogic) {
          calledFatalError = true;
          onFatalError(error);
        }
      } else {
        if (shouldApplyFatalHandlingLogic) {
          if (calledFatalError) {
            DEBUG_BUILD && debug.warn(
              "uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown"
            );
            logAndExitProcess(error);
          } else if (!caughtSecondError) {
            caughtSecondError = true;
            setTimeout(() => {
              if (!calledFatalError) {
                calledFatalError = true;
                onFatalError(firstError, error);
              }
            }, timeout);
          }
        }
      }
    },
    { _errorHandler: true }
  );
}

export { makeErrorHandler, onUncaughtExceptionIntegration };
//# sourceMappingURL=onuncaughtexception.js.map
