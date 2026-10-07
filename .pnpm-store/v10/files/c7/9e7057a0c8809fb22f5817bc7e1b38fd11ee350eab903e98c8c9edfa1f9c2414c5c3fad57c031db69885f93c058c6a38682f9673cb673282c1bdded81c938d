"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOOP_METER_PROVIDER = exports.NoopMeterProvider = void 0;
const NoopMeter_1 = require("./NoopMeter");
/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */
class NoopMeterProvider {
    getMeter(_name, _version, _options) {
        return NoopMeter_1.NOOP_METER;
    }
}
exports.NoopMeterProvider = NoopMeterProvider;
exports.NOOP_METER_PROVIDER = new NoopMeterProvider();
//# sourceMappingURL=NoopMeterProvider.js.map