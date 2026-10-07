//#region src/messages.ts
const TYPE_REQUEST = "q";
const TYPE_RESPONSE = "s";

//#endregion
//#region src/utils.ts
function createPromiseWithResolvers() {
	let resolve;
	let reject;
	return {
		promise: new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		}),
		resolve,
		reject
	};
}
const random = Math.random.bind(Math);
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
function nanoid(size = 21) {
	let id = "";
	let i = size;
	while (i--) id += urlAlphabet[random() * 64 | 0];
	return id;
}

//#endregion
//#region src/main.ts
const DEFAULT_TIMEOUT = 6e4;
const defaultSerialize = (i) => i;
const defaultDeserialize = defaultSerialize;
const { clearTimeout, setTimeout } = globalThis;
function createBirpc($functions, options) {
	const { post, on, off = () => {}, eventNames = [], serialize = defaultSerialize, deserialize = defaultDeserialize, resolver, bind = "rpc", timeout = DEFAULT_TIMEOUT, proxify = true } = options;
	let $closed = false;
	const _rpcPromiseMap = /* @__PURE__ */ new Map();
	let _promiseInit;
	let rpc;
	async function _call(method, args, event, optional) {
		if ($closed) throw new Error(`[birpc] rpc is closed, cannot call "${method}"`);
		const req = {
			m: method,
			a: args,
			t: TYPE_REQUEST
		};
		if (optional) req.o = true;
		const send = async (_req) => post(serialize(_req));
		if (event) {
			await send(req);
			return;
		}
		if (_promiseInit) try {
			await _promiseInit;
		} finally {
			_promiseInit = void 0;
		}
		let { promise, resolve, reject } = createPromiseWithResolvers();
		const id = nanoid();
		req.i = id;
		let timeoutId;
		async function handler(newReq = req) {
			if (timeout >= 0) {
				timeoutId = setTimeout(() => {
					try {
						if (options.onTimeoutError?.call(rpc, method, args) !== true) throw new Error(`[birpc] timeout on calling "${method}"`);
					} catch (e) {
						reject(e);
					}
					_rpcPromiseMap.delete(id);
				}, timeout);
				if (typeof timeoutId === "object") timeoutId = timeoutId.unref?.();
			}
			_rpcPromiseMap.set(id, {
				resolve,
				reject,
				timeoutId,
				method
			});
			await send(newReq);
			return promise;
		}
		try {
			if (options.onRequest) await options.onRequest.call(rpc, req, handler, resolve);
			else await handler();
		} catch (e) {
			if (options.onGeneralError?.call(rpc, e) !== true) throw e;
			return;
		} finally {
			clearTimeout(timeoutId);
			_rpcPromiseMap.delete(id);
		}
		return promise;
	}
	const builtinMethods = {
		$call: (method, ...args) => _call(method, args, false),
		$callOptional: (method, ...args) => _call(method, args, false, true),
		$callEvent: (method, ...args) => _call(method, args, true),
		$callRaw: (options$1) => _call(options$1.method, options$1.args, options$1.event, options$1.optional),
		$rejectPendingCalls,
		get $closed() {
			return $closed;
		},
		get $meta() {
			return options.meta;
		},
		$close,
		$functions
	};
	if (proxify) rpc = new Proxy({}, { get(_, method) {
		if (Object.prototype.hasOwnProperty.call(builtinMethods, method)) return builtinMethods[method];
		if (method === "then" && !eventNames.includes("then") && !("then" in $functions)) return void 0;
		const sendEvent = (...args) => _call(method, args, true);
		if (eventNames.includes(method)) {
			sendEvent.asEvent = sendEvent;
			return sendEvent;
		}
		const sendCall = (...args) => _call(method, args, false);
		sendCall.asEvent = sendEvent;
		return sendCall;
	} });
	else rpc = builtinMethods;
	function $close(customError) {
		$closed = true;
		_rpcPromiseMap.forEach(({ reject, method }) => {
			const error = /* @__PURE__ */ new Error(`[birpc] rpc is closed, cannot call "${method}"`);
			if (customError) {
				customError.cause ??= error;
				return reject(customError);
			}
			reject(error);
		});
		_rpcPromiseMap.clear();
		off(onMessage);
	}
	function $rejectPendingCalls(handler) {
		const handlerResults = Array.from(_rpcPromiseMap.values()).map(({ method, reject }) => {
			if (!handler) return reject(/* @__PURE__ */ new Error(`[birpc]: rejected pending call "${method}".`));
			return handler({
				method,
				reject
			});
		});
		_rpcPromiseMap.clear();
		return handlerResults;
	}
	async function onMessage(data, ...extra) {
		let msg;
		try {
			msg = deserialize(data);
		} catch (e) {
			if (options.onGeneralError?.call(rpc, e) !== true) throw e;
			return;
		}
		if (msg.t === TYPE_REQUEST) {
			const { m: method, a: args, o: optional } = msg;
			let result, error;
			let fn = await (resolver ? resolver.call(rpc, method, $functions[method]) : $functions[method]);
			if (optional) fn ||= () => void 0;
			if (!fn) error = /* @__PURE__ */ new Error(`[birpc] function "${method}" not found`);
			else try {
				result = await fn.apply(bind === "rpc" ? rpc : $functions, args);
			} catch (e) {
				error = e;
			}
			if (msg.i) {
				if (error && options.onFunctionError) {
					if (options.onFunctionError.call(rpc, error, method, args) === true) return;
				}
				if (!error) try {
					await post(serialize({
						t: TYPE_RESPONSE,
						i: msg.i,
						r: result
					}), ...extra);
					return;
				} catch (e) {
					error = e;
					if (options.onGeneralError?.call(rpc, e, method, args) !== true) throw e;
				}
				try {
					await post(serialize({
						t: TYPE_RESPONSE,
						i: msg.i,
						e: error
					}), ...extra);
				} catch (e) {
					if (options.onGeneralError?.call(rpc, e, method, args) !== true) throw e;
				}
			}
		} else {
			const { i: ack, r: result, e: error } = msg;
			const promise = _rpcPromiseMap.get(ack);
			if (promise) {
				clearTimeout(promise.timeoutId);
				if (error) promise.reject(error);
				else promise.resolve(result);
			}
			_rpcPromiseMap.delete(ack);
		}
	}
	_promiseInit = on(onMessage);
	return rpc;
}

export { createBirpc as c };
