import { getSafeTimers } from '@vitest/utils/timers';
import { c as createBirpc } from './index.Chj8NDwU.js';
import { g as getWorkerState } from './utils.BX5Fg8C4.js';

/* Ported from https://github.com/boblauer/MockDate/blob/master/src/mockdate.ts */
/*
The MIT License (MIT)

Copyright (c) 2014 Bob Lauer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const RealDate = Date;
let now = null;
class MockDate extends RealDate {
	constructor(y, m, d, h, M, s, ms) {
		super();
		let date;
		switch (arguments.length) {
			case 0:
				if (now !== null) date = new RealDate(now.valueOf());
				else date = new RealDate();
				break;
			case 1:
				date = new RealDate(y);
				break;
			default:
				d = typeof d === "undefined" ? 1 : d;
				h = h || 0;
				M = M || 0;
				s = s || 0;
				ms = ms || 0;
				date = new RealDate(y, m, d, h, M, s, ms);
				break;
		}
		Object.setPrototypeOf(date, MockDate.prototype);
		return date;
	}
}
MockDate.UTC = RealDate.UTC;
MockDate.now = function() {
	return new MockDate().valueOf();
};
MockDate.parse = function(dateString) {
	return RealDate.parse(dateString);
};
MockDate.toString = function() {
	return RealDate.toString();
};
function mockDate(date) {
	const dateObj = new RealDate(date.valueOf());
	if (Number.isNaN(dateObj.getTime())) throw new TypeError(`mockdate: The time set is an invalid date: ${date}`);
	// @ts-expect-error global
	globalThis.Date = MockDate;
	now = dateObj.valueOf();
}
function resetDate() {
	globalThis.Date = RealDate;
}

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
		if (setImmediate) globalThis.setImmediate = setImmediate;
		if (clearImmediate) globalThis.clearImmediate = clearImmediate;
		if (globalThis.process && nextTick) globalThis.process.nextTick = nextTick;
		return fn();
	} finally {
		globalThis.setTimeout = currentSetTimeout;
		globalThis.clearTimeout = currentClearTimeout;
		globalThis.setImmediate = currentSetImmediate;
		globalThis.clearImmediate = currentClearImmediate;
		if (globalThis.process && nextTick) nextTick(() => {
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
const onCancelCallbacks = [];
function onCancel(callback) {
	onCancelCallbacks.push(callback);
}
function createRuntimeRpc(options) {
	return createSafeRpc(createBirpc({ async onCancel(reason) {
		await Promise.all(onCancelCallbacks.map((fn) => fn(reason)));
	} }, {
		eventNames: ["onCancel"],
		timeout: -1,
		...options
	}));
}
function createSafeRpc(rpc) {
	return new Proxy(rpc, { get(target, p, handler) {
		// keep $rejectPendingCalls as sync function
		if (p === "$rejectPendingCalls") return rpc.$rejectPendingCalls;
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

export { RealDate as R, rpcDone as a, resetDate as b, createRuntimeRpc as c, mockDate as m, onCancel as o, rpc as r };
