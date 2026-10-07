"use strict";

const DOMException = require("../generated/DOMException");
const { getLabelsForLabelable } = require("../helpers/form-controls");

class ElementInternalsImpl {
  constructor(globalObject, args, { targetElement }) {
    this._targetElement = targetElement;
  }

  get shadowRoot() {
    const shadow = this._targetElement._shadowRoot;

    if (!shadow || !shadow._availableToElementInternals) {
      return null;
    }

    return shadow;
  }

  get labels() {
    if (!this._targetElement._ceDefinition.formAssociated) {
      throw DOMException.create(this._targetElement._globalObject, [
        "Accesing an ElementInternal's labels property is only supported for form-associated custom elements",
        "NotSupportedError"
      ]);
    }

    return getLabelsForLabelable(this._targetElement);
  }

  // https://html.spec.whatwg.org/#reflecting-content-attributes-in-idl-attributes
  _reflectGetTheElement() {
    return this._targetElement;
  }

  _reflectGetTheContentAttribute(reflectedContentAttributeName) {
    return this._targetElement._internalContentAttributeMap.get(reflectedContentAttributeName) ?? null;
  }

  _reflectSetTheContentAttribute(reflectedContentAttributeName, value) {
    this._targetElement._internalContentAttributeMap.set(reflectedContentAttributeName, value);
  }

  _reflectDeleteTheContentAttribute(reflectedContentAttributeName) {
    this._targetElement._internalContentAttributeMap.delete(reflectedContentAttributeName);
  }
}

module.exports = {
  implementation: ElementInternalsImpl
};
