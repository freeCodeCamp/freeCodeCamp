/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CancellationToken } from 'vs/base/common/cancellation';
import { onUnexpectedError } from 'vs/base/common/errors';
import { createSingleCallFunction } from 'vs/base/common/functional';
import { combinedDisposable, Disposable, DisposableMap, DisposableStore, IDisposable, toDisposable } from 'vs/base/common/lifecycle';
import { LinkedList } from 'vs/base/common/linkedList';
import { IObservable, IObserver } from 'vs/base/common/observable';
import { StopWatch } from 'vs/base/common/stopwatch';
import { MicrotaskDelay } from 'vs/base/common/symbols';


// -----------------------------------------------------------------------------------------------------------------------
// Uncomment the next line to print warnings whenever a listener is GC'ed without having been disposed. This is a LEAK.
// -----------------------------------------------------------------------------------------------------------------------
const _enableListenerGCedWarning = false
	// || Boolean("TRUE") // causes a linter warning so that it cannot be pushed
	;

// -----------------------------------------------------------------------------------------------------------------------
// Uncomment the next line to print warnings whenever an emitter with listeners is disposed. That is a sign of code smell.
// -----------------------------------------------------------------------------------------------------------------------
const _enableDisposeWithListenerWarning = false
	// || Boolean("TRUE") // causes a linter warning so that it cannot be pushed
	;


// -----------------------------------------------------------------------------------------------------------------------
// Uncomment the next line to print warnings whenever a snapshotted event is used repeatedly without cleanup.
// See https://github.com/microsoft/vscode/issues/142851
// -----------------------------------------------------------------------------------------------------------------------
const _enableSnapshotPotentialLeakWarning = false
	// || Boolean("TRUE") // causes a linter warning so that it cannot be pushed
	;

/**
 * An event with zero or one parameters that can be subscribed to. The event is a function itself.
 */
export interface Event<T> {
	(listener: (e: T) => any, thisArgs?: any, disposables?: IDisposable[] | DisposableStore): IDisposable;
}

export namespace Event {
	export const None: Event<any> = () => Disposable.None;

	function _addLeakageTraceLogic(options: EmitterOptions) {
		if (_enableSnapshotPotentialLeakWarning) {
			const { onDidAddListener: origListenerDidAdd } = options;
			const stack = Stacktrace.create();
			let count = 0;
			options.onDidAddListener = () => {
				if (++count === 2) {
					console.warn('snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here');
					stack.print();
				}
				origListenerDidAdd?.();
			};
		}
	}

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
	export function defer(event: Event<unknown>, disposable?: DisposableStore): Event<void> {
		return debounce<unknown, void>(event, () => void 0, 0, undefined, true, undefined, disposable);
	}

	/**
	 * Given an event, returns another event which only fires once.
	 *
	 * @param event The event source for the new event.
	 */
	export function once<T>(event: Event<T>): Event<T> {
		return (listener, thisArgs = null, disposables?) => {
			// we need this, in case the event fires during the listener call
			let didFire = false;
			let result: IDisposable | undefined = undefined;
			result = event(e => {
				if (didFire) {
					return;
				} else if (result) {
					result.dispose();
				} else {
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
	export function map<I, O>(event: Event<I>, map: (i: I) => O, disposable?: DisposableStore): Event<O> {
		return snapshot((listener, thisArgs = null, disposables?) => event(i => listener.call(thisArgs, map(i)), null, disposables), disposable);
	}

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
	export function forEach<I>(event: Event<I>, each: (i: I) => void, disposable?: DisposableStore): Event<I> {
		return snapshot((listener, thisArgs = null, disposables?) => event(i => { each(i); listener.call(thisArgs, i); }, null, disposables), disposable);
	}

	/**
	 * Wraps an event in another event that fires only when some condition is met.
	 *
	 * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
	 * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
	 * returned event causes this utility to leak a listener on the original event.
	 *
	 * @param event The event source for the new event.
	 * @param filter The filter function that defines the condition. The event will fire for the object if this function
	 * returns true.
	 * @param disposable A disposable store to add the new EventEmitter to.
	 */
	export function filter<T, U>(event: Event<T | U>, filter: (e: T | U) => e is T, disposable?: DisposableStore): Event<T>;
	export function filter<T>(event: Event<T>, filter: (e: T) => boolean, disposable?: DisposableStore): Event<T>;
	export function filter<T, R>(event: Event<T | R>, filter: (e: T | R) => e is R, disposable?: DisposableStore): Event<R>;
	export function filter<T>(event: Event<T>, filter: (e: T) => boolean, disposable?: DisposableStore): Event<T> {
		return snapshot((listener, thisArgs = null, disposables?) => event(e => filter(e) && listener.call(thisArgs, e), null, disposables), disposable);
	}

	/**
	 * Given an event, returns the same event but typed as `Event<void>`.
	 */
	export function signal<T>(event: Event<T>): Event<void> {
		return event as Event<any> as Event<void>;
	}

	/**
	 * Given a collection of events, returns a single event which emits whenever any of the provided events emit.
	 */
	export function any<T>(...events: Event<T>[]): Event<T>;
	export function any(...events: Event<any>[]): Event<void>;
	export function any<T>(...events: Event<T>[]): Event<T> {
		return (listener, thisArgs = null, disposables?) => {
			const disposable = combinedDisposable(...events.map(event => event(e => listener.call(thisArgs, e))));
			return addAndReturnDisposable(disposable, disposables);
		};
	}

	/**
	 * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
	 * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
	 * returned event causes this utility to leak a listener on the original event.
	 */
	export function reduce<I, O>(event: Event<I>, merge: (last: O | undefined, event: I) => O, initial?: O, disposable?: DisposableStore): Event<O> {
		let output: O | undefined = initial;

		return map<I, O>(event, e => {
			output = merge(output, e);
			return output;
		}, disposable);
	}

	function snapshot<T>(event: Event<T>, disposable: DisposableStore | undefined): Event<T> {
		let listener: IDisposable | undefined;

		const options: EmitterOptions | undefined = {
			onWillAddFirstListener() {
				listener = event(emitter.fire, emitter);
			},
			onDidRemoveLastListener() {
				listener?.dispose();
			}
		};

		if (!disposable) {
			_addLeakageTraceLogic(options);
		}

		const emitter = new Emitter<T>(options);

		disposable?.add(emitter);

		return emitter.event;
	}

	/**
	 * Adds the IDisposable to the store if it's set, and returns it. Useful to
	 * Event function implementation.
	 */
	function addAndReturnDisposable<T extends IDisposable>(d: T, store: DisposableStore | IDisposable[] | undefined): T {
		if (store instanceof Array) {
			store.push(d);
		} else if (store) {
			store.add(d);
		}
		return d;
	}

	/**
	 * Given an event, creates a new emitter that event that will debounce events based on {@link delay} and give an
	 * array event object of all events that fired.
	 *
	 * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
	 * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
	 * returned event causes this utility to leak a listener on the original event.
	 *
	 * @param event The original event to debounce.
	 * @param merge A function that reduces all events into a single event.
	 * @param delay The number of milliseconds to debounce.
	 * @param leading Whether to fire a leading event without debouncing.
	 * @param flushOnListenerRemove Whether to fire all debounced events when a listener is removed. If this is not
	 * specified, some events could go missing. Use this if it's important that all events are processed, even if the
	 * listener gets disposed before the debounced event fires.
	 * @param leakWarningThreshold See {@link EmitterOptions.leakWarningThreshold}.
	 * @param disposable A disposable store to register the debounce emitter to.
	 */
	export function debounce<T>(event: Event<T>, merge: (last: T | undefined, event: T) => T, delay?: number | typeof MicrotaskDelay, leading?: boolean, flushOnListenerRemove?: boolean, leakWarningThreshold?: number, disposable?: DisposableStore): Event<T>;
	export function debounce<I, O>(event: Event<I>, merge: (last: O | undefined, event: I) => O, delay?: number | typeof MicrotaskDelay, leading?: boolean, flushOnListenerRemove?: boolean, leakWarningThreshold?: number, disposable?: DisposableStore): Event<O>;
	export function debounce<I, O>(event: Event<I>, merge: (last: O | undefined, event: I) => O, delay: number | typeof MicrotaskDelay = 100, leading = false, flushOnListenerRemove = false, leakWarningThreshold?: number, disposable?: DisposableStore): Event<O> {
		let subscription: IDisposable;
		let output: O | undefined = undefined;
		let handle: any = undefined;
		let numDebouncedCalls = 0;
		let doFire: (() => void) | undefined;

		const options: EmitterOptions | undefined = {
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
							emitter.fire(_output!);
						}
						numDebouncedCalls = 0;
					};

					if (typeof delay === 'number') {
						clearTimeout(handle);
						handle = setTimeout(doFire, delay);
					} else {
						if (handle === undefined) {
							handle = 0;
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

		if (!disposable) {
			_addLeakageTraceLogic(options);
		}

		const emitter = new Emitter<O>(options);

		disposable?.add(emitter);

		return emitter.event;
	}

	/**
	 * Debounces an event, firing after some delay (default=0) with an array of all event original objects.
	 *
	 * *NOTE* that this function returns an `Event` and it MUST be called with a `DisposableStore` whenever the returned
	 * event is accessible to "third parties", e.g the event is a public property. Otherwise a leaked listener on the
	 * returned event causes this utility to leak a listener on the original event.
	 */
	export function accumulate<T>(event: Event<T>, delay: number = 0, disposable?: DisposableStore): Event<T[]> {
		return Event.debounce<T, T[]>(event, (last, e) => {
			if (!last) {
				return [e];
			}
			last.push(e);
			return last;
		}, delay, undefined, true, undefined, disposable);
	}

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
	export function latch<T>(event: Event<T>, equals: (a: T, b: T) => boolean = (a, b) => a === b, disposable?: DisposableStore): Event<T> {
		let firstCall = true;
		let cache: T;

		return filter(event, value => {
			const shouldEmit = firstCall || !equals(value, cache);
			firstCall = false;
			cache = value;
			return shouldEmit;
		}, disposable);
	}

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
	export function split<T, U>(event: Event<T | U>, isT: (e: T | U) => e is T, disposable?: DisposableStore): [Event<T>, Event<U>] {
		return [
			Event.filter(event, isT, disposable),
			Event.filter(event, e => !isT(e), disposable) as Event<U>,
		];
	}

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
	export function buffer<T>(event: Event<T>, flushAfterTimeout = false, _buffer: T[] = [], disposable?: DisposableStore): Event<T> {
		let buffer: T[] | null = _buffer.slice();

		let listener: IDisposable | null = event(e => {
			if (buffer) {
				buffer.push(e);
			} else {
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

		const emitter = new Emitter<T>({
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
					} else {
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
	export function chain<T, R>(event: Event<T>, sythensize: ($: IChainableSythensis<T>) => IChainableSythensis<R>): Event<R> {
		const fn: Event<R> = (listener, thisArgs, disposables) => {
			const cs = sythensize(new ChainableSynthesis()) as ChainableSynthesis;
			return event(function (value) {
				const result = cs.evaluate(value);
				if (result !== HaltChainable) {
					listener.call(thisArgs, result);
				}
			}, undefined, disposables);
		};

		return fn;
	}

	const HaltChainable = Symbol('HaltChainable');

	class ChainableSynthesis implements IChainableSythensis<any> {
		private readonly steps: ((input: any) => any)[] = [];

		map<O>(fn: (i: any) => O): this {
			this.steps.push(fn);
			return this;
		}

		forEach(fn: (i: any) => void): this {
			this.steps.push(v => {
				fn(v);
				return v;
			});
			return this;
		}

		filter(fn: (e: any) => boolean): this {
			this.steps.push(v => fn(v) ? v : HaltChainable);
			return this;
		}

		reduce<R>(merge: (last: R | undefined, event: any) => R, initial?: R | undefined): this {
			let last = initial;
			this.steps.push(v => {
				last = merge(last, v);
				return last;
			});
			return this;
		}

		latch(equals: (a: any, b: any) => boolean = (a, b) => a === b): ChainableSynthesis {
			let firstCall = true;
			let cache: any;
			this.steps.push(value => {
				const shouldEmit = firstCall || !equals(value, cache);
				firstCall = false;
				cache = value;
				return shouldEmit ? value : HaltChainable;
			});

			return this;
		}

		public evaluate(value: any) {
			for (const step of this.steps) {
				value = step(value);
				if (value === HaltChainable) {
					break;
				}
			}

			return value;
		}
	}

	export interface IChainableSythensis<T> {
		map<O>(fn: (i: T) => O): IChainableSythensis<O>;
		forEach(fn: (i: T) => void): IChainableSythensis<T>;
		filter<R extends T>(fn: (e: T) => e is R): IChainableSythensis<R>;
		filter(fn: (e: T) => boolean): IChainableSythensis<T>;
		reduce<R>(merge: (last: R, event: T) => R, initial: R): IChainableSythensis<R>;
		reduce<R>(merge: (last: R | undefined, event: T) => R): IChainableSythensis<R>;
		latch(equals?: (a: T, b: T) => boolean): IChainableSythensis<T>;
	}

	export interface NodeEventEmitter {
		on(event: string | symbol, listener: Function): unknown;
		removeListener(event: string | symbol, listener: Function): unknown;
	}

	/**
	 * Creates an {@link Event} from a node event emitter.
	 */
	export function fromNodeEventEmitter<T>(emitter: NodeEventEmitter, eventName: string, map: (...args: any[]) => T = id => id): Event<T> {
		const fn = (...args: any[]) => result.fire(map(...args));
		const onFirstListenerAdd = () => emitter.on(eventName, fn);
		const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
		const result = new Emitter<T>({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });

		return result.event;
	}

	export interface DOMEventEmitter {
		addEventListener(event: string | symbol, listener: Function): void;
		removeEventListener(event: string | symbol, listener: Function): void;
	}

	/**
	 * Creates an {@link Event} from a DOM event emitter.
	 */
	export function fromDOMEventEmitter<T>(emitter: DOMEventEmitter, eventName: string, map: (...args: any[]) => T = id => id): Event<T> {
		const fn = (...args: any[]) => result.fire(map(...args));
		const onFirstListenerAdd = () => emitter.addEventListener(eventName, fn);
		const onLastListenerRemove = () => emitter.removeEventListener(eventName, fn);
		const result = new Emitter<T>({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });

		return result.event;
	}

	/**
	 * Creates a promise out of an event, using the {@link Event.once} helper.
	 */
	export function toPromise<T>(event: Event<T>): Promise<T> {
		return new Promise(resolve => once(event)(resolve));
	}

	/**
	 * Creates an event out of a promise that fires once when the promise is
	 * resolved with the result of the promise or `undefined`.
	 */
	export function fromPromise<T>(promise: Promise<T>): Event<T | undefined> {
		const result = new Emitter<T | undefined>();

		promise.then(res => {
			result.fire(res);
		}, () => {
			result.fire(undefined);
		}).finally(() => {
			result.dispose();
		});

		return result.event;
	}

	/**
	 * A convenience function for forwarding an event to another emitter which
	 * improves readability.allows Event.forward(event, emitter) instead of `event(e => emitter.fire(e))`.
	 * @param from The event to forward.
	 * @param to The emitter to forward the event to.
	 * @example
	 * Event.forward(event, emitter);
	 * // equivalent to
	 * event(e => emitter.fire(e));
	 * // equivalent to
	 * event(emitter.fire, emitter);
	 */
	export function forward<T>(from: Event<T>, to: Emitter<T>): IDisposable {
		return from(e => to.fire(e));
	}

	/**
	 * Adds a listener to an event and calls the listener immediately with undefined as the event object.
	 *
	 * @example
	 * ```
	 * // Initialize the UI and update it when dataChangeEvent fires
	 * runAndSubscribe(dataChangeEvent, () => this._updateUI());
	 * ```
	 */
	export function runAndSubscribe<T>(event: Event<T>, handler: (e: T) => any, initial: T): IDisposable;
	export function runAndSubscribe<T>(event: Event<T>, handler: (e: T | undefined) => any): IDisposable;
	export function runAndSubscribe<T>(event: Event<T>, handler: (e: T | undefined) => any, initial?: T): IDisposable {
		handler(initial);
		return event(e => handler(e));
	}

	class EmitterObserver<T> implements IObserver {

		readonly emitter: Emitter<T>;

		private _counter = 0;
		private _hasChanged = false;

		constructor(readonly _observable: IObservable<T, any>, store: DisposableStore | undefined) {
			const options: EmitterOptions = {
				onWillAddFirstListener: () => {
					_observable.addObserver(this);
				},
				onDidRemoveLastListener: () => {
					_observable.removeObserver(this);
				}
			};
			if (!store) {
				_addLeakageTraceLogic(options);
			}
			this.emitter = new Emitter<T>(options);
			if (store) {
				store.add(this.emitter);
			}
		}

		beginUpdate<T>(_observable: IObservable<T, void>): void {
			// assert(_observable === this.obs);
			this._counter++;
		}

		handlePossibleChange<T>(_observable: IObservable<T, unknown>): void {
			// assert(_observable === this.obs);
		}

		handleChange<T, TChange>(_observable: IObservable<T, TChange>, _change: TChange): void {
			// assert(_observable === this.obs);
			this._hasChanged = true;
		}

		endUpdate<T>(_observable: IObservable<T, void>): void {
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
	export function fromObservable<T>(obs: IObservable<T, any>, store?: DisposableStore): Event<T> {
		const observer = new EmitterObserver(obs, store);
		return observer.emitter.event;
	}

	/**
	 * Each listener is attached to the observable directly.
	 */
	export function fromObservableLight(observable: IObservable<any>): Event<void> {
		return (listener, thisArgs, disposables) => {
			let count = 0;
			let didChange = false;
			const observer: IObserver = {
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
			} else if (Array.isArray(disposables)) {
				disposables.push(disposable);
			}

			return disposable;
		};
	}
}

export interface EmitterOptions {
	/**
	 * Optional function that's called *before* the very first listener is added
	 */
	onWillAddFirstListener?: Function;
	/**
	 * Optional function that's called *after* the very first listener is added
	 */
	onDidAddFirstListener?: Function;
	/**
	 * Optional function that's called after a listener is added
	 */
	onDidAddListener?: Function;
	/**
	 * Optional function that's called *after* remove the very last listener
	 */
	onDidRemoveLastListener?: Function;
	/**
	 * Optional function that's called *before* a listener is removed
	 */
	onWillRemoveListener?: Function;
	/**
	 * Optional function that's called when a listener throws an error. Defaults to
	 * {@link onUnexpectedError}
	 */
	onListenerError?: (e: any) => void;
	/**
	 * Number of listeners that are allowed before assuming a leak. Default to
	 * a globally configured value
	 *
	 * @see setGlobalLeakWarningThreshold
	 */
	leakWarningThreshold?: number;
	/**
	 * Pass in a delivery queue, which is useful for ensuring
	 * in order event delivery across multiple emitters.
	 */
	deliveryQueue?: EventDeliveryQueue;

	/** ONLY enable this during development */
	_profName?: string;
}


export class EventProfiling {

	static readonly all = new Set<EventProfiling>();

	private static _idPool = 0;

	readonly name: string;
	public listenerCount: number = 0;
	public invocationCount = 0;
	public elapsedOverall = 0;
	public durations: number[] = [];

	private _stopWatch?: StopWatch;

	constructor(name: string) {
		this.name = `${name}_${EventProfiling._idPool++}`;
		EventProfiling.all.add(this);
	}

	start(listenerCount: number): void {
		this._stopWatch = new StopWatch();
		this.listenerCount = listenerCount;
	}

	stop(): void {
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
export function setGlobalLeakWarningThreshold(n: number): IDisposable {
	const oldValue = _globalLeakWarningThreshold;
	_globalLeakWarningThreshold = n;
	return {
		dispose() {
			_globalLeakWarningThreshold = oldValue;
		}
	};
}

class LeakageMonitor {

	private static _idPool = 1;

	private _stacks: Map<string, number> | undefined;
	private _warnCountdown: number = 0;

	constructor(
		private readonly _errorHandler: (err: Error) => void,
		readonly threshold: number,
		readonly name: string = (LeakageMonitor._idPool++).toString(16).padStart(3, '0')
	) { }

	dispose(): void {
		this._stacks?.clear();
	}

	check(stack: Stacktrace, listenerCount: number): undefined | (() => void) {

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

			const [topStack, topCount] = this.getMostFrequentStack()!;
			const message = `[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`;
			console.warn(message);
			console.warn(topStack!);

			const error = new ListenerLeakError(message, topStack);
			this._errorHandler(error);
		}

		return () => {
			const count = (this._stacks!.get(stack.value) || 0);
			this._stacks!.set(stack.value, count - 1);
		};
	}

	getMostFrequentStack(): [string, number] | undefined {
		if (!this._stacks) {
			return undefined;
		}
		let topStack: [string, number] | undefined;
		let topCount: number = 0;
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

	private constructor(readonly value: string) { }

	print() {
		console.warn(this.value.split('\n').slice(2).join('\n'));
	}
}

// error that is logged when going over the configured listener threshold
export class ListenerLeakError extends Error {
	constructor(message: string, stack: string) {
		super(message);
		this.name = 'ListenerLeakError';
		this.stack = stack;
	}
}

// SEVERE error that is logged when having gone way over the configured listener
// threshold so that the emitter refuses to accept more listeners
export class ListenerRefusalError extends Error {
	constructor(message: string, stack: string) {
		super(message);
		this.name = 'ListenerRefusalError';
		this.stack = stack;
	}
}

let id = 0;
class UniqueContainer<T> {
	stack?: Stacktrace;
	public id = id++;
	constructor(public readonly value: T) { }
}
const compactionThreshold = 2;

type ListenerContainer<T> = UniqueContainer<(data: T) => void>;
type ListenerOrListeners<T> = (ListenerContainer<T> | undefined)[] | ListenerContainer<T>;

const forEachListener = <T>(listeners: ListenerOrListeners<T>, fn: (c: ListenerContainer<T>) => void) => {
	if (listeners instanceof UniqueContainer) {
		fn(listeners);
	} else {
		for (let i = 0; i < listeners.length; i++) {
			const l = listeners[i];
			if (l) {
				fn(l);
			}
		}
	}
};


let _listenerFinalizers: FinalizationRegistry<string> | undefined;

if (_enableListenerGCedWarning) {
	const leaks: string[] = [];

	setInterval(() => {
		if (leaks.length === 0) {
			return;
		}
		console.warn('[LEAKING LISTENERS] GC\'ed these listeners that were NOT yet disposed:');
		console.warn(leaks.join('\n'));
		leaks.length = 0;
	}, 3000);

	_listenerFinalizers = new FinalizationRegistry(heldValue => {
		if (typeof heldValue === 'string') {
			leaks.push(heldValue);
		}
	});
}

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
export class Emitter<T> {

	private readonly _options?: EmitterOptions;
	private readonly _leakageMon?: LeakageMonitor;
	private readonly _perfMon?: EventProfiling;
	private _disposed?: true;
	private _event?: Event<T>;

	/**
	 * A listener, or list of listeners. A single listener is the most common
	 * for event emitters (#185789), so we optimize that special case to avoid
	 * wrapping it in an array (just like Node.js itself.)
	 *
	 * A list of listeners never 'downgrades' back to a plain function if
	 * listeners are removed, for two reasons:
	 *
	 *  1. That's complicated (especially with the deliveryQueue)
	 *  2. A listener with >1 listener is likely to have >1 listener again at
	 *     some point, and swapping between arrays and functions may[citation needed]
	 *     introduce unnecessary work and garbage.
	 *
	 * The array listeners can be 'sparse', to avoid reallocating the array
	 * whenever any listener is added or removed. If more than `1 / compactionThreshold`
	 * of the array is empty, only then is it resized.
	 */
	protected _listeners?: ListenerOrListeners<T>;

	/**
	 * Always to be defined if _listeners is an array. It's no longer a true
	 * queue, but holds the dispatching 'state'. If `fire()` is called on an
	 * emitter, any work left in the _deliveryQueue is finished first.
	 */
	private _deliveryQueue?: EventDeliveryQueuePrivate;
	protected _size = 0;

	constructor(options?: EmitterOptions) {
		this._options = options;
		this._leakageMon = (_globalLeakWarningThreshold > 0 || this._options?.leakWarningThreshold)
			? new LeakageMonitor(options?.onListenerError ?? onUnexpectedError, this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold) :
			undefined;
		this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : undefined;
		this._deliveryQueue = this._options?.deliveryQueue as EventDeliveryQueuePrivate | undefined;
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
				if (_enableDisposeWithListenerWarning) {
					const listeners = this._listeners;
					queueMicrotask(() => {
						forEachListener(listeners, l => l.stack?.print());
					});
				}

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
	get event(): Event<T> {
		this._event ??= (callback: (e: T) => any, thisArgs?: any, disposables?: IDisposable[] | DisposableStore) => {
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

			let removeMonitor: Function | undefined;
			let stack: Stacktrace | undefined;
			if (this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2)) {
				// check and record this emitter for potential leakage
				contained.stack = Stacktrace.create();
				removeMonitor = this._leakageMon.check(contained.stack, this._size + 1);
			}

			if (_enableDisposeWithListenerWarning) {
				contained.stack = stack ?? Stacktrace.create();
			}

			if (!this._listeners) {
				this._options?.onWillAddFirstListener?.(this);
				this._listeners = contained;
				this._options?.onDidAddFirstListener?.(this);
			} else if (this._listeners instanceof UniqueContainer) {
				this._deliveryQueue ??= new EventDeliveryQueuePrivate();
				this._listeners = [this._listeners, contained];
			} else {
				this._listeners.push(contained);
			}

			this._size++;


			const result = toDisposable(() => {
				_listenerFinalizers?.unregister(result);
				removeMonitor?.();
				this._removeListener(contained);
			});
			if (disposables instanceof DisposableStore) {
				disposables.add(result);
			} else if (Array.isArray(disposables)) {
				disposables.push(result);
			}

			if (_listenerFinalizers) {
				const stack = new Error().stack!.split('\n').slice(2, 3).join('\n').trim();
				const match = /(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(stack);
				_listenerFinalizers.register(result, match?.[2] ?? stack, result);
			}

			return result;
		};

		return this._event;
	}

	private _removeListener(listener: ListenerContainer<T>) {
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
		const listeners = this._listeners as (ListenerContainer<T> | undefined)[];

		const index = listeners.indexOf(listener);
		if (index === -1) {
			console.log('disposed?', this._disposed);
			console.log('size?', this._size);
			console.log('arr?', JSON.stringify(this._listeners));
			throw new Error('Attempted to dispose unknown listener');
		}

		this._size--;
		listeners[index] = undefined;

		const adjustDeliveryQueue = this._deliveryQueue!.current === this;
		if (this._size * compactionThreshold <= listeners.length) {
			let n = 0;
			for (let i = 0; i < listeners.length; i++) {
				if (listeners[i]) {
					listeners[n++] = listeners[i];
				} else if (adjustDeliveryQueue) {
					this._deliveryQueue!.end--;
					if (n < this._deliveryQueue!.i) {
						this._deliveryQueue!.i--;
					}
				}
			}
			listeners.length = n;
		}
	}

	private _deliver(listener: undefined | UniqueContainer<(value: T) => void>, value: T) {
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
		} catch (e) {
			errorHandler(e);
		}
	}

	/** Delivers items in the queue. Assumes the queue is ready to go. */
	private _deliverQueue(dq: EventDeliveryQueuePrivate) {
		const listeners = dq.current!._listeners! as (ListenerContainer<T> | undefined)[];
		while (dq.i < dq.end) {
			// important: dq.i is incremented before calling deliver() because it might reenter deliverQueue()
			this._deliver(listeners[dq.i++], dq.value as T);
		}
		dq.reset();
	}

	/**
	 * To be kept private to fire an event to
	 * subscribers
	 */
	fire(event: T): void {
		if (this._deliveryQueue?.current) {
			this._deliverQueue(this._deliveryQueue);
			this._perfMon?.stop(); // last fire() will have starting perfmon, stop it before starting the next dispatch
		}

		this._perfMon?.start(this._size);

		if (!this._listeners) {
			// no-op
		} else if (this._listeners instanceof UniqueContainer) {
			this._deliver(this._listeners, event);
		} else {
			const dq = this._deliveryQueue!;
			dq.enqueue(this, event, this._listeners.length);
			this._deliverQueue(dq);
		}

		this._perfMon?.stop();
	}

	hasListeners(): boolean {
		return this._size > 0;
	}
}

export interface EventDeliveryQueue {
	_isEventDeliveryQueue: true;
}

export const createEventDeliveryQueue = (): EventDeliveryQueue => new EventDeliveryQueuePrivate();

class EventDeliveryQueuePrivate implements EventDeliveryQueue {
	declare _isEventDeliveryQueue: true;

	/**
	 * Index in current's listener list.
	 */
	public i = -1;

	/**
	 * The last index in the listener's list to deliver.
	 */
	public end = 0;

	/**
	 * Emitter currently being dispatched on. Emitter._listeners is always an array.
	 */
	public current?: Emitter<any>;
	/**
	 * Currently emitting value. Defined whenever `current` is.
	 */
	public value?: unknown;

	public enqueue<T>(emitter: Emitter<T>, value: T, end: number) {
		this.i = 0;
		this.end = end;
		this.current = emitter;
		this.value = value;
	}

	public reset() {
		this.i = this.end; // force any current emission loop to stop, mainly for during dispose
		this.current = undefined;
		this.value = undefined;
	}
}

export interface IWaitUntil {
	token: CancellationToken;
	waitUntil(thenable: Promise<unknown>): void;
}

export type IWaitUntilData<T> = Omit<Omit<T, 'waitUntil'>, 'token'>;

export class AsyncEmitter<T extends IWaitUntil> extends Emitter<T> {

	private _asyncDeliveryQueue?: LinkedList<[(ev: T) => void, IWaitUntilData<T>]>;

	async fireAsync(data: IWaitUntilData<T>, token: CancellationToken, promiseJoin?: (p: Promise<unknown>, listener: Function) => Promise<unknown>): Promise<void> {
		if (!this._listeners) {
			return;
		}

		if (!this._asyncDeliveryQueue) {
			this._asyncDeliveryQueue = new LinkedList();
		}

		forEachListener(this._listeners, listener => this._asyncDeliveryQueue!.push([listener.value, data]));

		while (this._asyncDeliveryQueue.size > 0 && !token.isCancellationRequested) {

			const [listener, data] = this._asyncDeliveryQueue.shift()!;
			const thenables: Promise<unknown>[] = [];

			const event = <T>{
				...data,
				token,
				waitUntil: (p: Promise<unknown>): void => {
					if (Object.isFrozen(thenables)) {
						throw new Error('waitUntil can NOT be called asynchronous');
					}
					if (promiseJoin) {
						p = promiseJoin(p, listener);
					}
					thenables.push(p);
				}
			};

			try {
				listener(event);
			} catch (e) {
				onUnexpectedError(e);
				continue;
			}

			// freeze thenables-collection to enforce sync-calls to
			// wait until and then wait for all thenables to resolve
			Object.freeze(thenables);

			await Promise.allSettled(thenables).then(values => {
				for (const value of values) {
					if (value.status === 'rejected') {
						onUnexpectedError(value.reason);
					}
				}
			});
		}
	}
}


export class PauseableEmitter<T> extends Emitter<T> {

	private _isPaused = 0;
	protected _eventQueue = new LinkedList<T>();
	private _mergeFn?: (input: T[]) => T;

	public get isPaused(): boolean {
		return this._isPaused !== 0;
	}

	constructor(options?: EmitterOptions & { merge?: (input: T[]) => T }) {
		super(options);
		this._mergeFn = options?.merge;
	}

	pause(): void {
		this._isPaused++;
	}

	resume(): void {
		if (this._isPaused !== 0 && --this._isPaused === 0) {
			if (this._mergeFn) {
				// use the merge function to create a single composite
				// event. make a copy in case firing pauses this emitter
				if (this._eventQueue.size > 0) {
					const events = Array.from(this._eventQueue);
					this._eventQueue.clear();
					super.fire(this._mergeFn(events));
				}

			} else {
				// no merging, fire each event individually and test
				// that this emitter isn't paused halfway through
				while (!this._isPaused && this._eventQueue.size !== 0) {
					super.fire(this._eventQueue.shift()!);
				}
			}
		}
	}

	override fire(event: T): void {
		if (this._size) {
			if (this._isPaused !== 0) {
				this._eventQueue.push(event);
			} else {
				super.fire(event);
			}
		}
	}
}

export class DebounceEmitter<T> extends PauseableEmitter<T> {

	private readonly _delay: number;
	private _handle: any | undefined;

	constructor(options: EmitterOptions & { merge: (input: T[]) => T; delay?: number }) {
		super(options);
		this._delay = options.delay ?? 100;
	}

	override fire(event: T): void {
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
export class MicrotaskEmitter<T> extends Emitter<T> {
	private _queuedEvents: T[] = [];
	private _mergeFn?: (input: T[]) => T;

	constructor(options?: EmitterOptions & { merge?: (input: T[]) => T }) {
		super(options);
		this._mergeFn = options?.merge;
	}
	override fire(event: T): void {

		if (!this.hasListeners()) {
			return;
		}

		this._queuedEvents.push(event);
		if (this._queuedEvents.length === 1) {
			queueMicrotask(() => {
				if (this._mergeFn) {
					super.fire(this._mergeFn(this._queuedEvents));
				} else {
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
export class EventMultiplexer<T> implements IDisposable {

	private readonly emitter: Emitter<T>;
	private hasListeners = false;
	private events: { event: Event<T>; listener: IDisposable | null }[] = [];

	constructor() {
		this.emitter = new Emitter<T>({
			onWillAddFirstListener: () => this.onFirstListenerAdd(),
			onDidRemoveLastListener: () => this.onLastListenerRemove()
		});
	}

	get event(): Event<T> {
		return this.emitter.event;
	}

	add(event: Event<T>): IDisposable {
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

	private onFirstListenerAdd(): void {
		this.hasListeners = true;
		this.events.forEach(e => this.hook(e));
	}

	private onLastListenerRemove(): void {
		this.hasListeners = false;
		this.events.forEach(e => this.unhook(e));
	}

	private hook(e: { event: Event<T>; listener: IDisposable | null }): void {
		e.listener = e.event(r => this.emitter.fire(r));
	}

	private unhook(e: { event: Event<T>; listener: IDisposable | null }): void {
		e.listener?.dispose();
		e.listener = null;
	}

	dispose(): void {
		this.emitter.dispose();

		for (const e of this.events) {
			e.listener?.dispose();
		}
		this.events = [];
	}
}

export interface IDynamicListEventMultiplexer<TEventType> extends IDisposable {
	readonly event: Event<TEventType>;
}
export class DynamicListEventMultiplexer<TItem, TEventType> implements IDynamicListEventMultiplexer<TEventType> {
	private readonly _store = new DisposableStore();

	readonly event: Event<TEventType>;

	constructor(
		items: TItem[],
		onAddItem: Event<TItem>,
		onRemoveItem: Event<TItem>,
		getEvent: (item: TItem) => Event<TEventType>
	) {
		const multiplexer = this._store.add(new EventMultiplexer<TEventType>());
		const itemListeners = this._store.add(new DisposableMap<TItem, IDisposable>());

		function addItem(instance: TItem) {
			itemListeners.set(instance, multiplexer.add(getEvent(instance)));
		}

		// Existing items
		for (const instance of items) {
			addItem(instance);
		}

		// Added items
		this._store.add(onAddItem(instance => {
			addItem(instance);
		}));

		// Removed items
		this._store.add(onRemoveItem(instance => {
			itemListeners.deleteAndDispose(instance);
		}));

		this.event = multiplexer.event;
	}

	dispose() {
		this._store.dispose();
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
export class EventBufferer {

	private data: { buffers: Function[] }[] = [];

	wrapEvent<T>(event: Event<T>): Event<T>;
	wrapEvent<T>(event: Event<T>, reduce: (last: T | undefined, event: T) => T): Event<T>;
	wrapEvent<T, O>(event: Event<T>, reduce: (last: O | undefined, event: T) => O, initial: O): Event<O>;
	wrapEvent<T, O>(event: Event<T>, reduce?: (last: T | O | undefined, event: T) => T | O, initial?: O): Event<O | T> {
		return (listener, thisArgs?, disposables?) => {
			return event(i => {
				const data = this.data[this.data.length - 1];

				// Non-reduce scenario
				if (!reduce) {
					// Buffering case
					if (data) {
						data.buffers.push(() => listener.call(thisArgs, i));
					} else {
						// Not buffering case
						listener.call(thisArgs, i);
					}
					return;
				}

				// Reduce scenario
				const reduceData = data as typeof data & {
					/**
					 * The accumulated items that will be reduced.
					 */
					items?: T[];
					/**
					 * The reduced result cached to be shared with other listeners.
					 */
					reducedResult?: T | O;
				};

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
							? reduceData.items!.reduce(reduce as (last: O | undefined, event: T) => O, initial)
							: reduceData.items!.reduce(reduce as (last: T | undefined, event: T) => T);
						listener.call(thisArgs, reduceData.reducedResult);
					});
				}
			}, undefined, disposables);
		};
	}

	bufferEvents<R = void>(fn: () => R): R {
		const data = { buffers: new Array<Function>() };
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
export class Relay<T> implements IDisposable {

	private listening = false;
	private inputEvent: Event<T> = Event.None;
	private inputEventListener: IDisposable = Disposable.None;

	private readonly emitter = new Emitter<T>({
		onDidAddFirstListener: () => {
			this.listening = true;
			this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter);
		},
		onDidRemoveLastListener: () => {
			this.listening = false;
			this.inputEventListener.dispose();
		}
	});

	readonly event: Event<T> = this.emitter.event;

	set input(event: Event<T>) {
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

export interface IValueWithChangeEvent<T> {
	readonly onDidChange: Event<void>;
	get value(): T;
}

export class ValueWithChangeEvent<T> implements IValueWithChangeEvent<T> {
	public static const<T>(value: T): IValueWithChangeEvent<T> {
		return new ConstValueWithChangeEvent(value);
	}

	private readonly _onDidChange = new Emitter<void>();
	readonly onDidChange: Event<void> = this._onDidChange.event;

	constructor(private _value: T) { }

	get value(): T {
		return this._value;
	}

	set value(value: T) {
		if (value !== this._value) {
			this._value = value;
			this._onDidChange.fire(undefined);
		}
	}
}

class ConstValueWithChangeEvent<T> implements IValueWithChangeEvent<T> {
	public readonly onDidChange: Event<void> = Event.None;

	constructor(readonly value: T) { }
}
