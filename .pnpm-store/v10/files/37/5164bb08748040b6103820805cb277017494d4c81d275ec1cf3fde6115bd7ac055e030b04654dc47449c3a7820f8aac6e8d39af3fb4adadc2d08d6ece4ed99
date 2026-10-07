
import { expect } from 'chai';
import { FORMAT_TEXT_MAP, initGlobalTracer, Tracer } from '../index';

export function noopImplementationTests(createTracer = () => new Tracer()): void {

    describe('Noop Tracer Implementation', () => {
        describe('Tracer#inject', () => {

            it('should handle Spans and SpanContexts', () => {
                const tracer = createTracer();
                const span = tracer.startSpan('test_operation');
                const textCarrier = {};
                expect(() => { tracer.inject(span, FORMAT_TEXT_MAP, textCarrier); }).to.not.throw(Error);
            });
        });

        describe('Span#finish', () => {
            it('should return undefined', () => {
                const tracer = createTracer();
                const span = tracer.startSpan('test_span');
                expect(span.finish()).to.be.undefined;
            });
        });

        describe('Miscellaneous', () => {
            describe('Memory usage', () => {
                it('should not report leaks after setting the global tracer', () => {
                    initGlobalTracer(createTracer());
                });
            });
        });
    });
}

export default noopImplementationTests;
