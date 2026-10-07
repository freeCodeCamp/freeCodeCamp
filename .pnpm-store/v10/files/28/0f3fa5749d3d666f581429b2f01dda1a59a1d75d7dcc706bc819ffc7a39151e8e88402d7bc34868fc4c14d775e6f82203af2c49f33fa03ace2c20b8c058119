Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('@opentelemetry/api');
const exporterTraceOtlpHttp = require('@opentelemetry/exporter-trace-otlp-http');
const sdkTraceBase = require('@opentelemetry/sdk-trace-base');
const core = require('@sentry/core');

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
      core.registerExternalPropagationContext(() => {
        const activeSpan = api.trace.getActiveSpan();
        if (!activeSpan) {
          return void 0;
        }
        const spanContext = activeSpan.spanContext();
        return { traceId: spanContext.traceId, spanId: spanContext.spanId };
      });
      core.debug.log(`[${INTEGRATION_NAME}] External propagation context registered.`);
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
      core.debug.log(`[${INTEGRATION_NAME}] Sending traces to collector at ${endpoint}`);
    } else {
      const dsn = client.getDsn();
      if (!dsn) {
        core.debug.warn(`[${INTEGRATION_NAME}] No DSN found. OTLP exporter not set up.`);
        return;
      }
      const { protocol, host, port, path, projectId, publicKey } = dsn;
      const basePath = path ? `/${path}` : "";
      const portStr = port ? `:${port}` : "";
      endpoint = `${protocol}://${host}${portStr}${basePath}/api/${projectId}/integration/otlp/v1/traces/`;
      const sdkInfo = client.getSdkMetadata()?.sdk;
      const sentryClient = sdkInfo ? `, sentry_client=${sdkInfo.name}/${sdkInfo.version}` : "";
      headers = {
        "X-Sentry-Auth": `Sentry sentry_version=${core.SENTRY_API_VERSION}, sentry_key=${publicKey}${sentryClient}`
      };
    }
    let exporter;
    try {
      exporter = new exporterTraceOtlpHttp.OTLPTraceExporter({
        url: endpoint,
        headers
      });
    } catch (e) {
      core.debug.warn(`[${INTEGRATION_NAME}] Failed to create OTLPTraceExporter:`, e);
      return;
    }
    _spanProcessor = new sdkTraceBase.BatchSpanProcessor(exporter);
    const globalProvider = api.trace.getTracerProvider();
    const delegate = "getDelegate" in globalProvider ? globalProvider.getDelegate() : globalProvider;
    const activeProcessor = delegate?._activeSpanProcessor;
    if (activeProcessor?._spanProcessors) {
      activeProcessor._spanProcessors.push(_spanProcessor);
      core.debug.log(`[${INTEGRATION_NAME}] Added span processor to existing TracerProvider.`);
    } else {
      _tracerProvider = new sdkTraceBase.BasicTracerProvider({
        spanProcessors: [_spanProcessor]
      });
      api.trace.setGlobalTracerProvider(_tracerProvider);
      core.debug.log(`[${INTEGRATION_NAME}] Created new TracerProvider with OTLP span processor.`);
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
const otlpIntegration = core.defineIntegration(_otlpIntegration);

exports.otlpIntegration = otlpIntegration;
//# sourceMappingURL=otlpIntegration.js.map
