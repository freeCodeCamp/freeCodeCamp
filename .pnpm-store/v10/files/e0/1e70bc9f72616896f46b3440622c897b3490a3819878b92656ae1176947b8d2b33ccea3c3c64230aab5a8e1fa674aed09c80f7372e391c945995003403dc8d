"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _classApplyDescriptorSet;
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

//# sourceMappingURL=classApplyDescriptorSet.js.map
