"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { isConnected, descendantsByHTMLLocalNames } = require("../helpers/traversal");
const { domSymbolTree } = require("../helpers/internal-constants");
const HTMLCollection = require("../generated/HTMLCollection");
const notImplemented = require("../../browser/not-implemented");
const { reflectURLAttribute } = require("../../utils");
const Event = require("../generated/Event");

// http://www.whatwg.org/specs/web-apps/current-work/#category-listed
const listedElements = new Set(["button", "fieldset", "input", "keygen", "object", "select", "textarea"]);

// https://html.spec.whatwg.org/multipage/forms.html#category-submit
const submittableElements = new Set(["button", "input", "object", "select", "textarea"]);

const encTypes = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);

const methods = new Set([
  "get",
  "post",
  "dialog"
]);

const constraintValidationPositiveResult = Symbol("positive");
const constraintValidationNegativeResult = Symbol("negative");

class HTMLFormElementImpl extends HTMLElementImpl {
  _descendantAdded(parent, child) {
    const form = this;
    for (const el of domSymbolTree.treeIterator(child)) {
      if (typeof el._changedFormOwner === "function") {
        el._changedFormOwner(form);
      }
    }

    super._descendantAdded.apply(this, arguments);
  }

  _descendantRemoved(parent, child) {
    for (const el of domSymbolTree.treeIterator(child)) {
      if (typeof el._changedFormOwner === "function") {
        el._changedFormOwner(null);
      }
    }

    super._descendantRemoved.apply(this, arguments);
  }

  get elements() {
    return HTMLCollection.createImpl([], {
      element: this,
      query: () => descendantsByHTMLLocalNames(this, listedElements)
    });
  }

  get length() {
    return this.elements.length;
  }

  _doSubmit() {
    if (!isConnected(this)) {
      return;
    }
    const ev = this._ownerDocument.createEvent("HTMLEvents");
    ev.initEvent("submit", true, true);
    if (this.dispatchEvent(ev)) {
      this.submit();
    }
  }

  submit() {
    notImplemented("HTMLFormElement.prototype.submit", this._ownerDocument._defaultView);
  }

  reset() {
    for (const el of this.elements) {
      if (typeof el._formReset === "function") {
        el._formReset();
      }
    }
  }

  get method() {
    let method = this.getAttribute("method");
    if (method) {
      method = method.toLowerCase();
    }

    if (methods.has(method)) {
      return method;
    }
    return "get";
  }

  set method(V) {
    this.setAttribute("method", V);
  }

  get enctype() {
    let type = this.getAttribute("enctype");
    if (type) {
      type = type.toLowerCase();
    }

    if (encTypes.has(type)) {
      return type;
    }
    return "application/x-www-form-urlencoded";
  }

  set enctype(V) {
    this.setAttribute("enctype", V);
  }

  get action() {
    const attributeValue = this.getAttribute("action");
    if (attributeValue === null || attributeValue === "") {
      return this._ownerDocument.URL;
    }

    return reflectURLAttribute(this, "action");
  }

  set action(V) {
    this.setAttribute("action", V);
  }

  // If the checkValidity() method is invoked, the user agent must statically validate the
  // constraints of the form element, and return true if the constraint validation returned
  // a positive result, and false if it returned a negative result.
  checkValidity() {
    return this._staticallyValidateConstraints().result === constraintValidationPositiveResult;
  }

  // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#interactively-validate-the-constraints
  reportValidity() {
    return this.checkValidity();
  }

  // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#statically-validate-the-constraints
  _staticallyValidateConstraints() {
    const controls = [];
    for (const el of domSymbolTree.treeIterator(this)) {
      if (el.form === this && submittableElements.has(el.nodeName.toLowerCase())) {
        controls.push(el);
      }
    }

    const invalidControls = [];

    for (const control of controls) {
      if (control._isCandidateForConstraintValidation() && !control._satisfiesConstraints()) {
        invalidControls.push(control);
      }
    }

    if (invalidControls.length === 0) {
      return { result: constraintValidationPositiveResult };
    }

    const unhandledInvalidControls = [];
    for (const invalidControl of invalidControls) {
      const notCancelled = invalidControl.dispatchEvent(Event.createImpl(["invalid", { cancelable: true }]));
      if (notCancelled) {
        unhandledInvalidControls.push(invalidControl);
      }
    }

    return { result: constraintValidationNegativeResult, unhandledInvalidControls };
  }
}

module.exports = {
  implementation: HTMLFormElementImpl
};
