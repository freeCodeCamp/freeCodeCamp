"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bunyan_1 = __importDefault(require("bunyan"));
var bunyan_format_1 = __importDefault(require("bunyan-format"));
var supports_color_1 = __importDefault(require("supports-color"));
var serializers_1 = require("./serializers");
function toBunyanLogLevel(level) {
    switch (level) {
        case 'info':
        case 'trace':
        case 'debug':
        case 'warn':
        case 'error':
        case 'fatal':
        case undefined:
            return level;
        default:
            throw new Error('Invalid log level');
    }
}
function toBunyanFormat(format) {
    switch (format) {
        case 'short':
        case 'long':
        case 'simple':
        case 'json':
        case 'bunyan':
        case undefined:
            return format;
        default:
            throw new Error('Invalid log format');
    }
}
exports.logger = new bunyan_1.default({
    level: toBunyanLogLevel(process.env.LOG_LEVEL || 'info'),
    name: 'probot',
    serializers: serializers_1.serializers,
    stream: new bunyan_format_1.default({ outputMode: toBunyanFormat(process.env.LOG_FORMAT || 'short'), color: supports_color_1.default.stdout })
});
//# sourceMappingURL=logger.js.map