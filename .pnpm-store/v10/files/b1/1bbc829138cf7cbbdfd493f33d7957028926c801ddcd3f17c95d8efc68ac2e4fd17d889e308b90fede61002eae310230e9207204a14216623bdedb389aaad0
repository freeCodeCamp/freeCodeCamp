"use strict";
const vm = require("vm");
const webIDLConversions = require("webidl-conversions");
const { CSSStyleDeclaration } = require("cssstyle");
const whatwgURL = require("whatwg-url");
const notImplemented = require("./not-implemented");
const { installInterfaces } = require("../living/interfaces");
const { define, mixin } = require("../utils");
const Element = require("../living/generated/Element");
const EventTarget = require("../living/generated/EventTarget");
const EventHandlerNonNull = require("../living/generated/EventHandlerNonNull");
const IDLFunction = require("../living/generated/Function");
const OnBeforeUnloadEventHandlerNonNull = require("../living/generated/OnBeforeUnloadEventHandlerNonNull");
const OnErrorEventHandlerNonNull = require("../living/generated/OnErrorEventHandlerNonNull");
const { fireAPageTransitionEvent } = require("../living/helpers/page-transition-event");
const namedPropertiesWindow = require("../living/named-properties-window");
const DOMException = require("../living/generated/DOMException");
const idlUtils = require("../living/generated/utils");
const WebSocketImpl = require("../living/websockets/WebSocket-impl").implementation;
const BarProp = require("../living/generated/BarProp");
const documents = require("../living/documents.js");
const External = require("../living/generated/External");
const Navigator = require("../living/generated/Navigator");
const Performance = require("../living/generated/Performance");
const Screen = require("../living/generated/Screen");
const Crypto = require("../living/generated/Crypto");
const Storage = require("../living/generated/Storage");
const Selection = require("../living/generated/Selection");
const reportException = require("../living/helpers/runtime-script-errors");
const { getCurrentEventHandlerValue } = require("../living/helpers/create-event-accessor.js");
const { fireAnEvent } = require("../living/helpers/events");
const SessionHistory = require("../living/window/SessionHistory");
const { getDeclarationForElement, getResolvedValue, propertiesWithResolvedValueImplemented,
  SHADOW_DOM_PSEUDO_REGEXP } = require("../living/helpers/style-rules.js");
const CustomElementRegistry = require("../living/generated/CustomElementRegistry");
const MessageEvent = require("../living/generated/MessageEvent");
const jsGlobals = require("./js-globals.json");

const GlobalEventHandlersImpl = require("../living/nodes/GlobalEventHandlers-impl").implementation;
const WindowEventHandlersImpl = require("../living/nodes/WindowEventHandlers-impl").implementation;

const events = new Set([
  // GlobalEventHandlers
  "abort", "autocomplete",
  "autocompleteerror", "blur",
  "cancel", "canplay", "canplaythrough",
  "change", "click",
  "close", "contextmenu",
  "cuechange", "dblclick",
  "drag", "dragend",
  "dragenter",
  "dragleave", "dragover",
  "dragstart", "drop",
  "durationchange", "emptied",
  "ended", "focus",
  "input", "invalid",
  "keydown", "keypress",
  "keyup", "load", "loadeddata",
  "loadedmetadata", "loadstart",
  "mousedown", "mouseenter",
  "mouseleave", "mousemove",
  "mouseout", "mouseover",
  "mouseup", "wheel",
  "pause", "play",
  "playing", "progress",
  "ratechange", "reset",
  "resize", "scroll",
  "securitypolicyviolation",
  "seeked", "seeking",
  "select", "sort", "stalled",
  "submit", "suspend",
  "timeupdate", "toggle",
  "volumechange", "waiting",

  // WindowEventHandlers
  "afterprint",
  "beforeprint",
  "hashchange",
  "languagechange",
  "message",
  "messageerror",
  "offline",
  "online",
  "pagehide",
  "pageshow",
  "popstate",
  "rejectionhandled",
  "storage",
  "unhandledrejection",
  "unload"

  // "error" and "beforeunload" are added separately
]);

const jsGlobalEntriesToInstall = Object.entries(jsGlobals).filter(([name]) => name in global);

exports.createWindow = options => {
  const makeVMContext = options.runScripts === "outside-only" || options.runScripts === "dangerously";

  // Bootstrap with an empty object from the Node.js realm. We'll muck with its prototype chain shortly.
  const window = {};

  // Make window into a global object: either via vm, or just aliasing the Node.js globals.
  // Also set _globalObject and _globalProxy.
  //
  // TODO: don't expose _globalObject and _globalProxy as public properties. While you're there, audit usage sites to
  // see how necessary they really are.
  if (makeVMContext) {
    vm.createContext(window);

    window._globalObject = window;
    window._globalProxy = vm.runInContext("this", window);

    // Without this, these globals will only appear to scripts running inside the context using vm.runScript; they will
    // not appear to scripts running from the outside, including to JSDOM implementation code.
    for (const [globalName, globalPropDesc] of jsGlobalEntriesToInstall) {
      const propDesc = { ...globalPropDesc, value: vm.runInContext(globalName, window) };
      Object.defineProperty(window, globalName, propDesc);
    }
  } else {
    window._globalObject = window._globalProxy = window;

    // Without contextifying the window, none of the globals will exist. So, let's at least alias them from the Node.js
    // context. See https://github.com/jsdom/jsdom/issues/2727 for more background and discussion.
    for (const [globalName, globalPropDesc] of jsGlobalEntriesToInstall) {
      const propDesc = { ...globalPropDesc, value: global[globalName] };
      Object.defineProperty(window, globalName, propDesc);
    }
  }

  // Create instances of all the web platform interfaces and install them on the window.
  installInterfaces(window, ["Window"]);

  // Now we have an EventTarget contructor so we can work on the prototype chain.

  // eslint-disable-next-line func-name-matching, func-style
  const WindowConstructor = function Window() {
    throw new TypeError("Illegal constructor");
  };
  Object.setPrototypeOf(WindowConstructor, window.EventTarget);

  Object.defineProperty(window, "Window", {
    configurable: true,
    writable: true,
    value: WindowConstructor
  });

  // TODO: do an actual WindowProperties object. See https://github.com/jsdom/jsdom/pull/3765 for an attempt.
  const windowPropertiesObject = Object.create(window.EventTarget.prototype);
  Object.defineProperties(windowPropertiesObject, {
    [Symbol.toStringTag]: {
      value: "WindowProperties",
      configurable: true
    }
  });
  namedPropertiesWindow.initializeWindow(window, window._globalProxy);

  const windowPrototype = Object.create(windowPropertiesObject);
  Object.defineProperties(windowPrototype, {
    constructor: {
      value: WindowConstructor,
      writable: true,
      configurable: true
    },
    [Symbol.toStringTag]: {
      value: "Window",
      configurable: true
    }
  });

  WindowConstructor.prototype = windowPrototype;
  Object.setPrototypeOf(window, windowPrototype);
  if (makeVMContext) {
    Object.setPrototypeOf(window._globalProxy, windowPrototype);
    Object.setPrototypeOf(window.EventTarget.prototype, window.Object.prototype);
  }

  // Now that the prototype chain is fully set up, call the superclass setup.
  EventTarget.setup(window, window);

  installEventHandlers(window);

  installOwnProperties(window, options);

  // Not sure why this is necessary... TODO figure it out.
  Object.defineProperty(idlUtils.implForWrapper(window), idlUtils.wrapperSymbol, { get: () => window._globalProxy });

  // Fire or prepare to fire load and pageshow events.
  process.nextTick(() => {
    if (!window.document) {
      return; // window might've been closed already
    }

    if (window.document.readyState === "complete") {
      fireAnEvent("load", window, undefined, {}, true);
    } else {
      window.document.addEventListener("load", () => {
        fireAnEvent("load", window, undefined, {}, true);
        if (!window._document) {
          return; // window might've been closed already
        }

        const documentImpl = idlUtils.implForWrapper(window._document);
        if (!documentImpl._pageShowingFlag) {
          documentImpl._pageShowingFlag = true;
          fireAPageTransitionEvent("pageshow", window, false);
        }
      });
    }
  });

  return window;
};

function installEventHandlers(window) {
  mixin(window, WindowEventHandlersImpl.prototype);
  mixin(window, GlobalEventHandlersImpl.prototype);
  window._initGlobalEvents();

  Object.defineProperty(window, "onbeforeunload", {
    configurable: true,
    enumerable: true,
    get() {
      return idlUtils.tryWrapperForImpl(getCurrentEventHandlerValue(window, "beforeunload"));
    },
    set(V) {
      if (!idlUtils.isObject(V)) {
        V = null;
      } else {
        V = OnBeforeUnloadEventHandlerNonNull.convert(window, V, {
          context: "Failed to set the 'onbeforeunload' property on 'Window': The provided value"
        });
      }
      window._setEventHandlerFor("beforeunload", V);
    }
  });

  Object.defineProperty(window, "onerror", {
    configurable: true,
    enumerable: true,
    get() {
      return idlUtils.tryWrapperForImpl(getCurrentEventHandlerValue(window, "error"));
    },
    set(V) {
      if (!idlUtils.isObject(V)) {
        V = null;
      } else {
        V = OnErrorEventHandlerNonNull.convert(window, V, {
          context: "Failed to set the 'onerror' property on 'Window': The provided value"
        });
      }
      window._setEventHandlerFor("error", V);
    }
  });

  for (const event of events) {
    Object.defineProperty(window, `on${event}`, {
      configurable: true,
      enumerable: true,
      get() {
        return idlUtils.tryWrapperForImpl(getCurrentEventHandlerValue(window, event));
      },
      set(V) {
        if (!idlUtils.isObject(V)) {
          V = null;
        } else {
          V = EventHandlerNonNull.convert(window, V, {
            context: `Failed to set the 'on${event}' property on 'Window': The provided value`
          });
        }
        window._setEventHandlerFor(event, V);
      }
    });
  }
}

function installOwnProperties(window, options) {
  const windowInitialized = performance.now();

  // ### PRIVATE DATA PROPERTIES

  window._resourceLoader = options.resourceLoader;

  // List options explicitly to be clear which are passed through
  window._document = documents.createWrapper(window, {
    parsingMode: options.parsingMode,
    contentType: options.contentType,
    encoding: options.encoding,
    cookieJar: options.cookieJar,
    url: options.url,
    lastModified: options.lastModified,
    referrer: options.referrer,
    parseOptions: options.parseOptions,
    defaultView: window._globalProxy,
    global: window,
    parentOrigin: options.parentOrigin
  }, { alwaysUseDocumentClass: true });

  const documentOrigin = idlUtils.implForWrapper(window._document)._origin;
  window._origin = documentOrigin;

  // https://html.spec.whatwg.org/#session-history
  window._sessionHistory = new SessionHistory({
    document: idlUtils.implForWrapper(window._document),
    url: idlUtils.implForWrapper(window._document)._URL,
    stateObject: null
  }, window);

  window._virtualConsole = options.virtualConsole;

  window._runScripts = options.runScripts;

  // Set up the window as if it's a top level window.
  // If it's not, then references will be corrected by frame/iframe code.
  window._parent = window._top = window._globalProxy;
  window._frameElement = null;

  // This implements window.frames.length, since window.frames returns a
  // self reference to the window object.  This value is incremented in the
  // HTMLFrameElement implementation.
  window._length = 0;

  // https://dom.spec.whatwg.org/#window-current-event
  window._currentEvent = undefined;

  window._pretendToBeVisual = options.pretendToBeVisual;
  window._storageQuota = options.storageQuota;

  // Some properties (such as localStorage and sessionStorage) share data
  // between windows in the same origin. This object is intended
  // to contain such data.
  if (options.commonForOrigin && options.commonForOrigin[documentOrigin]) {
    window._commonForOrigin = options.commonForOrigin;
  } else {
    window._commonForOrigin = {
      [documentOrigin]: {
        localStorageArea: new Map(),
        sessionStorageArea: new Map(),
        windowsInSameOrigin: [window]
      }
    };
  }

  window._currentOriginData = window._commonForOrigin[documentOrigin];

  // ### WEB STORAGE

  window._localStorage = Storage.create(window, [], {
    associatedWindow: window,
    storageArea: window._currentOriginData.localStorageArea,
    type: "localStorage",
    url: window._document.documentURI,
    storageQuota: window._storageQuota
  });
  window._sessionStorage = Storage.create(window, [], {
    associatedWindow: window,
    storageArea: window._currentOriginData.sessionStorageArea,
    type: "sessionStorage",
    url: window._document.documentURI,
    storageQuota: window._storageQuota
  });

  // ### SELECTION

  // https://w3c.github.io/selection-api/#dfn-selection
  window._selection = Selection.createImpl(window);

  // https://w3c.github.io/selection-api/#dom-window
  window.getSelection = function () {
    return window._selection;
  };

  // ### GETTERS

  const locationbar = BarProp.create(window);
  const menubar = BarProp.create(window);
  const personalbar = BarProp.create(window);
  const scrollbars = BarProp.create(window);
  const statusbar = BarProp.create(window);
  const toolbar = BarProp.create(window);
  const external = External.create(window);
  const navigator = Navigator.create(window, [], { userAgent: window._resourceLoader._userAgent });
  const performanceImpl = Performance.create(window, [], {
    timeOrigin: performance.timeOrigin + windowInitialized,
    nowAtTimeOrigin: windowInitialized
  });
  const screen = Screen.create(window);
  const crypto = Crypto.create(window);
  window._customElementRegistry = CustomElementRegistry.create(window);

  define(window, {
    get length() {
      return window._length;
    },
    get window() {
      return window._globalProxy;
    },
    get frameElement() {
      return idlUtils.wrapperForImpl(window._frameElement);
    },
    get frames() {
      return window._globalProxy;
    },
    get self() {
      return window._globalProxy;
    },
    get parent() {
      return window._parent;
    },
    get top() {
      return window._top;
    },
    get document() {
      return window._document;
    },
    get external() {
      return external;
    },
    get location() {
      return idlUtils.wrapperForImpl(idlUtils.implForWrapper(window._document)._location);
    },
    // [PutForwards=href]:
    set location(value) {
      Reflect.set(window.location, "href", value);
    },
    get history() {
      return idlUtils.wrapperForImpl(idlUtils.implForWrapper(window._document)._history);
    },
    get navigator() {
      return navigator;
    },
    get locationbar() {
      return locationbar;
    },
    get menubar() {
      return menubar;
    },
    get personalbar() {
      return personalbar;
    },
    get scrollbars() {
      return scrollbars;
    },
    get statusbar() {
      return statusbar;
    },
    get toolbar() {
      return toolbar;
    },
    get performance() {
      return performanceImpl;
    },
    get screen() {
      return screen;
    },
    get crypto() {
      return crypto;
    },
    get origin() {
      return window._origin;
    },
    get localStorage() {
      if (idlUtils.implForWrapper(window._document)._origin === "null") {
        throw DOMException.create(window, [
          "localStorage is not available for opaque origins",
          "SecurityError"
        ]);
      }

      return window._localStorage;
    },
    get sessionStorage() {
      if (idlUtils.implForWrapper(window._document)._origin === "null") {
        throw DOMException.create(window, [
          "sessionStorage is not available for opaque origins",
          "SecurityError"
        ]);
      }

      return window._sessionStorage;
    },
    get customElements() {
      return window._customElementRegistry;
    },
    get event() {
      return window._currentEvent ? idlUtils.wrapperForImpl(window._currentEvent) : undefined;
    }
  });

  Object.defineProperties(window, {
    // [Replaceable]:
    self: makeReplaceablePropertyDescriptor("self", window),
    locationbar: makeReplaceablePropertyDescriptor("locationbar", window),
    menubar: makeReplaceablePropertyDescriptor("menubar", window),
    personalbar: makeReplaceablePropertyDescriptor("personalbar", window),
    scrollbars: makeReplaceablePropertyDescriptor("scrollbars", window),
    statusbar: makeReplaceablePropertyDescriptor("statusbar", window),
    toolbar: makeReplaceablePropertyDescriptor("toolbar", window),
    frames: makeReplaceablePropertyDescriptor("frames", window),
    parent: makeReplaceablePropertyDescriptor("parent", window),
    external: makeReplaceablePropertyDescriptor("external", window),
    length: makeReplaceablePropertyDescriptor("length", window),
    screen: makeReplaceablePropertyDescriptor("screen", window),
    origin: makeReplaceablePropertyDescriptor("origin", window),
    event: makeReplaceablePropertyDescriptor("event", window),

    // [LegacyUnforgeable]:
    window: { configurable: false },
    document: { configurable: false },
    location: { configurable: false },
    top: { configurable: false }
  });


  // ### METHODS

  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers

  // In the spec the list of active timers is a set of IDs. We make it a map of IDs to Node.js timer objects, so that
  // we can call Node.js-side clearTimeout() when clearing, and thus allow process shutdown faster.
  const listOfActiveTimers = new Map();
  let latestTimerId = 0;

  window.setTimeout = function (handler, timeout = 0, ...args) {
    if (typeof handler !== "function") {
      handler = webIDLConversions.DOMString(handler);
    }
    timeout = webIDLConversions.long(timeout);

    return timerInitializationSteps(handler, timeout, args, { methodContext: window, repeat: false });
  };
  window.setInterval = function (handler, timeout = 0, ...args) {
    if (typeof handler !== "function") {
      handler = webIDLConversions.DOMString(handler);
    }
    timeout = webIDLConversions.long(timeout);

    return timerInitializationSteps(handler, timeout, args, { methodContext: window, repeat: true });
  };

  window.clearTimeout = function (handle = 0) {
    handle = webIDLConversions.long(handle);

    const nodejsTimer = listOfActiveTimers.get(handle);
    if (nodejsTimer) {
      clearTimeout(nodejsTimer);
      listOfActiveTimers.delete(handle);
    }
  };
  window.clearInterval = function (handle = 0) {
    handle = webIDLConversions.long(handle);

    const nodejsTimer = listOfActiveTimers.get(handle);
    if (nodejsTimer) {
      // We use setTimeout() in timerInitializationSteps even for window.setInterval().
      clearTimeout(nodejsTimer);
      listOfActiveTimers.delete(handle);
    }
  };

  function timerInitializationSteps(handler, timeout, args, { methodContext, repeat, previousHandle }) {
    // This appears to be unspecced, but matches browser behavior for close()ed windows.
    if (!methodContext._document) {
      return 0;
    }

    // TODO: implement timer nesting level behavior.

    const methodContextProxy = methodContext._globalProxy;
    const handle = previousHandle !== undefined ? previousHandle : ++latestTimerId;

    function task() {
      if (!listOfActiveTimers.has(handle)) {
        return;
      }

      try {
        if (typeof handler === "function") {
          handler.apply(methodContextProxy, args);
        } else if (window._runScripts === "dangerously") {
          vm.runInContext(handler, window, { filename: window.location.href, displayErrors: false });
        }
      } catch (e) {
        reportException(window, e, window.location.href);
      }

      if (listOfActiveTimers.has(handle)) {
        if (repeat) {
          timerInitializationSteps(handler, timeout, args, { methodContext, repeat: true, previousHandle: handle });
        } else {
          listOfActiveTimers.delete(handle);
        }
      }
    }

    if (timeout < 0) {
      timeout = 0;
    }

    const nodejsTimer = setTimeout(task, timeout);
    listOfActiveTimers.set(handle, nodejsTimer);

    return handle;
  }

  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing

  window.queueMicrotask = function (callback) {
    callback = IDLFunction.convert(window, callback);

    queueMicrotask(() => {
      try {
        callback();
      } catch (e) {
        reportException(window, e, window.location.href);
      }
    });
  };

  // https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames

  let animationFrameCallbackId = 0;
  const mapOfAnimationFrameCallbacks = new Map();
  let animationFrameNodejsInterval = null;

  // Unlike the spec, where an animation frame happens every 60 Hz regardless, we optimize so that if there are no
  // requestAnimationFrame() calls outstanding, we don't fire the timer. This helps us track that.
  let numberOfOngoingAnimationFrameCallbacks = 0;

  if (window._pretendToBeVisual) {
    window.requestAnimationFrame = function (callback) {
      callback = IDLFunction.convert(window, callback);

      const handle = ++animationFrameCallbackId;
      mapOfAnimationFrameCallbacks.set(handle, callback);

      ++numberOfOngoingAnimationFrameCallbacks;
      if (numberOfOngoingAnimationFrameCallbacks === 1) {
        animationFrameNodejsInterval = setInterval(() => {
          runAnimationFrameCallbacks(performance.now() - windowInitialized);
        }, 1000 / 60);
      }

      return handle;
    };

    window.cancelAnimationFrame = function (handle) {
      handle = webIDLConversions["unsigned long"](handle);

      removeAnimationFrameCallback(handle);
    };

    function runAnimationFrameCallbacks(now) {
      // Converting to an array is important to get a sync snapshot and thus match spec semantics.
      const callbackHandles = [...mapOfAnimationFrameCallbacks.keys()];
      for (const handle of callbackHandles) {
        // This has() can be false if a callback calls cancelAnimationFrame().
        if (mapOfAnimationFrameCallbacks.has(handle)) {
          const callback = mapOfAnimationFrameCallbacks.get(handle);
          removeAnimationFrameCallback(handle);
          try {
            callback(now);
          } catch (e) {
            reportException(window, e, window.location.href);
          }
        }
      }
    }

    function removeAnimationFrameCallback(handle) {
      if (mapOfAnimationFrameCallbacks.has(handle)) {
        --numberOfOngoingAnimationFrameCallbacks;
        if (numberOfOngoingAnimationFrameCallbacks === 0) {
          clearInterval(animationFrameNodejsInterval);
        }
      }

      mapOfAnimationFrameCallbacks.delete(handle);
    }
  }

  function stopAllTimers() {
    for (const nodejsTimer of listOfActiveTimers.values()) {
      clearTimeout(nodejsTimer);
    }
    listOfActiveTimers.clear();

    clearInterval(animationFrameNodejsInterval);
  }

  function Option(text, value, defaultSelected, selected) {
    if (text === undefined) {
      text = "";
    }
    text = webIDLConversions.DOMString(text);

    if (value !== undefined) {
      value = webIDLConversions.DOMString(value);
    }

    defaultSelected = webIDLConversions.boolean(defaultSelected);
    selected = webIDLConversions.boolean(selected);

    const option = window._document.createElement("option");
    const impl = idlUtils.implForWrapper(option);

    if (text !== "") {
      impl.text = text;
    }
    if (value !== undefined) {
      impl.setAttributeNS(null, "value", value);
    }
    if (defaultSelected) {
      impl.setAttributeNS(null, "selected", "");
    }
    impl._selectedness = selected;

    return option;
  }
  Object.defineProperty(Option, "prototype", {
    value: window.HTMLOptionElement.prototype,
    configurable: false,
    enumerable: false,
    writable: false
  });
  Object.defineProperty(window, "Option", {
    value: Option,
    configurable: true,
    enumerable: false,
    writable: true
  });

  function Image(...args) {
    const img = window._document.createElement("img");
    const impl = idlUtils.implForWrapper(img);

    if (args.length > 0) {
      impl.setAttributeNS(null, "width", String(args[0]));
    }
    if (args.length > 1) {
      impl.setAttributeNS(null, "height", String(args[1]));
    }

    return img;
  }
  Object.defineProperty(Image, "prototype", {
    value: window.HTMLImageElement.prototype,
    configurable: false,
    enumerable: false,
    writable: false
  });
  Object.defineProperty(window, "Image", {
    value: Image,
    configurable: true,
    enumerable: false,
    writable: true
  });

  function Audio(src) {
    const audio = window._document.createElement("audio");
    const impl = idlUtils.implForWrapper(audio);
    impl.setAttributeNS(null, "preload", "auto");

    if (src !== undefined) {
      impl.setAttributeNS(null, "src", String(src));
    }

    return audio;
  }
  Object.defineProperty(Audio, "prototype", {
    value: window.HTMLAudioElement.prototype,
    configurable: false,
    enumerable: false,
    writable: false
  });
  Object.defineProperty(window, "Audio", {
    value: Audio,
    configurable: true,
    enumerable: false,
    writable: true
  });

  window.postMessage = function (message, targetOrigin) {
    if (arguments.length < 2) {
      throw new TypeError("'postMessage' requires 2 arguments: 'message' and 'targetOrigin'");
    }

    targetOrigin = webIDLConversions.DOMString(targetOrigin);

    if (targetOrigin === "/") {
      // TODO: targetOrigin === "/" requires getting incumbent settings object.
      // Maybe could be done with Error stack traces??
      return;
    } else if (targetOrigin !== "*") {
      const parsedURL = whatwgURL.parseURL(targetOrigin);
      if (parsedURL === null) {
        throw DOMException.create(window, [
          "Failed to execute 'postMessage' on 'Window': " +
          "Invalid target origin '" + targetOrigin + "' in a call to 'postMessage'.",
          "SyntaxError"
        ]);
      }
      targetOrigin = whatwgURL.serializeURLOrigin(parsedURL);

      if (targetOrigin !== idlUtils.implForWrapper(window._document)._origin) {
        // Not implemented.
        return;
      }
    }

    // TODO: event.source - requires reference to incumbent window
    // TODO: event.origin - requires reference to incumbent window
    // TODO: event.ports
    // TODO: event.data - requires structured cloning
    setTimeout(() => {
      fireAnEvent("message", window, MessageEvent, { data: message });
    }, 0);
  };

  window.atob = function (str) {
    try {
      return atob(str);
    } catch {
      // Convert Node.js DOMException to one from our global.
      throw DOMException.create(window, [
        "The string to be decoded contains invalid characters.",
        "InvalidCharacterError"
      ]);
    }
  };

  window.btoa = function (str) {
    try {
      return btoa(str);
    } catch {
      // Convert Node.js DOMException to one from our global.
      throw DOMException.create(window, [
        "The string to be encoded contains invalid characters.",
        "InvalidCharacterError"
      ]);
    }
  };

  window.stop = function () {
    const manager = idlUtils.implForWrapper(window._document)._requestManager;
    if (manager) {
      manager.close();
    }
  };

  window.close = function () {
    // Recursively close child frame windows, then ourselves (depth-first).
    for (let i = 0; i < window.length; ++i) {
      window[i].close();
    }

    // Clear out all listeners. Any in-flight or upcoming events should not get delivered.
    idlUtils.implForWrapper(window)._eventListeners = Object.create(null);

    if (window._document) {
      if (window._document.body) {
        window._document.body.innerHTML = "";
      }

      if (window._document.close) {
        // It's especially important to clear out the listeners here because document.close() causes a "load" event to
        // fire.
        idlUtils.implForWrapper(window._document)._eventListeners = Object.create(null);
        window._document.close();
      }
      const doc = idlUtils.implForWrapper(window._document);
      if (doc._requestManager) {
        doc._requestManager.close();
      }
      delete window._document;
    }

    stopAllTimers();
    WebSocketImpl.cleanUpWindow(window);
  };

  window.getComputedStyle = function (elt, pseudoElt = undefined) {
    elt = Element.convert(window, elt);
    if (pseudoElt !== undefined && pseudoElt !== null) {
      pseudoElt = webIDLConversions.DOMString(pseudoElt);
    }

    if (pseudoElt !== undefined && pseudoElt !== null && pseudoElt !== "") {
      // TODO: Parse pseudoElt

      if (SHADOW_DOM_PSEUDO_REGEXP.test(pseudoElt)) {
        throw new TypeError("Tried to get the computed style of a Shadow DOM pseudo-element.");
      }

      notImplemented("window.getComputedStyle(elt, pseudoElt)", window);
    }

    const declaration = new CSSStyleDeclaration();
    const { forEach } = Array.prototype;

    const elementDeclaration = getDeclarationForElement(elt);
    forEach.call(elementDeclaration, property => {
      declaration.setProperty(
        property,
        elementDeclaration.getPropertyValue(property),
        elementDeclaration.getPropertyPriority(property)
      );
    });

    // https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle
    const declarations = Object.keys(propertiesWithResolvedValueImplemented);
    forEach.call(declarations, property => {
      declaration.setProperty(property, getResolvedValue(elt, property));
    });

    return declaration;
  };

  window.getSelection = function () {
    return window._document.getSelection();
  };

  // The captureEvents() and releaseEvents() methods must do nothing
  window.captureEvents = function () {};

  window.releaseEvents = function () {};

  // ### PUBLIC DATA PROPERTIES (TODO: should be getters)

  function wrapConsoleMethod(method) {
    return (...args) => {
      window._virtualConsole.emit(method, ...args);
    };
  }

  window.console = {
    assert: wrapConsoleMethod("assert"),
    clear: wrapConsoleMethod("clear"),
    count: wrapConsoleMethod("count"),
    countReset: wrapConsoleMethod("countReset"),
    debug: wrapConsoleMethod("debug"),
    dir: wrapConsoleMethod("dir"),
    dirxml: wrapConsoleMethod("dirxml"),
    error: wrapConsoleMethod("error"),
    group: wrapConsoleMethod("group"),
    groupCollapsed: wrapConsoleMethod("groupCollapsed"),
    groupEnd: wrapConsoleMethod("groupEnd"),
    info: wrapConsoleMethod("info"),
    log: wrapConsoleMethod("log"),
    table: wrapConsoleMethod("table"),
    time: wrapConsoleMethod("time"),
    timeLog: wrapConsoleMethod("timeLog"),
    timeEnd: wrapConsoleMethod("timeEnd"),
    trace: wrapConsoleMethod("trace"),
    warn: wrapConsoleMethod("warn")
  };

  function notImplementedMethod(name) {
    return function () {
      notImplemented(name, window);
    };
  }

  define(window, {
    name: "",
    status: "",
    devicePixelRatio: 1,
    innerWidth: 1024,
    innerHeight: 768,
    outerWidth: 1024,
    outerHeight: 768,
    pageXOffset: 0,
    pageYOffset: 0,
    screenX: 0,
    screenLeft: 0,
    screenY: 0,
    screenTop: 0,
    scrollX: 0,
    scrollY: 0,

    alert: notImplementedMethod("window.alert"),
    blur: notImplementedMethod("window.blur"),
    confirm: notImplementedMethod("window.confirm"),
    focus: notImplementedMethod("window.focus"),
    moveBy: notImplementedMethod("window.moveBy"),
    moveTo: notImplementedMethod("window.moveTo"),
    open: notImplementedMethod("window.open"),
    print: notImplementedMethod("window.print"),
    prompt: notImplementedMethod("window.prompt"),
    resizeBy: notImplementedMethod("window.resizeBy"),
    resizeTo: notImplementedMethod("window.resizeTo"),
    scroll: notImplementedMethod("window.scroll"),
    scrollBy: notImplementedMethod("window.scrollBy"),
    scrollTo: notImplementedMethod("window.scrollTo")
  });
}

function makeReplaceablePropertyDescriptor(property, window) {
  const desc = {
    set(value) {
      Object.defineProperty(window, property, {
        configurable: true,
        enumerable: true,
        writable: true,
        value
      });
    }
  };

  Object.defineProperty(desc.set, "name", { value: `set ${property}` });
  return desc;
}
