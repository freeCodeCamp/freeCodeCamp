"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
function noopImplementationTests(createTracer) {
    if (createTracer === void 0) { createTracer = function () { return new index_1.Tracer(); }; }
    describe('Noop Tracer Implementation', function () {
        describe('Tracer#inject', function () {
            it('should handle Spans and SpanContexts', function () {
                var tracer = createTracer();
                var span = tracer.startSpan('test_operation');
                var textCarrier = {};
                chai_1.expect(function () { tracer.inject(span, index_1.FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
            });
        });
        describe('Span#finish', function () {
            it('should return undefined', function () {
                var tracer = createTracer();
                var span = tracer.startSpan('test_span');
                chai_1.expect(span.finish()).to.be.undefined;
            });
        });
        describe('Miscellaneous', function () {
            describe('Memory usage', function () {
                it('should not report leaks after setting the global tracer', function () {
                    index_1.initGlobalTracer(createTracer());
                });
            });
        });
    });
}
exports.noopImplementationTests = noopImplementationTests;
exports.default = noopImplementationTests;
//# sourceMappingURL=noop_implementation.js.map