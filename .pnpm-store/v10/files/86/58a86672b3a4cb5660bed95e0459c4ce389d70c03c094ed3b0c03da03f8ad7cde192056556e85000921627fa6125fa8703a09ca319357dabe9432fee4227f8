"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

exports.convert = function convert(value, { context = "The provided value" } = {}) {
  if (!utils.isObject(value)) {
    throw new TypeError(`${context} is not an object.`);
  }

  function callTheUserObjectsOperation(node) {
    let thisArg = utils.tryWrapperForImpl(this);
    let O = value;
    let X = O;

    if (typeof O !== "function") {
      X = O["acceptNode"];
      if (typeof X !== "function") {
        throw new TypeError(`${context} does not correctly implement NodeFilter.`);
      }
      thisArg = O;
    }

    node = utils.tryWrapperForImpl(node);

    let callResult = Reflect.apply(X, thisArg, [node]);

    callResult = conversions["unsigned short"](callResult, { context: context });

    return callResult;
  }

  callTheUserObjectsOperation[utils.wrapperSymbol] = value;
  callTheUserObjectsOperation.objectReference = value;

  return callTheUserObjectsOperation;
};

const exposed = new Set(["Window"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const NodeFilter = () => {
    throw new TypeError("Illegal invocation");
  };

  Object.defineProperties(NodeFilter, {
    FILTER_ACCEPT: { value: 1, enumerable: true },
    FILTER_REJECT: { value: 2, enumerable: true },
    FILTER_SKIP: { value: 3, enumerable: true },
    SHOW_ALL: { value: 0xffffffff, enumerable: true },
    SHOW_ELEMENT: { value: 0x1, enumerable: true },
    SHOW_ATTRIBUTE: { value: 0x2, enumerable: true },
    SHOW_TEXT: { value: 0x4, enumerable: true },
    SHOW_CDATA_SECTION: { value: 0x8, enumerable: true },
    SHOW_ENTITY_REFERENCE: { value: 0x10, enumerable: true },
    SHOW_ENTITY: { value: 0x20, enumerable: true },
    SHOW_PROCESSING_INSTRUCTION: { value: 0x40, enumerable: true },
    SHOW_COMMENT: { value: 0x80, enumerable: true },
    SHOW_DOCUMENT: { value: 0x100, enumerable: true },
    SHOW_DOCUMENT_TYPE: { value: 0x200, enumerable: true },
    SHOW_DOCUMENT_FRAGMENT: { value: 0x400, enumerable: true },
    SHOW_NOTATION: { value: 0x800, enumerable: true }
  });

  Object.defineProperty(globalObject, "NodeFilter", {
    configurable: true,
    writable: true,
    value: NodeFilter
  });
};
