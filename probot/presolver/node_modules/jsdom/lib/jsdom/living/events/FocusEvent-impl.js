"use strict";
const UIEventImpl = require("./UIEvent-impl").implementation;

const FocusEventInit = require("../generated/FocusEventInit");

class FocusEventImpl extends UIEventImpl {}
FocusEventImpl.defaultInit = FocusEventInit.convert(undefined);

exports.implementation = FocusEventImpl;
