import { parseRegexp } from '@vitest/utils';

const REGEXP_WRAP_PREFIX = "$$vitest:";
// Store global APIs in case process is overwritten by tests
const processSend = process.send?.bind(process);
const processOn = process.on?.bind(process);
const processOff = process.off?.bind(process);
const dispose = [];
function createThreadsRpcOptions({ port }) {
	return {
		post: (v) => {
			port.postMessage(v);
		},
		on: (fn) => {
			port.addListener("message", fn);
		}
	};
}
function disposeInternalListeners() {
	for (const fn of dispose) try {
		fn();
	} catch {}
	dispose.length = 0;
}
function createForksRpcOptions(nodeV8) {
	return {
		serialize: nodeV8.serialize,
		deserialize: (v) => nodeV8.deserialize(Buffer.from(v)),
		post(v) {
			processSend(v);
		},
		on(fn) {
			const handler = (message, ...extras) => {
				// Do not react on Tinypool's internal messaging
				if (message?.__tinypool_worker_message__) return;
				return fn(message, ...extras);
			};
			processOn("message", handler);
			dispose.push(() => processOff("message", handler));
		}
	};
}
/**
* Reverts the wrapping done by `utils/config-helpers.ts`'s `wrapSerializableConfig`
*/
function unwrapSerializableConfig(config) {
	if (config.testNamePattern && typeof config.testNamePattern === "string") {
		const testNamePattern = config.testNamePattern;
		if (testNamePattern.startsWith(REGEXP_WRAP_PREFIX)) config.testNamePattern = parseRegexp(testNamePattern.slice(REGEXP_WRAP_PREFIX.length));
	}
	if (config.defines && Array.isArray(config.defines.keys) && config.defines.original) {
		const { keys, original } = config.defines;
		const defines = {};
		// Apply all keys from the original. Entries which had undefined value are missing from original now
		for (const key of keys) defines[key] = original[key];
		config.defines = defines;
	}
	return config;
}

export { createThreadsRpcOptions as a, createForksRpcOptions as c, disposeInternalListeners as d, unwrapSerializableConfig as u };
