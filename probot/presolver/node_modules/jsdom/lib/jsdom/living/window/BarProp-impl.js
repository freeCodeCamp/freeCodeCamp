"use strict";

// https://html.spec.whatwg.org/multipage/window-object.html#browser-interface-elements
class BarPropImpl {}

// Since many BarProps do not apply to modern browsers,
// returning true in all cases seems to be common practice.
BarPropImpl.prototype.visible = true;

exports.implementation = BarPropImpl;
