import * as Chunk from "../Chunk.js";
import * as Either from "../Either.js";
import * as Equal from "../Equal.js";
import * as HashMap from "../HashMap.js";
import * as List from "../List.js";
import * as Option from "../Option.js";
import { hasProperty } from "../Predicate.js";
/** @internal */
export const empty = {
  _tag: "Empty"
};
/**
 * Combines this collection of blocked requests with the specified collection
 * of blocked requests, in parallel.
 *
 * @internal
 */
export const par = (self, that) => ({
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
export const seq = (self, that) => ({
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
export const single = (dataSource, blockedRequest) => ({
  _tag: "Single",
  dataSource: dataSource,
  blockedRequest
});
/** @internal */
export const MapRequestResolversReducer = f => ({
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
export const mapRequestResolvers = (self, f) => reduce(self, MapRequestResolversReducer(f));
/**
 * Folds over the cases of this collection of blocked requests with the
 * specified functions.
 *
 * @internal
 */
export const reduce = (self, reducer) => {
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
export const flatten = self => {
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
export const EntryTypeId = /*#__PURE__*/Symbol.for("effect/RequestBlock/Entry");
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
export const isEntry = u => hasProperty(u, EntryTypeId);
/** @internal */
export const makeEntry = options => new EntryImpl(options.request, options.result, options.listeners, options.ownerId, options.state);
/** @internal */
export const RequestBlockParallelTypeId = /*#__PURE__*/Symbol.for("effect/RequestBlock/RequestBlockParallel");
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
export const parallelCollectionEmpty = () => new ParallelImpl(HashMap.empty());
/** @internal */
export const parallelCollectionMake = (dataSource, blockedRequest) => new ParallelImpl(HashMap.make([dataSource, Chunk.of(blockedRequest)]));
/** @internal */
export const parallelCollectionAdd = (self, blockedRequest) => new ParallelImpl(HashMap.modifyAt(self.map, blockedRequest.dataSource, _ => Option.orElseSome(Option.map(_, Chunk.append(blockedRequest.blockedRequest)), () => Chunk.of(blockedRequest.blockedRequest))));
/** @internal */
export const parallelCollectionCombine = (self, that) => new ParallelImpl(HashMap.reduce(self.map, that.map, (map, value, key) => HashMap.set(map, key, Option.match(HashMap.get(map, key), {
  onNone: () => value,
  onSome: other => Chunk.appendAll(value, other)
}))));
/** @internal */
export const parallelCollectionIsEmpty = self => HashMap.isEmpty(self.map);
/** @internal */
export const parallelCollectionKeys = self => Array.from(HashMap.keys(self.map));
/** @internal */
export const parallelCollectionToSequentialCollection = self => sequentialCollectionMake(HashMap.map(self.map, x => Chunk.of(x)));
// TODO
// /** @internal */
// export const parallelCollectionToChunk = <R>(
//   self: ParallelCollection<R>
// ): Array<[RequestResolver.RequestResolver<unknown, R>, Array<Request.Entry<unknown>>]> => Array.from(self.map) as any
/** @internal */
export const SequentialCollectionTypeId = /*#__PURE__*/Symbol.for("effect/RequestBlock/RequestBlockSequential");
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
export const sequentialCollectionMake = map => new SequentialImpl(map);
/** @internal */
export const sequentialCollectionCombine = (self, that) => new SequentialImpl(HashMap.reduce(that.map, self.map, (map, value, key) => HashMap.set(map, key, Option.match(HashMap.get(map, key), {
  onNone: () => Chunk.empty(),
  onSome: a => Chunk.appendAll(a, value)
}))));
/** @internal */
export const sequentialCollectionIsEmpty = self => HashMap.isEmpty(self.map);
/** @internal */
export const sequentialCollectionKeys = self => Array.from(HashMap.keys(self.map));
/** @internal */
export const sequentialCollectionToChunk = self => Array.from(self.map);
//# sourceMappingURL=blockedRequests.js.map