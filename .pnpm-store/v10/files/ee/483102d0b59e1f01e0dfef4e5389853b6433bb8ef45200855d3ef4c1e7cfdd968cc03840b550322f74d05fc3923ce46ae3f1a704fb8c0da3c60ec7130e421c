"use strict";

const Event = require("../generated/Event");
const { tryImplForWrapper } = require("../generated/utils");

function createAnEvent(e, globalObject, eventInterface = Event, attributes = {}) {
  return eventInterface.createImpl(
    globalObject,
    [e, attributes],
    { isTrusted: attributes.isTrusted !== false }
  );
}

function fireAnEvent(e, target, eventInterface, attributes, legacyTargetOverrideFlag) {
  const event = createAnEvent(e, target._globalObject, eventInterface, attributes);

  // tryImplForWrapper() is currently required due to use in Window.js
  return tryImplForWrapper(target)._dispatch(event, legacyTargetOverrideFlag);
}

module.exports = {
  createAnEvent,
  fireAnEvent
};
