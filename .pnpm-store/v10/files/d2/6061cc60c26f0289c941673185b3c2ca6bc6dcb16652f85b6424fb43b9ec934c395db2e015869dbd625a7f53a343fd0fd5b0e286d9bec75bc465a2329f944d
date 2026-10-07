"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentationBase = void 0;
const instrumentation_1 = require("../../instrumentation");
/**
 * Base abstract class for instrumenting web plugins
 */
class InstrumentationBase extends instrumentation_1.InstrumentationAbstract {
    constructor(instrumentationName, instrumentationVersion, config) {
        super(instrumentationName, instrumentationVersion, config);
        if (this._config.enabled) {
            this.enable();
        }
    }
}
exports.InstrumentationBase = InstrumentationBase;
//# sourceMappingURL=instrumentation.js.map