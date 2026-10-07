"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
/**
 * A function that takes a tracer factory, and tests wheter the initialized tracer
 * fulfills Opentracing's api requirements.
 *
 * @param {object} createTracer - a factory function that allocates a tracer.
 * @param {object} [options] - the options to be set on api compatibility
 */
function apiCompatibilityChecks(createTracer, options) {
    if (createTracer === void 0) { createTracer = function () { return new index_1.Tracer(); }; }
    if (options === void 0) { options = { skipBaggageChecks: false, skipInjectExtractChecks: false }; }
    describe('OpenTracing API Compatibility', function () {
        var tracer;
        var span;
        beforeEach(function () {
            tracer = createTracer();
            span = tracer.startSpan('test-span');
        });
        describe('Tracer', function () {
            describe('startSpan', function () {
                it('should handle Spans and SpanContexts', function () {
                    chai_1.expect(function () { tracer.startSpan('child', { childOf: span }); }).to.not.throw(Error);
                    chai_1.expect(function () { tracer.startSpan('child', { childOf: span.context() }); }).to.not.throw(Error);
                });
            });
            describe('inject', function () {
                (options.skipInjectExtractChecks ? it.skip : it)('should not throw exception on required carrier types', function () {
                    var spanContext = span.context();
                    var textCarrier = {};
                    var binCarrier = new index_1.BinaryCarrier([1, 2, 3]);
                    chai_1.expect(function () { tracer.inject(spanContext, index_1.FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
                    chai_1.expect(function () { tracer.inject(spanContext, index_1.FORMAT_BINARY, binCarrier); }).to.not.throw(Error);
                    chai_1.expect(function () { tracer.inject(spanContext, index_1.FORMAT_BINARY, {}); }).to.not.throw(Error);
                });
                (options.skipInjectExtractChecks ? it.skip : it)('should handle Spans and SpanContexts', function () {
                    var textCarrier = {};
                    chai_1.expect(function () { tracer.inject(span, index_1.FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
                    chai_1.expect(function () { tracer.inject(span.context(), index_1.FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
                });
            });
            describe('extract', function () {
                (options.skipInjectExtractChecks ? it.skip : it)('should not throw exception on required carrier types', function () {
                    var textCarrier = {};
                    var binCarrier = new index_1.BinaryCarrier([1, 2, 3]);
                    chai_1.expect(function () { tracer.extract(index_1.FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
                    chai_1.expect(function () { tracer.extract(index_1.FORMAT_BINARY, binCarrier); }).to.not.throw(Error);
                    chai_1.expect(function () { tracer.extract(index_1.FORMAT_BINARY, {}); }).to.not.throw(Error);
                    chai_1.expect(function () { tracer.extract(index_1.FORMAT_BINARY, { buffer: null }); }).to.not.throw(Error);
                });
            });
        });
        describe('Span', function () {
            (options.skipBaggageChecks ? it.skip : it)('should set baggage and retrieve baggage', function () {
                span.setBaggageItem('some-key', 'some-value');
                var val = span.getBaggageItem('some-key');
                chai_1.assert.equal('some-value', val);
            });
            describe('finish', function () {
                it('should not throw exceptions on valid arguments', function () {
                    span = tracer.startSpan('test-span');
                    chai_1.expect(function () { return span.finish(Date.now()); }).to.not.throw(Error);
                });
            });
        });
        describe('Reference', function () {
            it('should handle Spans and span.context()', function () {
                chai_1.expect(function () { return new index_1.Reference(index_1.REFERENCE_CHILD_OF, span); }).to.not.throw(Error);
                chai_1.expect(function () { return new index_1.Reference(index_1.REFERENCE_CHILD_OF, span.context()); }).to.not.throw(Error);
            });
        });
        describe('SpanContext', function () {
            describe('toTraceId', function () {
                it('should return a string', function () {
                    span = tracer.startSpan('test-span');
                    console.log(span.context().toTraceId());
                    chai_1.expect(function () { return span.context().toTraceId(); }).to.not.throw(Error);
                    chai_1.expect(span.context().toTraceId()).to.be.a('string');
                });
            });
            describe('toSpanId', function () {
                it('should return a string', function () {
                    span = tracer.startSpan('test-span');
                    chai_1.expect(function () { return span.context().toSpanId(); }).to.not.throw(Error);
                    chai_1.expect(span.context().toSpanId()).to.be.a('string');
                });
            });
        });
    });
}
exports.default = apiCompatibilityChecks;
//# sourceMappingURL=api_compatibility.js.map