
import { expect } from 'chai';
import {MockTracer } from '../index';

function mockTracerimplementationTests(): void {

    describe('Mock Tracer API tests', () => {

        describe ('Tracer#report', () => {

            it ('should not throw exceptions when running report', () => {
                const tracer = new MockTracer();
                const span = tracer.startSpan('test_operation');
                span.addTags ({key: 'value'});
                span.finish ();
                expect (() => {
                    const report = tracer.report();
                    for (const span of report.spans) {
                        span.tags();
                    }
                }).to.not.throw (Error);
            });
        });
    });
}

export default mockTracerimplementationTests;
