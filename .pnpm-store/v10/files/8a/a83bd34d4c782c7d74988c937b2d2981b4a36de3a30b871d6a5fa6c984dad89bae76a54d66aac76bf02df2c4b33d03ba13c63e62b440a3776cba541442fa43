"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Blob = require("./Blob.js");
const EventHandlerNonNull = require("./EventHandlerNonNull.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const EventTarget = require("./EventTarget.js");

const interfaceName = "FileReader";

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
  throw new globalObject.TypeError(`${context} is not of type 'FileReader'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["FileReader"].prototype;
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
  EventTarget._internalSetup(wrapper, globalObject);
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

const exposed = new Set(["Window", "Worker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class FileReader extends globalObject.EventTarget {
    constructor() {
      return exports.setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    readAsArrayBuffer(blob) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'readAsArrayBuffer' called on an object that is not a valid instance of FileReader."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'readAsArrayBuffer' on 'FileReader': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Blob.convert(globalObject, curArg, {
          context: "Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].readAsArrayBuffer(...args);
    }

    readAsBinaryString(blob) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'readAsBinaryString' called on an object that is not a valid instance of FileReader."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'readAsBinaryString' on 'FileReader': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Blob.convert(globalObject, curArg, {
          context: "Failed to execute 'readAsBinaryString' on 'FileReader': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].readAsBinaryString(...args);
    }

    readAsText(blob) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'readAsText' called on an object that is not a valid instance of FileReader."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'readAsText' on 'FileReader': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Blob.convert(globalObject, curArg, {
          context: "Failed to execute 'readAsText' on 'FileReader': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        if (curArg !== undefined) {
          curArg = conversions["DOMString"](curArg, {
            context: "Failed to execute 'readAsText' on 'FileReader': parameter 2",
            globals: globalObject
          });
        }
        args.push(curArg);
      }
      return esValue[implSymbol].readAsText(...args);
    }

    readAsDataURL(blob) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'readAsDataURL' called on an object that is not a valid instance of FileReader."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'readAsDataURL' on 'FileReader': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = Blob.convert(globalObject, curArg, {
          context: "Failed to execute 'readAsDataURL' on 'FileReader': parameter 1"
        });
        args.push(curArg);
      }
      return esValue[implSymbol].readAsDataURL(...args);
    }

    abort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'abort' called on an object that is not a valid instance of FileReader.");
      }

      return esValue[implSymbol].abort();
    }

    get readyState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get readyState' called on an object that is not a valid instance of FileReader."
        );
      }

      return esValue[implSymbol]["readyState"];
    }

    get result() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get result' called on an object that is not a valid instance of FileReader."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["result"]);
    }

    get error() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'get error' called on an object that is not a valid instance of FileReader.");
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["error"]);
    }

    get onloadstart() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onloadstart' called on an object that is not a valid instance of FileReader."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadstart"]);
    }

    set onloadstart(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onloadstart' called on an object that is not a valid instance of FileReader."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onloadstart' property on 'FileReader': The provided value"
        });
      }
      esValue[implSymbol]["onloadstart"] = V;
    }

    get onprogress() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onprogress' called on an object that is not a valid instance of FileReader."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onprogress"]);
    }

    set onprogress(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onprogress' called on an object that is not a valid instance of FileReader."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onprogress' property on 'FileReader': The provided value"
        });
      }
      esValue[implSymbol]["onprogress"] = V;
    }

    get onload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onload' called on an object that is not a valid instance of FileReader."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onload"]);
    }

    set onload(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onload' called on an object that is not a valid instance of FileReader."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onload' property on 'FileReader': The provided value"
        });
      }
      esValue[implSymbol]["onload"] = V;
    }

    get onabort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onabort' called on an object that is not a valid instance of FileReader."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onabort"]);
    }

    set onabort(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onabort' called on an object that is not a valid instance of FileReader."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onabort' property on 'FileReader': The provided value"
        });
      }
      esValue[implSymbol]["onabort"] = V;
    }

    get onerror() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onerror' called on an object that is not a valid instance of FileReader."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onerror"]);
    }

    set onerror(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onerror' called on an object that is not a valid instance of FileReader."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onerror' property on 'FileReader': The provided value"
        });
      }
      esValue[implSymbol]["onerror"] = V;
    }

    get onloadend() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onloadend' called on an object that is not a valid instance of FileReader."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onloadend"]);
    }

    set onloadend(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onloadend' called on an object that is not a valid instance of FileReader."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onloadend' property on 'FileReader': The provided value"
        });
      }
      esValue[implSymbol]["onloadend"] = V;
    }
  }
  Object.defineProperties(FileReader.prototype, {
    readAsArrayBuffer: { enumerable: true },
    readAsBinaryString: { enumerable: true },
    readAsText: { enumerable: true },
    readAsDataURL: { enumerable: true },
    abort: { enumerable: true },
    readyState: { enumerable: true },
    result: { enumerable: true },
    error: { enumerable: true },
    onloadstart: { enumerable: true },
    onprogress: { enumerable: true },
    onload: { enumerable: true },
    onabort: { enumerable: true },
    onerror: { enumerable: true },
    onloadend: { enumerable: true },
    [Symbol.toStringTag]: { value: "FileReader", configurable: true },
    EMPTY: { value: 0, enumerable: true },
    LOADING: { value: 1, enumerable: true },
    DONE: { value: 2, enumerable: true }
  });
  Object.defineProperties(FileReader, {
    EMPTY: { value: 0, enumerable: true },
    LOADING: { value: 1, enumerable: true },
    DONE: { value: 2, enumerable: true }
  });
  ctorRegistry[interfaceName] = FileReader;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: FileReader
  });
};

const Impl = require("../file-api/FileReader-impl.js");
