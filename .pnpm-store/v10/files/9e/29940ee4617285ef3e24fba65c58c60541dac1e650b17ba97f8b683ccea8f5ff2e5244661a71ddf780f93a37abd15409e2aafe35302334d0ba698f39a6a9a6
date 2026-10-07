/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { context } from '@opentelemetry/api';
import { suppressTracing } from '../trace/suppress-tracing';
/**
 * @internal
 * Shared functionality used by Exporters while exporting data, including suppression of Traces.
 */
export function _export(exporter, arg) {
    return new Promise(resolve => {
        // prevent downstream exporter calls from generating spans
        context.with(suppressTracing(context.active()), () => {
            exporter.export(arg, resolve);
        });
    });
}
//# sourceMappingURL=exporter.js.map