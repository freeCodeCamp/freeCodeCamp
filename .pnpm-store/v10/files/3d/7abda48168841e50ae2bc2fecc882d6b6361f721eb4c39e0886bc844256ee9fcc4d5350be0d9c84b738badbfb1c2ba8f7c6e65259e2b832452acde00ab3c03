/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ExportResultCode } from '@opentelemetry/core';
/**
 * This class can be used for testing purposes. It stores the exported spans
 * in a list in memory that can be retrieved using the `getFinishedSpans()`
 * method.
 */
export class InMemorySpanExporter {
    _finishedSpans = [];
    /**
     * Indicates if the exporter has been "shutdown."
     * When false, exported spans will not be stored in-memory.
     */
    _stopped = false;
    export(spans, resultCallback) {
        if (this._stopped)
            return resultCallback({
                code: ExportResultCode.FAILED,
                error: new Error('Exporter has been stopped'),
            });
        this._finishedSpans.push(...spans);
        setTimeout(() => resultCallback({ code: ExportResultCode.SUCCESS }), 0);
    }
    shutdown() {
        this._stopped = true;
        this._finishedSpans = [];
        return this.forceFlush();
    }
    /**
     * Exports any pending spans in the exporter
     */
    forceFlush() {
        return Promise.resolve();
    }
    reset() {
        this._finishedSpans = [];
    }
    getFinishedSpans() {
        return this._finishedSpans;
    }
}
//# sourceMappingURL=InMemorySpanExporter.js.map