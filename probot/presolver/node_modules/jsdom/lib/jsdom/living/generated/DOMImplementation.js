"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertDocumentType = require("./DocumentType.js").convert;
const impl = utils.implSymbol;

function DOMImplementation() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(DOMImplementation, "prototype", {
  value: DOMImplementation.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

DOMImplementation.prototype.createDocumentType = function createDocumentType(qualifiedName, publicId, systemId) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 3) {
    throw new TypeError(
      "Failed to execute 'createDocumentType' on 'DOMImplementation': 3 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createDocumentType' on 'DOMImplementation': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createDocumentType' on 'DOMImplementation': parameter 2"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createDocumentType' on 'DOMImplementation': parameter 3"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createDocumentType(...args));
};

DOMImplementation.prototype.createDocument = function createDocument(namespace, qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'createDocument' on 'DOMImplementation': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'createDocument' on 'DOMImplementation': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createDocument' on 'DOMImplementation': parameter 2",
      treatNullAsEmptyString: true
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    if (curArg !== undefined) {
      if (curArg === null || curArg === undefined) {
        curArg = null;
      } else {
        curArg = convertDocumentType(curArg, {
          context: "Failed to execute 'createDocument' on 'DOMImplementation': parameter 3"
        });
      }
    } else {
      curArg = null;
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createDocument(...args));
};

DOMImplementation.prototype.createHTMLDocument = function createHTMLDocument() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg !== undefined) {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'createHTMLDocument' on 'DOMImplementation': parameter 1"
      });
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createHTMLDocument(...args));
};

DOMImplementation.prototype.hasFeature = function hasFeature() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].hasFeature();
};

Object.defineProperty(DOMImplementation.prototype, Symbol.toStringTag, {
  value: "DOMImplementation",
  writable: false,
  enumerable: false,
  configurable: true
});

const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'DOMImplementation'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(DOMImplementation.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(DOMImplementation.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      writable: false,
      enumerable: false,
      configurable: true
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: DOMImplementation,
  expose: {
    Window: { DOMImplementation }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/DOMImplementation-impl.js");
