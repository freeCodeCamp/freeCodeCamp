"use strict";

const EventImpl = require("./Event-impl").implementation;

const SubmitEventInit = require("../generated/SubmitEventInit");

// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-submitevent-interface
class SubmitEventImpl extends EventImpl {}
SubmitEventImpl.defaultInit = SubmitEventInit.convert(undefined, undefined);

module.exports = {
  implementation: SubmitEventImpl
};
