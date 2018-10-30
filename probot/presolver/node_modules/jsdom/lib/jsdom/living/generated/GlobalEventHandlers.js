"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;

function GlobalEventHandlers() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(GlobalEventHandlers, "prototype", {
  value: GlobalEventHandlers.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(GlobalEventHandlers.prototype, "onabort", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onauxclick", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onblur", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "oncancel", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "oncanplay", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "oncanplaythrough", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onchange", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onclick", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onclose", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "oncontextmenu", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "oncuechange", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondblclick", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondrag", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondragend", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondragenter", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondragexit", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondragleave", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondragover", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondragstart", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondrop", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ondurationchange", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onemptied", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onended", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onerror", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onfocus", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "oninput", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "oninvalid", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onkeydown", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onkeypress", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onkeyup", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onload", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onloadeddata", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onloadedmetadata", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onloadend", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onloadstart", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onmousedown", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onmouseenter", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onmouseleave", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onmousemove", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onmouseout", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onmouseover", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onmouseup", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onwheel", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onpause", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onplay", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onplaying", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onprogress", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onratechange", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onreset", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onresize", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onscroll", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onsecuritypolicyviolation", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onseeked", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onseeking", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onselect", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onstalled", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onsubmit", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onsuspend", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ontimeupdate", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "ontoggle", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onvolumechange", {
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

Object.defineProperty(GlobalEventHandlers.prototype, "onwaiting", {
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

Object.defineProperty(GlobalEventHandlers.prototype, Symbol.toStringTag, {
  value: "GlobalEventHandlers",
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
    throw new TypeError(`${context} is not of type 'GlobalEventHandlers'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(GlobalEventHandlers.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(GlobalEventHandlers.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
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
  interface: GlobalEventHandlers,
  expose: {}
}; // iface
module.exports = iface;

const Impl = require("../nodes/GlobalEventHandlers-impl.js");
