"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Borrowed from https://github.com/vvo/bunyan-request
// Copyright (c) Christian Tellnes <christian@tellnes.no>
// tslint:disable
var wrap_logger_1 = require("../wrap-logger");
var uuid_1 = __importDefault(require("uuid"));
exports.logRequest = function (_a) {
    var logger = _a.logger;
    return function (req, res, next) {
        // Use X-Request-ID from request if it is set, otherwise generate a uuid
        req.id = req.headers['x-request-id'] ||
            req.headers['x-github-delivery'] ||
            uuid_1.default.v4();
        res.setHeader('x-request-id', req.id);
        // Make a logger available on the request
        req.log = wrap_logger_1.wrapLogger(logger, logger.target).child({ name: 'http', id: req.id });
        // Request started
        req.log.trace({ req: req }, req.method + " " + req.url);
        // Start the request timer
        var time = process.hrtime();
        res.on('finish', function () {
            // Calculate how long the request took
            var _a = process.hrtime(time), seconds = _a[0], nanoseconds = _a[1];
            res.duration = (seconds * 1e3 + nanoseconds * 1e-6).toFixed(2);
            var message = req.method + " " + req.url + " " + res.statusCode + " - " + res.duration + " ms";
            if (req.log) {
                req.log.info(message);
                req.log.trace({ res: res });
            }
        });
        next();
    };
};
//# sourceMappingURL=logging.js.map