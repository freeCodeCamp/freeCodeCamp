import { withMonitor } from '@sentry/core';
import { replaceCronNames } from './common.js';

function instrumentNodeSchedule(lib) {
  return new Proxy(lib, {
    get(target, prop) {
      if (prop === "scheduleJob") {
        return new Proxy(target.scheduleJob, {
          apply(target2, thisArg, argArray) {
            const [nameOrExpression, expressionOrCallback, callback] = argArray;
            if (typeof nameOrExpression !== "string" || typeof expressionOrCallback !== "string" || typeof callback !== "function") {
              throw new Error(
                "Automatic instrumentation of 'node-schedule' requires the first parameter of 'scheduleJob' to be a job name string and the second parameter to be a crontab string"
              );
            }
            const monitorSlug = nameOrExpression;
            const expression = expressionOrCallback;
            async function monitoredCallback() {
              return withMonitor(
                monitorSlug,
                async () => {
                  await callback?.();
                },
                {
                  schedule: { type: "crontab", value: replaceCronNames(expression) }
                }
              );
            }
            return target2.apply(thisArg, [monitorSlug, expression, monitoredCallback]);
          }
        });
      }
      return target[prop];
    }
  });
}

export { instrumentNodeSchedule };
//# sourceMappingURL=node-schedule.js.map
