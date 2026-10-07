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
// TODO: Move mock-tracer to its own NPM package once it is complete and tested.
var opentracing = require("../index");
var mock_report_1 = require("./mock_report");
var mock_span_1 = require("./mock_span");
/**
 * OpenTracing Tracer implementation designed for use in unit tests.
 */
var MockTracer = /** @class */ (function (_super) {
    __extends(MockTracer, _super);
    //------------------------------------------------------------------------//
    // MockTracer-specific
    //------------------------------------------------------------------------//
    function MockTracer() {
        var _this = _super.call(this) || this;
        _this._spans = [];
        return _this;
    }
    //------------------------------------------------------------------------//
    // OpenTracing implementation
    //------------------------------------------------------------------------//
    MockTracer.prototype._startSpan = function (name, fields) {
        // _allocSpan is given it's own method so that derived classes can
        // allocate any type of object they want, but not have to duplicate
        // the other common logic in startSpan().
        var span = this._allocSpan();
        span.setOperationName(name);
        this._spans.push(span);
        if (fields.references) {
            for (var _i = 0, _a = fields.references; _i < _a.length; _i++) {
                var ref = _a[_i];
                span.addReference(ref);
            }
        }
        // Capture the stack at the time the span started
        span._startStack = new Error().stack;
        return span;
    };
    MockTracer.prototype._inject = function (span, format, carrier) {
        throw new Error('NOT YET IMPLEMENTED');
    };
    MockTracer.prototype._extract = function (format, carrier) {
        throw new Error('NOT YET IMPLEMENTED');
    };
    MockTracer.prototype._allocSpan = function () {
        return new mock_span_1.default(this);
    };
    /**
     * Discard any buffered data.
     */
    MockTracer.prototype.clear = function () {
        this._spans = [];
    };
    /**
     * Return the buffered data in a format convenient for making unit test
     * assertions.
     */
    MockTracer.prototype.report = function () {
        return new mock_report_1.default(this._spans);
    };
    return MockTracer;
}(opentracing.Tracer));
exports.MockTracer = MockTracer;
exports.default = MockTracer;
//# sourceMappingURL=mock_tracer.js.map