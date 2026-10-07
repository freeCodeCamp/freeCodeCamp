import { EventEmitter } from 'node:events';
import createDebug from 'debug';
import { s } from './chunk-browser.mjs';
import { normalizeRequestId } from './utils.mjs';

function createHmrEmitter() {
	const emitter = new EventEmitter();
	return emitter;
}
function viteNodeHmrPlugin() {
	const emitter = createHmrEmitter();
	return {
		name: "vite-node:hmr",
		config() {
			// chokidar fsevents is unstable on macos when emitting "ready" event
			if (process.platform === "darwin" && false);
		},
		configureServer(server) {
			const _send = server.ws.send;
			server.emitter = emitter;
			server.ws.send = function(payload) {
				_send(payload);
				emitter.emit("message", payload);
			};
			// eslint-disable-next-line ts/ban-ts-comment
			// @ts-ignore Vite 6 compat
			const environments = server.environments;
			if (environments) environments.ssr.hot.send = function(payload) {
				_send(payload);
				emitter.emit("message", payload);
			};
		}
	};
}

const debugHmr = createDebug("vite-node:hmr");
const cache = /* @__PURE__ */ new WeakMap();
function getCache(runner) {
	if (!cache.has(runner)) cache.set(runner, {
		hotModulesMap: /* @__PURE__ */ new Map(),
		dataMap: /* @__PURE__ */ new Map(),
		disposeMap: /* @__PURE__ */ new Map(),
		pruneMap: /* @__PURE__ */ new Map(),
		customListenersMap: /* @__PURE__ */ new Map(),
		ctxToListenersMap: /* @__PURE__ */ new Map(),
		messageBuffer: [],
		isFirstUpdate: false,
		pending: false,
		queued: []
	});
	return cache.get(runner);
}
function sendMessageBuffer(runner, emitter) {
	const maps = getCache(runner);
	maps.messageBuffer.forEach((msg) => emitter.emit("custom", msg));
	maps.messageBuffer.length = 0;
}
async function reload(runner, files) {
	// invalidate module cache but not node_modules
	Array.from(runner.moduleCache.keys()).forEach((fsPath) => {
		if (!fsPath.includes("node_modules")) runner.moduleCache.delete(fsPath);
	});
	return Promise.all(files.map((file) => runner.executeId(file)));
}
async function notifyListeners(runner, event, data) {
	const maps = getCache(runner);
	const cbs = maps.customListenersMap.get(event);
	if (cbs) await Promise.all(cbs.map((cb) => cb(data)));
}
async function queueUpdate(runner, p) {
	const maps = getCache(runner);
	maps.queued.push(p);
	if (!maps.pending) {
		maps.pending = true;
		await Promise.resolve();
		maps.pending = false;
		const loading = [...maps.queued];
		maps.queued = [];
		(await Promise.all(loading)).forEach((fn) => fn && fn());
	}
}
async function fetchUpdate(runner, { path, acceptedPath }) {
	path = normalizeRequestId(path);
	acceptedPath = normalizeRequestId(acceptedPath);
	const maps = getCache(runner);
	const mod = maps.hotModulesMap.get(path);
	if (!mod)
 // In a code-splitting project,
	// it is common that the hot-updating module is not loaded yet.
	// https://github.com/vitejs/vite/issues/721
	return;
	const isSelfUpdate = path === acceptedPath;
	let fetchedModule;
	// determine the qualified callbacks before we re-import the modules
	const qualifiedCallbacks = mod.callbacks.filter(({ deps }) => deps.includes(acceptedPath));
	if (isSelfUpdate || qualifiedCallbacks.length > 0) {
		const disposer = maps.disposeMap.get(acceptedPath);
		if (disposer) await disposer(maps.dataMap.get(acceptedPath));
		try {
			[fetchedModule] = await reload(runner, [acceptedPath]);
		} catch (e) {
			warnFailedFetch(e, acceptedPath);
		}
	}
	return () => {
		for (const { deps, fn } of qualifiedCallbacks) fn(deps.map((dep) => dep === acceptedPath ? fetchedModule : void 0));
		const loggedPath = isSelfUpdate ? path : `${acceptedPath} via ${path}`;
		console.log(`${s.cyan("[vite-node]")} hot updated: ${loggedPath}`);
	};
}
function warnFailedFetch(err, path) {
	if (!(err instanceof Error) || !err.message.match("fetch")) console.error(err);
	console.error(`[hmr] Failed to reload ${path}. This could be due to syntax errors or importing non-existent modules. (see errors above)`);
}
async function handleMessage(runner, emitter, files, payload) {
	const maps = getCache(runner);
	switch (payload.type) {
		case "connected":
			sendMessageBuffer(runner, emitter);
			break;
		case "update":
			await notifyListeners(runner, "vite:beforeUpdate", payload);
			await Promise.all(payload.updates.map((update) => {
				if (update.type === "js-update") return queueUpdate(runner, fetchUpdate(runner, update));
				// css-update
				console.error(`${s.cyan("[vite-node]")} no support css hmr.}`);
				return null;
			}));
			await notifyListeners(runner, "vite:afterUpdate", payload);
			break;
		case "full-reload":
			await notifyListeners(runner, "vite:beforeFullReload", payload);
			maps.customListenersMap.delete("vite:beforeFullReload");
			await reload(runner, files);
			break;
		case "custom":
			await notifyListeners(runner, payload.event, payload.data);
			break;
		case "prune":
			await notifyListeners(runner, "vite:beforePrune", payload);
			payload.paths.forEach((path) => {
				const fn = maps.pruneMap.get(path);
				if (fn) fn(maps.dataMap.get(path));
			});
			break;
		case "error": {
			await notifyListeners(runner, "vite:error", payload);
			const err = payload.err;
			console.error(`${s.cyan("[vite-node]")} Internal Server Error\n${err.message}\n${err.stack}`);
			break;
		}
	}
}
function createHotContext(runner, emitter, files, ownerPath) {
	debugHmr("createHotContext", ownerPath);
	const maps = getCache(runner);
	if (!maps.dataMap.has(ownerPath)) maps.dataMap.set(ownerPath, {});
	// when a file is hot updated, a new context is created
	// clear its stale callbacks
	const mod = maps.hotModulesMap.get(ownerPath);
	if (mod) mod.callbacks = [];
	const newListeners = /* @__PURE__ */ new Map();
	maps.ctxToListenersMap.set(ownerPath, newListeners);
	function acceptDeps(deps, callback = () => {}) {
		const mod = maps.hotModulesMap.get(ownerPath) || {
			id: ownerPath,
			callbacks: []
		};
		mod.callbacks.push({
			deps,
			fn: callback
		});
		maps.hotModulesMap.set(ownerPath, mod);
	}
	const hot = {
		get data() {
			return maps.dataMap.get(ownerPath);
		},
		acceptExports(_, callback) {
			acceptDeps([ownerPath], callback && (([mod]) => callback(mod)));
		},
		accept(deps, callback) {
			if (typeof deps === "function" || !deps)
 // self-accept: hot.accept(() => {})
			acceptDeps([ownerPath], ([mod]) => deps && deps(mod));
			else if (typeof deps === "string")
 // explicit deps
			acceptDeps([deps], ([mod]) => callback && callback(mod));
			else if (Array.isArray(deps)) acceptDeps(deps, callback);
			else throw new TypeError("invalid hot.accept() usage.");
		},
		dispose(cb) {
			maps.disposeMap.set(ownerPath, cb);
		},
		prune(cb) {
			maps.pruneMap.set(ownerPath, cb);
		},
		invalidate() {
			notifyListeners(runner, "vite:invalidate", {
				path: ownerPath,
				message: void 0,
				firstInvalidatedBy: ownerPath
			});
			return reload(runner, files);
		},
		on(event, cb) {
			const addToMap = (map) => {
				const existing = map.get(event) || [];
				existing.push(cb);
				map.set(event, existing);
			};
			addToMap(maps.customListenersMap);
			addToMap(newListeners);
		},
		off(event, cb) {
			const removeFromMap = (map) => {
				const existing = map.get(event);
				if (existing === void 0) return;
				const pruned = existing.filter((l) => l !== cb);
				if (pruned.length === 0) {
					map.delete(event);
					return;
				}
				map.set(event, pruned);
			};
			removeFromMap(maps.customListenersMap);
			removeFromMap(newListeners);
		},
		send(event, data) {
			maps.messageBuffer.push(JSON.stringify({
				type: "custom",
				event,
				data
			}));
			sendMessageBuffer(runner, emitter);
		}
	};
	return hot;
}

export { createHotContext as a, createHmrEmitter as c, getCache as g, handleMessage as h, reload as r, sendMessageBuffer as s, viteNodeHmrPlugin as v };
