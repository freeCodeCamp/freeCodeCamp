"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Node = require("./Node.js");
const ceReactionsPreSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPreSteps;
const ceReactionsPostSteps_helpers_custom_elements = require("../helpers/custom-elements.js").ceReactionsPostSteps;
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;

const interfaceName = "CharacterData";

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
  throw new globalObject.TypeError(`${context} is not of type 'CharacterData'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["CharacterData"].prototype;
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
  Node._internalSetup(wrapper, globalObject);
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
  class CharacterData extends globalObject.Node {
    constructor() {
      throw new globalObject.TypeError("Illegal constructor");
    }

    substringData(offset, count) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'substringData' called on an object that is not a valid instance of CharacterData."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'substringData' on 'CharacterData': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'substringData' on 'CharacterData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'substringData' on 'CharacterData': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].substringData(...args);
    }

    appendData(data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'appendData' called on an object that is not a valid instance of CharacterData."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'appendData' on 'CharacterData': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'appendData' on 'CharacterData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].appendData(...args);
    }

    insertData(offset, data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'insertData' called on an object that is not a valid instance of CharacterData."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'insertData' on 'CharacterData': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'insertData' on 'CharacterData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'insertData' on 'CharacterData': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].insertData(...args);
    }

    deleteData(offset, count) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'deleteData' called on an object that is not a valid instance of CharacterData."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'deleteData' on 'CharacterData': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'deleteData' on 'CharacterData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'deleteData' on 'CharacterData': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].deleteData(...args);
    }

    replaceData(offset, count, data) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'replaceData' called on an object that is not a valid instance of CharacterData."
        );
      }

      if (arguments.length < 3) {
        throw new globalObject.TypeError(
          `Failed to execute 'replaceData' on 'CharacterData': 3 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'replaceData' on 'CharacterData': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'replaceData' on 'CharacterData': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'replaceData' on 'CharacterData': parameter 3",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].replaceData(...args);
    }

    before() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'before' called on an object that is not a valid instance of CharacterData.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'before' on 'CharacterData': parameter " + (i + 1),
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].before(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    after() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'after' called on an object that is not a valid instance of CharacterData.");
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'after' on 'CharacterData': parameter " + (i + 1),
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].after(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    replaceWith() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'replaceWith' called on an object that is not a valid instance of CharacterData."
        );
      }
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        let curArg = arguments[i];
        if (Node.is(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'replaceWith' on 'CharacterData': parameter " + (i + 1),
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].replaceWith(...args);
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    remove() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'remove' called on an object that is not a valid instance of CharacterData.");
      }

      ceReactionsPreSteps_helpers_custom_elements(globalObject);
      try {
        return esValue[implSymbol].remove();
      } finally {
        ceReactionsPostSteps_helpers_custom_elements(globalObject);
      }
    }

    get data() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get data' called on an object that is not a valid instance of CharacterData."
        );
      }

      return esValue[implSymbol]["data"];
    }

    set data(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set data' called on an object that is not a valid instance of CharacterData."
        );
      }

      V = conversions["DOMString"](V, {
        context: "Failed to set the 'data' property on 'CharacterData': The provided value",
        globals: globalObject,
        treatNullAsEmptyString: true
      });

      esValue[implSymbol]["data"] = V;
    }

    get length() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get length' called on an object that is not a valid instance of CharacterData."
        );
      }

      return esValue[implSymbol]["length"];
    }

    get previousElementSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get previousElementSibling' called on an object that is not a valid instance of CharacterData."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["previousElementSibling"]);
    }

    get nextElementSibling() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get nextElementSibling' called on an object that is not a valid instance of CharacterData."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["nextElementSibling"]);
    }
  }
  Object.defineProperties(CharacterData.prototype, {
    substringData: { enumerable: true },
    appendData: { enumerable: true },
    insertData: { enumerable: true },
    deleteData: { enumerable: true },
    replaceData: { enumerable: true },
    before: { enumerable: true },
    after: { enumerable: true },
    replaceWith: { enumerable: true },
    remove: { enumerable: true },
    data: { enumerable: true },
    length: { enumerable: true },
    previousElementSibling: { enumerable: true },
    nextElementSibling: { enumerable: true },
    [Symbol.toStringTag]: { value: "CharacterData", configurable: true },
    [Symbol.unscopables]: {
      value: { before: true, after: true, replaceWith: true, remove: true, __proto__: null },
      configurable: true
    }
  });
  ctorRegistry[interfaceName] = CharacterData;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: CharacterData
  });
};

const Impl = require("../nodes/CharacterData-impl.js");
