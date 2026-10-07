/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { InstrumentationAbstract } from '../../instrumentation';
/**
 * Base abstract class for instrumenting web plugins
 */
export class InstrumentationBase extends InstrumentationAbstract {
    constructor(instrumentationName, instrumentationVersion, config) {
        super(instrumentationName, instrumentationVersion, config);
        if (this._config.enabled) {
            this.enable();
        }
    }
}
//# sourceMappingURL=instrumentation.js.map