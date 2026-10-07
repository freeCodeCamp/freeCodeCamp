"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const create_SVGAnimatedRect = require("./SVGAnimatedRect.js").create;
const create_SVGAnimatedPreserveAspectRatio = require("./SVGAnimatedPreserveAspectRatio.js").create;
const EventHandlerNonNull = require("./EventHandlerNonNull.js");
const OnBeforeUnloadEventHandlerNonNull = require("./OnBeforeUnloadEventHandlerNonNull.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const SVGGraphicsElement = require("./SVGGraphicsElement.js");

const interfaceName = "SVGSVGElement";

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
  throw new globalObject.TypeError(`${context} is not of type 'SVGSVGElement'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["SVGSVGElement"].prototype;
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
  SVGGraphicsElement._internalSetup(wrapper, globalObject);
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
  class SVGSVGElement extends globalObject.SVGGraphicsElement {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    createSVGNumber() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'createSVGNumber' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].createSVGNumber());
    }

    createSVGRect() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'createSVGRect' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol].createSVGRect());
    }

    getElementById(elementId) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getElementById' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getElementById' on 'SVGSVGElement': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'getElementById' on 'SVGSVGElement': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].getElementById(...args));
    }

    suspendRedraw(maxWaitMilliseconds) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'suspendRedraw' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'suspendRedraw' on 'SVGSVGElement': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'suspendRedraw' on 'SVGSVGElement': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].suspendRedraw(...args);
    }

    unsuspendRedraw(suspendHandleID) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'unsuspendRedraw' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'unsuspendRedraw' on 'SVGSVGElement': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'unsuspendRedraw' on 'SVGSVGElement': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].unsuspendRedraw(...args);
    }

    unsuspendRedrawAll() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'unsuspendRedrawAll' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return esValue[implSymbol].unsuspendRedrawAll();
    }

    forceRedraw() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'forceRedraw' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return esValue[implSymbol].forceRedraw();
    }

    get viewBox() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get viewBox' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.getSameObject(this, "viewBox", () => {
        return create_SVGAnimatedRect(globalObject, [], {
          element: esValue[implSymbol],
          attribute: "viewBox"
        });
      });
    }

    get preserveAspectRatio() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get preserveAspectRatio' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.getSameObject(this, "preserveAspectRatio", () => {
        return create_SVGAnimatedPreserveAspectRatio(globalObject, [], {
          element: esValue[implSymbol]
        });
      });
    }

    get onafterprint() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onafterprint' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onafterprint"]);
    }

    set onafterprint(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onafterprint' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onafterprint' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onafterprint"] = V;
    }

    get onbeforeprint() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onbeforeprint' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onbeforeprint"]);
    }

    set onbeforeprint(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onbeforeprint' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onbeforeprint' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onbeforeprint"] = V;
    }

    get onbeforeunload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onbeforeunload' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onbeforeunload"]);
    }

    set onbeforeunload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onbeforeunload' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = OnBeforeUnloadEventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onbeforeunload' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onbeforeunload"] = V;
    }

    get onhashchange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onhashchange' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onhashchange"]);
    }

    set onhashchange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onhashchange' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onhashchange' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onhashchange"] = V;
    }

    get onlanguagechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onlanguagechange' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onlanguagechange"]);
    }

    set onlanguagechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onlanguagechange' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onlanguagechange' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onlanguagechange"] = V;
    }

    get onmessage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onmessage' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmessage"]);
    }

    set onmessage(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onmessage' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onmessage' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onmessage"] = V;
    }

    get onmessageerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onmessageerror' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onmessageerror"]);
    }

    set onmessageerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onmessageerror' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onmessageerror' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onmessageerror"] = V;
    }

    get onoffline() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onoffline' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onoffline"]);
    }

    set onoffline(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onoffline' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onoffline' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onoffline"] = V;
    }

    get ononline() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get ononline' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["ononline"]);
    }

    set ononline(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set ononline' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'ononline' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["ononline"] = V;
    }

    get onpagehide() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onpagehide' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpagehide"]);
    }

    set onpagehide(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onpagehide' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onpagehide' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onpagehide"] = V;
    }

    get onpageshow() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onpageshow' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpageshow"]);
    }

    set onpageshow(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onpageshow' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onpageshow' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onpageshow"] = V;
    }

    get onpopstate() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onpopstate' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onpopstate"]);
    }

    set onpopstate(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onpopstate' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onpopstate' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onpopstate"] = V;
    }

    get onrejectionhandled() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onrejectionhandled' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onrejectionhandled"]);
    }

    set onrejectionhandled(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onrejectionhandled' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onrejectionhandled' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onrejectionhandled"] = V;
    }

    get onstorage() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onstorage' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onstorage"]);
    }

    set onstorage(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onstorage' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onstorage' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onstorage"] = V;
    }

    get onunhandledrejection() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onunhandledrejection' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onunhandledrejection"]);
    }

    set onunhandledrejection(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onunhandledrejection' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onunhandledrejection' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onunhandledrejection"] = V;
    }

    get onunload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onunload' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onunload"]);
    }

    set onunload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onunload' called on an object that is not a valid instance of SVGSVGElement."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onunload' property on 'SVGSVGElement': The provided value"
        });
      }
      esValue[implSymbol]["onunload"] = V;
    }
  }
  Object.defineProperties(SVGSVGElement.prototype, {
    createSVGNumber: { enumerable: true },
    createSVGRect: { enumerable: true },
    getElementById: { enumerable: true },
    suspendRedraw: { enumerable: true },
    unsuspendRedraw: { enumerable: true },
    unsuspendRedrawAll: { enumerable: true },
    forceRedraw: { enumerable: true },
    viewBox: { enumerable: true },
    preserveAspectRatio: { enumerable: true },
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
    [Symbol.toStringTag]: { value: "SVGSVGElement", configurable: true }
  });
  ctorRegistry[interfaceName] = SVGSVGElement;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: SVGSVGElement
  });
};

const Impl = require("../nodes/SVGSVGElement-impl.js");
