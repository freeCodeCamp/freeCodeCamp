"use strict";

const { findSlot, assignSlot, assignSlotable } = require("../helpers/shadow-dom");

// https://dom.spec.whatwg.org/#mixin-slotable
// https://dom.spec.whatwg.org/#light-tree-slotables
class SlotableMixinImpl {
  _initSlotableMixin() {
    this._slotableName = "";
  }

  _attrModifiedSlotableMixin(name, value, oldValue) {
    if (name === "slot") {
      if (value === oldValue) {
        return;
      }

      if (value === null && oldValue === "") {
        return;
      }

      if (value === "" && oldValue === null) {
        return;
      }

      if (value === null || value === "") {
        this._slotableName = "";
      } else {
        this._slotableName = value;
      }


      if (this._assignedSlot) {
        assignSlotable(this._assignedSlot);
      }

      assignSlot(this);
    }
  }

  get assignedSlot() {
    return findSlot(this, "open");
  }
}

module.exports = {
  implementation: SlotableMixinImpl
};
