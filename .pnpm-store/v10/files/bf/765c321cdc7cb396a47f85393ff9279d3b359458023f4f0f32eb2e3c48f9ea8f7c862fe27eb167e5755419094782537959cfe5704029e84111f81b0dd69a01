
import { assert, expect } from 'chai';
import { BinaryCarrier, FORMAT_BINARY, FORMAT_TEXT_MAP, Reference, REFERENCE_CHILD_OF, Span, Tracer } from '../index';

export interface ApiCompatibilityChecksOptions {
    /** a boolean that controls whether or not to verify certain API functionality */
    skipBaggageChecks?: boolean;
    skipInjectExtractChecks?: boolean;
}

/**
 * A function that takes a tracer factory, and tests wheter the initialized tracer
 * fulfills Opentracing's api requirements.
 *
 * @param {object} createTracer - a factory function that allocates a tracer.
 * @param {object} [options] - the options to be set on api compatibility
 */
function apiCompatibilityChecks(createTracer = () => new Tracer(), options: ApiCompatibilityChecksOptions = {skipBaggageChecks: false, skipInjectExtractChecks: false}): void {

    describe('OpenTracing API Compatibility', () => {
        let tracer: Tracer;
        let span: Span;

        beforeEach(() => {
            tracer = createTracer();
            span = tracer.startSpan('test-span');
        });

        describe('Tracer', () => {

            describe('startSpan', () => {
                it('should handle Spans and SpanContexts', () => {
                    expect(() => { tracer.startSpan('child', { childOf : span }); }).to.not.throw(Error);
                    expect(() => { tracer.startSpan('child', { childOf : span.context() }); }).to.not.throw(Error);
                });
            });

            describe('inject', () => {
                (options.skipInjectExtractChecks ? it.skip : it)('should not throw exception on required carrier types', () => {
                    const spanContext = span.context();
                    const textCarrier = {};
                    const binCarrier = new BinaryCarrier([1, 2, 3]);
                    expect(() => { tracer.inject(spanContext, FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
                    expect(() => { tracer.inject(spanContext, FORMAT_BINARY, binCarrier); }).to.not.throw(Error);
                    expect(() => { tracer.inject(spanContext, FORMAT_BINARY, {}); }).to.not.throw(Error);
                });

                (options.skipInjectExtractChecks ? it.skip : it)('should handle Spans and SpanContexts',  () => {
                    const textCarrier = {};
                    expect(() => { tracer.inject(span, FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
                    expect(() => { tracer.inject(span.context(), FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
                });
            });

            describe('extract', () => {
                (options.skipInjectExtractChecks ? it.skip : it)('should not throw exception on required carrier types', () => {
                    const textCarrier = {};
                    const binCarrier = new BinaryCarrier([1, 2, 3]);
                    expect(() => { tracer.extract(FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
                    expect(() => { tracer.extract(FORMAT_BINARY, binCarrier); }).to.not.throw(Error);
                    expect(() => { tracer.extract(FORMAT_BINARY, {}); }).to.not.throw(Error);
                    expect(() => { tracer.extract(FORMAT_BINARY, { buffer : null }); }).to.not.throw(Error);
                });
            });
        });

        describe('Span', () => {

            (options.skipBaggageChecks ? it.skip : it)('should set baggage and retrieve baggage', () => {
                span.setBaggageItem('some-key', 'some-value');
                const val = span.getBaggageItem('some-key');
                assert.equal('some-value', val);
            });

            describe('finish', () => {
                it('should not throw exceptions on valid arguments', () => {
                    span = tracer.startSpan('test-span');
                    expect(() => span.finish(Date.now())).to.not.throw(Error);
                });
            });
        });

        describe('Reference', () => {
            it('should handle Spans and span.context()', () => {
                expect(() => new Reference(REFERENCE_CHILD_OF, span)).to.not.throw(Error);
                expect(() => new Reference(REFERENCE_CHILD_OF, span.context())).to.not.throw(Error);
            });
        });

        describe('SpanContext', () => {
            describe('toTraceId', () => {
                it('should return a string', () => {
                    span = tracer.startSpan('test-span');
                    console.log(span.context().toTraceId());
                    expect(() => span.context().toTraceId()).to.not.throw(Error);
                    expect(span.context().toTraceId()).to.be.a('string');
                });
            });

            describe('toSpanId', () => {
                it('should return a string', () => {
                    span = tracer.startSpan('test-span');
                    expect(() => span.context().toSpanId()).to.not.throw(Error);
                    expect(span.context().toSpanId()).to.be.a('string');
                });
            });
        });
    });
}

export default apiCompatibilityChecks;
