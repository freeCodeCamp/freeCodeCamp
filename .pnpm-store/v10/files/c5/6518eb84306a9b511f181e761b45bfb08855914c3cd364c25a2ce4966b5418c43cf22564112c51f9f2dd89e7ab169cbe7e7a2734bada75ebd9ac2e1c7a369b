/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { DiagAPI } from '../api/diag';
import { BaggageImpl } from './internal/baggage-impl';
import { baggageEntryMetadataSymbol } from './internal/symbol';
const diag = DiagAPI.instance();
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
export function createBaggage(entries = {}) {
    return new BaggageImpl(new Map(Object.entries(entries)));
}
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 * @since 1.0.0
 */
export function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error(`Cannot create baggage metadata from unknown type: ${typeof str}`);
        str = '';
    }
    return {
        __TYPE__: baggageEntryMetadataSymbol,
        toString() {
            return str;
        },
    };
}
//# sourceMappingURL=utils.js.map