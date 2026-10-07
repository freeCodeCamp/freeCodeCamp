"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const serializeURLwhatwg_url = require("whatwg-url").serializeURL;
const parseNonNegativeInteger_helpers_strings = require("../helpers/strings.js").parseNonNegativeInteger;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLElement = require("./HTMLElement.js");

const interfaceName = "HTMLImageElement";

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
  throw new globalObject.TypeError(`${context} is not of type 'HTMLImageElement'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["HTMLImageElement"].prototype;
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
  class HTMLImageElement extends globalObject.HTMLElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    get alt() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get alt' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("alt");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set alt(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set alt' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'alt' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("alt", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get src() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get src' called on an object that is not a valid instance of HTMLImageElement."
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
          "'set src' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'src' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("src", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get srcset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get srcset' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("srcset");
        return value === null ? "" : conversions.USVString(value);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set srcset(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set srcset' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'srcset' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("srcset", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get sizes() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get sizes' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("sizes");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set sizes(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set sizes' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'sizes' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("sizes", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get crossOrigin() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get crossOrigin' called on an object that is not a valid instance of HTMLImageElement."
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
          "'set crossOrigin' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      if (V === null || V === undefined) {
        V = null;
      } else {
        V = conversions["DOMString"](V, {
          context: "Failed to set the 'crossOrigin' property on 'HTMLImageElement': The provided value",
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

    get useMap() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get useMap' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("usemap");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set useMap(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set useMap' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'useMap' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("usemap", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get isMap() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get isMap' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]._reflectGetTheContentAttribute("ismap") !== null;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set isMap(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set isMap' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'isMap' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol]._reflectSetTheContentAttribute("ismap", "");
        } else {
          esValue[implSymbol]._reflectDeleteTheContentAttribute("ismap");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get width() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get width' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["width"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set width(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set width' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'width' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["width"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get height() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get height' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["height"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set height(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set height' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'height' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["height"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get naturalWidth() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get naturalWidth' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      return esValue[implSymbol]["naturalWidth"];
    }

    get naturalHeight() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get naturalHeight' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      return esValue[implSymbol]["naturalHeight"];
    }

    get complete() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get complete' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      return esValue[implSymbol]["complete"];
    }

    get currentSrc() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get currentSrc' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      return esValue[implSymbol]["currentSrc"];
    }

    get name() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get name' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("name");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set name(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set name' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'name' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("name", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get lowsrc() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get lowsrc' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("lowsrc");
        if (value === null) {
          return "";
        }

        if (this._lowsrcURLCacheKey === value) {
          return this._lowsrcURLCache;
        }

        this._lowsrcURLCacheKey = value;

        const urlRecord = esValue[implSymbol]._ownerDocument.encodingParseAURL(value);
        if (urlRecord !== null) {
          this._lowsrcURLCache = serializeURLwhatwg_url(urlRecord);
          return this._lowsrcURLCache;
        }
        this._lowsrcURLCache = conversions.USVString(value);
        return this._lowsrcURLCache;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set lowsrc(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set lowsrc' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'lowsrc' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("lowsrc", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get align() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get align' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("align");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set align(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set align' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'align' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("align", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get hspace() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get hspace' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol]._reflectGetTheContentAttribute("hspace");
        if (value !== null) {
          value = parseNonNegativeInteger_helpers_strings(value);
          if (value !== null && value >= 0 && value <= 2147483647) {
            return value;
          }
        }
        return 0;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set hspace(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set hspace' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'hspace' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const newValue = V <= 2147483647 && V >= 0 ? V : 0;
        esValue[implSymbol]._reflectSetTheContentAttribute("hspace", String(newValue));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get vspace() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get vspace' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        let value = esValue[implSymbol]._reflectGetTheContentAttribute("vspace");
        if (value !== null) {
          value = parseNonNegativeInteger_helpers_strings(value);
          if (value !== null && value >= 0 && value <= 2147483647) {
            return value;
          }
        }
        return 0;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set vspace(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set vspace' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'vspace' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const newValue = V <= 2147483647 && V >= 0 ? V : 0;
        esValue[implSymbol]._reflectSetTheContentAttribute("vspace", String(newValue));
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get longDesc() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get longDesc' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("longdesc");
        if (value === null) {
          return "";
        }

        if (this._longdescURLCacheKey === value) {
          return this._longdescURLCache;
        }

        this._longdescURLCacheKey = value;

        const urlRecord = esValue[implSymbol]._ownerDocument.encodingParseAURL(value);
        if (urlRecord !== null) {
          this._longdescURLCache = serializeURLwhatwg_url(urlRecord);
          return this._longdescURLCache;
        }
        this._longdescURLCache = conversions.USVString(value);
        return this._longdescURLCache;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set longDesc(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set longDesc' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["USVString"](V, {
        context: "Failed to set the 'longDesc' property on 'HTMLImageElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("longdesc", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get border() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get border' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("border");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set border(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set border' called on an object that is not a valid instance of HTMLImageElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'border' property on 'HTMLImageElement': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("border", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(HTMLImageElement.prototype, {
    alt: { enumerable: true },
    src: { enumerable: true },
    srcset: { enumerable: true },
    sizes: { enumerable: true },
    crossOrigin: { enumerable: true },
    useMap: { enumerable: true },
    isMap: { enumerable: true },
    width: { enumerable: true },
    height: { enumerable: true },
    naturalWidth: { enumerable: true },
    naturalHeight: { enumerable: true },
    complete: { enumerable: true },
    currentSrc: { enumerable: true },
    name: { enumerable: true },
    lowsrc: { enumerable: true },
    align: { enumerable: true },
    hspace: { enumerable: true },
    vspace: { enumerable: true },
    longDesc: { enumerable: true },
    border: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLImageElement", configurable: true }
  });
  ctorRegistry[interfaceName] = HTMLImageElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLImageElement
  });
};

const Impl = require("../nodes/HTMLImageElement-impl.js");
