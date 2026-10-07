import { getSafeTimers } from '@vitest/utils';
import { c as createBirpc } from './index.B521nVV-.js';
import { g as getWorkerState } from './utils.XdZDrNZV.js';

const { get } = Reflect;
function withSafeTimers(fn) {
	const { setTimeout, clearTimeout, nextTick, setImmediate, clearImmediate } = getSafeTimers();
	const currentSetTimeout = globalThis.setTimeout;
	const currentClearTimeout = globalThis.clearTimeout;
	const currentSetImmediate = globalThis.setImmediate;
	const currentClearImmediate = globalThis.clearImmediate;
	const currentNextTick = globalThis.process?.nextTick;
	try {
		globalThis.setTimeout = setTimeout;
		globalThis.clearTimeout = clearTimeout;
		globalThis.setImmediate = setImmediate;
		globalThis.clearImmediate = clearImmediate;
		if (globalThis.process) globalThis.process.nextTick = nextTick;
		const result = fn();
		return result;
	} finally {
		globalThis.setTimeout = currentSetTimeout;
		globalThis.clearTimeout = currentClearTimeout;
		globalThis.setImmediate = currentSetImmediate;
		globalThis.clearImmediate = currentClearImmediate;
		if (globalThis.process) nextTick(() => {
			globalThis.process.nextTick = currentNextTick;
		});
	}
}
const promises = /* @__PURE__ */ new Set();
async function rpcDone() {
	if (!promises.size) return;
	const awaitable = Array.from(promises);
	return Promise.all(awaitable);
}
function createRuntimeRpc(options) {
	let setCancel = (_reason) => {};
	const onCancel = new Promise((resolve) => {
		setCancel = resolve;
	});
	const rpc = createSafeRpc(createBirpc({ onCancel: setCancel }, {
		eventNames: [
			"onUserConsoleLog",
			"onCollected",
			"onCancel"
		],
		onTimeoutError(functionName, args) {
			let message = `[vitest-worker]: Timeout calling "${functionName}"`;
			if (functionName === "fetch" || functionName === "transform" || functionName === "resolveId") message += ` with "${JSON.stringify(args)}"`;
			// JSON.stringify cannot serialize Error instances
			if (functionName === "onUnhandledError") message += ` with "${args[0]?.message || args[0]}"`;
			throw new Error(message);
		},
		...options
	}));
	return {
		rpc,
		onCancel
	};
}
function createSafeRpc(rpc) {
	return new Proxy(rpc, { get(target, p, handler) {
		const sendCall = get(target, p, handler);
		const safeSendCall = (...args) => withSafeTimers(async () => {
			const result = sendCall(...args);
			promises.add(result);
			try {
				return await result;
			} finally {
				promises.delete(result);
			}
		});
		safeSendCall.asEvent = sendCall.asEvent;
		return safeSendCall;
	} });
}
function rpc() {
	const { rpc } = getWorkerState();
	return rpc;
}

export { rpcDone as a, createRuntimeRpc as c, rpc as r };
