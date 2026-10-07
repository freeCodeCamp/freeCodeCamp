"use strict";
/* eslint-disable max-classes-per-file */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_error_1 = require("../core/api_error");
var file_system_1 = require("../core/file_system");
var WebsocketFS = /** @class */ (function (_super) {
    __extends(WebsocketFS, _super);
    function WebsocketFS(options) {
        var _this = _super.call(this) || this;
        _this.socket = options.socket;
        return _this;
    }
    WebsocketFS.Create = function (options, cb) {
        cb(null, new WebsocketFS(options));
    };
    WebsocketFS.isAvailable = function () {
        return true;
    };
    WebsocketFS.prototype.getName = function () {
        return "WebsocketFS";
    };
    WebsocketFS.prototype.isReadOnly = function () {
        return false;
    };
    WebsocketFS.prototype.supportsProps = function () {
        return false;
    };
    WebsocketFS.prototype.supportsSynch = function () {
        return true;
    };
    WebsocketFS.prototype.readFile = function (fname, encoding, flag, cb) {
        try {
            this.socket.emit({
                method: 'readFile',
                args: {
                    path: fname,
                    encoding: encoding,
                    flag: flag
                }
            }, function (_a) {
                var error = _a.error, data = _a.data;
                if (data) {
                    cb(null, Buffer.from(data));
                }
                else {
                    cb(error);
                }
            });
        }
        catch (e) {
            cb(e);
        }
    };
    WebsocketFS.prototype.stat = function (p, isLstat, cb) {
        try {
            this.socket.emit({
                method: 'stat',
                args: {
                    path: p,
                    isLstat: isLstat
                }
            }, function (_a) {
                var error = _a.error, data = _a.data;
                if (data) {
                    cb(null, __assign(__assign({}, data), { atime: new Date(data.atime), mtime: new Date(data.mtime), ctime: new Date(data.ctime), birthtime: new Date(data.birthtime) }));
                }
                else {
                    cb(error);
                }
            });
        }
        catch (e) {
            cb(e);
        }
    };
    WebsocketFS.Name = "WebsocketFS";
    WebsocketFS.Options = {
        socket: {
            type: "object",
            description: "The socket emitter",
            validator: function (opt, cb) {
                if (opt) {
                    cb();
                }
                else {
                    cb(new api_error_1.ApiError(api_error_1.ErrorCode.EINVAL, "Manager is invalid"));
                }
            }
        }
    };
    return WebsocketFS;
}(file_system_1.SynchronousFileSystem));
exports.default = WebsocketFS;
/*
this.statSync(p, isLstat || true)
*/ 