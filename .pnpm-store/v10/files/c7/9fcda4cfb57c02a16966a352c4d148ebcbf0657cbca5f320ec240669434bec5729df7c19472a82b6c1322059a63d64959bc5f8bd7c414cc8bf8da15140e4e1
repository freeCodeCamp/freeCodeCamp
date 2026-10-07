// Ensure the stack trace lines numbers are correct on errors
require('source-map-support').install();

import apiCompatibilityChecks from './api_compatibility';
import mocktracerImplementationTests from './mocktracer_implemenation';
import noopImplementationTests from './noop_implementation';
import opentracingAPITests from './opentracing_api';

import {MockTracer, Tracer} from '../index.js';

mocktracerImplementationTests ();

apiCompatibilityChecks( () =>  new MockTracer (), {skipInjectExtractChecks: true, skipBaggageChecks: true} );

// Run the tests on the default OpenTracing no-op Tracer.
noopImplementationTests();

// Run the api conformance tests on the default Opentracing no-op Tracer.
apiCompatibilityChecks( () => new Tracer (), {skipBaggageChecks: true});

// Basic unittests for opentracing
opentracingAPITests();
