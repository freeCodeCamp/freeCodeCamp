"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bunyan_1 = __importDefault(require("bunyan"));
exports.Logger = bunyan_1.default;
function addLogging(client, logger) {
    if (!logger) {
        return;
    }
    client.hook.error('request', function (error, options) {
        var method = options.method, url = options.url, headers = options.headers, params = __rest(options, ["method", "url", "headers"]);
        var msg = "GitHub request: " + method + " " + url + " - " + error.code + " " + error.status;
        logger.debug({ params: params }, msg);
        throw error;
    });
    client.hook.after('request', function (result, options) {
        var method = options.method, url = options.url, headers = options.headers, params = __rest(options, ["method", "url", "headers"]);
        var msg = "GitHub request: " + method + " " + url + " - " + result.headers.status;
        logger.debug({ params: params }, msg);
    });
}
exports.addLogging = addLogging;
//# sourceMappingURL=logging.js.map