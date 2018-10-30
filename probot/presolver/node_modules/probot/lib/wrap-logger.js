"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Return a function that defaults to "info" level, and has properties for
// other levels:
//
//     app.log("info")
//     app.log.trace("verbose details");
//
exports.wrapLogger = function (logger, baseLogger) {
    var fn = logger.info.bind(logger);
    // Add level methods on the logger
    fn.trace = logger.trace.bind(logger);
    fn.debug = logger.debug.bind(logger);
    fn.info = logger.info.bind(logger);
    fn.warn = logger.warn.bind(logger);
    fn.error = logger.error.bind(logger);
    fn.fatal = logger.fatal.bind(logger);
    // Expose `child` method for creating new wrapped loggers
    fn.child = function (attrs) {
        // Bunyan doesn't allow you to overwrite name…
        var name = attrs.name;
        delete attrs.name;
        var log = logger.child(attrs, true);
        // …Sorry, bunyan, doing it anwyway
        if (name) {
            log.fields.name = name;
        }
        return exports.wrapLogger(log, baseLogger || logger);
    };
    // Expose target logger
    fn.target = baseLogger || logger;
    return fn;
};
//# sourceMappingURL=wrap-logger.js.map