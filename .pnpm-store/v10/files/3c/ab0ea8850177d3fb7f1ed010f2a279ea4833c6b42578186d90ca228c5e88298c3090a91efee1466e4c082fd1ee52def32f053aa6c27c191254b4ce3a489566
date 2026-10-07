"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectingHandler = void 0;
var MultiplexHandler_1 = __importDefault(require("./MultiplexHandler"));
var CollectingHandler = /** @class */ (function (_super) {
    __extends(CollectingHandler, _super);
    function CollectingHandler(cbs) {
        if (cbs === void 0) { cbs = {}; }
        var _this = _super.call(this, function (name) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            _this.events.push(__spreadArray([name], args));
            (_a = _this.cbs[name]) === null || _a === void 0 ? void 0 : _a.apply(void 0, args);
        }) || this;
        _this.cbs = cbs;
        _this.events = [];
        return _this;
    }
    CollectingHandler.prototype.onreset = function () {
        var _a, _b;
        this.events = [];
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    CollectingHandler.prototype.restart = function () {
        var _a, _b, _c;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        for (var _i = 0, _d = this.events; _i < _d.length; _i++) {
            var _e = _d[_i], name_1 = _e[0], args = _e.slice(1);
            (_c = this.cbs[name_1]) === null || _c === void 0 ? void 0 : _c.apply(void 0, args);
        }
    };
    return CollectingHandler;
}(MultiplexHandler_1.default));
exports.CollectingHandler = CollectingHandler;
