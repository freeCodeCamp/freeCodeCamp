import "@vite/env";

//#region \0@oxc-project+runtime@0.99.0/helpers/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
		return typeof o$1;
	} : function(o$1) {
		return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
	}, _typeof(o);
}

//#endregion
//#region \0@oxc-project+runtime@0.99.0/helpers/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}

//#endregion
//#region \0@oxc-project+runtime@0.99.0/helpers/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}

//#endregion
//#region \0@oxc-project+runtime@0.99.0/helpers/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}

//#endregion
//#region src/shared/hmr.ts
var HMRContext = class {
	constructor(hmrClient$1, ownerPath) {
		this.hmrClient = hmrClient$1;
		this.ownerPath = ownerPath;
		_defineProperty(this, "newListeners", void 0);
		if (!hmrClient$1.dataMap.has(ownerPath)) hmrClient$1.dataMap.set(ownerPath, {});
		const mod = hmrClient$1.hotModulesMap.get(ownerPath);
		if (mod) mod.callbacks = [];
		const staleListeners = hmrClient$1.ctxToListenersMap.get(ownerPath);
		if (staleListeners) for (const [event, staleFns] of staleListeners) {
			const listeners = hmrClient$1.customListenersMap.get(event);
			if (listeners) hmrClient$1.customListenersMap.set(event, listeners.filter((l) => !staleFns.includes(l)));
		}
		this.newListeners = /* @__PURE__ */ new Map();
		hmrClient$1.ctxToListenersMap.set(ownerPath, this.newListeners);
	}
	get data() {
		return this.hmrClient.dataMap.get(this.ownerPath);
	}
	accept(deps, callback) {
		if (typeof deps === "function" || !deps) this.acceptDeps([this.ownerPath], ([mod]) => deps?.(mod));
		else if (typeof deps === "string") this.acceptDeps([deps], ([mod]) => callback?.(mod));
		else if (Array.isArray(deps)) this.acceptDeps(deps, callback);
		else throw new Error(`invalid hot.accept() usage.`);
	}
	acceptExports(_, callback) {
		this.acceptDeps([this.ownerPath], ([mod]) => callback?.(mod));
	}
	dispose(cb) {
		this.hmrClient.disposeMap.set(this.ownerPath, cb);
	}
	prune(cb) {
		this.hmrClient.pruneMap.set(this.ownerPath, cb);
	}
	decline() {}
	invalidate(message) {
		const firstInvalidatedBy = this.hmrClient.currentFirstInvalidatedBy ?? this.ownerPath;
		this.hmrClient.notifyListeners("vite:invalidate", {
			path: this.ownerPath,
			message,
			firstInvalidatedBy
		});
		this.send("vite:invalidate", {
			path: this.ownerPath,
			message,
			firstInvalidatedBy
		});
		this.hmrClient.logger.debug(`invalidate ${this.ownerPath}${message ? `: ${message}` : ""}`);
	}
	on(event, cb) {
		const addToMap = (map) => {
			const existing = map.get(event) || [];
			existing.push(cb);
			map.set(event, existing);
		};
		addToMap(this.hmrClient.customListenersMap);
		addToMap(this.newListeners);
	}
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
		removeFromMap(this.hmrClient.customListenersMap);
		removeFromMap(this.newListeners);
	}
	send(event, data) {
		this.hmrClient.send({
			type: "custom",
			event,
			data
		});
	}
	acceptDeps(deps, callback = () => {}) {
		const mod = this.hmrClient.hotModulesMap.get(this.ownerPath) || {
			id: this.ownerPath,
			callbacks: []
		};
		mod.callbacks.push({
			deps,
			fn: callback
		});
		this.hmrClient.hotModulesMap.set(this.ownerPath, mod);
	}
};
var HMRClient = class {
	constructor(logger, transport$1, importUpdatedModule) {
		this.logger = logger;
		this.transport = transport$1;
		this.importUpdatedModule = importUpdatedModule;
		_defineProperty(this, "hotModulesMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "disposeMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "pruneMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "dataMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "customListenersMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "ctxToListenersMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "currentFirstInvalidatedBy", void 0);
		_defineProperty(this, "updateQueue", []);
		_defineProperty(this, "pendingUpdateQueue", false);
	}
	async notifyListeners(event, data) {
		const cbs = this.customListenersMap.get(event);
		if (cbs) await Promise.allSettled(cbs.map((cb) => cb(data)));
	}
	send(payload) {
		this.transport.send(payload).catch((err) => {
			this.logger.error(err);
		});
	}
	clear() {
		this.hotModulesMap.clear();
		this.disposeMap.clear();
		this.pruneMap.clear();
		this.dataMap.clear();
		this.customListenersMap.clear();
		this.ctxToListenersMap.clear();
	}
	async prunePaths(paths) {
		await Promise.all(paths.map((path) => {
			const disposer = this.disposeMap.get(path);
			if (disposer) return disposer(this.dataMap.get(path));
		}));
		await Promise.all(paths.map((path) => {
			const fn = this.pruneMap.get(path);
			if (fn) return fn(this.dataMap.get(path));
		}));
	}
	warnFailedUpdate(err, path) {
		if (!(err instanceof Error) || !err.message.includes("fetch")) this.logger.error(err);
		this.logger.error(`Failed to reload ${path}. This could be due to syntax errors or importing non-existent modules. (see errors above)`);
	}
	/**
	* buffer multiple hot updates triggered by the same src change
	* so that they are invoked in the same order they were sent.
	* (otherwise the order may be inconsistent because of the http request round trip)
	*/
	async queueUpdate(payload) {
		this.updateQueue.push(this.fetchUpdate(payload));
		if (!this.pendingUpdateQueue) {
			this.pendingUpdateQueue = true;
			await Promise.resolve();
			this.pendingUpdateQueue = false;
			const loading = [...this.updateQueue];
			this.updateQueue = [];
			(await Promise.all(loading)).forEach((fn) => fn && fn());
		}
	}
	async fetchUpdate(update) {
		const { path, acceptedPath, firstInvalidatedBy } = update;
		const mod = this.hotModulesMap.get(path);
		if (!mod) return;
		let fetchedModule;
		const isSelfUpdate = path === acceptedPath;
		const qualifiedCallbacks = mod.callbacks.filter(({ deps }) => deps.includes(acceptedPath));
		if (isSelfUpdate || qualifiedCallbacks.length > 0) {
			const disposer = this.disposeMap.get(acceptedPath);
			if (disposer) await disposer(this.dataMap.get(acceptedPath));
			try {
				fetchedModule = await this.importUpdatedModule(update);
			} catch (e) {
				this.warnFailedUpdate(e, acceptedPath);
			}
		}
		return () => {
			try {
				this.currentFirstInvalidatedBy = firstInvalidatedBy;
				for (const { deps, fn } of qualifiedCallbacks) fn(deps.map((dep) => dep === acceptedPath ? fetchedModule : void 0));
				const loggedPath = isSelfUpdate ? path : `${acceptedPath} via ${path}`;
				this.logger.debug(`hot updated: ${loggedPath}`);
			} finally {
				this.currentFirstInvalidatedBy = void 0;
			}
		};
	}
};

//#endregion
//#region ../../node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/non-secure/index.js
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let nanoid = (size = 21) => {
	let id = "";
	let i = size | 0;
	while (i--) id += urlAlphabet[Math.random() * 64 | 0];
	return id;
};

//#endregion
//#region src/shared/constants.ts
let SOURCEMAPPING_URL = "sourceMa";
SOURCEMAPPING_URL += "ppingURL";

//#endregion
//#region src/shared/utils.ts
const isWindows = typeof process !== "undefined" && process.platform === "win32";
const AsyncFunction = async function() {}.constructor;
function promiseWithResolvers() {
	let resolve;
	let reject;
	return {
		promise: new Promise((_resolve, _reject) => {
			resolve = _resolve;
			reject = _reject;
		}),
		resolve,
		reject
	};
}

//#endregion
//#region src/shared/moduleRunnerTransport.ts
function reviveInvokeError(e) {
	const error = new Error(e.message || "Unknown invoke error");
	Object.assign(error, e, { runnerError: /* @__PURE__ */ new Error("RunnerError") });
	return error;
}
const createInvokeableTransport = (transport$1) => {
	if (transport$1.invoke) return {
		...transport$1,
		async invoke(name, data) {
			const result = await transport$1.invoke({
				type: "custom",
				event: "vite:invoke",
				data: {
					id: "send",
					name,
					data
				}
			});
			if ("error" in result) throw reviveInvokeError(result.error);
			return result.result;
		}
	};
	if (!transport$1.send || !transport$1.connect) throw new Error("transport must implement send and connect when invoke is not implemented");
	const rpcPromises = /* @__PURE__ */ new Map();
	return {
		...transport$1,
		connect({ onMessage, onDisconnection }) {
			return transport$1.connect({
				onMessage(payload) {
					if (payload.type === "custom" && payload.event === "vite:invoke") {
						const data = payload.data;
						if (data.id.startsWith("response:")) {
							const invokeId = data.id.slice(9);
							const promise = rpcPromises.get(invokeId);
							if (!promise) return;
							if (promise.timeoutId) clearTimeout(promise.timeoutId);
							rpcPromises.delete(invokeId);
							const { error, result } = data.data;
							if (error) promise.reject(error);
							else promise.resolve(result);
							return;
						}
					}
					onMessage(payload);
				},
				onDisconnection
			});
		},
		disconnect() {
			rpcPromises.forEach((promise) => {
				promise.reject(/* @__PURE__ */ new Error(`transport was disconnected, cannot call ${JSON.stringify(promise.name)}`));
			});
			rpcPromises.clear();
			return transport$1.disconnect?.();
		},
		send(data) {
			return transport$1.send(data);
		},
		async invoke(name, data) {
			const promiseId = nanoid();
			const wrappedData = {
				type: "custom",
				event: "vite:invoke",
				data: {
					name,
					id: `send:${promiseId}`,
					data
				}
			};
			const sendPromise = transport$1.send(wrappedData);
			const { promise, resolve, reject } = promiseWithResolvers();
			const timeout = transport$1.timeout ?? 6e4;
			let timeoutId;
			if (timeout > 0) {
				timeoutId = setTimeout(() => {
					rpcPromises.delete(promiseId);
					reject(/* @__PURE__ */ new Error(`transport invoke timed out after ${timeout}ms (data: ${JSON.stringify(wrappedData)})`));
				}, timeout);
				timeoutId?.unref?.();
			}
			rpcPromises.set(promiseId, {
				resolve,
				reject,
				name,
				timeoutId
			});
			if (sendPromise) sendPromise.catch((err) => {
				clearTimeout(timeoutId);
				rpcPromises.delete(promiseId);
				reject(err);
			});
			try {
				return await promise;
			} catch (err) {
				throw reviveInvokeError(err);
			}
		}
	};
};
const normalizeModuleRunnerTransport = (transport$1) => {
	const invokeableTransport = createInvokeableTransport(transport$1);
	let isConnected = !invokeableTransport.connect;
	let connectingPromise;
	return {
		...transport$1,
		...invokeableTransport.connect ? { async connect(onMessage) {
			if (isConnected) return;
			if (connectingPromise) {
				await connectingPromise;
				return;
			}
			const maybePromise = invokeableTransport.connect({
				onMessage: onMessage ?? (() => {}),
				onDisconnection() {
					isConnected = false;
				}
			});
			if (maybePromise) {
				connectingPromise = maybePromise;
				await connectingPromise;
				connectingPromise = void 0;
			}
			isConnected = true;
		} } : {},
		...invokeableTransport.disconnect ? { async disconnect() {
			if (!isConnected) return;
			if (connectingPromise) await connectingPromise;
			isConnected = false;
			await invokeableTransport.disconnect();
		} } : {},
		async send(data) {
			if (!invokeableTransport.send) return;
			if (!isConnected) if (connectingPromise) await connectingPromise;
			else throw new Error("send was called before connect");
			await invokeableTransport.send(data);
		},
		async invoke(name, data) {
			if (!isConnected) if (connectingPromise) await connectingPromise;
			else throw new Error("invoke was called before connect");
			return invokeableTransport.invoke(name, data);
		}
	};
};
const createWebSocketModuleRunnerTransport = (options) => {
	const pingInterval = options.pingInterval ?? 3e4;
	let ws;
	let pingIntervalId;
	return {
		async connect({ onMessage, onDisconnection }) {
			const socket = options.createConnection();
			socket.addEventListener("message", async ({ data }) => {
				onMessage(JSON.parse(data));
			});
			let isOpened = socket.readyState === socket.OPEN;
			if (!isOpened) await new Promise((resolve, reject) => {
				socket.addEventListener("open", () => {
					isOpened = true;
					resolve();
				}, { once: true });
				socket.addEventListener("close", async () => {
					if (!isOpened) {
						reject(/* @__PURE__ */ new Error("WebSocket closed without opened."));
						return;
					}
					onMessage({
						type: "custom",
						event: "vite:ws:disconnect",
						data: { webSocket: socket }
					});
					onDisconnection();
				});
			});
			onMessage({
				type: "custom",
				event: "vite:ws:connect",
				data: { webSocket: socket }
			});
			ws = socket;
			pingIntervalId = setInterval(() => {
				if (socket.readyState === socket.OPEN) socket.send(JSON.stringify({ type: "ping" }));
			}, pingInterval);
		},
		disconnect() {
			clearInterval(pingIntervalId);
			ws?.close();
		},
		send(data) {
			ws.send(JSON.stringify(data));
		}
	};
};

//#endregion
//#region src/shared/hmrHandler.ts
function createHMRHandler(handler) {
	const queue = new Queue();
	return (payload) => queue.enqueue(() => handler(payload));
}
var Queue = class {
	constructor() {
		_defineProperty(this, "queue", []);
		_defineProperty(this, "pending", false);
	}
	enqueue(promise) {
		return new Promise((resolve, reject) => {
			this.queue.push({
				promise,
				resolve,
				reject
			});
			this.dequeue();
		});
	}
	dequeue() {
		if (this.pending) return false;
		const item = this.queue.shift();
		if (!item) return false;
		this.pending = true;
		item.promise().then(item.resolve).catch(item.reject).finally(() => {
			this.pending = false;
			this.dequeue();
		});
		return true;
	}
};

//#endregion
//#region src/client/overlay.ts
const hmrConfigName = __HMR_CONFIG_NAME__;
const base$1 = __BASE__ || "/";
const cspNonce = "document" in globalThis ? document.querySelector("meta[property=csp-nonce]")?.nonce : void 0;
function h(e, attrs = {}, ...children) {
	const elem = document.createElement(e);
	for (const [k, v] of Object.entries(attrs)) if (v !== void 0) elem.setAttribute(k, v);
	elem.append(...children);
	return elem;
}
const templateStyle = `
:host {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  --monospace: 'SFMono-Regular', Consolas,
  'Liberation Mono', Menlo, Courier, monospace;
  --red: #ff5555;
  --yellow: #e2aa53;
  --purple: #cfa4ff;
  --cyan: #2dd9da;
  --dim: #c9c9c9;

  --window-background: #181818;
  --window-color: #d8d8d8;
}

.backdrop {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  background: rgba(0, 0, 0, 0.66);
}

.window {
  font-family: var(--monospace);
  line-height: 1.5;
  max-width: 80vw;
  color: var(--window-color);
  box-sizing: border-box;
  margin: 30px auto;
  padding: 2.5vh 4vw;
  position: relative;
  background: var(--window-background);
  border-radius: 6px 6px 8px 8px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  overflow: hidden;
  border-top: 8px solid var(--red);
  direction: ltr;
  text-align: left;
}

pre {
  font-family: var(--monospace);
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  overflow-x: scroll;
  scrollbar-width: none;
}

pre::-webkit-scrollbar {
  display: none;
}

pre.frame::-webkit-scrollbar {
  display: block;
  height: 5px;
}

pre.frame::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

pre.frame {
  scrollbar-width: thin;
}

.message {
  line-height: 1.3;
  font-weight: 600;
  white-space: pre-wrap;
}

.message-body {
  color: var(--red);
}

.plugin {
  color: var(--purple);
}

.file {
  color: var(--cyan);
  margin-bottom: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.frame {
  color: var(--yellow);
}

.stack {
  font-size: 13px;
  color: var(--dim);
}

.tip {
  font-size: 13px;
  color: #999;
  border-top: 1px dotted #999;
  padding-top: 13px;
  line-height: 1.8;
}

code {
  font-size: 13px;
  font-family: var(--monospace);
  color: var(--yellow);
}

.file-link {
  text-decoration: underline;
  cursor: pointer;
}

kbd {
  line-height: 1.5;
  font-family: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: rgb(38, 40, 44);
  color: rgb(166, 167, 171);
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem 0.0625rem 0.1875rem;
  border-style: solid;
  border-color: rgb(54, 57, 64);
  border-image: initial;
}
`;
const createTemplate = () => h("div", {
	class: "backdrop",
	part: "backdrop"
}, h("div", {
	class: "window",
	part: "window"
}, h("pre", {
	class: "message",
	part: "message"
}, h("span", {
	class: "plugin",
	part: "plugin"
}), h("span", {
	class: "message-body",
	part: "message-body"
})), h("pre", {
	class: "file",
	part: "file"
}), h("pre", {
	class: "frame",
	part: "frame"
}), h("pre", {
	class: "stack",
	part: "stack"
}), h("div", {
	class: "tip",
	part: "tip"
}, "Click outside, press ", h("kbd", {}, "Esc"), " key, or fix the code to dismiss.", h("br"), "You can also disable this overlay by setting ", h("code", { part: "config-option-name" }, "server.hmr.overlay"), " to ", h("code", { part: "config-option-value" }, "false"), " in ", h("code", { part: "config-file-name" }, hmrConfigName), ".")), h("style", { nonce: cspNonce }, templateStyle));
const fileRE = /(?:file:\/\/)?(?:[a-zA-Z]:\\|\/).*?:\d+:\d+/g;
const codeframeRE = /^(?:>?\s*\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm;
const { HTMLElement = class {} } = globalThis;
var ErrorOverlay = class extends HTMLElement {
	constructor(err, links = true) {
		super();
		_defineProperty(this, "root", void 0);
		_defineProperty(this, "closeOnEsc", void 0);
		this.root = this.attachShadow({ mode: "open" });
		this.root.appendChild(createTemplate());
		codeframeRE.lastIndex = 0;
		const hasFrame = err.frame && codeframeRE.test(err.frame);
		const message = hasFrame ? err.message.replace(codeframeRE, "") : err.message;
		if (err.plugin) this.text(".plugin", `[plugin:${err.plugin}] `);
		this.text(".message-body", message.trim());
		const [file] = (err.loc?.file || err.id || "unknown file").split(`?`);
		if (err.loc) this.text(".file", `${file}:${err.loc.line}:${err.loc.column}`, links);
		else if (err.id) this.text(".file", file);
		if (hasFrame) this.text(".frame", err.frame.trim());
		this.text(".stack", err.stack, links);
		this.root.querySelector(".window").addEventListener("click", (e) => {
			e.stopPropagation();
		});
		this.addEventListener("click", () => {
			this.close();
		});
		this.closeOnEsc = (e) => {
			if (e.key === "Escape" || e.code === "Escape") this.close();
		};
		document.addEventListener("keydown", this.closeOnEsc);
	}
	text(selector, text, linkFiles = false) {
		const el = this.root.querySelector(selector);
		if (!linkFiles) el.textContent = text;
		else {
			let curIndex = 0;
			let match;
			fileRE.lastIndex = 0;
			while (match = fileRE.exec(text)) {
				const { 0: file, index } = match;
				const frag = text.slice(curIndex, index);
				el.appendChild(document.createTextNode(frag));
				const link = document.createElement("a");
				link.textContent = file;
				link.className = "file-link";
				link.onclick = () => {
					fetch(new URL(`${base$1}__open-in-editor?file=${encodeURIComponent(file)}`, import.meta.url));
				};
				el.appendChild(link);
				curIndex += frag.length + file.length;
			}
			if (curIndex < text.length) el.appendChild(document.createTextNode(text.slice(curIndex)));
		}
	}
	close() {
		this.parentNode?.removeChild(this);
		document.removeEventListener("keydown", this.closeOnEsc);
	}
};
const overlayId = "vite-error-overlay";
const { customElements } = globalThis;
if (customElements && !customElements.get(overlayId)) customElements.define(overlayId, ErrorOverlay);

//#endregion
//#region src/client/client.ts
console.debug("[vite] connecting...");
const importMetaUrl = new URL(import.meta.url);
const serverHost = __SERVER_HOST__;
const socketProtocol = __HMR_PROTOCOL__ || (importMetaUrl.protocol === "https:" ? "wss" : "ws");
const hmrPort = __HMR_PORT__;
const socketHost = `${__HMR_HOSTNAME__ || importMetaUrl.hostname}:${hmrPort || importMetaUrl.port}${__HMR_BASE__}`;
const directSocketHost = __HMR_DIRECT_TARGET__;
const base = __BASE__ || "/";
const hmrTimeout = __HMR_TIMEOUT__;
const wsToken = __WS_TOKEN__;
const transport = normalizeModuleRunnerTransport((() => {
	let wsTransport = createWebSocketModuleRunnerTransport({
		createConnection: () => new WebSocket(`${socketProtocol}://${socketHost}?token=${wsToken}`, "vite-hmr"),
		pingInterval: hmrTimeout
	});
	return {
		async connect(handlers) {
			try {
				await wsTransport.connect(handlers);
			} catch (e) {
				if (!hmrPort) {
					wsTransport = createWebSocketModuleRunnerTransport({
						createConnection: () => new WebSocket(`${socketProtocol}://${directSocketHost}?token=${wsToken}`, "vite-hmr"),
						pingInterval: hmrTimeout
					});
					try {
						await wsTransport.connect(handlers);
						console.info("[vite] Direct websocket connection fallback. Check out https://vite.dev/config/server-options.html#server-hmr to remove the previous connection error.");
					} catch (e$1) {
						if (e$1 instanceof Error && e$1.message.includes("WebSocket closed without opened.")) {
							const currentScriptHostURL = new URL(import.meta.url);
							const currentScriptHost = currentScriptHostURL.host + currentScriptHostURL.pathname.replace(/@vite\/client$/, "");
							console.error(`[vite] failed to connect to websocket.
your current setup:
  (browser) ${currentScriptHost} <--[HTTP]--> ${serverHost} (server)\n  (browser) ${socketHost} <--[WebSocket (failing)]--> ${directSocketHost} (server)\nCheck out your Vite / network configuration and https://vite.dev/config/server-options.html#server-hmr .`);
						}
					}
					return;
				}
				console.error(`[vite] failed to connect to websocket (${e}). `);
				throw e;
			}
		},
		async disconnect() {
			await wsTransport.disconnect();
		},
		send(data) {
			wsTransport.send(data);
		}
	};
})());
let willUnload = false;
if (typeof window !== "undefined") window.addEventListener?.("beforeunload", () => {
	willUnload = true;
});
function cleanUrl(pathname) {
	const url = new URL(pathname, "http://vite.dev");
	url.searchParams.delete("direct");
	return url.pathname + url.search;
}
let isFirstUpdate = true;
const outdatedLinkTags = /* @__PURE__ */ new WeakSet();
const debounceReload = (time) => {
	let timer;
	return () => {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			location.reload();
		}, time);
	};
};
const pageReload = debounceReload(20);
const hmrClient = new HMRClient({
	error: (err) => console.error("[vite]", err),
	debug: (...msg) => console.debug("[vite]", ...msg)
}, transport, async function importUpdatedModule({ acceptedPath, timestamp, explicitImportRequired, isWithinCircularImport }) {
	const [acceptedPathWithoutQuery, query] = acceptedPath.split(`?`);
	const importPromise = import(
		/* @vite-ignore */
		base + acceptedPathWithoutQuery.slice(1) + `?${explicitImportRequired ? "import&" : ""}t=${timestamp}${query ? `&${query}` : ""}`
);
	if (isWithinCircularImport) importPromise.catch(() => {
		console.info(`[hmr] ${acceptedPath} failed to apply HMR as it's within a circular import. Reloading page to reset the execution order. To debug and break the circular import, you can run \`vite --debug hmr\` to log the circular dependency path if a file change triggered it.`);
		pageReload();
	});
	return await importPromise;
});
transport.connect(createHMRHandler(handleMessage));
async function handleMessage(payload) {
	switch (payload.type) {
		case "connected":
			console.debug(`[vite] connected.`);
			break;
		case "update":
			await hmrClient.notifyListeners("vite:beforeUpdate", payload);
			if (hasDocument) if (isFirstUpdate && hasErrorOverlay()) {
				location.reload();
				return;
			} else {
				if (enableOverlay) clearErrorOverlay();
				isFirstUpdate = false;
			}
			await Promise.all(payload.updates.map(async (update) => {
				if (update.type === "js-update") return hmrClient.queueUpdate(update);
				const { path, timestamp } = update;
				const searchUrl = cleanUrl(path);
				const el = Array.from(document.querySelectorAll("link")).find((e) => !outdatedLinkTags.has(e) && cleanUrl(e.href).includes(searchUrl));
				if (!el) return;
				const newPath = `${base}${searchUrl.slice(1)}${searchUrl.includes("?") ? "&" : "?"}t=${timestamp}`;
				return new Promise((resolve) => {
					const newLinkTag = el.cloneNode();
					newLinkTag.href = new URL(newPath, el.href).href;
					const removeOldEl = () => {
						el.remove();
						console.debug(`[vite] css hot updated: ${searchUrl}`);
						resolve();
					};
					newLinkTag.addEventListener("load", removeOldEl);
					newLinkTag.addEventListener("error", removeOldEl);
					outdatedLinkTags.add(el);
					el.after(newLinkTag);
				});
			}));
			await hmrClient.notifyListeners("vite:afterUpdate", payload);
			break;
		case "custom":
			await hmrClient.notifyListeners(payload.event, payload.data);
			if (payload.event === "vite:ws:disconnect") {
				if (hasDocument && !willUnload) {
					console.log(`[vite] server connection lost. Polling for restart...`);
					const socket = payload.data.webSocket;
					const url = new URL(socket.url);
					url.search = "";
					await waitForSuccessfulPing(url.href);
					location.reload();
				}
			}
			break;
		case "full-reload":
			await hmrClient.notifyListeners("vite:beforeFullReload", payload);
			if (hasDocument) if (payload.path && payload.path.endsWith(".html")) {
				const pagePath = decodeURI(location.pathname);
				const payloadPath = base + payload.path.slice(1);
				if (pagePath === payloadPath || payload.path === "/index.html" || pagePath.endsWith("/") && pagePath + "index.html" === payloadPath) pageReload();
				return;
			} else pageReload();
			break;
		case "prune":
			await hmrClient.notifyListeners("vite:beforePrune", payload);
			await hmrClient.prunePaths(payload.paths);
			break;
		case "error":
			await hmrClient.notifyListeners("vite:error", payload);
			if (hasDocument) {
				const err = payload.err;
				if (enableOverlay) createErrorOverlay(err);
				else console.error(`[vite] Internal Server Error\n${err.message}\n${err.stack}`);
			}
			break;
		case "ping": break;
		default: return payload;
	}
}
const enableOverlay = __HMR_ENABLE_OVERLAY__;
const hasDocument = "document" in globalThis;
function createErrorOverlay(err) {
	clearErrorOverlay();
	const { customElements: customElements$1 } = globalThis;
	if (customElements$1) {
		const ErrorOverlayConstructor = customElements$1.get(overlayId);
		document.body.appendChild(new ErrorOverlayConstructor(err));
	}
}
function clearErrorOverlay() {
	document.querySelectorAll(overlayId).forEach((n) => n.close());
}
function hasErrorOverlay() {
	return document.querySelectorAll(overlayId).length;
}
function waitForSuccessfulPing(socketUrl) {
	if (typeof SharedWorker === "undefined") {
		const visibilityManager = {
			currentState: document.visibilityState,
			listeners: /* @__PURE__ */ new Set()
		};
		const onVisibilityChange = () => {
			visibilityManager.currentState = document.visibilityState;
			for (const listener of visibilityManager.listeners) listener(visibilityManager.currentState);
		};
		document.addEventListener("visibilitychange", onVisibilityChange);
		return waitForSuccessfulPingInternal(socketUrl, visibilityManager);
	}
	const blob = new Blob([
		"\"use strict\";",
		`const waitForSuccessfulPingInternal = ${waitForSuccessfulPingInternal.toString()};`,
		`const fn = ${pingWorkerContentMain.toString()};`,
		`fn(${JSON.stringify(socketUrl)})`
	], { type: "application/javascript" });
	const objURL = URL.createObjectURL(blob);
	const sharedWorker = new SharedWorker(objURL);
	return new Promise((resolve, reject) => {
		const onVisibilityChange = () => {
			sharedWorker.port.postMessage({ visibility: document.visibilityState });
		};
		document.addEventListener("visibilitychange", onVisibilityChange);
		sharedWorker.port.addEventListener("message", (event) => {
			document.removeEventListener("visibilitychange", onVisibilityChange);
			sharedWorker.port.close();
			const data = event.data;
			if (data.type === "error") {
				reject(data.error);
				return;
			}
			resolve();
		});
		onVisibilityChange();
		sharedWorker.port.start();
	});
}
function pingWorkerContentMain(socketUrl) {
	self.addEventListener("connect", (_event) => {
		const port = _event.ports[0];
		if (!socketUrl) {
			port.postMessage({
				type: "error",
				error: /* @__PURE__ */ new Error("socketUrl not found")
			});
			return;
		}
		const visibilityManager = {
			currentState: "visible",
			listeners: /* @__PURE__ */ new Set()
		};
		port.addEventListener("message", (event) => {
			const { visibility } = event.data;
			visibilityManager.currentState = visibility;
			console.debug("[vite] new window visibility", visibility);
			for (const listener of visibilityManager.listeners) listener(visibility);
		});
		port.start();
		console.debug("[vite] connected from window");
		waitForSuccessfulPingInternal(socketUrl, visibilityManager).then(() => {
			console.debug("[vite] ping successful");
			try {
				port.postMessage({ type: "success" });
			} catch (error) {
				port.postMessage({
					type: "error",
					error
				});
			}
		}, (error) => {
			console.debug("[vite] error happened", error);
			try {
				port.postMessage({
					type: "error",
					error
				});
			} catch (error$1) {
				port.postMessage({
					type: "error",
					error: error$1
				});
			}
		});
	});
}
async function waitForSuccessfulPingInternal(socketUrl, visibilityManager, ms = 1e3) {
	function wait(ms$1) {
		return new Promise((resolve) => setTimeout(resolve, ms$1));
	}
	async function ping() {
		try {
			const socket = new WebSocket(socketUrl, "vite-ping");
			return new Promise((resolve) => {
				function onOpen() {
					resolve(true);
					close();
				}
				function onError() {
					resolve(false);
					close();
				}
				function close() {
					socket.removeEventListener("open", onOpen);
					socket.removeEventListener("error", onError);
					socket.close();
				}
				socket.addEventListener("open", onOpen);
				socket.addEventListener("error", onError);
			});
		} catch {
			return false;
		}
	}
	function waitForWindowShow(visibilityManager$1) {
		return new Promise((resolve) => {
			const onChange = (newVisibility) => {
				if (newVisibility === "visible") {
					resolve();
					visibilityManager$1.listeners.delete(onChange);
				}
			};
			visibilityManager$1.listeners.add(onChange);
		});
	}
	if (await ping()) return;
	await wait(ms);
	while (true) if (visibilityManager.currentState === "visible") {
		if (await ping()) break;
		await wait(ms);
	} else await waitForWindowShow(visibilityManager);
}
const sheetsMap = /* @__PURE__ */ new Map();
const linkSheetsMap = /* @__PURE__ */ new Map();
if ("document" in globalThis) {
	document.querySelectorAll("style[data-vite-dev-id]").forEach((el) => {
		sheetsMap.set(el.getAttribute("data-vite-dev-id"), el);
	});
	document.querySelectorAll("link[rel=\"stylesheet\"][data-vite-dev-id]").forEach((el) => {
		linkSheetsMap.set(el.getAttribute("data-vite-dev-id"), el);
	});
}
let lastInsertedStyle;
function updateStyle(id, content) {
	if (linkSheetsMap.has(id)) return;
	let style = sheetsMap.get(id);
	if (!style) {
		style = document.createElement("style");
		style.setAttribute("type", "text/css");
		style.setAttribute("data-vite-dev-id", id);
		style.textContent = content;
		if (cspNonce) style.setAttribute("nonce", cspNonce);
		if (!lastInsertedStyle) {
			document.head.appendChild(style);
			setTimeout(() => {
				lastInsertedStyle = void 0;
			}, 0);
		} else lastInsertedStyle.insertAdjacentElement("afterend", style);
		lastInsertedStyle = style;
	} else style.textContent = content;
	sheetsMap.set(id, style);
}
function removeStyle(id) {
	if (linkSheetsMap.has(id)) {
		document.querySelectorAll(`link[rel="stylesheet"][data-vite-dev-id]`).forEach((el) => {
			if (el.getAttribute("data-vite-dev-id") === id) el.remove();
		});
		linkSheetsMap.delete(id);
	}
	const style = sheetsMap.get(id);
	if (style) {
		document.head.removeChild(style);
		sheetsMap.delete(id);
	}
}
function createHotContext(ownerPath) {
	return new HMRContext(hmrClient, ownerPath);
}
/**
* urls here are dynamic import() urls that couldn't be statically analyzed
*/
function injectQuery(url, queryToInject) {
	if (url[0] !== "." && url[0] !== "/") return url;
	const pathname = url.replace(/[?#].*$/, "");
	const { search, hash } = new URL(url, "http://vite.dev");
	return `${pathname}?${queryToInject}${search ? `&` + search.slice(1) : ""}${hash || ""}`;
}

//#endregion
export { ErrorOverlay, createHotContext, injectQuery, removeStyle, updateStyle };