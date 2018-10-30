"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { closest } = require("../helpers/traversal");
const { isDisabled } = require("../helpers/form-controls");
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const { mixin } = require("../../utils");
const { getLabelsForLabelable } = require("../helpers/form-controls");

class HTMLButtonElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this._customValidityErrorMessage = "";
    this._labels = null;
  }

  _activationBehavior() {
    const { form } = this;
    if (form) {
      if (this.type === "submit" && !isDisabled(this)) {
        form._doSubmit();
      }
    }
  }

  _getValue() {
    const valueAttr = this.getAttribute("value");
    return valueAttr === null ? "" : valueAttr;
  }

  get labels() {
    return getLabelsForLabelable(this);
  }

  get form() {
    return closest(this, "form");
  }

  get type() {
    const typeAttr = (this.getAttribute("type") || "").toLowerCase();
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
    v = String(v).toLowerCase();
    switch (v) {
      case "submit":
      case "reset":
      case "button":
        this.setAttribute("type", v);
        break;
      default:
        this.setAttribute("type", "submit");
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
