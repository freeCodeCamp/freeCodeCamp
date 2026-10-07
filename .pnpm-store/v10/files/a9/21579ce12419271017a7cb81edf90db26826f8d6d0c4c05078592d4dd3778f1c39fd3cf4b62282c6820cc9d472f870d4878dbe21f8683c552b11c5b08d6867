import { Iterable } from './iterator.js';

function setParentOfDisposable(child, parent) {
}
/**
 * Indicates that the given object is a singleton which does not need to be disposed.
*/
function markAsSingleton(singleton) {
    return singleton;
}
/**
 * Check if `thing` is {@link IDisposable disposable}.
 */
function isDisposable(thing) {
    // eslint-disable-next-line local/code-no-any-casts
    return typeof thing === 'object' && thing !== null && typeof thing.dispose === 'function' && thing.dispose.length === 0;
}
function dispose(arg) {
    if (Iterable.is(arg)) {
        const errors = [];
        for (const d of arg) {
            if (d) {
                try {
                    d.dispose();
                }
                catch (e) {
                    errors.push(e);
                }
            }
        }
        if (errors.length === 1) {
            throw errors[0];
        }
        else if (errors.length > 1) {
            throw new AggregateError(errors, 'Encountered errors while disposing of store');
        }
        return Array.isArray(arg) ? [] : arg;
    }
    else if (arg) {
        arg.dispose();
        return arg;
    }
}
/**
 * Combine multiple disposable values into a single {@link IDisposable}.
 */
function combinedDisposable(...disposables) {
    const parent = toDisposable(() => dispose(disposables));
    return parent;
}
class FunctionDisposable {
    constructor(fn) {
        this._isDisposed = false;
        this._fn = fn;
    }
    dispose() {
        if (this._isDisposed) {
            return;
        }
        if (!this._fn) {
            throw new Error(`Unbound disposable context: Need to use an arrow function to preserve the value of this`);
        }
        this._isDisposed = true;
        this._fn();
    }
}
/**
 * Turn a function that implements dispose into an {@link IDisposable}.
 *
 * @param fn Clean up function, guaranteed to be called only **once**.
 */
function toDisposable(fn) {
    return new FunctionDisposable(fn);
}
/**
 * Manages a collection of disposable values.
 *
 * This is the preferred way to manage multiple disposables. A `DisposableStore` is safer to work with than an
 * `IDisposable[]` as it considers edge cases, such as registering the same value multiple times or adding an item to a
 * store that has already been disposed of.
 */
class DisposableStore {
    static { this.DISABLE_DISPOSED_WARNING = false; }
    constructor() {
        this._toDispose = new Set();
        this._isDisposed = false;
    }
    /**
     * Dispose of all registered disposables and mark this object as disposed.
     *
     * Any future disposables added to this object will be disposed of on `add`.
     */
    dispose() {
        if (this._isDisposed) {
            return;
        }
        this._isDisposed = true;
        this.clear();
    }
    /**
     * @return `true` if this object has been disposed of.
     */
    get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Dispose of all registered disposables but do not mark this object as disposed.
     */
    clear() {
        if (this._toDispose.size === 0) {
            return;
        }
        try {
            dispose(this._toDispose);
        }
        finally {
            this._toDispose.clear();
        }
    }
    /**
     * Add a new {@link IDisposable disposable} to the collection.
     */
    add(o) {
        if (!o || o === Disposable.None) {
            return o;
        }
        if (o === this) {
            throw new Error('Cannot register a disposable on itself!');
        }
        if (this._isDisposed) {
            if (!DisposableStore.DISABLE_DISPOSED_WARNING) {
                console.warn(new Error('Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!').stack);
            }
        }
        else {
            this._toDispose.add(o);
        }
        return o;
    }
    /**
     * Deletes a disposable from store and disposes of it. This will not throw or warn and proceed to dispose the
     * disposable even when the disposable is not part in the store.
     */
    delete(o) {
        if (!o) {
            return;
        }
        if (o === this) {
            throw new Error('Cannot dispose a disposable on itself!');
        }
        this._toDispose.delete(o);
        o.dispose();
    }
}
/**
 * Abstract base class for a {@link IDisposable disposable} object.
 *
 * Subclasses can {@linkcode _register} disposables that will be automatically cleaned up when this object is disposed of.
 */
class Disposable {
    /**
     * A disposable that does nothing when it is disposed of.
     *
     * TODO: This should not be a static property.
     */
    static { this.None = Object.freeze({ dispose() { } }); }
    constructor() {
        this._store = new DisposableStore();
        setParentOfDisposable(this._store);
    }
    dispose() {
        this._store.dispose();
    }
    /**
     * Adds `o` to the collection of disposables managed by this object.
     */
    _register(o) {
        if (o === this) {
            throw new Error('Cannot register a disposable on itself!');
        }
        return this._store.add(o);
    }
}
/**
 * Manages the lifecycle of a disposable value that may be changed.
 *
 * This ensures that when the disposable value is changed, the previously held disposable is disposed of. You can
 * also register a `MutableDisposable` on a `Disposable` to ensure it is automatically cleaned up.
 */
class MutableDisposable {
    constructor() {
        this._isDisposed = false;
    }
    /**
     * Get the currently held disposable value, or `undefined` if this MutableDisposable has been disposed
     */
    get value() {
        return this._isDisposed ? undefined : this._value;
    }
    /**
     * Set a new disposable value.
     *
     * Behaviour:
     * - If the MutableDisposable has been disposed, the setter is a no-op.
     * - If the new value is strictly equal to the current value, the setter is a no-op.
     * - Otherwise the previous value (if any) is disposed and the new value is stored.
     *
     * Related helpers:
     * - clear() resets the value to `undefined` (and disposes the previous value).
     * - clearAndLeak() returns the old value without disposing it and removes its parent.
     */
    set value(value) {
        if (this._isDisposed || value === this._value) {
            return;
        }
        this._value?.dispose();
        this._value = value;
    }
    /**
     * Resets the stored value and disposed of the previously stored value.
     */
    clear() {
        this.value = undefined;
    }
    dispose() {
        this._isDisposed = true;
        this._value?.dispose();
        this._value = undefined;
    }
}
class RefCountedDisposable {
    constructor(_disposable) {
        this._disposable = _disposable;
        this._counter = 1;
    }
    acquire() {
        this._counter++;
        return this;
    }
    release() {
        if (--this._counter === 0) {
            this._disposable.dispose();
        }
        return this;
    }
}
class ImmortalReference {
    constructor(object) {
        this.object = object;
    }
    dispose() { }
}
/**
 * A map the manages the lifecycle of the values that it stores.
 */
class DisposableMap {
    constructor() {
        this._store = new Map();
        this._isDisposed = false;
    }
    /**
     * Disposes of all stored values and mark this object as disposed.
     *
     * Trying to use this object after it has been disposed of is an error.
     */
    dispose() {
        this._isDisposed = true;
        this.clearAndDisposeAll();
    }
    /**
     * Disposes of all stored values and clear the map, but DO NOT mark this object as disposed.
     */
    clearAndDisposeAll() {
        if (!this._store.size) {
            return;
        }
        try {
            dispose(this._store.values());
        }
        finally {
            this._store.clear();
        }
    }
    get(key) {
        return this._store.get(key);
    }
    set(key, value, skipDisposeOnOverwrite = false) {
        if (this._isDisposed) {
            console.warn(new Error('Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!').stack);
        }
        if (!skipDisposeOnOverwrite) {
            this._store.get(key)?.dispose();
        }
        this._store.set(key, value);
    }
    /**
     * Delete the value stored for `key` from this map and also dispose of it.
     */
    deleteAndDispose(key) {
        this._store.get(key)?.dispose();
        this._store.delete(key);
    }
    values() {
        return this._store.values();
    }
    [Symbol.iterator]() {
        return this._store[Symbol.iterator]();
    }
}

export { Disposable, DisposableMap, DisposableStore, ImmortalReference, MutableDisposable, RefCountedDisposable, combinedDisposable, dispose, isDisposable, markAsSingleton, toDisposable };
