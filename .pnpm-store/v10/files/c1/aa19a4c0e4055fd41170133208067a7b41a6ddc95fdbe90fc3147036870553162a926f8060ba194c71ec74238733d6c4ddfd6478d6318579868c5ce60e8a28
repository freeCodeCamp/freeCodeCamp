/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { NoopTracer } from './NoopTracer';
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
export class NoopTracerProvider {
    getTracer(_name, _version, _options) {
        return new NoopTracer();
    }
}
//# sourceMappingURL=NoopTracerProvider.js.map