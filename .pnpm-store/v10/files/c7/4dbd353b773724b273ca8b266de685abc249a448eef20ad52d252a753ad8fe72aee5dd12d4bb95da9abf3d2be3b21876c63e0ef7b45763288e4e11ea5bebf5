"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const EventHandlerNonNull = require("./EventHandlerNonNull.js");
const OnBeforeUnloadEventHandlerNonNull = require("./OnBeforeUnloadEventHandlerNonNull.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const HTMLElement = require("./HTMLElement.js");

const interfaceName = "HTMLBodyElement";

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
  throw new globalObject.TypeError(`${context} is not of type 'HTMLBodyElement'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["HTMLBodyElement"].prototype;
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
  class HTMLBodyElement extends globalObject.HTMLElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    get text() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get text' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("text");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set text(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set text' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'text' property on 'HTMLBodyElement': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("text", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get link() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get link' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("link");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set link(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set link' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'link' property on 'HTMLBodyElement': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("link", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get vLink() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get vLink' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("vlink");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set vLink(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set vLink' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'vLink' property on 'HTMLBodyElement': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("vlink", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get aLink() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get aLink' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("alink");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set aLink(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set aLink' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'aLink' property on 'HTMLBodyElement': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("alink", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get bgColor() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get bgColor' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("bgcolor");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set bgColor(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set bgColor' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'bgColor' property on 'HTMLBodyElement': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("bgcolor", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get background() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get background' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol]._reflectGetTheContentAttribute("background");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set background(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set background' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'background' property on 'HTMLBodyElement': The provided value",
        globals: globalObject
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]._reflectSetTheContentAttribute("background", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get onafterprint() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onafterprint' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onafterprint"]);
    }

    set onafterprint(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onafterprint' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onafterprint' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onafterprint"] = V;
    }

    get onbeforeprint() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onbeforeprint' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onbeforeprint"]);
    }

    set onbeforeprint(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onbeforeprint' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onbeforeprint' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onbeforeprint"] = V;
    }

    get onbeforeunload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onbeforeunload' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onbeforeunload"]);
    }

    set onbeforeunload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onbeforeunload' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = OnBeforeUnloadEventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onbeforeunload' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onbeforeunload"] = V;
    }

    get onhashchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onhashchange' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onhashchange"]);
    }

    set onhashchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onhashchange' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onhashchange' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onhashchange"] = V;
    }

    get onlanguagechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onlanguagechange' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onlanguagechange"]);
    }

    set onlanguagechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onlanguagechange' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onlanguagechange' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onlanguagechange"] = V;
    }

    get onmessage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onmessage' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmessage"]);
    }

    set onmessage(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onmessage' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onmessage' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onmessage"] = V;
    }

    get onmessageerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onmessageerror' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmessageerror"]);
    }

    set onmessageerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onmessageerror' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onmessageerror' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onmessageerror"] = V;
    }

    get onoffline() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onoffline' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onoffline"]);
    }

    set onoffline(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onoffline' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onoffline' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onoffline"] = V;
    }

    get ononline() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ononline' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ononline"]);
    }

    set ononline(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ononline' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'ononline' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["ononline"] = V;
    }

    get onpagehide() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onpagehide' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpagehide"]);
    }

    set onpagehide(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onpagehide' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onpagehide' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onpagehide"] = V;
    }

    get onpageshow() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onpageshow' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpageshow"]);
    }

    set onpageshow(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onpageshow' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onpageshow' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onpageshow"] = V;
    }

    get onpopstate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onpopstate' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpopstate"]);
    }

    set onpopstate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onpopstate' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onpopstate' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onpopstate"] = V;
    }

    get onrejectionhandled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onrejectionhandled' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onrejectionhandled"]);
    }

    set onrejectionhandled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onrejectionhandled' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onrejectionhandled' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onrejectionhandled"] = V;
    }

    get onstorage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onstorage' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onstorage"]);
    }

    set onstorage(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onstorage' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onstorage' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onstorage"] = V;
    }

    get onunhandledrejection() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onunhandledrejection' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onunhandledrejection"]);
    }

    set onunhandledrejection(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onunhandledrejection' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onunhandledrejection' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onunhandledrejection"] = V;
    }

    get onunload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onunload' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onunload"]);
    }

    set onunload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onunload' called on an object that is not a valid instance of HTMLBodyElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onunload' property on 'HTMLBodyElement': The provided value"
        });
      }
      esValue[implSymbol]["onunload"] = V;
    }
  }
  Object.defineProperties(HTMLBodyElement.prototype, {
    text: { enumerable: true },
    link: { enumerable: true },
    vLink: { enumerable: true },
    aLink: { enumerable: true },
    bgColor: { enumerable: true },
    background: { enumerable: true },
    onafterprint: { enumerable: true },
    onbeforeprint: { enumerable: true },
    onbeforeunload: { enumerable: true },
    onhashchange: { enumerable: true },
    onlanguagechange: { enumerable: true },
    onmessage: { enumerable: true },
    onmessageerror: { enumerable: true },
    onoffline: { enumerable: true },
    ononline: { enumerable: true },
    onpagehide: { enumerable: true },
    onpageshow: { enumerable: true },
    onpopstate: { enumerable: true },
    onrejectionhandled: { enumerable: true },
    onstorage: { enumerable: true },
    onunhandledrejection: { enumerable: true },
    onunload: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLBodyElement", configurable: true }
  });
  ctorRegistry[interfaceName] = HTMLBodyElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLBodyElement
  });
};

const Impl = require("../nodes/HTMLBodyElement-impl.js");
