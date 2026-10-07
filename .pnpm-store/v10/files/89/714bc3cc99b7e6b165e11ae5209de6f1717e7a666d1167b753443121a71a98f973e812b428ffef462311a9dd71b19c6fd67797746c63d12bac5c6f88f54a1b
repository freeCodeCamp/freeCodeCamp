"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.W3CBaggagePropagator = void 0;
const api_1 = require("@opentelemetry/api");
const suppress_tracing_1 = require("../../trace/suppress-tracing");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
/**
 * Propagates {@link Baggage} through Context format propagation.
 *
 * Based on the Baggage specification:
 * https://w3c.github.io/baggage/
 */
class W3CBaggagePropagator {
    inject(context, carrier, setter) {
        const baggage = api_1.propagation.getBaggage(context);
        if (!baggage || (0, suppress_tracing_1.isTracingSuppressed)(context))
            return;
        const keyPairs = (0, utils_1.getKeyPairs)(baggage)
            .filter((pair) => {
            return pair.length <= constants_1.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
        })
            .slice(0, constants_1.BAGGAGE_MAX_NAME_VALUE_PAIRS);
        const headerValue = (0, utils_1.serializeKeyPairs)(keyPairs);
        if (headerValue.length > 0) {
            setter.set(carrier, constants_1.BAGGAGE_HEADER, headerValue);
        }
    }
    extract(context, carrier, getter) {
        const headerValue = getter.get(carrier, constants_1.BAGGAGE_HEADER);
        if (!headerValue) {
            return context;
        }
        const baggage = {};
        let count = 0;
        let totalSize = 0;
        if (Array.isArray(headerValue)) {
            for (let i = 0; i < headerValue.length; i++) {
                [count, totalSize] = (0, utils_1.parseBaggageHeaderString)(headerValue[i], baggage, count, totalSize);
            }
        }
        else {
            [count] = (0, utils_1.parseBaggageHeaderString)(headerValue, baggage, count, totalSize);
        }
        if (count === 0) {
            return context;
        }
        return api_1.propagation.setBaggage(context, api_1.propagation.createBaggage(baggage));
    }
    fields() {
        return [constants_1.BAGGAGE_HEADER];
    }
}
exports.W3CBaggagePropagator = W3CBaggagePropagator;
//# sourceMappingURL=W3CBaggagePropagator.js.map