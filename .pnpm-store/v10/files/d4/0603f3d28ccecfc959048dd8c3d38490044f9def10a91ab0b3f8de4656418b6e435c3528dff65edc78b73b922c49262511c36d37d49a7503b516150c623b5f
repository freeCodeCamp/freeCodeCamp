"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
console.log('\nRunning demo...\n');
var tracer = new index_1.MockTracer();
console.log('Starting parent.');
var parent = tracer.startSpan('parent_span');
parent.setTag('custom', 'tag value');
parent.setTag('alpha', '1000');
console.log('Waiting to start child...');
setTimeout(function () {
    console.log('Starting child span.');
    var child = tracer.startSpan('child_span', { childOf: parent });
    child.setTag('alpha', '200');
    child.setTag('beta', '50');
    child.log({ state: 'waiting' });
    console.log('Waiting...');
    setTimeout(function () {
        console.log('Finishing child and parent.');
        child.log({ state: 'done' });
        child.finish();
        parent.finish();
        // Print some information about the two spans. Note the `report` method
        // is specific to the MockTracer implementation and is not part of the
        // OpenTracing API.
        console.log('\nSpans:');
        var report = tracer.report();
        for (var _i = 0, _a = report.spans; _i < _a.length; _i++) {
            var span = _a[_i];
            var tags = span.tags();
            var tagKeys = Object.keys(tags);
            console.log("    " + span.operationName() + " - " + span.durationMs() + "ms");
            for (var _b = 0, tagKeys_1 = tagKeys; _b < tagKeys_1.length; _b++) {
                var key = tagKeys_1[_b];
                var value = tags[key];
                console.log("        tag '" + key + "':'" + value + "'");
            }
        }
    }, 500);
}, 1000);
//# sourceMappingURL=demo.js.map