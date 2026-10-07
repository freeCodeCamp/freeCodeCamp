"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _classApplyDescriptorDestructureSet;
function _classApplyDescriptorDestructureSet(receiver, descriptor) {
  if (descriptor.set) {
    if (!("__destrObj" in descriptor)) {
      descriptor.__destrObj = {
        set value(v) {
          descriptor.set.call(receiver, v);
        }
      };
    }
    return descriptor.__destrObj;
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    return descriptor;
  }
}

//# sourceMappingURL=classApplyDescriptorDestructureSet.js.map
