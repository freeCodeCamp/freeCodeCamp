"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = void 0;
/** @internal */
const txnCounter = {
  ref: 0
};
/** @internal */
const make = () => {
  const newId = txnCounter.ref + 1;
  txnCounter.ref = newId;
  return newId;
};
exports.make = make;
//# sourceMappingURL=txnId.js.map