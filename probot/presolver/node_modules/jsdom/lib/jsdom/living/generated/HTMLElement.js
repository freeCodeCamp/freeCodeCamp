"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const Element = require("./Element.js");
const ElementCSSInlineStyle = require("./ElementCSSInlineStyle.js");
const GlobalEventHandlers = require("./GlobalEventHandlers.js");
const ElementContentEditable = require("./ElementContentEditable.js");

function HTMLElement() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(HTMLElement.prototype, Element.interface.prototype);
Object.setPrototypeOf(HTMLElement, Element.interface);

Object.defineProperty(HTMLElement, "prototype", {
  value: HTMLElement.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

HTMLElement.prototype.click = function click() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].click();
};

HTMLElement.prototype.focus = function focus() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].focus();
};

HTMLElement.prototype.blur = function blur() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].blur();
};

Object.defineProperty(HTMLElement.prototype, "title", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("title");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'title' property on 'HTMLElement': The provided value"
    });

    this.setAttribute("title", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "lang", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("lang");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'lang' property on 'HTMLElement': The provided value"
    });

    this.setAttribute("lang", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "dir", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["dir"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'dir' property on 'HTMLElement': The provided value"
    });

    this[impl]["dir"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "dataset", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "dataset", () => {
      return utils.tryWrapperForImpl(this[impl]["dataset"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "hidden", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttribute("hidden");
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'hidden' property on 'HTMLElement': The provided value"
    });

    if (V) {
      this.setAttribute("hidden", "");
    } else {
      this.removeAttribute("hidden");
    }
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "tabIndex", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["tabIndex"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["long"](V, {
      context: "Failed to set the 'tabIndex' property on 'HTMLElement': The provided value"
    });

    this[impl]["tabIndex"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "accessKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("accessKey");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'accessKey' property on 'HTMLElement': The provided value"
    });

    this.setAttribute("accessKey", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["offsetParent"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetTop", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["offsetTop"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetLeft", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["offsetLeft"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["offsetWidth"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["offsetHeight"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "style", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "style", () => {
      return utils.tryWrapperForImpl(this[impl]["style"]);
    });
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    this.style.cssText = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onabort", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onabort"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onabort"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onauxclick", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onauxclick"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onauxclick"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onblur", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onblur"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onblur"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "oncancel", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncancel"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncancel"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "oncanplay", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncanplay"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncanplay"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "oncanplaythrough", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncanplaythrough"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncanplaythrough"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onchange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onchange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onchange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onclick", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onclick"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onclick"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onclose", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onclose"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onclose"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "oncontextmenu", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncontextmenu"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncontextmenu"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "oncuechange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncuechange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncuechange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondblclick", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondblclick"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondblclick"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondrag", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondrag"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondrag"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondragend", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragend"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragend"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondragenter", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragenter"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragenter"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondragexit", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragexit"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragexit"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondragleave", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragleave"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragleave"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondragover", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragover"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragover"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondragstart", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragstart"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragstart"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondrop", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondrop"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondrop"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ondurationchange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondurationchange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondurationchange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onemptied", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onemptied"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onemptied"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onended", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onended"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onended"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onerror", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onerror"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onerror"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onfocus", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onfocus"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onfocus"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "oninput", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oninput"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oninput"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "oninvalid", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oninvalid"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oninvalid"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onkeydown", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeydown"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeydown"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onkeypress", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeypress"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeypress"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onkeyup", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeyup"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeyup"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onload", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onload"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onload"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onloadeddata", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadeddata"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadeddata"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onloadedmetadata", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadedmetadata"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadedmetadata"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onloadend", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadend"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadend"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onloadstart", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadstart"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadstart"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onmousedown", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmousedown"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmousedown"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onmouseenter", {
  get() {
    return utils.tryWrapperForImpl(this[impl]["onmouseenter"]);
  },

  set(V) {
    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseenter"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onmouseleave", {
  get() {
    return utils.tryWrapperForImpl(this[impl]["onmouseleave"]);
  },

  set(V) {
    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseleave"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onmousemove", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmousemove"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmousemove"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onmouseout", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseout"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseout"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onmouseover", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseover"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseover"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onmouseup", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseup"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseup"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onwheel", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onwheel"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onwheel"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onpause", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onpause"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onpause"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onplay", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onplay"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onplay"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onplaying", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onplaying"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onplaying"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onprogress", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onprogress"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onprogress"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onratechange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onratechange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onratechange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onreset", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onreset"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onreset"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onresize", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onresize"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onresize"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onscroll", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onscroll"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onscroll"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsecuritypolicyviolation"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsecuritypolicyviolation"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onseeked", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onseeked"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onseeked"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onseeking", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onseeking"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onseeking"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onselect", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onselect"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onselect"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onstalled", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onstalled"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onstalled"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onsubmit", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsubmit"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsubmit"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onsuspend", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsuspend"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsuspend"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ontimeupdate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ontimeupdate"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ontimeupdate"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "ontoggle", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ontoggle"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ontoggle"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onvolumechange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onvolumechange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onvolumechange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, "onwaiting", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onwaiting"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onwaiting"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(HTMLElement.prototype, Symbol.toStringTag, {
  value: "HTMLElement",
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
    throw new TypeError(`${context} is not of type 'HTMLElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Element._internalSetup(obj);
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
  interface: HTMLElement,
  expose: {
    Window: { HTMLElement }
  }
}; // iface
module.exports = iface;

ElementCSSInlineStyle._mixedIntoPredicates.push(module.exports.is);

GlobalEventHandlers._mixedIntoPredicates.push(module.exports.is);

ElementContentEditable._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/HTMLElement-impl.js");
