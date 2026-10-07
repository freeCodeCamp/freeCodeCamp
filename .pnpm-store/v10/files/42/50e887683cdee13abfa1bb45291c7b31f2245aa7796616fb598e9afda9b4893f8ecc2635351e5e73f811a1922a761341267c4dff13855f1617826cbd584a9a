"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const CustomElementConstructor = require("./CustomElementConstructor.js");
const ElementDefinitionOptions = require("./ElementDefinitionOptions.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const Node = require("./Node.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "CustomElementRegistry";

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
  throw new globalObject.TypeError(`${context} is not of type 'CustomElementRegistry'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["CustomElementRegistry"].prototype;
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

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class CustomElementRegistry {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    define(name, constructor) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'define' called on an object that is not a valid instance of CustomElementRegistry."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'define' on 'CustomElementRegistry': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'define' on 'CustomElementRegistry': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = CustomElementConstructor.convert(globalObject, curArg, {
          context: "Failed to execute 'define' on 'CustomElementRegistry': parameter 2"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = ElementDefinitionOptions.convert(globalObject, curArg, {
          context: "Failed to execute 'define' on 'CustomElementRegistry': parameter 3"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].define(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get' called on an object that is not a valid instance of CustomElementRegistry."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'get' on 'CustomElementRegistry': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'get' on 'CustomElementRegistry': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].get(...args);
    }

    whenDefined(name) {
      try {
        const esValue = this !== null && this !== undefined ? this : globalObject;
        if (!exports.is(esValue)) {
          throw new globalObject.TypeError(
            "'whenDefined' called on an object that is not a valid instance of CustomElementRegistry."
          );
        }

        if (arguments.length < 1) {
          throw new globalObject.TypeError(
            `Failed to execute 'whenDefined' on 'CustomElementRegistry': 1 argument required, but only ${arguments.length} present.`
          );
        }
        const args = [];
        {
          let curArg = arguments[0];
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'whenDefined' on 'CustomElementRegistry': parameter 1",
            globals: globalObject
          });
          args.push(curArg);
        }
        return utils.tryWrapperForImpl(esValue[implSymbol].whenDefined(...args));
      } catch (e) {
        return globalObject.Promise.reject(e);
      }
    }

    upgrade(root) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'upgrade' called on an object that is not a valid instance of CustomElementRegistry."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'upgrade' on 'CustomElementRegistry': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Node.convert(globalObject, curArg, {
          context: "Failed to execute 'upgrade' on 'CustomElementRegistry': parameter 1"
        });
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].upgrade(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }
  }
  Object.defineProperties(CustomElementRegistry.prototype, {
    define: { enumerable: true },
    get: { enumerable: true },
    whenDefined: { enumerable: true },
    upgrade: { enumerable: true },
    [Symbol.toStringTag]: { value: "CustomElementRegistry", configurable: true }
  });
  ctorRegistry[interfaceName] = CustomElementRegistry;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: CustomElementRegistry
  });
};

const Impl = require("../custom-elements/CustomElementRegistry-impl.js");
