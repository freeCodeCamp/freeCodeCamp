"use strict";
const cssstyle = require("cssstyle");

class ElementCSSInlineStyle {
  _initElementCSSInlineStyle() {
    this._style = new cssstyle.CSSStyleDeclaration(newCssText => {
      if (!this._settingCssText) {
        this._settingCssText = true;
        this.setAttribute("style", newCssText);
        this._settingCssText = false;
      }
    });
  }
  get style() {
    return this._style;
  }
  set style(value) {
    this._style.cssText = value;
  }
}

module.exports = {
  implementation: ElementCSSInlineStyle
};
