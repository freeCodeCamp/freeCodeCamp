"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polling_1 = require("./polling");
const polling_jsonp_1 = require("./polling-jsonp");
const websocket_1 = require("./websocket");
const webtransport_1 = require("./webtransport");
exports.default = {
    polling,
    websocket: websocket_1.WebSocket,
    webtransport: webtransport_1.WebTransport,
};
/**
 * Polling polymorphic constructor.
 */
function polling(req) {
    if ("string" === typeof req._query.j) {
        return new polling_jsonp_1.JSONP(req);
    }
    else {
        return new polling_1.Polling(req);
    }
}
polling.upgradesTo = ["websocket", "webtransport"];
