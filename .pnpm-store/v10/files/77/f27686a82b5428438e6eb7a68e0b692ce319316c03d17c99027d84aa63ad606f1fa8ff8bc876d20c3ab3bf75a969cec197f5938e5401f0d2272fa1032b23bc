"use strict";

const DOMTokenList = require("../generated/DOMTokenList");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const { mixin } = require("../../utils");
const { getLabelsForLabelable, formOwner } = require("../helpers/form-controls");

class HTMLOutputElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);
    this._labels = null;
    this._defaultValueOverride = null;

    this._customValidityErrorMessage = "";
  }

  _attrModified(name, value, oldValue) {
    super._attrModified(name, value, oldValue);

    if (name === "for" && this._htmlFor !== undefined) {
      this._htmlFor.attrModified();
    }
  }

  _barredFromConstraintValidationSpecialization() {
    return true;
  }

  _formReset() {
    this.textContent = this.defaultValue;
    this._defaultValueOverride = null;
  }

  get htmlFor() {
    if (this._htmlFor === undefined) {
      this._htmlFor = DOMTokenList.createImpl(this._globalObject, [], {
        element: this,
        attributeLocalName: "for"
      });
    }
    return this._htmlFor;
  }

  get type() {
    return "output";
  }

  get labels() {
    return getLabelsForLabelable(this);
  }

  get form() {
    return formOwner(this);
  }

  get value() {
    return this.textContent;
  }

  set value(val) {
    this._defaultValueOverride = this.defaultValue;
    this.textContent = val;
  }

  get defaultValue() {
    if (this._defaultValueOverride !== null) {
      return this._defaultValueOverride;
    }
    return this.textContent;
  }

  set defaultValue(val) {
    if (this._defaultValueOverride === null) {
      this.textContent = val;
      return;
    }

    this._defaultValueOverride = val;
  }
}

mixin(HTMLOutputElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLOutputElementImpl
};
