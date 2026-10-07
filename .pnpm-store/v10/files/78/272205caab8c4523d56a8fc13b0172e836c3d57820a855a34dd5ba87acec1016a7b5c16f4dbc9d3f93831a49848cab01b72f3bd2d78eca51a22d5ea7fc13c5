import { trace } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor, BasicTracerProvider } from '@opentelemetry/sdk-trace-base';
import { defineIntegration, registerExternalPropagationContext, debug, SENTRY_API_VERSION } from '@sentry/core';

const INTEGRATION_NAME = "OtlpIntegration";
const _otlpIntegration = ((userOptions = {}) => {
  const options = {
    setupOtlpTracesExporter: userOptions.setupOtlpTracesExporter ?? true,
    collectorUrl: userOptions.collectorUrl
  };
  let _spanProcessor;
  let _tracerProvider;
  return {
    name: INTEGRATION_NAME,
    setup(_client) {
      registerExternalPropagationContext(() => {
        const activeSpan = trace.getActiveSpan();
        if (!activeSpan) {
          return void 0;
        }
        const spanContext = activeSpan.spanContext();
        return { traceId: spanContext.traceId, spanId: spanContext.spanId };
      });
      debug.log(`[${INTEGRATION_NAME}] External propagation context registered.`);
    },
    afterAllSetup(client) {
      if (options.setupOtlpTracesExporter) {
        setupTracesExporter(client);
      }
    }
  };
  function setupTracesExporter(client) {
    let endpoint;
    let headers;
    if (options.collectorUrl) {
      endpoint = options.collectorUrl;
      debug.log(`[${INTEGRATION_NAME}] Sending traces to collector at ${endpoint}`);
    } else {
      const dsn = client.getDsn();
      if (!dsn) {
        debug.warn(`[${INTEGRATION_NAME}] No DSN found. OTLP exporter not set up.`);
        return;
      }
      const { protocol, host, port, path, projectId, publicKey } = dsn;
      const basePath = path ? `/${path}` : "";
      const portStr = port ? `:${port}` : "";
      endpoint = `${protocol}://${host}${portStr}${basePath}/api/${projectId}/integration/otlp/v1/traces/`;
      const sdkInfo = client.getSdkMetadata()?.sdk;
      const sentryClient = sdkInfo ? `, sentry_client=${sdkInfo.name}/${sdkInfo.version}` : "";
      headers = {
        "X-Sentry-Auth": `Sentry sentry_version=${SENTRY_API_VERSION}, sentry_key=${publicKey}${sentryClient}`
      };
    }
    let exporter;
    try {
      exporter = new OTLPTraceExporter({
        url: endpoint,
        headers
      });
    } catch (e) {
      debug.warn(`[${INTEGRATION_NAME}] Failed to create OTLPTraceExporter:`, e);
      return;
    }
    _spanProcessor = new BatchSpanProcessor(exporter);
    const globalProvider = trace.getTracerProvider();
    const delegate = "getDelegate" in globalProvider ? globalProvider.getDelegate() : globalProvider;
    const activeProcessor = delegate?._activeSpanProcessor;
    if (activeProcessor?._spanProcessors) {
      activeProcessor._spanProcessors.push(_spanProcessor);
      debug.log(`[${INTEGRATION_NAME}] Added span processor to existing TracerProvider.`);
    } else {
      _tracerProvider = new BasicTracerProvider({
        spanProcessors: [_spanProcessor]
      });
      trace.setGlobalTracerProvider(_tracerProvider);
      debug.log(`[${INTEGRATION_NAME}] Created new TracerProvider with OTLP span processor.`);
    }
    client.on("flush", () => {
      void _spanProcessor?.forceFlush();
    });
    client.on("close", () => {
      void _spanProcessor?.shutdown();
      void _tracerProvider?.shutdown();
    });
  }
});
const otlpIntegration = defineIntegration(_otlpIntegration);

export { otlpIntegration };
//# sourceMappingURL=otlpIntegration.js.map
