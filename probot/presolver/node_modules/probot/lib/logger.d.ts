/**
 * A logger backed by [bunyan](https://github.com/trentm/node-bunyan)
 *
 * The default log level is `info`, but you can change it by setting the
 * `LOG_LEVEL` environment variable to `trace`, `debug`, `info`, `warn`,
 * `error`, or `fatal`.
 *
 * By default, logs are formatted for readability in development. If you intend
 * to drain logs to a logging service, set `LOG_FORMAT=json`.
 *
 * **Note**: All execptions reported with `logger.error` will be forwarded to
 * [sentry](https://github.com/getsentry/sentry) if the `SENTRY_DSN` environment
 * variable is set.
 *
 * ```js
 * app.log("This is an info message");
 * app.log.debug("…so is this");
 * app.log.trace("Now we're talking");
 * app.log.info("I thought you should know…");
 * app.log.warn("Woah there");
 * app.log.error("ETOOMANYLOGS");
 * app.log.fatal("Goodbye, cruel world!");
 * ```
 */
import Logger from 'bunyan';
export declare const logger: Logger;
