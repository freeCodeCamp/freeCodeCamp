"use strict";

const DOMException = require("domexception/webidl2js-wrapper");
const { serializeURL } = require("whatwg-url");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { domSymbolTree } = require("../helpers/internal-constants");
const { fireAnEvent } = require("../helpers/events");
const { formOwner, isListed, isSubmittable, isSubmitButton } = require("../helpers/form-controls");
const HTMLCollection = require("../generated/HTMLCollection");
const notImplemented = require("../../browser/not-implemented");
const { parseURLToResultingURLRecord } = require("../helpers/document-base-url");

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

    super._descendantAdded(parent, child);
  }

  _descendantRemoved(parent, child) {
    for (const el of domSymbolTree.treeIterator(child)) {
      if (typeof el._changedFormOwner === "function") {
        el._changedFormOwner(null);
      }
    }

    super._descendantRemoved(parent, child);
  }

  _getElementNodes() {
    return domSymbolTree.treeToArray(this.getRootNode({}), {
      filter: node => {
        if (!isListed(node) || (node._localName === "input" && node.type === "image")) {
          return false;
        }

        return formOwner(node) === this;
      }
    });
  }

  // https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements
  get elements() {
    // TODO: Return a HTMLFormControlsCollection
    return HTMLCollection.createImpl(this._globalObject, [], {
      element: this.getRootNode({}),
      query: () => this._getElementNodes()
    });
  }

  get length() {
    return this.elements.length;
  }

  _doSubmit() {
    if (!this.isConnected) {
      return;
    }

    this.submit();
  }

  submit() {
    if (!fireAnEvent("submit", this, undefined, { bubbles: true, cancelable: true })) {
      return;
    }

    notImplemented("HTMLFormElement.prototype.submit", this._ownerDocument._defaultView);
  }

  requestSubmit(submitter = undefined) {
    if (submitter !== undefined) {
      if (!isSubmitButton(submitter)) {
        throw new TypeError("The specified element is not a submit button");
      }
      if (submitter.form !== this) {
        throw DOMException.create(this._globalObject, [
          "The specified element is not owned by this form element",
          "NotFoundError"
        ]);
      }
    }

    if (!fireAnEvent("submit", this, undefined, { bubbles: true, cancelable: true })) {
      return;
    }

    notImplemented("HTMLFormElement.prototype.requestSubmit", this._ownerDocument._defaultView);
  }

  _doReset() {
    if (!this.isConnected) {
      return;
    }

    this.reset();
  }

  reset() {
    if (!fireAnEvent("reset", this, undefined, { bubbles: true, cancelable: true })) {
      return;
    }

    for (const el of this.elements) {
      if (typeof el._formReset === "function") {
        el._formReset();
      }
    }
  }

  get method() {
    let method = this.getAttributeNS(null, "method");
    if (method) {
      method = method.toLowerCase();
    }

    if (methods.has(method)) {
      return method;
    }
    return "get";
  }

  set method(V) {
    this.setAttributeNS(null, "method", V);
  }

  get enctype() {
    let type = this.getAttributeNS(null, "enctype");
    if (type) {
      type = type.toLowerCase();
    }

    if (encTypes.has(type)) {
      return type;
    }
    return "application/x-www-form-urlencoded";
  }

  set enctype(V) {
    this.setAttributeNS(null, "enctype", V);
  }

  get action() {
    const attributeValue = this.getAttributeNS(null, "action");
    if (attributeValue === null || attributeValue === "") {
      return this._ownerDocument.URL;
    }
    const urlRecord = parseURLToResultingURLRecord(attributeValue, this._ownerDocument);
    if (urlRecord === null) {
      return attributeValue;
    }
    return serializeURL(urlRecord);
  }

  set action(V) {
    this.setAttributeNS(null, "action", V);
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
    for (const el of this.elements) {
      if (el.form === this && isSubmittable(el)) {
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
      const notCancelled = fireAnEvent("invalid", invalidControl, undefined, { cancelable: true });
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
