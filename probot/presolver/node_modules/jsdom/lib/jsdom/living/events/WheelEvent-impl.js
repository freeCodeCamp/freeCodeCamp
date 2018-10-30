"use strict";

const MouseEventImpl = require("./MouseEvent-impl").implementation;

const WheelEventInit = require("../generated/WheelEventInit");

class WheelEventImpl extends MouseEventImpl {}
WheelEventImpl.defaultInit = WheelEventInit.convert(undefined);

module.exports = {
  implementation: WheelEventImpl
};
