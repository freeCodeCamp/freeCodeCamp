/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { validateKey, validateValue } from '../internal/validators';
const MAX_TRACE_STATE_ITEMS = 32;
const MAX_TRACE_STATE_LEN = 512;
const LIST_MEMBERS_SEPARATOR = ',';
const LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */
export class TraceState {
    _length;
    _rawTraceState;
    _internalState;
    constructor(rawTraceState) {
        this._rawTraceState =
            typeof rawTraceState === 'string' ? rawTraceState : '';
        this._length = this._rawTraceState.length;
    }
    set(key, value) {
        if (!validateKey(key) || !validateValue(value)) {
            return this;
        }
        const currState = this._getState();
        const currValue = currState.get(key);
        // Get the new length depending if we already have a value or not
        // - for existing keys we add the difference between the length of the values
        // - for new keys is the key & value lenght plus
        //   - +1 for the key/value splitter
        //   - +1 for the separator if there are other keys
        let newLength = this._length;
        if (typeof currValue === 'string') {
            newLength += value.length - currValue.length;
        }
        else {
            newLength += key.length + value.length + (currState.size > 0 ? 2 : 1);
        }
        if (newLength > MAX_TRACE_STATE_LEN) {
            return this;
        }
        const newState = new Map(currState);
        newState.delete(key);
        newState.set(key, value);
        return this._fromState(newState, newLength);
    }
    unset(key) {
        const currState = this._getState();
        const currValue = currState.get(key);
        // No need to create a new instance if the key does not exist
        if (typeof currValue !== 'string') {
            return this;
        }
        // Get the new length depending if we already have a value or not
        // - for existing keys we substract key and value length plus
        //   - +1 for the key/value splitter
        //   - +1 for the separator if there are other keys
        let newLength = this._length - (key.length + currValue.length + 1);
        if (currState.size > 1) {
            // remove separator from length if there's no key or only one.
            newLength = newLength - 1;
        }
        const newState = new Map(currState);
        newState.delete(key);
        return this._fromState(newState, newLength);
    }
    get(key) {
        const currState = this._getState();
        return currState.get(key);
    }
    serialize() {
        // Maps put new entries at the end. We prepend the seralized entry
        // to get the right order according to the spec (updated members go 1st)
        let serialized = '';
        let index = 0;
        for (const entry of this._getState()) {
            if (index > 0) {
                serialized = LIST_MEMBERS_SEPARATOR + serialized;
            }
            serialized =
                `${entry[0]}${LIST_MEMBER_KEY_VALUE_SPLITTER}${entry[1]}` + serialized;
            index++;
        }
        return serialized;
    }
    _getState() {
        if (this._internalState) {
            return this._internalState;
        }
        // Not parsed yet, lets do it
        const vendorMembers = this._rawTraceState.split(LIST_MEMBERS_SEPARATOR);
        // This Map will have the order reversed
        const vendorEntries = new Map();
        let currentLength = 0;
        for (const member of vendorMembers) {
            const m = member.trim();
            const idx = m.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (idx === -1) {
                continue;
            }
            const key = m.slice(0, idx);
            const value = m.slice(idx + 1);
            if (!validateKey(key) || !validateValue(value)) {
                continue;
            }
            // Skip if adding the new member exceeds the length
            const futureLength = currentLength + m.length + (vendorEntries.size > 0 ? 1 : 0);
            if (futureLength > MAX_TRACE_STATE_LEN) {
                continue;
            }
            // All good, add it
            vendorEntries.set(key, value);
            currentLength = futureLength;
            // Check if we reached the max items
            if (vendorEntries.size >= MAX_TRACE_STATE_ITEMS) {
                break;
            }
        }
        // Now we set the length & the Map in the right order
        this._length = currentLength;
        this._internalState = new Map(Array.from(vendorEntries.entries()).reverse());
        return this._internalState;
    }
    _fromState(state, length) {
        const traceState = Object.create(TraceState.prototype);
        traceState._internalState = state;
        traceState._length = length;
        return traceState;
    }
}
//# sourceMappingURL=TraceState.js.map