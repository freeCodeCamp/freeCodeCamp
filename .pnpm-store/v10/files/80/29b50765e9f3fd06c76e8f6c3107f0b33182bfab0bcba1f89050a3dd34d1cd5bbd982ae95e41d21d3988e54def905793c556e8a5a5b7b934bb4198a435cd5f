"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleShotGen = void 0;
/** @internal */
class SingleShotGen {
  self;
  called = false;
  constructor(self) {
    this.self = self;
  }
  next(a) {
    return this.called ? {
      value: a,
      done: true
    } : (this.called = true, {
      value: this.self,
      done: false
    });
  }
  return(a) {
    return {
      value: a,
      done: true
    };
  }
  throw(e) {
    throw e;
  }
  [Symbol.iterator]() {
    return new SingleShotGen(this.self);
  }
}
exports.SingleShotGen = SingleShotGen;
//# sourceMappingURL=singleShotGen.js.map