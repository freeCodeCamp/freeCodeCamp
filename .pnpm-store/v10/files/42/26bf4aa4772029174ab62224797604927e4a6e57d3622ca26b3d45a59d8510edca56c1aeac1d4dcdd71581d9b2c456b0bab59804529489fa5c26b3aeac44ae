"use strict";
/* eslint-disable import/no-extraneous-dependencies */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var opentracing = require("../index");
var mock_context_1 = require("./mock_context");
/**
 * OpenTracing Span implementation designed for use in unit tests.
 */
var MockSpan = /** @class */ (function (_super) {
    __extends(MockSpan, _super);
    //------------------------------------------------------------------------//
    // MockSpan-specific
    //------------------------------------------------------------------------//
    function MockSpan(tracer) {
        var _this = _super.call(this) || this;
        _this._mockTracer = tracer;
        _this._uuid = _this._generateUUID();
        _this._startMs = Date.now();
        _this._finishMs = 0;
        _this._operationName = '';
        _this._tags = {};
        _this._logs = [];
        return _this;
    }
    //------------------------------------------------------------------------//
    // OpenTracing implementation
    //------------------------------------------------------------------------//
    MockSpan.prototype._context = function () {
        return new mock_context_1.default(this);
    };
    MockSpan.prototype._setOperationName = function (name) {
        this._operationName = name;
    };
    MockSpan.prototype._addTags = function (set) {
        var keys = Object.keys(set);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this._tags[key] = set[key];
        }
    };
    MockSpan.prototype._log = function (fields, timestamp) {
        this._logs.push({
            fields: fields,
            timestamp: timestamp
        });
    };
    MockSpan.prototype._finish = function (finishTime) {
        this._finishMs = finishTime || Date.now();
    };
    MockSpan.prototype.uuid = function () {
        return this._uuid;
    };
    MockSpan.prototype.operationName = function () {
        return this._operationName;
    };
    MockSpan.prototype.durationMs = function () {
        return this._finishMs - this._startMs;
    };
    MockSpan.prototype.tags = function () {
        return this._tags;
    };
    MockSpan.prototype.tracer = function () {
        return this._mockTracer;
    };
    MockSpan.prototype._generateUUID = function () {
        var p0 = ("00000000" + Math.abs((Math.random() * 0xFFFFFFFF) | 0).toString(16)).substr(-8);
        var p1 = ("00000000" + Math.abs((Math.random() * 0xFFFFFFFF) | 0).toString(16)).substr(-8);
        return "" + p0 + p1;
    };
    MockSpan.prototype.addReference = function (ref) {
    };
    /**
     * Returns a simplified object better for console.log()'ing.
     */
    MockSpan.prototype.debug = function () {
        var obj = {
            uuid: this._uuid,
            operation: this._operationName,
            millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
        };
        if (Object.keys(this._tags).length) {
            obj.tags = this._tags;
        }
        return obj;
    };
    return MockSpan;
}(opentracing.Span));
exports.MockSpan = MockSpan;
exports.default = MockSpan;
//# sourceMappingURL=mock_span.js.map