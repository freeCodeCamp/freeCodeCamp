"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const TextTrackKind = require("./TextTrackKind.js");
const serializeURLwhatwg_url = require("whatwg-url").serializeURL;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLElement = require("./HTMLElement.js");

const interfaceName = "HTMLMediaElement";

exports.is = value => {
  return utils.isObject(value) && utils.hasOwn(value, implSymbol) && value[implSymbol] instanceof Impl.implementation;
};
exports.isImpl = value => {
  return utils.isObject(value) && value instanceof Impl.implementation;
};
exports.convert = (globalObject, value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new globalObject.TypeError(`${context} is not of type 'HTMLMediaElement'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["HTMLMediaElement"].prototype;
  }

  return Object.create(proto);
}

exports.create = (globalObject, constructorArgs, privateData) => {
  const wrapper = makeWrapper(globalObject);
  return exports.setup(wrapper, globalObject, constructorArgs, privateData);
};

exports.createImpl = (globalObject, constructorArgs, privateData) => {
  const wrapper = exports.create(globalObject, constructorArgs, privateData);
  return utils.implForWrapper(wrapper);
};

exports._internalSetup = (wrapper, globalObject) => {
  HTMLElement._internalSetup(wrapper, globalObject);
};

exports.setup = (wrapper, globalObject, constructorArgs = [], privateData = {}) => {
  privateData.wrapper = wrapper;

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: new Impl.implementation(globalObject, constructorArgs, privateData),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper;
};

exports.new = (globalObject, newTarget) => {
  const wrapper = makeWrapper(globalObject, newTarget);

  exports._internalSetup(wrapper, globalObject);
  Object.defineProperty(wrapper, implSymbol, {
    value: Object.create(Impl.implementation.prototype),
    configurable: true
  });

  wrapper[implSymbol][utils.wrapperSymbol] = wrapper;
  if (Impl.init) {
    Impl.init(wrapper[implSymbol]);
  }
  return wrapper[implSymbol];
};

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class HTMLMediaElement extends globalObject.HTMLElement {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    load() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'load' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol].load();
    }

    canPlayType(type) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'canPlayType' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'canPlayType' on 'HTMLMediaElement': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'canPlayType' on 'HTMLMediaElement': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].canPlayType(...args));
    }

    play() {
      try {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'play' called on an object that is not a valid instance of HTMLMediaElement."
          );
        }

        return utils.tryWrapperForImpl(esValue[implSymbol].play());
      } catch (e) {
        return globalObject.Promise.reject(e);
      }
    }

    pause() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'pause' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol].pause();
    }

    addTextTrack(kind) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'addTextTrack' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'addTextTrack' on 'HTMLMediaElement': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = TextTrackKind.convert(globalObject, curArg, {
          context: "Failed to execute 'addTextTrack' on 'HTMLMediaElement': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'addTextTrack' on 'HTMLMediaElement': parameter 2",
            globals: globalObject
          });
        } else {
          curArg = "";
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'addTextTrack' on 'HTMLMediaElement': parameter 3",
            globals: globalObject
          });
        } else {
          curArg = "";
        }
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].addTextTrack(...args));
    }

    get src() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get src' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("src");
        if (value === null) {
          return "";
        }

        if (this._srcURLCacheKey === value) {
          return this._srcURLCache;
        }

        this._srcURLCacheKey = value;

        const urlRecord = esValue[implSymbol]._ownerDocument.encodingParseAURL(value);
        if (urlRecord !== null) {
          this._srcURLCache = serializeURLwhatwg_url(urlRecord);
          return this._srcURLCache;
        }
        this._srcURLCache = conversions.USVString(value);
        return this._srcURLCache;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set src(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set src' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'src' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("src", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get currentSrc() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get currentSrc' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["currentSrc"];
    }

    get crossOrigin() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get crossOrigin' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("crossorigin");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set crossOrigin(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set crossOrigin' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'crossOrigin' property on 'HTMLMediaElement': The provided value",
          globals: globalObject
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V === null) {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("crossorigin");
        } else {
          esValue[implSymbol]._reflectSetTheContentAttribute("crossorigin", V);
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get networkState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get networkState' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["networkState"];
    }

    get preload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get preload' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("preload");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set preload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set preload' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'preload' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("preload", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get buffered() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get buffered' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["buffered"]);
    }

    get readyState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get readyState' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["readyState"];
    }

    get seeking() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get seeking' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["seeking"];
    }

    get currentTime() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get currentTime' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["currentTime"];
    }

    set currentTime(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set currentTime' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["double"](V, {
        context: "Failed to set the 'currentTime' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["currentTime"] = V;
    }

    get duration() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get duration' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["duration"];
    }

    get paused() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get paused' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["paused"];
    }

    get defaultPlaybackRate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get defaultPlaybackRate' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["defaultPlaybackRate"];
    }

    set defaultPlaybackRate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set defaultPlaybackRate' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["double"](V, {
        context: "Failed to set the 'defaultPlaybackRate' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["defaultPlaybackRate"] = V;
    }

    get playbackRate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get playbackRate' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["playbackRate"];
    }

    set playbackRate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set playbackRate' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["double"](V, {
        context: "Failed to set the 'playbackRate' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["playbackRate"] = V;
    }

    get played() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get played' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["played"]);
    }

    get seekable() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get seekable' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["seekable"]);
    }

    get ended() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ended' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["ended"];
    }

    get autoplay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get autoplay' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("autoplay") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set autoplay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set autoplay' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'autoplay' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("autoplay", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("autoplay");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get loop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get loop' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("loop") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set loop(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set loop' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'loop' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("loop", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("loop");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get controls() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get controls' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("controls") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set controls(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set controls' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'controls' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("controls", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("controls");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get volume() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get volume' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["volume"];
    }

    set volume(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set volume' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["double"](V, {
        context: "Failed to set the 'volume' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["volume"] = V;
    }

    get muted() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get muted' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["muted"];
    }

    set muted(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set muted' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'muted' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["muted"] = V;
    }

    get defaultMuted() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get defaultMuted' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("muted") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set defaultMuted(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set defaultMuted' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'defaultMuted' property on 'HTMLMediaElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("muted", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("muted");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get audioTracks() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get audioTracks' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return utils.getSameObject(this, "audioTracks", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["audioTracks"]);
      });
    }

    get videoTracks() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get videoTracks' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return utils.getSameObject(this, "videoTracks", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["videoTracks"]);
      });
    }

    get textTracks() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get textTracks' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return utils.getSameObject(this, "textTracks", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["textTracks"]);
      });
    }
  }
  Object.defineProperties(HTMLMediaElement.prototype, {
    load: { enumerable: true },
    canPlayType: { enumerable: true },
    play: { enumerable: true },
    pause: { enumerable: true },
    addTextTrack: { enumerable: true },
    src: { enumerable: true },
    currentSrc: { enumerable: true },
    crossOrigin: { enumerable: true },
    networkState: { enumerable: true },
    preload: { enumerable: true },
    buffered: { enumerable: true },
    readyState: { enumerable: true },
    seeking: { enumerable: true },
    currentTime: { enumerable: true },
    duration: { enumerable: true },
    paused: { enumerable: true },
    defaultPlaybackRate: { enumerable: true },
    playbackRate: { enumerable: true },
    played: { enumerable: true },
    seekable: { enumerable: true },
    ended: { enumerable: true },
    autoplay: { enumerable: true },
    loop: { enumerable: true },
    controls: { enumerable: true },
    volume: { enumerable: true },
    muted: { enumerable: true },
    defaultMuted: { enumerable: true },
    audioTracks: { enumerable: true },
    videoTracks: { enumerable: true },
    textTracks: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLMediaElement", configurable: true },
    NETWORK_EMPTY: { value: 0, enumerable: true },
    NETWORK_IDLE: { value: 1, enumerable: true },
    NETWORK_LOADING: { value: 2, enumerable: true },
    NETWORK_NO_SOURCE: { value: 3, enumerable: true },
    HAVE_NOTHING: { value: 0, enumerable: true },
    HAVE_METADATA: { value: 1, enumerable: true },
    HAVE_CURRENT_DATA: { value: 2, enumerable: true },
    HAVE_FUTURE_DATA: { value: 3, enumerable: true },
    HAVE_ENOUGH_DATA: { value: 4, enumerable: true }
  });
  Object.defineProperties(HTMLMediaElement, {
    NETWORK_EMPTY: { value: 0, enumerable: true },
    NETWORK_IDLE: { value: 1, enumerable: true },
    NETWORK_LOADING: { value: 2, enumerable: true },
    NETWORK_NO_SOURCE: { value: 3, enumerable: true },
    HAVE_NOTHING: { value: 0, enumerable: true },
    HAVE_METADATA: { value: 1, enumerable: true },
    HAVE_CURRENT_DATA: { value: 2, enumerable: true },
    HAVE_FUTURE_DATA: { value: 3, enumerable: true },
    HAVE_ENOUGH_DATA: { value: 4, enumerable: true }
  });
  ctorRegistry[interfaceName] = HTMLMediaElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLMediaElement
  });
};

const Impl = require("../nodes/HTMLMediaElement-impl.js");
