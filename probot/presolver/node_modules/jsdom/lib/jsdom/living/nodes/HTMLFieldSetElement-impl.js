"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const { mixin } = require("../../utils");
const { closest } = require("../helpers/traversal");

class HTMLFieldSetElementImpl extends HTMLElementImpl {
  get form() {
    return closest(this, "form");
  }

  _barredFromConstraintValidationSpecialization() {
    return true;
  }
}

mixin(HTMLFieldSetElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLFieldSetElementImpl
};
