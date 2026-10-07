
import { expect } from 'chai';
import * as opentracing from '../index';

export function opentracingAPITests(): void {
    describe('Opentracing API', () => {
        let tracer: opentracing.Tracer;
        let span: opentracing.Span;
        beforeEach(() => {
            tracer = new opentracing.Tracer();
            span = tracer.startSpan('test-span');
        });

        describe('Constants', () => {
            const constStrings: (keyof typeof opentracing)[] = [
                'FORMAT_TEXT_MAP',
                'FORMAT_BINARY',
                'FORMAT_HTTP_HEADERS',
                'REFERENCE_CHILD_OF',
                'REFERENCE_FOLLOWS_FROM'
            ];
            for (const name of constStrings) {
                it(name + ' should be a constant string', () => {
                    expect(opentracing[name]).to.be.a('string');
                });
            }
        });

        describe('Standalone functions', () => {
            const funcs: (keyof typeof opentracing)[] = [
                'childOf',
                'followsFrom',
                'initGlobalTracer',
                'globalTracer'
            ];
            for (const name of funcs) {
                it(name + ' should be a function', () => {
                    expect(opentracing[name]).to.be.a('function');
                });
            }

            describe('global tracer', () => {
                const dummySpan = new opentracing.Span();

                afterEach(() => {
                  opentracing.initGlobalTracer(new opentracing.Tracer());
                });

                it('should use the global tracer', () => {
                    opentracing.initGlobalTracer(new TestTracer());
                    const tracer = opentracing.globalTracer();
                    const span = tracer.startSpan('test');
                    expect(span).to.equal(dummySpan);
                });

                class TestTracer extends opentracing.Tracer {
                  protected _startSpan(name: string, fields: opentracing.SpanOptions): opentracing.Span {
                      return dummySpan;
                  }
                }
            });
        });

        describe('Tracer', () => {
            it('should be a class', () => {
                expect(new opentracing.Tracer()).to.be.an('object');
            });
        });

        describe('Span', () => {
            it('should be a class', () => {
                expect(span).to.be.an('object');
            });
        });

        describe('SpanContext', () => {
            it('should be a class', () => {
                const spanContext = span.context();
                expect(spanContext).to.be.an('object');
            });
        });

        describe('Reference', () => {
            it('should be a class', () => {
                const ref = new opentracing.Reference(opentracing.REFERENCE_CHILD_OF, span.context());
                expect(ref).to.be.an('object');
            });
        });

        describe('BinaryCarrier', () => {
            it('should set binary data as a field called "buffer"', () => {
                const buffer = new Float64Array(10);
                const ref = new opentracing.BinaryCarrier(buffer);
                expect(ref.buffer).to.equal(buffer);
            });
        });
    });
}

export default opentracingAPITests;
