import { LensList } from "./lens-list.mjs";

//#region src/index.ts
const kDefaultPrevented = Symbol("kDefaultPrevented");
const kPropagationStopped = Symbol("kPropagationStopped");
const kImmediatePropagationStopped = Symbol("kImmediatePropagationStopped");
var TypedEvent = class extends MessageEvent {
	/**
	* @note Keep a placeholder property with the return type
	* because the type must be set somewhere in order to be
	* correctly associated and inferred from the event.
	*/
	#returnType;
	[kDefaultPrevented];
	[kPropagationStopped];
	[kImmediatePropagationStopped];
	constructor(...args) {
		super(args[0], args[1]);
		this[kDefaultPrevented] = false;
	}
	get defaultPrevented() {
		return this[kDefaultPrevented];
	}
	preventDefault() {
		super.preventDefault();
		this[kDefaultPrevented] = true;
	}
	stopImmediatePropagation() {
		/**
		* @note Despite `.stopPropagation()` and `.stopImmediatePropagation()` being defined
		* in Node.js, they do nothing. It is safe to re-define them.
		*/
		super.stopImmediatePropagation();
		this[kImmediatePropagationStopped] = true;
	}
};
var Emitter = class {
	#listeners;
	#listenerOptions;
	#listenerAbortCleanups;
	#typelessListeners;
	#hookListeners;
	#hookListenerOptions;
	#hookListenerAbortCleanups;
	hooks;
	constructor() {
		this.#listeners = new LensList();
		this.#listenerOptions = /* @__PURE__ */ new WeakMap();
		this.#listenerAbortCleanups = /* @__PURE__ */ new WeakMap();
		this.#typelessListeners = /* @__PURE__ */ new WeakSet();
		this.#hookListeners = new LensList();
		this.#hookListenerOptions = /* @__PURE__ */ new WeakMap();
		this.#hookListenerAbortCleanups = /* @__PURE__ */ new WeakMap();
		this.hooks = {
			on: (hook, callback, options) => {
				if (options?.once) {
					const original = callback;
					const wrapper = ((...args) => {
						this.#deleteHookListener(hook, wrapper);
						return original(...args);
					});
					callback = wrapper;
				}
				this.#hookListeners.append(hook, callback);
				if (options) this.#hookListenerOptions.set(callback, options);
				if (options?.signal) {
					const { signal } = options;
					const onAbort = () => {
						this.#deleteHookListener(hook, callback);
					};
					signal.addEventListener("abort", onAbort, { once: true });
					this.#hookListenerAbortCleanups.set(callback, () => {
						signal.removeEventListener("abort", onAbort);
					});
				}
			},
			removeListener: (hook, callback) => {
				this.#deleteHookListener(hook, callback);
			}
		};
	}
	#deleteHookListener(hook, callback) {
		this.#hookListeners.delete(hook, callback);
		const cleanup = this.#hookListenerAbortCleanups.get(callback);
		if (cleanup) {
			cleanup();
			this.#hookListenerAbortCleanups.delete(callback);
		}
	}
	#deleteListener(type, listener) {
		this.#listeners.delete(type, listener);
		const cleanup = this.#listenerAbortCleanups.get(listener);
		if (cleanup) {
			cleanup();
			this.#listenerAbortCleanups.delete(listener);
		}
	}
	/**
	* Adds a listener for the given event type.
	*/
	on(type, listener, options) {
		this.#addListener(type, listener, options);
		return this;
	}
	/**
	* Adds a one-time listener for the given event type.
	*/
	once(type, listener, options) {
		return this.on(type, listener, {
			...options || {},
			once: true
		});
	}
	/**
	* Prepends a listener for the given event type.
	*/
	earlyOn(type, listener, options) {
		this.#addListener(type, listener, options, "prepend");
		return this;
	}
	/**
	* Prepends a one-time listener for the given event type.
	*/
	earlyOnce(type, listener, options) {
		return this.earlyOn(type, listener, {
			...options || {},
			once: true
		});
	}
	/**
	* Emits the given typed event.
	*
	* @returns {boolean} Returns `true` if the event had any listeners, `false` otherwise.
	*/
	emit(event) {
		if (this.#listeners.size === 0) return false;
		/**
		* @note Calculate matching listeners before calling them
		* since one-time listeners will self-destruct.
		*/
		const hasListeners = this.listenerCount(event.type) > 0;
		const proxiedEvent = this.#proxyEvent(event);
		for (const listener of this.#matchListeners(event.type)) {
			if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
				proxiedEvent.revoke();
				return false;
			}
			if (proxiedEvent.event[kImmediatePropagationStopped]) break;
			this.#callListener(proxiedEvent.event, listener);
		}
		proxiedEvent.revoke();
		return hasListeners;
	}
	/**
	* Emits the given typed event and returns a promise that resolves
	* when all the listeners for that event have settled.
	*
	* @returns {Promise<Array<Emitter.ListenerReturnType>>} A promise that resolves
	* with the return values of all listeners.
	*/
	async emitAsPromise(event) {
		if (this.#listeners.size === 0) return [];
		const pendingListeners = [];
		const proxiedEvent = this.#proxyEvent(event);
		for (const listener of this.#matchListeners(event.type)) {
			if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
				proxiedEvent.revoke();
				return [];
			}
			if (proxiedEvent.event[kImmediatePropagationStopped]) break;
			const returnValue = await Promise.resolve(this.#callListener(proxiedEvent.event, listener));
			if (!this.#isTypelessListener(listener)) pendingListeners.push(returnValue);
		}
		proxiedEvent.revoke();
		return Promise.allSettled(pendingListeners).then((results) => {
			return results.map((result) => result.status === "fulfilled" ? result.value : result.reason);
		});
	}
	/**
	* Emits the given event and returns a generator that yields
	* the result of each listener in the order of their registration.
	* This way, you stop exhausting the listeners once you get the expected value.
	*/
	*emitAsGenerator(event) {
		if (this.#listeners.size === 0) return;
		const proxiedEvent = this.#proxyEvent(event);
		for (const listener of this.#matchListeners(event.type)) {
			if (proxiedEvent.event[kPropagationStopped] != null && proxiedEvent.event[kPropagationStopped] !== this) {
				proxiedEvent.revoke();
				return;
			}
			if (proxiedEvent.event[kImmediatePropagationStopped]) break;
			const returnValue = this.#callListener(proxiedEvent.event, listener);
			if (!this.#isTypelessListener(listener)) yield returnValue;
		}
		proxiedEvent.revoke();
	}
	/**
	* Removes a listener for the given event type.
	*/
	removeListener(type, listener) {
		const options = this.#listenerOptions.get(listener);
		this.#deleteListener(type, listener);
		for (const hook of this.#hookListeners.get("removeListener")) hook(type, listener, options);
	}
	/**
	* Removes all listeners for the given event type.
	* If no event type is provided, removes all existing listeners.
	*/
	removeAllListeners(type) {
		if (type == null) {
			for (const listener of this.#listeners.getAll()) {
				const cleanup = this.#listenerAbortCleanups.get(listener);
				if (cleanup) {
					cleanup();
					this.#listenerAbortCleanups.delete(listener);
				}
			}
			this.#listeners.clear();
			for (const [hookType, hookListener] of this.#hookListeners) if (!this.#hookListenerOptions.get(hookListener)?.persist) this.#deleteHookListener(hookType, hookListener);
			return;
		}
		for (const listener of this.#listeners.get(type)) {
			const cleanup = this.#listenerAbortCleanups.get(listener);
			if (cleanup) {
				cleanup();
				this.#listenerAbortCleanups.delete(listener);
			}
		}
		this.#listeners.deleteAll(type);
	}
	/**
	* Returns the list of listeners for the given event type.
	* If no even type is provided, returns all listeners.
	*/
	listeners(type) {
		if (type == null) return this.#listeners.getAll();
		return this.#listeners.get(type);
	}
	/**
	* Returns the number of listeners for the given event type.
	* If no even type is provided, returns the total number of listeners.
	*/
	listenerCount(type) {
		if (type == null) return this.#listeners.size;
		return this.listeners(type).length;
	}
	#addListener(type, listener, options, insertMode = "append") {
		for (const hook of this.#hookListeners.get("newListener")) hook(type, listener, options);
		if (type === "*") this.#typelessListeners.add(listener);
		if (insertMode === "prepend") this.#listeners.prepend(type, listener);
		else this.#listeners.append(type, listener);
		if (options) {
			this.#listenerOptions.set(listener, options);
			if (options.signal) {
				const { signal } = options;
				const onAbort = () => {
					this.removeListener(type, listener);
				};
				signal.addEventListener("abort", onAbort, { once: true });
				this.#listenerAbortCleanups.set(listener, () => {
					signal.removeEventListener("abort", onAbort);
				});
			}
		}
	}
	#proxyEvent(event) {
		const { stopPropagation } = event;
		event.stopPropagation = () => {
			event[kPropagationStopped] = this;
			stopPropagation.call(event);
		};
		return {
			event,
			revoke() {
				event.stopPropagation = stopPropagation;
			}
		};
	}
	#callListener(event, listener) {
		for (const hook of this.#hookListeners.get("beforeEmit")) if (hook(event) === false) return;
		const returnValue = listener.call(this, event);
		const options = this.#listenerOptions.get(listener);
		if (options?.once) {
			const type = this.#isTypelessListener(listener) ? "*" : event.type;
			this.#deleteListener(type, listener);
			for (const hook of this.#hookListeners.get("removeListener")) hook(type, listener, options);
		}
		return returnValue;
	}
	/**
	* Return a list of all event listeners relevant for the given event type.
	* This includes the explicit event listeners and also typeless event listeners.
	*
	* @note Snapshot the matching listeners before yielding. Listeners can add or
	* remove other listeners during emission (e.g. `earlyOn` unshifts `#list`),
	* which would otherwise shift the live iterator and re-yield prior entries.
	*/
	*#matchListeners(type) {
		const snapshot = [];
		for (const [key, listener] of this.#listeners) if (key === "*" || key === type) snapshot.push(listener);
		yield* snapshot;
	}
	#isTypelessListener(listener) {
		return this.#typelessListeners.has(listener);
	}
};

//#endregion
export { Emitter, TypedEvent };
//# sourceMappingURL=index.mjs.map