"use strict";
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
var tracer_1 = require("./tracer");
var noopTracer = new tracer_1.default();
var _globalTracer = null;
// Allows direct importing/requiring of the global tracer:
//
// let globalTracer = require('opentracing/global');
//      OR
// import globalTracer from 'opentracing/global';
//
// Acts a bridge to the global tracer that can be safely called before the
// global tracer is initialized. The purpose of the delegation is to avoid the
// sometimes nearly intractible initialization order problems that can arise in
// applications with a complex set of dependencies, while also avoiding the
// case where
var GlobalTracerDelegate = /** @class */ (function (_super) {
    __extends(GlobalTracerDelegate, _super);
    function GlobalTracerDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalTracerDelegate.prototype.startSpan = function () {
        var tracer = _globalTracer || noopTracer;
        return tracer.startSpan.apply(tracer, arguments);
    };
    GlobalTracerDelegate.prototype.inject = function () {
        var tracer = _globalTracer || noopTracer;
        return tracer.inject.apply(tracer, arguments);
    };
    GlobalTracerDelegate.prototype.extract = function () {
        var tracer = _globalTracer || noopTracer;
        return tracer.extract.apply(tracer, arguments);
    };
    return GlobalTracerDelegate;
}(tracer_1.default));
var globalTracerDelegate = new GlobalTracerDelegate();
/**
 * Set the global Tracer.
 *
 * The behavior is undefined if this function is called more than once.
 *
 * @param {Tracer} tracer - the Tracer implementation
 */
function initGlobalTracer(tracer) {
    _globalTracer = tracer;
}
exports.initGlobalTracer = initGlobalTracer;
/**
 * Returns the global tracer.
 */
function globalTracer() {
    // Return the delegate.  Since the global tracer is largely a convenience
    // (the user can always create their own tracers), the delegate is used to
    // give the added convenience of not needing to worry about initialization
    // order.
    return globalTracerDelegate;
}
exports.globalTracer = globalTracer;
//# sourceMappingURL=global_tracer.js.map