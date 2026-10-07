"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const TextTrackKind = require("./TextTrackKind.js");
const parseURLToResultingURLRecord_helpers_document_base_url =
  require("../helpers/document-base-url.js").parseURLToResultingURLRecord;
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
exports.convert = (value, { context = "The provided value" } = {}) => {
  if (exports.is(value)) {
    return utils.implForWrapper(value);
  }
  throw new TypeError(`${context} is not of type 'HTMLMediaElement'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["HTMLMediaElement"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor HTMLMediaElement is not installed on the passed global object");
  }

  return Object.create(ctor.prototype);
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

exports.new = globalObject => {
  const wrapper = makeWrapper(globalObject);

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

  if (globalObject.HTMLElement === undefined) {
    throw new Error("Internal error: attempting to evaluate HTMLMediaElement before HTMLElement");
  }
  class HTMLMediaElement extends globalObject.HTMLElement {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    load() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'load' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol].load();
    }

    canPlayType(type) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'canPlayType' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'canPlayType' on 'HTMLMediaElement': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'canPlayType' on 'HTMLMediaElement': parameter 1"
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].canPlayType(...args));
    }

    play() {
      try {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new TypeError("'play' called on an object that is not a valid instance of HTMLMediaElement.");
        }

        return utils.tryWrapperForImpl(esValue[implSymbol].play());
      } catch (e) {
        return Promise.reject(e);
      }
    }

    pause() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'pause' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol].pause();
    }

    addTextTrack(kind) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'addTextTrack' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to execute 'addTextTrack' on 'HTMLMediaElement': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = TextTrackKind.convert(curArg, {
          context: "Failed to execute 'addTextTrack' on 'HTMLMediaElement': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'addTextTrack' on 'HTMLMediaElement': parameter 2"
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
            context: "Failed to execute 'addTextTrack' on 'HTMLMediaElement': parameter 3"
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
        throw new TypeError("'get src' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "src");
        if (value === null) {
          return "";
        }
        const urlRecord = parseURLToResultingURLRecord_helpers_document_base_url(
          value,
          esValue[implSymbol]._ownerDocument
        );
        if (urlRecord !== null) {
          return serializeURLwhatwg_url(urlRecord);
        }
        return conversions.USVString(value);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set src(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set src' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'src' property on 'HTMLMediaElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "src", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get currentSrc() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get currentSrc' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["currentSrc"];
    }

    get crossOrigin() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get crossOrigin' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "crossorigin");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set crossOrigin(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set crossOrigin' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'crossOrigin' property on 'HTMLMediaElement': The provided value"
        });
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "crossorigin", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get networkState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get networkState' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["networkState"];
    }

    get preload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get preload' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "preload");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set preload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set preload' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'preload' property on 'HTMLMediaElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "preload", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get buffered() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get buffered' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["buffered"]);
    }

    get readyState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get readyState' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["readyState"];
    }

    get seeking() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get seeking' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["seeking"];
    }

    get currentTime() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get currentTime' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["currentTime"];
    }

    set currentTime(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set currentTime' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["double"](V, {
        context: "Failed to set the 'currentTime' property on 'HTMLMediaElement': The provided value"
      });

      esValue[implSymbol]["currentTime"] = V;
    }

    get duration() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get duration' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["duration"];
    }

    get paused() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get paused' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["paused"];
    }

    get defaultPlaybackRate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get defaultPlaybackRate' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      return esValue[implSymbol]["defaultPlaybackRate"];
    }

    set defaultPlaybackRate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set defaultPlaybackRate' called on an object that is not a valid instance of HTMLMediaElement."
        );
      }

      V = conversions["double"](V, {
        context: "Failed to set the 'defaultPlaybackRate' property on 'HTMLMediaElement': The provided value"
      });

      esValue[implSymbol]["defaultPlaybackRate"] = V;
    }

    get playbackRate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get playbackRate' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["playbackRate"];
    }

    set playbackRate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set playbackRate' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["double"](V, {
        context: "Failed to set the 'playbackRate' property on 'HTMLMediaElement': The provided value"
      });

      esValue[implSymbol]["playbackRate"] = V;
    }

    get played() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get played' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["played"]);
    }

    get seekable() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get seekable' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["seekable"]);
    }

    get ended() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ended' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["ended"];
    }

    get autoplay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get autoplay' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "autoplay");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set autoplay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set autoplay' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'autoplay' property on 'HTMLMediaElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "autoplay", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "autoplay");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get loop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get loop' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "loop");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set loop(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set loop' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'loop' property on 'HTMLMediaElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "loop", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "loop");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get controls() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get controls' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "controls");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set controls(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set controls' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'controls' property on 'HTMLMediaElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "controls", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "controls");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get volume() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get volume' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["volume"];
    }

    set volume(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set volume' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["double"](V, {
        context: "Failed to set the 'volume' property on 'HTMLMediaElement': The provided value"
      });

      esValue[implSymbol]["volume"] = V;
    }

    get muted() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get muted' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return esValue[implSymbol]["muted"];
    }

    set muted(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set muted' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'muted' property on 'HTMLMediaElement': The provided value"
      });

      esValue[implSymbol]["muted"] = V;
    }

    get defaultMuted() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get defaultMuted' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "muted");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set defaultMuted(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set defaultMuted' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'defaultMuted' property on 'HTMLMediaElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "muted", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "muted");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get audioTracks() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get audioTracks' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return utils.getSameObject(this, "audioTracks", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["audioTracks"]);
      });
    }

    get videoTracks() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get videoTracks' called on an object that is not a valid instance of HTMLMediaElement.");
      }

      return utils.getSameObject(this, "videoTracks", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["videoTracks"]);
      });
    }

    get textTracks() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get textTracks' called on an object that is not a valid instance of HTMLMediaElement.");
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
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = HTMLMediaElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLMediaElement
  });
};

const Impl = require("../nodes/HTMLMediaElement-impl.js");
