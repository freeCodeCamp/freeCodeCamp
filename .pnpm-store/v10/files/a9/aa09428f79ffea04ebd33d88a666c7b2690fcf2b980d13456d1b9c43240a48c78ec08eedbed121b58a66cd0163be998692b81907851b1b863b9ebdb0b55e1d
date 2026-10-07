"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const HTMLConstructor_helpers_html_constructor = require("../helpers/html-constructor.js").HTMLConstructor;
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const EventHandlerNonNull = require("./EventHandlerNonNull.js");
const OnErrorEventHandlerNonNull = require("./OnErrorEventHandlerNonNull.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const Element = require("./Element.js");

const interfaceName = "HTMLElement";

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
  throw new TypeError(`${context} is not of type 'HTMLElement'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["HTMLElement"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor HTMLElement is not installed on the passed global object");
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
  Element._internalSetup(wrapper, globalObject);
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

  if (globalObject.Element === undefined) {
    throw new Error("Internal error: attempting to evaluate HTMLElement before Element");
  }
  class HTMLElement extends globalObject.Element {
    constructor() {
      return HTMLConstructor_helpers_html_constructor(globalObject, interfaceName, new.target);
    }

    click() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'click' called on an object that is not a valid instance of HTMLElement.");
      }

      return esValue[implSymbol].click();
    }

    focus() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'focus' called on an object that is not a valid instance of HTMLElement.");
      }

      return esValue[implSymbol].focus();
    }

    blur() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'blur' called on an object that is not a valid instance of HTMLElement.");
      }

      return esValue[implSymbol].blur();
    }

    get title() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get title' called on an object that is not a valid instance of HTMLElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "title");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set title(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set title' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'title' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "title", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get lang() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get lang' called on an object that is not a valid instance of HTMLElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "lang");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set lang(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set lang' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'lang' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "lang", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get translate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get translate' called on an object that is not a valid instance of HTMLElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["translate"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set translate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set translate' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'translate' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["translate"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get dir() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get dir' called on an object that is not a valid instance of HTMLElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["dir"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set dir(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set dir' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'dir' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["dir"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get hidden() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get hidden' called on an object that is not a valid instance of HTMLElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].hasAttributeNS(null, "hidden");
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set hidden(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set hidden' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'hidden' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        if (V) {
          esValue[implSymbol].setAttributeNS(null, "hidden", "");
        } else {
          esValue[implSymbol].removeAttributeNS(null, "hidden");
        }
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get accessKey() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get accessKey' called on an object that is not a valid instance of HTMLElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        const value = esValue[implSymbol].getAttributeNS(null, "accesskey");
        return value === null ? "" : value;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set accessKey(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set accessKey' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'accessKey' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol].setAttributeNS(null, "accesskey", V);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get draggable() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get draggable' called on an object that is not a valid instance of HTMLElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["draggable"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set draggable(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set draggable' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'draggable' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["draggable"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get offsetParent() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get offsetParent' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["offsetParent"]);
    }

    get offsetTop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get offsetTop' called on an object that is not a valid instance of HTMLElement.");
      }

      return esValue[implSymbol]["offsetTop"];
    }

    get offsetLeft() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get offsetLeft' called on an object that is not a valid instance of HTMLElement.");
      }

      return esValue[implSymbol]["offsetLeft"];
    }

    get offsetWidth() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get offsetWidth' called on an object that is not a valid instance of HTMLElement.");
      }

      return esValue[implSymbol]["offsetWidth"];
    }

    get offsetHeight() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get offsetHeight' called on an object that is not a valid instance of HTMLElement.");
      }

      return esValue[implSymbol]["offsetHeight"];
    }

    get style() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get style' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.getSameObject(this, "style", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["style"]);
      });
    }

    set style(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set style' called on an object that is not a valid instance of HTMLElement.");
      }

      const Q = esValue["style"];
      if (!utils.isObject(Q)) {
        throw new TypeError("Property 'style' is not an object");
      }
      Reflect.set(Q, "cssText", V);
    }

    get onabort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onabort' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onabort"]);
    }

    set onabort(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onabort' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onabort' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onabort"] = V;
    }

    get onauxclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onauxclick' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onauxclick"]);
    }

    set onauxclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onauxclick' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onauxclick' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onauxclick"] = V;
    }

    get onblur() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onblur' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onblur"]);
    }

    set onblur(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onblur' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onblur' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onblur"] = V;
    }

    get oncancel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncancel' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncancel"]);
    }

    set oncancel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncancel' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncancel' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["oncancel"] = V;
    }

    get oncanplay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncanplay' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncanplay"]);
    }

    set oncanplay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncanplay' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncanplay' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["oncanplay"] = V;
    }

    get oncanplaythrough() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncanplaythrough' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncanplaythrough"]);
    }

    set oncanplaythrough(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncanplaythrough' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncanplaythrough' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["oncanplaythrough"] = V;
    }

    get onchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onchange' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onchange"]);
    }

    set onchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onchange' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onchange' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onchange"] = V;
    }

    get onclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onclick' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onclick"]);
    }

    set onclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onclick' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onclick' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onclick"] = V;
    }

    get onclose() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onclose' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onclose"]);
    }

    set onclose(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onclose' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onclose' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onclose"] = V;
    }

    get oncontextmenu() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncontextmenu' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncontextmenu"]);
    }

    set oncontextmenu(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncontextmenu' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncontextmenu' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["oncontextmenu"] = V;
    }

    get oncuechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oncuechange' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oncuechange"]);
    }

    set oncuechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oncuechange' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oncuechange' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["oncuechange"] = V;
    }

    get ondblclick() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondblclick' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondblclick"]);
    }

    set ondblclick(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondblclick' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondblclick' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondblclick"] = V;
    }

    get ondrag() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondrag' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondrag"]);
    }

    set ondrag(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondrag' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondrag' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondrag"] = V;
    }

    get ondragend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragend' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragend"]);
    }

    set ondragend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragend' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragend' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondragend"] = V;
    }

    get ondragenter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragenter' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragenter"]);
    }

    set ondragenter(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragenter' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragenter' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondragenter"] = V;
    }

    get ondragleave() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragleave' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragleave"]);
    }

    set ondragleave(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragleave' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragleave' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondragleave"] = V;
    }

    get ondragover() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragover' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragover"]);
    }

    set ondragover(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragover' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragover' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondragover"] = V;
    }

    get ondragstart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondragstart' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondragstart"]);
    }

    set ondragstart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondragstart' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondragstart' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondragstart"] = V;
    }

    get ondrop() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondrop' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondrop"]);
    }

    set ondrop(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondrop' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondrop' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondrop"] = V;
    }

    get ondurationchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ondurationchange' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ondurationchange"]);
    }

    set ondurationchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ondurationchange' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ondurationchange' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ondurationchange"] = V;
    }

    get onemptied() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onemptied' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onemptied"]);
    }

    set onemptied(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onemptied' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onemptied' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onemptied"] = V;
    }

    get onended() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onended' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onended"]);
    }

    set onended(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onended' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onended' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onended"] = V;
    }

    get onerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onerror' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onerror"]);
    }

    set onerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onerror' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = OnErrorEventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onerror' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onerror"] = V;
    }

    get onfocus() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onfocus' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onfocus"]);
    }

    set onfocus(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onfocus' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onfocus' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onfocus"] = V;
    }

    get oninput() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oninput' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oninput"]);
    }

    set oninput(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oninput' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oninput' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["oninput"] = V;
    }

    get oninvalid() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get oninvalid' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["oninvalid"]);
    }

    set oninvalid(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set oninvalid' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'oninvalid' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["oninvalid"] = V;
    }

    get onkeydown() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onkeydown' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeydown"]);
    }

    set onkeydown(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onkeydown' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onkeydown' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onkeydown"] = V;
    }

    get onkeypress() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onkeypress' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeypress"]);
    }

    set onkeypress(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onkeypress' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onkeypress' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onkeypress"] = V;
    }

    get onkeyup() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onkeyup' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onkeyup"]);
    }

    set onkeyup(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onkeyup' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onkeyup' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onkeyup"] = V;
    }

    get onload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onload' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onload"]);
    }

    set onload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onload' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onload' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onload"] = V;
    }

    get onloadeddata() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onloadeddata' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadeddata"]);
    }

    set onloadeddata(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onloadeddata' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadeddata' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onloadeddata"] = V;
    }

    get onloadedmetadata() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onloadedmetadata' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadedmetadata"]);
    }

    set onloadedmetadata(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onloadedmetadata' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadedmetadata' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onloadedmetadata"] = V;
    }

    get onloadend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onloadend' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadend"]);
    }

    set onloadend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onloadend' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadend' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onloadend"] = V;
    }

    get onloadstart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onloadstart' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadstart"]);
    }

    set onloadstart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onloadstart' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onloadstart' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onloadstart"] = V;
    }

    get onmousedown() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmousedown' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmousedown"]);
    }

    set onmousedown(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmousedown' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmousedown' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onmousedown"] = V;
    }

    get onmouseenter() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseenter"]);
    }

    set onmouseenter(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseenter' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onmouseenter"] = V;
    }

    get onmouseleave() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseleave"]);
    }

    set onmouseleave(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        return;
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseleave' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onmouseleave"] = V;
    }

    get onmousemove() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmousemove' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmousemove"]);
    }

    set onmousemove(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmousemove' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmousemove' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onmousemove"] = V;
    }

    get onmouseout() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmouseout' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseout"]);
    }

    set onmouseout(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmouseout' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseout' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onmouseout"] = V;
    }

    get onmouseover() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmouseover' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseover"]);
    }

    set onmouseover(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmouseover' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseover' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onmouseover"] = V;
    }

    get onmouseup() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onmouseup' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmouseup"]);
    }

    set onmouseup(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onmouseup' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onmouseup' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onmouseup"] = V;
    }

    get onwheel() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onwheel' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onwheel"]);
    }

    set onwheel(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onwheel' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onwheel' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onwheel"] = V;
    }

    get onpause() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onpause' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpause"]);
    }

    set onpause(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onpause' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onpause' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onpause"] = V;
    }

    get onplay() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onplay' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onplay"]);
    }

    set onplay(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onplay' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onplay' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onplay"] = V;
    }

    get onplaying() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onplaying' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onplaying"]);
    }

    set onplaying(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onplaying' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onplaying' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onplaying"] = V;
    }

    get onprogress() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onprogress' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onprogress"]);
    }

    set onprogress(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onprogress' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onprogress' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onprogress"] = V;
    }

    get onratechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onratechange' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onratechange"]);
    }

    set onratechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onratechange' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onratechange' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onratechange"] = V;
    }

    get onreset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onreset' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onreset"]);
    }

    set onreset(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onreset' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onreset' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onreset"] = V;
    }

    get onresize() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onresize' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onresize"]);
    }

    set onresize(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onresize' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onresize' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onresize"] = V;
    }

    get onscroll() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onscroll' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onscroll"]);
    }

    set onscroll(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onscroll' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onscroll' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onscroll"] = V;
    }

    get onsecuritypolicyviolation() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'get onsecuritypolicyviolation' called on an object that is not a valid instance of HTMLElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsecuritypolicyviolation"]);
    }

    set onsecuritypolicyviolation(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError(
          "'set onsecuritypolicyviolation' called on an object that is not a valid instance of HTMLElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onsecuritypolicyviolation' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onsecuritypolicyviolation"] = V;
    }

    get onseeked() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onseeked' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onseeked"]);
    }

    set onseeked(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onseeked' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onseeked' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onseeked"] = V;
    }

    get onseeking() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onseeking' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onseeking"]);
    }

    set onseeking(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onseeking' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onseeking' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onseeking"] = V;
    }

    get onselect() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onselect' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onselect"]);
    }

    set onselect(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onselect' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onselect' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onselect"] = V;
    }

    get onstalled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onstalled' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onstalled"]);
    }

    set onstalled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onstalled' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onstalled' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onstalled"] = V;
    }

    get onsubmit() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onsubmit' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsubmit"]);
    }

    set onsubmit(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onsubmit' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onsubmit' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onsubmit"] = V;
    }

    get onsuspend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onsuspend' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onsuspend"]);
    }

    set onsuspend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onsuspend' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onsuspend' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onsuspend"] = V;
    }

    get ontimeupdate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ontimeupdate' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ontimeupdate"]);
    }

    set ontimeupdate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ontimeupdate' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ontimeupdate' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ontimeupdate"] = V;
    }

    get ontoggle() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get ontoggle' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ontoggle"]);
    }

    set ontoggle(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set ontoggle' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'ontoggle' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["ontoggle"] = V;
    }

    get onvolumechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onvolumechange' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onvolumechange"]);
    }

    set onvolumechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onvolumechange' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onvolumechange' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onvolumechange"] = V;
    }

    get onwaiting() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get onwaiting' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onwaiting"]);
    }

    set onwaiting(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set onwaiting' called on an object that is not a valid instance of HTMLElement.");
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(V, {
          context: "Failed to set the 'onwaiting' property on 'HTMLElement': The provided value"
        });
      }
      esValue[implSymbol]["onwaiting"] = V;
    }

    get dataset() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get dataset' called on an object that is not a valid instance of HTMLElement.");
      }

      return utils.getSameObject(this, "dataset", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["dataset"]);
      });
    }

    get nonce() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get nonce' called on an object that is not a valid instance of HTMLElement.");
      }

      const value = esValue[implSymbol].getAttributeNS(null, "nonce");
      return value === null ? "" : value;
    }

    set nonce(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set nonce' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'nonce' property on 'HTMLElement': The provided value"
      });

      esValue[implSymbol].setAttributeNS(null, "nonce", V);
    }

    get tabIndex() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'get tabIndex' called on an object that is not a valid instance of HTMLElement.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol]["tabIndex"];
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    set tabIndex(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new TypeError("'set tabIndex' called on an object that is not a valid instance of HTMLElement.");
      }

      V = conversions["long"](V, {
        context: "Failed to set the 'tabIndex' property on 'HTMLElement': The provided value"
      });

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        esValue[implSymbol]["tabIndex"] = V;
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(HTMLElement.prototype, {
    click: { enumerable: true },
    focus: { enumerable: true },
    blur: { enumerable: true },
    title: { enumerable: true },
    lang: { enumerable: true },
    translate: { enumerable: true },
    dir: { enumerable: true },
    hidden: { enumerable: true },
    accessKey: { enumerable: true },
    draggable: { enumerable: true },
    offsetParent: { enumerable: true },
    offsetTop: { enumerable: true },
    offsetLeft: { enumerable: true },
    offsetWidth: { enumerable: true },
    offsetHeight: { enumerable: true },
    style: { enumerable: true },
    onabort: { enumerable: true },
    onauxclick: { enumerable: true },
    onblur: { enumerable: true },
    oncancel: { enumerable: true },
    oncanplay: { enumerable: true },
    oncanplaythrough: { enumerable: true },
    onchange: { enumerable: true },
    onclick: { enumerable: true },
    onclose: { enumerable: true },
    oncontextmenu: { enumerable: true },
    oncuechange: { enumerable: true },
    ondblclick: { enumerable: true },
    ondrag: { enumerable: true },
    ondragend: { enumerable: true },
    ondragenter: { enumerable: true },
    ondragleave: { enumerable: true },
    ondragover: { enumerable: true },
    ondragstart: { enumerable: true },
    ondrop: { enumerable: true },
    ondurationchange: { enumerable: true },
    onemptied: { enumerable: true },
    onended: { enumerable: true },
    onerror: { enumerable: true },
    onfocus: { enumerable: true },
    oninput: { enumerable: true },
    oninvalid: { enumerable: true },
    onkeydown: { enumerable: true },
    onkeypress: { enumerable: true },
    onkeyup: { enumerable: true },
    onload: { enumerable: true },
    onloadeddata: { enumerable: true },
    onloadedmetadata: { enumerable: true },
    onloadend: { enumerable: true },
    onloadstart: { enumerable: true },
    onmousedown: { enumerable: true },
    onmouseenter: { enumerable: true },
    onmouseleave: { enumerable: true },
    onmousemove: { enumerable: true },
    onmouseout: { enumerable: true },
    onmouseover: { enumerable: true },
    onmouseup: { enumerable: true },
    onwheel: { enumerable: true },
    onpause: { enumerable: true },
    onplay: { enumerable: true },
    onplaying: { enumerable: true },
    onprogress: { enumerable: true },
    onratechange: { enumerable: true },
    onreset: { enumerable: true },
    onresize: { enumerable: true },
    onscroll: { enumerable: true },
    onsecuritypolicyviolation: { enumerable: true },
    onseeked: { enumerable: true },
    onseeking: { enumerable: true },
    onselect: { enumerable: true },
    onstalled: { enumerable: true },
    onsubmit: { enumerable: true },
    onsuspend: { enumerable: true },
    ontimeupdate: { enumerable: true },
    ontoggle: { enumerable: true },
    onvolumechange: { enumerable: true },
    onwaiting: { enumerable: true },
    dataset: { enumerable: true },
    nonce: { enumerable: true },
    tabIndex: { enumerable: true },
    [Symbol.toStringTag]: { value: "HTMLElement", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = HTMLElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: HTMLElement
  });
};

const Impl = require("../nodes/HTMLElement-impl.js");
