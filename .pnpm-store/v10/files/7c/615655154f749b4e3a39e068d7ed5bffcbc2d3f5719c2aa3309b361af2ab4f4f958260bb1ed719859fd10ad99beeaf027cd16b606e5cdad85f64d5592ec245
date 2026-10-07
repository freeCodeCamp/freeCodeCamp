"use strict";
const vm = require("vm");
const webIDLConversions = require("webidl-conversions");
const { CSSStyleDeclaration } = require("cssstyle");
const { Performance: RawPerformance } = require("w3c-hr-time");
const notImplemented = require("./not-implemented");
const { installInterfaces } = require("../living/interfaces");
const { define, mixin } = require("../utils");
const Element = require("../living/generated/Element");
const EventTarget = require("../living/generated/EventTarget");
const EventHandlerNonNull = require("../living/generated/EventHandlerNonNull");
const OnBeforeUnloadEventHandlerNonNull = require("../living/generated/OnBeforeUnloadEventHandlerNonNull");
const OnErrorEventHandlerNonNull = require("../living/generated/OnErrorEventHandlerNonNull");
const PageTransitionEvent = require("../living/generated/PageTransitionEvent");
const namedPropertiesWindow = require("../living/named-properties-window");
const postMessage = require("../living/post-message");
const DOMException = require("domexception/webidl2js-wrapper");
const { btoa, atob } = require("abab");
const idlUtils = require("../living/generated/utils");
const WebSocketImpl = require("../living/websockets/WebSocket-impl").implementation;
const BarProp = require("../living/generated/BarProp");
const documents = require("../living/documents.js");
const External = require("../living/generated/External");
const Navigator = require("../living/generated/Navigator");
const Performance = require("../living/generated/Performance");
const Screen = require("../living/generated/Screen");
const Storage = require("../living/generated/Storage");
const Selection = require("../living/generated/Selection");
const reportException = require("../living/helpers/runtime-script-errors");
const { getCurrentEventHandlerValue } = require("../living/helpers/create-event-accessor.js");
const { fireAnEvent } = require("../living/helpers/events");
const SessionHistory = require("../living/window/SessionHistory");
const { forEachMatchingSheetRuleOfElement, getResolvedValue, propertiesWithResolvedValueImplemented,
  SHADOW_DOM_PSEUDO_REGEXP } = require("../living/helpers/style-rules.js");
const CustomElementRegistry = require("../living/generated/CustomElementRegistry");
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

exports.createWindow = function (options) {
  return new Window(options);
};

const jsGlobalEntriesToInstall = Object.entries(jsGlobals).filter(([name]) => name in global);

// TODO remove when we drop Node v10 support.
const anyNodeVersionQueueMicrotask = typeof queueMicrotask === "function" ? queueMicrotask : process.nextTick;

// https://html.spec.whatwg.org/#the-window-object
function setupWindow(windowInstance, { runScripts }) {
  if (runScripts === "outside-only" || runScripts === "dangerously") {
    contextifyWindow(windowInstance);

    // Without this, these globals will only appear to scripts running inside the context using vm.runScript; they will
    // not appear to scripts running from the outside, including to JSDOM implementation code.
    for (const [globalName, globalPropDesc] of jsGlobalEntriesToInstall) {
      const propDesc = { ...globalPropDesc, value: vm.runInContext(globalName, windowInstance) };
      Object.defineProperty(windowInstance, globalName, propDesc);
    }
  } else {
    // Without contextifying the window, none of the globals will exist. So, let's at least alias them from the Node.js
    // context. See https://github.com/jsdom/jsdom/issues/2727 for more background and discussion.
    for (const [globalName, globalPropDesc] of jsGlobalEntriesToInstall) {
      const propDesc = { ...globalPropDesc, value: global[globalName] };
      Object.defineProperty(windowInstance, globalName, propDesc);
    }
  }

  installInterfaces(windowInstance, ["Window"]);

  const EventTargetConstructor = windowInstance.EventTarget;

  // eslint-disable-next-line func-name-matching, func-style, no-shadow
  const windowConstructor = function Window() {
    throw new TypeError("Illegal constructor");
  };
  Object.setPrototypeOf(windowConstructor, EventTargetConstructor);

  Object.defineProperty(windowInstance, "Window", {
    configurable: true,
    writable: true,
    value: windowConstructor
  });

  const windowPrototype = Object.create(EventTargetConstructor.prototype);
  Object.defineProperties(windowPrototype, {
    constructor: {
      value: windowConstructor,
      writable: true,
      configurable: true
    },
    [Symbol.toStringTag]: {
      value: "Window",
      configurable: true
    }
  });

  windowConstructor.prototype = windowPrototype;
  Object.setPrototypeOf(windowInstance, windowPrototype);

  EventTarget.setup(windowInstance, windowInstance);
  mixin(windowInstance, WindowEventHandlersImpl.prototype);
  mixin(windowInstance, GlobalEventHandlersImpl.prototype);
  windowInstance._initGlobalEvents();

  Object.defineProperty(windowInstance, "onbeforeunload", {
    configurable: true,
    enumerable: true,
    get() {
      return idlUtils.tryWrapperForImpl(getCurrentEventHandlerValue(this, "beforeunload"));
    },
    set(V) {
      if (!idlUtils.isObject(V)) {
        V = null;
      } else {
        V = OnBeforeUnloadEventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onbeforeunload' property on 'Window': The provided value"
        });
      }
      this._setEventHandlerFor("beforeunload", V);
    }
  });

  Object.defineProperty(windowInstance, "onerror", {
    configurable: true,
    enumerable: true,
    get() {
      return idlUtils.tryWrapperForImpl(getCurrentEventHandlerValue(this, "error"));
    },
    set(V) {
      if (!idlUtils.isObject(V)) {
        V = null;
      } else {
        V = OnErrorEventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onerror' property on 'Window': The provided value"
        });
      }
      this._setEventHandlerFor("error", V);
    }
  });

  for (const event of events) {
    Object.defineProperty(windowInstance, `on${event}`, {
      configurable: true,
      enumerable: true,
      get() {
        return idlUtils.tryWrapperForImpl(getCurrentEventHandlerValue(this, event));
      },
      set(V) {
        if (!idlUtils.isObject(V)) {
          V = null;
        } else {
          V = EventHandlerNonNull.convert(V, {
            context: `Failed to set the 'on${event}' property on 'Window': The provided value`
          });
        }
        this._setEventHandlerFor(event, V);
      }
    });
  }

  windowInstance._globalObject = windowInstance;
}

// NOTE: per https://heycam.github.io/webidl/#Global, all properties on the Window object must be own-properties.
// That is why we assign everything inside of the constructor, instead of using a shared prototype.
// You can verify this in e.g. Firefox or Internet Explorer, which do a good job with Web IDL compliance.
function Window(options) {
  setupWindow(this, { runScripts: options.runScripts });

  const rawPerformance = new RawPerformance();
  const windowInitialized = rawPerformance.now();

  const window = this;

  // ### PRIVATE DATA PROPERTIES

  this._resourceLoader = options.resourceLoader;

  // vm initialization is deferred until script processing is activated
  this._globalProxy = this;
  Object.defineProperty(idlUtils.implForWrapper(this), idlUtils.wrapperSymbol, { get: () => this._globalProxy });

  // List options explicitly to be clear which are passed through
  this._document = documents.createWrapper(window, {
    parsingMode: options.parsingMode,
    contentType: options.contentType,
    encoding: options.encoding,
    cookieJar: options.cookieJar,
    url: options.url,
    lastModified: options.lastModified,
    referrer: options.referrer,
    parseOptions: options.parseOptions,
    defaultView: this._globalProxy,
    global: this,
    parentOrigin: options.parentOrigin
  }, { alwaysUseDocumentClass: true });

  if (vm.isContext(window)) {
    const documentImpl = idlUtils.implForWrapper(window._document);
    documentImpl._defaultView = window._globalProxy = vm.runInContext("this", window);
  }

  const documentOrigin = idlUtils.implForWrapper(this._document)._origin;
  this._origin = documentOrigin;

  // https://html.spec.whatwg.org/#session-history
  this._sessionHistory = new SessionHistory({
    document: idlUtils.implForWrapper(this._document),
    url: idlUtils.implForWrapper(this._document)._URL,
    stateObject: null
  }, this);

  this._virtualConsole = options.virtualConsole;

  this._runScripts = options.runScripts;

  // Set up the window as if it's a top level window.
  // If it's not, then references will be corrected by frame/iframe code.
  this._parent = this._top = this._globalProxy;
  this._frameElement = null;

  // This implements window.frames.length, since window.frames returns a
  // self reference to the window object.  This value is incremented in the
  // HTMLFrameElement implementation.
  this._length = 0;

  // https://dom.spec.whatwg.org/#window-current-event
  this._currentEvent = undefined;

  this._pretendToBeVisual = options.pretendToBeVisual;
  this._storageQuota = options.storageQuota;

  // Some properties (such as localStorage and sessionStorage) share data
  // between windows in the same origin. This object is intended
  // to contain such data.
  if (options.commonForOrigin && options.commonForOrigin[documentOrigin]) {
    this._commonForOrigin = options.commonForOrigin;
  } else {
    this._commonForOrigin = {
      [documentOrigin]: {
        localStorageArea: new Map(),
        sessionStorageArea: new Map(),
        windowsInSameOrigin: [this]
      }
    };
  }

  this._currentOriginData = this._commonForOrigin[documentOrigin];

  // ### WEB STORAGE

  this._localStorage = Storage.create(window, [], {
    associatedWindow: this,
    storageArea: this._currentOriginData.localStorageArea,
    type: "localStorage",
    url: this._document.documentURI,
    storageQuota: this._storageQuota
  });
  this._sessionStorage = Storage.create(window, [], {
    associatedWindow: this,
    storageArea: this._currentOriginData.sessionStorageArea,
    type: "sessionStorage",
    url: this._document.documentURI,
    storageQuota: this._storageQuota
  });

  // ### SELECTION

  // https://w3c.github.io/selection-api/#dfn-selection
  this._selection = Selection.createImpl(window);

  // https://w3c.github.io/selection-api/#dom-window
  this.getSelection = function () {
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
  const navigator = Navigator.create(window, [], { userAgent: this._resourceLoader._userAgent });
  const performance = Performance.create(window, [], { rawPerformance });
  const screen = Screen.create(window);
  const customElementRegistry = CustomElementRegistry.create(window);

  define(this, {
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
      return performance;
    },
    get screen() {
      return screen;
    },
    get origin() {
      return window._origin;
    },
    // The origin IDL attribute is defined with [Replaceable].
    set origin(value) {
      Object.defineProperty(this, "origin", {
        value,
        writable: true,
        enumerable: true,
        configurable: true
      });
    },
    get localStorage() {
      if (idlUtils.implForWrapper(this._document)._origin === "null") {
        throw DOMException.create(window, [
          "localStorage is not available for opaque origins",
          "SecurityError"
        ]);
      }

      return this._localStorage;
    },
    get sessionStorage() {
      if (idlUtils.implForWrapper(this._document)._origin === "null") {
        throw DOMException.create(window, [
          "sessionStorage is not available for opaque origins",
          "SecurityError"
        ]);
      }

      return this._sessionStorage;
    },
    get customElements() {
      return customElementRegistry;
    },
    get event() {
      return window._currentEvent ? idlUtils.wrapperForImpl(window._currentEvent) : undefined;
    },
    set event(value) {
      Object.defineProperty(window, "event", { configurable: true, enumerable: true, writable: true, value });
    }
  });

  namedPropertiesWindow.initializeWindow(this, this._globalProxy);

  // ### METHODS

  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers

  // In the spec the list of active timers is a set of IDs. We make it a map of IDs to Node.js timer objects, so that
  // we can call Node.js-side clearTimeout() when clearing, and thus allow process shutdown faster.
  const listOfActiveTimers = new Map();
  let latestTimerId = 0;

  this.setTimeout = function (handler, timeout = 0, ...args) {
    if (typeof handler !== "function") {
      handler = webIDLConversions.DOMString(handler);
    }
    timeout = webIDLConversions.long(timeout);

    return timerInitializationSteps(handler, timeout, args, { methodContext: window, repeat: false });
  };
  this.setInterval = function (handler, timeout = 0, ...args) {
    if (typeof handler !== "function") {
      handler = webIDLConversions.DOMString(handler);
    }
    timeout = webIDLConversions.long(timeout);

    return timerInitializationSteps(handler, timeout, args, { methodContext: window, repeat: true });
  };

  this.clearTimeout = function (handle = 0) {
    handle = webIDLConversions.long(handle);

    const nodejsTimer = listOfActiveTimers.get(handle);
    if (nodejsTimer) {
      clearTimeout(nodejsTimer);
      listOfActiveTimers.delete(handle);
    }
  };
  this.clearInterval = function (handle = 0) {
    handle = webIDLConversions.long(handle);

    const nodejsTimer = listOfActiveTimers.get(handle);
    if (nodejsTimer) {
      // We use setTimeout() in timerInitializationSteps even for this.setInterval().
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

  this.queueMicrotask = function (callback) {
    callback = webIDLConversions.Function(callback);

    anyNodeVersionQueueMicrotask(() => {
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

  if (this._pretendToBeVisual) {
    this.requestAnimationFrame = function (callback) {
      callback = webIDLConversions.Function(callback);

      const handle = ++animationFrameCallbackId;
      mapOfAnimationFrameCallbacks.set(handle, callback);

      ++numberOfOngoingAnimationFrameCallbacks;
      if (numberOfOngoingAnimationFrameCallbacks === 1) {
        animationFrameNodejsInterval = setInterval(() => {
          runAnimationFrameCallbacks(rawPerformance.now() - windowInitialized);
        }, 1000 / 60);
      }

      return handle;
    };

    this.cancelAnimationFrame = function (handle) {
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
    value: this.HTMLOptionElement.prototype,
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
    value: this.HTMLImageElement.prototype,
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
    value: this.HTMLAudioElement.prototype,
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

  this.postMessage = postMessage(window);

  this.atob = function (str) {
    const result = atob(str);
    if (result === null) {
      throw DOMException.create(window, [
        "The string to be decoded contains invalid characters.",
        "InvalidCharacterError"
      ]);
    }
    return result;
  };

  this.btoa = function (str) {
    const result = btoa(str);
    if (result === null) {
      throw DOMException.create(window, [
        "The string to be encoded contains invalid characters.",
        "InvalidCharacterError"
      ]);
    }
    return result;
  };

  this.stop = function () {
    const manager = idlUtils.implForWrapper(this._document)._requestManager;
    if (manager) {
      manager.close();
    }
  };

  this.close = function () {
    // Recursively close child frame windows, then ourselves (depth-first).
    for (let i = 0; i < this.length; ++i) {
      this[i].close();
    }

    // Clear out all listeners. Any in-flight or upcoming events should not get delivered.
    idlUtils.implForWrapper(this)._eventListeners = Object.create(null);

    if (this._document) {
      if (this._document.body) {
        this._document.body.innerHTML = "";
      }

      if (this._document.close) {
        // It's especially important to clear out the listeners here because document.close() causes a "load" event to
        // fire.
        idlUtils.implForWrapper(this._document)._eventListeners = Object.create(null);
        this._document.close();
      }
      const doc = idlUtils.implForWrapper(this._document);
      if (doc._requestManager) {
        doc._requestManager.close();
      }
      delete this._document;
    }

    stopAllTimers();
    WebSocketImpl.cleanUpWindow(this);
  };

  this.getComputedStyle = function (elt, pseudoElt = undefined) {
    elt = Element.convert(elt);
    if (pseudoElt !== undefined && pseudoElt !== null) {
      pseudoElt = webIDLConversions.DOMString(pseudoElt);
    }

    if (pseudoElt !== undefined && pseudoElt !== null && pseudoElt !== "") {
      // TODO: Parse pseudoElt

      if (SHADOW_DOM_PSEUDO_REGEXP.test(pseudoElt)) {
        throw new TypeError("Tried to get the computed style of a Shadow DOM pseudo-element.");
      }

      notImplemented("window.computedStyle(elt, pseudoElt)", this);
    }

    const declaration = new CSSStyleDeclaration();
    const { forEach } = Array.prototype;
    const { style } = elt;

    forEachMatchingSheetRuleOfElement(elt, rule => {
      forEach.call(rule.style, property => {
        declaration.setProperty(
          property,
          rule.style.getPropertyValue(property),
          rule.style.getPropertyPriority(property)
        );
      });
    });

    // https://drafts.csswg.org/cssom/#dom-window-getcomputedstyle
    const declarations = Object.keys(propertiesWithResolvedValueImplemented);
    forEach.call(declarations, property => {
      declaration.setProperty(property, getResolvedValue(elt, property));
    });

    forEach.call(style, property => {
      declaration.setProperty(property, style.getPropertyValue(property), style.getPropertyPriority(property));
    });

    return declaration;
  };

  this.getSelection = function () {
    return window._document.getSelection();
  };

  // The captureEvents() and releaseEvents() methods must do nothing
  this.captureEvents = function () {};

  this.releaseEvents = function () {};

  // ### PUBLIC DATA PROPERTIES (TODO: should be getters)

  function wrapConsoleMethod(method) {
    return (...args) => {
      window._virtualConsole.emit(method, ...args);
    };
  }

  this.console = {
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

  define(this, {
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

  // ### INITIALIZATION

  process.nextTick(() => {
    if (!window.document) {
      return; // window might've been closed already
    }

    const documentImpl = idlUtils.implForWrapper(window._document);

    if (window.document.readyState === "complete") {
      fireAnEvent("load", window, undefined, {}, documentImpl);
    } else {
      window.document.addEventListener("load", () => {
        fireAnEvent("load", window, undefined, {}, documentImpl);

        if (!documentImpl._pageShowingFlag) {
          documentImpl._pageShowingFlag = true;
          fireAnEvent("pageshow", window, PageTransitionEvent, { persisted: false }, documentImpl);
        }
      });
    }
  });
}

function contextifyWindow(window) {
  if (vm.isContext(window)) {
    return;
  }

  vm.createContext(window);
}
