import { onUnexpectedError } from './errors.js';
import { createSingleCallFunction } from './functional.js';
import { Disposable, combinedDisposable, DisposableStore, toDisposable } from './lifecycle.js';
import { LinkedList } from './linkedList.js';
import { StopWatch } from './stopwatch.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var Event;
(function (Event) {
    Event.None = () => Disposable.None;
    /**
     * Given an event, returns another event which debounces calls and defers the listeners to a later task via a shared
     * `setTimeout`. The event is converted into a signal (`Event<void>`) to avoid additional object creation as a
     * result of merging events and to try prevent race conditions that could arise when using related deferred and
     * non-deferred events.
     *
     * This is useful for deferring non-critical work (eg. general UI updates) to ensure it does not block critical work
     * (eg. latency of keypress to text rendered).
     *
     * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
     * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
     * returned event causes this utility to leak a listener on the original event.
     *
     * @param event The event source for the new event.
     * @param disposable A disposable store to add the new EventEmitter to.
     */
    function defer(event, disposable) {
        return debounce(event, () => void 0, 0, undefined, true, undefined, disposable);
    }
    Event.defer = defer;
    /**
     * Given an event, returns another event which only fires once.
     *
     * @param event The event source for the new event.
     */
    function once(event) {
        return (listener, thisArgs = null, disposables) => {
            // we need this, in case the event fires during the listener call
            let didFire = false;
            let result = undefined;
            result = event(e => {
                if (didFire) {
                    return;
                }
                else if (result) {
                    result.dispose();
                }
                else {
                    didFire = true;
                }
                return listener.call(thisArgs, e);
            }, null, disposables);
            if (didFire) {
                result.dispose();
            }
            return result;
        };
    }
    Event.once = once;
    /**
     * Given an event, returns another event which only fires once, and only when the condition is met.
     *
     * @param event The event source for the new event.
     */
    function onceIf(event, condition) {
        return Event.once(Event.filter(event, condition));
    }
    Event.onceIf = onceIf;
    /**
     * Maps an event of one type into an event of another type using a mapping function, similar to how
     * `Array.prototype.map` works.
     *
     * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
     * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
     * returned event causes this utility to leak a listener on the original event.
     *
     * @param event The event source for the new event.
     * @param map The mapping function.
     * @param disposable A disposable store to add the new EventEmitter to.
     */
    function map(event, map, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event(i => listener.call(thisArgs, map(i)), null, disposables), disposable);
    }
    Event.map = map;
    /**
     * Wraps an event in another event that performs some function on the event object before firing.
     *
     * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
     * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
     * returned event causes this utility to leak a listener on the original event.
     *
     * @param event The event source for the new event.
     * @param each The function to perform on the event object.
     * @param disposable A disposable store to add the new EventEmitter to.
     */
    function forEach(event, each, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event(i => { each(i); listener.call(thisArgs, i); }, null, disposables), disposable);
    }
    Event.forEach = forEach;
    function filter(event, filter, disposable) {
        return snapshot((listener, thisArgs = null, disposables) => event(e => filter(e) && listener.call(thisArgs, e), null, disposables), disposable);
    }
    Event.filter = filter;
    /**
     * Given an event, returns the same event but typed as `Event<void>`.
     */
    function signal(event) {
        return event;
    }
    Event.signal = signal;
    function any(...events) {
        return (listener, thisArgs = null, disposables) => {
            const disposable = combinedDisposable(...events.map(event => event(e => listener.call(thisArgs, e))));
            return addAndReturnDisposable(disposable, disposables);
        };
    }
    Event.any = any;
    /**
     * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
     * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
     * returned event causes this utility to leak a listener on the original event.
     */
    function reduce(event, merge, initial, disposable) {
        let output = initial;
        return map(event, e => {
            output = merge(output, e);
            return output;
        }, disposable);
    }
    Event.reduce = reduce;
    function snapshot(event, disposable) {
        let listener;
        const options = {
            onWillAddFirstListener() {
                listener = event(emitter.fire, emitter);
            },
            onDidRemoveLastListener() {
                listener?.dispose();
            }
        };
        const emitter = new Emitter(options);
        disposable?.add(emitter);
        return emitter.event;
    }
    /**
     * Adds the IDisposable to the store if it's set, and returns it. Useful to
     * Event function implementation.
     */
    function addAndReturnDisposable(d, store) {
        if (store instanceof Array) {
            store.push(d);
        }
        else if (store) {
            store.add(d);
        }
        return d;
    }
    function debounce(event, merge, delay = 100, leading = false, flushOnListenerRemove = false, leakWarningThreshold, disposable) {
        let subscription;
        let output = undefined;
        let handle = undefined;
        let numDebouncedCalls = 0;
        let doFire;
        const options = {
            leakWarningThreshold,
            onWillAddFirstListener() {
                subscription = event(cur => {
                    numDebouncedCalls++;
                    output = merge(output, cur);
                    if (leading && !handle) {
                        emitter.fire(output);
                        output = undefined;
                    }
                    doFire = () => {
                        const _output = output;
                        output = undefined;
                        handle = undefined;
                        if (!leading || numDebouncedCalls > 1) {
                            emitter.fire(_output);
                        }
                        numDebouncedCalls = 0;
                    };
                    if (typeof delay === 'number') {
                        if (handle) {
                            clearTimeout(handle);
                        }
                        handle = setTimeout(doFire, delay);
                    }
                    else {
                        if (handle === undefined) {
                            handle = null;
                            queueMicrotask(doFire);
                        }
                    }
                });
            },
            onWillRemoveListener() {
                if (flushOnListenerRemove && numDebouncedCalls > 0) {
                    doFire?.();
                }
            },
            onDidRemoveLastListener() {
                doFire = undefined;
                subscription.dispose();
            }
        };
        const emitter = new Emitter(options);
        disposable?.add(emitter);
        return emitter.event;
    }
    Event.debounce = debounce;
    /**
     * Debounces an event, firing after some delay (default=0) with an array of all event original objects.
     *
     * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
     * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
     * returned event causes this utility to leak a listener on the original event.
     */
    function accumulate(event, delay = 0, disposable) {
        return Event.debounce(event, (last, e) => {
            if (!last) {
                return [e];
            }
            last.push(e);
            return last;
        }, delay, undefined, true, undefined, disposable);
    }
    Event.accumulate = accumulate;
    /**
     * Filters an event such that some condition is _not_ met more than once in a row, effectively ensuring duplicate
     * event objects from different sources do not fire the same event object.
     *
     * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
     * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
     * returned event causes this utility to leak a listener on the original event.
     *
     * @param event The event source for the new event.
     * @param equals The equality condition.
     * @param disposable A disposable store to add the new EventEmitter to.
     *
     * @example
     * ```
     * // Fire only one time when a single window is opened or focused
     * Event.latch(Event.any(onDidOpenWindow, onDidFocusWindow))
     * ```
     */
    function latch(event, equals = (a, b) => a === b, disposable) {
        let firstCall = true;
        let cache;
        return filter(event, value => {
            const shouldEmit = firstCall || !equals(value, cache);
            firstCall = false;
            cache = value;
            return shouldEmit;
        }, disposable);
    }
    Event.latch = latch;
    /**
     * Splits an event whose parameter is a union type into 2 separate events for each type in the union.
     *
     * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
     * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
     * returned event causes this utility to leak a listener on the original event.
     *
     * @example
     * ```
     * const event = new EventEmitter<number | undefined>().event;
     * const [numberEvent, undefinedEvent] = Event.split(event, isUndefined);
     * ```
     *
     * @param event The event source for the new event.
     * @param isT A function that determines what event is of the first type.
     * @param disposable A disposable store to add the new EventEmitter to.
     */
    function split(event, isT, disposable) {
        return [
            Event.filter(event, isT, disposable),
            Event.filter(event, e => !isT(e), disposable),
        ];
    }
    Event.split = split;
    /**
     * Buffers an event until it has a listener attached.
     *
     * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
     * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
     * returned event causes this utility to leak a listener on the original event.
     *
     * @param event The event source for the new event.
     * @param flushAfterTimeout Determines whether to flush the buffer after a timeout immediately or after a
     * `setTimeout` when the first event listener is added.
     * @param _buffer Internal: A source event array used for tests.
     *
     * @example
     * ```
     * // Start accumulating events, when the first listener is attached, flush
     * // the event after a timeout such that multiple listeners attached before
     * // the timeout would receive the event
     * this.onInstallExtension = Event.buffer(service.onInstallExtension, true);
     * ```
     */
    function buffer(event, flushAfterTimeout = false, _buffer = [], disposable) {
        let buffer = _buffer.slice();
        let listener = event(e => {
            if (buffer) {
                buffer.push(e);
            }
            else {
                emitter.fire(e);
            }
        });
        if (disposable) {
            disposable.add(listener);
        }
        const flush = () => {
            buffer?.forEach(e => emitter.fire(e));
            buffer = null;
        };
        const emitter = new Emitter({
            onWillAddFirstListener() {
                if (!listener) {
                    listener = event(e => emitter.fire(e));
                    if (disposable) {
                        disposable.add(listener);
                    }
                }
            },
            onDidAddFirstListener() {
                if (buffer) {
                    if (flushAfterTimeout) {
                        setTimeout(flush);
                    }
                    else {
                        flush();
                    }
                }
            },
            onDidRemoveLastListener() {
                if (listener) {
                    listener.dispose();
                }
                listener = null;
            }
        });
        if (disposable) {
            disposable.add(emitter);
        }
        return emitter.event;
    }
    Event.buffer = buffer;
    /**
     * Wraps the event in an {@link IChainableEvent}, allowing a more functional programming style.
     *
     * @example
     * ```
     * // Normal
     * const onEnterPressNormal = Event.filter(
     *   Event.map(onKeyPress.event, e => new StandardKeyboardEvent(e)),
     *   e.keyCode === KeyCode.Enter
     * ).event;
     *
     * // Using chain
     * const onEnterPressChain = Event.chain(onKeyPress.event, $ => $
     *   .map(e => new StandardKeyboardEvent(e))
     *   .filter(e => e.keyCode === KeyCode.Enter)
     * );
     * ```
     */
    function chain(event, sythensize) {
        const fn = (listener, thisArgs, disposables) => {
            const cs = sythensize(new ChainableSynthesis());
            return event(function (value) {
                const result = cs.evaluate(value);
                if (result !== HaltChainable) {
                    listener.call(thisArgs, result);
                }
            }, undefined, disposables);
        };
        return fn;
    }
    Event.chain = chain;
    const HaltChainable = Symbol('HaltChainable');
    class ChainableSynthesis {
        constructor() {
            this.steps = [];
        }
        map(fn) {
            this.steps.push(fn);
            return this;
        }
        forEach(fn) {
            this.steps.push(v => {
                fn(v);
                return v;
            });
            return this;
        }
        filter(fn) {
            this.steps.push(v => fn(v) ? v : HaltChainable);
            return this;
        }
        reduce(merge, initial) {
            let last = initial;
            this.steps.push(v => {
                last = merge(last, v);
                return last;
            });
            return this;
        }
        latch(equals = (a, b) => a === b) {
            let firstCall = true;
            let cache;
            this.steps.push(value => {
                const shouldEmit = firstCall || !equals(value, cache);
                firstCall = false;
                cache = value;
                return shouldEmit ? value : HaltChainable;
            });
            return this;
        }
        evaluate(value) {
            for (const step of this.steps) {
                value = step(value);
                if (value === HaltChainable) {
                    break;
                }
            }
            return value;
        }
    }
    /**
     * Creates an {@link Event} from a node event emitter.
     */
    function fromNodeEventEmitter(emitter, eventName, map = id => id) {
        const fn = (...args) => result.fire(map(...args));
        const onFirstListenerAdd = () => emitter.on(eventName, fn);
        const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
        const result = new Emitter({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
        return result.event;
    }
    Event.fromNodeEventEmitter = fromNodeEventEmitter;
    /**
     * Creates an {@link Event} from a DOM event emitter.
     */
    function fromDOMEventEmitter(emitter, eventName, map = id => id) {
        const fn = (...args) => result.fire(map(...args));
        const onFirstListenerAdd = () => emitter.addEventListener(eventName, fn);
        const onLastListenerRemove = () => emitter.removeEventListener(eventName, fn);
        const result = new Emitter({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
        return result.event;
    }
    Event.fromDOMEventEmitter = fromDOMEventEmitter;
    /**
     * Creates a promise out of an event, using the {@link Event.once} helper.
     */
    function toPromise(event, disposables) {
        let cancelRef;
        const promise = new Promise((resolve, reject) => {
            const listener = once(event)(resolve, null, disposables);
            // not resolved, matching the behavior of a normal disposal
            cancelRef = () => listener.dispose();
        });
        promise.cancel = cancelRef;
        return promise;
    }
    Event.toPromise = toPromise;
    /**
     * A convenience function for forwarding an event to another emitter which
     * improves readability.
     *
     * This is similar to {@link Relay} but allows instantiating and forwarding
     * on a single line and also allows for multiple source events.
     * @param from The event to forward.
     * @param to The emitter to forward the event to.
     * @example
     * Event.forward(event, emitter);
     * // equivalent to
     * event(e => emitter.fire(e));
     * // equivalent to
     * event(emitter.fire, emitter);
     */
    function forward(from, to) {
        return from(e => to.fire(e));
    }
    Event.forward = forward;
    function runAndSubscribe(event, handler, initial) {
        handler(initial);
        return event(e => handler(e));
    }
    Event.runAndSubscribe = runAndSubscribe;
    class EmitterObserver {
        constructor(_observable, store) {
            this._observable = _observable;
            this._counter = 0;
            this._hasChanged = false;
            const options = {
                onWillAddFirstListener: () => {
                    _observable.addObserver(this);
                    // Communicate to the observable that we received its current value and would like to be notified about future changes.
                    this._observable.reportChanges();
                },
                onDidRemoveLastListener: () => {
                    _observable.removeObserver(this);
                }
            };
            this.emitter = new Emitter(options);
            if (store) {
                store.add(this.emitter);
            }
        }
        beginUpdate(_observable) {
            // assert(_observable === this.obs);
            this._counter++;
        }
        handlePossibleChange(_observable) {
            // assert(_observable === this.obs);
        }
        handleChange(_observable, _change) {
            // assert(_observable === this.obs);
            this._hasChanged = true;
        }
        endUpdate(_observable) {
            // assert(_observable === this.obs);
            this._counter--;
            if (this._counter === 0) {
                this._observable.reportChanges();
                if (this._hasChanged) {
                    this._hasChanged = false;
                    this.emitter.fire(this._observable.get());
                }
            }
        }
    }
    /**
     * Creates an event emitter that is fired when the observable changes.
     * Each listeners subscribes to the emitter.
     */
    function fromObservable(obs, store) {
        const observer = new EmitterObserver(obs, store);
        return observer.emitter.event;
    }
    Event.fromObservable = fromObservable;
    /**
     * Each listener is attached to the observable directly.
     */
    function fromObservableLight(observable) {
        return (listener, thisArgs, disposables) => {
            let count = 0;
            let didChange = false;
            const observer = {
                beginUpdate() {
                    count++;
                },
                endUpdate() {
                    count--;
                    if (count === 0) {
                        observable.reportChanges();
                        if (didChange) {
                            didChange = false;
                            listener.call(thisArgs);
                        }
                    }
                },
                handlePossibleChange() {
                    // noop
                },
                handleChange() {
                    didChange = true;
                }
            };
            observable.addObserver(observer);
            observable.reportChanges();
            const disposable = {
                dispose() {
                    observable.removeObserver(observer);
                }
            };
            if (disposables instanceof DisposableStore) {
                disposables.add(disposable);
            }
            else if (Array.isArray(disposables)) {
                disposables.push(disposable);
            }
            return disposable;
        };
    }
    Event.fromObservableLight = fromObservableLight;
})(Event || (Event = {}));
class EventProfiling {
    static { this.all = new Set(); }
    static { this._idPool = 0; }
    constructor(name) {
        this.listenerCount = 0;
        this.invocationCount = 0;
        this.elapsedOverall = 0;
        this.durations = [];
        this.name = `${name}_${EventProfiling._idPool++}`;
        EventProfiling.all.add(this);
    }
    start(listenerCount) {
        this._stopWatch = new StopWatch();
        this.listenerCount = listenerCount;
    }
    stop() {
        if (this._stopWatch) {
            const elapsed = this._stopWatch.elapsed();
            this.durations.push(elapsed);
            this.elapsedOverall += elapsed;
            this.invocationCount += 1;
            this._stopWatch = undefined;
        }
    }
}
let _globalLeakWarningThreshold = -1;
class LeakageMonitor {
    static { this._idPool = 1; }
    constructor(_errorHandler, threshold, name = (LeakageMonitor._idPool++).toString(16).padStart(3, '0')) {
        this._errorHandler = _errorHandler;
        this.threshold = threshold;
        this.name = name;
        this._warnCountdown = 0;
    }
    dispose() {
        this._stacks?.clear();
    }
    check(stack, listenerCount) {
        const threshold = this.threshold;
        if (threshold <= 0 || listenerCount < threshold) {
            return undefined;
        }
        if (!this._stacks) {
            this._stacks = new Map();
        }
        const count = (this._stacks.get(stack.value) || 0);
        this._stacks.set(stack.value, count + 1);
        this._warnCountdown -= 1;
        if (this._warnCountdown <= 0) {
            // only warn on first exceed and then every time the limit
            // is exceeded by 50% again
            this._warnCountdown = threshold * 0.5;
            const [topStack, topCount] = this.getMostFrequentStack();
            const message = `[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`;
            console.warn(message);
            console.warn(topStack);
            const error = new ListenerLeakError(message, topStack);
            this._errorHandler(error);
        }
        return () => {
            const count = (this._stacks.get(stack.value) || 0);
            this._stacks.set(stack.value, count - 1);
        };
    }
    getMostFrequentStack() {
        if (!this._stacks) {
            return undefined;
        }
        let topStack;
        let topCount = 0;
        for (const [stack, count] of this._stacks) {
            if (!topStack || topCount < count) {
                topStack = [stack, count];
                topCount = count;
            }
        }
        return topStack;
    }
}
class Stacktrace {
    static create() {
        const err = new Error();
        return new Stacktrace(err.stack ?? '');
    }
    constructor(value) {
        this.value = value;
    }
    print() {
        console.warn(this.value.split('\n').slice(2).join('\n'));
    }
}
// error that is logged when going over the configured listener threshold
class ListenerLeakError extends Error {
    constructor(message, stack) {
        super(message);
        this.name = 'ListenerLeakError';
        this.stack = stack;
    }
}
// SEVERE error that is logged when having gone way over the configured listener
// threshold so that the emitter refuses to accept more listeners
class ListenerRefusalError extends Error {
    constructor(message, stack) {
        super(message);
        this.name = 'ListenerRefusalError';
        this.stack = stack;
    }
}
class UniqueContainer {
    constructor(value) {
        this.value = value;
    }
}
const compactionThreshold = 2;
/**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
    class Document {

        private readonly _onDidChange = new Emitter<(value:string)=>any>();

        public onDidChange = this._onDidChange.event;

        // getter-style
        // get onDidChange(): Event<(value:string)=>any> {
        // 	return this._onDidChange.event;
        // }

        private _doIt() {
            //...
            this._onDidChange.fire(value);
        }
    }
 */
class Emitter {
    constructor(options) {
        this._size = 0;
        this._options = options;
        this._leakageMon = (this._options?.leakWarningThreshold)
            ? new LeakageMonitor(options?.onListenerError ?? onUnexpectedError, this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold) :
            undefined;
        this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : undefined;
        this._deliveryQueue = this._options?.deliveryQueue;
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = true;
            // It is bad to have listeners at the time of disposing an emitter, it is worst to have listeners keep the emitter
            // alive via the reference that's embedded in their disposables. Therefore we loop over all remaining listeners and
            // unset their subscriptions/disposables. Looping and blaming remaining listeners is done on next tick because the
            // the following programming pattern is very popular:
            //
            // const someModel = this._disposables.add(new ModelObject()); // (1) create and register model
            // this._disposables.add(someModel.onDidChange(() => { ... }); // (2) subscribe and register model-event listener
            // ...later...
            // this._disposables.dispose(); disposes (1) then (2): don't warn after (1) but after the "overall dispose" is done
            if (this._deliveryQueue?.current === this) {
                this._deliveryQueue.reset();
            }
            if (this._listeners) {
                this._listeners = undefined;
                this._size = 0;
            }
            this._options?.onDidRemoveLastListener?.();
            this._leakageMon?.dispose();
        }
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
        this._event ??= (callback, thisArgs, disposables) => {
            if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
                const message = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
                console.warn(message);
                const tuple = this._leakageMon.getMostFrequentStack() ?? ['UNKNOWN stack', -1];
                const error = new ListenerRefusalError(`${message}. HINT: Stack shows most frequent listener (${tuple[1]}-times)`, tuple[0]);
                const errorHandler = this._options?.onListenerError || onUnexpectedError;
                errorHandler(error);
                return Disposable.None;
            }
            if (this._disposed) {
                // todo: should we warn if a listener is added to a disposed emitter? This happens often
                return Disposable.None;
            }
            if (thisArgs) {
                callback = callback.bind(thisArgs);
            }
            const contained = new UniqueContainer(callback);
            let removeMonitor;
            if (this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2)) {
                // check and record this emitter for potential leakage
                contained.stack = Stacktrace.create();
                removeMonitor = this._leakageMon.check(contained.stack, this._size + 1);
            }
            if (!this._listeners) {
                this._options?.onWillAddFirstListener?.(this);
                this._listeners = contained;
                this._options?.onDidAddFirstListener?.(this);
            }
            else if (this._listeners instanceof UniqueContainer) {
                this._deliveryQueue ??= new EventDeliveryQueuePrivate();
                this._listeners = [this._listeners, contained];
            }
            else {
                this._listeners.push(contained);
            }
            this._options?.onDidAddListener?.(this);
            this._size++;
            const result = toDisposable(() => {
                removeMonitor?.();
                this._removeListener(contained);
            });
            if (disposables instanceof DisposableStore) {
                disposables.add(result);
            }
            else if (Array.isArray(disposables)) {
                disposables.push(result);
            }
            return result;
        };
        return this._event;
    }
    _removeListener(listener) {
        this._options?.onWillRemoveListener?.(this);
        if (!this._listeners) {
            return; // expected if a listener gets disposed
        }
        if (this._size === 1) {
            this._listeners = undefined;
            this._options?.onDidRemoveLastListener?.(this);
            this._size = 0;
            return;
        }
        // size > 1 which requires that listeners be a list:
        const listeners = this._listeners;
        const index = listeners.indexOf(listener);
        if (index === -1) {
            console.log('disposed?', this._disposed);
            console.log('size?', this._size);
            console.log('arr?', JSON.stringify(this._listeners));
            throw new Error('Attempted to dispose unknown listener');
        }
        this._size--;
        listeners[index] = undefined;
        const adjustDeliveryQueue = this._deliveryQueue.current === this;
        if (this._size * compactionThreshold <= listeners.length) {
            let n = 0;
            for (let i = 0; i < listeners.length; i++) {
                if (listeners[i]) {
                    listeners[n++] = listeners[i];
                }
                else if (adjustDeliveryQueue && n < this._deliveryQueue.end) {
                    this._deliveryQueue.end--;
                    if (n < this._deliveryQueue.i) {
                        this._deliveryQueue.i--;
                    }
                }
            }
            listeners.length = n;
        }
    }
    _deliver(listener, value) {
        if (!listener) {
            return;
        }
        const errorHandler = this._options?.onListenerError || onUnexpectedError;
        if (!errorHandler) {
            listener.value(value);
            return;
        }
        try {
            listener.value(value);
        }
        catch (e) {
            errorHandler(e);
        }
    }
    /** Delivers items in the queue. Assumes the queue is ready to go. */
    _deliverQueue(dq) {
        const listeners = dq.current._listeners;
        while (dq.i < dq.end) {
            // important: dq.i is incremented before calling deliver() because it might reenter deliverQueue()
            this._deliver(listeners[dq.i++], dq.value);
        }
        dq.reset();
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(event) {
        if (this._deliveryQueue?.current) {
            this._deliverQueue(this._deliveryQueue);
            this._perfMon?.stop(); // last fire() will have starting perfmon, stop it before starting the next dispatch
        }
        this._perfMon?.start(this._size);
        if (!this._listeners) ;
        else if (this._listeners instanceof UniqueContainer) {
            this._deliver(this._listeners, event);
        }
        else {
            const dq = this._deliveryQueue;
            dq.enqueue(this, event, this._listeners.length);
            this._deliverQueue(dq);
        }
        this._perfMon?.stop();
    }
    hasListeners() {
        return this._size > 0;
    }
}
const createEventDeliveryQueue = () => new EventDeliveryQueuePrivate();
class EventDeliveryQueuePrivate {
    constructor() {
        /**
         * Index in current's listener list.
         */
        this.i = -1;
        /**
         * The last index in the listener's list to deliver.
         */
        this.end = 0;
    }
    enqueue(emitter, value, end) {
        this.i = 0;
        this.end = end;
        this.current = emitter;
        this.value = value;
    }
    reset() {
        this.i = this.end; // force any current emission loop to stop, mainly for during dispose
        this.current = undefined;
        this.value = undefined;
    }
}
class PauseableEmitter extends Emitter {
    constructor(options) {
        super(options);
        this._isPaused = 0;
        this._eventQueue = new LinkedList();
        this._mergeFn = options?.merge;
    }
    pause() {
        this._isPaused++;
    }
    resume() {
        if (this._isPaused !== 0 && --this._isPaused === 0) {
            if (this._mergeFn) {
                // use the merge function to create a single composite
                // event. make a copy in case firing pauses this emitter
                if (this._eventQueue.size > 0) {
                    const events = Array.from(this._eventQueue);
                    this._eventQueue.clear();
                    super.fire(this._mergeFn(events));
                }
            }
            else {
                // no merging, fire each event individually and test
                // that this emitter isn't paused halfway through
                while (!this._isPaused && this._eventQueue.size !== 0) {
                    super.fire(this._eventQueue.shift());
                }
            }
        }
    }
    fire(event) {
        if (this._size) {
            if (this._isPaused !== 0) {
                this._eventQueue.push(event);
            }
            else {
                super.fire(event);
            }
        }
    }
}
class DebounceEmitter extends PauseableEmitter {
    constructor(options) {
        super(options);
        this._delay = options.delay ?? 100;
    }
    fire(event) {
        if (!this._handle) {
            this.pause();
            this._handle = setTimeout(() => {
                this._handle = undefined;
                this.resume();
            }, this._delay);
        }
        super.fire(event);
    }
}
/**
 * An emitter which queue all events and then process them at the
 * end of the event loop.
 */
class MicrotaskEmitter extends Emitter {
    constructor(options) {
        super(options);
        this._queuedEvents = [];
        this._mergeFn = options?.merge;
    }
    fire(event) {
        if (!this.hasListeners()) {
            return;
        }
        this._queuedEvents.push(event);
        if (this._queuedEvents.length === 1) {
            queueMicrotask(() => {
                if (this._mergeFn) {
                    super.fire(this._mergeFn(this._queuedEvents));
                }
                else {
                    this._queuedEvents.forEach(e => super.fire(e));
                }
                this._queuedEvents = [];
            });
        }
    }
}
/**
 * An event emitter that multiplexes many events into a single event.
 *
 * @example Listen to the `onData` event of all `Thing`s, dynamically adding and removing `Thing`s
 * to the multiplexer as needed.
 *
 * ```typescript
 * const anythingDataMultiplexer = new EventMultiplexer<{ data: string }>();
 *
 * const thingListeners = DisposableMap<Thing, IDisposable>();
 *
 * thingService.onDidAddThing(thing => {
 *   thingListeners.set(thing, anythingDataMultiplexer.add(thing.onData);
 * });
 * thingService.onDidRemoveThing(thing => {
 *   thingListeners.deleteAndDispose(thing);
 * });
 *
 * anythingDataMultiplexer.event(e => {
 *   console.log('Something fired data ' + e.data)
 * });
 * ```
 */
class EventMultiplexer {
    constructor() {
        this.hasListeners = false;
        this.events = [];
        this.emitter = new Emitter({
            onWillAddFirstListener: () => this.onFirstListenerAdd(),
            onDidRemoveLastListener: () => this.onLastListenerRemove()
        });
    }
    get event() {
        return this.emitter.event;
    }
    add(event) {
        const e = { event: event, listener: null };
        this.events.push(e);
        if (this.hasListeners) {
            this.hook(e);
        }
        const dispose = () => {
            if (this.hasListeners) {
                this.unhook(e);
            }
            const idx = this.events.indexOf(e);
            this.events.splice(idx, 1);
        };
        return toDisposable(createSingleCallFunction(dispose));
    }
    onFirstListenerAdd() {
        this.hasListeners = true;
        this.events.forEach(e => this.hook(e));
    }
    onLastListenerRemove() {
        this.hasListeners = false;
        this.events.forEach(e => this.unhook(e));
    }
    hook(e) {
        e.listener = e.event(r => this.emitter.fire(r));
    }
    unhook(e) {
        e.listener?.dispose();
        e.listener = null;
    }
    dispose() {
        this.emitter.dispose();
        for (const e of this.events) {
            e.listener?.dispose();
        }
        this.events = [];
    }
}
/**
 * The EventBufferer is useful in situations in which you want
 * to delay firing your events during some code.
 * You can wrap that code and be sure that the event will not
 * be fired during that wrap.
 *
 * ```
 * const emitter: Emitter;
 * const delayer = new EventDelayer();
 * const delayedEvent = delayer.wrapEvent(emitter.event);
 *
 * delayedEvent(console.log);
 *
 * delayer.bufferEvents(() => {
 *   emitter.fire(); // event will not be fired yet
 * });
 *
 * // event will only be fired at this point
 * ```
 */
class EventBufferer {
    constructor() {
        this.data = [];
    }
    wrapEvent(event, reduce, initial) {
        return (listener, thisArgs, disposables) => {
            return event(i => {
                const data = this.data[this.data.length - 1];
                // Non-reduce scenario
                if (!reduce) {
                    // Buffering case
                    if (data) {
                        data.buffers.push(() => listener.call(thisArgs, i));
                    }
                    else {
                        // Not buffering case
                        listener.call(thisArgs, i);
                    }
                    return;
                }
                // Reduce scenario
                const reduceData = data;
                // Not buffering case
                if (!reduceData) {
                    // TODO: Is there a way to cache this reduce call for all listeners?
                    listener.call(thisArgs, reduce(initial, i));
                    return;
                }
                // Buffering case
                reduceData.items ??= [];
                reduceData.items.push(i);
                if (reduceData.buffers.length === 0) {
                    // Include a single buffered function that will reduce all events when we're done buffering events
                    data.buffers.push(() => {
                        // cache the reduced result so that the value can be shared across all listeners
                        reduceData.reducedResult ??= initial
                            ? reduceData.items.reduce(reduce, initial)
                            : reduceData.items.reduce(reduce);
                        listener.call(thisArgs, reduceData.reducedResult);
                    });
                }
            }, undefined, disposables);
        };
    }
    bufferEvents(fn) {
        const data = { buffers: new Array() };
        this.data.push(data);
        const r = fn();
        this.data.pop();
        data.buffers.forEach(flush => flush());
        return r;
    }
}
/**
 * A Relay is an event forwarder which functions as a replugabble event pipe.
 * Once created, you can connect an input event to it and it will simply forward
 * events from that input event through its own `event` property. The `input`
 * can be changed at any point in time.
 */
class Relay {
    constructor() {
        this.listening = false;
        this.inputEvent = Event.None;
        this.inputEventListener = Disposable.None;
        this.emitter = new Emitter({
            onDidAddFirstListener: () => {
                this.listening = true;
                this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter);
            },
            onDidRemoveLastListener: () => {
                this.listening = false;
                this.inputEventListener.dispose();
            }
        });
        this.event = this.emitter.event;
    }
    set input(event) {
        this.inputEvent = event;
        if (this.listening) {
            this.inputEventListener.dispose();
            this.inputEventListener = event(this.emitter.fire, this.emitter);
        }
    }
    dispose() {
        this.inputEventListener.dispose();
        this.emitter.dispose();
    }
}

export { DebounceEmitter, Emitter, Event, EventBufferer, EventMultiplexer, EventProfiling, ListenerLeakError, ListenerRefusalError, MicrotaskEmitter, PauseableEmitter, Relay, createEventDeliveryQueue };
