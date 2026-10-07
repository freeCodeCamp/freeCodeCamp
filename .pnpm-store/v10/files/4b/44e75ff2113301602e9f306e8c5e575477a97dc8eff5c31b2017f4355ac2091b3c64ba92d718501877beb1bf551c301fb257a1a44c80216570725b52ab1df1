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
var span_context_1 = require("../span_context");
/**
 * OpenTracing Context implementation designed for use in
 * unit tests.
 */
var MockContext = /** @class */ (function (_super) {
    __extends(MockContext, _super);
    function MockContext(span) {
        var _this = _super.call(this) || this;
        // Store a reference to the span itself since this is a mock tracer
        // intended to make debugging and unit testing easier.
        _this._span = span;
        return _this;
    }
    MockContext.prototype.span = function () {
        return this._span;
    };
    return MockContext;
}(span_context_1.SpanContext));
exports.MockContext = MockContext;
exports.default = MockContext;
//# sourceMappingURL=mock_context.js.map