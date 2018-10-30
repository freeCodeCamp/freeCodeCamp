"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertSelectionMode = require("./SelectionMode.js").convert;
const convertFileList = require("./FileList.js").convert;
const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");

function HTMLInputElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLInputElement.prototype, HTMLElement.interface.prototype);
Object.setPrototypeOf(HTMLInputElement, HTMLElement.interface);

Object.defineProperty(HTMLInputElement, "prototype", {
  value: HTMLInputElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

HTMLInputElement.prototype.checkValidity = function checkValidity() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].checkValidity();
};

HTMLInputElement.prototype.reportValidity = function reportValidity() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].reportValidity();
};

HTMLInputElement.prototype.setCustomValidity = function setCustomValidity(error) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setCustomValidity' on 'HTMLInputElement': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'setCustomValidity' on 'HTMLInputElement': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].setCustomValidity(...args);
};

HTMLInputElement.prototype.select = function select() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].select();
};

HTMLInputElement.prototype.setRangeText = function setRangeText(replacement) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setRangeText' on 'HTMLInputElement': 1 argument required, but only " +
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
          context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 1"
        });
        args.push(curArg);
      }
      break;
    case 2:
      throw new TypeError(
        "Failed to execute 'setRangeText' on 'HTMLInputElement': only " + arguments.length + " arguments present."
      );
      break;
    case 3:
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 2"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 3"
        });
        args.push(curArg);
      }
      break;
    default:
      {
        let curArg = arguments[0];
        curArg = conversions["DOMString"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 1"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[1];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 2"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[2];
        curArg = conversions["unsigned long"](curArg, {
          context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 3"
        });
        args.push(curArg);
      }
      {
        let curArg = arguments[3];
        if (curArg !== undefined) {
          curArg = convertSelectionMode(curArg, {
            context: "Failed to execute 'setRangeText' on 'HTMLInputElement': parameter 4"
          });
        } else {
          curArg = "preserve";
        }
        args.push(curArg);
      }
  }
  return this[impl].setRangeText(...args);
};

HTMLInputElement.prototype.setSelectionRange = function setSelectionRange(start, end) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'setSelectionRange' on 'HTMLInputElement': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'setSelectionRange' on 'HTMLInputElement': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'setSelectionRange' on 'HTMLInputElement': parameter 2"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    if (curArg !== undefined) {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'setSelectionRange' on 'HTMLInputElement': parameter 3"
      });
    }
    args.push(curArg);
  }
  return this[impl].setSelectionRange(...args);
};

Object.defineProperty(HTMLInputElement.prototype, "accept", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("accept");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'accept' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("accept", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "alt", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("alt");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'alt' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("alt", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "autocomplete", {
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
      context: "Failed to set the 'autocomplete' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("autocomplete", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "autofocus", {
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
      context: "Failed to set the 'autofocus' property on 'HTMLInputElement': The provided value"
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

Object.defineProperty(HTMLInputElement.prototype, "defaultChecked", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("checked");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'defaultChecked' property on 'HTMLInputElement': The provided value"
    });

    if (V) {
      this.setAttribute("checked", "");
    } else {
      this.removeAttribute("checked");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "checked", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["checked"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'checked' property on 'HTMLInputElement': The provided value"
    });

    this[impl]["checked"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "dirName", {
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
      context: "Failed to set the 'dirName' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("dirName", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "disabled", {
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
      context: "Failed to set the 'disabled' property on 'HTMLInputElement': The provided value"
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

Object.defineProperty(HTMLInputElement.prototype, "form", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["form"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "files", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["files"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = convertFileList(V, {
        context: "Failed to set the 'files' property on 'HTMLInputElement': The provided value"
      });
    }
    this[impl]["files"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "formNoValidate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("formNoValidate");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'formNoValidate' property on 'HTMLInputElement': The provided value"
    });

    if (V) {
      this.setAttribute("formNoValidate", "");
    } else {
      this.removeAttribute("formNoValidate");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "formTarget", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("formTarget");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'formTarget' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("formTarget", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "indeterminate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["indeterminate"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'indeterminate' property on 'HTMLInputElement': The provided value"
    });

    this[impl]["indeterminate"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "inputMode", {
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
      context: "Failed to set the 'inputMode' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("inputMode", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "max", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("max");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'max' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("max", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "maxLength", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["maxLength"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["long"](V, {
      context: "Failed to set the 'maxLength' property on 'HTMLInputElement': The provided value"
    });

    this[impl]["maxLength"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "min", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("min");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'min' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("min", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "minLength", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["minLength"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["long"](V, {
      context: "Failed to set the 'minLength' property on 'HTMLInputElement': The provided value"
    });

    this[impl]["minLength"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "multiple", {
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
      context: "Failed to set the 'multiple' property on 'HTMLInputElement': The provided value"
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

Object.defineProperty(HTMLInputElement.prototype, "name", {
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
      context: "Failed to set the 'name' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("name", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "pattern", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("pattern");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'pattern' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("pattern", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "placeholder", {
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
      context: "Failed to set the 'placeholder' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("placeholder", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "readOnly", {
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
      context: "Failed to set the 'readOnly' property on 'HTMLInputElement': The provided value"
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

Object.defineProperty(HTMLInputElement.prototype, "required", {
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
      context: "Failed to set the 'required' property on 'HTMLInputElement': The provided value"
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

Object.defineProperty(HTMLInputElement.prototype, "size", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["size"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unsigned long"](V, {
      context: "Failed to set the 'size' property on 'HTMLInputElement': The provided value"
    });

    this[impl]["size"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "src", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["src"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'src' property on 'HTMLInputElement': The provided value"
    });

    this[impl]["src"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "step", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("step");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'step' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("step", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "type", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["type"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'type' property on 'HTMLInputElement': The provided value"
    });

    this[impl]["type"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "defaultValue", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("value");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'defaultValue' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("value", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "value", {
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
      context: "Failed to set the 'value' property on 'HTMLInputElement': The provided value",
      treatNullAsEmptyString: true
    });

    this[impl]["value"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "willValidate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["willValidate"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "validity", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["validity"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "validationMessage", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["validationMessage"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "labels", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["labels"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "selectionStart", {
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

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'selectionStart' property on 'HTMLInputElement': The provided value"
      });
    }
    this[impl]["selectionStart"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "selectionEnd", {
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

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["unsigned long"](V, {
        context: "Failed to set the 'selectionEnd' property on 'HTMLInputElement': The provided value"
      });
    }
    this[impl]["selectionEnd"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "selectionDirection", {
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

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'selectionDirection' property on 'HTMLInputElement': The provided value"
      });
    }
    this[impl]["selectionDirection"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "align", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("align");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'align' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("align", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, "useMap", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("useMap");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'useMap' property on 'HTMLInputElement': The provided value"
    });

    this.setAttribute("useMap", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLInputElement.prototype, Symbol.toStringTag, {
  value: "HTMLInputElement",
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
    throw new TypeError(`${context} is not of type 'HTMLInputElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLInputElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLInputElement.prototype);
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
  interface: HTMLInputElement,
  expose: {
    Window: { HTMLInputElement }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/HTMLInputElement-impl.js");
