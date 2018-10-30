"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bunyan_1 = __importDefault(require("bunyan"));
exports.serializers = {
    event: function (event) {
        if (typeof event !== 'object' || !event.payload) {
            return event;
        }
        else {
            var name = event.name;
            if (event.payload && event.payload.action) {
                name = name + "." + event.payload.action;
            }
            return {
                event: name,
                id: event.id,
                installation: event.payload.installation && event.payload.installation.id,
                repository: event.payload.repository && event.payload.repository.full_name
            };
        }
    },
    installation: function (installation) {
        if (installation.account) {
            return installation.account.login;
        }
        else {
            return installation;
        }
    },
    err: bunyan_1.default.stdSerializers.err,
    repository: function (repository) { return repository.full_name; },
    req: bunyan_1.default.stdSerializers.req,
    // Same as buyan's standard serializers, but gets headers as an object
    // instead of a string.
    // https://github.com/trentm/node-bunyan/blob/fe31b83e42d9c7f784e83fdcc528a7c76e0dacae/lib/bunyan.js#L1105-L1113
    res: function (res) {
        if (!res || !res.statusCode) {
            return res;
        }
        else {
            return {
                duration: res.duration,
                headers: res.getHeaders(),
                statusCode: res.statusCode
            };
        }
    }
};
//# sourceMappingURL=serializers.js.map