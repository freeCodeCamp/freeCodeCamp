"use strict";
const HTMLCollection = require("../generated/HTMLCollection");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const { formOwner } = require("../helpers/form-controls");
const { mixin } = require("../../utils");
const { descendantsByLocalNames } = require("../helpers/traversal");

const listedElements = new Set(["button", "fieldset", "input", "object", "output", "select", "textarea"]);

class HTMLFieldSetElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._customValidityErrorMessage = "";
  }

  get elements() {
    return HTMLCollection.createImpl(this._globalObject, [], {
      element: this,
      query: () => descendantsByLocalNames(this, listedElements)
    });
  }

  get form() {
    return formOwner(this);
  }

  get type() {
    return "fieldset";
  }

  _barredFromConstraintValidationSpecialization() {
    return true;
  }
}

mixin(HTMLFieldSetElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLFieldSetElementImpl
};
