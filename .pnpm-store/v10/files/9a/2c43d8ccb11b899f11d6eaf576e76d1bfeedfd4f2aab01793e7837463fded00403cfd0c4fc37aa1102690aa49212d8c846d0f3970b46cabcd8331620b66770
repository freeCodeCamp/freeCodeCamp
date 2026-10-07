interface OtlpIntegrationOptions {
    /**
     * Whether to set up the OTLP traces exporter that sends spans to Sentry.
     * Default: true
     */
    setupOtlpTracesExporter?: boolean;
    /**
     * URL of your own OpenTelemetry collector.
     * When set, the exporter will send traces to this URL instead of the Sentry OTLP endpoint derived from the DSN.
     * Default: undefined (uses DSN-derived endpoint)
     */
    collectorUrl?: string;
}
/**
 * OTLP integration for the Sentry light SDK.
 *
 * Bridges an existing OpenTelemetry setup with Sentry by:
 * 1. Linking Sentry error/log events to the active OTel trace context
 * 2. Exporting OTel spans to Sentry via OTLP (or to a custom collector)
 */
export declare const otlpIntegration: (userOptions?: OtlpIntegrationOptions | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=otlpIntegration.d.ts.map