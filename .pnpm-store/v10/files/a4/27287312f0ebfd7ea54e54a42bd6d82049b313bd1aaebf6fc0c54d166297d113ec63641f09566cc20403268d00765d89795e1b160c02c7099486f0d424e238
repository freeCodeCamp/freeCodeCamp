"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.baggageEntryMetadataFromString = exports.createBaggage = void 0;
const diag_1 = require("../api/diag");
const baggage_impl_1 = require("./internal/baggage-impl");
const symbol_1 = require("./internal/symbol");
const diag = diag_1.DiagAPI.instance();
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
function createBaggage(entries = {}) {
    return new baggage_impl_1.BaggageImpl(new Map(Object.entries(entries)));
}
exports.createBaggage = createBaggage;
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 * @since 1.0.0
 */
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error(`Cannot create baggage metadata from unknown type: ${typeof str}`);
        str = '';
    }
    return {
        __TYPE__: symbol_1.baggageEntryMetadataSymbol,
        toString() {
            return str;
        },
    };
}
exports.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
//# sourceMappingURL=utils.js.map