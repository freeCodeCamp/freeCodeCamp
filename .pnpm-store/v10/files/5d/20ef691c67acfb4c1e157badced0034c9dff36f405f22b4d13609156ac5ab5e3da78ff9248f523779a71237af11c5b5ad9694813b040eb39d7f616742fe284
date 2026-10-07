import { Console } from 'node:console';

// SEE https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/interfaces.js
const LIVING_KEYS = [
	"DOMException",
	"URL",
	"URLSearchParams",
	"EventTarget",
	"NamedNodeMap",
	"Node",
	"Attr",
	"Element",
	"DocumentFragment",
	"DOMImplementation",
	"Document",
	"XMLDocument",
	"CharacterData",
	"Text",
	"CDATASection",
	"ProcessingInstruction",
	"Comment",
	"DocumentType",
	"NodeList",
	"RadioNodeList",
	"HTMLCollection",
	"HTMLOptionsCollection",
	"DOMStringMap",
	"DOMTokenList",
	"StyleSheetList",
	"HTMLElement",
	"HTMLHeadElement",
	"HTMLTitleElement",
	"HTMLBaseElement",
	"HTMLLinkElement",
	"HTMLMetaElement",
	"HTMLStyleElement",
	"HTMLBodyElement",
	"HTMLHeadingElement",
	"HTMLParagraphElement",
	"HTMLHRElement",
	"HTMLPreElement",
	"HTMLUListElement",
	"HTMLOListElement",
	"HTMLLIElement",
	"HTMLMenuElement",
	"HTMLDListElement",
	"HTMLDivElement",
	"HTMLAnchorElement",
	"HTMLAreaElement",
	"HTMLBRElement",
	"HTMLButtonElement",
	"HTMLCanvasElement",
	"HTMLDataElement",
	"HTMLDataListElement",
	"HTMLDetailsElement",
	"HTMLDialogElement",
	"HTMLDirectoryElement",
	"HTMLFieldSetElement",
	"HTMLFontElement",
	"HTMLFormElement",
	"HTMLHtmlElement",
	"HTMLImageElement",
	"HTMLInputElement",
	"HTMLLabelElement",
	"HTMLLegendElement",
	"HTMLMapElement",
	"HTMLMarqueeElement",
	"HTMLMediaElement",
	"HTMLMeterElement",
	"HTMLModElement",
	"HTMLOptGroupElement",
	"HTMLOptionElement",
	"HTMLOutputElement",
	"HTMLPictureElement",
	"HTMLProgressElement",
	"HTMLQuoteElement",
	"HTMLScriptElement",
	"HTMLSelectElement",
	"HTMLSlotElement",
	"HTMLSourceElement",
	"HTMLSpanElement",
	"HTMLTableCaptionElement",
	"HTMLTableCellElement",
	"HTMLTableColElement",
	"HTMLTableElement",
	"HTMLTimeElement",
	"HTMLTableRowElement",
	"HTMLTableSectionElement",
	"HTMLTemplateElement",
	"HTMLTextAreaElement",
	"HTMLUnknownElement",
	"HTMLFrameElement",
	"HTMLFrameSetElement",
	"HTMLIFrameElement",
	"HTMLEmbedElement",
	"HTMLObjectElement",
	"HTMLParamElement",
	"HTMLVideoElement",
	"HTMLAudioElement",
	"HTMLTrackElement",
	"HTMLFormControlsCollection",
	"SVGElement",
	"SVGGraphicsElement",
	"SVGSVGElement",
	"SVGTitleElement",
	"SVGAnimatedString",
	"SVGNumber",
	"SVGStringList",
	"Event",
	"CloseEvent",
	"CustomEvent",
	"MessageEvent",
	"ErrorEvent",
	"HashChangeEvent",
	"PopStateEvent",
	"StorageEvent",
	"ProgressEvent",
	"PageTransitionEvent",
	"SubmitEvent",
	"UIEvent",
	"FocusEvent",
	"InputEvent",
	"MouseEvent",
	"KeyboardEvent",
	"TouchEvent",
	"CompositionEvent",
	"WheelEvent",
	"BarProp",
	"External",
	"Location",
	"History",
	"Screen",
	"Crypto",
	"Performance",
	"Navigator",
	"PluginArray",
	"MimeTypeArray",
	"Plugin",
	"MimeType",
	"FileReader",
	"Blob",
	"File",
	"FileList",
	"ValidityState",
	"DOMParser",
	"XMLSerializer",
	"FormData",
	"XMLHttpRequestEventTarget",
	"XMLHttpRequestUpload",
	"XMLHttpRequest",
	"WebSocket",
	"NodeFilter",
	"NodeIterator",
	"TreeWalker",
	"AbstractRange",
	"Range",
	"StaticRange",
	"Selection",
	"Storage",
	"CustomElementRegistry",
	"ShadowRoot",
	"MutationObserver",
	"MutationRecord",
	"Headers",
	"AbortController",
	"AbortSignal",
	"Uint8Array",
	"Uint16Array",
	"Uint32Array",
	"Uint8ClampedArray",
	"Int8Array",
	"Int16Array",
	"Int32Array",
	"Float32Array",
	"Float64Array",
	"ArrayBuffer",
	"DOMRectReadOnly",
	"DOMRect",
	"Image",
	"Audio",
	"Option",
	"CSS"
];
const OTHER_KEYS = [
	"addEventListener",
	"alert",
	"blur",
	"cancelAnimationFrame",
	"close",
	"confirm",
	"createPopup",
	"dispatchEvent",
	"document",
	"focus",
	"frames",
	"getComputedStyle",
	"history",
	"innerHeight",
	"innerWidth",
	"length",
	"location",
	"matchMedia",
	"moveBy",
	"moveTo",
	"name",
	"navigator",
	"open",
	"outerHeight",
	"outerWidth",
	"pageXOffset",
	"pageYOffset",
	"parent",
	"postMessage",
	"print",
	"prompt",
	"removeEventListener",
	"requestAnimationFrame",
	"resizeBy",
	"resizeTo",
	"screen",
	"screenLeft",
	"screenTop",
	"screenX",
	"screenY",
	"scroll",
	"scrollBy",
	"scrollLeft",
	"scrollTo",
	"scrollTop",
	"scrollX",
	"scrollY",
	"self",
	"stop",
	"top",
	"Window",
	"window"
];
const KEYS = LIVING_KEYS.concat(OTHER_KEYS);

const skipKeys = [
	"window",
	"self",
	"top",
	"parent"
];
function getWindowKeys(global, win, additionalKeys = []) {
	const keysArray = [...additionalKeys, ...KEYS];
	const keys = new Set(keysArray.concat(Object.getOwnPropertyNames(win)).filter((k) => {
		if (skipKeys.includes(k)) return false;
		if (k in global) return keysArray.includes(k);
		return true;
	}));
	return keys;
}
function isClassLikeName(name) {
	return name[0] === name[0].toUpperCase();
}
function populateGlobal(global, win, options = {}) {
	const { bindFunctions = false } = options;
	const keys = getWindowKeys(global, win, options.additionalKeys);
	const originals = /* @__PURE__ */ new Map();
	const overrideObject = /* @__PURE__ */ new Map();
	for (const key of keys) {
		const boundFunction = bindFunctions && typeof win[key] === "function" && !isClassLikeName(key) && win[key].bind(win);
		if (KEYS.includes(key) && key in global) originals.set(key, global[key]);
		Object.defineProperty(global, key, {
			get() {
				if (overrideObject.has(key)) return overrideObject.get(key);
				if (boundFunction) return boundFunction;
				return win[key];
			},
			set(v) {
				overrideObject.set(key, v);
			},
			configurable: true
		});
	}
	global.window = global;
	global.self = global;
	global.top = global;
	global.parent = global;
	if (global.global) global.global = global;
	// rewrite defaultView to reference the same global context
	if (global.document && global.document.defaultView) Object.defineProperty(global.document, "defaultView", {
		get: () => global,
		enumerable: true,
		configurable: true
	});
	skipKeys.forEach((k) => keys.add(k));
	return {
		keys,
		skipKeys,
		originals
	};
}

var edge = {
	name: "edge-runtime",
	transformMode: "ssr",
	async setupVM() {
		const { EdgeVM } = await import('@edge-runtime/vm');
		const vm = new EdgeVM({ extend: (context) => {
			context.global = context;
			context.Buffer = Buffer;
			return context;
		} });
		return {
			getVmContext() {
				return vm.context;
			},
			teardown() {
				// nothing to teardown
			}
		};
	},
	async setup(global) {
		const { EdgeVM } = await import('@edge-runtime/vm');
		const vm = new EdgeVM({ extend: (context) => {
			context.global = context;
			context.Buffer = Buffer;
			KEYS.forEach((key) => {
				if (key in global) context[key] = global[key];
			});
			return context;
		} });
		const { keys, originals } = populateGlobal(global, vm.context, { bindFunctions: true });
		return { teardown(global) {
			keys.forEach((key) => delete global[key]);
			originals.forEach((v, k) => global[k] = v);
		} };
	}
};

async function teardownWindow(win) {
	if (win.close && win.happyDOM.abort) {
		await win.happyDOM.abort();
		win.close();
	} else win.happyDOM.cancelAsync();
}
var happy = {
	name: "happy-dom",
	transformMode: "web",
	async setupVM({ happyDOM = {} }) {
		const { Window } = await import('happy-dom');
		let win = new Window({
			...happyDOM,
			console: console && globalThis.console ? globalThis.console : void 0,
			url: happyDOM.url || "http://localhost:3000",
			settings: {
				...happyDOM.settings,
				disableErrorCapturing: true
			}
		});
		// TODO: browser doesn't expose Buffer, but a lot of dependencies use it
		win.Buffer = Buffer;
		// inject structuredClone if it exists
		if (typeof structuredClone !== "undefined" && !win.structuredClone) win.structuredClone = structuredClone;
		return {
			getVmContext() {
				return win;
			},
			async teardown() {
				await teardownWindow(win);
				win = void 0;
			}
		};
	},
	async setup(global, { happyDOM = {} }) {
		// happy-dom v3 introduced a breaking change to Window, but
		// provides GlobalWindow as a way to use previous behaviour
		const { Window, GlobalWindow } = await import('happy-dom');
		const win = new (GlobalWindow || Window)({
			...happyDOM,
			console: console && global.console ? global.console : void 0,
			url: happyDOM.url || "http://localhost:3000",
			settings: {
				...happyDOM.settings,
				disableErrorCapturing: true
			}
		});
		const { keys, originals } = populateGlobal(global, win, {
			bindFunctions: true,
			additionalKeys: [
				"Request",
				"Response",
				"MessagePort",
				"fetch"
			]
		});
		return { async teardown(global) {
			await teardownWindow(win);
			keys.forEach((key) => delete global[key]);
			originals.forEach((v, k) => global[k] = v);
		} };
	}
};

function catchWindowErrors(window) {
	let userErrorListenerCount = 0;
	function throwUnhandlerError(e) {
		if (userErrorListenerCount === 0 && e.error != null) process.emit("uncaughtException", e.error);
	}
	const addEventListener = window.addEventListener.bind(window);
	const removeEventListener = window.removeEventListener.bind(window);
	window.addEventListener("error", throwUnhandlerError);
	window.addEventListener = function(...args) {
		if (args[0] === "error") userErrorListenerCount++;
		return addEventListener.apply(this, args);
	};
	window.removeEventListener = function(...args) {
		if (args[0] === "error" && userErrorListenerCount) userErrorListenerCount--;
		return removeEventListener.apply(this, args);
	};
	return function clearErrorHandlers() {
		window.removeEventListener("error", throwUnhandlerError);
	};
}
var jsdom = {
	name: "jsdom",
	transformMode: "web",
	async setupVM({ jsdom = {} }) {
		const { CookieJar, JSDOM, ResourceLoader, VirtualConsole } = await import('jsdom');
		const { html = "<!DOCTYPE html>", userAgent, url = "http://localhost:3000", contentType = "text/html", pretendToBeVisual = true, includeNodeLocations = false, runScripts = "dangerously", resources, console = false, cookieJar = false,...restOptions } = jsdom;
		let dom = new JSDOM(html, {
			pretendToBeVisual,
			resources: resources ?? (userAgent ? new ResourceLoader({ userAgent }) : void 0),
			runScripts,
			url,
			virtualConsole: console && globalThis.console ? new VirtualConsole().sendTo(globalThis.console) : void 0,
			cookieJar: cookieJar ? new CookieJar() : void 0,
			includeNodeLocations,
			contentType,
			userAgent,
			...restOptions
		});
		const clearWindowErrors = catchWindowErrors(dom.window);
		// TODO: browser doesn't expose Buffer, but a lot of dependencies use it
		dom.window.Buffer = Buffer;
		dom.window.jsdom = dom;
		// inject web globals if they missing in JSDOM but otherwise available in Nodejs
		// https://nodejs.org/dist/latest/docs/api/globals.html
		const globalNames = [
			"structuredClone",
			"fetch",
			"Request",
			"Response",
			"BroadcastChannel",
			"MessageChannel",
			"MessagePort",
			"TextEncoder",
			"TextDecoder"
		];
		for (const name of globalNames) {
			const value = globalThis[name];
			if (typeof value !== "undefined" && typeof dom.window[name] === "undefined") dom.window[name] = value;
		}
		return {
			getVmContext() {
				return dom.getInternalVMContext();
			},
			teardown() {
				clearWindowErrors();
				dom.window.close();
				dom = void 0;
			}
		};
	},
	async setup(global, { jsdom = {} }) {
		const { CookieJar, JSDOM, ResourceLoader, VirtualConsole } = await import('jsdom');
		const { html = "<!DOCTYPE html>", userAgent, url = "http://localhost:3000", contentType = "text/html", pretendToBeVisual = true, includeNodeLocations = false, runScripts = "dangerously", resources, console = false, cookieJar = false,...restOptions } = jsdom;
		const dom = new JSDOM(html, {
			pretendToBeVisual,
			resources: resources ?? (userAgent ? new ResourceLoader({ userAgent }) : void 0),
			runScripts,
			url,
			virtualConsole: console && global.console ? new VirtualConsole().sendTo(global.console) : void 0,
			cookieJar: cookieJar ? new CookieJar() : void 0,
			includeNodeLocations,
			contentType,
			userAgent,
			...restOptions
		});
		const { keys, originals } = populateGlobal(global, dom.window, { bindFunctions: true });
		const clearWindowErrors = catchWindowErrors(global);
		global.jsdom = dom;
		return { teardown(global) {
			clearWindowErrors();
			dom.window.close();
			delete global.jsdom;
			keys.forEach((key) => delete global[key]);
			originals.forEach((v, k) => global[k] = v);
		} };
	}
};

// some globals we do not want, either because deprecated or we set it ourselves
const denyList = new Set([
	"GLOBAL",
	"root",
	"global",
	"Buffer",
	"ArrayBuffer",
	"Uint8Array"
]);
const nodeGlobals = new Map(Object.getOwnPropertyNames(globalThis).filter((global) => !denyList.has(global)).map((nodeGlobalsKey) => {
	const descriptor = Object.getOwnPropertyDescriptor(globalThis, nodeGlobalsKey);
	if (!descriptor) throw new Error(`No property descriptor for ${nodeGlobalsKey}, this is a bug in Vitest.`);
	return [nodeGlobalsKey, descriptor];
}));
var node = {
	name: "node",
	transformMode: "ssr",
	async setupVM() {
		const vm = await import('node:vm');
		let context = vm.createContext();
		let global = vm.runInContext("this", context);
		const contextGlobals = new Set(Object.getOwnPropertyNames(global));
		for (const [nodeGlobalsKey, descriptor] of nodeGlobals) if (!contextGlobals.has(nodeGlobalsKey)) if (descriptor.configurable) Object.defineProperty(global, nodeGlobalsKey, {
			configurable: true,
			enumerable: descriptor.enumerable,
			get() {
				// @ts-expect-error: no index signature
				const val = globalThis[nodeGlobalsKey];
				// override lazy getter
				Object.defineProperty(global, nodeGlobalsKey, {
					configurable: true,
					enumerable: descriptor.enumerable,
					value: val,
					writable: descriptor.writable === true || nodeGlobalsKey === "performance"
				});
				return val;
			},
			set(val) {
				// override lazy getter
				Object.defineProperty(global, nodeGlobalsKey, {
					configurable: true,
					enumerable: descriptor.enumerable,
					value: val,
					writable: true
				});
			}
		});
		else if ("value" in descriptor) Object.defineProperty(global, nodeGlobalsKey, {
			configurable: false,
			enumerable: descriptor.enumerable,
			value: descriptor.value,
			writable: descriptor.writable
		});
		else Object.defineProperty(global, nodeGlobalsKey, {
			configurable: false,
			enumerable: descriptor.enumerable,
			get: descriptor.get,
			set: descriptor.set
		});
		global.global = global;
		global.Buffer = Buffer;
		global.ArrayBuffer = ArrayBuffer;
		// TextEncoder (global or via 'util') references a Uint8Array constructor
		// different than the global one used by users in tests. This makes sure the
		// same constructor is referenced by both.
		global.Uint8Array = Uint8Array;
		return {
			getVmContext() {
				return context;
			},
			teardown() {
				context = void 0;
				global = void 0;
			}
		};
	},
	async setup(global) {
		global.console.Console = Console;
		return { teardown(global) {
			delete global.console.Console;
		} };
	}
};

const environments = {
	node,
	jsdom,
	"happy-dom": happy,
	"edge-runtime": edge
};

export { environments as e, populateGlobal as p };
