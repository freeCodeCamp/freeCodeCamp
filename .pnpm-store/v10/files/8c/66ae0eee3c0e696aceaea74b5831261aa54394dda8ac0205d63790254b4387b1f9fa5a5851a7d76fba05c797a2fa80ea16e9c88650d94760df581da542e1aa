/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { propagation } from '@opentelemetry/api';
import { isTracingSuppressed } from '../../trace/suppress-tracing';
import { BAGGAGE_HEADER, BAGGAGE_MAX_NAME_VALUE_PAIRS, BAGGAGE_MAX_PER_NAME_VALUE_PAIRS, } from '../constants';
import { getKeyPairs, parseBaggageHeaderString, serializeKeyPairs, } from '../utils';
/**
 * Propagates {@link Baggage} through Context format propagation.
 *
 * Based on the Baggage specification:
 * https://w3c.github.io/baggage/
 */
export class W3CBaggagePropagator {
    inject(context, carrier, setter) {
        const baggage = propagation.getBaggage(context);
        if (!baggage || isTracingSuppressed(context))
            return;
        const keyPairs = getKeyPairs(baggage)
            .filter((pair) => {
            return pair.length <= BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
        })
            .slice(0, BAGGAGE_MAX_NAME_VALUE_PAIRS);
        const headerValue = serializeKeyPairs(keyPairs);
        if (headerValue.length > 0) {
            setter.set(carrier, BAGGAGE_HEADER, headerValue);
        }
    }
    extract(context, carrier, getter) {
        const headerValue = getter.get(carrier, BAGGAGE_HEADER);
        if (!headerValue) {
            return context;
        }
        const baggage = {};
        let count = 0;
        let totalSize = 0;
        if (Array.isArray(headerValue)) {
            for (let i = 0; i < headerValue.length; i++) {
                [count, totalSize] = parseBaggageHeaderString(headerValue[i], baggage, count, totalSize);
            }
        }
        else {
            [count] = parseBaggageHeaderString(headerValue, baggage, count, totalSize);
        }
        if (count === 0) {
            return context;
        }
        return propagation.setBaggage(context, propagation.createBaggage(baggage));
    }
    fields() {
        return [BAGGAGE_HEADER];
    }
}
//# sourceMappingURL=W3CBaggagePropagator.js.map