/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
export class BaggageImpl {
    constructor(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    getEntry(key) {
        const entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    }
    getAllEntries() {
        return Array.from(this._entries.entries());
    }
    setEntry(key, entry) {
        const newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    }
    removeEntry(key) {
        const newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    }
    removeEntries(...keys) {
        const newBaggage = new BaggageImpl(this._entries);
        for (const key of keys) {
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    }
    clear() {
        return new BaggageImpl();
    }
}
//# sourceMappingURL=baggage-impl.js.map