"use strict";

const NodeListImpl = require("./NodeList-impl").implementation;

class RadioNodeListImpl extends NodeListImpl {
  // https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-radionodelist-value
  // Note in general the spec says to manipulate/consult checkedness, but we use `checked` instead
  // because the spec isn't very good here: https://github.com/whatwg/html/issues/7612.

  get value() {
    this._update();

    const element = this._list.find(e => e._localName === "input" && e.type === "radio" && e.checked);
    if (element === undefined) {
      return "";
    }

    if (!element.hasAttributeNS(null, "value")) {
      return "on";
    }

    return element.getAttributeNS(null, "value");
  }

  set value(value) {
    let element;
    if (value === "on") {
      element = this._list.find(
        e => e._localName === "input" &&
             e.type === "radio" &&
             (!e.hasAttributeNS(null, "value") || e.getAttributeNS(null, "value") === value)
      );
    } else {
      element = this._list.find(
        e => e._localName === "input" &&
             e.type === "radio" &&
             (e.hasAttributeNS(null, "value") && e.getAttributeNS(null, "value") === value)
      );
    }

    if (element) {
      element.checked = true;
    }
  }
}

module.exports = {
  implementation: RadioNodeListImpl
};
