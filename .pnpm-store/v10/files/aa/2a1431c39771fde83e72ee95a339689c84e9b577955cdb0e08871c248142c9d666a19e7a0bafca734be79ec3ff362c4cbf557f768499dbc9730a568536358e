"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ensure the stack trace lines numbers are correct on errors
require('source-map-support').install();
var api_compatibility_1 = require("./api_compatibility");
var mocktracer_implemenation_1 = require("./mocktracer_implemenation");
var noop_implementation_1 = require("./noop_implementation");
var opentracing_api_1 = require("./opentracing_api");
var index_js_1 = require("../index.js");
mocktracer_implemenation_1.default();
api_compatibility_1.default(function () { return new index_js_1.MockTracer(); }, { skipInjectExtractChecks: true, skipBaggageChecks: true });
// Run the tests on the default OpenTracing no-op Tracer.
noop_implementation_1.default();
// Run the api conformance tests on the default Opentracing no-op Tracer.
api_compatibility_1.default(function () { return new index_js_1.Tracer(); }, { skipBaggageChecks: true });
// Basic unittests for opentracing
opentracing_api_1.default();
//# sourceMappingURL=unittest.js.map