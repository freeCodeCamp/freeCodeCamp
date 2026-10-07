/**
 * Common exports shared between the main entry point (index.ts) and the light entry point (light/index.ts).
 *
 * Add exports here that should be available in both entry points. Entry-point-specific exports
 * (e.g., OTel-dependent ones for index.ts, or light-specific ones for light/index.ts) should
 * remain in their respective index files.
 *
 * Deprecated exports should NOT go in this file — they belong in the entry point that still
 * needs to ship them for backwards compatibility.
 */
import * as logger from './logs/exports';
export { nodeContextIntegration } from './integrations/context';
export { nodeRuntimeMetricsIntegration, NodeRuntimeMetricsOptions, _INTERNAL_normalizeCollectionInterval } from './integrations/nodeRuntimeMetrics';
export { contextLinesIntegration } from './integrations/contextlines';
export { localVariablesIntegration } from './integrations/local-variables';
export { modulesIntegration } from './integrations/modules';
export { onUncaughtExceptionIntegration } from './integrations/onuncaughtexception';
export { onUnhandledRejectionIntegration } from './integrations/onunhandledrejection';
export { spotlightIntegration } from './integrations/spotlight';
export { systemErrorIntegration } from './integrations/systemError';
export { childProcessIntegration } from './integrations/childProcess';
export { createSentryWinstonTransport } from './integrations/winston';
export { pinoIntegration } from './integrations/pino';
export { consoleIntegration } from './integrations/console';
export { getSentryRelease, defaultStackParser } from './sdk/api';
export { createGetModuleFromFilename } from './utils/module';
export { addOriginToSpan } from './utils/addOriginToSpan';
export { initializeEsmLoader } from './sdk/esmLoader';
export { isCjs } from './utils/detection';
export { createMissingInstrumentationContext } from './utils/createMissingInstrumentationContext';
export { makeNodeTransport, NodeTransportOptions } from './transports';
export { HTTPModuleRequestIncomingMessage } from './transports/http-module';
export { cron } from './cron';
export { NODE_VERSION } from './nodeVersion';
export { NodeOptions } from './types';
export { addBreadcrumb, isInitialized, isEnabled, getGlobalScope, lastEventId, close, createTransport, flush, SDK_VERSION, getSpanStatusFromHttpCode, setHttpStatus, captureCheckIn, withMonitor, requestDataIntegration, functionToStringIntegration, eventFiltersIntegration, linkedErrorsIntegration, addEventProcessor, setContext, setExtra, setExtras, setTag, setTags, setUser, SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, setCurrentClient, Scope, setMeasurement, getSpanDescendants, parameterize, getClient, getCurrentScope, getIsolationScope, getTraceData, getTraceMetaTags, continueTrace, withScope, withIsolationScope, captureException, captureEvent, captureMessage, captureFeedback, captureConsoleIntegration, dedupeIntegration, extraErrorDataIntegration, rewriteFramesIntegration, startSession, captureSession, endSession, addIntegration, startSpan, startSpanManual, startInactiveSpan, startNewTrace, suppressTracing, getActiveSpan, withActiveSpan, getRootSpan, spanToJSON, spanToTraceHeader, spanToBaggageHeader, trpcMiddleware, updateSpanName, supabaseIntegration, instrumentSupabaseClient, zodErrorsIntegration, profiler, consoleLoggingIntegration, createConsolaReporter, wrapMcpServerWithSentry, featureFlagsIntegration, spanStreamingIntegration, withStreamedSpan, metrics, envToBool, getRequestUrl, } from '@sentry/core';
export { Breadcrumb, BreadcrumbHint, PolymorphicRequest, RequestEventData, SdkInfo, Event, EventHint, ErrorEvent, Exception, Session, SeverityLevel, StackFrame, Stacktrace, Thread, User, Span, FeatureFlagsIntegration, } from '@sentry/core';
export { logger };
//# sourceMappingURL=common-exports.d.ts.map
