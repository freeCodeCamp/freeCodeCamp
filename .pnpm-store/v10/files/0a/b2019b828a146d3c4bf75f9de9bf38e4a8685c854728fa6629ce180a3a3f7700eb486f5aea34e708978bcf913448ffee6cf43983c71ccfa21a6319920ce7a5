"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopTracerProvider = void 0;
const NoopTracer_1 = require("./NoopTracer");
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
class NoopTracerProvider {
    getTracer(_name, _version, _options) {
        return new NoopTracer_1.NoopTracer();
    }
}
exports.NoopTracerProvider = NoopTracerProvider;
//# sourceMappingURL=NoopTracerProvider.js.map