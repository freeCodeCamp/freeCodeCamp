"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.single = exports.sequentialCollectionToChunk = exports.sequentialCollectionMake = exports.sequentialCollectionKeys = exports.sequentialCollectionIsEmpty = exports.sequentialCollectionCombine = exports.seq = exports.reduce = exports.parallelCollectionToSequentialCollection = exports.parallelCollectionMake = exports.parallelCollectionKeys = exports.parallelCollectionIsEmpty = exports.parallelCollectionEmpty = exports.parallelCollectionCombine = exports.parallelCollectionAdd = exports.par = exports.mapRequestResolvers = exports.makeEntry = exports.isEntry = exports.flatten = exports.empty = exports.SequentialCollectionTypeId = exports.RequestBlockParallelTypeId = exports.MapRequestResolversReducer = exports.EntryTypeId = void 0;
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var Equal = _interopRequireWildcard(require("../Equal.js"));
var HashMap = _interopRequireWildcard(require("../HashMap.js"));
var List = _interopRequireWildcard(require("../List.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Predicate = require("../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const empty = exports.empty = {
  _tag: "Empty"
};
/**
 * Combines this collection of blocked requests with the specified collection
 * of blocked requests, in parallel.
 *
 * @internal
 */
const par = (self, that) => ({
  _tag: "Par",
  left: self,
  right: that
});
/**
 * Combines this collection of blocked requests with the specified collection
 * of blocked requests, in sequence.
 *
 * @internal
 */
exports.par = par;
const seq = (self, that) => ({
  _tag: "Seq",
  left: self,
  right: that
});
/**
 * Constructs a collection of blocked requests from the specified blocked
 * request and data source.
 *
 * @internal
 */
exports.seq = seq;
const single = (dataSource, blockedRequest) => ({
  _tag: "Single",
  dataSource: dataSource,
  blockedRequest
});
/** @internal */
exports.single = single;
const MapRequestResolversReducer = f => ({
  emptyCase: () => empty,
  parCase: (left, right) => par(left, right),
  seqCase: (left, right) => seq(left, right),
  singleCase: (dataSource, blockedRequest) => single(f(dataSource), blockedRequest)
});
/**
 * Transforms all data sources with the specified data source aspect, which
 * can change the environment type of data sources but must preserve the
 * request type of each data source.
 *
 * @internal
 */
exports.MapRequestResolversReducer = MapRequestResolversReducer;
const mapRequestResolvers = (self, f) => reduce(self, MapRequestResolversReducer(f));
/**
 * Folds over the cases of this collection of blocked requests with the
 * specified functions.
 *
 * @internal
 */
exports.mapRequestResolvers = mapRequestResolvers;
const reduce = (self, reducer) => {
  let input = List.of(self);
  let output = List.empty();
  while (List.isCons(input)) {
    const current = input.head;
    switch (current._tag) {
      case "Empty":
        {
          output = List.cons(Either.right(reducer.emptyCase()), output);
          input = input.tail;
          break;
        }
      case "Par":
        {
          output = List.cons(Either.left({
            _tag: "ParCase"
          }), output);
          input = List.cons(current.left, List.cons(current.right, input.tail));
          break;
        }
      case "Seq":
        {
          output = List.cons(Either.left({
            _tag: "SeqCase"
          }), output);
          input = List.cons(current.left, List.cons(current.right, input.tail));
          break;
        }
      case "Single":
        {
          const result = reducer.singleCase(current.dataSource, current.blockedRequest);
          output = List.cons(Either.right(result), output);
          input = input.tail;
          break;
        }
    }
  }
  const result = List.reduce(output, List.empty(), (acc, current) => {
    switch (current._tag) {
      case "Left":
        {
          const left = List.unsafeHead(acc);
          const right = List.unsafeHead(List.unsafeTail(acc));
          const tail = List.unsafeTail(List.unsafeTail(acc));
          switch (current.left._tag) {
            case "ParCase":
              {
                return List.cons(reducer.parCase(left, right), tail);
              }
            case "SeqCase":
              {
                return List.cons(reducer.seqCase(left, right), tail);
              }
          }
        }
      case "Right":
        {
          return List.cons(current.right, acc);
        }
    }
  });
  if (List.isNil(result)) {
    throw new Error("BUG: BlockedRequests.reduce - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  return result.head;
};
/**
 * Flattens a collection of blocked requests into a collection of pipelined
 * and batched requests that can be submitted for execution.
 *
 * @internal
 */
exports.reduce = reduce;
const flatten = self => {
  let current = List.of(self);
  let updated = List.empty();
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const [parallel, sequential] = List.reduce(current, [parallelCollectionEmpty(), List.empty()], ([parallel, sequential], blockedRequest) => {
      const [par, seq] = step(blockedRequest);
      return [parallelCollectionCombine(parallel, par), List.appendAll(sequential, seq)];
    });
    updated = merge(updated, parallel);
    if (List.isNil(sequential)) {
      return List.reverse(updated);
    }
    current = sequential;
  }
  throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
};
/**
 * Takes one step in evaluating a collection of blocked requests, returning a
 * collection of blocked requests that can be performed in parallel and a list
 * of blocked requests that must be performed sequentially after those
 * requests.
 */
exports.flatten = flatten;
const step = requests => {
  let current = requests;
  let parallel = parallelCollectionEmpty();
  let stack = List.empty();
  let sequential = List.empty();
  // eslint-disable-next-line no-constant-condition
  while (1) {
    switch (current._tag) {
      case "Empty":
        {
          if (List.isNil(stack)) {
            return [parallel, sequential];
          }
          current = stack.head;
          stack = stack.tail;
          break;
        }
      case "Par":
        {
          stack = List.cons(current.right, stack);
          current = current.left;
          break;
        }
      case "Seq":
        {
          const left = current.left;
          const right = current.right;
          switch (left._tag) {
            case "Empty":
              {
                current = right;
                break;
              }
            case "Par":
              {
                const l = left.left;
                const r = left.right;
                current = par(seq(l, right), seq(r, right));
                break;
              }
            case "Seq":
              {
                const l = left.left;
                const r = left.right;
                current = seq(l, seq(r, right));
                break;
              }
            case "Single":
              {
                current = left;
                sequential = List.cons(right, sequential);
                break;
              }
          }
          break;
        }
      case "Single":
        {
          parallel = parallelCollectionAdd(parallel, current);
          if (List.isNil(stack)) {
            return [parallel, sequential];
          }
          current = stack.head;
          stack = stack.tail;
          break;
        }
    }
  }
  throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
};
/**
 * Merges a collection of requests that must be executed sequentially with a
 * collection of requests that can be executed in parallel. If the collections
 * are both from the same single data source then the requests can be
 * pipelined while preserving ordering guarantees.
 */
const merge = (sequential, parallel) => {
  if (List.isNil(sequential)) {
    return List.of(parallelCollectionToSequentialCollection(parallel));
  }
  if (parallelCollectionIsEmpty(parallel)) {
    return sequential;
  }
  const seqHeadKeys = sequentialCollectionKeys(sequential.head);
  const parKeys = parallelCollectionKeys(parallel);
  if (seqHeadKeys.length === 1 && parKeys.length === 1 && Equal.equals(seqHeadKeys[0], parKeys[0])) {
    return List.cons(sequentialCollectionCombine(sequential.head, parallelCollectionToSequentialCollection(parallel)), sequential.tail);
  }
  return List.cons(parallelCollectionToSequentialCollection(parallel), sequential);
};
//
// circular
//
/** @internal */
const EntryTypeId = exports.EntryTypeId = /*#__PURE__*/Symbol.for("effect/RequestBlock/Entry");
/** @internal */
class EntryImpl {
  request;
  result;
  listeners;
  ownerId;
  state;
  [EntryTypeId] = blockedRequestVariance;
  constructor(request, result, listeners, ownerId, state) {
    this.request = request;
    this.result = result;
    this.listeners = listeners;
    this.ownerId = ownerId;
    this.state = state;
  }
}
const blockedRequestVariance = {
  /* c8 ignore next */
  _R: _ => _
};
/** @internal */
const isEntry = u => (0, _Predicate.hasProperty)(u, EntryTypeId);
/** @internal */
exports.isEntry = isEntry;
const makeEntry = options => new EntryImpl(options.request, options.result, options.listeners, options.ownerId, options.state);
/** @internal */
exports.makeEntry = makeEntry;
const RequestBlockParallelTypeId = exports.RequestBlockParallelTypeId = /*#__PURE__*/Symbol.for("effect/RequestBlock/RequestBlockParallel");
const parallelVariance = {
  /* c8 ignore next */
  _R: _ => _
};
class ParallelImpl {
  map;
  [RequestBlockParallelTypeId] = parallelVariance;
  constructor(map) {
    this.map = map;
  }
}
/** @internal */
const parallelCollectionEmpty = () => new ParallelImpl(HashMap.empty());
/** @internal */
exports.parallelCollectionEmpty = parallelCollectionEmpty;
const parallelCollectionMake = (dataSource, blockedRequest) => new ParallelImpl(HashMap.make([dataSource, Chunk.of(blockedRequest)]));
/** @internal */
exports.parallelCollectionMake = parallelCollectionMake;
const parallelCollectionAdd = (self, blockedRequest) => new ParallelImpl(HashMap.modifyAt(self.map, blockedRequest.dataSource, _ => Option.orElseSome(Option.map(_, Chunk.append(blockedRequest.blockedRequest)), () => Chunk.of(blockedRequest.blockedRequest))));
/** @internal */
exports.parallelCollectionAdd = parallelCollectionAdd;
const parallelCollectionCombine = (self, that) => new ParallelImpl(HashMap.reduce(self.map, that.map, (map, value, key) => HashMap.set(map, key, Option.match(HashMap.get(map, key), {
  onNone: () => value,
  onSome: other => Chunk.appendAll(value, other)
}))));
/** @internal */
exports.parallelCollectionCombine = parallelCollectionCombine;
const parallelCollectionIsEmpty = self => HashMap.isEmpty(self.map);
/** @internal */
exports.parallelCollectionIsEmpty = parallelCollectionIsEmpty;
const parallelCollectionKeys = self => Array.from(HashMap.keys(self.map));
/** @internal */
exports.parallelCollectionKeys = parallelCollectionKeys;
const parallelCollectionToSequentialCollection = self => sequentialCollectionMake(HashMap.map(self.map, x => Chunk.of(x)));
// TODO
// /** @internal */
// export const parallelCollectionToChunk = <R>(
//   self: ParallelCollection<R>
// ): Array<[RequestResolver.RequestResolver<unknown, R>, Array<Request.Entry<unknown>>]> => Array.from(self.map) as any
/** @internal */
exports.parallelCollectionToSequentialCollection = parallelCollectionToSequentialCollection;
const SequentialCollectionTypeId = exports.SequentialCollectionTypeId = /*#__PURE__*/Symbol.for("effect/RequestBlock/RequestBlockSequential");
const sequentialVariance = {
  /* c8 ignore next */
  _R: _ => _
};
class SequentialImpl {
  map;
  [SequentialCollectionTypeId] = sequentialVariance;
  constructor(map) {
    this.map = map;
  }
}
/** @internal */
const sequentialCollectionMake = map => new SequentialImpl(map);
/** @internal */
exports.sequentialCollectionMake = sequentialCollectionMake;
const sequentialCollectionCombine = (self, that) => new SequentialImpl(HashMap.reduce(that.map, self.map, (map, value, key) => HashMap.set(map, key, Option.match(HashMap.get(map, key), {
  onNone: () => Chunk.empty(),
  onSome: a => Chunk.appendAll(a, value)
}))));
/** @internal */
exports.sequentialCollectionCombine = sequentialCollectionCombine;
const sequentialCollectionIsEmpty = self => HashMap.isEmpty(self.map);
/** @internal */
exports.sequentialCollectionIsEmpty = sequentialCollectionIsEmpty;
const sequentialCollectionKeys = self => Array.from(HashMap.keys(self.map));
/** @internal */
exports.sequentialCollectionKeys = sequentialCollectionKeys;
const sequentialCollectionToChunk = self => Array.from(self.map);
exports.sequentialCollectionToChunk = sequentialCollectionToChunk;
//# sourceMappingURL=blockedRequests.js.map