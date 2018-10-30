"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var bunyan_sentry_stream_1 = __importDefault(require("bunyan-sentry-stream"));
var raven_1 = __importDefault(require("raven"));
module.exports = function (app) {
    // If sentry is configured, report all logged errors
    if (process.env.SENTRY_DSN) {
        app.log.debug(process.env.SENTRY_DSN, 'Errors will be reported to Sentry');
        raven_1.default.disableConsoleAlerts();
        raven_1.default.config(process.env.SENTRY_DSN, {
            autoBreadcrumbs: true
        }).install();
        app.log.target.addStream(bunyan_sentry_stream_1.default(raven_1.default));
    }
};
//# sourceMappingURL=sentry.js.map