"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const Document = require("./Document.js");
const Blob = require("./Blob.js");
const FormData = require("./FormData.js");
const EventHandlerNonNull = require("./EventHandlerNonNull.js");
const XMLHttpRequestResponseType = require("./XMLHttpRequestResponseType.js");
const implSymbol = utils.implSymbol;
const ctorRegistrySymbol = utils.ctorRegistrySymbol;
const XMLHttpRequestEventTarget = require("./XMLHttpRequestEventTarget.js");

const interfaceName = "XMLHttpRequest";

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
  throw new globalObject.TypeError(`${context} is not of type 'XMLHttpRequest'.`);
};

function makeWrapper(globalObject, newTarget) {
  let proto;
  if (newTarget !== undefined) {
    proto = newTarget.prototype;
  }

  if (!utils.isObject(proto)) {
    proto = globalObject[ctorRegistrySymbol]["XMLHttpRequest"].prototype;
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
  XMLHttpRequestEventTarget._internalSetup(wrapper, globalObject);
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

const exposed = new Set(["Window", "DedicatedWorker", "SharedWorker"]);

exports.install = (globalObject, globalNames) => {
  if (!globalNames.some(globalName => exposed.has(globalName))) {
    return;
  }

  const ctorRegistry = utils.initCtorRegistry(globalObject);
  class XMLHttpRequest extends globalObject.XMLHttpRequestEventTarget {
    constructor() {
      return exports.setup(Object.create(new.target.prototype), globalObject, undefined);
    }

    open(method, url) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'open' called on an object that is not a valid instance of XMLHttpRequest.");
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'open' on 'XMLHttpRequest': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      switch (arguments.length) {
        case 2:
          {
            let curArg = arguments[0];
            curArg = conversions["ByteString"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 2",
              globals: globalObject
            });
            args.push(curArg);
          }
          break;
        case 3:
          {
            let curArg = arguments[0];
            curArg = conversions["ByteString"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 2",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            curArg = conversions["boolean"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 3",
              globals: globalObject
            });
            args.push(curArg);
          }
          break;
        case 4:
          {
            let curArg = arguments[0];
            curArg = conversions["ByteString"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 2",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            curArg = conversions["boolean"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 3",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[3];
            if (curArg !== undefined) {
              if (curArg === null || curArg === undefined) {
                curArg = null;
              } else {
                curArg = conversions["USVString"](curArg, {
                  context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 4",
                  globals: globalObject
                });
              }
            } else {
              curArg = null;
            }
            args.push(curArg);
          }
          break;
        default:
          {
            let curArg = arguments[0];
            curArg = conversions["ByteString"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 1",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[1];
            curArg = conversions["USVString"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 2",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[2];
            curArg = conversions["boolean"](curArg, {
              context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 3",
              globals: globalObject
            });
            args.push(curArg);
          }
          {
            let curArg = arguments[3];
            if (curArg !== undefined) {
              if (curArg === null || curArg === undefined) {
                curArg = null;
              } else {
                curArg = conversions["USVString"](curArg, {
                  context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 4",
                  globals: globalObject
                });
              }
            } else {
              curArg = null;
            }
            args.push(curArg);
          }
          {
            let curArg = arguments[4];
            if (curArg !== undefined) {
              if (curArg === null || curArg === undefined) {
                curArg = null;
              } else {
                curArg = conversions["USVString"](curArg, {
                  context: "Failed to execute 'open' on 'XMLHttpRequest': parameter 5",
                  globals: globalObject
                });
              }
            } else {
              curArg = null;
            }
            args.push(curArg);
          }
      }
      return esValue[implSymbol].open(...args);
    }

    setRequestHeader(name, value) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'setRequestHeader' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      if (arguments.length < 2) {
        throw new globalObject.TypeError(
          `Failed to execute 'setRequestHeader' on 'XMLHttpRequest': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["ByteString"](curArg, {
          context: "Failed to execute 'setRequestHeader' on 'XMLHttpRequest': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["ByteString"](curArg, {
          context: "Failed to execute 'setRequestHeader' on 'XMLHttpRequest': parameter 2",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].setRequestHeader(...args);
    }

    send() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'send' called on an object that is not a valid instance of XMLHttpRequest.");
      }
      const args = [];
      {
        let curArg = arguments[0];
        if (curArg !== undefined) {
          if (curArg === null || curArg === undefined) {
            curArg = null;
          } else {
            if (Document.is(curArg) || Blob.is(curArg) || FormData.is(curArg)) {
              curArg = utils.implForWrapper(curArg);
            } else if (utils.isArrayBuffer(curArg)) {
            } else if (ArrayBuffer.isView(curArg)) {
            } else {
              curArg = conversions["USVString"](curArg, {
                context: "Failed to execute 'send' on 'XMLHttpRequest': parameter 1",
                globals: globalObject
              });
            }
          }
        } else {
          curArg = null;
        }
        args.push(curArg);
      }
      return esValue[implSymbol].send(...args);
    }

    abort() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError("'abort' called on an object that is not a valid instance of XMLHttpRequest.");
      }

      return esValue[implSymbol].abort();
    }

    getResponseHeader(name) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getResponseHeader' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'getResponseHeader' on 'XMLHttpRequest': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["ByteString"](curArg, {
          context: "Failed to execute 'getResponseHeader' on 'XMLHttpRequest': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].getResponseHeader(...args);
    }

    getAllResponseHeaders() {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'getAllResponseHeaders' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol].getAllResponseHeaders();
    }

    overrideMimeType(mime) {
      const esValue = this !== null && this !== undefined ? this : globalObject;
      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'overrideMimeType' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      if (arguments.length < 1) {
        throw new globalObject.TypeError(
          `Failed to execute 'overrideMimeType' on 'XMLHttpRequest': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const args = [];
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'overrideMimeType' on 'XMLHttpRequest': parameter 1",
          globals: globalObject
        });
        args.push(curArg);
      }
      return esValue[implSymbol].overrideMimeType(...args);
    }

    get onreadystatechange() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get onreadystatechange' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["onreadystatechange"]);
    }

    set onreadystatechange(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set onreadystatechange' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      if (!utils.isObject(V)) {
        V = null;
      } else {
        V = EventHandlerNonNull.convert(globalObject, V, {
          context: "Failed to set the 'onreadystatechange' property on 'XMLHttpRequest': The provided value"
        });
      }
      esValue[implSymbol]["onreadystatechange"] = V;
    }

    get readyState() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get readyState' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol]["readyState"];
    }

    get timeout() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get timeout' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol]["timeout"];
    }

    set timeout(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set timeout' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'timeout' property on 'XMLHttpRequest': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["timeout"] = V;
    }

    get withCredentials() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get withCredentials' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol]["withCredentials"];
    }

    set withCredentials(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set withCredentials' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      V = conversions["boolean"](V, {
        context: "Failed to set the 'withCredentials' property on 'XMLHttpRequest': The provided value",
        globals: globalObject
      });

      esValue[implSymbol]["withCredentials"] = V;
    }

    get upload() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get upload' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return utils.getSameObject(this, "upload", () => {
        return utils.tryWrapperForImpl(esValue[implSymbol]["upload"]);
      });
    }

    get responseURL() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get responseURL' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol]["responseURL"];
    }

    get status() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get status' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol]["status"];
    }

    get statusText() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get statusText' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol]["statusText"];
    }

    get responseType() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get responseType' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["responseType"]);
    }

    set responseType(V) {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'set responseType' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      V = `${V}`;
      if (!XMLHttpRequestResponseType.enumerationValues.has(V)) {
        return;
      }

      esValue[implSymbol]["responseType"] = V;
    }

    get response() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get response' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol]["response"];
    }

    get responseText() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get responseText' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return esValue[implSymbol]["responseText"];
    }

    get responseXML() {
      const esValue = this !== null && this !== undefined ? this : globalObject;

      if (!exports.is(esValue)) {
        throw new globalObject.TypeError(
          "'get responseXML' called on an object that is not a valid instance of XMLHttpRequest."
        );
      }

      return utils.tryWrapperForImpl(esValue[implSymbol]["responseXML"]);
    }
  }
  Object.defineProperties(XMLHttpRequest.prototype, {
    open: { enumerable: true },
    setRequestHeader: { enumerable: true },
    send: { enumerable: true },
    abort: { enumerable: true },
    getResponseHeader: { enumerable: true },
    getAllResponseHeaders: { enumerable: true },
    overrideMimeType: { enumerable: true },
    onreadystatechange: { enumerable: true },
    readyState: { enumerable: true },
    timeout: { enumerable: true },
    withCredentials: { enumerable: true },
    upload: { enumerable: true },
    responseURL: { enumerable: true },
    status: { enumerable: true },
    statusText: { enumerable: true },
    responseType: { enumerable: true },
    response: { enumerable: true },
    responseText: { enumerable: true },
    responseXML: { enumerable: true },
    [Symbol.toStringTag]: { value: "XMLHttpRequest", configurable: true },
    UNSENT: { value: 0, enumerable: true },
    OPENED: { value: 1, enumerable: true },
    HEADERS_RECEIVED: { value: 2, enumerable: true },
    LOADING: { value: 3, enumerable: true },
    DONE: { value: 4, enumerable: true }
  });
  Object.defineProperties(XMLHttpRequest, {
    UNSENT: { value: 0, enumerable: true },
    OPENED: { value: 1, enumerable: true },
    HEADERS_RECEIVED: { value: 2, enumerable: true },
    LOADING: { value: 3, enumerable: true },
    DONE: { value: 4, enumerable: true }
  });
  ctorRegistry[interfaceName] = XMLHttpRequest;

  Object.defineProperty(globalObject, interfaceName, {
    configurable: true,
    writable: true,
    value: XMLHttpRequest
  });
};

const Impl = require("../xhr/XMLHttpRequest-impl.js");
