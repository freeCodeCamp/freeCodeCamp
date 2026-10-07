"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const { mixin } = require("../../utils");
const { isDisabled, formOwner, getLabelsForLabelable } = require("../helpers/form-controls");
const { asciiLowercase } = require("../helpers/strings");

class HTMLButtonElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._customValidityErrorMessage = "";
    this._labels = null;

    this._hasActivationBehavior = true;
  }

  _activationBehavior() {
    const { form } = this;
    if (form && !isDisabled(this)) {
      if (this.type === "submit") {
        form._doSubmit();
      }
      if (this.type === "reset") {
        form._doReset();
      }
    }
  }

  _getValue() {
    const valueAttr = this.getAttributeNS(null, "value");
    return valueAttr === null ? "" : valueAttr;
  }

  get labels() {
    return getLabelsForLabelable(this);
  }

  get form() {
    return formOwner(this);
  }

  get type() {
    const typeAttr = asciiLowercase(this.getAttributeNS(null, "type") || "");
    switch (typeAttr) {
      case "submit":
      case "reset":
      case "button":
        return typeAttr;
      default:
        return "submit";
    }
  }

  set type(v) {
    v = asciiLowercase(String(v));
    switch (v) {
      case "submit":
      case "reset":
      case "button":
        this.setAttributeNS(null, "type", v);
        break;
      default:
        this.setAttributeNS(null, "type", "submit");
        break;
    }
  }

  _barredFromConstraintValidationSpecialization() {
    return this.type === "reset" || this.type === "button";
  }
}

mixin(HTMLButtonElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLButtonElementImpl
};
