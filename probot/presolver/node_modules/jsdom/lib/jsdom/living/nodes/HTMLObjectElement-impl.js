"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const DefaultConstraintValidationImpl =
  require("../constraint-validation/DefaultConstraintValidation-impl").implementation;
const { mixin } = require("../../utils");
const { reflectURLAttribute } = require("../../utils");
const { closest } = require("../helpers/traversal");

class HTMLObjectElementImpl extends HTMLElementImpl {
  get form() {
    return closest(this, "form");
  }

  get contentDocument() {
    return null;
  }

  get data() {
    return reflectURLAttribute(this, "data");
  }

  set data(V) {
    this.setAttribute("data", V);
  }

  get codeBase() {
    return reflectURLAttribute(this, "codebase");
  }

  set codeBase(V) {
    this.setAttribute("codebase", V);
  }

  _barredFromConstraintValidationSpecialization() {
    return true;
  }
}

mixin(HTMLObjectElementImpl.prototype, DefaultConstraintValidationImpl.prototype);

module.exports = {
  implementation: HTMLObjectElementImpl
};
