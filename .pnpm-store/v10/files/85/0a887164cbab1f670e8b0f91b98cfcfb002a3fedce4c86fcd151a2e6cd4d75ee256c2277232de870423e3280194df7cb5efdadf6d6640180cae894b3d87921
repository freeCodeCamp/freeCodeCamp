"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemorySpanExporter = void 0;
const core_1 = require("@opentelemetry/core");
/**
 * This class can be used for testing purposes. It stores the exported spans
 * in a list in memory that can be retrieved using the `getFinishedSpans()`
 * method.
 */
class InMemorySpanExporter {
    _finishedSpans = [];
    /**
     * Indicates if the exporter has been "shutdown."
     * When false, exported spans will not be stored in-memory.
     */
    _stopped = false;
    export(spans, resultCallback) {
        if (this._stopped)
            return resultCallback({
                code: core_1.ExportResultCode.FAILED,
                error: new Error('Exporter has been stopped'),
            });
        this._finishedSpans.push(...spans);
        setTimeout(() => resultCallback({ code: core_1.ExportResultCode.SUCCESS }), 0);
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
exports.InMemorySpanExporter = InMemorySpanExporter;
//# sourceMappingURL=InMemorySpanExporter.js.map