/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { NOOP_METER } from './NoopMeter';
/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */
export class NoopMeterProvider {
    getMeter(_name, _version, _options) {
        return NOOP_METER;
    }
}
export const NOOP_METER_PROVIDER = new NoopMeterProvider();
//# sourceMappingURL=NoopMeterProvider.js.map