Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const common = require('./common.js');

const ERROR_TEXT = "Automatic instrumentation of CronJob only supports crontab string";
function instrumentCron(lib, monitorSlug) {
  let jobScheduled = false;
  return new Proxy(lib, {
    construct(target, args) {
      const [cronTime, onTick, onComplete, start, timeZone, ...rest] = args;
      if (typeof cronTime !== "string") {
        throw new Error(ERROR_TEXT);
      }
      if (jobScheduled) {
        throw new Error(`A job named '${monitorSlug}' has already been scheduled`);
      }
      jobScheduled = true;
      const cronString = common.replaceCronNames(cronTime);
      async function monitoredTick(context, onComplete2) {
        return core.withMonitor(
          monitorSlug,
          async () => {
            try {
              await onTick(context, onComplete2);
            } catch (e) {
              core.captureException(e, {
                mechanism: {
                  handled: false,
                  type: "auto.function.cron.instrumentCron"
                }
              });
              throw e;
            }
          },
          {
            schedule: { type: "crontab", value: cronString },
            timezone: timeZone || void 0
          }
        );
      }
      return new target(cronTime, monitoredTick, onComplete, start, timeZone, ...rest);
    },
    get(target, prop) {
      if (prop === "from") {
        return (param) => {
          const { cronTime, onTick, timeZone } = param;
          if (typeof cronTime !== "string") {
            throw new Error(ERROR_TEXT);
          }
          if (jobScheduled) {
            throw new Error(`A job named '${monitorSlug}' has already been scheduled`);
          }
          jobScheduled = true;
          const cronString = common.replaceCronNames(cronTime);
          param.onTick = async (context, onComplete) => {
            return core.withMonitor(
              monitorSlug,
              async () => {
                try {
                  await onTick(context, onComplete);
                } catch (e) {
                  core.captureException(e, {
                    mechanism: {
                      handled: false,
                      type: "auto.function.cron.instrumentCron"
                    }
                  });
                  throw e;
                }
              },
              {
                schedule: { type: "crontab", value: cronString },
                timezone: timeZone || void 0
              }
            );
          };
          return target.from(param);
        };
      } else {
        return target[prop];
      }
    }
  });
}

exports.instrumentCron = instrumentCron;
//# sourceMappingURL=cron.js.map
