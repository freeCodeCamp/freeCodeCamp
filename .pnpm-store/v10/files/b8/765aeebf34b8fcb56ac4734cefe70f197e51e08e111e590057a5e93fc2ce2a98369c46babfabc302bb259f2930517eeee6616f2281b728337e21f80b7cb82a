"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
function mockTracerimplementationTests() {
    describe('Mock Tracer API tests', function () {
        describe('Tracer#report', function () {
            it('should not throw exceptions when running report', function () {
                var tracer = new index_1.MockTracer();
                var span = tracer.startSpan('test_operation');
                span.addTags({ key: 'value' });
                span.finish();
                chai_1.expect(function () {
                    var report = tracer.report();
                    for (var _i = 0, _a = report.spans; _i < _a.length; _i++) {
                        var span_1 = _a[_i];
                        span_1.tags();
                    }
                }).to.not.throw(Error);
            });
        });
    });
}
exports.default = mockTracerimplementationTests;
//# sourceMappingURL=mocktracer_implemenation.js.map