import * as Chunk from "../Chunk.js"
import type * as Deferred from "../Deferred.js"
import * as Either from "../Either.js"
import * as Equal from "../Equal.js"
import type { FiberId } from "../FiberId.js"
import * as HashMap from "../HashMap.js"
import * as List from "../List.js"
import * as Option from "../Option.js"
import { hasProperty } from "../Predicate.js"
import type * as Request from "../Request.js"
import type * as RequestBlock from "../RequestBlock.js"
import type * as RequestResolver from "../RequestResolver.js"

/** @internal */
export const empty: RequestBlock.RequestBlock = {
  _tag: "Empty"
}

/**
 * Combines this collection of blocked requests with the specified collection
 * of blocked requests, in parallel.
 *
 * @internal
 */
export const par = (
  self: RequestBlock.RequestBlock,
  that: RequestBlock.RequestBlock
): RequestBlock.RequestBlock => ({
  _tag: "Par",
  left: self,
  right: that
})

/**
 * Combines this collection of blocked requests with the specified collection
 * of blocked requests, in sequence.
 *
 * @internal
 */
export const seq = (
  self: RequestBlock.RequestBlock,
  that: RequestBlock.RequestBlock
): RequestBlock.RequestBlock => ({
  _tag: "Seq",
  left: self,
  right: that
})

/**
 * Constructs a collection of blocked requests from the specified blocked
 * request and data source.
 *
 * @internal
 */
export const single = <A>(
  dataSource: RequestResolver.RequestResolver<A>,
  blockedRequest: Request.Entry<A>
): RequestBlock.RequestBlock => ({
  _tag: "Single",
  dataSource: dataSource as any,
  blockedRequest
})

/** @internal */
export const MapRequestResolversReducer = <A>(
  f: (dataSource: RequestResolver.RequestResolver<A>) => RequestResolver.RequestResolver<A>
): RequestBlock.RequestBlock.Reducer<RequestBlock.RequestBlock> => ({
  emptyCase: () => empty,
  parCase: (left, right) => par(left, right),
  seqCase: (left, right) => seq(left, right),
  singleCase: (dataSource, blockedRequest) => single(f(dataSource), blockedRequest as any)
})

type BlockedRequestsCase = ParCase | SeqCase

interface ParCase {
  readonly _tag: "ParCase"
}

interface SeqCase {
  readonly _tag: "SeqCase"
}

/**
 * Transforms all data sources with the specified data source aspect, which
 * can change the environment type of data sources but must preserve the
 * request type of each data source.
 *
 * @internal
 */
export const mapRequestResolvers = <A>(
  self: RequestBlock.RequestBlock,
  f: (dataSource: RequestResolver.RequestResolver<A>) => RequestResolver.RequestResolver<A>
): RequestBlock.RequestBlock => reduce(self, MapRequestResolversReducer(f))

/**
 * Folds over the cases of this collection of blocked requests with the
 * specified functions.
 *
 * @internal
 */
export const reduce = <Z>(
  self: RequestBlock.RequestBlock,
  reducer: RequestBlock.RequestBlock.Reducer<Z>
): Z => {
  let input: List.List<RequestBlock.RequestBlock> = List.of(self)
  let output = List.empty<Either.Either<Z, BlockedRequestsCase>>()
  while (List.isCons(input)) {
    const current: RequestBlock.RequestBlock = input.head
    switch (current._tag) {
      case "Empty": {
        output = List.cons(Either.right(reducer.emptyCase()), output)
        input = input.tail
        break
      }
      case "Par": {
        output = List.cons(Either.left({ _tag: "ParCase" }), output)
        input = List.cons(current.left, List.cons(current.right, input.tail))
        break
      }
      case "Seq": {
        output = List.cons(Either.left({ _tag: "SeqCase" }), output)
        input = List.cons(current.left, List.cons(current.right, input.tail))
        break
      }
      case "Single": {
        const result = reducer.singleCase(current.dataSource, current.blockedRequest)
        output = List.cons(Either.right(result), output)
        input = input.tail
        break
      }
    }
  }
  const result = List.reduce(output, List.empty<Z>(), (acc, current) => {
    switch (current._tag) {
      case "Left": {
        const left = List.unsafeHead(acc)
        const right = List.unsafeHead(List.unsafeTail(acc))
        const tail = List.unsafeTail(List.unsafeTail(acc))
        switch (current.left._tag) {
          case "ParCase": {
            return List.cons(reducer.parCase(left, right), tail)
          }
          case "SeqCase": {
            return List.cons(reducer.seqCase(left, right), tail)
          }
        }
      }
      case "Right": {
        return List.cons(current.right, acc)
      }
    }
  })
  if (List.isNil(result)) {
    throw new Error(
      "BUG: BlockedRequests.reduce - please report an issue at https://github.com/Effect-TS/effect/issues"
    )
  }
  return result.head
}

/**
 * Flattens a collection of blocked requests into a collection of pipelined
 * and batched requests that can be submitted for execution.
 *
 * @internal
 */
export const flatten = (
  self: RequestBlock.RequestBlock
): List.List<SequentialCollection> => {
  let current = List.of(self)
  let updated = List.empty<SequentialCollection>()
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const [parallel, sequential] = List.reduce(
      current,
      [parallelCollectionEmpty(), List.empty<RequestBlock.RequestBlock>()] as const,
      ([parallel, sequential], blockedRequest) => {
        const [par, seq] = step(blockedRequest)
        return [
          parallelCollectionCombine(parallel, par),
          List.appendAll(sequential, seq)
        ]
      }
    )
    updated = merge(updated, parallel)
    if (List.isNil(sequential)) {
      return List.reverse(updated)
    }
    current = sequential
  }
  throw new Error(
    "BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues"
  )
}

/**
 * Takes one step in evaluating a collection of blocked requests, returning a
 * collection of blocked requests that can be performed in parallel and a list
 * of blocked requests that must be performed sequentially after those
 * requests.
 */
const step = (
  requests: RequestBlock.RequestBlock
): [ParallelCollection, List.List<RequestBlock.RequestBlock>] => {
  let current: RequestBlock.RequestBlock = requests
  let parallel = parallelCollectionEmpty()
  let stack = List.empty<RequestBlock.RequestBlock>()
  let sequential = List.empty<RequestBlock.RequestBlock>()
  // eslint-disable-next-line no-constant-condition
  while (1) {
    switch (current._tag) {
      case "Empty": {
        if (List.isNil(stack)) {
          return [parallel, sequential]
        }
        current = stack.head
        stack = stack.tail
        break
      }
      case "Par": {
        stack = List.cons(current.right, stack)
        current = current.left
        break
      }
      case "Seq": {
        const left = current.left
        const right = current.right
        switch (left._tag) {
          case "Empty": {
            current = right
            break
          }
          case "Par": {
            const l = left.left
            const r = left.right
            current = par(seq(l, right), seq(r, right))
            break
          }
          case "Seq": {
            const l = left.left
            const r = left.right
            current = seq(l, seq(r, right))
            break
          }
          case "Single": {
            current = left
            sequential = List.cons(right, sequential)
            break
          }
        }
        break
      }
      case "Single": {
        parallel = parallelCollectionAdd(
          parallel,
          current
        )
        if (List.isNil(stack)) {
          return [parallel, sequential]
        }
        current = stack.head
        stack = stack.tail
        break
      }
    }
  }
  throw new Error(
    "BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues"
  )
}

/**
 * Merges a collection of requests that must be executed sequentially with a
 * collection of requests that can be executed in parallel. If the collections
 * are both from the same single data source then the requests can be
 * pipelined while preserving ordering guarantees.
 */
const merge = (
  sequential: List.List<SequentialCollection>,
  parallel: ParallelCollection
): List.List<SequentialCollection> => {
  if (List.isNil(sequential)) {
    return List.of(parallelCollectionToSequentialCollection(parallel))
  }
  if (parallelCollectionIsEmpty(parallel)) {
    return sequential
  }
  const seqHeadKeys = sequentialCollectionKeys(sequential.head)
  const parKeys = parallelCollectionKeys(parallel)
  if (
    seqHeadKeys.length === 1 &&
    parKeys.length === 1 &&
    Equal.equals(seqHeadKeys[0], parKeys[0])
  ) {
    return List.cons(
      sequentialCollectionCombine(
        sequential.head,
        parallelCollectionToSequentialCollection(parallel)
      ),
      sequential.tail
    )
  }
  return List.cons(parallelCollectionToSequentialCollection(parallel), sequential)
}

//
// circular
//

/** @internal */
export const EntryTypeId: Request.EntryTypeId = Symbol.for(
  "effect/RequestBlock/Entry"
) as Request.EntryTypeId

/** @internal */
class EntryImpl<A extends Request.Request<any, any>> implements Request.Entry<A> {
  readonly [EntryTypeId] = blockedRequestVariance
  constructor(
    readonly request: A,
    readonly result: Deferred.Deferred<Request.Request.Success<A>, Request.Request.Error<A>>,
    readonly listeners: Request.Listeners,
    readonly ownerId: FiberId,
    readonly state: {
      completed: boolean
    }
  ) {}
}

const blockedRequestVariance = {
  /* c8 ignore next */
  _R: (_: never) => _
}

/** @internal */
export const isEntry = (u: unknown): u is Request.Entry<unknown> => hasProperty(u, EntryTypeId)

/** @internal */
export const makeEntry = <A extends Request.Request<any, any>>(
  options: {
    readonly request: A
    readonly result: Deferred.Deferred<Request.Request.Success<A>, Request.Request.Error<A>>
    readonly listeners: Request.Listeners
    readonly ownerId: FiberId
    readonly state: { completed: boolean }
  }
): Request.Entry<A> => new EntryImpl(options.request, options.result, options.listeners, options.ownerId, options.state)

/** @internal */
export const RequestBlockParallelTypeId = Symbol.for(
  "effect/RequestBlock/RequestBlockParallel"
)

const parallelVariance = {
  /* c8 ignore next */
  _R: (_: never) => _
}

class ParallelImpl implements ParallelCollection {
  readonly [RequestBlockParallelTypeId] = parallelVariance
  constructor(
    readonly map: HashMap.HashMap<
      RequestResolver.RequestResolver<unknown, unknown>,
      Chunk.Chunk<Request.Entry<unknown>>
    >
  ) {}
}

/** @internal */
export const parallelCollectionEmpty = (): ParallelCollection => new ParallelImpl(HashMap.empty())

/** @internal */
export const parallelCollectionMake = <A>(
  dataSource: RequestResolver.RequestResolver<A>,
  blockedRequest: Request.Entry<A>
): ParallelCollection => new ParallelImpl(HashMap.make([dataSource, Chunk.of(blockedRequest)]) as any)

/** @internal */
export const parallelCollectionAdd = (
  self: ParallelCollection,
  blockedRequest: RequestBlock.Single
): ParallelCollection =>
  new ParallelImpl(HashMap.modifyAt(
    self.map,
    blockedRequest.dataSource,
    (_) =>
      Option.orElseSome(
        Option.map(_, Chunk.append(blockedRequest.blockedRequest)),
        () => Chunk.of(blockedRequest.blockedRequest)
      )
  ))

/** @internal */
export const parallelCollectionCombine = (
  self: ParallelCollection,
  that: ParallelCollection
): ParallelCollection =>
  new ParallelImpl(HashMap.reduce(self.map, that.map, (map, value, key) =>
    HashMap.set(
      map,
      key,
      Option.match(HashMap.get(map, key), {
        onNone: () => value,
        onSome: (other) => Chunk.appendAll(value, other)
      })
    )))

/** @internal */
export const parallelCollectionIsEmpty = (self: ParallelCollection): boolean => HashMap.isEmpty(self.map)

/** @internal */
export const parallelCollectionKeys = (
  self: ParallelCollection
): Array<RequestResolver.RequestResolver<unknown>> => Array.from(HashMap.keys(self.map)) as any

/** @internal */
export const parallelCollectionToSequentialCollection = (
  self: ParallelCollection
): SequentialCollection => sequentialCollectionMake(HashMap.map(self.map, (x) => Chunk.of(x)) as any)

// TODO
// /** @internal */
// export const parallelCollectionToChunk = <R>(
//   self: ParallelCollection<R>
// ): Array<[RequestResolver.RequestResolver<unknown, R>, Array<Request.Entry<unknown>>]> => Array.from(self.map) as any

/** @internal */
export const SequentialCollectionTypeId = Symbol.for(
  "effect/RequestBlock/RequestBlockSequential"
)

const sequentialVariance = {
  /* c8 ignore next */
  _R: (_: never) => _
}

class SequentialImpl implements SequentialCollection {
  readonly [SequentialCollectionTypeId] = sequentialVariance
  constructor(
    readonly map: HashMap.HashMap<
      RequestResolver.RequestResolver<unknown, unknown>,
      Chunk.Chunk<Chunk.Chunk<Request.Entry<unknown>>>
    >
  ) {}
}

/** @internal */
export const sequentialCollectionMake = <A, R>(
  map: HashMap.HashMap<
    RequestResolver.RequestResolver<A, R>,
    Chunk.Chunk<Chunk.Chunk<Request.Entry<A>>>
  >
): SequentialCollection => new SequentialImpl(map as any)

/** @internal */
export const sequentialCollectionCombine = (
  self: SequentialCollection,
  that: SequentialCollection
): SequentialCollection =>
  new SequentialImpl(HashMap.reduce(that.map, self.map, (map, value, key) =>
    HashMap.set(
      map,
      key,
      Option.match(HashMap.get(map, key), {
        onNone: () => Chunk.empty(),
        onSome: (a) => Chunk.appendAll(a, value)
      })
    )))

/** @internal */
export const sequentialCollectionIsEmpty = (self: SequentialCollection): boolean => HashMap.isEmpty(self.map)

/** @internal */
export const sequentialCollectionKeys = (
  self: SequentialCollection
): Array<RequestResolver.RequestResolver<unknown>> => Array.from(HashMap.keys(self.map)) as any

/** @internal */
export const sequentialCollectionToChunk = (
  self: SequentialCollection
): Array<[RequestResolver.RequestResolver<unknown>, Chunk.Chunk<Chunk.Chunk<Request.Entry<unknown>>>]> =>
  Array.from(self.map) as any

/** @internal */
export type RequestBlockParallelTypeId = typeof RequestBlockParallelTypeId

/** @internal */
export interface ParallelCollection extends ParallelCollection.Variance {
  readonly map: HashMap.HashMap<
    RequestResolver.RequestResolver<unknown, unknown>,
    Chunk.Chunk<Request.Entry<unknown>>
  >
}

/** @internal */
export declare namespace ParallelCollection {
  /** @internal */
  export interface Variance {
    readonly [RequestBlockParallelTypeId]: {}
  }
}

/** @internal */
export type SequentialCollectionTypeId = typeof SequentialCollectionTypeId

/** @internal */
export interface SequentialCollection extends SequentialCollection.Variance {
  readonly map: HashMap.HashMap<
    RequestResolver.RequestResolver<unknown, unknown>,
    Chunk.Chunk<Chunk.Chunk<Request.Entry<unknown>>>
  >
}

/** @internal */
export declare namespace SequentialCollection {
  /** @internal */
  export interface Variance {
    readonly [SequentialCollectionTypeId]: {}
  }
}
