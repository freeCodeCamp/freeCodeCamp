"use strict";
const { mixin } = require("../../utils");
const ElementImpl = require("./Element-impl").implementation;
const MouseEvent = require("../generated/MouseEvent");
const ElementCSSInlineStyleImpl = require("./ElementCSSInlineStyle-impl").implementation;
const GlobalEventHandlersImpl = require("./GlobalEventHandlers-impl").implementation;
const HTMLAndSVGElementSharedImpl = require("./HTMLAndSVGElementShared-impl").implementation;
const { isDisabled } = require("../helpers/form-controls");

class HTMLElementImpl extends ElementImpl {
  constructor(args, privateData) {
    super(args, privateData);
    this._initHTMLAndSVGElement();
    this._initElementCSSInlineStyle();
    this._initGlobalEvents();

    this._settingCssText = false;
    this._clickInProgress = false;
  }

  // Add default event behavior (click link to navigate, click button to submit
  // form, etc). We start by wrapping dispatchEvent so we can forward events to
  // the element's default functions (only events that did not incur
  // preventDefault).
  dispatchEvent(event) {
    if (event.type === "click") {
      callEventBehaviorHook(event, "_preClickActivationSteps", this);
    }

    const outcome = super.dispatchEvent(event);

    if (event.type === "click") {
      if (event.defaultPrevented) {
        callEventBehaviorHook(event, "_canceledActivationSteps");
      } else {
        callEventBehaviorHook(event, "_activationBehavior");
      }
    }

    return outcome;
  }

  click() {
    // https://html.spec.whatwg.org/multipage/interaction.html#dom-click
    // https://html.spec.whatwg.org/multipage/interaction.html#run-synthetic-click-activation-steps
    // Not completely spec compliant due to e.g. incomplete implementations of disabled for form controls, or no
    // implementation at all of isTrusted.

    if (this._clickInProgress) {
      return;
    }

    this._clickInProgress = true;

    if (isDisabled(this)) {
      return;
    }

    const event = MouseEvent.createImpl([
      "click",
      {
        bubbles: true,
        cancelable: true,
        view: this.ownerDocument.defaultView
      }
    ], {});

    // Run synthetic click activation steps. According to the spec,
    // this should not be calling dispatchEvent, but it matches browser behavior.
    // See: https://www.w3.org/Bugs/Public/show_bug.cgi?id=12230
    // See also: https://github.com/whatwg/html/issues/805
    this.dispatchEvent(event);


    this._clickInProgress = false;
  }

  get dir() {
    let dirValue = this.getAttribute("dir");
    if (dirValue !== null) {
      dirValue = dirValue.toLowerCase();

      if (["ltr", "rtl", "auto"].includes(dirValue)) {
        return dirValue;
      }
    }
    return "";
  }
  set dir(value) {
    this.setAttribute("dir", value);
  }

  _attrModified(name, value, oldValue) {
    if (name === "style" && value !== oldValue && !this._settingCssText) {
      this._settingCssText = true;
      this._style.cssText = value;
      this._settingCssText = false;
    } else if (name.startsWith("on")) {
      this._globalEventChanged(name.substring(2));
    }

    super._attrModified.apply(this, arguments);
  }

  get offsetParent() {
    return null;
  }

  get offsetTop() {
    return 0;
  }

  get offsetLeft() {
    return 0;
  }

  get offsetWidth() {
    return 0;
  }

  get offsetHeight() {
    return 0;
  }
}

function callEventBehaviorHook(event, name, targetOverride) {
  if (event) {
    const target = targetOverride || event.target;
    if (target && typeof target[name] === "function") {
      target[name]();
    }
  }
}

mixin(HTMLElementImpl.prototype, ElementCSSInlineStyleImpl.prototype);
mixin(HTMLElementImpl.prototype, GlobalEventHandlersImpl.prototype);
mixin(HTMLElementImpl.prototype, HTMLAndSVGElementSharedImpl.prototype);

module.exports = {
  implementation: HTMLElementImpl
};
