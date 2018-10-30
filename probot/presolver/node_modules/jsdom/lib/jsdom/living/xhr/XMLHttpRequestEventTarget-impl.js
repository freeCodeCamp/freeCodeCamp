"use strict";
const EventTargetImpl = require("../events/EventTarget-impl").implementation;
const { setupForSimpleEventAccessors } = require("../helpers/create-event-accessor");

const events = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];

class XMLHttpRequestEventTargetImpl extends EventTargetImpl {}
setupForSimpleEventAccessors(XMLHttpRequestEventTargetImpl.prototype, events);

exports.implementation = XMLHttpRequestEventTargetImpl;
