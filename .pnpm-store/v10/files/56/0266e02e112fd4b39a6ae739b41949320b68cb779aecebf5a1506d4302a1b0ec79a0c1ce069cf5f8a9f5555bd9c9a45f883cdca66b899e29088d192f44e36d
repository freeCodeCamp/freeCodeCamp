Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const common = require('./common.js');

function instrumentNodeCron(lib, monitorConfig = {}) {
  return new Proxy(lib, {
    get(target, prop) {
      if (prop === "schedule" && target.schedule) {
        return new Proxy(target.schedule, {
          apply(target2, thisArg, argArray) {
            const [expression, callback, options] = argArray;
            const name = options?.name;
            const timezone = options?.timezone;
            if (!name) {
              throw new Error('Missing "name" for scheduled job. A name is required for Sentry check-in monitoring.');
            }
            const monitoredCallback = async (...args) => {
              return core.withMonitor(
                name,
                async () => {
                  try {
                    return await callback(...args);
                  } catch (e) {
                    core.captureException(e, {
                      mechanism: {
                        handled: false,
                        type: "auto.function.node-cron.instrumentNodeCron"
                      }
                    });
                    throw e;
                  }
                },
                {
                  schedule: { type: "crontab", value: common.replaceCronNames(expression) },
                  timezone,
                  ...monitorConfig
                }
              );
            };
            return target2.apply(thisArg, [expression, monitoredCallback, options]);
          }
        });
      } else {
        return target[prop];
      }
    }
  });
}

exports.instrumentNodeCron = instrumentNodeCron;
//# sourceMappingURL=node-cron.js.map
