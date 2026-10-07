"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequential = exports.parallelN = exports.parallel = exports.match = exports.isSequential = exports.isParallelN = exports.isParallel = exports.OP_SEQUENTIAL = exports.OP_PARALLEL_N = exports.OP_PARALLEL = void 0;
var _Function = require("../Function.js");
/** @internal */
const OP_SEQUENTIAL = exports.OP_SEQUENTIAL = "Sequential";
/** @internal */
const OP_PARALLEL = exports.OP_PARALLEL = "Parallel";
/** @internal */
const OP_PARALLEL_N = exports.OP_PARALLEL_N = "ParallelN";
/** @internal */
const sequential = exports.sequential = {
  _tag: OP_SEQUENTIAL
};
/** @internal */
const parallel = exports.parallel = {
  _tag: OP_PARALLEL
};
/** @internal */
const parallelN = parallelism => ({
  _tag: OP_PARALLEL_N,
  parallelism
});
/** @internal */
exports.parallelN = parallelN;
const isSequential = self => self._tag === OP_SEQUENTIAL;
/** @internal */
exports.isSequential = isSequential;
const isParallel = self => self._tag === OP_PARALLEL;
/** @internal */
exports.isParallel = isParallel;
const isParallelN = self => self._tag === OP_PARALLEL_N;
/** @internal */
exports.isParallelN = isParallelN;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  switch (self._tag) {
    case OP_SEQUENTIAL:
      {
        return options.onSequential();
      }
    case OP_PARALLEL:
      {
        return options.onParallel();
      }
    case OP_PARALLEL_N:
      {
        return options.onParallelN(self.parallelism);
      }
  }
});
//# sourceMappingURL=executionStrategy.js.map