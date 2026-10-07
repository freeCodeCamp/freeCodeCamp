import { dual } from "../Function.js";
/** @internal */
export const OP_SEQUENTIAL = "Sequential";
/** @internal */
export const OP_PARALLEL = "Parallel";
/** @internal */
export const OP_PARALLEL_N = "ParallelN";
/** @internal */
export const sequential = {
  _tag: OP_SEQUENTIAL
};
/** @internal */
export const parallel = {
  _tag: OP_PARALLEL
};
/** @internal */
export const parallelN = parallelism => ({
  _tag: OP_PARALLEL_N,
  parallelism
});
/** @internal */
export const isSequential = self => self._tag === OP_SEQUENTIAL;
/** @internal */
export const isParallel = self => self._tag === OP_PARALLEL;
/** @internal */
export const isParallelN = self => self._tag === OP_PARALLEL_N;
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, options) => {
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