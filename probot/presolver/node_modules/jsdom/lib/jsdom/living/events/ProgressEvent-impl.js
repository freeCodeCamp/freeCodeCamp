"use strict";

const EventImpl = require("./Event-impl").implementation;

const ProgressEventInit = require("../generated/ProgressEventInit");

class ProgressEventImpl extends EventImpl {

}
ProgressEventImpl.defaultInit = ProgressEventInit.convert(undefined);

module.exports = {
  implementation: ProgressEventImpl
};
