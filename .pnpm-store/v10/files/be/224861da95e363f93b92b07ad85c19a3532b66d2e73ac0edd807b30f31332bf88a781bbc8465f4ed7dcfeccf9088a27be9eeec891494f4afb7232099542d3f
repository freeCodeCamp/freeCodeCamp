"use strict";

// This mixin doesn't have an IDL equivalent, but since MouseEvent and KeyboardEvent implement getModifierState() the
// same way, its implementation is shared here.

class EventModifierMixinImpl {
  // Event's constructor assumes all options correspond to IDL attributes with the same names, and sets them on `this`.
  // That is not the case for these modifier boolean options, but since the options are set on `this` anyway we'll
  // access them that way. The spec doesn't say much about the case where keyArg is not one of the valid ones
  // (https://w3c.github.io/uievents-key/#keys-modifier), but at least Chrome returns false for invalid modifiers. Since
  // these invalid modifiers will be undefined on `this` (thus `false` after casting it to boolean), we don't need to do
  // extra checking for validity.
  getModifierState(keyArg) {
    if (keyArg === "Control") {
      return Boolean(this.ctrlKey);
    }
    if (["Alt", "Meta", "Shift"].includes(keyArg)) {
      return Boolean(this[`${keyArg.toLowerCase()}Key`]);
    }
    return Boolean(this[`modifier${keyArg}`]);
  }
}

exports.implementation = EventModifierMixinImpl;
