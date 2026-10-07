import { Emitter, Event } from '../../../base/common/event.js';
import { Disposable, toDisposable, dispose } from '../../../base/common/lifecycle.js';
import { LinkedList } from '../../../base/common/linkedList.js';
import { BufferDirtyTracker } from './bufferDirtyTracker.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function createObjectCollectionBuffer(propertySpecs, capacity) {
    return new ObjectCollectionBuffer(propertySpecs, capacity);
}
class ObjectCollectionBuffer extends Disposable {
    get entryCount() {
        return this._entries.size;
    }
    get dirtyTracker() { return this._dirtyTracker; }
    constructor(propertySpecs, capacity) {
        super();
        this.propertySpecs = propertySpecs;
        this.capacity = capacity;
        this._dirtyTracker = new BufferDirtyTracker();
        this._propertySpecsMap = new Map();
        this._entries = new LinkedList();
        this._onDidChange = this._register(new Emitter());
        this._onDidChangeBuffer = this._register(new Emitter());
        this.onDidChangeBuffer = this._onDidChangeBuffer.event;
        this.view = new Float32Array(capacity * propertySpecs.length);
        this.buffer = this.view.buffer;
        this._entrySize = propertySpecs.length;
        for (let i = 0; i < propertySpecs.length; i++) {
            const spec = {
                offset: i,
                ...propertySpecs[i]
            };
            this._propertySpecsMap.set(spec.name, spec);
        }
        this._register(toDisposable(() => dispose(this._entries)));
    }
    createEntry(data) {
        if (this._entries.size === this.capacity) {
            this._expandBuffer();
            this._onDidChangeBuffer.fire();
        }
        const value = new ObjectCollectionBufferEntry(this.view, this._propertySpecsMap, this._dirtyTracker, this._entries.size, data);
        const removeFromEntries = this._entries.push(value);
        const listeners = [];
        listeners.push(Event.forward(value.onDidChange, this._onDidChange));
        listeners.push(value.onWillDispose(() => {
            const deletedEntryIndex = value.i;
            removeFromEntries();
            // Shift all entries after the deleted entry to the left
            this.view.set(this.view.subarray(deletedEntryIndex * this._entrySize + 2, this._entries.size * this._entrySize + 2), deletedEntryIndex * this._entrySize);
            // Update entries to reflect the new i
            for (const entry of this._entries) {
                if (entry.i > deletedEntryIndex) {
                    entry.i--;
                }
            }
            this._dirtyTracker.flag(deletedEntryIndex, (this._entries.size - deletedEntryIndex) * this._entrySize);
            dispose(listeners);
        }));
        return value;
    }
    _expandBuffer() {
        this.capacity *= 2;
        const newView = new Float32Array(this.capacity * this._entrySize);
        newView.set(this.view);
        this.view = newView;
        this.buffer = this.view.buffer;
    }
}
class ObjectCollectionBufferEntry extends Disposable {
    constructor(_view, _propertySpecsMap, _dirtyTracker, i, data) {
        super();
        this._view = _view;
        this._propertySpecsMap = _propertySpecsMap;
        this._dirtyTracker = _dirtyTracker;
        this.i = i;
        this._onDidChange = this._register(new Emitter());
        this.onDidChange = this._onDidChange.event;
        this._onWillDispose = this._register(new Emitter());
        this.onWillDispose = this._onWillDispose.event;
        for (const propertySpec of this._propertySpecsMap.values()) {
            this._view[this.i * this._propertySpecsMap.size + propertySpec.offset] = data[propertySpec.name];
        }
        this._dirtyTracker.flag(this.i * this._propertySpecsMap.size, this._propertySpecsMap.size);
    }
    dispose() {
        this._onWillDispose.fire();
        super.dispose();
    }
    setRaw(data) {
        if (data.length !== this._propertySpecsMap.size) {
            throw new Error(`Data length ${data.length} does not match the number of properties in the collection (${this._propertySpecsMap.size})`);
        }
        this._view.set(data, this.i * this._propertySpecsMap.size);
        this._dirtyTracker.flag(this.i * this._propertySpecsMap.size, this._propertySpecsMap.size);
    }
}

export { createObjectCollectionBuffer };
