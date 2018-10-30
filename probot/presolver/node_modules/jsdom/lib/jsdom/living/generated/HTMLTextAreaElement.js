"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertSelectionMode = require("./SelectionMode.js").convert;
const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLTextAreaElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLTextAreaElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLTextAreaElement, HTMLElement.interface);

Object.defineProperty(HTMLTextAreaElement, "prototype", {
  value: HTMLTextAreaElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

HTMLTextAreaElement.prototype.checkValidity = function checkValidity() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].checkValidity();
};

HTMLTextAreaElement.prototype.reportValidity = function reportValidity() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].reportValidity();
};

HTMLTextAreaElement.prototype.setCustomValidity = function setCustomValidity(error) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setCustomValidity' on 'HTMLTextAreaElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'setCustomValidity' on 'HTMLTextAreaElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].setCustomValidity(...args);
};

HTMLTextAreaElement.prototype.select = function select() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].select();
};

HTMLTextAreaElement.prototype.setRangeText = function setRangeText(replacement) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  switch (arguments.length) {
    case 1:
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 1"
        });
        args.push(curArg);
      }
      break;
    case 2:
      throw new TypeError(
        "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': only " + arguments.length + " arguments present."
      );
      break;
    case 3:
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 2"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 3"
        });
        args.push(curArg);
      }
      break;
    default:
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 2"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 3"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[3];
        if (curArg !== undefined) {
          curArg = convertSelectionMode(curArg, {
            context: "Failed to execute 'setRangeText' on 'HTMLTextAreaElement': parameter 4"
          });
        } else {
          curArg = "preserve";
        }
        args.push(curArg);
      }
  }
  return this[impl].setRangeText(...args);
};

HTMLTextAreaElement.prototype.setSelectionRange = function setSelectionRange(start, end) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'setSelectionRange' on 'HTMLTextAreaElement': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'setSelectionRange' on 'HTMLTextAreaElement': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'setSelectionRange' on 'HTMLTextAreaElement': parameter 2"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    if (curArg !== undefined) {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'setSelectionRange' on 'HTMLTextAreaElement': parameter 3"
      });
    }
    args.push(curArg);
  }
  return this[impl].setSelectionRange(...args);
};

Object.defineProperty(HTMLTextAreaElement.prototype, "autocomplete", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("autocomplete");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'autocomplete' property on 'HTMLTextAreaElement': The provided value"
    });

    this.setAttribute("autocomplete", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "autofocus", {
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
      context: "Failed to set the 'autofocus' property on 'HTMLTextAreaElement': The provided value"
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

Object.defineProperty(HTMLTextAreaElement.prototype, "cols", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["cols"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'cols' property on 'HTMLTextAreaElement': The provided value"
    });

    this[impl]["cols"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "dirName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("dirName");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'dirName' property on 'HTMLTextAreaElement': The provided value"
    });

    this.setAttribute("dirName", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "disabled", {
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
      context: "Failed to set the 'disabled' property on 'HTMLTextAreaElement': The provided value"
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

Object.defineProperty(HTMLTextAreaElement.prototype, "form", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["form"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "inputMode", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("inputMode");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'inputMode' property on 'HTMLTextAreaElement': The provided value"
    });

    this.setAttribute("inputMode", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "maxLength", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = parseInt(this.getAttribute("maxLength"));
    return isNaN(value) || value < -2147483648 || value > 2147483647 ? 0 : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["long"](V, {
      context: "Failed to set the 'maxLength' property on 'HTMLTextAreaElement': The provided value"
    });

    this.setAttribute("maxLength", String(V));
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "minLength", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = parseInt(this.getAttribute("minLength"));
    return isNaN(value) || value < -2147483648 || value > 2147483647 ? 0 : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["long"](V, {
      context: "Failed to set the 'minLength' property on 'HTMLTextAreaElement': The provided value"
    });

    this.setAttribute("minLength", String(V));
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "name", {
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
      context: "Failed to set the 'name' property on 'HTMLTextAreaElement': The provided value"
    });

    this.setAttribute("name", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "placeholder", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("placeholder");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'placeholder' property on 'HTMLTextAreaElement': The provided value"
    });

    this.setAttribute("placeholder", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "readOnly", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("readOnly");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'readOnly' property on 'HTMLTextAreaElement': The provided value"
    });

    if (V) {
      this.setAttribute("readOnly", "");
    } else {
      this.removeAttribute("readOnly");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "required", {
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
      context: "Failed to set the 'required' property on 'HTMLTextAreaElement': The provided value"
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

Object.defineProperty(HTMLTextAreaElement.prototype, "rows", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["rows"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'rows' property on 'HTMLTextAreaElement': The provided value"
    });

    this[impl]["rows"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "wrap", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("wrap");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'wrap' property on 'HTMLTextAreaElement': The provided value"
    });

    this.setAttribute("wrap", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "type", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["type"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "defaultValue", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["defaultValue"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'defaultValue' property on 'HTMLTextAreaElement': The provided value"
    });

    this[impl]["defaultValue"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "value", {
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
      context: "Failed to set the 'value' property on 'HTMLTextAreaElement': The provided value",
      treatNullAsEmptyString: true
    });

    this[impl]["value"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "textLength", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["textLength"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "willValidate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["willValidate"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "validity", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["validity"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "validationMessage", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["validationMessage"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "labels", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["labels"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "selectionStart", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["selectionStart"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'selectionStart' property on 'HTMLTextAreaElement': The provided value"
    });

    this[impl]["selectionStart"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "selectionEnd", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["selectionEnd"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'selectionEnd' property on 'HTMLTextAreaElement': The provided value"
    });

    this[impl]["selectionEnd"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, "selectionDirection", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["selectionDirection"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'selectionDirection' property on 'HTMLTextAreaElement': The provided value"
    });

    this[impl]["selectionDirection"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLTextAreaElement.prototype, Symbol.toStringTag, {
  value: "HTMLTextAreaElement",
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
    throw new TypeError(`${context} is not of type 'HTMLTextAreaElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLTextAreaElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLTextAreaElement.prototype);
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

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: HTMLTextAreaElement,
  expose: {
    Window: { HTMLTextAreaElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLTextAreaElement-impl.js");
