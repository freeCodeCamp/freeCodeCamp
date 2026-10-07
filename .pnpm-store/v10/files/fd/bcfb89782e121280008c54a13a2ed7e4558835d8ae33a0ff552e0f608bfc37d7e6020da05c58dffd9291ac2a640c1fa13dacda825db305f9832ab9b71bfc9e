"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const { mixin } = require("../../utils");
const { formOwner } = require("../helpers/form-controls");

class HTMLObjectElementImpl extends HTMLElementImpl {
  get form() {
    return formOwner(this);
  }

  get contentDocument() {
    return null;
  }

  _barredFromConstraintValidationSpecialization() {
    return true;
  }
}

mixin(HTMLObjectElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLObjectElementImpl
};
