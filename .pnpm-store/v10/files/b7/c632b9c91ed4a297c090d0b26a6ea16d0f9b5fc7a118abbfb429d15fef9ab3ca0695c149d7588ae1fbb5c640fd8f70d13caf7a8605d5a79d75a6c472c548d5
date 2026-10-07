"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "DOMException";

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
  throw new globalObject.TypeError(`${context} is not of type 'DOMException'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["DOMException"].prototype;
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

const exposed = new Set(["Window", "Worker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class DOMException {
    constructor() {
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to construct 'DOMException': parameter 1",
            globals: globalObject
          });
        } else {
          curArg = "";
        }
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to construct 'DOMException': parameter 2",
            globals: globalObject
          });
        } else {
          curArg = "Error";
        }
        args.push(curArg);
      }
      return exports.setup(Object.create(new.target.prototype), globalObject, args);
    }

    get name() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get name' called on an object that is not a valid instance of DOMException."
        );
      }

      return esValue[implSymbol]["name"];
    }

    get message() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get message' called on an object that is not a valid instance of DOMException."
        );
      }

      return esValue[implSymbol]["message"];
    }

    get code() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get code' called on an object that is not a valid instance of DOMException."
        );
      }

      return esValue[implSymbol]["code"];
    }
  }
  Object.defineProperties(DOMException.prototype, {
    name: { enumerable: true },
    message: { enumerable: true },
    code: { enumerable: true },
    [Symbol.toStringTag]: { value: "DOMException", configurable: true },
    INDEX_SIZE_ERR: { value: 1, enumerable: true },
    DOMSTRING_SIZE_ERR: { value: 2, enumerable: true },
    HIERARCHY_REQUEST_ERR: { value: 3, enumerable: true },
    WRONG_DOCUMENT_ERR: { value: 4, enumerable: true },
    INVALID_CHARACTER_ERR: { value: 5, enumerable: true },
    NO_DATA_ALLOWED_ERR: { value: 6, enumerable: true },
    NO_MODIFICATION_ALLOWED_ERR: { value: 7, enumerable: true },
    NOT_FOUND_ERR: { value: 8, enumerable: true },
    NOT_SUPPORTED_ERR: { value: 9, enumerable: true },
    INUSE_ATTRIBUTE_ERR: { value: 10, enumerable: true },
    INVALID_STATE_ERR: { value: 11, enumerable: true },
    SYNTAX_ERR: { value: 12, enumerable: true },
    INVALID_MODIFICATION_ERR: { value: 13, enumerable: true },
    NAMESPACE_ERR: { value: 14, enumerable: true },
    INVALID_ACCESS_ERR: { value: 15, enumerable: true },
    VALIDATION_ERR: { value: 16, enumerable: true },
    TYPE_MISMATCH_ERR: { value: 17, enumerable: true },
    SECURITY_ERR: { value: 18, enumerable: true },
    NETWORK_ERR: { value: 19, enumerable: true },
    ABORT_ERR: { value: 20, enumerable: true },
    URL_MISMATCH_ERR: { value: 21, enumerable: true },
    QUOTA_EXCEEDED_ERR: { value: 22, enumerable: true },
    TIMEOUT_ERR: { value: 23, enumerable: true },
    INVALID_NODE_TYPE_ERR: { value: 24, enumerable: true },
    DATA_CLONE_ERR: { value: 25, enumerable: true }
  });
  Object.defineProperties(DOMException, {
    INDEX_SIZE_ERR: { value: 1, enumerable: true },
    DOMSTRING_SIZE_ERR: { value: 2, enumerable: true },
    HIERARCHY_REQUEST_ERR: { value: 3, enumerable: true },
    WRONG_DOCUMENT_ERR: { value: 4, enumerable: true },
    INVALID_CHARACTER_ERR: { value: 5, enumerable: true },
    NO_DATA_ALLOWED_ERR: { value: 6, enumerable: true },
    NO_MODIFICATION_ALLOWED_ERR: { value: 7, enumerable: true },
    NOT_FOUND_ERR: { value: 8, enumerable: true },
    NOT_SUPPORTED_ERR: { value: 9, enumerable: true },
    INUSE_ATTRIBUTE_ERR: { value: 10, enumerable: true },
    INVALID_STATE_ERR: { value: 11, enumerable: true },
    SYNTAX_ERR: { value: 12, enumerable: true },
    INVALID_MODIFICATION_ERR: { value: 13, enumerable: true },
    NAMESPACE_ERR: { value: 14, enumerable: true },
    INVALID_ACCESS_ERR: { value: 15, enumerable: true },
    VALIDATION_ERR: { value: 16, enumerable: true },
    TYPE_MISMATCH_ERR: { value: 17, enumerable: true },
    SECURITY_ERR: { value: 18, enumerable: true },
    NETWORK_ERR: { value: 19, enumerable: true },
    ABORT_ERR: { value: 20, enumerable: true },
    URL_MISMATCH_ERR: { value: 21, enumerable: true },
    QUOTA_EXCEEDED_ERR: { value: 22, enumerable: true },
    TIMEOUT_ERR: { value: 23, enumerable: true },
    INVALID_NODE_TYPE_ERR: { value: 24, enumerable: true },
    DATA_CLONE_ERR: { value: 25, enumerable: true }
  });
  ctorRegistry[interfaceName] = DOMException;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: DOMException
  });
};

const Impl = require("../webidl/DOMException-impl.js");
