"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var span_1 = require("./span");
var span_context_1 = require("./span_context");
var tracer_1 = require("./tracer");
exports.tracer = null;
exports.spanContext = null;
exports.span = null;
// Deferred initialization to avoid a dependency cycle where Tracer depends on
// Span which depends on the noop tracer.
function initialize() {
    exports.tracer = new tracer_1.default();
    exports.span = new span_1.default();
    exports.spanContext = new span_context_1.default();
}
exports.initialize = initialize;
//# sourceMappingURL=noop.js.map