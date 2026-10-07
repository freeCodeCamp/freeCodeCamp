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

const interfaceName = "HTMLFrameSetElement";

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
  throw new TypeError(`${context} is not of type 'HTMLFrameSetElement'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["HTMLFrameSetElement"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor HTMLFrameSetElement is not installed on the passed global object");
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
    throw new Error("Internal error: attempting to evaluate HTMLFrameSetElement before HTMLElement");
  }
  class HTMLFrameSetElement extends globalObject.HTMLElement {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    get cols() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get cols' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "cols");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set cols(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set cols' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'cols' property on 'HTMLFrameSetElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "cols", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get rows() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get rows' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "rows");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set rows(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set rows' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'rows' property on 'HTMLFrameSetElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "rows", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get onafterprint() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onafterprint' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onafterprint"]);
    }

    set onafterprint(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onafterprint' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onafterprint' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onafterprint"] = V;
    }

    get onbeforeprint() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onbeforeprint' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onbeforeprint"]);
    }

    set onbeforeprint(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onbeforeprint' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onbeforeprint' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onbeforeprint"] = V;
    }

    get onbeforeunload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onbeforeunload' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onbeforeunload"]);
    }

    set onbeforeunload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onbeforeunload' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = OnBeforeUnloadEventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onbeforeunload' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onbeforeunload"] = V;
    }

    get onhashchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onhashchange' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onhashchange"]);
    }

    set onhashchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onhashchange' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onhashchange' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onhashchange"] = V;
    }

    get onlanguagechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onlanguagechange' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onlanguagechange"]);
    }

    set onlanguagechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onlanguagechange' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onlanguagechange' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onlanguagechange"] = V;
    }

    get onmessage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmessage' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmessage"]);
    }

    set onmessage(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmessage' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmessage' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onmessage"] = V;
    }

    get onmessageerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onmessageerror' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmessageerror"]);
    }

    set onmessageerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onmessageerror' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmessageerror' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onmessageerror"] = V;
    }

    get onoffline() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onoffline' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onoffline"]);
    }

    set onoffline(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onoffline' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onoffline' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onoffline"] = V;
    }

    get ononline() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ononline' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ononline"]);
    }

    set ononline(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ononline' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ononline' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["ononline"] = V;
    }

    get onpagehide() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onpagehide' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpagehide"]);
    }

    set onpagehide(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onpagehide' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onpagehide' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onpagehide"] = V;
    }

    get onpageshow() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onpageshow' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpageshow"]);
    }

    set onpageshow(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onpageshow' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onpageshow' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onpageshow"] = V;
    }

    get onpopstate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onpopstate' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpopstate"]);
    }

    set onpopstate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onpopstate' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onpopstate' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onpopstate"] = V;
    }

    get onrejectionhandled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onrejectionhandled' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onrejectionhandled"]);
    }

    set onrejectionhandled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onrejectionhandled' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onrejectionhandled' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onrejectionhandled"] = V;
    }

    get onstorage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onstorage' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onstorage"]);
    }

    set onstorage(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onstorage' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onstorage' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onstorage"] = V;
    }

    get onunhandledrejection() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onunhandledrejection' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onunhandledrejection"]);
    }

    set onunhandledrejection(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onunhandledrejection' called on an object that is not a valid instance of HTMLFrameSetElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onunhandledrejection' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onunhandledrejection"] = V;
    }

    get onunload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onunload' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onunload"]);
    }

    set onunload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onunload' called on an object that is not a valid instance of HTMLFrameSetElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onunload' property on 'HTMLFrameSetElement': The provided value"
        });
      }
      esValue[implSymbol]["onunload"] = V;
    }
  }
  Object.defineProperties(HTMLFrameSetElement.prototype, {
    cols: { enumerable: true },
    rows: { enumerable: true },
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
    [Symbol.toStringTag]: { value: "HTMLFrameSetElement", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = HTMLFrameSetElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLFrameSetElement
  });
};

const Impl = require("../nodes/HTMLFrameSetElement-impl.js");
