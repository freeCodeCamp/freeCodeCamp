"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const DocumentType = require("./DocumentType.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "DOMImplementation";

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
  throw new TypeError(`${context} is not of type 'DOMImplementation'.`);
};

function makeWrapper(globalObject) {
  if (globalObject[ctorRegistrySymbol] === undefined) {
    throw new Error("Internal error: invalid global object");
  }

  const ctor = globalObject[ctorRegistrySymbol]["DOMImplementation"];
  if (ctor === undefined) {
    throw new Error("Internal error: constructor DOMImplementation is not installed on the passed global object");
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

exports._internalSetup = (wrapper, globalObject) => {};

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
  class DOMImplementation {
    constructor() {
      throw new TypeError("Illegal constructor");
    }

    createDocumentType(qualifiedName, publicId, systemId) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError(
          "'createDocumentType' called on an object that is not a valid instance of DOMImplementation."
        );
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
      return utils.tryWrapperForImpl(esValue[implSymbol].createDocumentType(...args));
    }

    createDocument(namespace, qualifiedName) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'createDocument' called on an object that is not a valid instance of DOMImplementation.");
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
            curArg = DocumentType.convert(curArg, {
              context: "Failed to execute 'createDocument' on 'DOMImplementation': parameter 3"
            });
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      return utils.tryWrapperForImpl(esValue[implSymbol].createDocument(...args));
    }

    createHTMLDocument() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError(
          "'createHTMLDocument' called on an object that is not a valid instance of DOMImplementation."
        );
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
      return utils.tryWrapperForImpl(esValue[implSymbol].createHTMLDocument(...args));
    }

    hasFeature() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new TypeError("'hasFeature' called on an object that is not a valid instance of DOMImplementation.");
      }

      return esValue[implSymbol].hasFeature();
    }
  }
  Object.defineProperties(DOMImplementation.prototype, {
    createDocumentType: { enumerable: true },
    createDocument: { enumerable: true },
    createHTMLDocument: { enumerable: true },
    hasFeature: { enumerable: true },
    [Symbol.toStringTag]: { value: "DOMImplementation", configurable: true }
  });
  if (globalObject[ctorRegistrySymbol] === undefined) {
    globalObject[ctorRegistrySymbol] = Object.create(null);
  }
  globalObject[ctorRegistrySymbol][interfaceName] = DOMImplementation;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DOMImplementation
  });
};

const Impl = require("../nodes/DOMImplementation-impl.js");
