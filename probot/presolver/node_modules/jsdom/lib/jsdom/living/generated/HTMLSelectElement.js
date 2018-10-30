"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const isHTMLOptionElement = require("./HTMLOptionElement.js").is;
const isHTMLOptGroupElement = require("./HTMLOptGroupElement.js").is;
const isHTMLElement = require("./HTMLElement.js").is;
const convertHTMLOptionElement = require("./HTMLOptionElement.js").convert;
const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLSelectElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLSelectElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLSelectElement, HTMLElement.interface);

Object.defineProperty(HTMLSelectElement, "prototype", {
  value: HTMLSelectElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(HTMLSelectElement.prototype, Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
  value: Array.prototype[Symbol.iterator]
});

HTMLSelectElement.prototype.item = function item(index) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'item' on 'HTMLSelectElement': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'item' on 'HTMLSelectElement': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].item(...args));
};

HTMLSelectElement.prototype.namedItem = function namedItem(name) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'namedItem' on 'HTMLSelectElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'namedItem' on 'HTMLSelectElement': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].namedItem(...args));
};

HTMLSelectElement.prototype.add = function add(element) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'add' on 'HTMLSelectElement': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (isHTMLOptionElement(curArg) || isHTMLOptGroupElement(curArg)) {
      curArg = utils.implForWrapper(curArg);
    } else {
      throw new TypeError(
        "Failed to execute 'add' on 'HTMLSelectElement': parameter 1" + " is not of any supported type."
      );
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      if (curArg === null || curArg === undefined) {
        curArg = null;
      } else {
        if (isHTMLElement(curArg)) {
          curArg = utils.implForWrapper(curArg);
        } else if (typeof curArg === "number") {
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'add' on 'HTMLSelectElement': parameter 2"
          });
        } else {
          curArg = conversions["long"](curArg, {
            context: "Failed to execute 'add' on 'HTMLSelectElement': parameter 2"
          });
        }
      }
    } else {
      curArg = null;
    }
    args.push(curArg);
  }
  return this[impl].add(...args);
};

HTMLSelectElement.prototype.remove = function remove() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  switch (arguments.length) {
    case 0:
      break;
    default: {
      let curArg = arguments[0];
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'remove' on 'HTMLSelectElement': parameter 1"
      });
      args.push(curArg);
    }
  }
  return this[impl].remove(...args);
};

HTMLSelectElement.prototype.checkValidity = function checkValidity() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].checkValidity();
};

HTMLSelectElement.prototype.reportValidity = function reportValidity() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].reportValidity();
};

HTMLSelectElement.prototype.setCustomValidity = function setCustomValidity(error) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setCustomValidity' on 'HTMLSelectElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'setCustomValidity' on 'HTMLSelectElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].setCustomValidity(...args);
};

Object.defineProperty(HTMLSelectElement.prototype, "autofocus", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("autofocus");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'autofocus' property on 'HTMLSelectElement': The provided value"
    });

    if (V) {
      this.setAttribute("autofocus", "");
    } else {
      this.removeAttribute("autofocus");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "disabled", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("disabled");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'disabled' property on 'HTMLSelectElement': The provided value"
    });

    if (V) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "form", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["form"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "multiple", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("multiple");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'multiple' property on 'HTMLSelectElement': The provided value"
    });

    if (V) {
      this.setAttribute("multiple", "");
    } else {
      this.removeAttribute("multiple");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "name", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("name");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'name' property on 'HTMLSelectElement': The provided value"
    });

    this.setAttribute("name", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "required", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("required");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'required' property on 'HTMLSelectElement': The provided value"
    });

    if (V) {
      this.setAttribute("required", "");
    } else {
      this.removeAttribute("required");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "size", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = parseInt(this.getAttribute("size"));
    return isNaN(value) || value < 0 || value > 2147483647 ? 0 : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'size' property on 'HTMLSelectElement': The provided value"
    });

    this.setAttribute("size", String(V > 2147483647 ? 0 : V));
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "type", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["type"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "options", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "options", () => {
      return utils.tryWrapperForImpl(this[impl]["options"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "length", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["length"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'length' property on 'HTMLSelectElement': The provided value"
    });

    this[impl]["length"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "selectedOptions", () => {
      return utils.tryWrapperForImpl(this[impl]["selectedOptions"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "selectedIndex", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["selectedIndex"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["long"](V, {
      context: "Failed to set the 'selectedIndex' property on 'HTMLSelectElement': The provided value"
    });

    this[impl]["selectedIndex"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "value", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["value"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'value' property on 'HTMLSelectElement': The provided value"
    });

    this[impl]["value"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "willValidate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["willValidate"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "validity", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["validity"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "validationMessage", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["validationMessage"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, "labels", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["labels"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLSelectElement.prototype, Symbol.toStringTag, {
  value: "HTMLSelectElement",
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
    throw new TypeError(`${context} is not of type 'HTMLSelectElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLSelectElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLSelectElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    HTMLElement._internalSetup(obj);
  },
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

    obj = new Proxy(obj, {
      get(target, P, receiver) {
        if (typeof P === "symbol") {
          return Reflect.get(target, P, receiver);
        }
        const desc = this.getOwnPropertyDescriptor(target, P);
        if (desc === undefined) {
          const parent = Object.getPrototypeOf(target);
          if (parent === null) {
            return undefined;
          }
          return Reflect.get(target, P, receiver);
        }
        if (!desc.get && !desc.set) {
          return desc.value;
        }
        const getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return Reflect.apply(getter, receiver, []);
      },

      has(target, P) {
        if (typeof P === "symbol") {
          return Reflect.has(target, P);
        }
        const desc = this.getOwnPropertyDescriptor(target, P);
        if (desc !== undefined) {
          return true;
        }
        const parent = Object.getPrototypeOf(target);
        if (parent !== null) {
          return Reflect.has(parent, P);
        }
        return false;
      },

      ownKeys(target) {
        const keys = new Set();

        for (const key of target[impl][utils.supportedPropertyIndices]) {
          keys.add(`${key}`);
        }

        for (const key of Reflect.ownKeys(target)) {
          keys.add(key);
        }
        return [...keys];
      },

      getOwnPropertyDescriptor(target, P) {
        if (typeof P === "symbol") {
          return Reflect.getOwnPropertyDescriptor(target, P);
        }
        let ignoreNamedProps = false;

        if (utils.isArrayIndexPropName(P)) {
          const index = P >>> 0;
          const indexedValue = target[impl].item(index);
          if (indexedValue !== null) {
            return {
              writable: true,
              enumerable: true,
              configurable: true,
              value: utils.tryWrapperForImpl(indexedValue)
            };
          }
          ignoreNamedProps = true;
        }

        return Reflect.getOwnPropertyDescriptor(target, P);
      },

      set(target, P, V, receiver) {
        if (typeof P === "symbol") {
          return Reflect.set(target, P, V, receiver);
        }
        if (target === receiver) {
          if (utils.isArrayIndexPropName(P)) {
            const index = P >>> 0;
            let indexedValue = V;

            if (indexedValue === null || indexedValue === undefined) {
              indexedValue = null;
            } else {
              indexedValue = convertHTMLOptionElement(indexedValue, {
                context: "Failed to set the " + index + " property on 'HTMLSelectElement': The provided value"
              });
            }

            const creating = !(target[impl].item(index) !== null);
            if (creating) {
              target[impl][utils.indexedSetNew](index, indexedValue);
            } else {
              target[impl][utils.indexedSetExisting](index, indexedValue);
            }

            return true;
          }
        }
        let ownDesc;

        if (utils.isArrayIndexPropName(P)) {
          const index = P >>> 0;
          const indexedValue = target[impl].item(index);
          if (indexedValue !== null) {
            ownDesc = {
              writable: true,
              enumerable: true,
              configurable: true,
              value: utils.tryWrapperForImpl(indexedValue)
            };
          }
        }

        if (ownDesc === undefined) {
          ownDesc = Reflect.getOwnPropertyDescriptor(target, P);
        }
        if (ownDesc === undefined) {
          const parent = Reflect.getPrototypeOf(target);
          if (parent !== null) {
            return Reflect.set(parent, P, V, receiver);
          }
          ownDesc = { writable: true, enumerable: true, configurable: true, value: undefined };
        }
        if (!ownDesc.writable) {
          return false;
        }
        if (!utils.isObject(receiver)) {
          return false;
        }
        const existingDesc = Reflect.getOwnPropertyDescriptor(receiver, P);
        let valueDesc;
        if (existingDesc !== undefined) {
          if (existingDesc.get || existingDesc.set) {
            return false;
          }
          if (!existingDesc.writable) {
            return false;
          }
          valueDesc = { value: V };
        } else {
          valueDesc = { writable: true, enumerable: true, configurable: true, value: V };
        }
        return Reflect.defineProperty(receiver, P, valueDesc);
      },

      defineProperty(target, P, desc) {
        if (typeof P === "symbol") {
          return Reflect.defineProperty(target, P, desc);
        }

        if (utils.isArrayIndexPropName(P)) {
          if (desc.get || desc.set) {
            return false;
          }

          const index = P >>> 0;
          let indexedValue = desc.value;

          if (indexedValue === null || indexedValue === undefined) {
            indexedValue = null;
          } else {
            indexedValue = convertHTMLOptionElement(indexedValue, {
              context: "Failed to set the " + index + " property on 'HTMLSelectElement': The provided value"
            });
          }

          const creating = !(target[impl].item(index) !== null);
          if (creating) {
            target[impl][utils.indexedSetNew](index, indexedValue);
          } else {
            target[impl][utils.indexedSetExisting](index, indexedValue);
          }

          return true;
        }

        return Reflect.defineProperty(target, P, desc);
      },

      deleteProperty(target, P) {
        if (typeof P === "symbol") {
          return Reflect.deleteProperty(target, P);
        }

        if (utils.isArrayIndexPropName(P)) {
          const index = P >>> 0;
          return !(target[impl].item(index) !== null);
        }

        return Reflect.deleteProperty(target, P);
      },

      preventExtensions() {
        return false;
      }
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: HTMLSelectElement,
  expose: {
    Window: { HTMLSelectElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLSelectElement-impl.js");
