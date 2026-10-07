"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._export = void 0;
const api_1 = require("@opentelemetry/api");
const suppress_tracing_1 = require("../trace/suppress-tracing");
/**
 * @internal
 * Shared functionality used by Exporters while exporting data, including suppression of Traces.
 */
function _export(exporter, arg) {
    return new Promise(resolve => {
        // prevent downstream exporter calls from generating spans
        api_1.context.with((0, suppress_tracing_1.suppressTracing)(api_1.context.active()), () => {
            exporter.export(arg, resolve);
        });
    });
}
exports._export = _export;
//# sourceMappingURL=exporter.js.map