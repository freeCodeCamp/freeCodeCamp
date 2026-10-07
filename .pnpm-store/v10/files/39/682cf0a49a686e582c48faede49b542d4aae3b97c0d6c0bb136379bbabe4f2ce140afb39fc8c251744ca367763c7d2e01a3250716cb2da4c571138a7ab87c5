// Original autotracking implementation source:
// - https://gist.github.com/pzuraq/79bf862e0f8cd9521b79c4b6eccdc4f9
// Additional references:
// - https://www.pzuraq.com/blog/how-autotracking-works
// - https://v5.chriskrycho.com/journal/autotracking-elegant-dx-via-cutting-edge-cs/
import type { EqualityFn } from '../types'
import { assertIsFunction } from '../utils'

// The global revision clock. Every time state changes, the clock increments.
export let $REVISION = 0

// The current dependency tracker. Whenever we compute a cache, we create a Set
// to track any dependencies that are used while computing. If no cache is
// computing, then the tracker is null.
let CURRENT_TRACKER: Set<Cell<any> | TrackingCache> | null = null

// Storage represents a root value in the system - the actual state of our app.
export class Cell<T> {
  revision = $REVISION

  _value: T
  _lastValue: T
  _isEqual: EqualityFn = tripleEq

  constructor(initialValue: T, isEqual: EqualityFn = tripleEq) {
    this._value = this._lastValue = initialValue
    this._isEqual = isEqual
  }

  // Whenever a storage value is read, it'll add itself to the current tracker if
  // one exists, entangling its state with that cache.
  get value() {
    CURRENT_TRACKER?.add(this)

    return this._value
  }

  // Whenever a storage value is updated, we bump the global revision clock,
  // assign the revision for this storage to the new value, _and_ we schedule a
  // rerender. This is important, and it's what makes autotracking  _pull_
  // based. We don't actively tell the caches which depend on the storage that
  // anything has happened. Instead, we recompute the caches when needed.
  set value(newValue) {
    if (this.value === newValue) return

    this._value = newValue
    this.revision = ++$REVISION
  }
}

function tripleEq(a: unknown, b: unknown) {
  return a === b
}

// Caches represent derived state in the system. They are ultimately functions
// that are memoized based on what state they use to produce their output,
// meaning they will only rerun IFF a storage value that could affect the output
// has changed. Otherwise, they'll return the cached value.
export class TrackingCache {
  _cachedValue: any
  _cachedRevision = -1
  _deps: any[] = []
  hits = 0

  fn: () => any

  constructor(fn: () => any) {
    this.fn = fn
  }

  clear() {
    this._cachedValue = undefined
    this._cachedRevision = -1
    this._deps = []
    this.hits = 0
  }

  get value() {
    // When getting the value for a Cache, first we check all the dependencies of
    // the cache to see what their current revision is. If the current revision is
    // greater than the cached revision, then something has changed.
    if (this.revision > this._cachedRevision) {
      const { fn } = this

      // We create a new dependency tracker for this cache. As the cache runs
      // its function, any Storage or Cache instances which are used while
      // computing will be added to this tracker. In the end, it will be the
      // full list of dependencies that this Cache depends on.
      const currentTracker = new Set<Cell<any>>()
      const prevTracker = CURRENT_TRACKER

      CURRENT_TRACKER = currentTracker

      // try {
      this._cachedValue = fn()
      // } finally {
      CURRENT_TRACKER = prevTracker
      this.hits++
      this._deps = Array.from(currentTracker)

      // Set the cached revision. This is the current clock count of all the
      // dependencies. If any dependency changes, this number will be less
      // than the new revision.
      this._cachedRevision = this.revision
      // }
    }

    // If there is a current tracker, it means another Cache is computing and
    // using this one, so we add this one to the tracker.
    CURRENT_TRACKER?.add(this)

    // Always return the cached value.
    return this._cachedValue
  }

  get revision() {
    // The current revision is the max of all the dependencies' revisions.
    return Math.max(...this._deps.map(d => d.revision), 0)
  }
}

export function getValue<T>(cell: Cell<T>): T {
  if (!(cell instanceof Cell)) {
    console.warn('Not a valid cell! ', cell)
  }

  return cell.value
}

type CellValue<T extends Cell<unknown>> = T extends Cell<infer U> ? U : never

export function setValue<T extends Cell<unknown>>(
  storage: T,
  value: CellValue<T>
): void {
  if (!(storage instanceof Cell)) {
    throw new TypeError(
      'setValue must be passed a tracked store created with `createStorage`.'
    )
  }

  storage.value = storage._lastValue = value
}

export function createCell<T = unknown>(
  initialValue: T,
  isEqual: EqualityFn = tripleEq
): Cell<T> {
  return new Cell(initialValue, isEqual)
}

export function createCache<T = unknown>(fn: () => T): TrackingCache {
  assertIsFunction(
    fn,
    'the first parameter to `createCache` must be a function'
  )

  return new TrackingCache(fn)
}
