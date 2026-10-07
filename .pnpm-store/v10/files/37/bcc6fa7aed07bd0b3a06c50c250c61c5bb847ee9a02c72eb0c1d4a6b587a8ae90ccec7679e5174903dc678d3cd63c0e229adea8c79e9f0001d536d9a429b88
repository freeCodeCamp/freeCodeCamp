(function() {
  "use strict";
  var _a, _b;
  class ErrorHandler {
    constructor() {
      this.listeners = [];
      this.unexpectedErrorHandler = function(e) {
        setTimeout(() => {
          if (e.stack) {
            if (ErrorNoTelemetry.isErrorNoTelemetry(e)) {
              throw new ErrorNoTelemetry(e.message + "\n\n" + e.stack);
            }
            throw new Error(e.message + "\n\n" + e.stack);
          }
          throw e;
        }, 0);
      };
    }
    emit(e) {
      this.listeners.forEach((listener) => {
        listener(e);
      });
    }
    onUnexpectedError(e) {
      this.unexpectedErrorHandler(e);
      this.emit(e);
    }
    // For external errors, we don't want the listeners to be called
    onUnexpectedExternalError(e) {
      this.unexpectedErrorHandler(e);
    }
  }
  const errorHandler = new ErrorHandler();
  function onUnexpectedError(e) {
    if (!isCancellationError(e)) {
      errorHandler.onUnexpectedError(e);
    }
    return void 0;
  }
  function transformErrorForSerialization(error) {
    if (error instanceof Error) {
      const { name, message, cause } = error;
      const stack = error.stacktrace || error.stack;
      return {
        $isError: true,
        name,
        message,
        stack,
        noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(error),
        cause: cause ? transformErrorForSerialization(cause) : void 0,
        code: error.code
      };
    }
    return error;
  }
  const canceledName = "Canceled";
  function isCancellationError(error) {
    if (error instanceof CancellationError) {
      return true;
    }
    return error instanceof Error && error.name === canceledName && error.message === canceledName;
  }
  class CancellationError extends Error {
    constructor() {
      super(canceledName);
      this.name = this.message;
    }
  }
  class ErrorNoTelemetry extends Error {
    constructor(msg) {
      super(msg);
      this.name = "CodeExpectedError";
    }
    static fromError(err) {
      if (err instanceof ErrorNoTelemetry) {
        return err;
      }
      const result = new ErrorNoTelemetry();
      result.message = err.message;
      result.stack = err.stack;
      return result;
    }
    static isErrorNoTelemetry(err) {
      return err.name === "CodeExpectedError";
    }
  }
  class BugIndicatingError extends Error {
    constructor(message) {
      super(message || "An unexpected bug occurred.");
      Object.setPrototypeOf(this, BugIndicatingError.prototype);
    }
  }
  function assertNever(value, message = "Unreachable") {
    throw new Error(message);
  }
  function assert(condition, messageOrError = "unexpected state") {
    if (!condition) {
      const errorToThrow = typeof messageOrError === "string" ? new BugIndicatingError(`Assertion Failed: ${messageOrError}`) : messageOrError;
      throw errorToThrow;
    }
  }
  function assertFn(condition) {
    if (!condition()) {
      debugger;
      condition();
      onUnexpectedError(new BugIndicatingError("Assertion Failed"));
    }
  }
  function checkAdjacentItems(items, predicate) {
    let i = 0;
    while (i < items.length - 1) {
      const a2 = items[i];
      const b = items[i + 1];
      if (!predicate(a2, b)) {
        return false;
      }
      i++;
    }
    return true;
  }
  function isString$1(str) {
    return typeof str === "string";
  }
  function isIterable(obj) {
    return !!obj && typeof obj[Symbol.iterator] === "function";
  }
  var Iterable;
  (function(Iterable2) {
    function is(thing) {
      return !!thing && typeof thing === "object" && typeof thing[Symbol.iterator] === "function";
    }
    Iterable2.is = is;
    const _empty2 = Object.freeze([]);
    function empty() {
      return _empty2;
    }
    Iterable2.empty = empty;
    function* single(element) {
      yield element;
    }
    Iterable2.single = single;
    function wrap(iterableOrElement) {
      if (is(iterableOrElement)) {
        return iterableOrElement;
      } else {
        return single(iterableOrElement);
      }
    }
    Iterable2.wrap = wrap;
    function from(iterable) {
      return iterable || _empty2;
    }
    Iterable2.from = from;
    function* reverse(array) {
      for (let i = array.length - 1; i >= 0; i--) {
        yield array[i];
      }
    }
    Iterable2.reverse = reverse;
    function isEmpty(iterable) {
      return !iterable || iterable[Symbol.iterator]().next().done === true;
    }
    Iterable2.isEmpty = isEmpty;
    function first(iterable) {
      return iterable[Symbol.iterator]().next().value;
    }
    Iterable2.first = first;
    function some(iterable, predicate) {
      let i = 0;
      for (const element of iterable) {
        if (predicate(element, i++)) {
          return true;
        }
      }
      return false;
    }
    Iterable2.some = some;
    function every(iterable, predicate) {
      let i = 0;
      for (const element of iterable) {
        if (!predicate(element, i++)) {
          return false;
        }
      }
      return true;
    }
    Iterable2.every = every;
    function find(iterable, predicate) {
      for (const element of iterable) {
        if (predicate(element)) {
          return element;
        }
      }
      return void 0;
    }
    Iterable2.find = find;
    function* filter(iterable, predicate) {
      for (const element of iterable) {
        if (predicate(element)) {
          yield element;
        }
      }
    }
    Iterable2.filter = filter;
    function* map(iterable, fn) {
      let index = 0;
      for (const element of iterable) {
        yield fn(element, index++);
      }
    }
    Iterable2.map = map;
    function* flatMap(iterable, fn) {
      let index = 0;
      for (const element of iterable) {
        yield* fn(element, index++);
      }
    }
    Iterable2.flatMap = flatMap;
    function* concat(...iterables) {
      for (const item of iterables) {
        if (isIterable(item)) {
          yield* item;
        } else {
          yield item;
        }
      }
    }
    Iterable2.concat = concat;
    function reduce(iterable, reducer, initialValue) {
      let value = initialValue;
      for (const element of iterable) {
        value = reducer(value, element);
      }
      return value;
    }
    Iterable2.reduce = reduce;
    function length(iterable) {
      let count = 0;
      for (const _ of iterable) {
        count++;
      }
      return count;
    }
    Iterable2.length = length;
    function* slice(arr, from2, to = arr.length) {
      if (from2 < -arr.length) {
        from2 = 0;
      }
      if (from2 < 0) {
        from2 += arr.length;
      }
      if (to < 0) {
        to += arr.length;
      } else if (to > arr.length) {
        to = arr.length;
      }
      for (; from2 < to; from2++) {
        yield arr[from2];
      }
    }
    Iterable2.slice = slice;
    function consume(iterable, atMost = Number.POSITIVE_INFINITY) {
      const consumed = [];
      if (atMost === 0) {
        return [consumed, iterable];
      }
      const iterator = iterable[Symbol.iterator]();
      for (let i = 0; i < atMost; i++) {
        const next = iterator.next();
        if (next.done) {
          return [consumed, Iterable2.empty()];
        }
        consumed.push(next.value);
      }
      return [consumed, { [Symbol.iterator]() {
        return iterator;
      } }];
    }
    Iterable2.consume = consume;
    async function asyncToArray(iterable) {
      const result = [];
      for await (const item of iterable) {
        result.push(item);
      }
      return result;
    }
    Iterable2.asyncToArray = asyncToArray;
    async function asyncToArrayFlat(iterable) {
      let result = [];
      for await (const item of iterable) {
        result = result.concat(item);
      }
      return result;
    }
    Iterable2.asyncToArrayFlat = asyncToArrayFlat;
  })(Iterable || (Iterable = {}));
  function setParentOfDisposable(child, parent) {
  }
  function dispose(arg) {
    if (Iterable.is(arg)) {
      const errors = [];
      for (const d of arg) {
        if (d) {
          try {
            d.dispose();
          } catch (e) {
            errors.push(e);
          }
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else if (errors.length > 1) {
        throw new AggregateError(errors, "Encountered errors while disposing of store");
      }
      return Array.isArray(arg) ? [] : arg;
    } else if (arg) {
      arg.dispose();
      return arg;
    }
  }
  function combinedDisposable(...disposables) {
    const parent = toDisposable(() => dispose(disposables));
    return parent;
  }
  class FunctionDisposable {
    constructor(fn) {
      this._isDisposed = false;
      this._fn = fn;
    }
    dispose() {
      if (this._isDisposed) {
        return;
      }
      if (!this._fn) {
        throw new Error(`Unbound disposable context: Need to use an arrow function to preserve the value of this`);
      }
      this._isDisposed = true;
      this._fn();
    }
  }
  function toDisposable(fn) {
    return new FunctionDisposable(fn);
  }
  const _DisposableStore = class _DisposableStore {
    constructor() {
      this._toDispose = /* @__PURE__ */ new Set();
      this._isDisposed = false;
    }
    /**
     * Dispose of all registered disposables and mark this object as disposed.
     *
     * Any future disposables added to this object will be disposed of on `add`.
     */
    dispose() {
      if (this._isDisposed) {
        return;
      }
      this._isDisposed = true;
      this.clear();
    }
    /**
     * @return `true` if this object has been disposed of.
     */
    get isDisposed() {
      return this._isDisposed;
    }
    /**
     * Dispose of all registered disposables but do not mark this object as disposed.
     */
    clear() {
      if (this._toDispose.size === 0) {
        return;
      }
      try {
        dispose(this._toDispose);
      } finally {
        this._toDispose.clear();
      }
    }
    /**
     * Add a new {@link IDisposable disposable} to the collection.
     */
    add(o) {
      if (!o || o === Disposable.None) {
        return o;
      }
      if (o === this) {
        throw new Error("Cannot register a disposable on itself!");
      }
      if (this._isDisposed) {
        if (!_DisposableStore.DISABLE_DISPOSED_WARNING) {
          console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack);
        }
      } else {
        this._toDispose.add(o);
      }
      return o;
    }
    /**
     * Deletes a disposable from store and disposes of it. This will not throw or warn and proceed to dispose the
     * disposable even when the disposable is not part in the store.
     */
    delete(o) {
      if (!o) {
        return;
      }
      if (o === this) {
        throw new Error("Cannot dispose a disposable on itself!");
      }
      this._toDispose.delete(o);
      o.dispose();
    }
  };
  _DisposableStore.DISABLE_DISPOSED_WARNING = false;
  let DisposableStore = _DisposableStore;
  const _Disposable = class _Disposable {
    constructor() {
      this._store = new DisposableStore();
      setParentOfDisposable(this._store);
    }
    dispose() {
      this._store.dispose();
    }
    /**
     * Adds `o` to the collection of disposables managed by this object.
     */
    _register(o) {
      if (o === this) {
        throw new Error("Cannot register a disposable on itself!");
      }
      return this._store.add(o);
    }
  };
  _Disposable.None = Object.freeze({ dispose() {
  } });
  let Disposable = _Disposable;
  const _Node = class _Node {
    constructor(element) {
      this.element = element;
      this.next = _Node.Undefined;
      this.prev = _Node.Undefined;
    }
  };
  _Node.Undefined = new _Node(void 0);
  let Node = _Node;
  class LinkedList {
    constructor() {
      this._first = Node.Undefined;
      this._last = Node.Undefined;
      this._size = 0;
    }
    get size() {
      return this._size;
    }
    isEmpty() {
      return this._first === Node.Undefined;
    }
    clear() {
      let node = this._first;
      while (node !== Node.Undefined) {
        const next = node.next;
        node.prev = Node.Undefined;
        node.next = Node.Undefined;
        node = next;
      }
      this._first = Node.Undefined;
      this._last = Node.Undefined;
      this._size = 0;
    }
    unshift(element) {
      return this._insert(element, false);
    }
    push(element) {
      return this._insert(element, true);
    }
    _insert(element, atTheEnd) {
      const newNode = new Node(element);
      if (this._first === Node.Undefined) {
        this._first = newNode;
        this._last = newNode;
      } else if (atTheEnd) {
        const oldLast = this._last;
        this._last = newNode;
        newNode.prev = oldLast;
        oldLast.next = newNode;
      } else {
        const oldFirst = this._first;
        this._first = newNode;
        newNode.next = oldFirst;
        oldFirst.prev = newNode;
      }
      this._size += 1;
      let didRemove = false;
      return () => {
        if (!didRemove) {
          didRemove = true;
          this._remove(newNode);
        }
      };
    }
    shift() {
      if (this._first === Node.Undefined) {
        return void 0;
      } else {
        const res = this._first.element;
        this._remove(this._first);
        return res;
      }
    }
    pop() {
      if (this._last === Node.Undefined) {
        return void 0;
      } else {
        const res = this._last.element;
        this._remove(this._last);
        return res;
      }
    }
    _remove(node) {
      if (node.prev !== Node.Undefined && node.next !== Node.Undefined) {
        const anchor = node.prev;
        anchor.next = node.next;
        node.next.prev = anchor;
      } else if (node.prev === Node.Undefined && node.next === Node.Undefined) {
        this._first = Node.Undefined;
        this._last = Node.Undefined;
      } else if (node.next === Node.Undefined) {
        this._last = this._last.prev;
        this._last.next = Node.Undefined;
      } else if (node.prev === Node.Undefined) {
        this._first = this._first.next;
        this._first.prev = Node.Undefined;
      }
      this._size -= 1;
    }
    *[Symbol.iterator]() {
      let node = this._first;
      while (node !== Node.Undefined) {
        yield node.element;
        node = node.next;
      }
    }
  }
  const performanceNow = globalThis.performance.now.bind(globalThis.performance);
  class StopWatch {
    static create(highResolution) {
      return new StopWatch(highResolution);
    }
    constructor(highResolution) {
      this._now = highResolution === false ? Date.now : performanceNow;
      this._startTime = this._now();
      this._stopTime = -1;
    }
    stop() {
      this._stopTime = this._now();
    }
    reset() {
      this._startTime = this._now();
      this._stopTime = -1;
    }
    elapsed() {
      if (this._stopTime !== -1) {
        return this._stopTime - this._startTime;
      }
      return this._now() - this._startTime;
    }
  }
  var Event;
  (function(Event2) {
    Event2.None = () => Disposable.None;
    function defer(event, disposable) {
      return debounce(event, () => void 0, 0, void 0, true, void 0, disposable);
    }
    Event2.defer = defer;
    function once(event) {
      return (listener, thisArgs = null, disposables) => {
        let didFire = false;
        let result = void 0;
        result = event((e) => {
          if (didFire) {
            return;
          } else if (result) {
            result.dispose();
          } else {
            didFire = true;
          }
          return listener.call(thisArgs, e);
        }, null, disposables);
        if (didFire) {
          result.dispose();
        }
        return result;
      };
    }
    Event2.once = once;
    function onceIf(event, condition) {
      return Event2.once(Event2.filter(event, condition));
    }
    Event2.onceIf = onceIf;
    function map(event, map2, disposable) {
      return snapshot((listener, thisArgs = null, disposables) => event((i) => listener.call(thisArgs, map2(i)), null, disposables), disposable);
    }
    Event2.map = map;
    function forEach(event, each, disposable) {
      return snapshot((listener, thisArgs = null, disposables) => event((i) => {
        each(i);
        listener.call(thisArgs, i);
      }, null, disposables), disposable);
    }
    Event2.forEach = forEach;
    function filter(event, filter2, disposable) {
      return snapshot((listener, thisArgs = null, disposables) => event((e) => filter2(e) && listener.call(thisArgs, e), null, disposables), disposable);
    }
    Event2.filter = filter;
    function signal(event) {
      return event;
    }
    Event2.signal = signal;
    function any(...events) {
      return (listener, thisArgs = null, disposables) => {
        const disposable = combinedDisposable(...events.map((event) => event((e) => listener.call(thisArgs, e))));
        return addAndReturnDisposable(disposable, disposables);
      };
    }
    Event2.any = any;
    function reduce(event, merge, initial, disposable) {
      let output = initial;
      return map(event, (e) => {
        output = merge(output, e);
        return output;
      }, disposable);
    }
    Event2.reduce = reduce;
    function snapshot(event, disposable) {
      let listener;
      const options = {
        onWillAddFirstListener() {
          listener = event(emitter.fire, emitter);
        },
        onDidRemoveLastListener() {
          listener?.dispose();
        }
      };
      const emitter = new Emitter(options);
      disposable?.add(emitter);
      return emitter.event;
    }
    function addAndReturnDisposable(d, store) {
      if (store instanceof Array) {
        store.push(d);
      } else if (store) {
        store.add(d);
      }
      return d;
    }
    function debounce(event, merge, delay = 100, leading = false, flushOnListenerRemove = false, leakWarningThreshold, disposable) {
      let subscription;
      let output = void 0;
      let handle = void 0;
      let numDebouncedCalls = 0;
      let doFire;
      const options = {
        leakWarningThreshold,
        onWillAddFirstListener() {
          subscription = event((cur) => {
            numDebouncedCalls++;
            output = merge(output, cur);
            if (leading && !handle) {
              emitter.fire(output);
              output = void 0;
            }
            doFire = () => {
              const _output = output;
              output = void 0;
              handle = void 0;
              if (!leading || numDebouncedCalls > 1) {
                emitter.fire(_output);
              }
              numDebouncedCalls = 0;
            };
            if (typeof delay === "number") {
              if (handle) {
                clearTimeout(handle);
              }
              handle = setTimeout(doFire, delay);
            } else {
              if (handle === void 0) {
                handle = null;
                queueMicrotask(doFire);
              }
            }
          });
        },
        onWillRemoveListener() {
          if (flushOnListenerRemove && numDebouncedCalls > 0) {
            doFire?.();
          }
        },
        onDidRemoveLastListener() {
          doFire = void 0;
          subscription.dispose();
        }
      };
      const emitter = new Emitter(options);
      disposable?.add(emitter);
      return emitter.event;
    }
    Event2.debounce = debounce;
    function accumulate(event, delay = 0, disposable) {
      return Event2.debounce(event, (last, e) => {
        if (!last) {
          return [e];
        }
        last.push(e);
        return last;
      }, delay, void 0, true, void 0, disposable);
    }
    Event2.accumulate = accumulate;
    function latch(event, equals2 = (a2, b) => a2 === b, disposable) {
      let firstCall = true;
      let cache;
      return filter(event, (value) => {
        const shouldEmit = firstCall || !equals2(value, cache);
        firstCall = false;
        cache = value;
        return shouldEmit;
      }, disposable);
    }
    Event2.latch = latch;
    function split(event, isT, disposable) {
      return [
        Event2.filter(event, isT, disposable),
        Event2.filter(event, (e) => !isT(e), disposable)
      ];
    }
    Event2.split = split;
    function buffer(event, flushAfterTimeout = false, _buffer = [], disposable) {
      let buffer2 = _buffer.slice();
      let listener = event((e) => {
        if (buffer2) {
          buffer2.push(e);
        } else {
          emitter.fire(e);
        }
      });
      if (disposable) {
        disposable.add(listener);
      }
      const flush = () => {
        buffer2?.forEach((e) => emitter.fire(e));
        buffer2 = null;
      };
      const emitter = new Emitter({
        onWillAddFirstListener() {
          if (!listener) {
            listener = event((e) => emitter.fire(e));
            if (disposable) {
              disposable.add(listener);
            }
          }
        },
        onDidAddFirstListener() {
          if (buffer2) {
            if (flushAfterTimeout) {
              setTimeout(flush);
            } else {
              flush();
            }
          }
        },
        onDidRemoveLastListener() {
          if (listener) {
            listener.dispose();
          }
          listener = null;
        }
      });
      if (disposable) {
        disposable.add(emitter);
      }
      return emitter.event;
    }
    Event2.buffer = buffer;
    function chain(event, sythensize) {
      const fn = (listener, thisArgs, disposables) => {
        const cs = sythensize(new ChainableSynthesis());
        return event(function(value) {
          const result = cs.evaluate(value);
          if (result !== HaltChainable) {
            listener.call(thisArgs, result);
          }
        }, void 0, disposables);
      };
      return fn;
    }
    Event2.chain = chain;
    const HaltChainable = Symbol("HaltChainable");
    class ChainableSynthesis {
      constructor() {
        this.steps = [];
      }
      map(fn) {
        this.steps.push(fn);
        return this;
      }
      forEach(fn) {
        this.steps.push((v) => {
          fn(v);
          return v;
        });
        return this;
      }
      filter(fn) {
        this.steps.push((v) => fn(v) ? v : HaltChainable);
        return this;
      }
      reduce(merge, initial) {
        let last = initial;
        this.steps.push((v) => {
          last = merge(last, v);
          return last;
        });
        return this;
      }
      latch(equals2 = (a2, b) => a2 === b) {
        let firstCall = true;
        let cache;
        this.steps.push((value) => {
          const shouldEmit = firstCall || !equals2(value, cache);
          firstCall = false;
          cache = value;
          return shouldEmit ? value : HaltChainable;
        });
        return this;
      }
      evaluate(value) {
        for (const step of this.steps) {
          value = step(value);
          if (value === HaltChainable) {
            break;
          }
        }
        return value;
      }
    }
    function fromNodeEventEmitter(emitter, eventName, map2 = (id) => id) {
      const fn = (...args) => result.fire(map2(...args));
      const onFirstListenerAdd = () => emitter.on(eventName, fn);
      const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
      const result = new Emitter({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
      return result.event;
    }
    Event2.fromNodeEventEmitter = fromNodeEventEmitter;
    function fromDOMEventEmitter(emitter, eventName, map2 = (id) => id) {
      const fn = (...args) => result.fire(map2(...args));
      const onFirstListenerAdd = () => emitter.addEventListener(eventName, fn);
      const onLastListenerRemove = () => emitter.removeEventListener(eventName, fn);
      const result = new Emitter({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
      return result.event;
    }
    Event2.fromDOMEventEmitter = fromDOMEventEmitter;
    function toPromise(event, disposables) {
      let cancelRef;
      const promise = new Promise((resolve, reject) => {
        const listener = once(event)(resolve, null, disposables);
        cancelRef = () => listener.dispose();
      });
      promise.cancel = cancelRef;
      return promise;
    }
    Event2.toPromise = toPromise;
    function forward(from, to) {
      return from((e) => to.fire(e));
    }
    Event2.forward = forward;
    function runAndSubscribe(event, handler, initial) {
      handler(initial);
      return event((e) => handler(e));
    }
    Event2.runAndSubscribe = runAndSubscribe;
    class EmitterObserver {
      constructor(_observable, store) {
        this._observable = _observable;
        this._counter = 0;
        this._hasChanged = false;
        const options = {
          onWillAddFirstListener: () => {
            _observable.addObserver(this);
            this._observable.reportChanges();
          },
          onDidRemoveLastListener: () => {
            _observable.removeObserver(this);
          }
        };
        this.emitter = new Emitter(options);
        if (store) {
          store.add(this.emitter);
        }
      }
      beginUpdate(_observable) {
        this._counter++;
      }
      handlePossibleChange(_observable) {
      }
      handleChange(_observable, _change) {
        this._hasChanged = true;
      }
      endUpdate(_observable) {
        this._counter--;
        if (this._counter === 0) {
          this._observable.reportChanges();
          if (this._hasChanged) {
            this._hasChanged = false;
            this.emitter.fire(this._observable.get());
          }
        }
      }
    }
    function fromObservable(obs, store) {
      const observer = new EmitterObserver(obs, store);
      return observer.emitter.event;
    }
    Event2.fromObservable = fromObservable;
    function fromObservableLight(observable) {
      return (listener, thisArgs, disposables) => {
        let count = 0;
        let didChange = false;
        const observer = {
          beginUpdate() {
            count++;
          },
          endUpdate() {
            count--;
            if (count === 0) {
              observable.reportChanges();
              if (didChange) {
                didChange = false;
                listener.call(thisArgs);
              }
            }
          },
          handlePossibleChange() {
          },
          handleChange() {
            didChange = true;
          }
        };
        observable.addObserver(observer);
        observable.reportChanges();
        const disposable = {
          dispose() {
            observable.removeObserver(observer);
          }
        };
        if (disposables instanceof DisposableStore) {
          disposables.add(disposable);
        } else if (Array.isArray(disposables)) {
          disposables.push(disposable);
        }
        return disposable;
      };
    }
    Event2.fromObservableLight = fromObservableLight;
  })(Event || (Event = {}));
  const _EventProfiling = class _EventProfiling {
    constructor(name) {
      this.listenerCount = 0;
      this.invocationCount = 0;
      this.elapsedOverall = 0;
      this.durations = [];
      this.name = `${name}_${_EventProfiling._idPool++}`;
      _EventProfiling.all.add(this);
    }
    start(listenerCount) {
      this._stopWatch = new StopWatch();
      this.listenerCount = listenerCount;
    }
    stop() {
      if (this._stopWatch) {
        const elapsed = this._stopWatch.elapsed();
        this.durations.push(elapsed);
        this.elapsedOverall += elapsed;
        this.invocationCount += 1;
        this._stopWatch = void 0;
      }
    }
  };
  _EventProfiling.all = /* @__PURE__ */ new Set();
  _EventProfiling._idPool = 0;
  let EventProfiling = _EventProfiling;
  let _globalLeakWarningThreshold = -1;
  const _LeakageMonitor = class _LeakageMonitor {
    constructor(_errorHandler, threshold, name = (_LeakageMonitor._idPool++).toString(16).padStart(3, "0")) {
      this._errorHandler = _errorHandler;
      this.threshold = threshold;
      this.name = name;
      this._warnCountdown = 0;
    }
    dispose() {
      this._stacks?.clear();
    }
    check(stack, listenerCount) {
      const threshold = this.threshold;
      if (threshold <= 0 || listenerCount < threshold) {
        return void 0;
      }
      if (!this._stacks) {
        this._stacks = /* @__PURE__ */ new Map();
      }
      const count = this._stacks.get(stack.value) || 0;
      this._stacks.set(stack.value, count + 1);
      this._warnCountdown -= 1;
      if (this._warnCountdown <= 0) {
        this._warnCountdown = threshold * 0.5;
        const [topStack, topCount] = this.getMostFrequentStack();
        const message = `[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`;
        console.warn(message);
        console.warn(topStack);
        const error = new ListenerLeakError(message, topStack);
        this._errorHandler(error);
      }
      return () => {
        const count2 = this._stacks.get(stack.value) || 0;
        this._stacks.set(stack.value, count2 - 1);
      };
    }
    getMostFrequentStack() {
      if (!this._stacks) {
        return void 0;
      }
      let topStack;
      let topCount = 0;
      for (const [stack, count] of this._stacks) {
        if (!topStack || topCount < count) {
          topStack = [stack, count];
          topCount = count;
        }
      }
      return topStack;
    }
  };
  _LeakageMonitor._idPool = 1;
  let LeakageMonitor = _LeakageMonitor;
  class Stacktrace {
    static create() {
      const err = new Error();
      return new Stacktrace(err.stack ?? "");
    }
    constructor(value) {
      this.value = value;
    }
    print() {
      console.warn(this.value.split("\n").slice(2).join("\n"));
    }
  }
  class ListenerLeakError extends Error {
    constructor(message, stack) {
      super(message);
      this.name = "ListenerLeakError";
      this.stack = stack;
    }
  }
  class ListenerRefusalError extends Error {
    constructor(message, stack) {
      super(message);
      this.name = "ListenerRefusalError";
      this.stack = stack;
    }
  }
  class UniqueContainer {
    constructor(value) {
      this.value = value;
    }
  }
  const compactionThreshold = 2;
  class Emitter {
    constructor(options) {
      this._size = 0;
      this._options = options;
      this._leakageMon = this._options?.leakWarningThreshold ? new LeakageMonitor(options?.onListenerError ?? onUnexpectedError, this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold) : void 0;
      this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : void 0;
      this._deliveryQueue = this._options?.deliveryQueue;
    }
    dispose() {
      if (!this._disposed) {
        this._disposed = true;
        if (this._deliveryQueue?.current === this) {
          this._deliveryQueue.reset();
        }
        if (this._listeners) {
          this._listeners = void 0;
          this._size = 0;
        }
        this._options?.onDidRemoveLastListener?.();
        this._leakageMon?.dispose();
      }
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
      this._event ??= (callback, thisArgs, disposables) => {
        if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
          const message = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
          console.warn(message);
          const tuple = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1];
          const error = new ListenerRefusalError(`${message}. HINT: Stack shows most frequent listener (${tuple[1]}-times)`, tuple[0]);
          const errorHandler2 = this._options?.onListenerError || onUnexpectedError;
          errorHandler2(error);
          return Disposable.None;
        }
        if (this._disposed) {
          return Disposable.None;
        }
        if (thisArgs) {
          callback = callback.bind(thisArgs);
        }
        const contained = new UniqueContainer(callback);
        let removeMonitor;
        if (this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2)) {
          contained.stack = Stacktrace.create();
          removeMonitor = this._leakageMon.check(contained.stack, this._size + 1);
        }
        if (!this._listeners) {
          this._options?.onWillAddFirstListener?.(this);
          this._listeners = contained;
          this._options?.onDidAddFirstListener?.(this);
        } else if (this._listeners instanceof UniqueContainer) {
          this._deliveryQueue ??= new EventDeliveryQueuePrivate();
          this._listeners = [this._listeners, contained];
        } else {
          this._listeners.push(contained);
        }
        this._options?.onDidAddListener?.(this);
        this._size++;
        const result = toDisposable(() => {
          removeMonitor?.();
          this._removeListener(contained);
        });
        if (disposables instanceof DisposableStore) {
          disposables.add(result);
        } else if (Array.isArray(disposables)) {
          disposables.push(result);
        }
        return result;
      };
      return this._event;
    }
    _removeListener(listener) {
      this._options?.onWillRemoveListener?.(this);
      if (!this._listeners) {
        return;
      }
      if (this._size === 1) {
        this._listeners = void 0;
        this._options?.onDidRemoveLastListener?.(this);
        this._size = 0;
        return;
      }
      const listeners = this._listeners;
      const index = listeners.indexOf(listener);
      if (index === -1) {
        console.log("disposed?", this._disposed);
        console.log("size?", this._size);
        console.log("arr?", JSON.stringify(this._listeners));
        throw new Error("Attempted to dispose unknown listener");
      }
      this._size--;
      listeners[index] = void 0;
      const adjustDeliveryQueue = this._deliveryQueue.current === this;
      if (this._size * compactionThreshold <= listeners.length) {
        let n = 0;
        for (let i = 0; i < listeners.length; i++) {
          if (listeners[i]) {
            listeners[n++] = listeners[i];
          } else if (adjustDeliveryQueue && n < this._deliveryQueue.end) {
            this._deliveryQueue.end--;
            if (n < this._deliveryQueue.i) {
              this._deliveryQueue.i--;
            }
          }
        }
        listeners.length = n;
      }
    }
    _deliver(listener, value) {
      if (!listener) {
        return;
      }
      const errorHandler2 = this._options?.onListenerError || onUnexpectedError;
      if (!errorHandler2) {
        listener.value(value);
        return;
      }
      try {
        listener.value(value);
      } catch (e) {
        errorHandler2(e);
      }
    }
    /** Delivers items in the queue. Assumes the queue is ready to go. */
    _deliverQueue(dq) {
      const listeners = dq.current._listeners;
      while (dq.i < dq.end) {
        this._deliver(listeners[dq.i++], dq.value);
      }
      dq.reset();
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(event) {
      if (this._deliveryQueue?.current) {
        this._deliverQueue(this._deliveryQueue);
        this._perfMon?.stop();
      }
      this._perfMon?.start(this._size);
      if (!this._listeners) ;
      else if (this._listeners instanceof UniqueContainer) {
        this._deliver(this._listeners, event);
      } else {
        const dq = this._deliveryQueue;
        dq.enqueue(this, event, this._listeners.length);
        this._deliverQueue(dq);
      }
      this._perfMon?.stop();
    }
    hasListeners() {
      return this._size > 0;
    }
  }
  class EventDeliveryQueuePrivate {
    constructor() {
      this.i = -1;
      this.end = 0;
    }
    enqueue(emitter, value, end) {
      this.i = 0;
      this.end = end;
      this.current = emitter;
      this.value = value;
    }
    reset() {
      this.i = this.end;
      this.current = void 0;
      this.value = void 0;
    }
  }
  function getNLSMessages() {
    return globalThis._VSCODE_NLS_MESSAGES;
  }
  function getNLSLanguage() {
    return globalThis._VSCODE_NLS_LANGUAGE;
  }
  const isPseudo = getNLSLanguage() === "pseudo" || typeof document !== "undefined" && document.location && typeof document.location.hash === "string" && document.location.hash.indexOf("pseudo=true") >= 0;
  function _format$1(message, args) {
    let result;
    if (args.length === 0) {
      result = message;
    } else {
      result = message.replace(/\{(\d+)\}/g, (match, rest) => {
        const index = rest[0];
        const arg = args[index];
        let result2 = match;
        if (typeof arg === "string") {
          result2 = arg;
        } else if (typeof arg === "number" || typeof arg === "boolean" || arg === void 0 || arg === null) {
          result2 = String(arg);
        }
        return result2;
      });
    }
    if (isPseudo) {
      result = "［" + result.replace(/[aouei]/g, "$&$&") + "］";
    }
    return result;
  }
  function localize(data, message, ...args) {
    if (typeof data === "number") {
      return _format$1(lookupMessage(data, message), args);
    }
    return _format$1(message, args);
  }
  function lookupMessage(index, fallback) {
    const message = getNLSMessages()?.[index];
    if (typeof message !== "string") {
      if (typeof fallback === "string") {
        return fallback;
      }
      throw new Error(`!!! NLS MISSING: ${index} !!!`);
    }
    return message;
  }
  const LANGUAGE_DEFAULT = "en";
  let _isWindows = false;
  let _isMacintosh = false;
  let _isLinux = false;
  let _locale = void 0;
  let _language = LANGUAGE_DEFAULT;
  let _platformLocale = LANGUAGE_DEFAULT;
  let _translationsConfigFile = void 0;
  let _userAgent = void 0;
  const $globalThis = globalThis;
  let nodeProcess = void 0;
  if (typeof $globalThis.vscode !== "undefined" && typeof $globalThis.vscode.process !== "undefined") {
    nodeProcess = $globalThis.vscode.process;
  } else if (typeof process !== "undefined" && typeof process?.versions?.node === "string") {
    nodeProcess = process;
  }
  const isElectronProcess = typeof nodeProcess?.versions?.electron === "string";
  const isElectronRenderer = isElectronProcess && nodeProcess?.type === "renderer";
  if (typeof nodeProcess === "object") {
    _isWindows = nodeProcess.platform === "win32";
    _isMacintosh = nodeProcess.platform === "darwin";
    _isLinux = nodeProcess.platform === "linux";
    _isLinux && !!nodeProcess.env["SNAP"] && !!nodeProcess.env["SNAP_REVISION"];
    !!nodeProcess.env["CI"] || !!nodeProcess.env["BUILD_ARTIFACTSTAGINGDIRECTORY"] || !!nodeProcess.env["GITHUB_WORKSPACE"];
    _locale = LANGUAGE_DEFAULT;
    _language = LANGUAGE_DEFAULT;
    const rawNlsConfig = nodeProcess.env["VSCODE_NLS_CONFIG"];
    if (rawNlsConfig) {
      try {
        const nlsConfig = JSON.parse(rawNlsConfig);
        _locale = nlsConfig.userLocale;
        _platformLocale = nlsConfig.osLocale;
        _language = nlsConfig.resolvedLanguage || LANGUAGE_DEFAULT;
        _translationsConfigFile = nlsConfig.languagePack?.translationsConfigFile;
      } catch (e) {
      }
    }
  } else if (typeof navigator === "object" && !isElectronRenderer) {
    _userAgent = navigator.userAgent;
    _isWindows = _userAgent.indexOf("Windows") >= 0;
    _isMacintosh = _userAgent.indexOf("Macintosh") >= 0;
    (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
    _isLinux = _userAgent.indexOf("Linux") >= 0;
    _userAgent?.indexOf("Mobi") >= 0;
    _language = getNLSLanguage() || LANGUAGE_DEFAULT;
    _locale = navigator.language.toLowerCase();
    _platformLocale = _locale;
  } else {
    console.error("Unable to resolve platform.");
  }
  const isWindows = _isWindows;
  const isMacintosh = _isMacintosh;
  const userAgent = _userAgent;
  const setTimeout0IsFaster = typeof $globalThis.postMessage === "function" && !$globalThis.importScripts;
  (() => {
    if (setTimeout0IsFaster) {
      const pending = [];
      $globalThis.addEventListener("message", (e) => {
        if (e.data && e.data.vscodeScheduleAsyncWork) {
          for (let i = 0, len = pending.length; i < len; i++) {
            const candidate = pending[i];
            if (candidate.id === e.data.vscodeScheduleAsyncWork) {
              pending.splice(i, 1);
              candidate.callback();
              return;
            }
          }
        }
      });
      let lastId = 0;
      return (callback) => {
        const myId = ++lastId;
        pending.push({
          id: myId,
          callback
        });
        $globalThis.postMessage({ vscodeScheduleAsyncWork: myId }, "*");
      };
    }
    return (callback) => setTimeout(callback);
  })();
  const isChrome = !!(userAgent && userAgent.indexOf("Chrome") >= 0);
  !!(userAgent && userAgent.indexOf("Firefox") >= 0);
  !!(!isChrome && (userAgent && userAgent.indexOf("Safari") >= 0));
  !!(userAgent && userAgent.indexOf("Edg/") >= 0);
  !!(userAgent && userAgent.indexOf("Android") >= 0);
  function identity(t2) {
    return t2;
  }
  class LRUCachedFunction {
    constructor(arg1, arg2) {
      this.lastCache = void 0;
      this.lastArgKey = void 0;
      if (typeof arg1 === "function") {
        this._fn = arg1;
        this._computeKey = identity;
      } else {
        this._fn = arg2;
        this._computeKey = arg1.getCacheKey;
      }
    }
    get(arg) {
      const key = this._computeKey(arg);
      if (this.lastArgKey !== key) {
        this.lastArgKey = key;
        this.lastCache = this._fn(arg);
      }
      return this.lastCache;
    }
  }
  var LazyValueState;
  (function(LazyValueState2) {
    LazyValueState2[LazyValueState2["Uninitialized"] = 0] = "Uninitialized";
    LazyValueState2[LazyValueState2["Running"] = 1] = "Running";
    LazyValueState2[LazyValueState2["Completed"] = 2] = "Completed";
  })(LazyValueState || (LazyValueState = {}));
  class Lazy {
    constructor(executor) {
      this.executor = executor;
      this._state = LazyValueState.Uninitialized;
    }
    /**
     * Get the wrapped value.
     *
     * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
     * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
     */
    get value() {
      if (this._state === LazyValueState.Uninitialized) {
        this._state = LazyValueState.Running;
        try {
          this._value = this.executor();
        } catch (err) {
          this._error = err;
        } finally {
          this._state = LazyValueState.Completed;
        }
      } else if (this._state === LazyValueState.Running) {
        throw new Error("Cannot read the value of a lazy that is being initialized");
      }
      if (this._error) {
        throw this._error;
      }
      return this._value;
    }
    /**
     * Get the wrapped value without forcing evaluation.
     */
    get rawValue() {
      return this._value;
    }
  }
  function escapeRegExpCharacters(value) {
    return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
  }
  function regExpLeadsToEndlessLoop(regexp) {
    if (regexp.source === "^" || regexp.source === "^$" || regexp.source === "$" || regexp.source === "^\\s*$") {
      return false;
    }
    const match = regexp.exec("");
    return !!(match && regexp.lastIndex === 0);
  }
  function splitLines(str) {
    return str.split(/\r\n|\r|\n/);
  }
  function firstNonWhitespaceIndex(str) {
    for (let i = 0, len = str.length; i < len; i++) {
      const chCode = str.charCodeAt(i);
      if (chCode !== 32 && chCode !== 9) {
        return i;
      }
    }
    return -1;
  }
  function lastNonWhitespaceIndex(str, startIndex = str.length - 1) {
    for (let i = startIndex; i >= 0; i--) {
      const chCode = str.charCodeAt(i);
      if (chCode !== 32 && chCode !== 9) {
        return i;
      }
    }
    return -1;
  }
  function isUpperAsciiLetter(code) {
    return code >= 65 && code <= 90;
  }
  function commonPrefixLength(a2, b) {
    const len = Math.min(a2.length, b.length);
    let i;
    for (i = 0; i < len; i++) {
      if (a2.charCodeAt(i) !== b.charCodeAt(i)) {
        return i;
      }
    }
    return len;
  }
  function commonSuffixLength(a2, b) {
    const len = Math.min(a2.length, b.length);
    let i;
    const aLastIndex = a2.length - 1;
    const bLastIndex = b.length - 1;
    for (i = 0; i < len; i++) {
      if (a2.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
        return i;
      }
    }
    return len;
  }
  function isHighSurrogate(charCode) {
    return 55296 <= charCode && charCode <= 56319;
  }
  function isLowSurrogate(charCode) {
    return 56320 <= charCode && charCode <= 57343;
  }
  function computeCodePoint(highSurrogate, lowSurrogate) {
    return (highSurrogate - 55296 << 10) + (lowSurrogate - 56320) + 65536;
  }
  function getNextCodePoint(str, len, offset) {
    const charCode = str.charCodeAt(offset);
    if (isHighSurrogate(charCode) && offset + 1 < len) {
      const nextCharCode = str.charCodeAt(offset + 1);
      if (isLowSurrogate(nextCharCode)) {
        return computeCodePoint(charCode, nextCharCode);
      }
    }
    return charCode;
  }
  const IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
  function isBasicASCII(str) {
    return IS_BASIC_ASCII.test(str);
  }
  const _AmbiguousCharacters = class _AmbiguousCharacters {
    static getInstance(locales) {
      return _AmbiguousCharacters.cache.get(Array.from(locales));
    }
    static getLocales() {
      return _AmbiguousCharacters._locales.value;
    }
    constructor(confusableDictionary) {
      this.confusableDictionary = confusableDictionary;
    }
    isAmbiguous(codePoint) {
      return this.confusableDictionary.has(codePoint);
    }
    /**
     * Returns the non basic ASCII code point that the given code point can be confused,
     * or undefined if such code point does note exist.
     */
    getPrimaryConfusable(codePoint) {
      return this.confusableDictionary.get(codePoint);
    }
    getConfusableCodePoints() {
      return new Set(this.confusableDictionary.keys());
    }
  };
  _AmbiguousCharacters.ambiguousCharacterData = new Lazy(() => {
    return JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}');
  });
  _AmbiguousCharacters.cache = new LRUCachedFunction({ getCacheKey: JSON.stringify }, (locales) => {
    function arrayToMap(arr) {
      const result = /* @__PURE__ */ new Map();
      for (let i = 0; i < arr.length; i += 2) {
        result.set(arr[i], arr[i + 1]);
      }
      return result;
    }
    function mergeMaps(map1, map2) {
      const result = new Map(map1);
      for (const [key, value] of map2) {
        result.set(key, value);
      }
      return result;
    }
    function intersectMaps(map1, map2) {
      if (!map1) {
        return map2;
      }
      const result = /* @__PURE__ */ new Map();
      for (const [key, value] of map1) {
        if (map2.has(key)) {
          result.set(key, value);
        }
      }
      return result;
    }
    const data = _AmbiguousCharacters.ambiguousCharacterData.value;
    let filteredLocales = locales.filter((l) => !l.startsWith("_") && Object.hasOwn(data, l));
    if (filteredLocales.length === 0) {
      filteredLocales = ["_default"];
    }
    let languageSpecificMap = void 0;
    for (const locale of filteredLocales) {
      const map2 = arrayToMap(data[locale]);
      languageSpecificMap = intersectMaps(languageSpecificMap, map2);
    }
    const commonMap = arrayToMap(data["_common"]);
    const map = mergeMaps(commonMap, languageSpecificMap);
    return new _AmbiguousCharacters(map);
  });
  _AmbiguousCharacters._locales = new Lazy(() => Object.keys(_AmbiguousCharacters.ambiguousCharacterData.value).filter((k) => !k.startsWith("_")));
  let AmbiguousCharacters = _AmbiguousCharacters;
  const _InvisibleCharacters = class _InvisibleCharacters {
    static getRawData() {
      return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
    }
    static getData() {
      if (!this._data) {
        this._data = new Set([...Object.values(_InvisibleCharacters.getRawData())].flat());
      }
      return this._data;
    }
    static isInvisibleCharacter(codePoint) {
      return _InvisibleCharacters.getData().has(codePoint);
    }
    static get codePoints() {
      return _InvisibleCharacters.getData();
    }
  };
  _InvisibleCharacters._data = void 0;
  let InvisibleCharacters = _InvisibleCharacters;
  const DEFAULT_CHANNEL = "default";
  const INITIALIZE = "$initialize";
  class RequestMessage {
    constructor(vsWorker, req, channel, method, args) {
      this.vsWorker = vsWorker;
      this.req = req;
      this.channel = channel;
      this.method = method;
      this.args = args;
      this.type = 0;
    }
  }
  class ReplyMessage {
    constructor(vsWorker, seq, res, err) {
      this.vsWorker = vsWorker;
      this.seq = seq;
      this.res = res;
      this.err = err;
      this.type = 1;
    }
  }
  class SubscribeEventMessage {
    constructor(vsWorker, req, channel, eventName, arg) {
      this.vsWorker = vsWorker;
      this.req = req;
      this.channel = channel;
      this.eventName = eventName;
      this.arg = arg;
      this.type = 2;
    }
  }
  class EventMessage {
    constructor(vsWorker, req, event) {
      this.vsWorker = vsWorker;
      this.req = req;
      this.event = event;
      this.type = 3;
    }
  }
  class UnsubscribeEventMessage {
    constructor(vsWorker, req) {
      this.vsWorker = vsWorker;
      this.req = req;
      this.type = 4;
    }
  }
  class WebWorkerProtocol {
    constructor(handler) {
      this._workerId = -1;
      this._handler = handler;
      this._lastSentReq = 0;
      this._pendingReplies = /* @__PURE__ */ Object.create(null);
      this._pendingEmitters = /* @__PURE__ */ new Map();
      this._pendingEvents = /* @__PURE__ */ new Map();
    }
    setWorkerId(workerId) {
      this._workerId = workerId;
    }
    async sendMessage(channel, method, args) {
      const req = String(++this._lastSentReq);
      return new Promise((resolve, reject) => {
        this._pendingReplies[req] = {
          resolve,
          reject
        };
        this._send(new RequestMessage(this._workerId, req, channel, method, args));
      });
    }
    listen(channel, eventName, arg) {
      let req = null;
      const emitter = new Emitter({
        onWillAddFirstListener: () => {
          req = String(++this._lastSentReq);
          this._pendingEmitters.set(req, emitter);
          this._send(new SubscribeEventMessage(this._workerId, req, channel, eventName, arg));
        },
        onDidRemoveLastListener: () => {
          this._pendingEmitters.delete(req);
          this._send(new UnsubscribeEventMessage(this._workerId, req));
          req = null;
        }
      });
      return emitter.event;
    }
    handleMessage(message) {
      if (!message || !message.vsWorker) {
        return;
      }
      if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
        return;
      }
      this._handleMessage(message);
    }
    createProxyToRemoteChannel(channel, sendMessageBarrier) {
      const handler = {
        get: (target, name) => {
          if (typeof name === "string" && !target[name]) {
            if (propertyIsDynamicEvent(name)) {
              target[name] = (arg) => {
                return this.listen(channel, name, arg);
              };
            } else if (propertyIsEvent(name)) {
              target[name] = this.listen(channel, name, void 0);
            } else if (name.charCodeAt(0) === 36) {
              target[name] = async (...myArgs) => {
                await sendMessageBarrier?.();
                return this.sendMessage(channel, name, myArgs);
              };
            }
          }
          return target[name];
        }
      };
      return new Proxy(/* @__PURE__ */ Object.create(null), handler);
    }
    _handleMessage(msg) {
      switch (msg.type) {
        case 1:
          return this._handleReplyMessage(msg);
        case 0:
          return this._handleRequestMessage(msg);
        case 2:
          return this._handleSubscribeEventMessage(msg);
        case 3:
          return this._handleEventMessage(msg);
        case 4:
          return this._handleUnsubscribeEventMessage(msg);
      }
    }
    _handleReplyMessage(replyMessage) {
      if (!this._pendingReplies[replyMessage.seq]) {
        console.warn("Got reply to unknown seq");
        return;
      }
      const reply = this._pendingReplies[replyMessage.seq];
      delete this._pendingReplies[replyMessage.seq];
      if (replyMessage.err) {
        let err = replyMessage.err;
        if (replyMessage.err.$isError) {
          const newErr = new Error();
          newErr.name = replyMessage.err.name;
          newErr.message = replyMessage.err.message;
          newErr.stack = replyMessage.err.stack;
          err = newErr;
        }
        reply.reject(err);
        return;
      }
      reply.resolve(replyMessage.res);
    }
    _handleRequestMessage(requestMessage) {
      const req = requestMessage.req;
      const result = this._handler.handleMessage(requestMessage.channel, requestMessage.method, requestMessage.args);
      result.then((r) => {
        this._send(new ReplyMessage(this._workerId, req, r, void 0));
      }, (e) => {
        if (e.detail instanceof Error) {
          e.detail = transformErrorForSerialization(e.detail);
        }
        this._send(new ReplyMessage(this._workerId, req, void 0, transformErrorForSerialization(e)));
      });
    }
    _handleSubscribeEventMessage(msg) {
      const req = msg.req;
      const disposable = this._handler.handleEvent(msg.channel, msg.eventName, msg.arg)((event) => {
        this._send(new EventMessage(this._workerId, req, event));
      });
      this._pendingEvents.set(req, disposable);
    }
    _handleEventMessage(msg) {
      if (!this._pendingEmitters.has(msg.req)) {
        console.warn("Got event for unknown req");
        return;
      }
      this._pendingEmitters.get(msg.req).fire(msg.event);
    }
    _handleUnsubscribeEventMessage(msg) {
      if (!this._pendingEvents.has(msg.req)) {
        console.warn("Got unsubscribe for unknown req");
        return;
      }
      this._pendingEvents.get(msg.req).dispose();
      this._pendingEvents.delete(msg.req);
    }
    _send(msg) {
      const transfer = [];
      if (msg.type === 0) {
        for (let i = 0; i < msg.args.length; i++) {
          const arg = msg.args[i];
          if (arg instanceof ArrayBuffer) {
            transfer.push(arg);
          }
        }
      } else if (msg.type === 1) {
        if (msg.res instanceof ArrayBuffer) {
          transfer.push(msg.res);
        }
      }
      this._handler.sendMessage(msg, transfer);
    }
  }
  function propertyIsEvent(name) {
    return name[0] === "o" && name[1] === "n" && isUpperAsciiLetter(name.charCodeAt(2));
  }
  function propertyIsDynamicEvent(name) {
    return /^onDynamic/.test(name) && isUpperAsciiLetter(name.charCodeAt(9));
  }
  class WebWorkerServer {
    constructor(postMessage, requestHandlerFactory) {
      this._localChannels = /* @__PURE__ */ new Map();
      this._remoteChannels = /* @__PURE__ */ new Map();
      this._protocol = new WebWorkerProtocol({
        sendMessage: (msg, transfer) => {
          postMessage(msg, transfer);
        },
        handleMessage: (channel, method, args) => this._handleMessage(channel, method, args),
        handleEvent: (channel, eventName, arg) => this._handleEvent(channel, eventName, arg)
      });
      this.requestHandler = requestHandlerFactory(this);
    }
    onmessage(msg) {
      this._protocol.handleMessage(msg);
    }
    _handleMessage(channel, method, args) {
      if (channel === DEFAULT_CHANNEL && method === INITIALIZE) {
        return this.initialize(args[0]);
      }
      const requestHandler = channel === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(channel);
      if (!requestHandler) {
        return Promise.reject(new Error(`Missing channel ${channel} on worker thread`));
      }
      const fn = requestHandler[method];
      if (typeof fn !== "function") {
        return Promise.reject(new Error(`Missing method ${method} on worker thread channel ${channel}`));
      }
      try {
        return Promise.resolve(fn.apply(requestHandler, args));
      } catch (e) {
        return Promise.reject(e);
      }
    }
    _handleEvent(channel, eventName, arg) {
      const requestHandler = channel === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(channel);
      if (!requestHandler) {
        throw new Error(`Missing channel ${channel} on worker thread`);
      }
      if (propertyIsDynamicEvent(eventName)) {
        const fn = requestHandler[eventName];
        if (typeof fn !== "function") {
          throw new Error(`Missing dynamic event ${eventName} on request handler.`);
        }
        const event = fn.call(requestHandler, arg);
        if (typeof event !== "function") {
          throw new Error(`Missing dynamic event ${eventName} on request handler.`);
        }
        return event;
      }
      if (propertyIsEvent(eventName)) {
        const event = requestHandler[eventName];
        if (typeof event !== "function") {
          throw new Error(`Missing event ${eventName} on request handler.`);
        }
        return event;
      }
      throw new Error(`Malformed event name ${eventName}`);
    }
    getChannel(channel) {
      if (!this._remoteChannels.has(channel)) {
        const inst = this._protocol.createProxyToRemoteChannel(channel);
        this._remoteChannels.set(channel, inst);
      }
      return this._remoteChannels.get(channel);
    }
    async initialize(workerId) {
      this._protocol.setWorkerId(workerId);
    }
  }
  let initialized = false;
  function initialize$1(factory) {
    if (initialized) {
      throw new Error("WebWorker already initialized!");
    }
    initialized = true;
    const webWorkerServer = new WebWorkerServer((msg) => globalThis.postMessage(msg), (workerServer) => factory(workerServer));
    globalThis.onmessage = (e) => {
      webWorkerServer.onmessage(e.data);
    };
    return webWorkerServer;
  }
  class DiffChange {
    /**
     * Constructs a new DiffChange with the given sequence information
     * and content.
     */
    constructor(originalStart, originalLength, modifiedStart, modifiedLength) {
      this.originalStart = originalStart;
      this.originalLength = originalLength;
      this.modifiedStart = modifiedStart;
      this.modifiedLength = modifiedLength;
    }
    /**
     * The end point (exclusive) of the change in the original sequence.
     */
    getOriginalEnd() {
      return this.originalStart + this.originalLength;
    }
    /**
     * The end point (exclusive) of the change in the modified sequence.
     */
    getModifiedEnd() {
      return this.modifiedStart + this.modifiedLength;
    }
  }
  new Lazy(() => new Uint8Array(256));
  function numberHash(val, initialHashVal) {
    return (initialHashVal << 5) - initialHashVal + val | 0;
  }
  function stringHash(s, hashVal) {
    hashVal = numberHash(149417, hashVal);
    for (let i = 0, length = s.length; i < length; i++) {
      hashVal = numberHash(s.charCodeAt(i), hashVal);
    }
    return hashVal;
  }
  class StringDiffSequence {
    constructor(source) {
      this.source = source;
    }
    getElements() {
      const source = this.source;
      const characters = new Int32Array(source.length);
      for (let i = 0, len = source.length; i < len; i++) {
        characters[i] = source.charCodeAt(i);
      }
      return characters;
    }
  }
  function stringDiff(original, modified, pretty) {
    return new LcsDiff(new StringDiffSequence(original), new StringDiffSequence(modified)).ComputeDiff(pretty).changes;
  }
  class Debug {
    static Assert(condition, message) {
      if (!condition) {
        throw new Error(message);
      }
    }
  }
  class MyArray {
    /**
     * Copies a range of elements from an Array starting at the specified source index and pastes
     * them to another Array starting at the specified destination index. The length and the indexes
     * are specified as 64-bit integers.
     * sourceArray:
     *		The Array that contains the data to copy.
     * sourceIndex:
     *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
     * destinationArray:
     *		The Array that receives the data.
     * destinationIndex:
     *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
     * length:
     *		A 64-bit integer that represents the number of elements to copy.
     */
    static Copy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
      for (let i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
      }
    }
    static Copy2(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
      for (let i = 0; i < length; i++) {
        destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
      }
    }
  }
  class DiffChangeHelper {
    /**
     * Constructs a new DiffChangeHelper for the given DiffSequences.
     */
    constructor() {
      this.m_changes = [];
      this.m_originalStart = 1073741824;
      this.m_modifiedStart = 1073741824;
      this.m_originalCount = 0;
      this.m_modifiedCount = 0;
    }
    /**
     * Marks the beginning of the next change in the set of differences.
     */
    MarkNextChange() {
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        this.m_changes.push(new DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount));
      }
      this.m_originalCount = 0;
      this.m_modifiedCount = 0;
      this.m_originalStart = 1073741824;
      this.m_modifiedStart = 1073741824;
    }
    /**
     * Adds the original element at the given position to the elements
     * affected by the current change. The modified index gives context
     * to the change position with respect to the original sequence.
     * @param originalIndex The index of the original element to add.
     * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
     */
    AddOriginalElement(originalIndex, modifiedIndex) {
      this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
      this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
      this.m_originalCount++;
    }
    /**
     * Adds the modified element at the given position to the elements
     * affected by the current change. The original index gives context
     * to the change position with respect to the modified sequence.
     * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
     * @param modifiedIndex The index of the modified element to add.
     */
    AddModifiedElement(originalIndex, modifiedIndex) {
      this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
      this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
      this.m_modifiedCount++;
    }
    /**
     * Retrieves all of the changes marked by the class.
     */
    getChanges() {
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        this.MarkNextChange();
      }
      return this.m_changes;
    }
    /**
     * Retrieves all of the changes marked by the class in the reverse order
     */
    getReverseChanges() {
      if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
        this.MarkNextChange();
      }
      this.m_changes.reverse();
      return this.m_changes;
    }
  }
  class LcsDiff {
    /**
     * Constructs the DiffFinder
     */
    constructor(originalSequence, modifiedSequence, continueProcessingPredicate = null) {
      this.ContinueProcessingPredicate = continueProcessingPredicate;
      this._originalSequence = originalSequence;
      this._modifiedSequence = modifiedSequence;
      const [originalStringElements, originalElementsOrHash, originalHasStrings] = LcsDiff._getElements(originalSequence);
      const [modifiedStringElements, modifiedElementsOrHash, modifiedHasStrings] = LcsDiff._getElements(modifiedSequence);
      this._hasStrings = originalHasStrings && modifiedHasStrings;
      this._originalStringElements = originalStringElements;
      this._originalElementsOrHash = originalElementsOrHash;
      this._modifiedStringElements = modifiedStringElements;
      this._modifiedElementsOrHash = modifiedElementsOrHash;
      this.m_forwardHistory = [];
      this.m_reverseHistory = [];
    }
    static _isStringArray(arr) {
      return arr.length > 0 && typeof arr[0] === "string";
    }
    static _getElements(sequence) {
      const elements = sequence.getElements();
      if (LcsDiff._isStringArray(elements)) {
        const hashes = new Int32Array(elements.length);
        for (let i = 0, len = elements.length; i < len; i++) {
          hashes[i] = stringHash(elements[i], 0);
        }
        return [elements, hashes, true];
      }
      if (elements instanceof Int32Array) {
        return [[], elements, false];
      }
      return [[], new Int32Array(elements), false];
    }
    ElementsAreEqual(originalIndex, newIndex) {
      if (this._originalElementsOrHash[originalIndex] !== this._modifiedElementsOrHash[newIndex]) {
        return false;
      }
      return this._hasStrings ? this._originalStringElements[originalIndex] === this._modifiedStringElements[newIndex] : true;
    }
    ElementsAreStrictEqual(originalIndex, newIndex) {
      if (!this.ElementsAreEqual(originalIndex, newIndex)) {
        return false;
      }
      const originalElement = LcsDiff._getStrictElement(this._originalSequence, originalIndex);
      const modifiedElement = LcsDiff._getStrictElement(this._modifiedSequence, newIndex);
      return originalElement === modifiedElement;
    }
    static _getStrictElement(sequence, index) {
      if (typeof sequence.getStrictElement === "function") {
        return sequence.getStrictElement(index);
      }
      return null;
    }
    OriginalElementsAreEqual(index1, index2) {
      if (this._originalElementsOrHash[index1] !== this._originalElementsOrHash[index2]) {
        return false;
      }
      return this._hasStrings ? this._originalStringElements[index1] === this._originalStringElements[index2] : true;
    }
    ModifiedElementsAreEqual(index1, index2) {
      if (this._modifiedElementsOrHash[index1] !== this._modifiedElementsOrHash[index2]) {
        return false;
      }
      return this._hasStrings ? this._modifiedStringElements[index1] === this._modifiedStringElements[index2] : true;
    }
    ComputeDiff(pretty) {
      return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, pretty);
    }
    /**
     * Computes the differences between the original and modified input
     * sequences on the bounded range.
     * @returns An array of the differences between the two input sequences.
     */
    _ComputeDiff(originalStart, originalEnd, modifiedStart, modifiedEnd, pretty) {
      const quitEarlyArr = [false];
      let changes = this.ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr);
      if (pretty) {
        changes = this.PrettifyChanges(changes);
      }
      return {
        quitEarly: quitEarlyArr[0],
        changes
      };
    }
    /**
     * Private helper method which computes the differences on the bounded range
     * recursively.
     * @returns An array of the differences between the two input sequences.
     */
    ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr) {
      quitEarlyArr[0] = false;
      while (originalStart <= originalEnd && modifiedStart <= modifiedEnd && this.ElementsAreEqual(originalStart, modifiedStart)) {
        originalStart++;
        modifiedStart++;
      }
      while (originalEnd >= originalStart && modifiedEnd >= modifiedStart && this.ElementsAreEqual(originalEnd, modifiedEnd)) {
        originalEnd--;
        modifiedEnd--;
      }
      if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
        let changes;
        if (modifiedStart <= modifiedEnd) {
          Debug.Assert(originalStart === originalEnd + 1, "originalStart should only be one more than originalEnd");
          changes = [
            new DiffChange(originalStart, 0, modifiedStart, modifiedEnd - modifiedStart + 1)
          ];
        } else if (originalStart <= originalEnd) {
          Debug.Assert(modifiedStart === modifiedEnd + 1, "modifiedStart should only be one more than modifiedEnd");
          changes = [
            new DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, 0)
          ];
        } else {
          Debug.Assert(originalStart === originalEnd + 1, "originalStart should only be one more than originalEnd");
          Debug.Assert(modifiedStart === modifiedEnd + 1, "modifiedStart should only be one more than modifiedEnd");
          changes = [];
        }
        return changes;
      }
      const midOriginalArr = [0];
      const midModifiedArr = [0];
      const result = this.ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr);
      const midOriginal = midOriginalArr[0];
      const midModified = midModifiedArr[0];
      if (result !== null) {
        return result;
      } else if (!quitEarlyArr[0]) {
        const leftChanges = this.ComputeDiffRecursive(originalStart, midOriginal, modifiedStart, midModified, quitEarlyArr);
        let rightChanges = [];
        if (!quitEarlyArr[0]) {
          rightChanges = this.ComputeDiffRecursive(midOriginal + 1, originalEnd, midModified + 1, modifiedEnd, quitEarlyArr);
        } else {
          rightChanges = [
            new DiffChange(midOriginal + 1, originalEnd - (midOriginal + 1) + 1, midModified + 1, modifiedEnd - (midModified + 1) + 1)
          ];
        }
        return this.ConcatenateChanges(leftChanges, rightChanges);
      }
      return [
        new DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
      ];
    }
    WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr) {
      let forwardChanges = null;
      let reverseChanges = null;
      let changeHelper = new DiffChangeHelper();
      let diagonalMin = diagonalForwardStart;
      let diagonalMax = diagonalForwardEnd;
      let diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalForwardOffset;
      let lastOriginalIndex = -1073741824;
      let historyIndex = this.m_forwardHistory.length - 1;
      do {
        const diagonal = diagonalRelative + diagonalForwardBase;
        if (diagonal === diagonalMin || diagonal < diagonalMax && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
          originalIndex = forwardPoints[diagonal + 1];
          modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
          if (originalIndex < lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }
          lastOriginalIndex = originalIndex;
          changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex);
          diagonalRelative = diagonal + 1 - diagonalForwardBase;
        } else {
          originalIndex = forwardPoints[diagonal - 1] + 1;
          modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
          if (originalIndex < lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }
          lastOriginalIndex = originalIndex - 1;
          changeHelper.AddOriginalElement(originalIndex, modifiedIndex + 1);
          diagonalRelative = diagonal - 1 - diagonalForwardBase;
        }
        if (historyIndex >= 0) {
          forwardPoints = this.m_forwardHistory[historyIndex];
          diagonalForwardBase = forwardPoints[0];
          diagonalMin = 1;
          diagonalMax = forwardPoints.length - 1;
        }
      } while (--historyIndex >= -1);
      forwardChanges = changeHelper.getReverseChanges();
      if (quitEarlyArr[0]) {
        let originalStartPoint = midOriginalArr[0] + 1;
        let modifiedStartPoint = midModifiedArr[0] + 1;
        if (forwardChanges !== null && forwardChanges.length > 0) {
          const lastForwardChange = forwardChanges[forwardChanges.length - 1];
          originalStartPoint = Math.max(originalStartPoint, lastForwardChange.getOriginalEnd());
          modifiedStartPoint = Math.max(modifiedStartPoint, lastForwardChange.getModifiedEnd());
        }
        reverseChanges = [
          new DiffChange(originalStartPoint, originalEnd - originalStartPoint + 1, modifiedStartPoint, modifiedEnd - modifiedStartPoint + 1)
        ];
      } else {
        changeHelper = new DiffChangeHelper();
        diagonalMin = diagonalReverseStart;
        diagonalMax = diagonalReverseEnd;
        diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalReverseOffset;
        lastOriginalIndex = 1073741824;
        historyIndex = deltaIsEven ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
        do {
          const diagonal = diagonalRelative + diagonalReverseBase;
          if (diagonal === diagonalMin || diagonal < diagonalMax && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1]) {
            originalIndex = reversePoints[diagonal + 1] - 1;
            modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
            if (originalIndex > lastOriginalIndex) {
              changeHelper.MarkNextChange();
            }
            lastOriginalIndex = originalIndex + 1;
            changeHelper.AddOriginalElement(originalIndex + 1, modifiedIndex + 1);
            diagonalRelative = diagonal + 1 - diagonalReverseBase;
          } else {
            originalIndex = reversePoints[diagonal - 1];
            modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
            if (originalIndex > lastOriginalIndex) {
              changeHelper.MarkNextChange();
            }
            lastOriginalIndex = originalIndex;
            changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex + 1);
            diagonalRelative = diagonal - 1 - diagonalReverseBase;
          }
          if (historyIndex >= 0) {
            reversePoints = this.m_reverseHistory[historyIndex];
            diagonalReverseBase = reversePoints[0];
            diagonalMin = 1;
            diagonalMax = reversePoints.length - 1;
          }
        } while (--historyIndex >= -1);
        reverseChanges = changeHelper.getChanges();
      }
      return this.ConcatenateChanges(forwardChanges, reverseChanges);
    }
    /**
     * Given the range to compute the diff on, this method finds the point:
     * (midOriginal, midModified)
     * that exists in the middle of the LCS of the two sequences and
     * is the point at which the LCS problem may be broken down recursively.
     * This method will try to keep the LCS trace in memory. If the LCS recursion
     * point is calculated and the full trace is available in memory, then this method
     * will return the change list.
     * @param originalStart The start bound of the original sequence range
     * @param originalEnd The end bound of the original sequence range
     * @param modifiedStart The start bound of the modified sequence range
     * @param modifiedEnd The end bound of the modified sequence range
     * @param midOriginal The middle point of the original sequence range
     * @param midModified The middle point of the modified sequence range
     * @returns The diff changes, if available, otherwise null
     */
    ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr) {
      let originalIndex = 0, modifiedIndex = 0;
      let diagonalForwardStart = 0, diagonalForwardEnd = 0;
      let diagonalReverseStart = 0, diagonalReverseEnd = 0;
      originalStart--;
      modifiedStart--;
      midOriginalArr[0] = 0;
      midModifiedArr[0] = 0;
      this.m_forwardHistory = [];
      this.m_reverseHistory = [];
      const maxDifferences = originalEnd - originalStart + (modifiedEnd - modifiedStart);
      const numDiagonals = maxDifferences + 1;
      const forwardPoints = new Int32Array(numDiagonals);
      const reversePoints = new Int32Array(numDiagonals);
      const diagonalForwardBase = modifiedEnd - modifiedStart;
      const diagonalReverseBase = originalEnd - originalStart;
      const diagonalForwardOffset = originalStart - modifiedStart;
      const diagonalReverseOffset = originalEnd - modifiedEnd;
      const delta = diagonalReverseBase - diagonalForwardBase;
      const deltaIsEven = delta % 2 === 0;
      forwardPoints[diagonalForwardBase] = originalStart;
      reversePoints[diagonalReverseBase] = originalEnd;
      quitEarlyArr[0] = false;
      for (let numDifferences = 1; numDifferences <= maxDifferences / 2 + 1; numDifferences++) {
        let furthestOriginalIndex = 0;
        let furthestModifiedIndex = 0;
        diagonalForwardStart = this.ClipDiagonalBound(diagonalForwardBase - numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
        diagonalForwardEnd = this.ClipDiagonalBound(diagonalForwardBase + numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
        for (let diagonal = diagonalForwardStart; diagonal <= diagonalForwardEnd; diagonal += 2) {
          if (diagonal === diagonalForwardStart || diagonal < diagonalForwardEnd && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
            originalIndex = forwardPoints[diagonal + 1];
          } else {
            originalIndex = forwardPoints[diagonal - 1] + 1;
          }
          modifiedIndex = originalIndex - (diagonal - diagonalForwardBase) - diagonalForwardOffset;
          const tempOriginalIndex = originalIndex;
          while (originalIndex < originalEnd && modifiedIndex < modifiedEnd && this.ElementsAreEqual(originalIndex + 1, modifiedIndex + 1)) {
            originalIndex++;
            modifiedIndex++;
          }
          forwardPoints[diagonal] = originalIndex;
          if (originalIndex + modifiedIndex > furthestOriginalIndex + furthestModifiedIndex) {
            furthestOriginalIndex = originalIndex;
            furthestModifiedIndex = modifiedIndex;
          }
          if (!deltaIsEven && Math.abs(diagonal - diagonalReverseBase) <= numDifferences - 1) {
            if (originalIndex >= reversePoints[diagonal]) {
              midOriginalArr[0] = originalIndex;
              midModifiedArr[0] = modifiedIndex;
              if (tempOriginalIndex <= reversePoints[diagonal] && 1447 > 0 && numDifferences <= 1447 + 1) {
                return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
              } else {
                return null;
              }
            }
          }
        }
        const matchLengthOfLongest = (furthestOriginalIndex - originalStart + (furthestModifiedIndex - modifiedStart) - numDifferences) / 2;
        if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(furthestOriginalIndex, matchLengthOfLongest)) {
          quitEarlyArr[0] = true;
          midOriginalArr[0] = furthestOriginalIndex;
          midModifiedArr[0] = furthestModifiedIndex;
          if (matchLengthOfLongest > 0 && 1447 > 0 && numDifferences <= 1447 + 1) {
            return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
          } else {
            originalStart++;
            modifiedStart++;
            return [
              new DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
            ];
          }
        }
        diagonalReverseStart = this.ClipDiagonalBound(diagonalReverseBase - numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
        diagonalReverseEnd = this.ClipDiagonalBound(diagonalReverseBase + numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
        for (let diagonal = diagonalReverseStart; diagonal <= diagonalReverseEnd; diagonal += 2) {
          if (diagonal === diagonalReverseStart || diagonal < diagonalReverseEnd && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1]) {
            originalIndex = reversePoints[diagonal + 1] - 1;
          } else {
            originalIndex = reversePoints[diagonal - 1];
          }
          modifiedIndex = originalIndex - (diagonal - diagonalReverseBase) - diagonalReverseOffset;
          const tempOriginalIndex = originalIndex;
          while (originalIndex > originalStart && modifiedIndex > modifiedStart && this.ElementsAreEqual(originalIndex, modifiedIndex)) {
            originalIndex--;
            modifiedIndex--;
          }
          reversePoints[diagonal] = originalIndex;
          if (deltaIsEven && Math.abs(diagonal - diagonalForwardBase) <= numDifferences) {
            if (originalIndex <= forwardPoints[diagonal]) {
              midOriginalArr[0] = originalIndex;
              midModifiedArr[0] = modifiedIndex;
              if (tempOriginalIndex >= forwardPoints[diagonal] && 1447 > 0 && numDifferences <= 1447 + 1) {
                return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
              } else {
                return null;
              }
            }
          }
        }
        if (numDifferences <= 1447) {
          let temp = new Int32Array(diagonalForwardEnd - diagonalForwardStart + 2);
          temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
          MyArray.Copy2(forwardPoints, diagonalForwardStart, temp, 1, diagonalForwardEnd - diagonalForwardStart + 1);
          this.m_forwardHistory.push(temp);
          temp = new Int32Array(diagonalReverseEnd - diagonalReverseStart + 2);
          temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
          MyArray.Copy2(reversePoints, diagonalReverseStart, temp, 1, diagonalReverseEnd - diagonalReverseStart + 1);
          this.m_reverseHistory.push(temp);
        }
      }
      return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
    }
    /**
     * Shifts the given changes to provide a more intuitive diff.
     * While the first element in a diff matches the first element after the diff,
     * we shift the diff down.
     *
     * @param changes The list of changes to shift
     * @returns The shifted changes
     */
    PrettifyChanges(changes) {
      for (let i = 0; i < changes.length; i++) {
        const change = changes[i];
        const originalStop = i < changes.length - 1 ? changes[i + 1].originalStart : this._originalElementsOrHash.length;
        const modifiedStop = i < changes.length - 1 ? changes[i + 1].modifiedStart : this._modifiedElementsOrHash.length;
        const checkOriginal = change.originalLength > 0;
        const checkModified = change.modifiedLength > 0;
        while (change.originalStart + change.originalLength < originalStop && change.modifiedStart + change.modifiedLength < modifiedStop && (!checkOriginal || this.OriginalElementsAreEqual(change.originalStart, change.originalStart + change.originalLength)) && (!checkModified || this.ModifiedElementsAreEqual(change.modifiedStart, change.modifiedStart + change.modifiedLength))) {
          const startStrictEqual = this.ElementsAreStrictEqual(change.originalStart, change.modifiedStart);
          const endStrictEqual = this.ElementsAreStrictEqual(change.originalStart + change.originalLength, change.modifiedStart + change.modifiedLength);
          if (endStrictEqual && !startStrictEqual) {
            break;
          }
          change.originalStart++;
          change.modifiedStart++;
        }
        const mergedChangeArr = [null];
        if (i < changes.length - 1 && this.ChangesOverlap(changes[i], changes[i + 1], mergedChangeArr)) {
          changes[i] = mergedChangeArr[0];
          changes.splice(i + 1, 1);
          i--;
          continue;
        }
      }
      for (let i = changes.length - 1; i >= 0; i--) {
        const change = changes[i];
        let originalStop = 0;
        let modifiedStop = 0;
        if (i > 0) {
          const prevChange = changes[i - 1];
          originalStop = prevChange.originalStart + prevChange.originalLength;
          modifiedStop = prevChange.modifiedStart + prevChange.modifiedLength;
        }
        const checkOriginal = change.originalLength > 0;
        const checkModified = change.modifiedLength > 0;
        let bestDelta = 0;
        let bestScore = this._boundaryScore(change.originalStart, change.originalLength, change.modifiedStart, change.modifiedLength);
        for (let delta = 1; ; delta++) {
          const originalStart = change.originalStart - delta;
          const modifiedStart = change.modifiedStart - delta;
          if (originalStart < originalStop || modifiedStart < modifiedStop) {
            break;
          }
          if (checkOriginal && !this.OriginalElementsAreEqual(originalStart, originalStart + change.originalLength)) {
            break;
          }
          if (checkModified && !this.ModifiedElementsAreEqual(modifiedStart, modifiedStart + change.modifiedLength)) {
            break;
          }
          const touchingPreviousChange = originalStart === originalStop && modifiedStart === modifiedStop;
          const score2 = (touchingPreviousChange ? 5 : 0) + this._boundaryScore(originalStart, change.originalLength, modifiedStart, change.modifiedLength);
          if (score2 > bestScore) {
            bestScore = score2;
            bestDelta = delta;
          }
        }
        change.originalStart -= bestDelta;
        change.modifiedStart -= bestDelta;
        const mergedChangeArr = [null];
        if (i > 0 && this.ChangesOverlap(changes[i - 1], changes[i], mergedChangeArr)) {
          changes[i - 1] = mergedChangeArr[0];
          changes.splice(i, 1);
          i++;
          continue;
        }
      }
      if (this._hasStrings) {
        for (let i = 1, len = changes.length; i < len; i++) {
          const aChange = changes[i - 1];
          const bChange = changes[i];
          const matchedLength = bChange.originalStart - aChange.originalStart - aChange.originalLength;
          const aOriginalStart = aChange.originalStart;
          const bOriginalEnd = bChange.originalStart + bChange.originalLength;
          const abOriginalLength = bOriginalEnd - aOriginalStart;
          const aModifiedStart = aChange.modifiedStart;
          const bModifiedEnd = bChange.modifiedStart + bChange.modifiedLength;
          const abModifiedLength = bModifiedEnd - aModifiedStart;
          if (matchedLength < 5 && abOriginalLength < 20 && abModifiedLength < 20) {
            const t2 = this._findBetterContiguousSequence(aOriginalStart, abOriginalLength, aModifiedStart, abModifiedLength, matchedLength);
            if (t2) {
              const [originalMatchStart, modifiedMatchStart] = t2;
              if (originalMatchStart !== aChange.originalStart + aChange.originalLength || modifiedMatchStart !== aChange.modifiedStart + aChange.modifiedLength) {
                aChange.originalLength = originalMatchStart - aChange.originalStart;
                aChange.modifiedLength = modifiedMatchStart - aChange.modifiedStart;
                bChange.originalStart = originalMatchStart + matchedLength;
                bChange.modifiedStart = modifiedMatchStart + matchedLength;
                bChange.originalLength = bOriginalEnd - bChange.originalStart;
                bChange.modifiedLength = bModifiedEnd - bChange.modifiedStart;
              }
            }
          }
        }
      }
      return changes;
    }
    _findBetterContiguousSequence(originalStart, originalLength, modifiedStart, modifiedLength, desiredLength) {
      if (originalLength < desiredLength || modifiedLength < desiredLength) {
        return null;
      }
      const originalMax = originalStart + originalLength - desiredLength + 1;
      const modifiedMax = modifiedStart + modifiedLength - desiredLength + 1;
      let bestScore = 0;
      let bestOriginalStart = 0;
      let bestModifiedStart = 0;
      for (let i = originalStart; i < originalMax; i++) {
        for (let j = modifiedStart; j < modifiedMax; j++) {
          const score2 = this._contiguousSequenceScore(i, j, desiredLength);
          if (score2 > 0 && score2 > bestScore) {
            bestScore = score2;
            bestOriginalStart = i;
            bestModifiedStart = j;
          }
        }
      }
      if (bestScore > 0) {
        return [bestOriginalStart, bestModifiedStart];
      }
      return null;
    }
    _contiguousSequenceScore(originalStart, modifiedStart, length) {
      let score2 = 0;
      for (let l = 0; l < length; l++) {
        if (!this.ElementsAreEqual(originalStart + l, modifiedStart + l)) {
          return 0;
        }
        score2 += this._originalStringElements[originalStart + l].length;
      }
      return score2;
    }
    _OriginalIsBoundary(index) {
      if (index <= 0 || index >= this._originalElementsOrHash.length - 1) {
        return true;
      }
      return this._hasStrings && /^\s*$/.test(this._originalStringElements[index]);
    }
    _OriginalRegionIsBoundary(originalStart, originalLength) {
      if (this._OriginalIsBoundary(originalStart) || this._OriginalIsBoundary(originalStart - 1)) {
        return true;
      }
      if (originalLength > 0) {
        const originalEnd = originalStart + originalLength;
        if (this._OriginalIsBoundary(originalEnd - 1) || this._OriginalIsBoundary(originalEnd)) {
          return true;
        }
      }
      return false;
    }
    _ModifiedIsBoundary(index) {
      if (index <= 0 || index >= this._modifiedElementsOrHash.length - 1) {
        return true;
      }
      return this._hasStrings && /^\s*$/.test(this._modifiedStringElements[index]);
    }
    _ModifiedRegionIsBoundary(modifiedStart, modifiedLength) {
      if (this._ModifiedIsBoundary(modifiedStart) || this._ModifiedIsBoundary(modifiedStart - 1)) {
        return true;
      }
      if (modifiedLength > 0) {
        const modifiedEnd = modifiedStart + modifiedLength;
        if (this._ModifiedIsBoundary(modifiedEnd - 1) || this._ModifiedIsBoundary(modifiedEnd)) {
          return true;
        }
      }
      return false;
    }
    _boundaryScore(originalStart, originalLength, modifiedStart, modifiedLength) {
      const originalScore = this._OriginalRegionIsBoundary(originalStart, originalLength) ? 1 : 0;
      const modifiedScore = this._ModifiedRegionIsBoundary(modifiedStart, modifiedLength) ? 1 : 0;
      return originalScore + modifiedScore;
    }
    /**
     * Concatenates the two input DiffChange lists and returns the resulting
     * list.
     * @param The left changes
     * @param The right changes
     * @returns The concatenated list
     */
    ConcatenateChanges(left, right) {
      const mergedChangeArr = [];
      if (left.length === 0 || right.length === 0) {
        return right.length > 0 ? right : left;
      } else if (this.ChangesOverlap(left[left.length - 1], right[0], mergedChangeArr)) {
        const result = new Array(left.length + right.length - 1);
        MyArray.Copy(left, 0, result, 0, left.length - 1);
        result[left.length - 1] = mergedChangeArr[0];
        MyArray.Copy(right, 1, result, left.length, right.length - 1);
        return result;
      } else {
        const result = new Array(left.length + right.length);
        MyArray.Copy(left, 0, result, 0, left.length);
        MyArray.Copy(right, 0, result, left.length, right.length);
        return result;
      }
    }
    /**
     * Returns true if the two changes overlap and can be merged into a single
     * change
     * @param left The left change
     * @param right The right change
     * @param mergedChange The merged change if the two overlap, null otherwise
     * @returns True if the two changes overlap
     */
    ChangesOverlap(left, right, mergedChangeArr) {
      Debug.Assert(left.originalStart <= right.originalStart, "Left change is not less than or equal to right change");
      Debug.Assert(left.modifiedStart <= right.modifiedStart, "Left change is not less than or equal to right change");
      if (left.originalStart + left.originalLength >= right.originalStart || left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
        const originalStart = left.originalStart;
        let originalLength = left.originalLength;
        const modifiedStart = left.modifiedStart;
        let modifiedLength = left.modifiedLength;
        if (left.originalStart + left.originalLength >= right.originalStart) {
          originalLength = right.originalStart + right.originalLength - left.originalStart;
        }
        if (left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
          modifiedLength = right.modifiedStart + right.modifiedLength - left.modifiedStart;
        }
        mergedChangeArr[0] = new DiffChange(originalStart, originalLength, modifiedStart, modifiedLength);
        return true;
      } else {
        mergedChangeArr[0] = null;
        return false;
      }
    }
    /**
     * Helper method used to clip a diagonal index to the range of valid
     * diagonals. This also decides whether or not the diagonal index,
     * if it exceeds the boundary, should be clipped to the boundary or clipped
     * one inside the boundary depending on the Even/Odd status of the boundary
     * and numDifferences.
     * @param diagonal The index of the diagonal to clip.
     * @param numDifferences The current number of differences being iterated upon.
     * @param diagonalBaseIndex The base reference diagonal.
     * @param numDiagonals The total number of diagonals.
     * @returns The clipped diagonal index.
     */
    ClipDiagonalBound(diagonal, numDifferences, diagonalBaseIndex, numDiagonals) {
      if (diagonal >= 0 && diagonal < numDiagonals) {
        return diagonal;
      }
      const diagonalsBelow = diagonalBaseIndex;
      const diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
      const diffEven = numDifferences % 2 === 0;
      if (diagonal < 0) {
        const lowerBoundEven = diagonalsBelow % 2 === 0;
        return diffEven === lowerBoundEven ? 0 : 1;
      } else {
        const upperBoundEven = diagonalsAbove % 2 === 0;
        return diffEven === upperBoundEven ? numDiagonals - 1 : numDiagonals - 2;
      }
    }
  }
  let Position$1 = class Position2 {
    constructor(lineNumber, column) {
      this.lineNumber = lineNumber;
      this.column = column;
    }
    /**
     * Create a new position from this position.
     *
     * @param newLineNumber new line number
     * @param newColumn new column
     */
    with(newLineNumber = this.lineNumber, newColumn = this.column) {
      if (newLineNumber === this.lineNumber && newColumn === this.column) {
        return this;
      } else {
        return new Position2(newLineNumber, newColumn);
      }
    }
    /**
     * Derive a new position from this position.
     *
     * @param deltaLineNumber line number delta
     * @param deltaColumn column delta
     */
    delta(deltaLineNumber = 0, deltaColumn = 0) {
      return this.with(Math.max(1, this.lineNumber + deltaLineNumber), Math.max(1, this.column + deltaColumn));
    }
    /**
     * Test if this position equals other position
     */
    equals(other) {
      return Position2.equals(this, other);
    }
    /**
     * Test if position `a` equals position `b`
     */
    static equals(a2, b) {
      if (!a2 && !b) {
        return true;
      }
      return !!a2 && !!b && a2.lineNumber === b.lineNumber && a2.column === b.column;
    }
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be false.
     */
    isBefore(other) {
      return Position2.isBefore(this, other);
    }
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be false.
     */
    static isBefore(a2, b) {
      if (a2.lineNumber < b.lineNumber) {
        return true;
      }
      if (b.lineNumber < a2.lineNumber) {
        return false;
      }
      return a2.column < b.column;
    }
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be true.
     */
    isBeforeOrEqual(other) {
      return Position2.isBeforeOrEqual(this, other);
    }
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be true.
     */
    static isBeforeOrEqual(a2, b) {
      if (a2.lineNumber < b.lineNumber) {
        return true;
      }
      if (b.lineNumber < a2.lineNumber) {
        return false;
      }
      return a2.column <= b.column;
    }
    /**
     * A function that compares positions, useful for sorting
     */
    static compare(a2, b) {
      const aLineNumber = a2.lineNumber | 0;
      const bLineNumber = b.lineNumber | 0;
      if (aLineNumber === bLineNumber) {
        const aColumn = a2.column | 0;
        const bColumn = b.column | 0;
        return aColumn - bColumn;
      }
      return aLineNumber - bLineNumber;
    }
    /**
     * Clone this position.
     */
    clone() {
      return new Position2(this.lineNumber, this.column);
    }
    /**
     * Convert to a human-readable representation.
     */
    toString() {
      return "(" + this.lineNumber + "," + this.column + ")";
    }
    // ---
    /**
     * Create a `Position` from an `IPosition`.
     */
    static lift(pos) {
      return new Position2(pos.lineNumber, pos.column);
    }
    /**
     * Test if `obj` is an `IPosition`.
     */
    static isIPosition(obj) {
      return !!obj && typeof obj.lineNumber === "number" && typeof obj.column === "number";
    }
    toJSON() {
      return {
        lineNumber: this.lineNumber,
        column: this.column
      };
    }
  };
  let Range$1 = class Range2 {
    constructor(startLineNumber, startColumn, endLineNumber, endColumn) {
      if (startLineNumber > endLineNumber || startLineNumber === endLineNumber && startColumn > endColumn) {
        this.startLineNumber = endLineNumber;
        this.startColumn = endColumn;
        this.endLineNumber = startLineNumber;
        this.endColumn = startColumn;
      } else {
        this.startLineNumber = startLineNumber;
        this.startColumn = startColumn;
        this.endLineNumber = endLineNumber;
        this.endColumn = endColumn;
      }
    }
    /**
     * Test if this range is empty.
     */
    isEmpty() {
      return Range2.isEmpty(this);
    }
    /**
     * Test if `range` is empty.
     */
    static isEmpty(range) {
      return range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn;
    }
    /**
     * Test if position is in this range. If the position is at the edges, will return true.
     */
    containsPosition(position) {
      return Range2.containsPosition(this, position);
    }
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return true.
     */
    static containsPosition(range, position) {
      if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
        return false;
      }
      if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
        return false;
      }
      if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
        return false;
      }
      return true;
    }
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return false.
     * @internal
     */
    static strictContainsPosition(range, position) {
      if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
        return false;
      }
      if (position.lineNumber === range.startLineNumber && position.column <= range.startColumn) {
        return false;
      }
      if (position.lineNumber === range.endLineNumber && position.column >= range.endColumn) {
        return false;
      }
      return true;
    }
    /**
     * Test if range is in this range. If the range is equal to this range, will return true.
     */
    containsRange(range) {
      return Range2.containsRange(this, range);
    }
    /**
     * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
     */
    static containsRange(range, otherRange) {
      if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
        return false;
      }
      if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
        return false;
      }
      if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
        return false;
      }
      if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
        return false;
      }
      return true;
    }
    /**
     * Test if `range` is strictly in this range. `range` must start after and end before this range for the result to be true.
     */
    strictContainsRange(range) {
      return Range2.strictContainsRange(this, range);
    }
    /**
     * Test if `otherRange` is strictly in `range` (must start after, and end before). If the ranges are equal, will return false.
     */
    static strictContainsRange(range, otherRange) {
      if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
        return false;
      }
      if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
        return false;
      }
      if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn <= range.startColumn) {
        return false;
      }
      if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn >= range.endColumn) {
        return false;
      }
      return true;
    }
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    plusRange(range) {
      return Range2.plusRange(this, range);
    }
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    static plusRange(a2, b) {
      let startLineNumber;
      let startColumn;
      let endLineNumber;
      let endColumn;
      if (b.startLineNumber < a2.startLineNumber) {
        startLineNumber = b.startLineNumber;
        startColumn = b.startColumn;
      } else if (b.startLineNumber === a2.startLineNumber) {
        startLineNumber = b.startLineNumber;
        startColumn = Math.min(b.startColumn, a2.startColumn);
      } else {
        startLineNumber = a2.startLineNumber;
        startColumn = a2.startColumn;
      }
      if (b.endLineNumber > a2.endLineNumber) {
        endLineNumber = b.endLineNumber;
        endColumn = b.endColumn;
      } else if (b.endLineNumber === a2.endLineNumber) {
        endLineNumber = b.endLineNumber;
        endColumn = Math.max(b.endColumn, a2.endColumn);
      } else {
        endLineNumber = a2.endLineNumber;
        endColumn = a2.endColumn;
      }
      return new Range2(startLineNumber, startColumn, endLineNumber, endColumn);
    }
    /**
     * A intersection of the two ranges.
     */
    intersectRanges(range) {
      return Range2.intersectRanges(this, range);
    }
    /**
     * A intersection of the two ranges.
     */
    static intersectRanges(a2, b) {
      let resultStartLineNumber = a2.startLineNumber;
      let resultStartColumn = a2.startColumn;
      let resultEndLineNumber = a2.endLineNumber;
      let resultEndColumn = a2.endColumn;
      const otherStartLineNumber = b.startLineNumber;
      const otherStartColumn = b.startColumn;
      const otherEndLineNumber = b.endLineNumber;
      const otherEndColumn = b.endColumn;
      if (resultStartLineNumber < otherStartLineNumber) {
        resultStartLineNumber = otherStartLineNumber;
        resultStartColumn = otherStartColumn;
      } else if (resultStartLineNumber === otherStartLineNumber) {
        resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
      }
      if (resultEndLineNumber > otherEndLineNumber) {
        resultEndLineNumber = otherEndLineNumber;
        resultEndColumn = otherEndColumn;
      } else if (resultEndLineNumber === otherEndLineNumber) {
        resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
      }
      if (resultStartLineNumber > resultEndLineNumber) {
        return null;
      }
      if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
        return null;
      }
      return new Range2(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
    }
    /**
     * Test if this range equals other.
     */
    equalsRange(other) {
      return Range2.equalsRange(this, other);
    }
    /**
     * Test if range `a` equals `b`.
     */
    static equalsRange(a2, b) {
      if (!a2 && !b) {
        return true;
      }
      return !!a2 && !!b && a2.startLineNumber === b.startLineNumber && a2.startColumn === b.startColumn && a2.endLineNumber === b.endLineNumber && a2.endColumn === b.endColumn;
    }
    /**
     * Return the end position (which will be after or equal to the start position)
     */
    getEndPosition() {
      return Range2.getEndPosition(this);
    }
    /**
     * Return the end position (which will be after or equal to the start position)
     */
    static getEndPosition(range) {
      return new Position$1(range.endLineNumber, range.endColumn);
    }
    /**
     * Return the start position (which will be before or equal to the end position)
     */
    getStartPosition() {
      return Range2.getStartPosition(this);
    }
    /**
     * Return the start position (which will be before or equal to the end position)
     */
    static getStartPosition(range) {
      return new Position$1(range.startLineNumber, range.startColumn);
    }
    /**
     * Transform to a user presentable string representation.
     */
    toString() {
      return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
    }
    /**
     * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
     */
    setEndPosition(endLineNumber, endColumn) {
      return new Range2(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    }
    /**
     * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
     */
    setStartPosition(startLineNumber, startColumn) {
      return new Range2(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    }
    /**
     * Create a new empty range using this range's start position.
     */
    collapseToStart() {
      return Range2.collapseToStart(this);
    }
    /**
     * Create a new empty range using this range's start position.
     */
    static collapseToStart(range) {
      return new Range2(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
    }
    /**
     * Create a new empty range using this range's end position.
     */
    collapseToEnd() {
      return Range2.collapseToEnd(this);
    }
    /**
     * Create a new empty range using this range's end position.
     */
    static collapseToEnd(range) {
      return new Range2(range.endLineNumber, range.endColumn, range.endLineNumber, range.endColumn);
    }
    /**
     * Moves the range by the given amount of lines.
     */
    delta(lineCount) {
      return new Range2(this.startLineNumber + lineCount, this.startColumn, this.endLineNumber + lineCount, this.endColumn);
    }
    isSingleLine() {
      return this.startLineNumber === this.endLineNumber;
    }
    // ---
    static fromPositions(start2, end = start2) {
      return new Range2(start2.lineNumber, start2.column, end.lineNumber, end.column);
    }
    static lift(range) {
      if (!range) {
        return null;
      }
      return new Range2(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    }
    /**
     * Test if `obj` is an `IRange`.
     */
    static isIRange(obj) {
      return !!obj && typeof obj.startLineNumber === "number" && typeof obj.startColumn === "number" && typeof obj.endLineNumber === "number" && typeof obj.endColumn === "number";
    }
    /**
     * Test if the two ranges are touching in any way.
     */
    static areIntersectingOrTouching(a2, b) {
      if (a2.endLineNumber < b.startLineNumber || a2.endLineNumber === b.startLineNumber && a2.endColumn < b.startColumn) {
        return false;
      }
      if (b.endLineNumber < a2.startLineNumber || b.endLineNumber === a2.startLineNumber && b.endColumn < a2.startColumn) {
        return false;
      }
      return true;
    }
    /**
     * Test if the two ranges are intersecting. If the ranges are touching it returns true.
     */
    static areIntersecting(a2, b) {
      if (a2.endLineNumber < b.startLineNumber || a2.endLineNumber === b.startLineNumber && a2.endColumn <= b.startColumn) {
        return false;
      }
      if (b.endLineNumber < a2.startLineNumber || b.endLineNumber === a2.startLineNumber && b.endColumn <= a2.startColumn) {
        return false;
      }
      return true;
    }
    /**
     * Test if the two ranges are intersecting, but not touching at all.
     */
    static areOnlyIntersecting(a2, b) {
      if (a2.endLineNumber < b.startLineNumber - 1 || a2.endLineNumber === b.startLineNumber && a2.endColumn < b.startColumn - 1) {
        return false;
      }
      if (b.endLineNumber < a2.startLineNumber - 1 || b.endLineNumber === a2.startLineNumber && b.endColumn < a2.startColumn - 1) {
        return false;
      }
      return true;
    }
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the startPosition and then on the endPosition
     */
    static compareRangesUsingStarts(a2, b) {
      if (a2 && b) {
        const aStartLineNumber = a2.startLineNumber | 0;
        const bStartLineNumber = b.startLineNumber | 0;
        if (aStartLineNumber === bStartLineNumber) {
          const aStartColumn = a2.startColumn | 0;
          const bStartColumn = b.startColumn | 0;
          if (aStartColumn === bStartColumn) {
            const aEndLineNumber = a2.endLineNumber | 0;
            const bEndLineNumber = b.endLineNumber | 0;
            if (aEndLineNumber === bEndLineNumber) {
              const aEndColumn = a2.endColumn | 0;
              const bEndColumn = b.endColumn | 0;
              return aEndColumn - bEndColumn;
            }
            return aEndLineNumber - bEndLineNumber;
          }
          return aStartColumn - bStartColumn;
        }
        return aStartLineNumber - bStartLineNumber;
      }
      const aExists = a2 ? 1 : 0;
      const bExists = b ? 1 : 0;
      return aExists - bExists;
    }
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the endPosition and then on the startPosition
     */
    static compareRangesUsingEnds(a2, b) {
      if (a2.endLineNumber === b.endLineNumber) {
        if (a2.endColumn === b.endColumn) {
          if (a2.startLineNumber === b.startLineNumber) {
            return a2.startColumn - b.startColumn;
          }
          return a2.startLineNumber - b.startLineNumber;
        }
        return a2.endColumn - b.endColumn;
      }
      return a2.endLineNumber - b.endLineNumber;
    }
    /**
     * Test if the range spans multiple lines.
     */
    static spansMultipleLines(range) {
      return range.endLineNumber > range.startLineNumber;
    }
    toJSON() {
      return this;
    }
  };
  function toUint8(v) {
    if (v < 0) {
      return 0;
    }
    if (v > 255) {
      return 255;
    }
    return v | 0;
  }
  function toUint32(v) {
    if (v < 0) {
      return 0;
    }
    if (v > 4294967295) {
      return 4294967295;
    }
    return v | 0;
  }
  class CharacterClassifier {
    constructor(_defaultValue) {
      const defaultValue = toUint8(_defaultValue);
      this._defaultValue = defaultValue;
      this._asciiMap = CharacterClassifier._createAsciiMap(defaultValue);
      this._map = /* @__PURE__ */ new Map();
    }
    static _createAsciiMap(defaultValue) {
      const asciiMap = new Uint8Array(256);
      asciiMap.fill(defaultValue);
      return asciiMap;
    }
    set(charCode, _value) {
      const value = toUint8(_value);
      if (charCode >= 0 && charCode < 256) {
        this._asciiMap[charCode] = value;
      } else {
        this._map.set(charCode, value);
      }
    }
    get(charCode) {
      if (charCode >= 0 && charCode < 256) {
        return this._asciiMap[charCode];
      } else {
        return this._map.get(charCode) || this._defaultValue;
      }
    }
    clear() {
      this._asciiMap.fill(this._defaultValue);
      this._map.clear();
    }
  }
  class Uint8Matrix {
    constructor(rows, cols, defaultValue) {
      const data = new Uint8Array(rows * cols);
      for (let i = 0, len = rows * cols; i < len; i++) {
        data[i] = defaultValue;
      }
      this._data = data;
      this.rows = rows;
      this.cols = cols;
    }
    get(row, col) {
      return this._data[row * this.cols + col];
    }
    set(row, col, value) {
      this._data[row * this.cols + col] = value;
    }
  }
  class StateMachine {
    constructor(edges) {
      let maxCharCode = 0;
      let maxState = 0;
      for (let i = 0, len = edges.length; i < len; i++) {
        const [from, chCode, to] = edges[i];
        if (chCode > maxCharCode) {
          maxCharCode = chCode;
        }
        if (from > maxState) {
          maxState = from;
        }
        if (to > maxState) {
          maxState = to;
        }
      }
      maxCharCode++;
      maxState++;
      const states = new Uint8Matrix(
        maxState,
        maxCharCode,
        0
        /* State.Invalid */
      );
      for (let i = 0, len = edges.length; i < len; i++) {
        const [from, chCode, to] = edges[i];
        states.set(from, chCode, to);
      }
      this._states = states;
      this._maxCharCode = maxCharCode;
    }
    nextState(currentState, chCode) {
      if (chCode < 0 || chCode >= this._maxCharCode) {
        return 0;
      }
      return this._states.get(currentState, chCode);
    }
  }
  let _stateMachine = null;
  function getStateMachine() {
    if (_stateMachine === null) {
      _stateMachine = new StateMachine([
        [
          1,
          104,
          2
          /* State.H */
        ],
        [
          1,
          72,
          2
          /* State.H */
        ],
        [
          1,
          102,
          6
          /* State.F */
        ],
        [
          1,
          70,
          6
          /* State.F */
        ],
        [
          2,
          116,
          3
          /* State.HT */
        ],
        [
          2,
          84,
          3
          /* State.HT */
        ],
        [
          3,
          116,
          4
          /* State.HTT */
        ],
        [
          3,
          84,
          4
          /* State.HTT */
        ],
        [
          4,
          112,
          5
          /* State.HTTP */
        ],
        [
          4,
          80,
          5
          /* State.HTTP */
        ],
        [
          5,
          115,
          9
          /* State.BeforeColon */
        ],
        [
          5,
          83,
          9
          /* State.BeforeColon */
        ],
        [
          5,
          58,
          10
          /* State.AfterColon */
        ],
        [
          6,
          105,
          7
          /* State.FI */
        ],
        [
          6,
          73,
          7
          /* State.FI */
        ],
        [
          7,
          108,
          8
          /* State.FIL */
        ],
        [
          7,
          76,
          8
          /* State.FIL */
        ],
        [
          8,
          101,
          9
          /* State.BeforeColon */
        ],
        [
          8,
          69,
          9
          /* State.BeforeColon */
        ],
        [
          9,
          58,
          10
          /* State.AfterColon */
        ],
        [
          10,
          47,
          11
          /* State.AlmostThere */
        ],
        [
          11,
          47,
          12
          /* State.End */
        ]
      ]);
    }
    return _stateMachine;
  }
  let _classifier = null;
  function getClassifier() {
    if (_classifier === null) {
      _classifier = new CharacterClassifier(
        0
        /* CharacterClass.None */
      );
      const FORCE_TERMINATION_CHARACTERS = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…|`;
      for (let i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
        _classifier.set(
          FORCE_TERMINATION_CHARACTERS.charCodeAt(i),
          1
          /* CharacterClass.ForceTermination */
        );
      }
      const CANNOT_END_WITH_CHARACTERS = ".,;:";
      for (let i = 0; i < CANNOT_END_WITH_CHARACTERS.length; i++) {
        _classifier.set(
          CANNOT_END_WITH_CHARACTERS.charCodeAt(i),
          2
          /* CharacterClass.CannotEndIn */
        );
      }
    }
    return _classifier;
  }
  class LinkComputer {
    static _createLink(classifier, line, lineNumber, linkBeginIndex, linkEndIndex) {
      let lastIncludedCharIndex = linkEndIndex - 1;
      do {
        const chCode = line.charCodeAt(lastIncludedCharIndex);
        const chClass = classifier.get(chCode);
        if (chClass !== 2) {
          break;
        }
        lastIncludedCharIndex--;
      } while (lastIncludedCharIndex > linkBeginIndex);
      if (linkBeginIndex > 0) {
        const charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
        const lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);
        if (charCodeBeforeLink === 40 && lastCharCodeInLink === 41 || charCodeBeforeLink === 91 && lastCharCodeInLink === 93 || charCodeBeforeLink === 123 && lastCharCodeInLink === 125) {
          lastIncludedCharIndex--;
        }
      }
      return {
        range: {
          startLineNumber: lineNumber,
          startColumn: linkBeginIndex + 1,
          endLineNumber: lineNumber,
          endColumn: lastIncludedCharIndex + 2
        },
        url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
      };
    }
    static computeLinks(model, stateMachine = getStateMachine()) {
      const classifier = getClassifier();
      const result = [];
      for (let i = 1, lineCount = model.getLineCount(); i <= lineCount; i++) {
        const line = model.getLineContent(i);
        const len = line.length;
        let j = 0;
        let linkBeginIndex = 0;
        let linkBeginChCode = 0;
        let state = 1;
        let hasOpenParens = false;
        let hasOpenSquareBracket = false;
        let inSquareBrackets = false;
        let hasOpenCurlyBracket = false;
        while (j < len) {
          let resetStateMachine = false;
          const chCode = line.charCodeAt(j);
          if (state === 13) {
            let chClass;
            switch (chCode) {
              case 40:
                hasOpenParens = true;
                chClass = 0;
                break;
              case 41:
                chClass = hasOpenParens ? 0 : 1;
                break;
              case 91:
                inSquareBrackets = true;
                hasOpenSquareBracket = true;
                chClass = 0;
                break;
              case 93:
                inSquareBrackets = false;
                chClass = hasOpenSquareBracket ? 0 : 1;
                break;
              case 123:
                hasOpenCurlyBracket = true;
                chClass = 0;
                break;
              case 125:
                chClass = hasOpenCurlyBracket ? 0 : 1;
                break;
              // The following three rules make it that ' or " or ` are allowed inside links
              // only if the link is wrapped by some other quote character
              case 39:
              case 34:
              case 96:
                if (linkBeginChCode === chCode) {
                  chClass = 1;
                } else if (linkBeginChCode === 39 || linkBeginChCode === 34 || linkBeginChCode === 96) {
                  chClass = 0;
                } else {
                  chClass = 1;
                }
                break;
              case 42:
                chClass = linkBeginChCode === 42 ? 1 : 0;
                break;
              case 32:
                chClass = inSquareBrackets ? 0 : 1;
                break;
              default:
                chClass = classifier.get(chCode);
            }
            if (chClass === 1) {
              result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, j));
              resetStateMachine = true;
            }
          } else if (state === 12) {
            let chClass;
            if (chCode === 91) {
              hasOpenSquareBracket = true;
              chClass = 0;
            } else {
              chClass = classifier.get(chCode);
            }
            if (chClass === 1) {
              resetStateMachine = true;
            } else {
              state = 13;
            }
          } else {
            state = stateMachine.nextState(state, chCode);
            if (state === 0) {
              resetStateMachine = true;
            }
          }
          if (resetStateMachine) {
            state = 1;
            hasOpenParens = false;
            hasOpenSquareBracket = false;
            hasOpenCurlyBracket = false;
            linkBeginIndex = j + 1;
            linkBeginChCode = chCode;
          }
          j++;
        }
        if (state === 13) {
          result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, len));
        }
      }
      return result;
    }
  }
  function computeLinks(model) {
    if (!model || typeof model.getLineCount !== "function" || typeof model.getLineContent !== "function") {
      return [];
    }
    return LinkComputer.computeLinks(model);
  }
  const _BasicInplaceReplace = class _BasicInplaceReplace {
    constructor() {
      this._defaultValueSet = [
        ["true", "false"],
        ["True", "False"],
        ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"],
        ["public", "protected", "private"]
      ];
    }
    navigateValueSet(range1, text1, range2, text2, up) {
      if (range1 && text1) {
        const result = this.doNavigateValueSet(text1, up);
        if (result) {
          return {
            range: range1,
            value: result
          };
        }
      }
      if (range2 && text2) {
        const result = this.doNavigateValueSet(text2, up);
        if (result) {
          return {
            range: range2,
            value: result
          };
        }
      }
      return null;
    }
    doNavigateValueSet(text, up) {
      const numberResult = this.numberReplace(text, up);
      if (numberResult !== null) {
        return numberResult;
      }
      return this.textReplace(text, up);
    }
    numberReplace(value, up) {
      const precision = Math.pow(10, value.length - (value.lastIndexOf(".") + 1));
      let n1 = Number(value);
      const n2 = parseFloat(value);
      if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
        if (n1 === 0 && !up) {
          return null;
        } else {
          n1 = Math.floor(n1 * precision);
          n1 += up ? precision : -precision;
          return String(n1 / precision);
        }
      }
      return null;
    }
    textReplace(value, up) {
      return this.valueSetsReplace(this._defaultValueSet, value, up);
    }
    valueSetsReplace(valueSets, value, up) {
      let result = null;
      for (let i = 0, len = valueSets.length; result === null && i < len; i++) {
        result = this.valueSetReplace(valueSets[i], value, up);
      }
      return result;
    }
    valueSetReplace(valueSet, value, up) {
      let idx = valueSet.indexOf(value);
      if (idx >= 0) {
        idx += up ? 1 : -1;
        if (idx < 0) {
          idx = valueSet.length - 1;
        } else {
          idx %= valueSet.length;
        }
        return valueSet[idx];
      }
      return null;
    }
  };
  _BasicInplaceReplace.INSTANCE = new _BasicInplaceReplace();
  let BasicInplaceReplace = _BasicInplaceReplace;
  const shortcutEvent = Object.freeze(function(callback, context) {
    const handle = setTimeout(callback.bind(context), 0);
    return { dispose() {
      clearTimeout(handle);
    } };
  });
  var CancellationToken;
  (function(CancellationToken2) {
    function isCancellationToken(thing) {
      if (thing === CancellationToken2.None || thing === CancellationToken2.Cancelled) {
        return true;
      }
      if (thing instanceof MutableToken) {
        return true;
      }
      if (!thing || typeof thing !== "object") {
        return false;
      }
      return typeof thing.isCancellationRequested === "boolean" && typeof thing.onCancellationRequested === "function";
    }
    CancellationToken2.isCancellationToken = isCancellationToken;
    CancellationToken2.None = Object.freeze({
      isCancellationRequested: false,
      onCancellationRequested: Event.None
    });
    CancellationToken2.Cancelled = Object.freeze({
      isCancellationRequested: true,
      onCancellationRequested: shortcutEvent
    });
  })(CancellationToken || (CancellationToken = {}));
  class MutableToken {
    constructor() {
      this._isCancelled = false;
      this._emitter = null;
    }
    cancel() {
      if (!this._isCancelled) {
        this._isCancelled = true;
        if (this._emitter) {
          this._emitter.fire(void 0);
          this.dispose();
        }
      }
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      if (this._isCancelled) {
        return shortcutEvent;
      }
      if (!this._emitter) {
        this._emitter = new Emitter();
      }
      return this._emitter.event;
    }
    dispose() {
      if (this._emitter) {
        this._emitter.dispose();
        this._emitter = null;
      }
    }
  }
  class CancellationTokenSource {
    constructor(parent) {
      this._token = void 0;
      this._parentListener = void 0;
      this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
    }
    get token() {
      if (!this._token) {
        this._token = new MutableToken();
      }
      return this._token;
    }
    cancel() {
      if (!this._token) {
        this._token = CancellationToken.Cancelled;
      } else if (this._token instanceof MutableToken) {
        this._token.cancel();
      }
    }
    dispose(cancel = false) {
      if (cancel) {
        this.cancel();
      }
      this._parentListener?.dispose();
      if (!this._token) {
        this._token = CancellationToken.None;
      } else if (this._token instanceof MutableToken) {
        this._token.dispose();
      }
    }
  }
  class KeyCodeStrMap {
    constructor() {
      this._keyCodeToStr = [];
      this._strToKeyCode = /* @__PURE__ */ Object.create(null);
    }
    define(keyCode, str) {
      this._keyCodeToStr[keyCode] = str;
      this._strToKeyCode[str.toLowerCase()] = keyCode;
    }
    keyCodeToStr(keyCode) {
      return this._keyCodeToStr[keyCode];
    }
    strToKeyCode(str) {
      return this._strToKeyCode[str.toLowerCase()] || 0;
    }
  }
  const uiMap = new KeyCodeStrMap();
  const userSettingsUSMap = new KeyCodeStrMap();
  const userSettingsGeneralMap = new KeyCodeStrMap();
  const EVENT_KEY_CODE_MAP = new Array(230);
  const scanCodeStrToInt = /* @__PURE__ */ Object.create(null);
  const scanCodeLowerCaseStrToInt = /* @__PURE__ */ Object.create(null);
  (function() {
    const empty = "";
    const mappings = [
      // immutable, scanCode, scanCodeStr, keyCode, keyCodeStr, eventKeyCode, vkey, usUserSettingsLabel, generalUserSettingsLabel
      [1, 0, "None", 0, "unknown", 0, "VK_UNKNOWN", empty, empty],
      [1, 1, "Hyper", 0, empty, 0, empty, empty, empty],
      [1, 2, "Super", 0, empty, 0, empty, empty, empty],
      [1, 3, "Fn", 0, empty, 0, empty, empty, empty],
      [1, 4, "FnLock", 0, empty, 0, empty, empty, empty],
      [1, 5, "Suspend", 0, empty, 0, empty, empty, empty],
      [1, 6, "Resume", 0, empty, 0, empty, empty, empty],
      [1, 7, "Turbo", 0, empty, 0, empty, empty, empty],
      [1, 8, "Sleep", 0, empty, 0, "VK_SLEEP", empty, empty],
      [1, 9, "WakeUp", 0, empty, 0, empty, empty, empty],
      [0, 10, "KeyA", 31, "A", 65, "VK_A", empty, empty],
      [0, 11, "KeyB", 32, "B", 66, "VK_B", empty, empty],
      [0, 12, "KeyC", 33, "C", 67, "VK_C", empty, empty],
      [0, 13, "KeyD", 34, "D", 68, "VK_D", empty, empty],
      [0, 14, "KeyE", 35, "E", 69, "VK_E", empty, empty],
      [0, 15, "KeyF", 36, "F", 70, "VK_F", empty, empty],
      [0, 16, "KeyG", 37, "G", 71, "VK_G", empty, empty],
      [0, 17, "KeyH", 38, "H", 72, "VK_H", empty, empty],
      [0, 18, "KeyI", 39, "I", 73, "VK_I", empty, empty],
      [0, 19, "KeyJ", 40, "J", 74, "VK_J", empty, empty],
      [0, 20, "KeyK", 41, "K", 75, "VK_K", empty, empty],
      [0, 21, "KeyL", 42, "L", 76, "VK_L", empty, empty],
      [0, 22, "KeyM", 43, "M", 77, "VK_M", empty, empty],
      [0, 23, "KeyN", 44, "N", 78, "VK_N", empty, empty],
      [0, 24, "KeyO", 45, "O", 79, "VK_O", empty, empty],
      [0, 25, "KeyP", 46, "P", 80, "VK_P", empty, empty],
      [0, 26, "KeyQ", 47, "Q", 81, "VK_Q", empty, empty],
      [0, 27, "KeyR", 48, "R", 82, "VK_R", empty, empty],
      [0, 28, "KeyS", 49, "S", 83, "VK_S", empty, empty],
      [0, 29, "KeyT", 50, "T", 84, "VK_T", empty, empty],
      [0, 30, "KeyU", 51, "U", 85, "VK_U", empty, empty],
      [0, 31, "KeyV", 52, "V", 86, "VK_V", empty, empty],
      [0, 32, "KeyW", 53, "W", 87, "VK_W", empty, empty],
      [0, 33, "KeyX", 54, "X", 88, "VK_X", empty, empty],
      [0, 34, "KeyY", 55, "Y", 89, "VK_Y", empty, empty],
      [0, 35, "KeyZ", 56, "Z", 90, "VK_Z", empty, empty],
      [0, 36, "Digit1", 22, "1", 49, "VK_1", empty, empty],
      [0, 37, "Digit2", 23, "2", 50, "VK_2", empty, empty],
      [0, 38, "Digit3", 24, "3", 51, "VK_3", empty, empty],
      [0, 39, "Digit4", 25, "4", 52, "VK_4", empty, empty],
      [0, 40, "Digit5", 26, "5", 53, "VK_5", empty, empty],
      [0, 41, "Digit6", 27, "6", 54, "VK_6", empty, empty],
      [0, 42, "Digit7", 28, "7", 55, "VK_7", empty, empty],
      [0, 43, "Digit8", 29, "8", 56, "VK_8", empty, empty],
      [0, 44, "Digit9", 30, "9", 57, "VK_9", empty, empty],
      [0, 45, "Digit0", 21, "0", 48, "VK_0", empty, empty],
      [1, 46, "Enter", 3, "Enter", 13, "VK_RETURN", empty, empty],
      [1, 47, "Escape", 9, "Escape", 27, "VK_ESCAPE", empty, empty],
      [1, 48, "Backspace", 1, "Backspace", 8, "VK_BACK", empty, empty],
      [1, 49, "Tab", 2, "Tab", 9, "VK_TAB", empty, empty],
      [1, 50, "Space", 10, "Space", 32, "VK_SPACE", empty, empty],
      [0, 51, "Minus", 88, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
      [0, 52, "Equal", 86, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
      [0, 53, "BracketLeft", 92, "[", 219, "VK_OEM_4", "[", "OEM_4"],
      [0, 54, "BracketRight", 94, "]", 221, "VK_OEM_6", "]", "OEM_6"],
      [0, 55, "Backslash", 93, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
      [0, 56, "IntlHash", 0, empty, 0, empty, empty, empty],
      // has been dropped from the w3c spec
      [0, 57, "Semicolon", 85, ";", 186, "VK_OEM_1", ";", "OEM_1"],
      [0, 58, "Quote", 95, "'", 222, "VK_OEM_7", "'", "OEM_7"],
      [0, 59, "Backquote", 91, "`", 192, "VK_OEM_3", "`", "OEM_3"],
      [0, 60, "Comma", 87, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
      [0, 61, "Period", 89, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
      [0, 62, "Slash", 90, "/", 191, "VK_OEM_2", "/", "OEM_2"],
      [1, 63, "CapsLock", 8, "CapsLock", 20, "VK_CAPITAL", empty, empty],
      [1, 64, "F1", 59, "F1", 112, "VK_F1", empty, empty],
      [1, 65, "F2", 60, "F2", 113, "VK_F2", empty, empty],
      [1, 66, "F3", 61, "F3", 114, "VK_F3", empty, empty],
      [1, 67, "F4", 62, "F4", 115, "VK_F4", empty, empty],
      [1, 68, "F5", 63, "F5", 116, "VK_F5", empty, empty],
      [1, 69, "F6", 64, "F6", 117, "VK_F6", empty, empty],
      [1, 70, "F7", 65, "F7", 118, "VK_F7", empty, empty],
      [1, 71, "F8", 66, "F8", 119, "VK_F8", empty, empty],
      [1, 72, "F9", 67, "F9", 120, "VK_F9", empty, empty],
      [1, 73, "F10", 68, "F10", 121, "VK_F10", empty, empty],
      [1, 74, "F11", 69, "F11", 122, "VK_F11", empty, empty],
      [1, 75, "F12", 70, "F12", 123, "VK_F12", empty, empty],
      [1, 76, "PrintScreen", 0, empty, 0, empty, empty, empty],
      [1, 77, "ScrollLock", 84, "ScrollLock", 145, "VK_SCROLL", empty, empty],
      [1, 78, "Pause", 7, "PauseBreak", 19, "VK_PAUSE", empty, empty],
      [1, 79, "Insert", 19, "Insert", 45, "VK_INSERT", empty, empty],
      [1, 80, "Home", 14, "Home", 36, "VK_HOME", empty, empty],
      [1, 81, "PageUp", 11, "PageUp", 33, "VK_PRIOR", empty, empty],
      [1, 82, "Delete", 20, "Delete", 46, "VK_DELETE", empty, empty],
      [1, 83, "End", 13, "End", 35, "VK_END", empty, empty],
      [1, 84, "PageDown", 12, "PageDown", 34, "VK_NEXT", empty, empty],
      [1, 85, "ArrowRight", 17, "RightArrow", 39, "VK_RIGHT", "Right", empty],
      [1, 86, "ArrowLeft", 15, "LeftArrow", 37, "VK_LEFT", "Left", empty],
      [1, 87, "ArrowDown", 18, "DownArrow", 40, "VK_DOWN", "Down", empty],
      [1, 88, "ArrowUp", 16, "UpArrow", 38, "VK_UP", "Up", empty],
      [1, 89, "NumLock", 83, "NumLock", 144, "VK_NUMLOCK", empty, empty],
      [1, 90, "NumpadDivide", 113, "NumPad_Divide", 111, "VK_DIVIDE", empty, empty],
      [1, 91, "NumpadMultiply", 108, "NumPad_Multiply", 106, "VK_MULTIPLY", empty, empty],
      [1, 92, "NumpadSubtract", 111, "NumPad_Subtract", 109, "VK_SUBTRACT", empty, empty],
      [1, 93, "NumpadAdd", 109, "NumPad_Add", 107, "VK_ADD", empty, empty],
      [1, 94, "NumpadEnter", 3, empty, 0, empty, empty, empty],
      [1, 95, "Numpad1", 99, "NumPad1", 97, "VK_NUMPAD1", empty, empty],
      [1, 96, "Numpad2", 100, "NumPad2", 98, "VK_NUMPAD2", empty, empty],
      [1, 97, "Numpad3", 101, "NumPad3", 99, "VK_NUMPAD3", empty, empty],
      [1, 98, "Numpad4", 102, "NumPad4", 100, "VK_NUMPAD4", empty, empty],
      [1, 99, "Numpad5", 103, "NumPad5", 101, "VK_NUMPAD5", empty, empty],
      [1, 100, "Numpad6", 104, "NumPad6", 102, "VK_NUMPAD6", empty, empty],
      [1, 101, "Numpad7", 105, "NumPad7", 103, "VK_NUMPAD7", empty, empty],
      [1, 102, "Numpad8", 106, "NumPad8", 104, "VK_NUMPAD8", empty, empty],
      [1, 103, "Numpad9", 107, "NumPad9", 105, "VK_NUMPAD9", empty, empty],
      [1, 104, "Numpad0", 98, "NumPad0", 96, "VK_NUMPAD0", empty, empty],
      [1, 105, "NumpadDecimal", 112, "NumPad_Decimal", 110, "VK_DECIMAL", empty, empty],
      [0, 106, "IntlBackslash", 97, "OEM_102", 226, "VK_OEM_102", empty, empty],
      [1, 107, "ContextMenu", 58, "ContextMenu", 93, empty, empty, empty],
      [1, 108, "Power", 0, empty, 0, empty, empty, empty],
      [1, 109, "NumpadEqual", 0, empty, 0, empty, empty, empty],
      [1, 110, "F13", 71, "F13", 124, "VK_F13", empty, empty],
      [1, 111, "F14", 72, "F14", 125, "VK_F14", empty, empty],
      [1, 112, "F15", 73, "F15", 126, "VK_F15", empty, empty],
      [1, 113, "F16", 74, "F16", 127, "VK_F16", empty, empty],
      [1, 114, "F17", 75, "F17", 128, "VK_F17", empty, empty],
      [1, 115, "F18", 76, "F18", 129, "VK_F18", empty, empty],
      [1, 116, "F19", 77, "F19", 130, "VK_F19", empty, empty],
      [1, 117, "F20", 78, "F20", 131, "VK_F20", empty, empty],
      [1, 118, "F21", 79, "F21", 132, "VK_F21", empty, empty],
      [1, 119, "F22", 80, "F22", 133, "VK_F22", empty, empty],
      [1, 120, "F23", 81, "F23", 134, "VK_F23", empty, empty],
      [1, 121, "F24", 82, "F24", 135, "VK_F24", empty, empty],
      [1, 122, "Open", 0, empty, 0, empty, empty, empty],
      [1, 123, "Help", 0, empty, 0, empty, empty, empty],
      [1, 124, "Select", 0, empty, 0, empty, empty, empty],
      [1, 125, "Again", 0, empty, 0, empty, empty, empty],
      [1, 126, "Undo", 0, empty, 0, empty, empty, empty],
      [1, 127, "Cut", 0, empty, 0, empty, empty, empty],
      [1, 128, "Copy", 0, empty, 0, empty, empty, empty],
      [1, 129, "Paste", 0, empty, 0, empty, empty, empty],
      [1, 130, "Find", 0, empty, 0, empty, empty, empty],
      [1, 131, "AudioVolumeMute", 117, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", empty, empty],
      [1, 132, "AudioVolumeUp", 118, "AudioVolumeUp", 175, "VK_VOLUME_UP", empty, empty],
      [1, 133, "AudioVolumeDown", 119, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", empty, empty],
      [1, 134, "NumpadComma", 110, "NumPad_Separator", 108, "VK_SEPARATOR", empty, empty],
      [0, 135, "IntlRo", 115, "ABNT_C1", 193, "VK_ABNT_C1", empty, empty],
      [1, 136, "KanaMode", 0, empty, 0, empty, empty, empty],
      [0, 137, "IntlYen", 0, empty, 0, empty, empty, empty],
      [1, 138, "Convert", 0, empty, 0, empty, empty, empty],
      [1, 139, "NonConvert", 0, empty, 0, empty, empty, empty],
      [1, 140, "Lang1", 0, empty, 0, empty, empty, empty],
      [1, 141, "Lang2", 0, empty, 0, empty, empty, empty],
      [1, 142, "Lang3", 0, empty, 0, empty, empty, empty],
      [1, 143, "Lang4", 0, empty, 0, empty, empty, empty],
      [1, 144, "Lang5", 0, empty, 0, empty, empty, empty],
      [1, 145, "Abort", 0, empty, 0, empty, empty, empty],
      [1, 146, "Props", 0, empty, 0, empty, empty, empty],
      [1, 147, "NumpadParenLeft", 0, empty, 0, empty, empty, empty],
      [1, 148, "NumpadParenRight", 0, empty, 0, empty, empty, empty],
      [1, 149, "NumpadBackspace", 0, empty, 0, empty, empty, empty],
      [1, 150, "NumpadMemoryStore", 0, empty, 0, empty, empty, empty],
      [1, 151, "NumpadMemoryRecall", 0, empty, 0, empty, empty, empty],
      [1, 152, "NumpadMemoryClear", 0, empty, 0, empty, empty, empty],
      [1, 153, "NumpadMemoryAdd", 0, empty, 0, empty, empty, empty],
      [1, 154, "NumpadMemorySubtract", 0, empty, 0, empty, empty, empty],
      [1, 155, "NumpadClear", 131, "Clear", 12, "VK_CLEAR", empty, empty],
      [1, 156, "NumpadClearEntry", 0, empty, 0, empty, empty, empty],
      [1, 0, empty, 5, "Ctrl", 17, "VK_CONTROL", empty, empty],
      [1, 0, empty, 4, "Shift", 16, "VK_SHIFT", empty, empty],
      [1, 0, empty, 6, "Alt", 18, "VK_MENU", empty, empty],
      [1, 0, empty, 57, "Meta", 91, "VK_COMMAND", empty, empty],
      [1, 157, "ControlLeft", 5, empty, 0, "VK_LCONTROL", empty, empty],
      [1, 158, "ShiftLeft", 4, empty, 0, "VK_LSHIFT", empty, empty],
      [1, 159, "AltLeft", 6, empty, 0, "VK_LMENU", empty, empty],
      [1, 160, "MetaLeft", 57, empty, 0, "VK_LWIN", empty, empty],
      [1, 161, "ControlRight", 5, empty, 0, "VK_RCONTROL", empty, empty],
      [1, 162, "ShiftRight", 4, empty, 0, "VK_RSHIFT", empty, empty],
      [1, 163, "AltRight", 6, empty, 0, "VK_RMENU", empty, empty],
      [1, 164, "MetaRight", 57, empty, 0, "VK_RWIN", empty, empty],
      [1, 165, "BrightnessUp", 0, empty, 0, empty, empty, empty],
      [1, 166, "BrightnessDown", 0, empty, 0, empty, empty, empty],
      [1, 167, "MediaPlay", 0, empty, 0, empty, empty, empty],
      [1, 168, "MediaRecord", 0, empty, 0, empty, empty, empty],
      [1, 169, "MediaFastForward", 0, empty, 0, empty, empty, empty],
      [1, 170, "MediaRewind", 0, empty, 0, empty, empty, empty],
      [1, 171, "MediaTrackNext", 124, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", empty, empty],
      [1, 172, "MediaTrackPrevious", 125, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", empty, empty],
      [1, 173, "MediaStop", 126, "MediaStop", 178, "VK_MEDIA_STOP", empty, empty],
      [1, 174, "Eject", 0, empty, 0, empty, empty, empty],
      [1, 175, "MediaPlayPause", 127, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", empty, empty],
      [1, 176, "MediaSelect", 128, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", empty, empty],
      [1, 177, "LaunchMail", 129, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", empty, empty],
      [1, 178, "LaunchApp2", 130, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", empty, empty],
      [1, 179, "LaunchApp1", 0, empty, 0, "VK_MEDIA_LAUNCH_APP1", empty, empty],
      [1, 180, "SelectTask", 0, empty, 0, empty, empty, empty],
      [1, 181, "LaunchScreenSaver", 0, empty, 0, empty, empty, empty],
      [1, 182, "BrowserSearch", 120, "BrowserSearch", 170, "VK_BROWSER_SEARCH", empty, empty],
      [1, 183, "BrowserHome", 121, "BrowserHome", 172, "VK_BROWSER_HOME", empty, empty],
      [1, 184, "BrowserBack", 122, "BrowserBack", 166, "VK_BROWSER_BACK", empty, empty],
      [1, 185, "BrowserForward", 123, "BrowserForward", 167, "VK_BROWSER_FORWARD", empty, empty],
      [1, 186, "BrowserStop", 0, empty, 0, "VK_BROWSER_STOP", empty, empty],
      [1, 187, "BrowserRefresh", 0, empty, 0, "VK_BROWSER_REFRESH", empty, empty],
      [1, 188, "BrowserFavorites", 0, empty, 0, "VK_BROWSER_FAVORITES", empty, empty],
      [1, 189, "ZoomToggle", 0, empty, 0, empty, empty, empty],
      [1, 190, "MailReply", 0, empty, 0, empty, empty, empty],
      [1, 191, "MailForward", 0, empty, 0, empty, empty, empty],
      [1, 192, "MailSend", 0, empty, 0, empty, empty, empty],
      // See https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
      // If an Input Method Editor is processing key input and the event is keydown, return 229.
      [1, 0, empty, 114, "KeyInComposition", 229, empty, empty, empty],
      [1, 0, empty, 116, "ABNT_C2", 194, "VK_ABNT_C2", empty, empty],
      [1, 0, empty, 96, "OEM_8", 223, "VK_OEM_8", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_KANA", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_HANGUL", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_JUNJA", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_FINAL", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_HANJA", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_KANJI", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_CONVERT", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_NONCONVERT", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_ACCEPT", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_MODECHANGE", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_SELECT", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_PRINT", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_EXECUTE", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_SNAPSHOT", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_HELP", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_APPS", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_PROCESSKEY", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_PACKET", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_DBE_SBCSCHAR", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_DBE_DBCSCHAR", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_ATTN", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_CRSEL", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_EXSEL", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_EREOF", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_PLAY", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_ZOOM", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_NONAME", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_PA1", empty, empty],
      [1, 0, empty, 0, empty, 0, "VK_OEM_CLEAR", empty, empty]
    ];
    const seenKeyCode = [];
    const seenScanCode = [];
    for (const mapping of mappings) {
      const [immutable, scanCode, scanCodeStr, keyCode, keyCodeStr, eventKeyCode, vkey, usUserSettingsLabel, generalUserSettingsLabel] = mapping;
      if (!seenScanCode[scanCode]) {
        seenScanCode[scanCode] = true;
        scanCodeStrToInt[scanCodeStr] = scanCode;
        scanCodeLowerCaseStrToInt[scanCodeStr.toLowerCase()] = scanCode;
      }
      if (!seenKeyCode[keyCode]) {
        seenKeyCode[keyCode] = true;
        if (!keyCodeStr) {
          throw new Error(`String representation missing for key code ${keyCode} around scan code ${scanCodeStr}`);
        }
        uiMap.define(keyCode, keyCodeStr);
        userSettingsUSMap.define(keyCode, usUserSettingsLabel || keyCodeStr);
        userSettingsGeneralMap.define(keyCode, generalUserSettingsLabel || usUserSettingsLabel || keyCodeStr);
      }
      if (eventKeyCode) {
        EVENT_KEY_CODE_MAP[eventKeyCode] = keyCode;
      }
    }
  })();
  var KeyCodeUtils;
  (function(KeyCodeUtils2) {
    function toString(keyCode) {
      return uiMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils2.toString = toString;
    function fromString(key) {
      return uiMap.strToKeyCode(key);
    }
    KeyCodeUtils2.fromString = fromString;
    function toUserSettingsUS(keyCode) {
      return userSettingsUSMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils2.toUserSettingsUS = toUserSettingsUS;
    function toUserSettingsGeneral(keyCode) {
      return userSettingsGeneralMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils2.toUserSettingsGeneral = toUserSettingsGeneral;
    function fromUserSettings(key) {
      return userSettingsUSMap.strToKeyCode(key) || userSettingsGeneralMap.strToKeyCode(key);
    }
    KeyCodeUtils2.fromUserSettings = fromUserSettings;
    function toElectronAccelerator(keyCode) {
      if (keyCode >= 98 && keyCode <= 113) {
        return null;
      }
      switch (keyCode) {
        case 16:
          return "Up";
        case 18:
          return "Down";
        case 15:
          return "Left";
        case 17:
          return "Right";
      }
      return uiMap.keyCodeToStr(keyCode);
    }
    KeyCodeUtils2.toElectronAccelerator = toElectronAccelerator;
  })(KeyCodeUtils || (KeyCodeUtils = {}));
  function KeyChord(firstPart, secondPart) {
    const chordPart = (secondPart & 65535) << 16 >>> 0;
    return (firstPart | chordPart) >>> 0;
  }
  let safeProcess;
  const vscodeGlobal = globalThis.vscode;
  if (typeof vscodeGlobal !== "undefined" && typeof vscodeGlobal.process !== "undefined") {
    const sandboxProcess = vscodeGlobal.process;
    safeProcess = {
      get platform() {
        return sandboxProcess.platform;
      },
      get arch() {
        return sandboxProcess.arch;
      },
      get env() {
        return sandboxProcess.env;
      },
      cwd() {
        return sandboxProcess.cwd();
      }
    };
  } else if (typeof process !== "undefined" && typeof process?.versions?.node === "string") {
    safeProcess = {
      get platform() {
        return process.platform;
      },
      get arch() {
        return process.arch;
      },
      get env() {
        return process.env;
      },
      cwd() {
        return process.env["VSCODE_CWD"] || process.cwd();
      }
    };
  } else {
    safeProcess = {
      // Supported
      get platform() {
        return isWindows ? "win32" : isMacintosh ? "darwin" : "linux";
      },
      get arch() {
        return void 0;
      },
      // Unsupported
      get env() {
        return {};
      },
      cwd() {
        return "/";
      }
    };
  }
  const cwd = safeProcess.cwd;
  const env = safeProcess.env;
  const platform = safeProcess.platform;
  const CHAR_UPPERCASE_A = 65;
  const CHAR_LOWERCASE_A = 97;
  const CHAR_UPPERCASE_Z = 90;
  const CHAR_LOWERCASE_Z = 122;
  const CHAR_DOT = 46;
  const CHAR_FORWARD_SLASH = 47;
  const CHAR_BACKWARD_SLASH = 92;
  const CHAR_COLON = 58;
  const CHAR_QUESTION_MARK = 63;
  class ErrorInvalidArgType extends Error {
    constructor(name, expected, actual) {
      let determiner;
      if (typeof expected === "string" && expected.indexOf("not ") === 0) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      const type = name.indexOf(".") !== -1 ? "property" : "argument";
      let msg = `The "${name}" ${type} ${determiner} of type ${expected}`;
      msg += `. Received type ${typeof actual}`;
      super(msg);
      this.code = "ERR_INVALID_ARG_TYPE";
    }
  }
  function validateObject(pathObject, name) {
    if (pathObject === null || typeof pathObject !== "object") {
      throw new ErrorInvalidArgType(name, "Object", pathObject);
    }
  }
  function validateString(value, name) {
    if (typeof value !== "string") {
      throw new ErrorInvalidArgType(name, "string", value);
    }
  }
  const platformIsWin32 = platform === "win32";
  function isPathSeparator(code) {
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
  }
  function isPosixPathSeparator(code) {
    return code === CHAR_FORWARD_SLASH;
  }
  function isWindowsDeviceRoot(code) {
    return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z || code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
  }
  function normalizeString(path, allowAboveRoot, separator, isPathSeparator2) {
    let res = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code = 0;
    for (let i = 0; i <= path.length; ++i) {
      if (i < path.length) {
        code = path.charCodeAt(i);
      } else if (isPathSeparator2(code)) {
        break;
      } else {
        code = CHAR_FORWARD_SLASH;
      }
      if (isPathSeparator2(code)) {
        if (lastSlash === i - 1 || dots === 1) ;
        else if (dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
            if (res.length > 2) {
              const lastSlashIndex = res.lastIndexOf(separator);
              if (lastSlashIndex === -1) {
                res = "";
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
              }
              lastSlash = i;
              dots = 0;
              continue;
            } else if (res.length !== 0) {
              res = "";
              lastSegmentLength = 0;
              lastSlash = i;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            res += res.length > 0 ? `${separator}..` : "..";
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0) {
            res += `${separator}${path.slice(lastSlash + 1, i)}`;
          } else {
            res = path.slice(lastSlash + 1, i);
          }
          lastSegmentLength = i - lastSlash - 1;
        }
        lastSlash = i;
        dots = 0;
      } else if (code === CHAR_DOT && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return res;
  }
  function formatExt(ext) {
    return ext ? `${ext[0] === "." ? "" : "."}${ext}` : "";
  }
  function _format(sep, pathObject) {
    validateObject(pathObject, "pathObject");
    const dir = pathObject.dir || pathObject.root;
    const base = pathObject.base || `${pathObject.name || ""}${formatExt(pathObject.ext)}`;
    if (!dir) {
      return base;
    }
    return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep}${base}`;
  }
  const win32 = {
    // path.resolve([from ...], to)
    resolve(...pathSegments) {
      let resolvedDevice = "";
      let resolvedTail = "";
      let resolvedAbsolute = false;
      for (let i = pathSegments.length - 1; i >= -1; i--) {
        let path;
        if (i >= 0) {
          path = pathSegments[i];
          validateString(path, `paths[${i}]`);
          if (path.length === 0) {
            continue;
          }
        } else if (resolvedDevice.length === 0) {
          path = cwd();
        } else {
          path = env[`=${resolvedDevice}`] || cwd();
          if (path === void 0 || path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
            path = `${resolvedDevice}\\`;
          }
        }
        const len = path.length;
        let rootEnd = 0;
        let device = "";
        let isAbsolute = false;
        const code = path.charCodeAt(0);
        if (len === 1) {
          if (isPathSeparator(code)) {
            rootEnd = 1;
            isAbsolute = true;
          }
        } else if (isPathSeparator(code)) {
          isAbsolute = true;
          if (isPathSeparator(path.charCodeAt(1))) {
            let j = 2;
            let last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              const firstPart = path.slice(last, j);
              last = j;
              while (j < len && isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j < len && j !== last) {
                last = j;
                while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                  j++;
                }
                if (j === len || j !== last) {
                  device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                  rootEnd = j;
                }
              }
            }
          } else {
            rootEnd = 1;
          }
        } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
          device = path.slice(0, 2);
          rootEnd = 2;
          if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
            isAbsolute = true;
            rootEnd = 3;
          }
        }
        if (device.length > 0) {
          if (resolvedDevice.length > 0) {
            if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
              continue;
            }
          } else {
            resolvedDevice = device;
          }
        }
        if (resolvedAbsolute) {
          if (resolvedDevice.length > 0) {
            break;
          }
        } else {
          resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
          resolvedAbsolute = isAbsolute;
          if (isAbsolute && resolvedDevice.length > 0) {
            break;
          }
        }
      }
      resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
      return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || ".";
    },
    normalize(path) {
      validateString(path, "path");
      const len = path.length;
      if (len === 0) {
        return ".";
      }
      let rootEnd = 0;
      let device;
      let isAbsolute = false;
      const code = path.charCodeAt(0);
      if (len === 1) {
        return isPosixPathSeparator(code) ? "\\" : path;
      }
      if (isPathSeparator(code)) {
        isAbsolute = true;
        if (isPathSeparator(path.charCodeAt(1))) {
          let j = 2;
          let last = j;
          while (j < len && !isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            const firstPart = path.slice(last, j);
            last = j;
            while (j < len && isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j === len) {
                return `\\\\${firstPart}\\${path.slice(last)}\\`;
              }
              if (j !== last) {
                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
        device = path.slice(0, 2);
        rootEnd = 2;
        if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
          isAbsolute = true;
          rootEnd = 3;
        }
      }
      let tail = rootEnd < len ? normalizeString(path.slice(rootEnd), !isAbsolute, "\\", isPathSeparator) : "";
      if (tail.length === 0 && !isAbsolute) {
        tail = ".";
      }
      if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
        tail += "\\";
      }
      if (!isAbsolute && device === void 0 && path.includes(":")) {
        if (tail.length >= 2 && isWindowsDeviceRoot(tail.charCodeAt(0)) && tail.charCodeAt(1) === CHAR_COLON) {
          return `.\\${tail}`;
        }
        let index = path.indexOf(":");
        do {
          if (index === len - 1 || isPathSeparator(path.charCodeAt(index + 1))) {
            return `.\\${tail}`;
          }
        } while ((index = path.indexOf(":", index + 1)) !== -1);
      }
      if (device === void 0) {
        return isAbsolute ? `\\${tail}` : tail;
      }
      return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
    },
    isAbsolute(path) {
      validateString(path, "path");
      const len = path.length;
      if (len === 0) {
        return false;
      }
      const code = path.charCodeAt(0);
      return isPathSeparator(code) || // Possible device root
      len > 2 && isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON && isPathSeparator(path.charCodeAt(2));
    },
    join(...paths) {
      if (paths.length === 0) {
        return ".";
      }
      let joined;
      let firstPart;
      for (let i = 0; i < paths.length; ++i) {
        const arg = paths[i];
        validateString(arg, "path");
        if (arg.length > 0) {
          if (joined === void 0) {
            joined = firstPart = arg;
          } else {
            joined += `\\${arg}`;
          }
        }
      }
      if (joined === void 0) {
        return ".";
      }
      let needsReplace = true;
      let slashCount = 0;
      if (typeof firstPart === "string" && isPathSeparator(firstPart.charCodeAt(0))) {
        ++slashCount;
        const firstLen = firstPart.length;
        if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
          ++slashCount;
          if (firstLen > 2) {
            if (isPathSeparator(firstPart.charCodeAt(2))) {
              ++slashCount;
            } else {
              needsReplace = false;
            }
          }
        }
      }
      if (needsReplace) {
        while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) {
          slashCount++;
        }
        if (slashCount >= 2) {
          joined = `\\${joined.slice(slashCount)}`;
        }
      }
      return win32.normalize(joined);
    },
    // It will solve the relative path from `from` to `to`, for instance:
    //  from = 'C:\\orandea\\test\\aaa'
    //  to = 'C:\\orandea\\impl\\bbb'
    // The output of the function should be: '..\\..\\impl\\bbb'
    relative(from, to) {
      validateString(from, "from");
      validateString(to, "to");
      if (from === to) {
        return "";
      }
      const fromOrig = win32.resolve(from);
      const toOrig = win32.resolve(to);
      if (fromOrig === toOrig) {
        return "";
      }
      from = fromOrig.toLowerCase();
      to = toOrig.toLowerCase();
      if (from === to) {
        return "";
      }
      if (fromOrig.length !== from.length || toOrig.length !== to.length) {
        const fromSplit = fromOrig.split("\\");
        const toSplit = toOrig.split("\\");
        if (fromSplit[fromSplit.length - 1] === "") {
          fromSplit.pop();
        }
        if (toSplit[toSplit.length - 1] === "") {
          toSplit.pop();
        }
        const fromLen2 = fromSplit.length;
        const toLen2 = toSplit.length;
        const length2 = fromLen2 < toLen2 ? fromLen2 : toLen2;
        let i2;
        for (i2 = 0; i2 < length2; i2++) {
          if (fromSplit[i2].toLowerCase() !== toSplit[i2].toLowerCase()) {
            break;
          }
        }
        if (i2 === 0) {
          return toOrig;
        } else if (i2 === length2) {
          if (toLen2 > length2) {
            return toSplit.slice(i2).join("\\");
          }
          if (fromLen2 > length2) {
            return "..\\".repeat(fromLen2 - 1 - i2) + "..";
          }
          return "";
        }
        return "..\\".repeat(fromLen2 - i2) + toSplit.slice(i2).join("\\");
      }
      let fromStart = 0;
      while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
        fromStart++;
      }
      let fromEnd = from.length;
      while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
        fromEnd--;
      }
      const fromLen = fromEnd - fromStart;
      let toStart = 0;
      while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
        toStart++;
      }
      let toEnd = to.length;
      while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
        toEnd--;
      }
      const toLen = toEnd - toStart;
      const length = fromLen < toLen ? fromLen : toLen;
      let lastCommonSep = -1;
      let i = 0;
      for (; i < length; i++) {
        const fromCode = from.charCodeAt(fromStart + i);
        if (fromCode !== to.charCodeAt(toStart + i)) {
          break;
        } else if (fromCode === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        }
      }
      if (i !== length) {
        if (lastCommonSep === -1) {
          return toOrig;
        }
      } else {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
            return toOrig.slice(toStart + i + 1);
          }
          if (i === 2) {
            return toOrig.slice(toStart + i);
          }
        }
        if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
            lastCommonSep = i;
          } else if (i === 2) {
            lastCommonSep = 3;
          }
        }
        if (lastCommonSep === -1) {
          lastCommonSep = 0;
        }
      }
      let out = "";
      for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
        if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
          out += out.length === 0 ? ".." : "\\..";
        }
      }
      toStart += lastCommonSep;
      if (out.length > 0) {
        return `${out}${toOrig.slice(toStart, toEnd)}`;
      }
      if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
        ++toStart;
      }
      return toOrig.slice(toStart, toEnd);
    },
    toNamespacedPath(path) {
      if (typeof path !== "string" || path.length === 0) {
        return path;
      }
      const resolvedPath = win32.resolve(path);
      if (resolvedPath.length <= 2) {
        return path;
      }
      if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
        if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
          const code = resolvedPath.charCodeAt(2);
          if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
            return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
          }
        }
      } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
        return `\\\\?\\${resolvedPath}`;
      }
      return resolvedPath;
    },
    dirname(path) {
      validateString(path, "path");
      const len = path.length;
      if (len === 0) {
        return ".";
      }
      let rootEnd = -1;
      let offset = 0;
      const code = path.charCodeAt(0);
      if (len === 1) {
        return isPathSeparator(code) ? path : ".";
      }
      if (isPathSeparator(code)) {
        rootEnd = offset = 1;
        if (isPathSeparator(path.charCodeAt(1))) {
          let j = 2;
          let last = j;
          while (j < len && !isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j === len) {
                return path;
              }
              if (j !== last) {
                rootEnd = offset = j + 1;
              }
            }
          }
        }
      } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
        rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
        offset = rootEnd;
      }
      let end = -1;
      let matchedSlash = true;
      for (let i = len - 1; i >= offset; --i) {
        if (isPathSeparator(path.charCodeAt(i))) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1) {
        if (rootEnd === -1) {
          return ".";
        }
        end = rootEnd;
      }
      return path.slice(0, end);
    },
    basename(path, suffix) {
      if (suffix !== void 0) {
        validateString(suffix, "suffix");
      }
      validateString(path, "path");
      let start2 = 0;
      let end = -1;
      let matchedSlash = true;
      let i;
      if (path.length >= 2 && isWindowsDeviceRoot(path.charCodeAt(0)) && path.charCodeAt(1) === CHAR_COLON) {
        start2 = 2;
      }
      if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path.length) {
        if (suffix === path) {
          return "";
        }
        let extIdx = suffix.length - 1;
        let firstNonSlashEnd = -1;
        for (i = path.length - 1; i >= start2; --i) {
          const code = path.charCodeAt(i);
          if (isPathSeparator(code)) {
            if (!matchedSlash) {
              start2 = i + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i + 1;
            }
            if (extIdx >= 0) {
              if (code === suffix.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start2 === end) {
          end = firstNonSlashEnd;
        } else if (end === -1) {
          end = path.length;
        }
        return path.slice(start2, end);
      }
      for (i = path.length - 1; i >= start2; --i) {
        if (isPathSeparator(path.charCodeAt(i))) {
          if (!matchedSlash) {
            start2 = i + 1;
            break;
          }
        } else if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
      }
      if (end === -1) {
        return "";
      }
      return path.slice(start2, end);
    },
    extname(path) {
      validateString(path, "path");
      let start2 = 0;
      let startDot = -1;
      let startPart = 0;
      let end = -1;
      let matchedSlash = true;
      let preDotState = 0;
      if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
        start2 = startPart = 2;
      }
      for (let i = path.length - 1; i >= start2; --i) {
        const code = path.charCodeAt(i);
        if (isPathSeparator(code)) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === CHAR_DOT) {
          if (startDot === -1) {
            startDot = i;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path.slice(startDot, end);
    },
    format: _format.bind(null, "\\"),
    parse(path) {
      validateString(path, "path");
      const ret = { root: "", dir: "", base: "", ext: "", name: "" };
      if (path.length === 0) {
        return ret;
      }
      const len = path.length;
      let rootEnd = 0;
      let code = path.charCodeAt(0);
      if (len === 1) {
        if (isPathSeparator(code)) {
          ret.root = ret.dir = path;
          return ret;
        }
        ret.base = ret.name = path;
        return ret;
      }
      if (isPathSeparator(code)) {
        rootEnd = 1;
        if (isPathSeparator(path.charCodeAt(1))) {
          let j = 2;
          let last = j;
          while (j < len && !isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j === len) {
                rootEnd = j;
              } else if (j !== last) {
                rootEnd = j + 1;
              }
            }
          }
        }
      } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
        if (len <= 2) {
          ret.root = ret.dir = path;
          return ret;
        }
        rootEnd = 2;
        if (isPathSeparator(path.charCodeAt(2))) {
          if (len === 3) {
            ret.root = ret.dir = path;
            return ret;
          }
          rootEnd = 3;
        }
      }
      if (rootEnd > 0) {
        ret.root = path.slice(0, rootEnd);
      }
      let startDot = -1;
      let startPart = rootEnd;
      let end = -1;
      let matchedSlash = true;
      let i = path.length - 1;
      let preDotState = 0;
      for (; i >= rootEnd; --i) {
        code = path.charCodeAt(i);
        if (isPathSeparator(code)) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === CHAR_DOT) {
          if (startDot === -1) {
            startDot = i;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (end !== -1) {
        if (startDot === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          ret.base = ret.name = path.slice(startPart, end);
        } else {
          ret.name = path.slice(startPart, startDot);
          ret.base = path.slice(startPart, end);
          ret.ext = path.slice(startDot, end);
        }
      }
      if (startPart > 0 && startPart !== rootEnd) {
        ret.dir = path.slice(0, startPart - 1);
      } else {
        ret.dir = ret.root;
      }
      return ret;
    },
    sep: "\\",
    delimiter: ";",
    win32: null,
    posix: null
  };
  const posixCwd = (() => {
    if (platformIsWin32) {
      const regexp = /\\/g;
      return () => {
        const cwd$1 = cwd().replace(regexp, "/");
        return cwd$1.slice(cwd$1.indexOf("/"));
      };
    }
    return () => cwd();
  })();
  const posix = {
    // path.resolve([from ...], to)
    resolve(...pathSegments) {
      let resolvedPath = "";
      let resolvedAbsolute = false;
      for (let i = pathSegments.length - 1; i >= 0 && !resolvedAbsolute; i--) {
        const path = pathSegments[i];
        validateString(path, `paths[${i}]`);
        if (path.length === 0) {
          continue;
        }
        resolvedPath = `${path}/${resolvedPath}`;
        resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
      }
      if (!resolvedAbsolute) {
        const cwd2 = posixCwd();
        resolvedPath = `${cwd2}/${resolvedPath}`;
        resolvedAbsolute = cwd2.charCodeAt(0) === CHAR_FORWARD_SLASH;
      }
      resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
      if (resolvedAbsolute) {
        return `/${resolvedPath}`;
      }
      return resolvedPath.length > 0 ? resolvedPath : ".";
    },
    normalize(path) {
      validateString(path, "path");
      if (path.length === 0) {
        return ".";
      }
      const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
      const trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH;
      path = normalizeString(path, !isAbsolute, "/", isPosixPathSeparator);
      if (path.length === 0) {
        if (isAbsolute) {
          return "/";
        }
        return trailingSeparator ? "./" : ".";
      }
      if (trailingSeparator) {
        path += "/";
      }
      return isAbsolute ? `/${path}` : path;
    },
    isAbsolute(path) {
      validateString(path, "path");
      return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    },
    join(...paths) {
      if (paths.length === 0) {
        return ".";
      }
      const path = [];
      for (let i = 0; i < paths.length; ++i) {
        const arg = paths[i];
        validateString(arg, "path");
        if (arg.length > 0) {
          path.push(arg);
        }
      }
      if (path.length === 0) {
        return ".";
      }
      return posix.normalize(path.join("/"));
    },
    relative(from, to) {
      validateString(from, "from");
      validateString(to, "to");
      if (from === to) {
        return "";
      }
      from = posix.resolve(from);
      to = posix.resolve(to);
      if (from === to) {
        return "";
      }
      const fromStart = 1;
      const fromEnd = from.length;
      const fromLen = fromEnd - fromStart;
      const toStart = 1;
      const toLen = to.length - toStart;
      const length = fromLen < toLen ? fromLen : toLen;
      let lastCommonSep = -1;
      let i = 0;
      for (; i < length; i++) {
        const fromCode = from.charCodeAt(fromStart + i);
        if (fromCode !== to.charCodeAt(toStart + i)) {
          break;
        } else if (fromCode === CHAR_FORWARD_SLASH) {
          lastCommonSep = i;
        }
      }
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
            return to.slice(toStart + i + 1);
          }
          if (i === 0) {
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
            lastCommonSep = i;
          } else if (i === 0) {
            lastCommonSep = 0;
          }
        }
      }
      let out = "";
      for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
        if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
          out += out.length === 0 ? ".." : "/..";
        }
      }
      return `${out}${to.slice(toStart + lastCommonSep)}`;
    },
    toNamespacedPath(path) {
      return path;
    },
    dirname(path) {
      validateString(path, "path");
      if (path.length === 0) {
        return ".";
      }
      const hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
      let end = -1;
      let matchedSlash = true;
      for (let i = path.length - 1; i >= 1; --i) {
        if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1) {
        return hasRoot ? "/" : ".";
      }
      if (hasRoot && end === 1) {
        return "//";
      }
      return path.slice(0, end);
    },
    basename(path, suffix) {
      if (suffix !== void 0) {
        validateString(suffix, "suffix");
      }
      validateString(path, "path");
      let start2 = 0;
      let end = -1;
      let matchedSlash = true;
      let i;
      if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path.length) {
        if (suffix === path) {
          return "";
        }
        let extIdx = suffix.length - 1;
        let firstNonSlashEnd = -1;
        for (i = path.length - 1; i >= 0; --i) {
          const code = path.charCodeAt(i);
          if (code === CHAR_FORWARD_SLASH) {
            if (!matchedSlash) {
              start2 = i + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i + 1;
            }
            if (extIdx >= 0) {
              if (code === suffix.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start2 === end) {
          end = firstNonSlashEnd;
        } else if (end === -1) {
          end = path.length;
        }
        return path.slice(start2, end);
      }
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
          if (!matchedSlash) {
            start2 = i + 1;
            break;
          }
        } else if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
      }
      if (end === -1) {
        return "";
      }
      return path.slice(start2, end);
    },
    extname(path) {
      validateString(path, "path");
      let startDot = -1;
      let startPart = 0;
      let end = -1;
      let matchedSlash = true;
      let preDotState = 0;
      for (let i = path.length - 1; i >= 0; --i) {
        const char = path[i];
        if (char === "/") {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (char === ".") {
          if (startDot === -1) {
            startDot = i;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path.slice(startDot, end);
    },
    format: _format.bind(null, "/"),
    parse(path) {
      validateString(path, "path");
      const ret = { root: "", dir: "", base: "", ext: "", name: "" };
      if (path.length === 0) {
        return ret;
      }
      const isAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
      let start2;
      if (isAbsolute) {
        ret.root = "/";
        start2 = 1;
      } else {
        start2 = 0;
      }
      let startDot = -1;
      let startPart = 0;
      let end = -1;
      let matchedSlash = true;
      let i = path.length - 1;
      let preDotState = 0;
      for (; i >= start2; --i) {
        const code = path.charCodeAt(i);
        if (code === CHAR_FORWARD_SLASH) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === CHAR_DOT) {
          if (startDot === -1) {
            startDot = i;
          } else if (preDotState !== 1) {
            preDotState = 1;
          }
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (end !== -1) {
        const start3 = startPart === 0 && isAbsolute ? 1 : startPart;
        if (startDot === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          ret.base = ret.name = path.slice(start3, end);
        } else {
          ret.name = path.slice(start3, startDot);
          ret.base = path.slice(start3, end);
          ret.ext = path.slice(startDot, end);
        }
      }
      if (startPart > 0) {
        ret.dir = path.slice(0, startPart - 1);
      } else if (isAbsolute) {
        ret.dir = "/";
      }
      return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  posix.win32 = win32.win32 = win32;
  posix.posix = win32.posix = posix;
  platformIsWin32 ? win32.normalize : posix.normalize;
  platformIsWin32 ? win32.resolve : posix.resolve;
  platformIsWin32 ? win32.relative : posix.relative;
  platformIsWin32 ? win32.dirname : posix.dirname;
  platformIsWin32 ? win32.basename : posix.basename;
  platformIsWin32 ? win32.extname : posix.extname;
  platformIsWin32 ? win32.sep : posix.sep;
  const _schemePattern = /^\w[\w\d+.-]*$/;
  const _singleSlashStart = /^\//;
  const _doubleSlashStart = /^\/\//;
  function _validateUri(ret, _strict) {
    if (!ret.scheme && _strict) {
      throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${ret.authority}", path: "${ret.path}", query: "${ret.query}", fragment: "${ret.fragment}"}`);
    }
    if (ret.scheme && !_schemePattern.test(ret.scheme)) {
      throw new Error("[UriError]: Scheme contains illegal characters.");
    }
    if (ret.path) {
      if (ret.authority) {
        if (!_singleSlashStart.test(ret.path)) {
          throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        }
      } else {
        if (_doubleSlashStart.test(ret.path)) {
          throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
        }
      }
    }
  }
  function _schemeFix(scheme, _strict) {
    if (!scheme && !_strict) {
      return "file";
    }
    return scheme;
  }
  function _referenceResolution(scheme, path) {
    switch (scheme) {
      case "https":
      case "http":
      case "file":
        if (!path) {
          path = _slash;
        } else if (path[0] !== _slash) {
          path = _slash + path;
        }
        break;
    }
    return path;
  }
  const _empty = "";
  const _slash = "/";
  const _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  let URI$2 = class URI2 {
    static isUri(thing) {
      if (thing instanceof URI2) {
        return true;
      }
      if (!thing || typeof thing !== "object") {
        return false;
      }
      return typeof thing.authority === "string" && typeof thing.fragment === "string" && typeof thing.path === "string" && typeof thing.query === "string" && typeof thing.scheme === "string" && typeof thing.fsPath === "string" && typeof thing.with === "function" && typeof thing.toString === "function";
    }
    /**
     * @internal
     */
    constructor(schemeOrData, authority, path, query, fragment, _strict = false) {
      if (typeof schemeOrData === "object") {
        this.scheme = schemeOrData.scheme || _empty;
        this.authority = schemeOrData.authority || _empty;
        this.path = schemeOrData.path || _empty;
        this.query = schemeOrData.query || _empty;
        this.fragment = schemeOrData.fragment || _empty;
      } else {
        this.scheme = _schemeFix(schemeOrData, _strict);
        this.authority = authority || _empty;
        this.path = _referenceResolution(this.scheme, path || _empty);
        this.query = query || _empty;
        this.fragment = fragment || _empty;
        _validateUri(this, _strict);
      }
    }
    // ---- filesystem path -----------------------
    /**
     * Returns a string representing the corresponding file system path of this URI.
     * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
     * platform specific path separator.
     *
     * * Will *not* validate the path for invalid characters and semantics.
     * * Will *not* look at the scheme of this URI.
     * * The result shall *not* be used for display purposes but for accessing a file on disk.
     *
     *
     * The *difference* to `URI#path` is the use of the platform specific separator and the handling
     * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
     *
     * ```ts
        const u = URI.parse('file://server/c$/folder/file.txt')
        u.authority === 'server'
        u.path === '/shares/c$/file.txt'
        u.fsPath === '\\server\c$\folder\file.txt'
    ```
     *
     * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
     * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
     * with URIs that represent files on disk (`file` scheme).
     */
    get fsPath() {
      return uriToFsPath(this, false);
    }
    // ---- modify to new -------------------------
    with(change) {
      if (!change) {
        return this;
      }
      let { scheme, authority, path, query, fragment } = change;
      if (scheme === void 0) {
        scheme = this.scheme;
      } else if (scheme === null) {
        scheme = _empty;
      }
      if (authority === void 0) {
        authority = this.authority;
      } else if (authority === null) {
        authority = _empty;
      }
      if (path === void 0) {
        path = this.path;
      } else if (path === null) {
        path = _empty;
      }
      if (query === void 0) {
        query = this.query;
      } else if (query === null) {
        query = _empty;
      }
      if (fragment === void 0) {
        fragment = this.fragment;
      } else if (fragment === null) {
        fragment = _empty;
      }
      if (scheme === this.scheme && authority === this.authority && path === this.path && query === this.query && fragment === this.fragment) {
        return this;
      }
      return new Uri(scheme, authority, path, query, fragment);
    }
    // ---- parse & validate ------------------------
    /**
     * Creates a new URI from a string, e.g. `http://www.example.com/some/path`,
     * `file:///usr/home`, or `scheme:with/path`.
     *
     * @param value A string which represents an URI (see `URI#toString`).
     */
    static parse(value, _strict = false) {
      const match = _regexp.exec(value);
      if (!match) {
        return new Uri(_empty, _empty, _empty, _empty, _empty);
      }
      return new Uri(match[2] || _empty, percentDecode(match[4] || _empty), percentDecode(match[5] || _empty), percentDecode(match[7] || _empty), percentDecode(match[9] || _empty), _strict);
    }
    /**
     * Creates a new URI from a file system path, e.g. `c:\my\files`,
     * `/usr/home`, or `\\server\share\some\path`.
     *
     * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
     * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
     * `URI.parse('file://' + path)` because the path might contain characters that are
     * interpreted (# and ?). See the following sample:
     * ```ts
    const good = URI.file('/coding/c#/project1');
    good.scheme === 'file';
    good.path === '/coding/c#/project1';
    good.fragment === '';
    const bad = URI.parse('file://' + '/coding/c#/project1');
    bad.scheme === 'file';
    bad.path === '/coding/c'; // path is now broken
    bad.fragment === '/project1';
    ```
     *
     * @param path A file system path (see `URI#fsPath`)
     */
    static file(path) {
      let authority = _empty;
      if (isWindows) {
        path = path.replace(/\\/g, _slash);
      }
      if (path[0] === _slash && path[1] === _slash) {
        const idx = path.indexOf(_slash, 2);
        if (idx === -1) {
          authority = path.substring(2);
          path = _slash;
        } else {
          authority = path.substring(2, idx);
          path = path.substring(idx) || _slash;
        }
      }
      return new Uri("file", authority, path, _empty, _empty);
    }
    /**
     * Creates new URI from uri components.
     *
     * Unless `strict` is `true` the scheme is defaults to be `file`. This function performs
     * validation and should be used for untrusted uri components retrieved from storage,
     * user input, command arguments etc
     */
    static from(components, strict) {
      const result = new Uri(components.scheme, components.authority, components.path, components.query, components.fragment, strict);
      return result;
    }
    /**
     * Join a URI path with path fragments and normalizes the resulting path.
     *
     * @param uri The input URI.
     * @param pathFragment The path fragment to add to the URI path.
     * @returns The resulting URI.
     */
    static joinPath(uri, ...pathFragment) {
      if (!uri.path) {
        throw new Error(`[UriError]: cannot call joinPath on URI without path`);
      }
      let newPath;
      if (isWindows && uri.scheme === "file") {
        newPath = URI2.file(win32.join(uriToFsPath(uri, true), ...pathFragment)).path;
      } else {
        newPath = posix.join(uri.path, ...pathFragment);
      }
      return uri.with({ path: newPath });
    }
    // ---- printing/externalize ---------------------------
    /**
     * Creates a string representation for this URI. It's guaranteed that calling
     * `URI.parse` with the result of this function creates an URI which is equal
     * to this URI.
     *
     * * The result shall *not* be used for display purposes but for externalization or transport.
     * * The result will be encoded using the percentage encoding and encoding happens mostly
     * ignore the scheme-specific encoding rules.
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    toString(skipEncoding = false) {
      return _asFormatted(this, skipEncoding);
    }
    toJSON() {
      return this;
    }
    static revive(data) {
      if (!data) {
        return data;
      } else if (data instanceof URI2) {
        return data;
      } else {
        const result = new Uri(data);
        result._formatted = data.external ?? null;
        result._fsPath = data._sep === _pathSepMarker ? data.fsPath ?? null : null;
        return result;
      }
    }
  };
  const _pathSepMarker = isWindows ? 1 : void 0;
  class Uri extends URI$2 {
    constructor() {
      super(...arguments);
      this._formatted = null;
      this._fsPath = null;
    }
    get fsPath() {
      if (!this._fsPath) {
        this._fsPath = uriToFsPath(this, false);
      }
      return this._fsPath;
    }
    toString(skipEncoding = false) {
      if (!skipEncoding) {
        if (!this._formatted) {
          this._formatted = _asFormatted(this, false);
        }
        return this._formatted;
      } else {
        return _asFormatted(this, true);
      }
    }
    toJSON() {
      const res = {
        $mid: 1
        /* MarshalledId.Uri */
      };
      if (this._fsPath) {
        res.fsPath = this._fsPath;
        res._sep = _pathSepMarker;
      }
      if (this._formatted) {
        res.external = this._formatted;
      }
      if (this.path) {
        res.path = this.path;
      }
      if (this.scheme) {
        res.scheme = this.scheme;
      }
      if (this.authority) {
        res.authority = this.authority;
      }
      if (this.query) {
        res.query = this.query;
      }
      if (this.fragment) {
        res.fragment = this.fragment;
      }
      return res;
    }
  }
  const encodeTable = {
    [
      58
      /* CharCode.Colon */
    ]: "%3A",
    // gen-delims
    [
      47
      /* CharCode.Slash */
    ]: "%2F",
    [
      63
      /* CharCode.QuestionMark */
    ]: "%3F",
    [
      35
      /* CharCode.Hash */
    ]: "%23",
    [
      91
      /* CharCode.OpenSquareBracket */
    ]: "%5B",
    [
      93
      /* CharCode.CloseSquareBracket */
    ]: "%5D",
    [
      64
      /* CharCode.AtSign */
    ]: "%40",
    [
      33
      /* CharCode.ExclamationMark */
    ]: "%21",
    // sub-delims
    [
      36
      /* CharCode.DollarSign */
    ]: "%24",
    [
      38
      /* CharCode.Ampersand */
    ]: "%26",
    [
      39
      /* CharCode.SingleQuote */
    ]: "%27",
    [
      40
      /* CharCode.OpenParen */
    ]: "%28",
    [
      41
      /* CharCode.CloseParen */
    ]: "%29",
    [
      42
      /* CharCode.Asterisk */
    ]: "%2A",
    [
      43
      /* CharCode.Plus */
    ]: "%2B",
    [
      44
      /* CharCode.Comma */
    ]: "%2C",
    [
      59
      /* CharCode.Semicolon */
    ]: "%3B",
    [
      61
      /* CharCode.Equals */
    ]: "%3D",
    [
      32
      /* CharCode.Space */
    ]: "%20"
  };
  function encodeURIComponentFast(uriComponent, isPath, isAuthority) {
    let res = void 0;
    let nativeEncodePos = -1;
    for (let pos = 0; pos < uriComponent.length; pos++) {
      const code = uriComponent.charCodeAt(pos);
      if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57 || code === 45 || code === 46 || code === 95 || code === 126 || isPath && code === 47 || isAuthority && code === 91 || isAuthority && code === 93 || isAuthority && code === 58) {
        if (nativeEncodePos !== -1) {
          res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
          nativeEncodePos = -1;
        }
        if (res !== void 0) {
          res += uriComponent.charAt(pos);
        }
      } else {
        if (res === void 0) {
          res = uriComponent.substr(0, pos);
        }
        const escaped = encodeTable[code];
        if (escaped !== void 0) {
          if (nativeEncodePos !== -1) {
            res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
            nativeEncodePos = -1;
          }
          res += escaped;
        } else if (nativeEncodePos === -1) {
          nativeEncodePos = pos;
        }
      }
    }
    if (nativeEncodePos !== -1) {
      res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
    }
    return res !== void 0 ? res : uriComponent;
  }
  function encodeURIComponentMinimal(path) {
    let res = void 0;
    for (let pos = 0; pos < path.length; pos++) {
      const code = path.charCodeAt(pos);
      if (code === 35 || code === 63) {
        if (res === void 0) {
          res = path.substr(0, pos);
        }
        res += encodeTable[code];
      } else {
        if (res !== void 0) {
          res += path[pos];
        }
      }
    }
    return res !== void 0 ? res : path;
  }
  function uriToFsPath(uri, keepDriveLetterCasing) {
    let value;
    if (uri.authority && uri.path.length > 1 && uri.scheme === "file") {
      value = `//${uri.authority}${uri.path}`;
    } else if (uri.path.charCodeAt(0) === 47 && (uri.path.charCodeAt(1) >= 65 && uri.path.charCodeAt(1) <= 90 || uri.path.charCodeAt(1) >= 97 && uri.path.charCodeAt(1) <= 122) && uri.path.charCodeAt(2) === 58) {
      if (!keepDriveLetterCasing) {
        value = uri.path[1].toLowerCase() + uri.path.substr(2);
      } else {
        value = uri.path.substr(1);
      }
    } else {
      value = uri.path;
    }
    if (isWindows) {
      value = value.replace(/\//g, "\\");
    }
    return value;
  }
  function _asFormatted(uri, skipEncoding) {
    const encoder = !skipEncoding ? encodeURIComponentFast : encodeURIComponentMinimal;
    let res = "";
    let { scheme, authority, path, query, fragment } = uri;
    if (scheme) {
      res += scheme;
      res += ":";
    }
    if (authority || scheme === "file") {
      res += _slash;
      res += _slash;
    }
    if (authority) {
      let idx = authority.indexOf("@");
      if (idx !== -1) {
        const userinfo = authority.substr(0, idx);
        authority = authority.substr(idx + 1);
        idx = userinfo.lastIndexOf(":");
        if (idx === -1) {
          res += encoder(userinfo, false, false);
        } else {
          res += encoder(userinfo.substr(0, idx), false, false);
          res += ":";
          res += encoder(userinfo.substr(idx + 1), false, true);
        }
        res += "@";
      }
      authority = authority.toLowerCase();
      idx = authority.lastIndexOf(":");
      if (idx === -1) {
        res += encoder(authority, false, true);
      } else {
        res += encoder(authority.substr(0, idx), false, true);
        res += authority.substr(idx);
      }
    }
    if (path) {
      if (path.length >= 3 && path.charCodeAt(0) === 47 && path.charCodeAt(2) === 58) {
        const code = path.charCodeAt(1);
        if (code >= 65 && code <= 90) {
          path = `/${String.fromCharCode(code + 32)}:${path.substr(3)}`;
        }
      } else if (path.length >= 2 && path.charCodeAt(1) === 58) {
        const code = path.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          path = `${String.fromCharCode(code + 32)}:${path.substr(2)}`;
        }
      }
      res += encoder(path, true, false);
    }
    if (query) {
      res += "?";
      res += encoder(query, false, false);
    }
    if (fragment) {
      res += "#";
      res += !skipEncoding ? encodeURIComponentFast(fragment, false, false) : fragment;
    }
    return res;
  }
  function decodeURIComponentGraceful(str) {
    try {
      return decodeURIComponent(str);
    } catch {
      if (str.length > 3) {
        return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
      } else {
        return str;
      }
    }
  }
  const _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function percentDecode(str) {
    if (!str.match(_rEncodedAsHex)) {
      return str;
    }
    return str.replace(_rEncodedAsHex, (match) => decodeURIComponentGraceful(match));
  }
  class Selection extends Range$1 {
    constructor(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
      super(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn);
      this.selectionStartLineNumber = selectionStartLineNumber;
      this.selectionStartColumn = selectionStartColumn;
      this.positionLineNumber = positionLineNumber;
      this.positionColumn = positionColumn;
    }
    /**
     * Transform to a human-readable representation.
     */
    toString() {
      return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
    }
    /**
     * Test if equals other selection.
     */
    equalsSelection(other) {
      return Selection.selectionsEqual(this, other);
    }
    /**
     * Test if the two selections are equal.
     */
    static selectionsEqual(a2, b) {
      return a2.selectionStartLineNumber === b.selectionStartLineNumber && a2.selectionStartColumn === b.selectionStartColumn && a2.positionLineNumber === b.positionLineNumber && a2.positionColumn === b.positionColumn;
    }
    /**
     * Get directions (LTR or RTL).
     */
    getDirection() {
      if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
        return 0;
      }
      return 1;
    }
    /**
     * Create a new selection with a different `positionLineNumber` and `positionColumn`.
     */
    setEndPosition(endLineNumber, endColumn) {
      if (this.getDirection() === 0) {
        return new Selection(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
      }
      return new Selection(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
    }
    /**
     * Get the position at `positionLineNumber` and `positionColumn`.
     */
    getPosition() {
      return new Position$1(this.positionLineNumber, this.positionColumn);
    }
    /**
     * Get the position at the start of the selection.
    */
    getSelectionStart() {
      return new Position$1(this.selectionStartLineNumber, this.selectionStartColumn);
    }
    /**
     * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
     */
    setStartPosition(startLineNumber, startColumn) {
      if (this.getDirection() === 0) {
        return new Selection(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
      }
      return new Selection(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
    }
    // ----
    /**
     * Create a `Selection` from one or two positions
     */
    static fromPositions(start2, end = start2) {
      return new Selection(start2.lineNumber, start2.column, end.lineNumber, end.column);
    }
    /**
     * Creates a `Selection` from a range, given a direction.
     */
    static fromRange(range, direction) {
      if (direction === 0) {
        return new Selection(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
      } else {
        return new Selection(range.endLineNumber, range.endColumn, range.startLineNumber, range.startColumn);
      }
    }
    /**
     * Create a `Selection` from an `ISelection`.
     */
    static liftSelection(sel) {
      return new Selection(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
    }
    /**
     * `a` equals `b`.
     */
    static selectionsArrEqual(a2, b) {
      if (a2 && !b || !a2 && b) {
        return false;
      }
      if (!a2 && !b) {
        return true;
      }
      if (a2.length !== b.length) {
        return false;
      }
      for (let i = 0, len = a2.length; i < len; i++) {
        if (!this.selectionsEqual(a2[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    /**
     * Test if `obj` is an `ISelection`.
     */
    static isISelection(obj) {
      return !!obj && typeof obj.selectionStartLineNumber === "number" && typeof obj.selectionStartColumn === "number" && typeof obj.positionLineNumber === "number" && typeof obj.positionColumn === "number";
    }
    /**
     * Create with a direction.
     */
    static createWithDirection(startLineNumber, startColumn, endLineNumber, endColumn, direction) {
      if (direction === 0) {
        return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
      }
      return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
    }
  }
  const _codiconFontCharacters = /* @__PURE__ */ Object.create(null);
  function register(id, fontCharacter) {
    if (isString$1(fontCharacter)) {
      const val = _codiconFontCharacters[fontCharacter];
      if (val === void 0) {
        throw new Error(`${id} references an unknown codicon: ${fontCharacter}`);
      }
      fontCharacter = val;
    }
    _codiconFontCharacters[id] = fontCharacter;
    return { id };
  }
  const codiconsLibrary = {
    add: register("add", 6e4),
    plus: register("plus", 6e4),
    gistNew: register("gist-new", 6e4),
    repoCreate: register("repo-create", 6e4),
    lightbulb: register("lightbulb", 60001),
    lightBulb: register("light-bulb", 60001),
    repo: register("repo", 60002),
    repoDelete: register("repo-delete", 60002),
    gistFork: register("gist-fork", 60003),
    repoForked: register("repo-forked", 60003),
    gitPullRequest: register("git-pull-request", 60004),
    gitPullRequestAbandoned: register("git-pull-request-abandoned", 60004),
    recordKeys: register("record-keys", 60005),
    keyboard: register("keyboard", 60005),
    tag: register("tag", 60006),
    gitPullRequestLabel: register("git-pull-request-label", 60006),
    tagAdd: register("tag-add", 60006),
    tagRemove: register("tag-remove", 60006),
    person: register("person", 60007),
    personFollow: register("person-follow", 60007),
    personOutline: register("person-outline", 60007),
    personFilled: register("person-filled", 60007),
    sourceControl: register("source-control", 60008),
    mirror: register("mirror", 60009),
    mirrorPublic: register("mirror-public", 60009),
    star: register("star", 60010),
    starAdd: register("star-add", 60010),
    starDelete: register("star-delete", 60010),
    starEmpty: register("star-empty", 60010),
    comment: register("comment", 60011),
    commentAdd: register("comment-add", 60011),
    alert: register("alert", 60012),
    warning: register("warning", 60012),
    search: register("search", 60013),
    searchSave: register("search-save", 60013),
    logOut: register("log-out", 60014),
    signOut: register("sign-out", 60014),
    logIn: register("log-in", 60015),
    signIn: register("sign-in", 60015),
    eye: register("eye", 60016),
    eyeUnwatch: register("eye-unwatch", 60016),
    eyeWatch: register("eye-watch", 60016),
    circleFilled: register("circle-filled", 60017),
    primitiveDot: register("primitive-dot", 60017),
    closeDirty: register("close-dirty", 60017),
    debugBreakpoint: register("debug-breakpoint", 60017),
    debugBreakpointDisabled: register("debug-breakpoint-disabled", 60017),
    debugHint: register("debug-hint", 60017),
    terminalDecorationSuccess: register("terminal-decoration-success", 60017),
    primitiveSquare: register("primitive-square", 60018),
    edit: register("edit", 60019),
    pencil: register("pencil", 60019),
    info: register("info", 60020),
    issueOpened: register("issue-opened", 60020),
    gistPrivate: register("gist-private", 60021),
    gitForkPrivate: register("git-fork-private", 60021),
    lock: register("lock", 60021),
    mirrorPrivate: register("mirror-private", 60021),
    close: register("close", 60022),
    removeClose: register("remove-close", 60022),
    x: register("x", 60022),
    repoSync: register("repo-sync", 60023),
    sync: register("sync", 60023),
    clone: register("clone", 60024),
    desktopDownload: register("desktop-download", 60024),
    beaker: register("beaker", 60025),
    microscope: register("microscope", 60025),
    vm: register("vm", 60026),
    deviceDesktop: register("device-desktop", 60026),
    file: register("file", 60027),
    more: register("more", 60028),
    ellipsis: register("ellipsis", 60028),
    kebabHorizontal: register("kebab-horizontal", 60028),
    mailReply: register("mail-reply", 60029),
    reply: register("reply", 60029),
    organization: register("organization", 60030),
    organizationFilled: register("organization-filled", 60030),
    organizationOutline: register("organization-outline", 60030),
    newFile: register("new-file", 60031),
    fileAdd: register("file-add", 60031),
    newFolder: register("new-folder", 60032),
    fileDirectoryCreate: register("file-directory-create", 60032),
    trash: register("trash", 60033),
    trashcan: register("trashcan", 60033),
    history: register("history", 60034),
    clock: register("clock", 60034),
    folder: register("folder", 60035),
    fileDirectory: register("file-directory", 60035),
    symbolFolder: register("symbol-folder", 60035),
    logoGithub: register("logo-github", 60036),
    markGithub: register("mark-github", 60036),
    github: register("github", 60036),
    terminal: register("terminal", 60037),
    console: register("console", 60037),
    repl: register("repl", 60037),
    zap: register("zap", 60038),
    symbolEvent: register("symbol-event", 60038),
    error: register("error", 60039),
    stop: register("stop", 60039),
    variable: register("variable", 60040),
    symbolVariable: register("symbol-variable", 60040),
    array: register("array", 60042),
    symbolArray: register("symbol-array", 60042),
    symbolModule: register("symbol-module", 60043),
    symbolPackage: register("symbol-package", 60043),
    symbolNamespace: register("symbol-namespace", 60043),
    symbolObject: register("symbol-object", 60043),
    symbolMethod: register("symbol-method", 60044),
    symbolFunction: register("symbol-function", 60044),
    symbolConstructor: register("symbol-constructor", 60044),
    symbolBoolean: register("symbol-boolean", 60047),
    symbolNull: register("symbol-null", 60047),
    symbolNumeric: register("symbol-numeric", 60048),
    symbolNumber: register("symbol-number", 60048),
    symbolStructure: register("symbol-structure", 60049),
    symbolStruct: register("symbol-struct", 60049),
    symbolParameter: register("symbol-parameter", 60050),
    symbolTypeParameter: register("symbol-type-parameter", 60050),
    symbolKey: register("symbol-key", 60051),
    symbolText: register("symbol-text", 60051),
    symbolReference: register("symbol-reference", 60052),
    goToFile: register("go-to-file", 60052),
    symbolEnum: register("symbol-enum", 60053),
    symbolValue: register("symbol-value", 60053),
    symbolRuler: register("symbol-ruler", 60054),
    symbolUnit: register("symbol-unit", 60054),
    activateBreakpoints: register("activate-breakpoints", 60055),
    archive: register("archive", 60056),
    arrowBoth: register("arrow-both", 60057),
    arrowDown: register("arrow-down", 60058),
    arrowLeft: register("arrow-left", 60059),
    arrowRight: register("arrow-right", 60060),
    arrowSmallDown: register("arrow-small-down", 60061),
    arrowSmallLeft: register("arrow-small-left", 60062),
    arrowSmallRight: register("arrow-small-right", 60063),
    arrowSmallUp: register("arrow-small-up", 60064),
    arrowUp: register("arrow-up", 60065),
    bell: register("bell", 60066),
    bold: register("bold", 60067),
    book: register("book", 60068),
    bookmark: register("bookmark", 60069),
    debugBreakpointConditionalUnverified: register("debug-breakpoint-conditional-unverified", 60070),
    debugBreakpointConditional: register("debug-breakpoint-conditional", 60071),
    debugBreakpointConditionalDisabled: register("debug-breakpoint-conditional-disabled", 60071),
    debugBreakpointDataUnverified: register("debug-breakpoint-data-unverified", 60072),
    debugBreakpointData: register("debug-breakpoint-data", 60073),
    debugBreakpointDataDisabled: register("debug-breakpoint-data-disabled", 60073),
    debugBreakpointLogUnverified: register("debug-breakpoint-log-unverified", 60074),
    debugBreakpointLog: register("debug-breakpoint-log", 60075),
    debugBreakpointLogDisabled: register("debug-breakpoint-log-disabled", 60075),
    briefcase: register("briefcase", 60076),
    broadcast: register("broadcast", 60077),
    browser: register("browser", 60078),
    bug: register("bug", 60079),
    calendar: register("calendar", 60080),
    caseSensitive: register("case-sensitive", 60081),
    check: register("check", 60082),
    checklist: register("checklist", 60083),
    chevronDown: register("chevron-down", 60084),
    chevronLeft: register("chevron-left", 60085),
    chevronRight: register("chevron-right", 60086),
    chevronUp: register("chevron-up", 60087),
    chromeClose: register("chrome-close", 60088),
    chromeMaximize: register("chrome-maximize", 60089),
    chromeMinimize: register("chrome-minimize", 60090),
    chromeRestore: register("chrome-restore", 60091),
    circleOutline: register("circle-outline", 60092),
    circle: register("circle", 60092),
    debugBreakpointUnverified: register("debug-breakpoint-unverified", 60092),
    terminalDecorationIncomplete: register("terminal-decoration-incomplete", 60092),
    circleSlash: register("circle-slash", 60093),
    circuitBoard: register("circuit-board", 60094),
    clearAll: register("clear-all", 60095),
    clippy: register("clippy", 60096),
    closeAll: register("close-all", 60097),
    cloudDownload: register("cloud-download", 60098),
    cloudUpload: register("cloud-upload", 60099),
    code: register("code", 60100),
    collapseAll: register("collapse-all", 60101),
    colorMode: register("color-mode", 60102),
    commentDiscussion: register("comment-discussion", 60103),
    creditCard: register("credit-card", 60105),
    dash: register("dash", 60108),
    dashboard: register("dashboard", 60109),
    database: register("database", 60110),
    debugContinue: register("debug-continue", 60111),
    debugDisconnect: register("debug-disconnect", 60112),
    debugPause: register("debug-pause", 60113),
    debugRestart: register("debug-restart", 60114),
    debugStart: register("debug-start", 60115),
    debugStepInto: register("debug-step-into", 60116),
    debugStepOut: register("debug-step-out", 60117),
    debugStepOver: register("debug-step-over", 60118),
    debugStop: register("debug-stop", 60119),
    debug: register("debug", 60120),
    deviceCameraVideo: register("device-camera-video", 60121),
    deviceCamera: register("device-camera", 60122),
    deviceMobile: register("device-mobile", 60123),
    diffAdded: register("diff-added", 60124),
    diffIgnored: register("diff-ignored", 60125),
    diffModified: register("diff-modified", 60126),
    diffRemoved: register("diff-removed", 60127),
    diffRenamed: register("diff-renamed", 60128),
    diff: register("diff", 60129),
    diffSidebyside: register("diff-sidebyside", 60129),
    discard: register("discard", 60130),
    editorLayout: register("editor-layout", 60131),
    emptyWindow: register("empty-window", 60132),
    exclude: register("exclude", 60133),
    extensions: register("extensions", 60134),
    eyeClosed: register("eye-closed", 60135),
    fileBinary: register("file-binary", 60136),
    fileCode: register("file-code", 60137),
    fileMedia: register("file-media", 60138),
    filePdf: register("file-pdf", 60139),
    fileSubmodule: register("file-submodule", 60140),
    fileSymlinkDirectory: register("file-symlink-directory", 60141),
    fileSymlinkFile: register("file-symlink-file", 60142),
    fileZip: register("file-zip", 60143),
    files: register("files", 60144),
    filter: register("filter", 60145),
    flame: register("flame", 60146),
    foldDown: register("fold-down", 60147),
    foldUp: register("fold-up", 60148),
    fold: register("fold", 60149),
    folderActive: register("folder-active", 60150),
    folderOpened: register("folder-opened", 60151),
    gear: register("gear", 60152),
    gift: register("gift", 60153),
    gistSecret: register("gist-secret", 60154),
    gist: register("gist", 60155),
    gitCommit: register("git-commit", 60156),
    gitCompare: register("git-compare", 60157),
    compareChanges: register("compare-changes", 60157),
    gitMerge: register("git-merge", 60158),
    githubAction: register("github-action", 60159),
    githubAlt: register("github-alt", 60160),
    globe: register("globe", 60161),
    grabber: register("grabber", 60162),
    graph: register("graph", 60163),
    gripper: register("gripper", 60164),
    heart: register("heart", 60165),
    home: register("home", 60166),
    horizontalRule: register("horizontal-rule", 60167),
    hubot: register("hubot", 60168),
    inbox: register("inbox", 60169),
    issueReopened: register("issue-reopened", 60171),
    issues: register("issues", 60172),
    italic: register("italic", 60173),
    jersey: register("jersey", 60174),
    json: register("json", 60175),
    kebabVertical: register("kebab-vertical", 60176),
    key: register("key", 60177),
    law: register("law", 60178),
    lightbulbAutofix: register("lightbulb-autofix", 60179),
    linkExternal: register("link-external", 60180),
    link: register("link", 60181),
    listOrdered: register("list-ordered", 60182),
    listUnordered: register("list-unordered", 60183),
    liveShare: register("live-share", 60184),
    loading: register("loading", 60185),
    location: register("location", 60186),
    mailRead: register("mail-read", 60187),
    mail: register("mail", 60188),
    markdown: register("markdown", 60189),
    megaphone: register("megaphone", 60190),
    mention: register("mention", 60191),
    milestone: register("milestone", 60192),
    gitPullRequestMilestone: register("git-pull-request-milestone", 60192),
    mortarBoard: register("mortar-board", 60193),
    move: register("move", 60194),
    multipleWindows: register("multiple-windows", 60195),
    mute: register("mute", 60196),
    noNewline: register("no-newline", 60197),
    note: register("note", 60198),
    octoface: register("octoface", 60199),
    openPreview: register("open-preview", 60200),
    package: register("package", 60201),
    paintcan: register("paintcan", 60202),
    pin: register("pin", 60203),
    play: register("play", 60204),
    run: register("run", 60204),
    plug: register("plug", 60205),
    preserveCase: register("preserve-case", 60206),
    preview: register("preview", 60207),
    project: register("project", 60208),
    pulse: register("pulse", 60209),
    question: register("question", 60210),
    quote: register("quote", 60211),
    radioTower: register("radio-tower", 60212),
    reactions: register("reactions", 60213),
    references: register("references", 60214),
    refresh: register("refresh", 60215),
    regex: register("regex", 60216),
    remoteExplorer: register("remote-explorer", 60217),
    remote: register("remote", 60218),
    remove: register("remove", 60219),
    replaceAll: register("replace-all", 60220),
    replace: register("replace", 60221),
    repoClone: register("repo-clone", 60222),
    repoForcePush: register("repo-force-push", 60223),
    repoPull: register("repo-pull", 60224),
    repoPush: register("repo-push", 60225),
    report: register("report", 60226),
    requestChanges: register("request-changes", 60227),
    rocket: register("rocket", 60228),
    rootFolderOpened: register("root-folder-opened", 60229),
    rootFolder: register("root-folder", 60230),
    rss: register("rss", 60231),
    ruby: register("ruby", 60232),
    saveAll: register("save-all", 60233),
    saveAs: register("save-as", 60234),
    save: register("save", 60235),
    screenFull: register("screen-full", 60236),
    screenNormal: register("screen-normal", 60237),
    searchStop: register("search-stop", 60238),
    server: register("server", 60240),
    settingsGear: register("settings-gear", 60241),
    settings: register("settings", 60242),
    shield: register("shield", 60243),
    smiley: register("smiley", 60244),
    sortPrecedence: register("sort-precedence", 60245),
    splitHorizontal: register("split-horizontal", 60246),
    splitVertical: register("split-vertical", 60247),
    squirrel: register("squirrel", 60248),
    starFull: register("star-full", 60249),
    starHalf: register("star-half", 60250),
    symbolClass: register("symbol-class", 60251),
    symbolColor: register("symbol-color", 60252),
    symbolConstant: register("symbol-constant", 60253),
    symbolEnumMember: register("symbol-enum-member", 60254),
    symbolField: register("symbol-field", 60255),
    symbolFile: register("symbol-file", 60256),
    symbolInterface: register("symbol-interface", 60257),
    symbolKeyword: register("symbol-keyword", 60258),
    symbolMisc: register("symbol-misc", 60259),
    symbolOperator: register("symbol-operator", 60260),
    symbolProperty: register("symbol-property", 60261),
    wrench: register("wrench", 60261),
    wrenchSubaction: register("wrench-subaction", 60261),
    symbolSnippet: register("symbol-snippet", 60262),
    tasklist: register("tasklist", 60263),
    telescope: register("telescope", 60264),
    textSize: register("text-size", 60265),
    threeBars: register("three-bars", 60266),
    thumbsdown: register("thumbsdown", 60267),
    thumbsup: register("thumbsup", 60268),
    tools: register("tools", 60269),
    triangleDown: register("triangle-down", 60270),
    triangleLeft: register("triangle-left", 60271),
    triangleRight: register("triangle-right", 60272),
    triangleUp: register("triangle-up", 60273),
    twitter: register("twitter", 60274),
    unfold: register("unfold", 60275),
    unlock: register("unlock", 60276),
    unmute: register("unmute", 60277),
    unverified: register("unverified", 60278),
    verified: register("verified", 60279),
    versions: register("versions", 60280),
    vmActive: register("vm-active", 60281),
    vmOutline: register("vm-outline", 60282),
    vmRunning: register("vm-running", 60283),
    watch: register("watch", 60284),
    whitespace: register("whitespace", 60285),
    wholeWord: register("whole-word", 60286),
    window: register("window", 60287),
    wordWrap: register("word-wrap", 60288),
    zoomIn: register("zoom-in", 60289),
    zoomOut: register("zoom-out", 60290),
    listFilter: register("list-filter", 60291),
    listFlat: register("list-flat", 60292),
    listSelection: register("list-selection", 60293),
    selection: register("selection", 60293),
    listTree: register("list-tree", 60294),
    debugBreakpointFunctionUnverified: register("debug-breakpoint-function-unverified", 60295),
    debugBreakpointFunction: register("debug-breakpoint-function", 60296),
    debugBreakpointFunctionDisabled: register("debug-breakpoint-function-disabled", 60296),
    debugStackframeActive: register("debug-stackframe-active", 60297),
    circleSmallFilled: register("circle-small-filled", 60298),
    debugStackframeDot: register("debug-stackframe-dot", 60298),
    terminalDecorationMark: register("terminal-decoration-mark", 60298),
    debugStackframe: register("debug-stackframe", 60299),
    debugStackframeFocused: register("debug-stackframe-focused", 60299),
    debugBreakpointUnsupported: register("debug-breakpoint-unsupported", 60300),
    symbolString: register("symbol-string", 60301),
    debugReverseContinue: register("debug-reverse-continue", 60302),
    debugStepBack: register("debug-step-back", 60303),
    debugRestartFrame: register("debug-restart-frame", 60304),
    debugAlt: register("debug-alt", 60305),
    callIncoming: register("call-incoming", 60306),
    callOutgoing: register("call-outgoing", 60307),
    menu: register("menu", 60308),
    expandAll: register("expand-all", 60309),
    feedback: register("feedback", 60310),
    gitPullRequestReviewer: register("git-pull-request-reviewer", 60310),
    groupByRefType: register("group-by-ref-type", 60311),
    ungroupByRefType: register("ungroup-by-ref-type", 60312),
    account: register("account", 60313),
    gitPullRequestAssignee: register("git-pull-request-assignee", 60313),
    bellDot: register("bell-dot", 60314),
    debugConsole: register("debug-console", 60315),
    library: register("library", 60316),
    output: register("output", 60317),
    runAll: register("run-all", 60318),
    syncIgnored: register("sync-ignored", 60319),
    pinned: register("pinned", 60320),
    githubInverted: register("github-inverted", 60321),
    serverProcess: register("server-process", 60322),
    serverEnvironment: register("server-environment", 60323),
    pass: register("pass", 60324),
    issueClosed: register("issue-closed", 60324),
    stopCircle: register("stop-circle", 60325),
    playCircle: register("play-circle", 60326),
    record: register("record", 60327),
    debugAltSmall: register("debug-alt-small", 60328),
    vmConnect: register("vm-connect", 60329),
    cloud: register("cloud", 60330),
    merge: register("merge", 60331),
    export: register("export", 60332),
    graphLeft: register("graph-left", 60333),
    magnet: register("magnet", 60334),
    notebook: register("notebook", 60335),
    redo: register("redo", 60336),
    checkAll: register("check-all", 60337),
    pinnedDirty: register("pinned-dirty", 60338),
    passFilled: register("pass-filled", 60339),
    circleLargeFilled: register("circle-large-filled", 60340),
    circleLarge: register("circle-large", 60341),
    circleLargeOutline: register("circle-large-outline", 60341),
    combine: register("combine", 60342),
    gather: register("gather", 60342),
    table: register("table", 60343),
    variableGroup: register("variable-group", 60344),
    typeHierarchy: register("type-hierarchy", 60345),
    typeHierarchySub: register("type-hierarchy-sub", 60346),
    typeHierarchySuper: register("type-hierarchy-super", 60347),
    gitPullRequestCreate: register("git-pull-request-create", 60348),
    runAbove: register("run-above", 60349),
    runBelow: register("run-below", 60350),
    notebookTemplate: register("notebook-template", 60351),
    debugRerun: register("debug-rerun", 60352),
    workspaceTrusted: register("workspace-trusted", 60353),
    workspaceUntrusted: register("workspace-untrusted", 60354),
    workspaceUnknown: register("workspace-unknown", 60355),
    terminalCmd: register("terminal-cmd", 60356),
    terminalDebian: register("terminal-debian", 60357),
    terminalLinux: register("terminal-linux", 60358),
    terminalPowershell: register("terminal-powershell", 60359),
    terminalTmux: register("terminal-tmux", 60360),
    terminalUbuntu: register("terminal-ubuntu", 60361),
    terminalBash: register("terminal-bash", 60362),
    arrowSwap: register("arrow-swap", 60363),
    copy: register("copy", 60364),
    personAdd: register("person-add", 60365),
    filterFilled: register("filter-filled", 60366),
    wand: register("wand", 60367),
    debugLineByLine: register("debug-line-by-line", 60368),
    inspect: register("inspect", 60369),
    layers: register("layers", 60370),
    layersDot: register("layers-dot", 60371),
    layersActive: register("layers-active", 60372),
    compass: register("compass", 60373),
    compassDot: register("compass-dot", 60374),
    compassActive: register("compass-active", 60375),
    azure: register("azure", 60376),
    issueDraft: register("issue-draft", 60377),
    gitPullRequestClosed: register("git-pull-request-closed", 60378),
    gitPullRequestDraft: register("git-pull-request-draft", 60379),
    debugAll: register("debug-all", 60380),
    debugCoverage: register("debug-coverage", 60381),
    runErrors: register("run-errors", 60382),
    folderLibrary: register("folder-library", 60383),
    debugContinueSmall: register("debug-continue-small", 60384),
    beakerStop: register("beaker-stop", 60385),
    graphLine: register("graph-line", 60386),
    graphScatter: register("graph-scatter", 60387),
    pieChart: register("pie-chart", 60388),
    bracket: register("bracket", 60175),
    bracketDot: register("bracket-dot", 60389),
    bracketError: register("bracket-error", 60390),
    lockSmall: register("lock-small", 60391),
    azureDevops: register("azure-devops", 60392),
    verifiedFilled: register("verified-filled", 60393),
    newline: register("newline", 60394),
    layout: register("layout", 60395),
    layoutActivitybarLeft: register("layout-activitybar-left", 60396),
    layoutActivitybarRight: register("layout-activitybar-right", 60397),
    layoutPanelLeft: register("layout-panel-left", 60398),
    layoutPanelCenter: register("layout-panel-center", 60399),
    layoutPanelJustify: register("layout-panel-justify", 60400),
    layoutPanelRight: register("layout-panel-right", 60401),
    layoutPanel: register("layout-panel", 60402),
    layoutSidebarLeft: register("layout-sidebar-left", 60403),
    layoutSidebarRight: register("layout-sidebar-right", 60404),
    layoutStatusbar: register("layout-statusbar", 60405),
    layoutMenubar: register("layout-menubar", 60406),
    layoutCentered: register("layout-centered", 60407),
    target: register("target", 60408),
    indent: register("indent", 60409),
    recordSmall: register("record-small", 60410),
    errorSmall: register("error-small", 60411),
    terminalDecorationError: register("terminal-decoration-error", 60411),
    arrowCircleDown: register("arrow-circle-down", 60412),
    arrowCircleLeft: register("arrow-circle-left", 60413),
    arrowCircleRight: register("arrow-circle-right", 60414),
    arrowCircleUp: register("arrow-circle-up", 60415),
    layoutSidebarRightOff: register("layout-sidebar-right-off", 60416),
    layoutPanelOff: register("layout-panel-off", 60417),
    layoutSidebarLeftOff: register("layout-sidebar-left-off", 60418),
    blank: register("blank", 60419),
    heartFilled: register("heart-filled", 60420),
    map: register("map", 60421),
    mapHorizontal: register("map-horizontal", 60421),
    foldHorizontal: register("fold-horizontal", 60421),
    mapFilled: register("map-filled", 60422),
    mapHorizontalFilled: register("map-horizontal-filled", 60422),
    foldHorizontalFilled: register("fold-horizontal-filled", 60422),
    circleSmall: register("circle-small", 60423),
    bellSlash: register("bell-slash", 60424),
    bellSlashDot: register("bell-slash-dot", 60425),
    commentUnresolved: register("comment-unresolved", 60426),
    gitPullRequestGoToChanges: register("git-pull-request-go-to-changes", 60427),
    gitPullRequestNewChanges: register("git-pull-request-new-changes", 60428),
    searchFuzzy: register("search-fuzzy", 60429),
    commentDraft: register("comment-draft", 60430),
    send: register("send", 60431),
    sparkle: register("sparkle", 60432),
    insert: register("insert", 60433),
    mic: register("mic", 60434),
    thumbsdownFilled: register("thumbsdown-filled", 60435),
    thumbsupFilled: register("thumbsup-filled", 60436),
    coffee: register("coffee", 60437),
    snake: register("snake", 60438),
    game: register("game", 60439),
    vr: register("vr", 60440),
    chip: register("chip", 60441),
    piano: register("piano", 60442),
    music: register("music", 60443),
    micFilled: register("mic-filled", 60444),
    repoFetch: register("repo-fetch", 60445),
    copilot: register("copilot", 60446),
    lightbulbSparkle: register("lightbulb-sparkle", 60447),
    robot: register("robot", 60448),
    sparkleFilled: register("sparkle-filled", 60449),
    diffSingle: register("diff-single", 60450),
    diffMultiple: register("diff-multiple", 60451),
    surroundWith: register("surround-with", 60452),
    share: register("share", 60453),
    gitStash: register("git-stash", 60454),
    gitStashApply: register("git-stash-apply", 60455),
    gitStashPop: register("git-stash-pop", 60456),
    vscode: register("vscode", 60457),
    vscodeInsiders: register("vscode-insiders", 60458),
    codeOss: register("code-oss", 60459),
    runCoverage: register("run-coverage", 60460),
    runAllCoverage: register("run-all-coverage", 60461),
    coverage: register("coverage", 60462),
    githubProject: register("github-project", 60463),
    mapVertical: register("map-vertical", 60464),
    foldVertical: register("fold-vertical", 60464),
    mapVerticalFilled: register("map-vertical-filled", 60465),
    foldVerticalFilled: register("fold-vertical-filled", 60465),
    goToSearch: register("go-to-search", 60466),
    percentage: register("percentage", 60467),
    sortPercentage: register("sort-percentage", 60467),
    attach: register("attach", 60468),
    goToEditingSession: register("go-to-editing-session", 60469),
    editSession: register("edit-session", 60470),
    codeReview: register("code-review", 60471),
    copilotWarning: register("copilot-warning", 60472),
    python: register("python", 60473),
    copilotLarge: register("copilot-large", 60474),
    copilotWarningLarge: register("copilot-warning-large", 60475),
    keyboardTab: register("keyboard-tab", 60476),
    copilotBlocked: register("copilot-blocked", 60477),
    copilotNotConnected: register("copilot-not-connected", 60478),
    flag: register("flag", 60479),
    lightbulbEmpty: register("lightbulb-empty", 60480),
    symbolMethodArrow: register("symbol-method-arrow", 60481),
    copilotUnavailable: register("copilot-unavailable", 60482),
    repoPinned: register("repo-pinned", 60483),
    keyboardTabAbove: register("keyboard-tab-above", 60484),
    keyboardTabBelow: register("keyboard-tab-below", 60485),
    gitPullRequestDone: register("git-pull-request-done", 60486),
    mcp: register("mcp", 60487),
    extensionsLarge: register("extensions-large", 60488),
    layoutPanelDock: register("layout-panel-dock", 60489),
    layoutSidebarLeftDock: register("layout-sidebar-left-dock", 60490),
    layoutSidebarRightDock: register("layout-sidebar-right-dock", 60491),
    copilotInProgress: register("copilot-in-progress", 60492),
    copilotError: register("copilot-error", 60493),
    copilotSuccess: register("copilot-success", 60494),
    chatSparkle: register("chat-sparkle", 60495),
    searchSparkle: register("search-sparkle", 60496),
    editSparkle: register("edit-sparkle", 60497),
    copilotSnooze: register("copilot-snooze", 60498),
    sendToRemoteAgent: register("send-to-remote-agent", 60499),
    commentDiscussionSparkle: register("comment-discussion-sparkle", 60500),
    chatSparkleWarning: register("chat-sparkle-warning", 60501),
    chatSparkleError: register("chat-sparkle-error", 60502),
    collection: register("collection", 60503),
    newCollection: register("new-collection", 60504),
    thinking: register("thinking", 60505),
    build: register("build", 60506),
    commentDiscussionQuote: register("comment-discussion-quote", 60507),
    cursor: register("cursor", 60508),
    eraser: register("eraser", 60509),
    fileText: register("file-text", 60510),
    gitLens: register("git-lens", 60511),
    quotes: register("quotes", 60512),
    rename: register("rename", 60513),
    runWithDeps: register("run-with-deps", 60514),
    debugConnected: register("debug-connected", 60515),
    strikethrough: register("strikethrough", 60516),
    openInProduct: register("open-in-product", 60517),
    indexZero: register("index-zero", 60518),
    agent: register("agent", 60519),
    editCode: register("edit-code", 60520),
    repoSelected: register("repo-selected", 60521),
    skip: register("skip", 60522),
    mergeInto: register("merge-into", 60523),
    gitBranchChanges: register("git-branch-changes", 60524),
    gitBranchStagedChanges: register("git-branch-staged-changes", 60525),
    gitBranchConflicts: register("git-branch-conflicts", 60526),
    gitBranch: register("git-branch", 60527),
    gitBranchCreate: register("git-branch-create", 60527),
    gitBranchDelete: register("git-branch-delete", 60527),
    searchLarge: register("search-large", 60528),
    terminalGitBash: register("terminal-git-bash", 60529)
  };
  const codiconsDerived = {
    dialogError: register("dialog-error", "error"),
    dialogWarning: register("dialog-warning", "warning"),
    dialogInfo: register("dialog-info", "info"),
    dialogClose: register("dialog-close", "close"),
    treeItemExpanded: register("tree-item-expanded", "chevron-down"),
    // collapsed is done with rotation
    treeFilterOnTypeOn: register("tree-filter-on-type-on", "list-filter"),
    treeFilterOnTypeOff: register("tree-filter-on-type-off", "list-selection"),
    treeFilterClear: register("tree-filter-clear", "close"),
    treeItemLoading: register("tree-item-loading", "loading"),
    menuSelection: register("menu-selection", "check"),
    menuSubmenu: register("menu-submenu", "chevron-right"),
    menuBarMore: register("menubar-more", "more"),
    scrollbarButtonLeft: register("scrollbar-button-left", "triangle-left"),
    scrollbarButtonRight: register("scrollbar-button-right", "triangle-right"),
    scrollbarButtonUp: register("scrollbar-button-up", "triangle-up"),
    scrollbarButtonDown: register("scrollbar-button-down", "triangle-down"),
    toolBarMore: register("toolbar-more", "more"),
    quickInputBack: register("quick-input-back", "arrow-left"),
    dropDownButton: register("drop-down-button", 60084),
    symbolCustomColor: register("symbol-customcolor", 60252),
    exportIcon: register("export", 60332),
    workspaceUnspecified: register("workspace-unspecified", 60355),
    newLine: register("newline", 60394),
    thumbsDownFilled: register("thumbsdown-filled", 60435),
    thumbsUpFilled: register("thumbsup-filled", 60436),
    gitFetch: register("git-fetch", 60445),
    lightbulbSparkleAutofix: register("lightbulb-sparkle-autofix", 60447),
    debugBreakpointPending: register("debug-breakpoint-pending", 60377)
  };
  const Codicon = {
    ...codiconsLibrary,
    ...codiconsDerived
  };
  class TokenizationRegistry {
    constructor() {
      this._tokenizationSupports = /* @__PURE__ */ new Map();
      this._factories = /* @__PURE__ */ new Map();
      this._onDidChange = new Emitter();
      this.onDidChange = this._onDidChange.event;
      this._colorMap = null;
    }
    handleChange(languageIds) {
      this._onDidChange.fire({
        changedLanguages: languageIds,
        changedColorMap: false
      });
    }
    register(languageId, support) {
      this._tokenizationSupports.set(languageId, support);
      this.handleChange([languageId]);
      return toDisposable(() => {
        if (this._tokenizationSupports.get(languageId) !== support) {
          return;
        }
        this._tokenizationSupports.delete(languageId);
        this.handleChange([languageId]);
      });
    }
    get(languageId) {
      return this._tokenizationSupports.get(languageId) || null;
    }
    registerFactory(languageId, factory) {
      this._factories.get(languageId)?.dispose();
      const myData = new TokenizationSupportFactoryData(this, languageId, factory);
      this._factories.set(languageId, myData);
      return toDisposable(() => {
        const v = this._factories.get(languageId);
        if (!v || v !== myData) {
          return;
        }
        this._factories.delete(languageId);
        v.dispose();
      });
    }
    async getOrCreate(languageId) {
      const tokenizationSupport = this.get(languageId);
      if (tokenizationSupport) {
        return tokenizationSupport;
      }
      const factory = this._factories.get(languageId);
      if (!factory || factory.isResolved) {
        return null;
      }
      await factory.resolve();
      return this.get(languageId);
    }
    isResolved(languageId) {
      const tokenizationSupport = this.get(languageId);
      if (tokenizationSupport) {
        return true;
      }
      const factory = this._factories.get(languageId);
      if (!factory || factory.isResolved) {
        return true;
      }
      return false;
    }
    setColorMap(colorMap) {
      this._colorMap = colorMap;
      this._onDidChange.fire({
        changedLanguages: Array.from(this._tokenizationSupports.keys()),
        changedColorMap: true
      });
    }
    getColorMap() {
      return this._colorMap;
    }
    getDefaultBackground() {
      if (this._colorMap && this._colorMap.length > 2) {
        return this._colorMap[
          2
          /* ColorId.DefaultBackground */
        ];
      }
      return null;
    }
  }
  class TokenizationSupportFactoryData extends Disposable {
    get isResolved() {
      return this._isResolved;
    }
    constructor(_registry, _languageId, _factory) {
      super();
      this._registry = _registry;
      this._languageId = _languageId;
      this._factory = _factory;
      this._isDisposed = false;
      this._resolvePromise = null;
      this._isResolved = false;
    }
    dispose() {
      this._isDisposed = true;
      super.dispose();
    }
    async resolve() {
      if (!this._resolvePromise) {
        this._resolvePromise = this._create();
      }
      return this._resolvePromise;
    }
    async _create() {
      const value = await this._factory.tokenizationSupport;
      this._isResolved = true;
      if (value && !this._isDisposed) {
        this._register(this._registry.register(this._languageId, value));
      }
    }
  }
  class Token {
    constructor(offset, type, language) {
      this.offset = offset;
      this.type = type;
      this.language = language;
      this._tokenBrand = void 0;
    }
    toString() {
      return "(" + this.offset + ", " + this.type + ")";
    }
  }
  var HoverVerbosityAction$1;
  (function(HoverVerbosityAction2) {
    HoverVerbosityAction2[HoverVerbosityAction2["Increase"] = 0] = "Increase";
    HoverVerbosityAction2[HoverVerbosityAction2["Decrease"] = 1] = "Decrease";
  })(HoverVerbosityAction$1 || (HoverVerbosityAction$1 = {}));
  var CompletionItemKinds;
  (function(CompletionItemKinds2) {
    const byKind = /* @__PURE__ */ new Map();
    byKind.set(0, Codicon.symbolMethod);
    byKind.set(1, Codicon.symbolFunction);
    byKind.set(2, Codicon.symbolConstructor);
    byKind.set(3, Codicon.symbolField);
    byKind.set(4, Codicon.symbolVariable);
    byKind.set(5, Codicon.symbolClass);
    byKind.set(6, Codicon.symbolStruct);
    byKind.set(7, Codicon.symbolInterface);
    byKind.set(8, Codicon.symbolModule);
    byKind.set(9, Codicon.symbolProperty);
    byKind.set(10, Codicon.symbolEvent);
    byKind.set(11, Codicon.symbolOperator);
    byKind.set(12, Codicon.symbolUnit);
    byKind.set(13, Codicon.symbolValue);
    byKind.set(15, Codicon.symbolEnum);
    byKind.set(14, Codicon.symbolConstant);
    byKind.set(15, Codicon.symbolEnum);
    byKind.set(16, Codicon.symbolEnumMember);
    byKind.set(17, Codicon.symbolKeyword);
    byKind.set(28, Codicon.symbolSnippet);
    byKind.set(18, Codicon.symbolText);
    byKind.set(19, Codicon.symbolColor);
    byKind.set(20, Codicon.symbolFile);
    byKind.set(21, Codicon.symbolReference);
    byKind.set(22, Codicon.symbolCustomColor);
    byKind.set(23, Codicon.symbolFolder);
    byKind.set(24, Codicon.symbolTypeParameter);
    byKind.set(25, Codicon.account);
    byKind.set(26, Codicon.issues);
    byKind.set(27, Codicon.tools);
    function toIcon(kind) {
      let codicon = byKind.get(kind);
      if (!codicon) {
        console.info("No codicon found for CompletionItemKind " + kind);
        codicon = Codicon.symbolProperty;
      }
      return codicon;
    }
    CompletionItemKinds2.toIcon = toIcon;
    function toLabel(kind) {
      switch (kind) {
        case 0:
          return localize(728, "Method");
        case 1:
          return localize(729, "Function");
        case 2:
          return localize(730, "Constructor");
        case 3:
          return localize(731, "Field");
        case 4:
          return localize(732, "Variable");
        case 5:
          return localize(733, "Class");
        case 6:
          return localize(734, "Struct");
        case 7:
          return localize(735, "Interface");
        case 8:
          return localize(736, "Module");
        case 9:
          return localize(737, "Property");
        case 10:
          return localize(738, "Event");
        case 11:
          return localize(739, "Operator");
        case 12:
          return localize(740, "Unit");
        case 13:
          return localize(741, "Value");
        case 14:
          return localize(742, "Constant");
        case 15:
          return localize(743, "Enum");
        case 16:
          return localize(744, "Enum Member");
        case 17:
          return localize(745, "Keyword");
        case 18:
          return localize(746, "Text");
        case 19:
          return localize(747, "Color");
        case 20:
          return localize(748, "File");
        case 21:
          return localize(749, "Reference");
        case 22:
          return localize(750, "Custom Color");
        case 23:
          return localize(751, "Folder");
        case 24:
          return localize(752, "Type Parameter");
        case 25:
          return localize(753, "User");
        case 26:
          return localize(754, "Issue");
        case 27:
          return localize(755, "Tool");
        case 28:
          return localize(756, "Snippet");
        default:
          return "";
      }
    }
    CompletionItemKinds2.toLabel = toLabel;
    const data = /* @__PURE__ */ new Map();
    data.set(
      "method",
      0
      /* CompletionItemKind.Method */
    );
    data.set(
      "function",
      1
      /* CompletionItemKind.Function */
    );
    data.set(
      "constructor",
      2
      /* CompletionItemKind.Constructor */
    );
    data.set(
      "field",
      3
      /* CompletionItemKind.Field */
    );
    data.set(
      "variable",
      4
      /* CompletionItemKind.Variable */
    );
    data.set(
      "class",
      5
      /* CompletionItemKind.Class */
    );
    data.set(
      "struct",
      6
      /* CompletionItemKind.Struct */
    );
    data.set(
      "interface",
      7
      /* CompletionItemKind.Interface */
    );
    data.set(
      "module",
      8
      /* CompletionItemKind.Module */
    );
    data.set(
      "property",
      9
      /* CompletionItemKind.Property */
    );
    data.set(
      "event",
      10
      /* CompletionItemKind.Event */
    );
    data.set(
      "operator",
      11
      /* CompletionItemKind.Operator */
    );
    data.set(
      "unit",
      12
      /* CompletionItemKind.Unit */
    );
    data.set(
      "value",
      13
      /* CompletionItemKind.Value */
    );
    data.set(
      "constant",
      14
      /* CompletionItemKind.Constant */
    );
    data.set(
      "enum",
      15
      /* CompletionItemKind.Enum */
    );
    data.set(
      "enum-member",
      16
      /* CompletionItemKind.EnumMember */
    );
    data.set(
      "enumMember",
      16
      /* CompletionItemKind.EnumMember */
    );
    data.set(
      "keyword",
      17
      /* CompletionItemKind.Keyword */
    );
    data.set(
      "snippet",
      28
      /* CompletionItemKind.Snippet */
    );
    data.set(
      "text",
      18
      /* CompletionItemKind.Text */
    );
    data.set(
      "color",
      19
      /* CompletionItemKind.Color */
    );
    data.set(
      "file",
      20
      /* CompletionItemKind.File */
    );
    data.set(
      "reference",
      21
      /* CompletionItemKind.Reference */
    );
    data.set(
      "customcolor",
      22
      /* CompletionItemKind.Customcolor */
    );
    data.set(
      "folder",
      23
      /* CompletionItemKind.Folder */
    );
    data.set(
      "type-parameter",
      24
      /* CompletionItemKind.TypeParameter */
    );
    data.set(
      "typeParameter",
      24
      /* CompletionItemKind.TypeParameter */
    );
    data.set(
      "account",
      25
      /* CompletionItemKind.User */
    );
    data.set(
      "issue",
      26
      /* CompletionItemKind.Issue */
    );
    data.set(
      "tool",
      27
      /* CompletionItemKind.Tool */
    );
    function fromString(value, strict) {
      let res = data.get(value);
      if (typeof res === "undefined" && !strict) {
        res = 9;
      }
      return res;
    }
    CompletionItemKinds2.fromString = fromString;
  })(CompletionItemKinds || (CompletionItemKinds = {}));
  var InlineCompletionTriggerKind$2;
  (function(InlineCompletionTriggerKind2) {
    InlineCompletionTriggerKind2[InlineCompletionTriggerKind2["Automatic"] = 0] = "Automatic";
    InlineCompletionTriggerKind2[InlineCompletionTriggerKind2["Explicit"] = 1] = "Explicit";
  })(InlineCompletionTriggerKind$2 || (InlineCompletionTriggerKind$2 = {}));
  var InlineCompletionHintStyle$1;
  (function(InlineCompletionHintStyle2) {
    InlineCompletionHintStyle2[InlineCompletionHintStyle2["Code"] = 1] = "Code";
    InlineCompletionHintStyle2[InlineCompletionHintStyle2["Label"] = 2] = "Label";
  })(InlineCompletionHintStyle$1 || (InlineCompletionHintStyle$1 = {}));
  var InlineCompletionEndOfLifeReasonKind$1;
  (function(InlineCompletionEndOfLifeReasonKind2) {
    InlineCompletionEndOfLifeReasonKind2[InlineCompletionEndOfLifeReasonKind2["Accepted"] = 0] = "Accepted";
    InlineCompletionEndOfLifeReasonKind2[InlineCompletionEndOfLifeReasonKind2["Rejected"] = 1] = "Rejected";
    InlineCompletionEndOfLifeReasonKind2[InlineCompletionEndOfLifeReasonKind2["Ignored"] = 2] = "Ignored";
  })(InlineCompletionEndOfLifeReasonKind$1 || (InlineCompletionEndOfLifeReasonKind$1 = {}));
  var DocumentPasteTriggerKind;
  (function(DocumentPasteTriggerKind2) {
    DocumentPasteTriggerKind2[DocumentPasteTriggerKind2["Automatic"] = 0] = "Automatic";
    DocumentPasteTriggerKind2[DocumentPasteTriggerKind2["PasteAs"] = 1] = "PasteAs";
  })(DocumentPasteTriggerKind || (DocumentPasteTriggerKind = {}));
  var SignatureHelpTriggerKind$1;
  (function(SignatureHelpTriggerKind2) {
    SignatureHelpTriggerKind2[SignatureHelpTriggerKind2["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind2[SignatureHelpTriggerKind2["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind2[SignatureHelpTriggerKind2["ContentChange"] = 3] = "ContentChange";
  })(SignatureHelpTriggerKind$1 || (SignatureHelpTriggerKind$1 = {}));
  var DocumentHighlightKind$2;
  (function(DocumentHighlightKind2) {
    DocumentHighlightKind2[DocumentHighlightKind2["Text"] = 0] = "Text";
    DocumentHighlightKind2[DocumentHighlightKind2["Read"] = 1] = "Read";
    DocumentHighlightKind2[DocumentHighlightKind2["Write"] = 2] = "Write";
  })(DocumentHighlightKind$2 || (DocumentHighlightKind$2 = {}));
  ({
    [
      17
      /* SymbolKind.Array */
    ]: localize(757, "array"),
    [
      16
      /* SymbolKind.Boolean */
    ]: localize(758, "boolean"),
    [
      4
      /* SymbolKind.Class */
    ]: localize(759, "class"),
    [
      13
      /* SymbolKind.Constant */
    ]: localize(760, "constant"),
    [
      8
      /* SymbolKind.Constructor */
    ]: localize(761, "constructor"),
    [
      9
      /* SymbolKind.Enum */
    ]: localize(762, "enumeration"),
    [
      21
      /* SymbolKind.EnumMember */
    ]: localize(763, "enumeration member"),
    [
      23
      /* SymbolKind.Event */
    ]: localize(764, "event"),
    [
      7
      /* SymbolKind.Field */
    ]: localize(765, "field"),
    [
      0
      /* SymbolKind.File */
    ]: localize(766, "file"),
    [
      11
      /* SymbolKind.Function */
    ]: localize(767, "function"),
    [
      10
      /* SymbolKind.Interface */
    ]: localize(768, "interface"),
    [
      19
      /* SymbolKind.Key */
    ]: localize(769, "key"),
    [
      5
      /* SymbolKind.Method */
    ]: localize(770, "method"),
    [
      1
      /* SymbolKind.Module */
    ]: localize(771, "module"),
    [
      2
      /* SymbolKind.Namespace */
    ]: localize(772, "namespace"),
    [
      20
      /* SymbolKind.Null */
    ]: localize(773, "null"),
    [
      15
      /* SymbolKind.Number */
    ]: localize(774, "number"),
    [
      18
      /* SymbolKind.Object */
    ]: localize(775, "object"),
    [
      24
      /* SymbolKind.Operator */
    ]: localize(776, "operator"),
    [
      3
      /* SymbolKind.Package */
    ]: localize(777, "package"),
    [
      6
      /* SymbolKind.Property */
    ]: localize(778, "property"),
    [
      14
      /* SymbolKind.String */
    ]: localize(779, "string"),
    [
      22
      /* SymbolKind.Struct */
    ]: localize(780, "struct"),
    [
      25
      /* SymbolKind.TypeParameter */
    ]: localize(781, "type parameter"),
    [
      12
      /* SymbolKind.Variable */
    ]: localize(782, "variable")
  });
  var SymbolKinds;
  (function(SymbolKinds2) {
    const byKind = /* @__PURE__ */ new Map();
    byKind.set(0, Codicon.symbolFile);
    byKind.set(1, Codicon.symbolModule);
    byKind.set(2, Codicon.symbolNamespace);
    byKind.set(3, Codicon.symbolPackage);
    byKind.set(4, Codicon.symbolClass);
    byKind.set(5, Codicon.symbolMethod);
    byKind.set(6, Codicon.symbolProperty);
    byKind.set(7, Codicon.symbolField);
    byKind.set(8, Codicon.symbolConstructor);
    byKind.set(9, Codicon.symbolEnum);
    byKind.set(10, Codicon.symbolInterface);
    byKind.set(11, Codicon.symbolFunction);
    byKind.set(12, Codicon.symbolVariable);
    byKind.set(13, Codicon.symbolConstant);
    byKind.set(14, Codicon.symbolString);
    byKind.set(15, Codicon.symbolNumber);
    byKind.set(16, Codicon.symbolBoolean);
    byKind.set(17, Codicon.symbolArray);
    byKind.set(18, Codicon.symbolObject);
    byKind.set(19, Codicon.symbolKey);
    byKind.set(20, Codicon.symbolNull);
    byKind.set(21, Codicon.symbolEnumMember);
    byKind.set(22, Codicon.symbolStruct);
    byKind.set(23, Codicon.symbolEvent);
    byKind.set(24, Codicon.symbolOperator);
    byKind.set(25, Codicon.symbolTypeParameter);
    function toIcon(kind) {
      let icon = byKind.get(kind);
      if (!icon) {
        console.info("No codicon found for SymbolKind " + kind);
        icon = Codicon.symbolProperty;
      }
      return icon;
    }
    SymbolKinds2.toIcon = toIcon;
    const byCompletionKind = /* @__PURE__ */ new Map();
    byCompletionKind.set(
      0,
      20
      /* CompletionItemKind.File */
    );
    byCompletionKind.set(
      1,
      8
      /* CompletionItemKind.Module */
    );
    byCompletionKind.set(
      2,
      8
      /* CompletionItemKind.Module */
    );
    byCompletionKind.set(
      3,
      8
      /* CompletionItemKind.Module */
    );
    byCompletionKind.set(
      4,
      5
      /* CompletionItemKind.Class */
    );
    byCompletionKind.set(
      5,
      0
      /* CompletionItemKind.Method */
    );
    byCompletionKind.set(
      6,
      9
      /* CompletionItemKind.Property */
    );
    byCompletionKind.set(
      7,
      3
      /* CompletionItemKind.Field */
    );
    byCompletionKind.set(
      8,
      2
      /* CompletionItemKind.Constructor */
    );
    byCompletionKind.set(
      9,
      15
      /* CompletionItemKind.Enum */
    );
    byCompletionKind.set(
      10,
      7
      /* CompletionItemKind.Interface */
    );
    byCompletionKind.set(
      11,
      1
      /* CompletionItemKind.Function */
    );
    byCompletionKind.set(
      12,
      4
      /* CompletionItemKind.Variable */
    );
    byCompletionKind.set(
      13,
      14
      /* CompletionItemKind.Constant */
    );
    byCompletionKind.set(
      14,
      18
      /* CompletionItemKind.Text */
    );
    byCompletionKind.set(
      15,
      13
      /* CompletionItemKind.Value */
    );
    byCompletionKind.set(
      16,
      13
      /* CompletionItemKind.Value */
    );
    byCompletionKind.set(
      17,
      13
      /* CompletionItemKind.Value */
    );
    byCompletionKind.set(
      18,
      13
      /* CompletionItemKind.Value */
    );
    byCompletionKind.set(
      19,
      17
      /* CompletionItemKind.Keyword */
    );
    byCompletionKind.set(
      20,
      13
      /* CompletionItemKind.Value */
    );
    byCompletionKind.set(
      21,
      16
      /* CompletionItemKind.EnumMember */
    );
    byCompletionKind.set(
      22,
      6
      /* CompletionItemKind.Struct */
    );
    byCompletionKind.set(
      23,
      10
      /* CompletionItemKind.Event */
    );
    byCompletionKind.set(
      24,
      11
      /* CompletionItemKind.Operator */
    );
    byCompletionKind.set(
      25,
      24
      /* CompletionItemKind.TypeParameter */
    );
    function toCompletionKind(kind) {
      let completionKind = byCompletionKind.get(kind);
      if (completionKind === void 0) {
        console.info("No completion kind found for SymbolKind " + kind);
        completionKind = 20;
      }
      return completionKind;
    }
    SymbolKinds2.toCompletionKind = toCompletionKind;
  })(SymbolKinds || (SymbolKinds = {}));
  let FoldingRangeKind$1 = (_a = class {
    /**
     * Returns a {@link FoldingRangeKind} for the given value.
     *
     * @param value of the kind.
     */
    static fromValue(value) {
      switch (value) {
        case "comment":
          return _a.Comment;
        case "imports":
          return _a.Imports;
        case "region":
          return _a.Region;
      }
      return new _a(value);
    }
    /**
     * Creates a new {@link FoldingRangeKind}.
     *
     * @param value of the kind.
     */
    constructor(value) {
      this.value = value;
    }
  }, _a.Comment = new _a("comment"), _a.Imports = new _a("imports"), _a.Region = new _a("region"), _a);
  var NewSymbolNameTag$1;
  (function(NewSymbolNameTag2) {
    NewSymbolNameTag2[NewSymbolNameTag2["AIGenerated"] = 1] = "AIGenerated";
  })(NewSymbolNameTag$1 || (NewSymbolNameTag$1 = {}));
  var NewSymbolNameTriggerKind$1;
  (function(NewSymbolNameTriggerKind2) {
    NewSymbolNameTriggerKind2[NewSymbolNameTriggerKind2["Invoke"] = 0] = "Invoke";
    NewSymbolNameTriggerKind2[NewSymbolNameTriggerKind2["Automatic"] = 1] = "Automatic";
  })(NewSymbolNameTriggerKind$1 || (NewSymbolNameTriggerKind$1 = {}));
  var Command$1;
  (function(Command2) {
    function is(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return typeof obj.id === "string" && typeof obj.title === "string";
    }
    Command2.is = is;
  })(Command$1 || (Command$1 = {}));
  var InlayHintKind$2;
  (function(InlayHintKind2) {
    InlayHintKind2[InlayHintKind2["Type"] = 1] = "Type";
    InlayHintKind2[InlayHintKind2["Parameter"] = 2] = "Parameter";
  })(InlayHintKind$2 || (InlayHintKind$2 = {}));
  new TokenizationRegistry();
  var AccessibilitySupport;
  (function(AccessibilitySupport2) {
    AccessibilitySupport2[AccessibilitySupport2["Unknown"] = 0] = "Unknown";
    AccessibilitySupport2[AccessibilitySupport2["Disabled"] = 1] = "Disabled";
    AccessibilitySupport2[AccessibilitySupport2["Enabled"] = 2] = "Enabled";
  })(AccessibilitySupport || (AccessibilitySupport = {}));
  var CodeActionTriggerType;
  (function(CodeActionTriggerType2) {
    CodeActionTriggerType2[CodeActionTriggerType2["Invoke"] = 1] = "Invoke";
    CodeActionTriggerType2[CodeActionTriggerType2["Auto"] = 2] = "Auto";
  })(CodeActionTriggerType || (CodeActionTriggerType = {}));
  var CompletionItemInsertTextRule;
  (function(CompletionItemInsertTextRule2) {
    CompletionItemInsertTextRule2[CompletionItemInsertTextRule2["None"] = 0] = "None";
    CompletionItemInsertTextRule2[CompletionItemInsertTextRule2["KeepWhitespace"] = 1] = "KeepWhitespace";
    CompletionItemInsertTextRule2[CompletionItemInsertTextRule2["InsertAsSnippet"] = 4] = "InsertAsSnippet";
  })(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));
  var CompletionItemKind$1;
  (function(CompletionItemKind2) {
    CompletionItemKind2[CompletionItemKind2["Method"] = 0] = "Method";
    CompletionItemKind2[CompletionItemKind2["Function"] = 1] = "Function";
    CompletionItemKind2[CompletionItemKind2["Constructor"] = 2] = "Constructor";
    CompletionItemKind2[CompletionItemKind2["Field"] = 3] = "Field";
    CompletionItemKind2[CompletionItemKind2["Variable"] = 4] = "Variable";
    CompletionItemKind2[CompletionItemKind2["Class"] = 5] = "Class";
    CompletionItemKind2[CompletionItemKind2["Struct"] = 6] = "Struct";
    CompletionItemKind2[CompletionItemKind2["Interface"] = 7] = "Interface";
    CompletionItemKind2[CompletionItemKind2["Module"] = 8] = "Module";
    CompletionItemKind2[CompletionItemKind2["Property"] = 9] = "Property";
    CompletionItemKind2[CompletionItemKind2["Event"] = 10] = "Event";
    CompletionItemKind2[CompletionItemKind2["Operator"] = 11] = "Operator";
    CompletionItemKind2[CompletionItemKind2["Unit"] = 12] = "Unit";
    CompletionItemKind2[CompletionItemKind2["Value"] = 13] = "Value";
    CompletionItemKind2[CompletionItemKind2["Constant"] = 14] = "Constant";
    CompletionItemKind2[CompletionItemKind2["Enum"] = 15] = "Enum";
    CompletionItemKind2[CompletionItemKind2["EnumMember"] = 16] = "EnumMember";
    CompletionItemKind2[CompletionItemKind2["Keyword"] = 17] = "Keyword";
    CompletionItemKind2[CompletionItemKind2["Text"] = 18] = "Text";
    CompletionItemKind2[CompletionItemKind2["Color"] = 19] = "Color";
    CompletionItemKind2[CompletionItemKind2["File"] = 20] = "File";
    CompletionItemKind2[CompletionItemKind2["Reference"] = 21] = "Reference";
    CompletionItemKind2[CompletionItemKind2["Customcolor"] = 22] = "Customcolor";
    CompletionItemKind2[CompletionItemKind2["Folder"] = 23] = "Folder";
    CompletionItemKind2[CompletionItemKind2["TypeParameter"] = 24] = "TypeParameter";
    CompletionItemKind2[CompletionItemKind2["User"] = 25] = "User";
    CompletionItemKind2[CompletionItemKind2["Issue"] = 26] = "Issue";
    CompletionItemKind2[CompletionItemKind2["Tool"] = 27] = "Tool";
    CompletionItemKind2[CompletionItemKind2["Snippet"] = 28] = "Snippet";
  })(CompletionItemKind$1 || (CompletionItemKind$1 = {}));
  var CompletionItemTag$1;
  (function(CompletionItemTag2) {
    CompletionItemTag2[CompletionItemTag2["Deprecated"] = 1] = "Deprecated";
  })(CompletionItemTag$1 || (CompletionItemTag$1 = {}));
  var CompletionTriggerKind;
  (function(CompletionTriggerKind2) {
    CompletionTriggerKind2[CompletionTriggerKind2["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind2[CompletionTriggerKind2["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind2[CompletionTriggerKind2["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
  })(CompletionTriggerKind || (CompletionTriggerKind = {}));
  var ContentWidgetPositionPreference;
  (function(ContentWidgetPositionPreference2) {
    ContentWidgetPositionPreference2[ContentWidgetPositionPreference2["EXACT"] = 0] = "EXACT";
    ContentWidgetPositionPreference2[ContentWidgetPositionPreference2["ABOVE"] = 1] = "ABOVE";
    ContentWidgetPositionPreference2[ContentWidgetPositionPreference2["BELOW"] = 2] = "BELOW";
  })(ContentWidgetPositionPreference || (ContentWidgetPositionPreference = {}));
  var CursorChangeReason;
  (function(CursorChangeReason2) {
    CursorChangeReason2[CursorChangeReason2["NotSet"] = 0] = "NotSet";
    CursorChangeReason2[CursorChangeReason2["ContentFlush"] = 1] = "ContentFlush";
    CursorChangeReason2[CursorChangeReason2["RecoverFromMarkers"] = 2] = "RecoverFromMarkers";
    CursorChangeReason2[CursorChangeReason2["Explicit"] = 3] = "Explicit";
    CursorChangeReason2[CursorChangeReason2["Paste"] = 4] = "Paste";
    CursorChangeReason2[CursorChangeReason2["Undo"] = 5] = "Undo";
    CursorChangeReason2[CursorChangeReason2["Redo"] = 6] = "Redo";
  })(CursorChangeReason || (CursorChangeReason = {}));
  var DefaultEndOfLine;
  (function(DefaultEndOfLine2) {
    DefaultEndOfLine2[DefaultEndOfLine2["LF"] = 1] = "LF";
    DefaultEndOfLine2[DefaultEndOfLine2["CRLF"] = 2] = "CRLF";
  })(DefaultEndOfLine || (DefaultEndOfLine = {}));
  var DocumentHighlightKind$1;
  (function(DocumentHighlightKind2) {
    DocumentHighlightKind2[DocumentHighlightKind2["Text"] = 0] = "Text";
    DocumentHighlightKind2[DocumentHighlightKind2["Read"] = 1] = "Read";
    DocumentHighlightKind2[DocumentHighlightKind2["Write"] = 2] = "Write";
  })(DocumentHighlightKind$1 || (DocumentHighlightKind$1 = {}));
  var EditorAutoIndentStrategy;
  (function(EditorAutoIndentStrategy2) {
    EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["None"] = 0] = "None";
    EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["Keep"] = 1] = "Keep";
    EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["Brackets"] = 2] = "Brackets";
    EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["Advanced"] = 3] = "Advanced";
    EditorAutoIndentStrategy2[EditorAutoIndentStrategy2["Full"] = 4] = "Full";
  })(EditorAutoIndentStrategy || (EditorAutoIndentStrategy = {}));
  var EditorOption;
  (function(EditorOption2) {
    EditorOption2[EditorOption2["acceptSuggestionOnCommitCharacter"] = 0] = "acceptSuggestionOnCommitCharacter";
    EditorOption2[EditorOption2["acceptSuggestionOnEnter"] = 1] = "acceptSuggestionOnEnter";
    EditorOption2[EditorOption2["accessibilitySupport"] = 2] = "accessibilitySupport";
    EditorOption2[EditorOption2["accessibilityPageSize"] = 3] = "accessibilityPageSize";
    EditorOption2[EditorOption2["allowOverflow"] = 4] = "allowOverflow";
    EditorOption2[EditorOption2["allowVariableLineHeights"] = 5] = "allowVariableLineHeights";
    EditorOption2[EditorOption2["allowVariableFonts"] = 6] = "allowVariableFonts";
    EditorOption2[EditorOption2["allowVariableFontsInAccessibilityMode"] = 7] = "allowVariableFontsInAccessibilityMode";
    EditorOption2[EditorOption2["ariaLabel"] = 8] = "ariaLabel";
    EditorOption2[EditorOption2["ariaRequired"] = 9] = "ariaRequired";
    EditorOption2[EditorOption2["autoClosingBrackets"] = 10] = "autoClosingBrackets";
    EditorOption2[EditorOption2["autoClosingComments"] = 11] = "autoClosingComments";
    EditorOption2[EditorOption2["screenReaderAnnounceInlineSuggestion"] = 12] = "screenReaderAnnounceInlineSuggestion";
    EditorOption2[EditorOption2["autoClosingDelete"] = 13] = "autoClosingDelete";
    EditorOption2[EditorOption2["autoClosingOvertype"] = 14] = "autoClosingOvertype";
    EditorOption2[EditorOption2["autoClosingQuotes"] = 15] = "autoClosingQuotes";
    EditorOption2[EditorOption2["autoIndent"] = 16] = "autoIndent";
    EditorOption2[EditorOption2["autoIndentOnPaste"] = 17] = "autoIndentOnPaste";
    EditorOption2[EditorOption2["autoIndentOnPasteWithinString"] = 18] = "autoIndentOnPasteWithinString";
    EditorOption2[EditorOption2["automaticLayout"] = 19] = "automaticLayout";
    EditorOption2[EditorOption2["autoSurround"] = 20] = "autoSurround";
    EditorOption2[EditorOption2["bracketPairColorization"] = 21] = "bracketPairColorization";
    EditorOption2[EditorOption2["guides"] = 22] = "guides";
    EditorOption2[EditorOption2["codeLens"] = 23] = "codeLens";
    EditorOption2[EditorOption2["codeLensFontFamily"] = 24] = "codeLensFontFamily";
    EditorOption2[EditorOption2["codeLensFontSize"] = 25] = "codeLensFontSize";
    EditorOption2[EditorOption2["colorDecorators"] = 26] = "colorDecorators";
    EditorOption2[EditorOption2["colorDecoratorsLimit"] = 27] = "colorDecoratorsLimit";
    EditorOption2[EditorOption2["columnSelection"] = 28] = "columnSelection";
    EditorOption2[EditorOption2["comments"] = 29] = "comments";
    EditorOption2[EditorOption2["contextmenu"] = 30] = "contextmenu";
    EditorOption2[EditorOption2["copyWithSyntaxHighlighting"] = 31] = "copyWithSyntaxHighlighting";
    EditorOption2[EditorOption2["cursorBlinking"] = 32] = "cursorBlinking";
    EditorOption2[EditorOption2["cursorSmoothCaretAnimation"] = 33] = "cursorSmoothCaretAnimation";
    EditorOption2[EditorOption2["cursorStyle"] = 34] = "cursorStyle";
    EditorOption2[EditorOption2["cursorSurroundingLines"] = 35] = "cursorSurroundingLines";
    EditorOption2[EditorOption2["cursorSurroundingLinesStyle"] = 36] = "cursorSurroundingLinesStyle";
    EditorOption2[EditorOption2["cursorWidth"] = 37] = "cursorWidth";
    EditorOption2[EditorOption2["cursorHeight"] = 38] = "cursorHeight";
    EditorOption2[EditorOption2["disableLayerHinting"] = 39] = "disableLayerHinting";
    EditorOption2[EditorOption2["disableMonospaceOptimizations"] = 40] = "disableMonospaceOptimizations";
    EditorOption2[EditorOption2["domReadOnly"] = 41] = "domReadOnly";
    EditorOption2[EditorOption2["dragAndDrop"] = 42] = "dragAndDrop";
    EditorOption2[EditorOption2["dropIntoEditor"] = 43] = "dropIntoEditor";
    EditorOption2[EditorOption2["editContext"] = 44] = "editContext";
    EditorOption2[EditorOption2["emptySelectionClipboard"] = 45] = "emptySelectionClipboard";
    EditorOption2[EditorOption2["experimentalGpuAcceleration"] = 46] = "experimentalGpuAcceleration";
    EditorOption2[EditorOption2["experimentalWhitespaceRendering"] = 47] = "experimentalWhitespaceRendering";
    EditorOption2[EditorOption2["extraEditorClassName"] = 48] = "extraEditorClassName";
    EditorOption2[EditorOption2["fastScrollSensitivity"] = 49] = "fastScrollSensitivity";
    EditorOption2[EditorOption2["find"] = 50] = "find";
    EditorOption2[EditorOption2["fixedOverflowWidgets"] = 51] = "fixedOverflowWidgets";
    EditorOption2[EditorOption2["folding"] = 52] = "folding";
    EditorOption2[EditorOption2["foldingStrategy"] = 53] = "foldingStrategy";
    EditorOption2[EditorOption2["foldingHighlight"] = 54] = "foldingHighlight";
    EditorOption2[EditorOption2["foldingImportsByDefault"] = 55] = "foldingImportsByDefault";
    EditorOption2[EditorOption2["foldingMaximumRegions"] = 56] = "foldingMaximumRegions";
    EditorOption2[EditorOption2["unfoldOnClickAfterEndOfLine"] = 57] = "unfoldOnClickAfterEndOfLine";
    EditorOption2[EditorOption2["fontFamily"] = 58] = "fontFamily";
    EditorOption2[EditorOption2["fontInfo"] = 59] = "fontInfo";
    EditorOption2[EditorOption2["fontLigatures"] = 60] = "fontLigatures";
    EditorOption2[EditorOption2["fontSize"] = 61] = "fontSize";
    EditorOption2[EditorOption2["fontWeight"] = 62] = "fontWeight";
    EditorOption2[EditorOption2["fontVariations"] = 63] = "fontVariations";
    EditorOption2[EditorOption2["formatOnPaste"] = 64] = "formatOnPaste";
    EditorOption2[EditorOption2["formatOnType"] = 65] = "formatOnType";
    EditorOption2[EditorOption2["glyphMargin"] = 66] = "glyphMargin";
    EditorOption2[EditorOption2["gotoLocation"] = 67] = "gotoLocation";
    EditorOption2[EditorOption2["hideCursorInOverviewRuler"] = 68] = "hideCursorInOverviewRuler";
    EditorOption2[EditorOption2["hover"] = 69] = "hover";
    EditorOption2[EditorOption2["inDiffEditor"] = 70] = "inDiffEditor";
    EditorOption2[EditorOption2["inlineSuggest"] = 71] = "inlineSuggest";
    EditorOption2[EditorOption2["letterSpacing"] = 72] = "letterSpacing";
    EditorOption2[EditorOption2["lightbulb"] = 73] = "lightbulb";
    EditorOption2[EditorOption2["lineDecorationsWidth"] = 74] = "lineDecorationsWidth";
    EditorOption2[EditorOption2["lineHeight"] = 75] = "lineHeight";
    EditorOption2[EditorOption2["lineNumbers"] = 76] = "lineNumbers";
    EditorOption2[EditorOption2["lineNumbersMinChars"] = 77] = "lineNumbersMinChars";
    EditorOption2[EditorOption2["linkedEditing"] = 78] = "linkedEditing";
    EditorOption2[EditorOption2["links"] = 79] = "links";
    EditorOption2[EditorOption2["matchBrackets"] = 80] = "matchBrackets";
    EditorOption2[EditorOption2["minimap"] = 81] = "minimap";
    EditorOption2[EditorOption2["mouseStyle"] = 82] = "mouseStyle";
    EditorOption2[EditorOption2["mouseWheelScrollSensitivity"] = 83] = "mouseWheelScrollSensitivity";
    EditorOption2[EditorOption2["mouseWheelZoom"] = 84] = "mouseWheelZoom";
    EditorOption2[EditorOption2["multiCursorMergeOverlapping"] = 85] = "multiCursorMergeOverlapping";
    EditorOption2[EditorOption2["multiCursorModifier"] = 86] = "multiCursorModifier";
    EditorOption2[EditorOption2["mouseMiddleClickAction"] = 87] = "mouseMiddleClickAction";
    EditorOption2[EditorOption2["multiCursorPaste"] = 88] = "multiCursorPaste";
    EditorOption2[EditorOption2["multiCursorLimit"] = 89] = "multiCursorLimit";
    EditorOption2[EditorOption2["occurrencesHighlight"] = 90] = "occurrencesHighlight";
    EditorOption2[EditorOption2["occurrencesHighlightDelay"] = 91] = "occurrencesHighlightDelay";
    EditorOption2[EditorOption2["overtypeCursorStyle"] = 92] = "overtypeCursorStyle";
    EditorOption2[EditorOption2["overtypeOnPaste"] = 93] = "overtypeOnPaste";
    EditorOption2[EditorOption2["overviewRulerBorder"] = 94] = "overviewRulerBorder";
    EditorOption2[EditorOption2["overviewRulerLanes"] = 95] = "overviewRulerLanes";
    EditorOption2[EditorOption2["padding"] = 96] = "padding";
    EditorOption2[EditorOption2["pasteAs"] = 97] = "pasteAs";
    EditorOption2[EditorOption2["parameterHints"] = 98] = "parameterHints";
    EditorOption2[EditorOption2["peekWidgetDefaultFocus"] = 99] = "peekWidgetDefaultFocus";
    EditorOption2[EditorOption2["placeholder"] = 100] = "placeholder";
    EditorOption2[EditorOption2["definitionLinkOpensInPeek"] = 101] = "definitionLinkOpensInPeek";
    EditorOption2[EditorOption2["quickSuggestions"] = 102] = "quickSuggestions";
    EditorOption2[EditorOption2["quickSuggestionsDelay"] = 103] = "quickSuggestionsDelay";
    EditorOption2[EditorOption2["readOnly"] = 104] = "readOnly";
    EditorOption2[EditorOption2["readOnlyMessage"] = 105] = "readOnlyMessage";
    EditorOption2[EditorOption2["renameOnType"] = 106] = "renameOnType";
    EditorOption2[EditorOption2["renderRichScreenReaderContent"] = 107] = "renderRichScreenReaderContent";
    EditorOption2[EditorOption2["renderControlCharacters"] = 108] = "renderControlCharacters";
    EditorOption2[EditorOption2["renderFinalNewline"] = 109] = "renderFinalNewline";
    EditorOption2[EditorOption2["renderLineHighlight"] = 110] = "renderLineHighlight";
    EditorOption2[EditorOption2["renderLineHighlightOnlyWhenFocus"] = 111] = "renderLineHighlightOnlyWhenFocus";
    EditorOption2[EditorOption2["renderValidationDecorations"] = 112] = "renderValidationDecorations";
    EditorOption2[EditorOption2["renderWhitespace"] = 113] = "renderWhitespace";
    EditorOption2[EditorOption2["revealHorizontalRightPadding"] = 114] = "revealHorizontalRightPadding";
    EditorOption2[EditorOption2["roundedSelection"] = 115] = "roundedSelection";
    EditorOption2[EditorOption2["rulers"] = 116] = "rulers";
    EditorOption2[EditorOption2["scrollbar"] = 117] = "scrollbar";
    EditorOption2[EditorOption2["scrollBeyondLastColumn"] = 118] = "scrollBeyondLastColumn";
    EditorOption2[EditorOption2["scrollBeyondLastLine"] = 119] = "scrollBeyondLastLine";
    EditorOption2[EditorOption2["scrollPredominantAxis"] = 120] = "scrollPredominantAxis";
    EditorOption2[EditorOption2["selectionClipboard"] = 121] = "selectionClipboard";
    EditorOption2[EditorOption2["selectionHighlight"] = 122] = "selectionHighlight";
    EditorOption2[EditorOption2["selectionHighlightMaxLength"] = 123] = "selectionHighlightMaxLength";
    EditorOption2[EditorOption2["selectionHighlightMultiline"] = 124] = "selectionHighlightMultiline";
    EditorOption2[EditorOption2["selectOnLineNumbers"] = 125] = "selectOnLineNumbers";
    EditorOption2[EditorOption2["showFoldingControls"] = 126] = "showFoldingControls";
    EditorOption2[EditorOption2["showUnused"] = 127] = "showUnused";
    EditorOption2[EditorOption2["snippetSuggestions"] = 128] = "snippetSuggestions";
    EditorOption2[EditorOption2["smartSelect"] = 129] = "smartSelect";
    EditorOption2[EditorOption2["smoothScrolling"] = 130] = "smoothScrolling";
    EditorOption2[EditorOption2["stickyScroll"] = 131] = "stickyScroll";
    EditorOption2[EditorOption2["stickyTabStops"] = 132] = "stickyTabStops";
    EditorOption2[EditorOption2["stopRenderingLineAfter"] = 133] = "stopRenderingLineAfter";
    EditorOption2[EditorOption2["suggest"] = 134] = "suggest";
    EditorOption2[EditorOption2["suggestFontSize"] = 135] = "suggestFontSize";
    EditorOption2[EditorOption2["suggestLineHeight"] = 136] = "suggestLineHeight";
    EditorOption2[EditorOption2["suggestOnTriggerCharacters"] = 137] = "suggestOnTriggerCharacters";
    EditorOption2[EditorOption2["suggestSelection"] = 138] = "suggestSelection";
    EditorOption2[EditorOption2["tabCompletion"] = 139] = "tabCompletion";
    EditorOption2[EditorOption2["tabIndex"] = 140] = "tabIndex";
    EditorOption2[EditorOption2["trimWhitespaceOnDelete"] = 141] = "trimWhitespaceOnDelete";
    EditorOption2[EditorOption2["unicodeHighlighting"] = 142] = "unicodeHighlighting";
    EditorOption2[EditorOption2["unusualLineTerminators"] = 143] = "unusualLineTerminators";
    EditorOption2[EditorOption2["useShadowDOM"] = 144] = "useShadowDOM";
    EditorOption2[EditorOption2["useTabStops"] = 145] = "useTabStops";
    EditorOption2[EditorOption2["wordBreak"] = 146] = "wordBreak";
    EditorOption2[EditorOption2["wordSegmenterLocales"] = 147] = "wordSegmenterLocales";
    EditorOption2[EditorOption2["wordSeparators"] = 148] = "wordSeparators";
    EditorOption2[EditorOption2["wordWrap"] = 149] = "wordWrap";
    EditorOption2[EditorOption2["wordWrapBreakAfterCharacters"] = 150] = "wordWrapBreakAfterCharacters";
    EditorOption2[EditorOption2["wordWrapBreakBeforeCharacters"] = 151] = "wordWrapBreakBeforeCharacters";
    EditorOption2[EditorOption2["wordWrapColumn"] = 152] = "wordWrapColumn";
    EditorOption2[EditorOption2["wordWrapOverride1"] = 153] = "wordWrapOverride1";
    EditorOption2[EditorOption2["wordWrapOverride2"] = 154] = "wordWrapOverride2";
    EditorOption2[EditorOption2["wrappingIndent"] = 155] = "wrappingIndent";
    EditorOption2[EditorOption2["wrappingStrategy"] = 156] = "wrappingStrategy";
    EditorOption2[EditorOption2["showDeprecated"] = 157] = "showDeprecated";
    EditorOption2[EditorOption2["inertialScroll"] = 158] = "inertialScroll";
    EditorOption2[EditorOption2["inlayHints"] = 159] = "inlayHints";
    EditorOption2[EditorOption2["wrapOnEscapedLineFeeds"] = 160] = "wrapOnEscapedLineFeeds";
    EditorOption2[EditorOption2["effectiveCursorStyle"] = 161] = "effectiveCursorStyle";
    EditorOption2[EditorOption2["editorClassName"] = 162] = "editorClassName";
    EditorOption2[EditorOption2["pixelRatio"] = 163] = "pixelRatio";
    EditorOption2[EditorOption2["tabFocusMode"] = 164] = "tabFocusMode";
    EditorOption2[EditorOption2["layoutInfo"] = 165] = "layoutInfo";
    EditorOption2[EditorOption2["wrappingInfo"] = 166] = "wrappingInfo";
    EditorOption2[EditorOption2["defaultColorDecorators"] = 167] = "defaultColorDecorators";
    EditorOption2[EditorOption2["colorDecoratorsActivatedOn"] = 168] = "colorDecoratorsActivatedOn";
    EditorOption2[EditorOption2["inlineCompletionsAccessibilityVerbose"] = 169] = "inlineCompletionsAccessibilityVerbose";
    EditorOption2[EditorOption2["effectiveEditContext"] = 170] = "effectiveEditContext";
    EditorOption2[EditorOption2["scrollOnMiddleClick"] = 171] = "scrollOnMiddleClick";
    EditorOption2[EditorOption2["effectiveAllowVariableFonts"] = 172] = "effectiveAllowVariableFonts";
  })(EditorOption || (EditorOption = {}));
  var EndOfLinePreference;
  (function(EndOfLinePreference2) {
    EndOfLinePreference2[EndOfLinePreference2["TextDefined"] = 0] = "TextDefined";
    EndOfLinePreference2[EndOfLinePreference2["LF"] = 1] = "LF";
    EndOfLinePreference2[EndOfLinePreference2["CRLF"] = 2] = "CRLF";
  })(EndOfLinePreference || (EndOfLinePreference = {}));
  var EndOfLineSequence;
  (function(EndOfLineSequence2) {
    EndOfLineSequence2[EndOfLineSequence2["LF"] = 0] = "LF";
    EndOfLineSequence2[EndOfLineSequence2["CRLF"] = 1] = "CRLF";
  })(EndOfLineSequence || (EndOfLineSequence = {}));
  var GlyphMarginLane$1;
  (function(GlyphMarginLane2) {
    GlyphMarginLane2[GlyphMarginLane2["Left"] = 1] = "Left";
    GlyphMarginLane2[GlyphMarginLane2["Center"] = 2] = "Center";
    GlyphMarginLane2[GlyphMarginLane2["Right"] = 3] = "Right";
  })(GlyphMarginLane$1 || (GlyphMarginLane$1 = {}));
  var HoverVerbosityAction;
  (function(HoverVerbosityAction2) {
    HoverVerbosityAction2[HoverVerbosityAction2["Increase"] = 0] = "Increase";
    HoverVerbosityAction2[HoverVerbosityAction2["Decrease"] = 1] = "Decrease";
  })(HoverVerbosityAction || (HoverVerbosityAction = {}));
  var IndentAction;
  (function(IndentAction2) {
    IndentAction2[IndentAction2["None"] = 0] = "None";
    IndentAction2[IndentAction2["Indent"] = 1] = "Indent";
    IndentAction2[IndentAction2["IndentOutdent"] = 2] = "IndentOutdent";
    IndentAction2[IndentAction2["Outdent"] = 3] = "Outdent";
  })(IndentAction || (IndentAction = {}));
  var InjectedTextCursorStops$1;
  (function(InjectedTextCursorStops2) {
    InjectedTextCursorStops2[InjectedTextCursorStops2["Both"] = 0] = "Both";
    InjectedTextCursorStops2[InjectedTextCursorStops2["Right"] = 1] = "Right";
    InjectedTextCursorStops2[InjectedTextCursorStops2["Left"] = 2] = "Left";
    InjectedTextCursorStops2[InjectedTextCursorStops2["None"] = 3] = "None";
  })(InjectedTextCursorStops$1 || (InjectedTextCursorStops$1 = {}));
  var InlayHintKind$1;
  (function(InlayHintKind2) {
    InlayHintKind2[InlayHintKind2["Type"] = 1] = "Type";
    InlayHintKind2[InlayHintKind2["Parameter"] = 2] = "Parameter";
  })(InlayHintKind$1 || (InlayHintKind$1 = {}));
  var InlineCompletionEndOfLifeReasonKind;
  (function(InlineCompletionEndOfLifeReasonKind2) {
    InlineCompletionEndOfLifeReasonKind2[InlineCompletionEndOfLifeReasonKind2["Accepted"] = 0] = "Accepted";
    InlineCompletionEndOfLifeReasonKind2[InlineCompletionEndOfLifeReasonKind2["Rejected"] = 1] = "Rejected";
    InlineCompletionEndOfLifeReasonKind2[InlineCompletionEndOfLifeReasonKind2["Ignored"] = 2] = "Ignored";
  })(InlineCompletionEndOfLifeReasonKind || (InlineCompletionEndOfLifeReasonKind = {}));
  var InlineCompletionHintStyle;
  (function(InlineCompletionHintStyle2) {
    InlineCompletionHintStyle2[InlineCompletionHintStyle2["Code"] = 1] = "Code";
    InlineCompletionHintStyle2[InlineCompletionHintStyle2["Label"] = 2] = "Label";
  })(InlineCompletionHintStyle || (InlineCompletionHintStyle = {}));
  var InlineCompletionTriggerKind$1;
  (function(InlineCompletionTriggerKind2) {
    InlineCompletionTriggerKind2[InlineCompletionTriggerKind2["Automatic"] = 0] = "Automatic";
    InlineCompletionTriggerKind2[InlineCompletionTriggerKind2["Explicit"] = 1] = "Explicit";
  })(InlineCompletionTriggerKind$1 || (InlineCompletionTriggerKind$1 = {}));
  var KeyCode;
  (function(KeyCode2) {
    KeyCode2[KeyCode2["DependsOnKbLayout"] = -1] = "DependsOnKbLayout";
    KeyCode2[KeyCode2["Unknown"] = 0] = "Unknown";
    KeyCode2[KeyCode2["Backspace"] = 1] = "Backspace";
    KeyCode2[KeyCode2["Tab"] = 2] = "Tab";
    KeyCode2[KeyCode2["Enter"] = 3] = "Enter";
    KeyCode2[KeyCode2["Shift"] = 4] = "Shift";
    KeyCode2[KeyCode2["Ctrl"] = 5] = "Ctrl";
    KeyCode2[KeyCode2["Alt"] = 6] = "Alt";
    KeyCode2[KeyCode2["PauseBreak"] = 7] = "PauseBreak";
    KeyCode2[KeyCode2["CapsLock"] = 8] = "CapsLock";
    KeyCode2[KeyCode2["Escape"] = 9] = "Escape";
    KeyCode2[KeyCode2["Space"] = 10] = "Space";
    KeyCode2[KeyCode2["PageUp"] = 11] = "PageUp";
    KeyCode2[KeyCode2["PageDown"] = 12] = "PageDown";
    KeyCode2[KeyCode2["End"] = 13] = "End";
    KeyCode2[KeyCode2["Home"] = 14] = "Home";
    KeyCode2[KeyCode2["LeftArrow"] = 15] = "LeftArrow";
    KeyCode2[KeyCode2["UpArrow"] = 16] = "UpArrow";
    KeyCode2[KeyCode2["RightArrow"] = 17] = "RightArrow";
    KeyCode2[KeyCode2["DownArrow"] = 18] = "DownArrow";
    KeyCode2[KeyCode2["Insert"] = 19] = "Insert";
    KeyCode2[KeyCode2["Delete"] = 20] = "Delete";
    KeyCode2[KeyCode2["Digit0"] = 21] = "Digit0";
    KeyCode2[KeyCode2["Digit1"] = 22] = "Digit1";
    KeyCode2[KeyCode2["Digit2"] = 23] = "Digit2";
    KeyCode2[KeyCode2["Digit3"] = 24] = "Digit3";
    KeyCode2[KeyCode2["Digit4"] = 25] = "Digit4";
    KeyCode2[KeyCode2["Digit5"] = 26] = "Digit5";
    KeyCode2[KeyCode2["Digit6"] = 27] = "Digit6";
    KeyCode2[KeyCode2["Digit7"] = 28] = "Digit7";
    KeyCode2[KeyCode2["Digit8"] = 29] = "Digit8";
    KeyCode2[KeyCode2["Digit9"] = 30] = "Digit9";
    KeyCode2[KeyCode2["KeyA"] = 31] = "KeyA";
    KeyCode2[KeyCode2["KeyB"] = 32] = "KeyB";
    KeyCode2[KeyCode2["KeyC"] = 33] = "KeyC";
    KeyCode2[KeyCode2["KeyD"] = 34] = "KeyD";
    KeyCode2[KeyCode2["KeyE"] = 35] = "KeyE";
    KeyCode2[KeyCode2["KeyF"] = 36] = "KeyF";
    KeyCode2[KeyCode2["KeyG"] = 37] = "KeyG";
    KeyCode2[KeyCode2["KeyH"] = 38] = "KeyH";
    KeyCode2[KeyCode2["KeyI"] = 39] = "KeyI";
    KeyCode2[KeyCode2["KeyJ"] = 40] = "KeyJ";
    KeyCode2[KeyCode2["KeyK"] = 41] = "KeyK";
    KeyCode2[KeyCode2["KeyL"] = 42] = "KeyL";
    KeyCode2[KeyCode2["KeyM"] = 43] = "KeyM";
    KeyCode2[KeyCode2["KeyN"] = 44] = "KeyN";
    KeyCode2[KeyCode2["KeyO"] = 45] = "KeyO";
    KeyCode2[KeyCode2["KeyP"] = 46] = "KeyP";
    KeyCode2[KeyCode2["KeyQ"] = 47] = "KeyQ";
    KeyCode2[KeyCode2["KeyR"] = 48] = "KeyR";
    KeyCode2[KeyCode2["KeyS"] = 49] = "KeyS";
    KeyCode2[KeyCode2["KeyT"] = 50] = "KeyT";
    KeyCode2[KeyCode2["KeyU"] = 51] = "KeyU";
    KeyCode2[KeyCode2["KeyV"] = 52] = "KeyV";
    KeyCode2[KeyCode2["KeyW"] = 53] = "KeyW";
    KeyCode2[KeyCode2["KeyX"] = 54] = "KeyX";
    KeyCode2[KeyCode2["KeyY"] = 55] = "KeyY";
    KeyCode2[KeyCode2["KeyZ"] = 56] = "KeyZ";
    KeyCode2[KeyCode2["Meta"] = 57] = "Meta";
    KeyCode2[KeyCode2["ContextMenu"] = 58] = "ContextMenu";
    KeyCode2[KeyCode2["F1"] = 59] = "F1";
    KeyCode2[KeyCode2["F2"] = 60] = "F2";
    KeyCode2[KeyCode2["F3"] = 61] = "F3";
    KeyCode2[KeyCode2["F4"] = 62] = "F4";
    KeyCode2[KeyCode2["F5"] = 63] = "F5";
    KeyCode2[KeyCode2["F6"] = 64] = "F6";
    KeyCode2[KeyCode2["F7"] = 65] = "F7";
    KeyCode2[KeyCode2["F8"] = 66] = "F8";
    KeyCode2[KeyCode2["F9"] = 67] = "F9";
    KeyCode2[KeyCode2["F10"] = 68] = "F10";
    KeyCode2[KeyCode2["F11"] = 69] = "F11";
    KeyCode2[KeyCode2["F12"] = 70] = "F12";
    KeyCode2[KeyCode2["F13"] = 71] = "F13";
    KeyCode2[KeyCode2["F14"] = 72] = "F14";
    KeyCode2[KeyCode2["F15"] = 73] = "F15";
    KeyCode2[KeyCode2["F16"] = 74] = "F16";
    KeyCode2[KeyCode2["F17"] = 75] = "F17";
    KeyCode2[KeyCode2["F18"] = 76] = "F18";
    KeyCode2[KeyCode2["F19"] = 77] = "F19";
    KeyCode2[KeyCode2["F20"] = 78] = "F20";
    KeyCode2[KeyCode2["F21"] = 79] = "F21";
    KeyCode2[KeyCode2["F22"] = 80] = "F22";
    KeyCode2[KeyCode2["F23"] = 81] = "F23";
    KeyCode2[KeyCode2["F24"] = 82] = "F24";
    KeyCode2[KeyCode2["NumLock"] = 83] = "NumLock";
    KeyCode2[KeyCode2["ScrollLock"] = 84] = "ScrollLock";
    KeyCode2[KeyCode2["Semicolon"] = 85] = "Semicolon";
    KeyCode2[KeyCode2["Equal"] = 86] = "Equal";
    KeyCode2[KeyCode2["Comma"] = 87] = "Comma";
    KeyCode2[KeyCode2["Minus"] = 88] = "Minus";
    KeyCode2[KeyCode2["Period"] = 89] = "Period";
    KeyCode2[KeyCode2["Slash"] = 90] = "Slash";
    KeyCode2[KeyCode2["Backquote"] = 91] = "Backquote";
    KeyCode2[KeyCode2["BracketLeft"] = 92] = "BracketLeft";
    KeyCode2[KeyCode2["Backslash"] = 93] = "Backslash";
    KeyCode2[KeyCode2["BracketRight"] = 94] = "BracketRight";
    KeyCode2[KeyCode2["Quote"] = 95] = "Quote";
    KeyCode2[KeyCode2["OEM_8"] = 96] = "OEM_8";
    KeyCode2[KeyCode2["IntlBackslash"] = 97] = "IntlBackslash";
    KeyCode2[KeyCode2["Numpad0"] = 98] = "Numpad0";
    KeyCode2[KeyCode2["Numpad1"] = 99] = "Numpad1";
    KeyCode2[KeyCode2["Numpad2"] = 100] = "Numpad2";
    KeyCode2[KeyCode2["Numpad3"] = 101] = "Numpad3";
    KeyCode2[KeyCode2["Numpad4"] = 102] = "Numpad4";
    KeyCode2[KeyCode2["Numpad5"] = 103] = "Numpad5";
    KeyCode2[KeyCode2["Numpad6"] = 104] = "Numpad6";
    KeyCode2[KeyCode2["Numpad7"] = 105] = "Numpad7";
    KeyCode2[KeyCode2["Numpad8"] = 106] = "Numpad8";
    KeyCode2[KeyCode2["Numpad9"] = 107] = "Numpad9";
    KeyCode2[KeyCode2["NumpadMultiply"] = 108] = "NumpadMultiply";
    KeyCode2[KeyCode2["NumpadAdd"] = 109] = "NumpadAdd";
    KeyCode2[KeyCode2["NUMPAD_SEPARATOR"] = 110] = "NUMPAD_SEPARATOR";
    KeyCode2[KeyCode2["NumpadSubtract"] = 111] = "NumpadSubtract";
    KeyCode2[KeyCode2["NumpadDecimal"] = 112] = "NumpadDecimal";
    KeyCode2[KeyCode2["NumpadDivide"] = 113] = "NumpadDivide";
    KeyCode2[KeyCode2["KEY_IN_COMPOSITION"] = 114] = "KEY_IN_COMPOSITION";
    KeyCode2[KeyCode2["ABNT_C1"] = 115] = "ABNT_C1";
    KeyCode2[KeyCode2["ABNT_C2"] = 116] = "ABNT_C2";
    KeyCode2[KeyCode2["AudioVolumeMute"] = 117] = "AudioVolumeMute";
    KeyCode2[KeyCode2["AudioVolumeUp"] = 118] = "AudioVolumeUp";
    KeyCode2[KeyCode2["AudioVolumeDown"] = 119] = "AudioVolumeDown";
    KeyCode2[KeyCode2["BrowserSearch"] = 120] = "BrowserSearch";
    KeyCode2[KeyCode2["BrowserHome"] = 121] = "BrowserHome";
    KeyCode2[KeyCode2["BrowserBack"] = 122] = "BrowserBack";
    KeyCode2[KeyCode2["BrowserForward"] = 123] = "BrowserForward";
    KeyCode2[KeyCode2["MediaTrackNext"] = 124] = "MediaTrackNext";
    KeyCode2[KeyCode2["MediaTrackPrevious"] = 125] = "MediaTrackPrevious";
    KeyCode2[KeyCode2["MediaStop"] = 126] = "MediaStop";
    KeyCode2[KeyCode2["MediaPlayPause"] = 127] = "MediaPlayPause";
    KeyCode2[KeyCode2["LaunchMediaPlayer"] = 128] = "LaunchMediaPlayer";
    KeyCode2[KeyCode2["LaunchMail"] = 129] = "LaunchMail";
    KeyCode2[KeyCode2["LaunchApp2"] = 130] = "LaunchApp2";
    KeyCode2[KeyCode2["Clear"] = 131] = "Clear";
    KeyCode2[KeyCode2["MAX_VALUE"] = 132] = "MAX_VALUE";
  })(KeyCode || (KeyCode = {}));
  var MarkerSeverity;
  (function(MarkerSeverity2) {
    MarkerSeverity2[MarkerSeverity2["Hint"] = 1] = "Hint";
    MarkerSeverity2[MarkerSeverity2["Info"] = 2] = "Info";
    MarkerSeverity2[MarkerSeverity2["Warning"] = 4] = "Warning";
    MarkerSeverity2[MarkerSeverity2["Error"] = 8] = "Error";
  })(MarkerSeverity || (MarkerSeverity = {}));
  var MarkerTag;
  (function(MarkerTag2) {
    MarkerTag2[MarkerTag2["Unnecessary"] = 1] = "Unnecessary";
    MarkerTag2[MarkerTag2["Deprecated"] = 2] = "Deprecated";
  })(MarkerTag || (MarkerTag = {}));
  var MinimapPosition;
  (function(MinimapPosition2) {
    MinimapPosition2[MinimapPosition2["Inline"] = 1] = "Inline";
    MinimapPosition2[MinimapPosition2["Gutter"] = 2] = "Gutter";
  })(MinimapPosition || (MinimapPosition = {}));
  var MinimapSectionHeaderStyle;
  (function(MinimapSectionHeaderStyle2) {
    MinimapSectionHeaderStyle2[MinimapSectionHeaderStyle2["Normal"] = 1] = "Normal";
    MinimapSectionHeaderStyle2[MinimapSectionHeaderStyle2["Underlined"] = 2] = "Underlined";
  })(MinimapSectionHeaderStyle || (MinimapSectionHeaderStyle = {}));
  var MouseTargetType;
  (function(MouseTargetType2) {
    MouseTargetType2[MouseTargetType2["UNKNOWN"] = 0] = "UNKNOWN";
    MouseTargetType2[MouseTargetType2["TEXTAREA"] = 1] = "TEXTAREA";
    MouseTargetType2[MouseTargetType2["GUTTER_GLYPH_MARGIN"] = 2] = "GUTTER_GLYPH_MARGIN";
    MouseTargetType2[MouseTargetType2["GUTTER_LINE_NUMBERS"] = 3] = "GUTTER_LINE_NUMBERS";
    MouseTargetType2[MouseTargetType2["GUTTER_LINE_DECORATIONS"] = 4] = "GUTTER_LINE_DECORATIONS";
    MouseTargetType2[MouseTargetType2["GUTTER_VIEW_ZONE"] = 5] = "GUTTER_VIEW_ZONE";
    MouseTargetType2[MouseTargetType2["CONTENT_TEXT"] = 6] = "CONTENT_TEXT";
    MouseTargetType2[MouseTargetType2["CONTENT_EMPTY"] = 7] = "CONTENT_EMPTY";
    MouseTargetType2[MouseTargetType2["CONTENT_VIEW_ZONE"] = 8] = "CONTENT_VIEW_ZONE";
    MouseTargetType2[MouseTargetType2["CONTENT_WIDGET"] = 9] = "CONTENT_WIDGET";
    MouseTargetType2[MouseTargetType2["OVERVIEW_RULER"] = 10] = "OVERVIEW_RULER";
    MouseTargetType2[MouseTargetType2["SCROLLBAR"] = 11] = "SCROLLBAR";
    MouseTargetType2[MouseTargetType2["OVERLAY_WIDGET"] = 12] = "OVERLAY_WIDGET";
    MouseTargetType2[MouseTargetType2["OUTSIDE_EDITOR"] = 13] = "OUTSIDE_EDITOR";
  })(MouseTargetType || (MouseTargetType = {}));
  var NewSymbolNameTag;
  (function(NewSymbolNameTag2) {
    NewSymbolNameTag2[NewSymbolNameTag2["AIGenerated"] = 1] = "AIGenerated";
  })(NewSymbolNameTag || (NewSymbolNameTag = {}));
  var NewSymbolNameTriggerKind;
  (function(NewSymbolNameTriggerKind2) {
    NewSymbolNameTriggerKind2[NewSymbolNameTriggerKind2["Invoke"] = 0] = "Invoke";
    NewSymbolNameTriggerKind2[NewSymbolNameTriggerKind2["Automatic"] = 1] = "Automatic";
  })(NewSymbolNameTriggerKind || (NewSymbolNameTriggerKind = {}));
  var OverlayWidgetPositionPreference;
  (function(OverlayWidgetPositionPreference2) {
    OverlayWidgetPositionPreference2[OverlayWidgetPositionPreference2["TOP_RIGHT_CORNER"] = 0] = "TOP_RIGHT_CORNER";
    OverlayWidgetPositionPreference2[OverlayWidgetPositionPreference2["BOTTOM_RIGHT_CORNER"] = 1] = "BOTTOM_RIGHT_CORNER";
    OverlayWidgetPositionPreference2[OverlayWidgetPositionPreference2["TOP_CENTER"] = 2] = "TOP_CENTER";
  })(OverlayWidgetPositionPreference || (OverlayWidgetPositionPreference = {}));
  var OverviewRulerLane$1;
  (function(OverviewRulerLane2) {
    OverviewRulerLane2[OverviewRulerLane2["Left"] = 1] = "Left";
    OverviewRulerLane2[OverviewRulerLane2["Center"] = 2] = "Center";
    OverviewRulerLane2[OverviewRulerLane2["Right"] = 4] = "Right";
    OverviewRulerLane2[OverviewRulerLane2["Full"] = 7] = "Full";
  })(OverviewRulerLane$1 || (OverviewRulerLane$1 = {}));
  var PartialAcceptTriggerKind;
  (function(PartialAcceptTriggerKind2) {
    PartialAcceptTriggerKind2[PartialAcceptTriggerKind2["Word"] = 0] = "Word";
    PartialAcceptTriggerKind2[PartialAcceptTriggerKind2["Line"] = 1] = "Line";
    PartialAcceptTriggerKind2[PartialAcceptTriggerKind2["Suggest"] = 2] = "Suggest";
  })(PartialAcceptTriggerKind || (PartialAcceptTriggerKind = {}));
  var PositionAffinity;
  (function(PositionAffinity2) {
    PositionAffinity2[PositionAffinity2["Left"] = 0] = "Left";
    PositionAffinity2[PositionAffinity2["Right"] = 1] = "Right";
    PositionAffinity2[PositionAffinity2["None"] = 2] = "None";
    PositionAffinity2[PositionAffinity2["LeftOfInjectedText"] = 3] = "LeftOfInjectedText";
    PositionAffinity2[PositionAffinity2["RightOfInjectedText"] = 4] = "RightOfInjectedText";
  })(PositionAffinity || (PositionAffinity = {}));
  var RenderLineNumbersType;
  (function(RenderLineNumbersType2) {
    RenderLineNumbersType2[RenderLineNumbersType2["Off"] = 0] = "Off";
    RenderLineNumbersType2[RenderLineNumbersType2["On"] = 1] = "On";
    RenderLineNumbersType2[RenderLineNumbersType2["Relative"] = 2] = "Relative";
    RenderLineNumbersType2[RenderLineNumbersType2["Interval"] = 3] = "Interval";
    RenderLineNumbersType2[RenderLineNumbersType2["Custom"] = 4] = "Custom";
  })(RenderLineNumbersType || (RenderLineNumbersType = {}));
  var RenderMinimap;
  (function(RenderMinimap2) {
    RenderMinimap2[RenderMinimap2["None"] = 0] = "None";
    RenderMinimap2[RenderMinimap2["Text"] = 1] = "Text";
    RenderMinimap2[RenderMinimap2["Blocks"] = 2] = "Blocks";
  })(RenderMinimap || (RenderMinimap = {}));
  var ScrollType;
  (function(ScrollType2) {
    ScrollType2[ScrollType2["Smooth"] = 0] = "Smooth";
    ScrollType2[ScrollType2["Immediate"] = 1] = "Immediate";
  })(ScrollType || (ScrollType = {}));
  var ScrollbarVisibility;
  (function(ScrollbarVisibility2) {
    ScrollbarVisibility2[ScrollbarVisibility2["Auto"] = 1] = "Auto";
    ScrollbarVisibility2[ScrollbarVisibility2["Hidden"] = 2] = "Hidden";
    ScrollbarVisibility2[ScrollbarVisibility2["Visible"] = 3] = "Visible";
  })(ScrollbarVisibility || (ScrollbarVisibility = {}));
  var SelectionDirection;
  (function(SelectionDirection2) {
    SelectionDirection2[SelectionDirection2["LTR"] = 0] = "LTR";
    SelectionDirection2[SelectionDirection2["RTL"] = 1] = "RTL";
  })(SelectionDirection || (SelectionDirection = {}));
  var ShowLightbulbIconMode;
  (function(ShowLightbulbIconMode2) {
    ShowLightbulbIconMode2["Off"] = "off";
    ShowLightbulbIconMode2["OnCode"] = "onCode";
    ShowLightbulbIconMode2["On"] = "on";
  })(ShowLightbulbIconMode || (ShowLightbulbIconMode = {}));
  var SignatureHelpTriggerKind;
  (function(SignatureHelpTriggerKind2) {
    SignatureHelpTriggerKind2[SignatureHelpTriggerKind2["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind2[SignatureHelpTriggerKind2["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind2[SignatureHelpTriggerKind2["ContentChange"] = 3] = "ContentChange";
  })(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
  var SymbolKind$1;
  (function(SymbolKind2) {
    SymbolKind2[SymbolKind2["File"] = 0] = "File";
    SymbolKind2[SymbolKind2["Module"] = 1] = "Module";
    SymbolKind2[SymbolKind2["Namespace"] = 2] = "Namespace";
    SymbolKind2[SymbolKind2["Package"] = 3] = "Package";
    SymbolKind2[SymbolKind2["Class"] = 4] = "Class";
    SymbolKind2[SymbolKind2["Method"] = 5] = "Method";
    SymbolKind2[SymbolKind2["Property"] = 6] = "Property";
    SymbolKind2[SymbolKind2["Field"] = 7] = "Field";
    SymbolKind2[SymbolKind2["Constructor"] = 8] = "Constructor";
    SymbolKind2[SymbolKind2["Enum"] = 9] = "Enum";
    SymbolKind2[SymbolKind2["Interface"] = 10] = "Interface";
    SymbolKind2[SymbolKind2["Function"] = 11] = "Function";
    SymbolKind2[SymbolKind2["Variable"] = 12] = "Variable";
    SymbolKind2[SymbolKind2["Constant"] = 13] = "Constant";
    SymbolKind2[SymbolKind2["String"] = 14] = "String";
    SymbolKind2[SymbolKind2["Number"] = 15] = "Number";
    SymbolKind2[SymbolKind2["Boolean"] = 16] = "Boolean";
    SymbolKind2[SymbolKind2["Array"] = 17] = "Array";
    SymbolKind2[SymbolKind2["Object"] = 18] = "Object";
    SymbolKind2[SymbolKind2["Key"] = 19] = "Key";
    SymbolKind2[SymbolKind2["Null"] = 20] = "Null";
    SymbolKind2[SymbolKind2["EnumMember"] = 21] = "EnumMember";
    SymbolKind2[SymbolKind2["Struct"] = 22] = "Struct";
    SymbolKind2[SymbolKind2["Event"] = 23] = "Event";
    SymbolKind2[SymbolKind2["Operator"] = 24] = "Operator";
    SymbolKind2[SymbolKind2["TypeParameter"] = 25] = "TypeParameter";
  })(SymbolKind$1 || (SymbolKind$1 = {}));
  var SymbolTag$1;
  (function(SymbolTag2) {
    SymbolTag2[SymbolTag2["Deprecated"] = 1] = "Deprecated";
  })(SymbolTag$1 || (SymbolTag$1 = {}));
  var TextDirection$1;
  (function(TextDirection2) {
    TextDirection2[TextDirection2["LTR"] = 0] = "LTR";
    TextDirection2[TextDirection2["RTL"] = 1] = "RTL";
  })(TextDirection$1 || (TextDirection$1 = {}));
  var TextEditorCursorBlinkingStyle;
  (function(TextEditorCursorBlinkingStyle2) {
    TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Hidden"] = 0] = "Hidden";
    TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Blink"] = 1] = "Blink";
    TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Smooth"] = 2] = "Smooth";
    TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Phase"] = 3] = "Phase";
    TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Expand"] = 4] = "Expand";
    TextEditorCursorBlinkingStyle2[TextEditorCursorBlinkingStyle2["Solid"] = 5] = "Solid";
  })(TextEditorCursorBlinkingStyle || (TextEditorCursorBlinkingStyle = {}));
  var TextEditorCursorStyle;
  (function(TextEditorCursorStyle2) {
    TextEditorCursorStyle2[TextEditorCursorStyle2["Line"] = 1] = "Line";
    TextEditorCursorStyle2[TextEditorCursorStyle2["Block"] = 2] = "Block";
    TextEditorCursorStyle2[TextEditorCursorStyle2["Underline"] = 3] = "Underline";
    TextEditorCursorStyle2[TextEditorCursorStyle2["LineThin"] = 4] = "LineThin";
    TextEditorCursorStyle2[TextEditorCursorStyle2["BlockOutline"] = 5] = "BlockOutline";
    TextEditorCursorStyle2[TextEditorCursorStyle2["UnderlineThin"] = 6] = "UnderlineThin";
  })(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
  var TrackedRangeStickiness;
  (function(TrackedRangeStickiness2) {
    TrackedRangeStickiness2[TrackedRangeStickiness2["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
    TrackedRangeStickiness2[TrackedRangeStickiness2["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
    TrackedRangeStickiness2[TrackedRangeStickiness2["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
    TrackedRangeStickiness2[TrackedRangeStickiness2["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
  })(TrackedRangeStickiness || (TrackedRangeStickiness = {}));
  var WrappingIndent;
  (function(WrappingIndent2) {
    WrappingIndent2[WrappingIndent2["None"] = 0] = "None";
    WrappingIndent2[WrappingIndent2["Same"] = 1] = "Same";
    WrappingIndent2[WrappingIndent2["Indent"] = 2] = "Indent";
    WrappingIndent2[WrappingIndent2["DeepIndent"] = 3] = "DeepIndent";
  })(WrappingIndent || (WrappingIndent = {}));
  const _KeyMod = class _KeyMod {
    static chord(firstPart, secondPart) {
      return KeyChord(firstPart, secondPart);
    }
  };
  _KeyMod.CtrlCmd = 2048;
  _KeyMod.Shift = 1024;
  _KeyMod.Alt = 512;
  _KeyMod.WinCtrl = 256;
  let KeyMod = _KeyMod;
  function createMonacoBaseAPI() {
    return {
      editor: void 0,
      // undefined override expected here
      languages: void 0,
      // undefined override expected here
      CancellationTokenSource,
      Emitter,
      KeyCode,
      KeyMod,
      Position: Position$1,
      Range: Range$1,
      Selection,
      SelectionDirection,
      MarkerSeverity,
      MarkerTag,
      Uri: URI$2,
      Token
    };
  }
  var _c;
  class LinkedMap {
    constructor() {
      this[_c] = "LinkedMap";
      this._map = /* @__PURE__ */ new Map();
      this._head = void 0;
      this._tail = void 0;
      this._size = 0;
      this._state = 0;
    }
    clear() {
      this._map.clear();
      this._head = void 0;
      this._tail = void 0;
      this._size = 0;
      this._state++;
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      return this._head?.value;
    }
    get last() {
      return this._tail?.value;
    }
    has(key) {
      return this._map.has(key);
    }
    get(key, touch = 0) {
      const item = this._map.get(key);
      if (!item) {
        return void 0;
      }
      if (touch !== 0) {
        this.touch(item, touch);
      }
      return item.value;
    }
    set(key, value, touch = 0) {
      let item = this._map.get(key);
      if (item) {
        item.value = value;
        if (touch !== 0) {
          this.touch(item, touch);
        }
      } else {
        item = { key, value, next: void 0, previous: void 0 };
        switch (touch) {
          case 0:
            this.addItemLast(item);
            break;
          case 1:
            this.addItemFirst(item);
            break;
          case 2:
            this.addItemLast(item);
            break;
          default:
            this.addItemLast(item);
            break;
        }
        this._map.set(key, item);
        this._size++;
      }
      return this;
    }
    delete(key) {
      return !!this.remove(key);
    }
    remove(key) {
      const item = this._map.get(key);
      if (!item) {
        return void 0;
      }
      this._map.delete(key);
      this.removeItem(item);
      this._size--;
      return item.value;
    }
    shift() {
      if (!this._head && !this._tail) {
        return void 0;
      }
      if (!this._head || !this._tail) {
        throw new Error("Invalid list");
      }
      const item = this._head;
      this._map.delete(item.key);
      this.removeItem(item);
      this._size--;
      return item.value;
    }
    forEach(callbackfn, thisArg) {
      const state = this._state;
      let current = this._head;
      while (current) {
        if (thisArg) {
          callbackfn.bind(thisArg)(current.value, current.key, this);
        } else {
          callbackfn(current.value, current.key, this);
        }
        if (this._state !== state) {
          throw new Error(`LinkedMap got modified during iteration.`);
        }
        current = current.next;
      }
    }
    keys() {
      const map = this;
      const state = this._state;
      let current = this._head;
      const iterator = {
        [Symbol.iterator]() {
          return iterator;
        },
        next() {
          if (map._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          if (current) {
            const result = { value: current.key, done: false };
            current = current.next;
            return result;
          } else {
            return { value: void 0, done: true };
          }
        }
      };
      return iterator;
    }
    values() {
      const map = this;
      const state = this._state;
      let current = this._head;
      const iterator = {
        [Symbol.iterator]() {
          return iterator;
        },
        next() {
          if (map._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          if (current) {
            const result = { value: current.value, done: false };
            current = current.next;
            return result;
          } else {
            return { value: void 0, done: true };
          }
        }
      };
      return iterator;
    }
    entries() {
      const map = this;
      const state = this._state;
      let current = this._head;
      const iterator = {
        [Symbol.iterator]() {
          return iterator;
        },
        next() {
          if (map._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          if (current) {
            const result = { value: [current.key, current.value], done: false };
            current = current.next;
            return result;
          } else {
            return { value: void 0, done: true };
          }
        }
      };
      return iterator;
    }
    [(_c = Symbol.toStringTag, Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(newSize) {
      if (newSize >= this.size) {
        return;
      }
      if (newSize === 0) {
        this.clear();
        return;
      }
      let current = this._head;
      let currentSize = this.size;
      while (current && currentSize > newSize) {
        this._map.delete(current.key);
        current = current.next;
        currentSize--;
      }
      this._head = current;
      this._size = currentSize;
      if (current) {
        current.previous = void 0;
      }
      this._state++;
    }
    trimNew(newSize) {
      if (newSize >= this.size) {
        return;
      }
      if (newSize === 0) {
        this.clear();
        return;
      }
      let current = this._tail;
      let currentSize = this.size;
      while (current && currentSize > newSize) {
        this._map.delete(current.key);
        current = current.previous;
        currentSize--;
      }
      this._tail = current;
      this._size = currentSize;
      if (current) {
        current.next = void 0;
      }
      this._state++;
    }
    addItemFirst(item) {
      if (!this._head && !this._tail) {
        this._tail = item;
      } else if (!this._head) {
        throw new Error("Invalid list");
      } else {
        item.next = this._head;
        this._head.previous = item;
      }
      this._head = item;
      this._state++;
    }
    addItemLast(item) {
      if (!this._head && !this._tail) {
        this._head = item;
      } else if (!this._tail) {
        throw new Error("Invalid list");
      } else {
        item.previous = this._tail;
        this._tail.next = item;
      }
      this._tail = item;
      this._state++;
    }
    removeItem(item) {
      if (item === this._head && item === this._tail) {
        this._head = void 0;
        this._tail = void 0;
      } else if (item === this._head) {
        if (!item.next) {
          throw new Error("Invalid list");
        }
        item.next.previous = void 0;
        this._head = item.next;
      } else if (item === this._tail) {
        if (!item.previous) {
          throw new Error("Invalid list");
        }
        item.previous.next = void 0;
        this._tail = item.previous;
      } else {
        const next = item.next;
        const previous = item.previous;
        if (!next || !previous) {
          throw new Error("Invalid list");
        }
        next.previous = previous;
        previous.next = next;
      }
      item.next = void 0;
      item.previous = void 0;
      this._state++;
    }
    touch(item, touch) {
      if (!this._head || !this._tail) {
        throw new Error("Invalid list");
      }
      if (touch !== 1 && touch !== 2) {
        return;
      }
      if (touch === 1) {
        if (item === this._head) {
          return;
        }
        const next = item.next;
        const previous = item.previous;
        if (item === this._tail) {
          previous.next = void 0;
          this._tail = previous;
        } else {
          next.previous = previous;
          previous.next = next;
        }
        item.previous = void 0;
        item.next = this._head;
        this._head.previous = item;
        this._head = item;
        this._state++;
      } else if (touch === 2) {
        if (item === this._tail) {
          return;
        }
        const next = item.next;
        const previous = item.previous;
        if (item === this._head) {
          next.previous = void 0;
          this._head = next;
        } else {
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = this._tail;
        this._tail.next = item;
        this._tail = item;
        this._state++;
      }
    }
    toJSON() {
      const data = [];
      this.forEach((value, key) => {
        data.push([key, value]);
      });
      return data;
    }
    fromJSON(data) {
      this.clear();
      for (const [key, value] of data) {
        this.set(key, value);
      }
    }
  }
  class Cache extends LinkedMap {
    constructor(limit, ratio = 1) {
      super();
      this._limit = limit;
      this._ratio = Math.min(Math.max(0, ratio), 1);
    }
    get limit() {
      return this._limit;
    }
    set limit(limit) {
      this._limit = limit;
      this.checkTrim();
    }
    get(key, touch = 2) {
      return super.get(key, touch);
    }
    peek(key) {
      return super.get(
        key,
        0
        /* Touch.None */
      );
    }
    set(key, value) {
      super.set(
        key,
        value,
        2
        /* Touch.AsNew */
      );
      return this;
    }
    checkTrim() {
      if (this.size > this._limit) {
        this.trim(Math.round(this._limit * this._ratio));
      }
    }
  }
  class LRUCache extends Cache {
    constructor(limit, ratio = 1) {
      super(limit, ratio);
    }
    trim(newSize) {
      this.trimOld(newSize);
    }
    set(key, value) {
      super.set(key, value);
      this.checkTrim();
      return this;
    }
  }
  class SetMap {
    constructor() {
      this.map = /* @__PURE__ */ new Map();
    }
    add(key, value) {
      let values = this.map.get(key);
      if (!values) {
        values = /* @__PURE__ */ new Set();
        this.map.set(key, values);
      }
      values.add(value);
    }
    delete(key, value) {
      const values = this.map.get(key);
      if (!values) {
        return;
      }
      values.delete(value);
      if (values.size === 0) {
        this.map.delete(key);
      }
    }
    forEach(key, fn) {
      const values = this.map.get(key);
      if (!values) {
        return;
      }
      values.forEach(fn);
    }
  }
  new LRUCache(10);
  var OverviewRulerLane;
  (function(OverviewRulerLane2) {
    OverviewRulerLane2[OverviewRulerLane2["Left"] = 1] = "Left";
    OverviewRulerLane2[OverviewRulerLane2["Center"] = 2] = "Center";
    OverviewRulerLane2[OverviewRulerLane2["Right"] = 4] = "Right";
    OverviewRulerLane2[OverviewRulerLane2["Full"] = 7] = "Full";
  })(OverviewRulerLane || (OverviewRulerLane = {}));
  var GlyphMarginLane;
  (function(GlyphMarginLane2) {
    GlyphMarginLane2[GlyphMarginLane2["Left"] = 1] = "Left";
    GlyphMarginLane2[GlyphMarginLane2["Center"] = 2] = "Center";
    GlyphMarginLane2[GlyphMarginLane2["Right"] = 3] = "Right";
  })(GlyphMarginLane || (GlyphMarginLane = {}));
  var TextDirection;
  (function(TextDirection2) {
    TextDirection2[TextDirection2["LTR"] = 0] = "LTR";
    TextDirection2[TextDirection2["RTL"] = 1] = "RTL";
  })(TextDirection || (TextDirection = {}));
  var InjectedTextCursorStops;
  (function(InjectedTextCursorStops2) {
    InjectedTextCursorStops2[InjectedTextCursorStops2["Both"] = 0] = "Both";
    InjectedTextCursorStops2[InjectedTextCursorStops2["Right"] = 1] = "Right";
    InjectedTextCursorStops2[InjectedTextCursorStops2["Left"] = 2] = "Left";
    InjectedTextCursorStops2[InjectedTextCursorStops2["None"] = 3] = "None";
  })(InjectedTextCursorStops || (InjectedTextCursorStops = {}));
  function isMultilineRegexSource(searchString) {
    if (!searchString || searchString.length === 0) {
      return false;
    }
    for (let i = 0, len = searchString.length; i < len; i++) {
      const chCode = searchString.charCodeAt(i);
      if (chCode === 10) {
        return true;
      }
      if (chCode === 92) {
        i++;
        if (i >= len) {
          break;
        }
        const nextChCode = searchString.charCodeAt(i);
        if (nextChCode === 110 || nextChCode === 114 || nextChCode === 87) {
          return true;
        }
      }
    }
    return false;
  }
  function leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
    if (matchStartIndex === 0) {
      return true;
    }
    const charBefore = text.charCodeAt(matchStartIndex - 1);
    if (wordSeparators.get(charBefore) !== 0) {
      return true;
    }
    if (charBefore === 13 || charBefore === 10) {
      return true;
    }
    if (matchLength > 0) {
      const firstCharInMatch = text.charCodeAt(matchStartIndex);
      if (wordSeparators.get(firstCharInMatch) !== 0) {
        return true;
      }
    }
    return false;
  }
  function rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
    if (matchStartIndex + matchLength === textLength) {
      return true;
    }
    const charAfter = text.charCodeAt(matchStartIndex + matchLength);
    if (wordSeparators.get(charAfter) !== 0) {
      return true;
    }
    if (charAfter === 13 || charAfter === 10) {
      return true;
    }
    if (matchLength > 0) {
      const lastCharInMatch = text.charCodeAt(matchStartIndex + matchLength - 1);
      if (wordSeparators.get(lastCharInMatch) !== 0) {
        return true;
      }
    }
    return false;
  }
  function isValidMatch(wordSeparators, text, textLength, matchStartIndex, matchLength) {
    return leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) && rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength);
  }
  class Searcher {
    constructor(wordSeparators, searchRegex) {
      this._wordSeparators = wordSeparators;
      this._searchRegex = searchRegex;
      this._prevMatchStartIndex = -1;
      this._prevMatchLength = 0;
    }
    reset(lastIndex) {
      this._searchRegex.lastIndex = lastIndex;
      this._prevMatchStartIndex = -1;
      this._prevMatchLength = 0;
    }
    next(text) {
      const textLength = text.length;
      let m;
      do {
        if (this._prevMatchStartIndex + this._prevMatchLength === textLength) {
          return null;
        }
        m = this._searchRegex.exec(text);
        if (!m) {
          return null;
        }
        const matchStartIndex = m.index;
        const matchLength = m[0].length;
        if (matchStartIndex === this._prevMatchStartIndex && matchLength === this._prevMatchLength) {
          if (matchLength === 0) {
            if (getNextCodePoint(text, textLength, this._searchRegex.lastIndex) > 65535) {
              this._searchRegex.lastIndex += 2;
            } else {
              this._searchRegex.lastIndex += 1;
            }
            continue;
          }
          return null;
        }
        this._prevMatchStartIndex = matchStartIndex;
        this._prevMatchLength = matchLength;
        if (!this._wordSeparators || isValidMatch(this._wordSeparators, text, textLength, matchStartIndex, matchLength)) {
          return m;
        }
      } while (m);
      return null;
    }
  }
  const USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
  function createWordRegExp(allowInWords = "") {
    let source = "(-?\\d*\\.\\d\\w*)|([^";
    for (const sep of USUAL_WORD_SEPARATORS) {
      if (allowInWords.indexOf(sep) >= 0) {
        continue;
      }
      source += "\\" + sep;
    }
    source += "\\s]+)";
    return new RegExp(source, "g");
  }
  const DEFAULT_WORD_REGEXP = createWordRegExp();
  function ensureValidWordDefinition(wordDefinition) {
    let result = DEFAULT_WORD_REGEXP;
    if (wordDefinition && wordDefinition instanceof RegExp) {
      if (!wordDefinition.global) {
        let flags = "g";
        if (wordDefinition.ignoreCase) {
          flags += "i";
        }
        if (wordDefinition.multiline) {
          flags += "m";
        }
        if (wordDefinition.unicode) {
          flags += "u";
        }
        result = new RegExp(wordDefinition.source, flags);
      } else {
        result = wordDefinition;
      }
    }
    result.lastIndex = 0;
    return result;
  }
  const _defaultConfig = new LinkedList();
  _defaultConfig.unshift({
    maxLen: 1e3,
    windowSize: 15,
    timeBudget: 150
  });
  function getWordAtText(column, wordDefinition, text, textOffset, config) {
    wordDefinition = ensureValidWordDefinition(wordDefinition);
    if (!config) {
      config = Iterable.first(_defaultConfig);
    }
    if (text.length > config.maxLen) {
      let start2 = column - config.maxLen / 2;
      if (start2 < 0) {
        start2 = 0;
      } else {
        textOffset += start2;
      }
      text = text.substring(start2, column + config.maxLen / 2);
      return getWordAtText(column, wordDefinition, text, textOffset, config);
    }
    const t1 = Date.now();
    const pos = column - 1 - textOffset;
    let prevRegexIndex = -1;
    let match = null;
    for (let i = 1; ; i++) {
      if (Date.now() - t1 >= config.timeBudget) {
        break;
      }
      const regexIndex = pos - config.windowSize * i;
      wordDefinition.lastIndex = Math.max(0, regexIndex);
      const thisMatch = _findRegexMatchEnclosingPosition(wordDefinition, text, pos, prevRegexIndex);
      if (!thisMatch && match) {
        break;
      }
      match = thisMatch;
      if (regexIndex <= 0) {
        break;
      }
      prevRegexIndex = regexIndex;
    }
    if (match) {
      const result = {
        word: match[0],
        startColumn: textOffset + 1 + match.index,
        endColumn: textOffset + 1 + match.index + match[0].length
      };
      wordDefinition.lastIndex = 0;
      return result;
    }
    return null;
  }
  function _findRegexMatchEnclosingPosition(wordDefinition, text, pos, stopPos) {
    let match;
    while (match = wordDefinition.exec(text)) {
      const matchIndex = match.index || 0;
      if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
        return match;
      } else if (stopPos > 0 && matchIndex > stopPos) {
        return null;
      }
    }
    return null;
  }
  class UnicodeTextModelHighlighter {
    static computeUnicodeHighlights(model, options, range) {
      const startLine = range ? range.startLineNumber : 1;
      const endLine = range ? range.endLineNumber : model.getLineCount();
      const codePointHighlighter = new CodePointHighlighter(options);
      const candidates = codePointHighlighter.getCandidateCodePoints();
      let regex;
      if (candidates === "allNonBasicAscii") {
        regex = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g");
      } else {
        regex = new RegExp(`${buildRegExpCharClassExpr(Array.from(candidates))}`, "g");
      }
      const searcher = new Searcher(null, regex);
      const ranges = [];
      let hasMore = false;
      let m;
      let ambiguousCharacterCount = 0;
      let invisibleCharacterCount = 0;
      let nonBasicAsciiCharacterCount = 0;
      forLoop: for (let lineNumber = startLine, lineCount = endLine; lineNumber <= lineCount; lineNumber++) {
        const lineContent = model.getLineContent(lineNumber);
        const lineLength = lineContent.length;
        searcher.reset(0);
        do {
          m = searcher.next(lineContent);
          if (m) {
            let startIndex = m.index;
            let endIndex = m.index + m[0].length;
            if (startIndex > 0) {
              const charCodeBefore = lineContent.charCodeAt(startIndex - 1);
              if (isHighSurrogate(charCodeBefore)) {
                startIndex--;
              }
            }
            if (endIndex + 1 < lineLength) {
              const charCodeBefore = lineContent.charCodeAt(endIndex - 1);
              if (isHighSurrogate(charCodeBefore)) {
                endIndex++;
              }
            }
            const str = lineContent.substring(startIndex, endIndex);
            let word = getWordAtText(startIndex + 1, DEFAULT_WORD_REGEXP, lineContent, 0);
            if (word && word.endColumn <= startIndex + 1) {
              word = null;
            }
            const highlightReason = codePointHighlighter.shouldHighlightNonBasicASCII(str, word ? word.word : null);
            if (highlightReason !== 0) {
              if (highlightReason === 3) {
                ambiguousCharacterCount++;
              } else if (highlightReason === 2) {
                invisibleCharacterCount++;
              } else if (highlightReason === 1) {
                nonBasicAsciiCharacterCount++;
              } else {
                assertNever();
              }
              const MAX_RESULT_LENGTH = 1e3;
              if (ranges.length >= MAX_RESULT_LENGTH) {
                hasMore = true;
                break forLoop;
              }
              ranges.push(new Range$1(lineNumber, startIndex + 1, lineNumber, endIndex + 1));
            }
          }
        } while (m);
      }
      return {
        ranges,
        hasMore,
        ambiguousCharacterCount,
        invisibleCharacterCount,
        nonBasicAsciiCharacterCount
      };
    }
    static computeUnicodeHighlightReason(char, options) {
      const codePointHighlighter = new CodePointHighlighter(options);
      const reason = codePointHighlighter.shouldHighlightNonBasicASCII(char, null);
      switch (reason) {
        case 0:
          return null;
        case 2:
          return {
            kind: 1
            /* UnicodeHighlighterReasonKind.Invisible */
          };
        case 3: {
          const codePoint = char.codePointAt(0);
          const primaryConfusable = codePointHighlighter.ambiguousCharacters.getPrimaryConfusable(codePoint);
          const notAmbiguousInLocales = AmbiguousCharacters.getLocales().filter((l) => !AmbiguousCharacters.getInstance(/* @__PURE__ */ new Set([...options.allowedLocales, l])).isAmbiguous(codePoint));
          return { kind: 0, confusableWith: String.fromCodePoint(primaryConfusable), notAmbiguousInLocales };
        }
        case 1:
          return {
            kind: 2
            /* UnicodeHighlighterReasonKind.NonBasicAscii */
          };
      }
    }
  }
  function buildRegExpCharClassExpr(codePoints, flags) {
    const src = `[${escapeRegExpCharacters(codePoints.map((i) => String.fromCodePoint(i)).join(""))}]`;
    return src;
  }
  class CodePointHighlighter {
    constructor(options) {
      this.options = options;
      this.allowedCodePoints = new Set(options.allowedCodePoints);
      this.ambiguousCharacters = AmbiguousCharacters.getInstance(new Set(options.allowedLocales));
    }
    getCandidateCodePoints() {
      if (this.options.nonBasicASCII) {
        return "allNonBasicAscii";
      }
      const set = /* @__PURE__ */ new Set();
      if (this.options.invisibleCharacters) {
        for (const cp of InvisibleCharacters.codePoints) {
          if (!isAllowedInvisibleCharacter(String.fromCodePoint(cp))) {
            set.add(cp);
          }
        }
      }
      if (this.options.ambiguousCharacters) {
        for (const cp of this.ambiguousCharacters.getConfusableCodePoints()) {
          set.add(cp);
        }
      }
      for (const cp of this.allowedCodePoints) {
        set.delete(cp);
      }
      return set;
    }
    shouldHighlightNonBasicASCII(character, wordContext) {
      const codePoint = character.codePointAt(0);
      if (this.allowedCodePoints.has(codePoint)) {
        return 0;
      }
      if (this.options.nonBasicASCII) {
        return 1;
      }
      let hasBasicASCIICharacters = false;
      let hasNonConfusableNonBasicAsciiCharacter = false;
      if (wordContext) {
        for (const char of wordContext) {
          const codePoint2 = char.codePointAt(0);
          const isBasicASCII$1 = isBasicASCII(char);
          hasBasicASCIICharacters = hasBasicASCIICharacters || isBasicASCII$1;
          if (!isBasicASCII$1 && !this.ambiguousCharacters.isAmbiguous(codePoint2) && !InvisibleCharacters.isInvisibleCharacter(codePoint2)) {
            hasNonConfusableNonBasicAsciiCharacter = true;
          }
        }
      }
      if (
        /* Don't allow mixing weird looking characters with ASCII */
        !hasBasicASCIICharacters && /* Is there an obviously weird looking character? */
        hasNonConfusableNonBasicAsciiCharacter
      ) {
        return 0;
      }
      if (this.options.invisibleCharacters) {
        if (!isAllowedInvisibleCharacter(character) && InvisibleCharacters.isInvisibleCharacter(codePoint)) {
          return 2;
        }
      }
      if (this.options.ambiguousCharacters) {
        if (this.ambiguousCharacters.isAmbiguous(codePoint)) {
          return 3;
        }
      }
      return 0;
    }
  }
  function isAllowedInvisibleCharacter(character) {
    return character === " " || character === "\n" || character === "	";
  }
  class LinesDiff {
    constructor(changes, moves, hitTimeout) {
      this.changes = changes;
      this.moves = moves;
      this.hitTimeout = hitTimeout;
    }
  }
  class MovedText {
    constructor(lineRangeMapping, changes) {
      this.lineRangeMapping = lineRangeMapping;
      this.changes = changes;
    }
  }
  function equals$1(one, other, itemEquals = (a2, b) => a2 === b) {
    if (one === other) {
      return true;
    }
    if (!one || !other) {
      return false;
    }
    if (one.length !== other.length) {
      return false;
    }
    for (let i = 0, len = one.length; i < len; i++) {
      if (!itemEquals(one[i], other[i])) {
        return false;
      }
    }
    return true;
  }
  function* groupAdjacentBy(items, shouldBeGrouped) {
    let currentGroup;
    let last;
    for (const item of items) {
      if (last !== void 0 && shouldBeGrouped(last, item)) {
        currentGroup.push(item);
      } else {
        if (currentGroup) {
          yield currentGroup;
        }
        currentGroup = [item];
      }
      last = item;
    }
    if (currentGroup) {
      yield currentGroup;
    }
  }
  function forEachAdjacent(arr, f2) {
    for (let i = 0; i <= arr.length; i++) {
      f2(i === 0 ? void 0 : arr[i - 1], i === arr.length ? void 0 : arr[i]);
    }
  }
  function forEachWithNeighbors(arr, f2) {
    for (let i = 0; i < arr.length; i++) {
      f2(i === 0 ? void 0 : arr[i - 1], arr[i], i + 1 === arr.length ? void 0 : arr[i + 1]);
    }
  }
  function pushMany(arr, items) {
    for (const item of items) {
      arr.push(item);
    }
  }
  var CompareResult;
  (function(CompareResult2) {
    function isLessThan(result) {
      return result < 0;
    }
    CompareResult2.isLessThan = isLessThan;
    function isLessThanOrEqual(result) {
      return result <= 0;
    }
    CompareResult2.isLessThanOrEqual = isLessThanOrEqual;
    function isGreaterThan(result) {
      return result > 0;
    }
    CompareResult2.isGreaterThan = isGreaterThan;
    function isNeitherLessOrGreaterThan(result) {
      return result === 0;
    }
    CompareResult2.isNeitherLessOrGreaterThan = isNeitherLessOrGreaterThan;
    CompareResult2.greaterThan = 1;
    CompareResult2.lessThan = -1;
    CompareResult2.neitherLessOrGreaterThan = 0;
  })(CompareResult || (CompareResult = {}));
  function compareBy(selector, comparator) {
    return (a2, b) => comparator(selector(a2), selector(b));
  }
  const numberComparator = (a2, b) => a2 - b;
  function reverseOrder(comparator) {
    return (a2, b) => -comparator(a2, b);
  }
  const _CallbackIterable = class _CallbackIterable {
    constructor(iterate) {
      this.iterate = iterate;
    }
    toArray() {
      const result = [];
      this.iterate((item) => {
        result.push(item);
        return true;
      });
      return result;
    }
    filter(predicate) {
      return new _CallbackIterable((cb) => this.iterate((item) => predicate(item) ? cb(item) : true));
    }
    map(mapFn) {
      return new _CallbackIterable((cb) => this.iterate((item) => cb(mapFn(item))));
    }
    findLast(predicate) {
      let result;
      this.iterate((item) => {
        if (predicate(item)) {
          result = item;
        }
        return true;
      });
      return result;
    }
    findLastMaxBy(comparator) {
      let result;
      let first = true;
      this.iterate((item) => {
        if (first || CompareResult.isGreaterThan(comparator(item, result))) {
          first = false;
          result = item;
        }
        return true;
      });
      return result;
    }
  };
  _CallbackIterable.empty = new _CallbackIterable((_callback) => {
  });
  let CallbackIterable = _CallbackIterable;
  class OffsetRange {
    static fromTo(start2, endExclusive) {
      return new OffsetRange(start2, endExclusive);
    }
    static addRange(range, sortedRanges) {
      let i = 0;
      while (i < sortedRanges.length && sortedRanges[i].endExclusive < range.start) {
        i++;
      }
      let j = i;
      while (j < sortedRanges.length && sortedRanges[j].start <= range.endExclusive) {
        j++;
      }
      if (i === j) {
        sortedRanges.splice(i, 0, range);
      } else {
        const start2 = Math.min(range.start, sortedRanges[i].start);
        const end = Math.max(range.endExclusive, sortedRanges[j - 1].endExclusive);
        sortedRanges.splice(i, j - i, new OffsetRange(start2, end));
      }
    }
    static tryCreate(start2, endExclusive) {
      if (start2 > endExclusive) {
        return void 0;
      }
      return new OffsetRange(start2, endExclusive);
    }
    static ofLength(length) {
      return new OffsetRange(0, length);
    }
    static ofStartAndLength(start2, length) {
      return new OffsetRange(start2, start2 + length);
    }
    static emptyAt(offset) {
      return new OffsetRange(offset, offset);
    }
    constructor(start2, endExclusive) {
      this.start = start2;
      this.endExclusive = endExclusive;
      if (start2 > endExclusive) {
        throw new BugIndicatingError(`Invalid range: ${this.toString()}`);
      }
    }
    get isEmpty() {
      return this.start === this.endExclusive;
    }
    delta(offset) {
      return new OffsetRange(this.start + offset, this.endExclusive + offset);
    }
    deltaStart(offset) {
      return new OffsetRange(this.start + offset, this.endExclusive);
    }
    deltaEnd(offset) {
      return new OffsetRange(this.start, this.endExclusive + offset);
    }
    get length() {
      return this.endExclusive - this.start;
    }
    toString() {
      return `[${this.start}, ${this.endExclusive})`;
    }
    equals(other) {
      return this.start === other.start && this.endExclusive === other.endExclusive;
    }
    contains(offset) {
      return this.start <= offset && offset < this.endExclusive;
    }
    /**
     * for all numbers n: range1.contains(n) or range2.contains(n) => range1.join(range2).contains(n)
     * The joined range is the smallest range that contains both ranges.
     */
    join(other) {
      return new OffsetRange(Math.min(this.start, other.start), Math.max(this.endExclusive, other.endExclusive));
    }
    /**
     * for all numbers n: range1.contains(n) and range2.contains(n) <=> range1.intersect(range2).contains(n)
     *
     * The resulting range is empty if the ranges do not intersect, but touch.
     * If the ranges don't even touch, the result is undefined.
     */
    intersect(other) {
      const start2 = Math.max(this.start, other.start);
      const end = Math.min(this.endExclusive, other.endExclusive);
      if (start2 <= end) {
        return new OffsetRange(start2, end);
      }
      return void 0;
    }
    intersectionLength(range) {
      const start2 = Math.max(this.start, range.start);
      const end = Math.min(this.endExclusive, range.endExclusive);
      return Math.max(0, end - start2);
    }
    intersects(other) {
      const start2 = Math.max(this.start, other.start);
      const end = Math.min(this.endExclusive, other.endExclusive);
      return start2 < end;
    }
    intersectsOrTouches(other) {
      const start2 = Math.max(this.start, other.start);
      const end = Math.min(this.endExclusive, other.endExclusive);
      return start2 <= end;
    }
    isBefore(other) {
      return this.endExclusive <= other.start;
    }
    isAfter(other) {
      return this.start >= other.endExclusive;
    }
    slice(arr) {
      return arr.slice(this.start, this.endExclusive);
    }
    substring(str) {
      return str.substring(this.start, this.endExclusive);
    }
    /**
     * Returns the given value if it is contained in this instance, otherwise the closest value that is contained.
     * The range must not be empty.
     */
    clip(value) {
      if (this.isEmpty) {
        throw new BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
      }
      return Math.max(this.start, Math.min(this.endExclusive - 1, value));
    }
    /**
     * Returns `r := value + k * length` such that `r` is contained in this range.
     * The range must not be empty.
     *
     * E.g. `[5, 10).clipCyclic(10) === 5`, `[5, 10).clipCyclic(11) === 6` and `[5, 10).clipCyclic(4) === 9`.
     */
    clipCyclic(value) {
      if (this.isEmpty) {
        throw new BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
      }
      if (value < this.start) {
        return this.endExclusive - (this.start - value) % this.length;
      }
      if (value >= this.endExclusive) {
        return this.start + (value - this.start) % this.length;
      }
      return value;
    }
    forEach(f2) {
      for (let i = this.start; i < this.endExclusive; i++) {
        f2(i);
      }
    }
    /**
     * this: [ 5, 10), range: [10, 15) => [5, 15)]
     * Throws if the ranges are not touching.
    */
    joinRightTouching(range) {
      if (this.endExclusive !== range.start) {
        throw new BugIndicatingError(`Invalid join: ${this.toString()} and ${range.toString()}`);
      }
      return new OffsetRange(this.start, range.endExclusive);
    }
  }
  function findLastMonotonous(array, predicate) {
    const idx = findLastIdxMonotonous(array, predicate);
    return idx === -1 ? void 0 : array[idx];
  }
  function findLastIdxMonotonous(array, predicate, startIdx = 0, endIdxEx = array.length) {
    let i = startIdx;
    let j = endIdxEx;
    while (i < j) {
      const k = Math.floor((i + j) / 2);
      if (predicate(array[k])) {
        i = k + 1;
      } else {
        j = k;
      }
    }
    return i - 1;
  }
  function findFirstMonotonous(array, predicate) {
    const idx = findFirstIdxMonotonousOrArrLen(array, predicate);
    return idx === array.length ? void 0 : array[idx];
  }
  function findFirstIdxMonotonousOrArrLen(array, predicate, startIdx = 0, endIdxEx = array.length) {
    let i = startIdx;
    let j = endIdxEx;
    while (i < j) {
      const k = Math.floor((i + j) / 2);
      if (predicate(array[k])) {
        j = k;
      } else {
        i = k + 1;
      }
    }
    return i;
  }
  const _MonotonousArray = class _MonotonousArray {
    constructor(_array) {
      this._array = _array;
      this._findLastMonotonousLastIdx = 0;
    }
    /**
     * The predicate must be monotonous, i.e. `arr.map(predicate)` must be like `[true, ..., true, false, ..., false]`!
     * For subsequent calls, current predicate must be weaker than (or equal to) the previous predicate, i.e. more entries must be `true`.
     */
    findLastMonotonous(predicate) {
      if (_MonotonousArray.assertInvariants) {
        if (this._prevFindLastPredicate) {
          for (const item of this._array) {
            if (this._prevFindLastPredicate(item) && !predicate(item)) {
              throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
            }
          }
        }
        this._prevFindLastPredicate = predicate;
      }
      const idx = findLastIdxMonotonous(this._array, predicate, this._findLastMonotonousLastIdx);
      this._findLastMonotonousLastIdx = idx + 1;
      return idx === -1 ? void 0 : this._array[idx];
    }
  };
  _MonotonousArray.assertInvariants = false;
  let MonotonousArray = _MonotonousArray;
  const _LineRange = class _LineRange {
    static ofLength(startLineNumber, length) {
      return new _LineRange(startLineNumber, startLineNumber + length);
    }
    static fromRange(range) {
      return new _LineRange(range.startLineNumber, range.endLineNumber);
    }
    static fromRangeInclusive(range) {
      return new _LineRange(range.startLineNumber, range.endLineNumber + 1);
    }
    /**
     * @param lineRanges An array of arrays of of sorted line ranges.
     */
    static joinMany(lineRanges) {
      if (lineRanges.length === 0) {
        return [];
      }
      let result = new LineRangeSet(lineRanges[0].slice());
      for (let i = 1; i < lineRanges.length; i++) {
        result = result.getUnion(new LineRangeSet(lineRanges[i].slice()));
      }
      return result.ranges;
    }
    static join(lineRanges) {
      if (lineRanges.length === 0) {
        throw new BugIndicatingError("lineRanges cannot be empty");
      }
      let startLineNumber = lineRanges[0].startLineNumber;
      let endLineNumberExclusive = lineRanges[0].endLineNumberExclusive;
      for (let i = 1; i < lineRanges.length; i++) {
        startLineNumber = Math.min(startLineNumber, lineRanges[i].startLineNumber);
        endLineNumberExclusive = Math.max(endLineNumberExclusive, lineRanges[i].endLineNumberExclusive);
      }
      return new _LineRange(startLineNumber, endLineNumberExclusive);
    }
    /**
     * @internal
     */
    static deserialize(lineRange) {
      return new _LineRange(lineRange[0], lineRange[1]);
    }
    constructor(startLineNumber, endLineNumberExclusive) {
      if (startLineNumber > endLineNumberExclusive) {
        throw new BugIndicatingError(`startLineNumber ${startLineNumber} cannot be after endLineNumberExclusive ${endLineNumberExclusive}`);
      }
      this.startLineNumber = startLineNumber;
      this.endLineNumberExclusive = endLineNumberExclusive;
    }
    /**
     * Indicates if this line range contains the given line number.
     */
    contains(lineNumber) {
      return this.startLineNumber <= lineNumber && lineNumber < this.endLineNumberExclusive;
    }
    /**
     * Indicates if this line range is empty.
     */
    get isEmpty() {
      return this.startLineNumber === this.endLineNumberExclusive;
    }
    /**
     * Moves this line range by the given offset of line numbers.
     */
    delta(offset) {
      return new _LineRange(this.startLineNumber + offset, this.endLineNumberExclusive + offset);
    }
    deltaLength(offset) {
      return new _LineRange(this.startLineNumber, this.endLineNumberExclusive + offset);
    }
    /**
     * The number of lines this line range spans.
     */
    get length() {
      return this.endLineNumberExclusive - this.startLineNumber;
    }
    /**
     * Creates a line range that combines this and the given line range.
     */
    join(other) {
      return new _LineRange(Math.min(this.startLineNumber, other.startLineNumber), Math.max(this.endLineNumberExclusive, other.endLineNumberExclusive));
    }
    toString() {
      return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
    }
    /**
     * The resulting range is empty if the ranges do not intersect, but touch.
     * If the ranges don't even touch, the result is undefined.
     */
    intersect(other) {
      const startLineNumber = Math.max(this.startLineNumber, other.startLineNumber);
      const endLineNumberExclusive = Math.min(this.endLineNumberExclusive, other.endLineNumberExclusive);
      if (startLineNumber <= endLineNumberExclusive) {
        return new _LineRange(startLineNumber, endLineNumberExclusive);
      }
      return void 0;
    }
    intersectsStrict(other) {
      return this.startLineNumber < other.endLineNumberExclusive && other.startLineNumber < this.endLineNumberExclusive;
    }
    intersectsOrTouches(other) {
      return this.startLineNumber <= other.endLineNumberExclusive && other.startLineNumber <= this.endLineNumberExclusive;
    }
    equals(b) {
      return this.startLineNumber === b.startLineNumber && this.endLineNumberExclusive === b.endLineNumberExclusive;
    }
    toInclusiveRange() {
      if (this.isEmpty) {
        return null;
      }
      return new Range$1(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
    }
    /**
     * @deprecated Using this function is discouraged because it might lead to bugs: The end position is not guaranteed to be a valid position!
    */
    toExclusiveRange() {
      return new Range$1(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
    }
    mapToLineArray(f2) {
      const result = [];
      for (let lineNumber = this.startLineNumber; lineNumber < this.endLineNumberExclusive; lineNumber++) {
        result.push(f2(lineNumber));
      }
      return result;
    }
    forEach(f2) {
      for (let lineNumber = this.startLineNumber; lineNumber < this.endLineNumberExclusive; lineNumber++) {
        f2(lineNumber);
      }
    }
    /**
     * @internal
     */
    serialize() {
      return [this.startLineNumber, this.endLineNumberExclusive];
    }
    /**
     * Converts this 1-based line range to a 0-based offset range (subtracts 1!).
     * @internal
     */
    toOffsetRange() {
      return new OffsetRange(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
    }
    addMargin(marginTop, marginBottom) {
      return new _LineRange(this.startLineNumber - marginTop, this.endLineNumberExclusive + marginBottom);
    }
  };
  _LineRange.compareByStart = compareBy((l) => l.startLineNumber, numberComparator);
  let LineRange = _LineRange;
  class LineRangeSet {
    constructor(_normalizedRanges = []) {
      this._normalizedRanges = _normalizedRanges;
    }
    get ranges() {
      return this._normalizedRanges;
    }
    addRange(range) {
      if (range.length === 0) {
        return;
      }
      const joinRangeStartIdx = findFirstIdxMonotonousOrArrLen(this._normalizedRanges, (r) => r.endLineNumberExclusive >= range.startLineNumber);
      const joinRangeEndIdxExclusive = findLastIdxMonotonous(this._normalizedRanges, (r) => r.startLineNumber <= range.endLineNumberExclusive) + 1;
      if (joinRangeStartIdx === joinRangeEndIdxExclusive) {
        this._normalizedRanges.splice(joinRangeStartIdx, 0, range);
      } else if (joinRangeStartIdx === joinRangeEndIdxExclusive - 1) {
        const joinRange = this._normalizedRanges[joinRangeStartIdx];
        this._normalizedRanges[joinRangeStartIdx] = joinRange.join(range);
      } else {
        const joinRange = this._normalizedRanges[joinRangeStartIdx].join(this._normalizedRanges[joinRangeEndIdxExclusive - 1]).join(range);
        this._normalizedRanges.splice(joinRangeStartIdx, joinRangeEndIdxExclusive - joinRangeStartIdx, joinRange);
      }
    }
    contains(lineNumber) {
      const rangeThatStartsBeforeEnd = findLastMonotonous(this._normalizedRanges, (r) => r.startLineNumber <= lineNumber);
      return !!rangeThatStartsBeforeEnd && rangeThatStartsBeforeEnd.endLineNumberExclusive > lineNumber;
    }
    intersects(range) {
      const rangeThatStartsBeforeEnd = findLastMonotonous(this._normalizedRanges, (r) => r.startLineNumber < range.endLineNumberExclusive);
      return !!rangeThatStartsBeforeEnd && rangeThatStartsBeforeEnd.endLineNumberExclusive > range.startLineNumber;
    }
    getUnion(other) {
      if (this._normalizedRanges.length === 0) {
        return other;
      }
      if (other._normalizedRanges.length === 0) {
        return this;
      }
      const result = [];
      let i1 = 0;
      let i2 = 0;
      let current = null;
      while (i1 < this._normalizedRanges.length || i2 < other._normalizedRanges.length) {
        let next = null;
        if (i1 < this._normalizedRanges.length && i2 < other._normalizedRanges.length) {
          const lineRange1 = this._normalizedRanges[i1];
          const lineRange2 = other._normalizedRanges[i2];
          if (lineRange1.startLineNumber < lineRange2.startLineNumber) {
            next = lineRange1;
            i1++;
          } else {
            next = lineRange2;
            i2++;
          }
        } else if (i1 < this._normalizedRanges.length) {
          next = this._normalizedRanges[i1];
          i1++;
        } else {
          next = other._normalizedRanges[i2];
          i2++;
        }
        if (current === null) {
          current = next;
        } else {
          if (current.endLineNumberExclusive >= next.startLineNumber) {
            current = new LineRange(current.startLineNumber, Math.max(current.endLineNumberExclusive, next.endLineNumberExclusive));
          } else {
            result.push(current);
            current = next;
          }
        }
      }
      if (current !== null) {
        result.push(current);
      }
      return new LineRangeSet(result);
    }
    /**
     * Subtracts all ranges in this set from `range` and returns the result.
     */
    subtractFrom(range) {
      const joinRangeStartIdx = findFirstIdxMonotonousOrArrLen(this._normalizedRanges, (r) => r.endLineNumberExclusive >= range.startLineNumber);
      const joinRangeEndIdxExclusive = findLastIdxMonotonous(this._normalizedRanges, (r) => r.startLineNumber <= range.endLineNumberExclusive) + 1;
      if (joinRangeStartIdx === joinRangeEndIdxExclusive) {
        return new LineRangeSet([range]);
      }
      const result = [];
      let startLineNumber = range.startLineNumber;
      for (let i = joinRangeStartIdx; i < joinRangeEndIdxExclusive; i++) {
        const r = this._normalizedRanges[i];
        if (r.startLineNumber > startLineNumber) {
          result.push(new LineRange(startLineNumber, r.startLineNumber));
        }
        startLineNumber = r.endLineNumberExclusive;
      }
      if (startLineNumber < range.endLineNumberExclusive) {
        result.push(new LineRange(startLineNumber, range.endLineNumberExclusive));
      }
      return new LineRangeSet(result);
    }
    toString() {
      return this._normalizedRanges.map((r) => r.toString()).join(", ");
    }
    getIntersection(other) {
      const result = [];
      let i1 = 0;
      let i2 = 0;
      while (i1 < this._normalizedRanges.length && i2 < other._normalizedRanges.length) {
        const r1 = this._normalizedRanges[i1];
        const r2 = other._normalizedRanges[i2];
        const i = r1.intersect(r2);
        if (i && !i.isEmpty) {
          result.push(i);
        }
        if (r1.endLineNumberExclusive < r2.endLineNumberExclusive) {
          i1++;
        } else {
          i2++;
        }
      }
      return new LineRangeSet(result);
    }
    getWithDelta(value) {
      return new LineRangeSet(this._normalizedRanges.map((r) => r.delta(value)));
    }
  }
  const _TextLength = class _TextLength {
    static betweenPositions(position1, position2) {
      if (position1.lineNumber === position2.lineNumber) {
        return new _TextLength(0, position2.column - position1.column);
      } else {
        return new _TextLength(position2.lineNumber - position1.lineNumber, position2.column - 1);
      }
    }
    static fromPosition(pos) {
      return new _TextLength(pos.lineNumber - 1, pos.column - 1);
    }
    static ofRange(range) {
      return _TextLength.betweenPositions(range.getStartPosition(), range.getEndPosition());
    }
    static ofText(text) {
      let line = 0;
      let column = 0;
      for (const c of text) {
        if (c === "\n") {
          line++;
          column = 0;
        } else {
          column++;
        }
      }
      return new _TextLength(line, column);
    }
    constructor(lineCount, columnCount) {
      this.lineCount = lineCount;
      this.columnCount = columnCount;
    }
    isGreaterThanOrEqualTo(other) {
      if (this.lineCount !== other.lineCount) {
        return this.lineCount > other.lineCount;
      }
      return this.columnCount >= other.columnCount;
    }
    add(other) {
      if (other.lineCount === 0) {
        return new _TextLength(this.lineCount, this.columnCount + other.columnCount);
      } else {
        return new _TextLength(this.lineCount + other.lineCount, other.columnCount);
      }
    }
    createRange(startPosition) {
      if (this.lineCount === 0) {
        return new Range$1(startPosition.lineNumber, startPosition.column, startPosition.lineNumber, startPosition.column + this.columnCount);
      } else {
        return new Range$1(startPosition.lineNumber, startPosition.column, startPosition.lineNumber + this.lineCount, this.columnCount + 1);
      }
    }
    toRange() {
      return new Range$1(1, 1, this.lineCount + 1, this.columnCount + 1);
    }
    toLineRange() {
      return LineRange.ofLength(1, this.lineCount + 1);
    }
    addToPosition(position) {
      if (this.lineCount === 0) {
        return new Position$1(position.lineNumber, position.column + this.columnCount);
      } else {
        return new Position$1(position.lineNumber + this.lineCount, this.columnCount + 1);
      }
    }
    toString() {
      return `${this.lineCount},${this.columnCount}`;
    }
  };
  _TextLength.zero = new _TextLength(0, 0);
  let TextLength = _TextLength;
  class PositionOffsetTransformerBase {
    getOffsetRange(range) {
      return new OffsetRange(this.getOffset(range.getStartPosition()), this.getOffset(range.getEndPosition()));
    }
    getRange(offsetRange) {
      return Range$1.fromPositions(this.getPosition(offsetRange.start), this.getPosition(offsetRange.endExclusive));
    }
    getStringReplacement(edit) {
      return new Deps.deps.StringReplacement(this.getOffsetRange(edit.range), edit.text);
    }
    getTextReplacement(edit) {
      return new Deps.deps.TextReplacement(this.getRange(edit.replaceRange), edit.newText);
    }
    getTextEdit(edit) {
      const edits = edit.replacements.map((e) => this.getTextReplacement(e));
      return new Deps.deps.TextEdit(edits);
    }
  }
  const _Deps = class _Deps {
    static get deps() {
      if (!this._deps) {
        throw new Error("Dependencies not set. Call _setDependencies first.");
      }
      return this._deps;
    }
  };
  _Deps._deps = void 0;
  let Deps = _Deps;
  class PositionOffsetTransformer extends PositionOffsetTransformerBase {
    constructor(text) {
      super();
      this.text = text;
      this.lineStartOffsetByLineIdx = [];
      this.lineEndOffsetByLineIdx = [];
      this.lineStartOffsetByLineIdx.push(0);
      for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === "\n") {
          this.lineStartOffsetByLineIdx.push(i + 1);
          if (i > 0 && text.charAt(i - 1) === "\r") {
            this.lineEndOffsetByLineIdx.push(i - 1);
          } else {
            this.lineEndOffsetByLineIdx.push(i);
          }
        }
      }
      this.lineEndOffsetByLineIdx.push(text.length);
    }
    getOffset(position) {
      const valPos = this._validatePosition(position);
      return this.lineStartOffsetByLineIdx[valPos.lineNumber - 1] + valPos.column - 1;
    }
    _validatePosition(position) {
      if (position.lineNumber < 1) {
        return new Position$1(1, 1);
      }
      const lineCount = this.textLength.lineCount + 1;
      if (position.lineNumber > lineCount) {
        const lineLength2 = this.getLineLength(lineCount);
        return new Position$1(lineCount, lineLength2 + 1);
      }
      if (position.column < 1) {
        return new Position$1(position.lineNumber, 1);
      }
      const lineLength = this.getLineLength(position.lineNumber);
      if (position.column - 1 > lineLength) {
        return new Position$1(position.lineNumber, lineLength + 1);
      }
      return position;
    }
    getPosition(offset) {
      const idx = findLastIdxMonotonous(this.lineStartOffsetByLineIdx, (i) => i <= offset);
      const lineNumber = idx + 1;
      const column = offset - this.lineStartOffsetByLineIdx[idx] + 1;
      return new Position$1(lineNumber, column);
    }
    get textLength() {
      const lineIdx = this.lineStartOffsetByLineIdx.length - 1;
      return new Deps.deps.TextLength(lineIdx, this.text.length - this.lineStartOffsetByLineIdx[lineIdx]);
    }
    getLineLength(lineNumber) {
      return this.lineEndOffsetByLineIdx[lineNumber - 1] - this.lineStartOffsetByLineIdx[lineNumber - 1];
    }
  }
  class AbstractText {
    constructor() {
      this._transformer = void 0;
    }
    get endPositionExclusive() {
      return this.length.addToPosition(new Position$1(1, 1));
    }
    get lineRange() {
      return this.length.toLineRange();
    }
    getValue() {
      return this.getValueOfRange(this.length.toRange());
    }
    getValueOfOffsetRange(range) {
      return this.getValueOfRange(this.getTransformer().getRange(range));
    }
    getLineLength(lineNumber) {
      return this.getValueOfRange(new Range$1(lineNumber, 1, lineNumber, Number.MAX_SAFE_INTEGER)).length;
    }
    getTransformer() {
      if (!this._transformer) {
        this._transformer = new PositionOffsetTransformer(this.getValue());
      }
      return this._transformer;
    }
    getLineAt(lineNumber) {
      return this.getValueOfRange(new Range$1(lineNumber, 1, lineNumber, Number.MAX_SAFE_INTEGER));
    }
  }
  class LineBasedText extends AbstractText {
    constructor(_getLineContent, _lineCount) {
      assert(_lineCount >= 1);
      super();
      this._getLineContent = _getLineContent;
      this._lineCount = _lineCount;
    }
    getValueOfRange(range) {
      if (range.startLineNumber === range.endLineNumber) {
        return this._getLineContent(range.startLineNumber).substring(range.startColumn - 1, range.endColumn - 1);
      }
      let result = this._getLineContent(range.startLineNumber).substring(range.startColumn - 1);
      for (let i = range.startLineNumber + 1; i < range.endLineNumber; i++) {
        result += "\n" + this._getLineContent(i);
      }
      result += "\n" + this._getLineContent(range.endLineNumber).substring(0, range.endColumn - 1);
      return result;
    }
    getLineLength(lineNumber) {
      return this._getLineContent(lineNumber).length;
    }
    get length() {
      const lastLine = this._getLineContent(this._lineCount);
      return new TextLength(this._lineCount - 1, lastLine.length);
    }
  }
  class ArrayText extends LineBasedText {
    constructor(lines) {
      super((lineNumber) => lines[lineNumber - 1], lines.length);
    }
  }
  class TextReplacement {
    static joinReplacements(replacements, initialValue) {
      if (replacements.length === 0) {
        throw new BugIndicatingError();
      }
      if (replacements.length === 1) {
        return replacements[0];
      }
      const startPos = replacements[0].range.getStartPosition();
      const endPos = replacements[replacements.length - 1].range.getEndPosition();
      let newText = "";
      for (let i = 0; i < replacements.length; i++) {
        const curEdit = replacements[i];
        newText += curEdit.text;
        if (i < replacements.length - 1) {
          const nextEdit = replacements[i + 1];
          const gapRange = Range$1.fromPositions(curEdit.range.getEndPosition(), nextEdit.range.getStartPosition());
          const gapText = initialValue.getValueOfRange(gapRange);
          newText += gapText;
        }
      }
      return new TextReplacement(Range$1.fromPositions(startPos, endPos), newText);
    }
    static fromStringReplacement(replacement, initialState) {
      return new TextReplacement(initialState.getTransformer().getRange(replacement.replaceRange), replacement.newText);
    }
    static delete(range) {
      return new TextReplacement(range, "");
    }
    constructor(range, text) {
      this.range = range;
      this.text = text;
    }
    get isEmpty() {
      return this.range.isEmpty() && this.text.length === 0;
    }
    static equals(first, second) {
      return first.range.equalsRange(second.range) && first.text === second.text;
    }
    equals(other) {
      return TextReplacement.equals(this, other);
    }
    removeCommonPrefixAndSuffix(text) {
      const prefix = this.removeCommonPrefix(text);
      const suffix = prefix.removeCommonSuffix(text);
      return suffix;
    }
    removeCommonPrefix(text) {
      const normalizedOriginalText = text.getValueOfRange(this.range).replaceAll("\r\n", "\n");
      const normalizedModifiedText = this.text.replaceAll("\r\n", "\n");
      const commonPrefixLen = commonPrefixLength(normalizedOriginalText, normalizedModifiedText);
      const start2 = TextLength.ofText(normalizedOriginalText.substring(0, commonPrefixLen)).addToPosition(this.range.getStartPosition());
      const newText = normalizedModifiedText.substring(commonPrefixLen);
      const range = Range$1.fromPositions(start2, this.range.getEndPosition());
      return new TextReplacement(range, newText);
    }
    removeCommonSuffix(text) {
      const normalizedOriginalText = text.getValueOfRange(this.range).replaceAll("\r\n", "\n");
      const normalizedModifiedText = this.text.replaceAll("\r\n", "\n");
      const commonSuffixLen = commonSuffixLength(normalizedOriginalText, normalizedModifiedText);
      const end = TextLength.ofText(normalizedOriginalText.substring(0, normalizedOriginalText.length - commonSuffixLen)).addToPosition(this.range.getStartPosition());
      const newText = normalizedModifiedText.substring(0, normalizedModifiedText.length - commonSuffixLen);
      const range = Range$1.fromPositions(this.range.getStartPosition(), end);
      return new TextReplacement(range, newText);
    }
    toString() {
      const start2 = this.range.getStartPosition();
      const end = this.range.getEndPosition();
      return `(${start2.lineNumber},${start2.column} -> ${end.lineNumber},${end.column}): "${this.text}"`;
    }
  }
  class LineRangeMapping {
    static inverse(mapping, originalLineCount, modifiedLineCount) {
      const result = [];
      let lastOriginalEndLineNumber = 1;
      let lastModifiedEndLineNumber = 1;
      for (const m of mapping) {
        const r2 = new LineRangeMapping(new LineRange(lastOriginalEndLineNumber, m.original.startLineNumber), new LineRange(lastModifiedEndLineNumber, m.modified.startLineNumber));
        if (!r2.modified.isEmpty) {
          result.push(r2);
        }
        lastOriginalEndLineNumber = m.original.endLineNumberExclusive;
        lastModifiedEndLineNumber = m.modified.endLineNumberExclusive;
      }
      const r = new LineRangeMapping(new LineRange(lastOriginalEndLineNumber, originalLineCount + 1), new LineRange(lastModifiedEndLineNumber, modifiedLineCount + 1));
      if (!r.modified.isEmpty) {
        result.push(r);
      }
      return result;
    }
    static clip(mapping, originalRange, modifiedRange) {
      const result = [];
      for (const m of mapping) {
        const original = m.original.intersect(originalRange);
        const modified = m.modified.intersect(modifiedRange);
        if (original && !original.isEmpty && modified && !modified.isEmpty) {
          result.push(new LineRangeMapping(original, modified));
        }
      }
      return result;
    }
    constructor(originalRange, modifiedRange) {
      this.original = originalRange;
      this.modified = modifiedRange;
    }
    toString() {
      return `{${this.original.toString()}->${this.modified.toString()}}`;
    }
    flip() {
      return new LineRangeMapping(this.modified, this.original);
    }
    join(other) {
      return new LineRangeMapping(this.original.join(other.original), this.modified.join(other.modified));
    }
    /**
     * This method assumes that the LineRangeMapping describes a valid diff!
     * I.e. if one range is empty, the other range cannot be the entire document.
     * It avoids various problems when the line range points to non-existing line-numbers.
    */
    toRangeMapping() {
      const origInclusiveRange = this.original.toInclusiveRange();
      const modInclusiveRange = this.modified.toInclusiveRange();
      if (origInclusiveRange && modInclusiveRange) {
        return new RangeMapping(origInclusiveRange, modInclusiveRange);
      } else if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
        if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) {
          throw new BugIndicatingError("not a valid diff");
        }
        return new RangeMapping(new Range$1(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new Range$1(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
      } else {
        return new RangeMapping(new Range$1(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new Range$1(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
      }
    }
    /**
     * This method assumes that the LineRangeMapping describes a valid diff!
     * I.e. if one range is empty, the other range cannot be the entire document.
     * It avoids various problems when the line range points to non-existing line-numbers.
    */
    toRangeMapping2(original, modified) {
      if (isValidLineNumber(this.original.endLineNumberExclusive, original) && isValidLineNumber(this.modified.endLineNumberExclusive, modified)) {
        return new RangeMapping(new Range$1(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new Range$1(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
      }
      if (!this.original.isEmpty && !this.modified.isEmpty) {
        return new RangeMapping(Range$1.fromPositions(new Position$1(this.original.startLineNumber, 1), normalizePosition(new Position$1(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), original)), Range$1.fromPositions(new Position$1(this.modified.startLineNumber, 1), normalizePosition(new Position$1(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), modified)));
      }
      if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) {
        return new RangeMapping(Range$1.fromPositions(normalizePosition(new Position$1(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), original), normalizePosition(new Position$1(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), original)), Range$1.fromPositions(normalizePosition(new Position$1(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), modified), normalizePosition(new Position$1(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), modified)));
      }
      throw new BugIndicatingError();
    }
  }
  function normalizePosition(position, content) {
    if (position.lineNumber < 1) {
      return new Position$1(1, 1);
    }
    if (position.lineNumber > content.length) {
      return new Position$1(content.length, content[content.length - 1].length + 1);
    }
    const line = content[position.lineNumber - 1];
    if (position.column > line.length + 1) {
      return new Position$1(position.lineNumber, line.length + 1);
    }
    return position;
  }
  function isValidLineNumber(lineNumber, lines) {
    return lineNumber >= 1 && lineNumber <= lines.length;
  }
  class DetailedLineRangeMapping extends LineRangeMapping {
    static fromRangeMappings(rangeMappings) {
      const originalRange = LineRange.join(rangeMappings.map((r) => LineRange.fromRangeInclusive(r.originalRange)));
      const modifiedRange = LineRange.join(rangeMappings.map((r) => LineRange.fromRangeInclusive(r.modifiedRange)));
      return new DetailedLineRangeMapping(originalRange, modifiedRange, rangeMappings);
    }
    constructor(originalRange, modifiedRange, innerChanges) {
      super(originalRange, modifiedRange);
      this.innerChanges = innerChanges;
    }
    flip() {
      return new DetailedLineRangeMapping(this.modified, this.original, this.innerChanges?.map((c) => c.flip()));
    }
    withInnerChangesFromLineRanges() {
      return new DetailedLineRangeMapping(this.original, this.modified, [this.toRangeMapping()]);
    }
  }
  class RangeMapping {
    static fromEdit(edit) {
      const newRanges = edit.getNewRanges();
      const result = edit.replacements.map((e, idx) => new RangeMapping(e.range, newRanges[idx]));
      return result;
    }
    static assertSorted(rangeMappings) {
      for (let i = 1; i < rangeMappings.length; i++) {
        const previous = rangeMappings[i - 1];
        const current = rangeMappings[i];
        if (!(previous.originalRange.getEndPosition().isBeforeOrEqual(current.originalRange.getStartPosition()) && previous.modifiedRange.getEndPosition().isBeforeOrEqual(current.modifiedRange.getStartPosition()))) {
          throw new BugIndicatingError("Range mappings must be sorted");
        }
      }
    }
    constructor(originalRange, modifiedRange) {
      this.originalRange = originalRange;
      this.modifiedRange = modifiedRange;
    }
    toString() {
      return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
    }
    flip() {
      return new RangeMapping(this.modifiedRange, this.originalRange);
    }
    /**
     * Creates a single text edit that describes the change from the original to the modified text.
    */
    toTextEdit(modified) {
      const newText = modified.getValueOfRange(this.modifiedRange);
      return new TextReplacement(this.originalRange, newText);
    }
  }
  function lineRangeMappingFromRangeMappings(alignments, originalLines, modifiedLines, dontAssertStartLine = false) {
    const changes = [];
    for (const g of groupAdjacentBy(alignments.map((a2) => getLineRangeMapping(a2, originalLines, modifiedLines)), (a1, a2) => a1.original.intersectsOrTouches(a2.original) || a1.modified.intersectsOrTouches(a2.modified))) {
      const first = g[0];
      const last = g[g.length - 1];
      changes.push(new DetailedLineRangeMapping(first.original.join(last.original), first.modified.join(last.modified), g.map((a2) => a2.innerChanges[0])));
    }
    assertFn(() => {
      if (!dontAssertStartLine && changes.length > 0) {
        if (changes[0].modified.startLineNumber !== changes[0].original.startLineNumber) {
          return false;
        }
        if (modifiedLines.length.lineCount - changes[changes.length - 1].modified.endLineNumberExclusive !== originalLines.length.lineCount - changes[changes.length - 1].original.endLineNumberExclusive) {
          return false;
        }
      }
      return checkAdjacentItems(changes, (m1, m2) => m2.original.startLineNumber - m1.original.endLineNumberExclusive === m2.modified.startLineNumber - m1.modified.endLineNumberExclusive && // There has to be an unchanged line in between (otherwise both diffs should have been joined)
      m1.original.endLineNumberExclusive < m2.original.startLineNumber && m1.modified.endLineNumberExclusive < m2.modified.startLineNumber);
    });
    return changes;
  }
  function getLineRangeMapping(rangeMapping, originalLines, modifiedLines) {
    let lineStartDelta = 0;
    let lineEndDelta = 0;
    if (rangeMapping.modifiedRange.endColumn === 1 && rangeMapping.originalRange.endColumn === 1 && rangeMapping.originalRange.startLineNumber + lineStartDelta <= rangeMapping.originalRange.endLineNumber && rangeMapping.modifiedRange.startLineNumber + lineStartDelta <= rangeMapping.modifiedRange.endLineNumber) {
      lineEndDelta = -1;
    }
    if (rangeMapping.modifiedRange.startColumn - 1 >= modifiedLines.getLineLength(rangeMapping.modifiedRange.startLineNumber) && rangeMapping.originalRange.startColumn - 1 >= originalLines.getLineLength(rangeMapping.originalRange.startLineNumber) && rangeMapping.originalRange.startLineNumber <= rangeMapping.originalRange.endLineNumber + lineEndDelta && rangeMapping.modifiedRange.startLineNumber <= rangeMapping.modifiedRange.endLineNumber + lineEndDelta) {
      lineStartDelta = 1;
    }
    const originalLineRange = new LineRange(rangeMapping.originalRange.startLineNumber + lineStartDelta, rangeMapping.originalRange.endLineNumber + 1 + lineEndDelta);
    const modifiedLineRange = new LineRange(rangeMapping.modifiedRange.startLineNumber + lineStartDelta, rangeMapping.modifiedRange.endLineNumber + 1 + lineEndDelta);
    return new DetailedLineRangeMapping(originalLineRange, modifiedLineRange, [rangeMapping]);
  }
  const MINIMUM_MATCHING_CHARACTER_LENGTH = 3;
  class LegacyLinesDiffComputer {
    computeDiff(originalLines, modifiedLines, options) {
      const diffComputer = new DiffComputer(originalLines, modifiedLines, {
        maxComputationTime: options.maxComputationTimeMs,
        shouldIgnoreTrimWhitespace: options.ignoreTrimWhitespace,
        shouldComputeCharChanges: true,
        shouldMakePrettyDiff: true,
        shouldPostProcessCharChanges: true
      });
      const result = diffComputer.computeDiff();
      const changes = [];
      let lastChange = null;
      for (const c of result.changes) {
        let originalRange;
        if (c.originalEndLineNumber === 0) {
          originalRange = new LineRange(c.originalStartLineNumber + 1, c.originalStartLineNumber + 1);
        } else {
          originalRange = new LineRange(c.originalStartLineNumber, c.originalEndLineNumber + 1);
        }
        let modifiedRange;
        if (c.modifiedEndLineNumber === 0) {
          modifiedRange = new LineRange(c.modifiedStartLineNumber + 1, c.modifiedStartLineNumber + 1);
        } else {
          modifiedRange = new LineRange(c.modifiedStartLineNumber, c.modifiedEndLineNumber + 1);
        }
        let change = new DetailedLineRangeMapping(originalRange, modifiedRange, c.charChanges?.map((c2) => new RangeMapping(new Range$1(c2.originalStartLineNumber, c2.originalStartColumn, c2.originalEndLineNumber, c2.originalEndColumn), new Range$1(c2.modifiedStartLineNumber, c2.modifiedStartColumn, c2.modifiedEndLineNumber, c2.modifiedEndColumn))));
        if (lastChange) {
          if (lastChange.modified.endLineNumberExclusive === change.modified.startLineNumber || lastChange.original.endLineNumberExclusive === change.original.startLineNumber) {
            change = new DetailedLineRangeMapping(lastChange.original.join(change.original), lastChange.modified.join(change.modified), lastChange.innerChanges && change.innerChanges ? lastChange.innerChanges.concat(change.innerChanges) : void 0);
            changes.pop();
          }
        }
        changes.push(change);
        lastChange = change;
      }
      assertFn(() => {
        return checkAdjacentItems(changes, (m1, m2) => m2.original.startLineNumber - m1.original.endLineNumberExclusive === m2.modified.startLineNumber - m1.modified.endLineNumberExclusive && // There has to be an unchanged line in between (otherwise both diffs should have been joined)
        m1.original.endLineNumberExclusive < m2.original.startLineNumber && m1.modified.endLineNumberExclusive < m2.modified.startLineNumber);
      });
      return new LinesDiff(changes, [], result.quitEarly);
    }
  }
  function computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
    const diffAlgo = new LcsDiff(originalSequence, modifiedSequence, continueProcessingPredicate);
    return diffAlgo.ComputeDiff(pretty);
  }
  let LineSequence$1 = class LineSequence {
    constructor(lines) {
      const startColumns = [];
      const endColumns = [];
      for (let i = 0, length = lines.length; i < length; i++) {
        startColumns[i] = getFirstNonBlankColumn(lines[i], 1);
        endColumns[i] = getLastNonBlankColumn(lines[i], 1);
      }
      this.lines = lines;
      this._startColumns = startColumns;
      this._endColumns = endColumns;
    }
    getElements() {
      const elements = [];
      for (let i = 0, len = this.lines.length; i < len; i++) {
        elements[i] = this.lines[i].substring(this._startColumns[i] - 1, this._endColumns[i] - 1);
      }
      return elements;
    }
    getStrictElement(index) {
      return this.lines[index];
    }
    getStartLineNumber(i) {
      return i + 1;
    }
    getEndLineNumber(i) {
      return i + 1;
    }
    createCharSequence(shouldIgnoreTrimWhitespace, startIndex, endIndex) {
      const charCodes = [];
      const lineNumbers = [];
      const columns = [];
      let len = 0;
      for (let index = startIndex; index <= endIndex; index++) {
        const lineContent = this.lines[index];
        const startColumn = shouldIgnoreTrimWhitespace ? this._startColumns[index] : 1;
        const endColumn = shouldIgnoreTrimWhitespace ? this._endColumns[index] : lineContent.length + 1;
        for (let col = startColumn; col < endColumn; col++) {
          charCodes[len] = lineContent.charCodeAt(col - 1);
          lineNumbers[len] = index + 1;
          columns[len] = col;
          len++;
        }
        if (!shouldIgnoreTrimWhitespace && index < endIndex) {
          charCodes[len] = 10;
          lineNumbers[len] = index + 1;
          columns[len] = lineContent.length + 1;
          len++;
        }
      }
      return new CharSequence(charCodes, lineNumbers, columns);
    }
  };
  class CharSequence {
    constructor(charCodes, lineNumbers, columns) {
      this._charCodes = charCodes;
      this._lineNumbers = lineNumbers;
      this._columns = columns;
    }
    toString() {
      return "[" + this._charCodes.map((s, idx) => (s === 10 ? "\\n" : String.fromCharCode(s)) + `-(${this._lineNumbers[idx]},${this._columns[idx]})`).join(", ") + "]";
    }
    _assertIndex(index, arr) {
      if (index < 0 || index >= arr.length) {
        throw new Error(`Illegal index`);
      }
    }
    getElements() {
      return this._charCodes;
    }
    getStartLineNumber(i) {
      if (i > 0 && i === this._lineNumbers.length) {
        return this.getEndLineNumber(i - 1);
      }
      this._assertIndex(i, this._lineNumbers);
      return this._lineNumbers[i];
    }
    getEndLineNumber(i) {
      if (i === -1) {
        return this.getStartLineNumber(i + 1);
      }
      this._assertIndex(i, this._lineNumbers);
      if (this._charCodes[i] === 10) {
        return this._lineNumbers[i] + 1;
      }
      return this._lineNumbers[i];
    }
    getStartColumn(i) {
      if (i > 0 && i === this._columns.length) {
        return this.getEndColumn(i - 1);
      }
      this._assertIndex(i, this._columns);
      return this._columns[i];
    }
    getEndColumn(i) {
      if (i === -1) {
        return this.getStartColumn(i + 1);
      }
      this._assertIndex(i, this._columns);
      if (this._charCodes[i] === 10) {
        return 1;
      }
      return this._columns[i] + 1;
    }
  }
  class CharChange {
    constructor(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
      this.originalStartLineNumber = originalStartLineNumber;
      this.originalStartColumn = originalStartColumn;
      this.originalEndLineNumber = originalEndLineNumber;
      this.originalEndColumn = originalEndColumn;
      this.modifiedStartLineNumber = modifiedStartLineNumber;
      this.modifiedStartColumn = modifiedStartColumn;
      this.modifiedEndLineNumber = modifiedEndLineNumber;
      this.modifiedEndColumn = modifiedEndColumn;
    }
    static createFromDiffChange(diffChange, originalCharSequence, modifiedCharSequence) {
      const originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
      const originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
      const originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
      const originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
      const modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
      const modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
      const modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
      const modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
      return new CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
    }
  }
  function postProcessCharChanges(rawChanges) {
    if (rawChanges.length <= 1) {
      return rawChanges;
    }
    const result = [rawChanges[0]];
    let prevChange = result[0];
    for (let i = 1, len = rawChanges.length; i < len; i++) {
      const currChange = rawChanges[i];
      const originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
      const modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength);
      const matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);
      if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
        prevChange.originalLength = currChange.originalStart + currChange.originalLength - prevChange.originalStart;
        prevChange.modifiedLength = currChange.modifiedStart + currChange.modifiedLength - prevChange.modifiedStart;
      } else {
        result.push(currChange);
        prevChange = currChange;
      }
    }
    return result;
  }
  class LineChange {
    constructor(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
      this.originalStartLineNumber = originalStartLineNumber;
      this.originalEndLineNumber = originalEndLineNumber;
      this.modifiedStartLineNumber = modifiedStartLineNumber;
      this.modifiedEndLineNumber = modifiedEndLineNumber;
      this.charChanges = charChanges;
    }
    static createFromDiffResult(shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueCharDiff, shouldComputeCharChanges, shouldPostProcessCharChanges) {
      let originalStartLineNumber;
      let originalEndLineNumber;
      let modifiedStartLineNumber;
      let modifiedEndLineNumber;
      let charChanges = void 0;
      if (diffChange.originalLength === 0) {
        originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
        originalEndLineNumber = 0;
      } else {
        originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
        originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
      }
      if (diffChange.modifiedLength === 0) {
        modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
        modifiedEndLineNumber = 0;
      } else {
        modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
        modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
      }
      if (shouldComputeCharChanges && diffChange.originalLength > 0 && diffChange.originalLength < 20 && diffChange.modifiedLength > 0 && diffChange.modifiedLength < 20 && continueCharDiff()) {
        const originalCharSequence = originalLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
        const modifiedCharSequence = modifiedLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);
        if (originalCharSequence.getElements().length > 0 && modifiedCharSequence.getElements().length > 0) {
          let rawChanges = computeDiff(originalCharSequence, modifiedCharSequence, continueCharDiff, true).changes;
          if (shouldPostProcessCharChanges) {
            rawChanges = postProcessCharChanges(rawChanges);
          }
          charChanges = [];
          for (let i = 0, length = rawChanges.length; i < length; i++) {
            charChanges.push(CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
          }
        }
      }
      return new LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
    }
  }
  class DiffComputer {
    constructor(originalLines, modifiedLines, opts) {
      this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
      this.shouldPostProcessCharChanges = opts.shouldPostProcessCharChanges;
      this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
      this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
      this.originalLines = originalLines;
      this.modifiedLines = modifiedLines;
      this.original = new LineSequence$1(originalLines);
      this.modified = new LineSequence$1(modifiedLines);
      this.continueLineDiff = createContinueProcessingPredicate(opts.maxComputationTime);
      this.continueCharDiff = createContinueProcessingPredicate(opts.maxComputationTime === 0 ? 0 : Math.min(opts.maxComputationTime, 5e3));
    }
    computeDiff() {
      if (this.original.lines.length === 1 && this.original.lines[0].length === 0) {
        if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
          return {
            quitEarly: false,
            changes: []
          };
        }
        return {
          quitEarly: false,
          changes: [{
            originalStartLineNumber: 1,
            originalEndLineNumber: 1,
            modifiedStartLineNumber: 1,
            modifiedEndLineNumber: this.modified.lines.length,
            charChanges: void 0
          }]
        };
      }
      if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
        return {
          quitEarly: false,
          changes: [{
            originalStartLineNumber: 1,
            originalEndLineNumber: this.original.lines.length,
            modifiedStartLineNumber: 1,
            modifiedEndLineNumber: 1,
            charChanges: void 0
          }]
        };
      }
      const diffResult = computeDiff(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff);
      const rawChanges = diffResult.changes;
      const quitEarly = diffResult.quitEarly;
      if (this.shouldIgnoreTrimWhitespace) {
        const lineChanges = [];
        for (let i = 0, length = rawChanges.length; i < length; i++) {
          lineChanges.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, rawChanges[i], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        }
        return {
          quitEarly,
          changes: lineChanges
        };
      }
      const result = [];
      let originalLineIndex = 0;
      let modifiedLineIndex = 0;
      for (let i = -1, len = rawChanges.length; i < len; i++) {
        const nextChange = i + 1 < len ? rawChanges[i + 1] : null;
        const originalStop = nextChange ? nextChange.originalStart : this.originalLines.length;
        const modifiedStop = nextChange ? nextChange.modifiedStart : this.modifiedLines.length;
        while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
          const originalLine = this.originalLines[originalLineIndex];
          const modifiedLine = this.modifiedLines[modifiedLineIndex];
          if (originalLine !== modifiedLine) {
            {
              let originalStartColumn = getFirstNonBlankColumn(originalLine, 1);
              let modifiedStartColumn = getFirstNonBlankColumn(modifiedLine, 1);
              while (originalStartColumn > 1 && modifiedStartColumn > 1) {
                const originalChar = originalLine.charCodeAt(originalStartColumn - 2);
                const modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);
                if (originalChar !== modifiedChar) {
                  break;
                }
                originalStartColumn--;
                modifiedStartColumn--;
              }
              if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
              }
            }
            {
              let originalEndColumn = getLastNonBlankColumn(originalLine, 1);
              let modifiedEndColumn = getLastNonBlankColumn(modifiedLine, 1);
              const originalMaxColumn = originalLine.length + 1;
              const modifiedMaxColumn = modifiedLine.length + 1;
              while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
                const originalChar = originalLine.charCodeAt(originalEndColumn - 1);
                const modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);
                if (originalChar !== modifiedChar) {
                  break;
                }
                originalEndColumn++;
                modifiedEndColumn++;
              }
              if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
                this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
              }
            }
          }
          originalLineIndex++;
          modifiedLineIndex++;
        }
        if (nextChange) {
          result.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, nextChange, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
          originalLineIndex += nextChange.originalLength;
          modifiedLineIndex += nextChange.modifiedLength;
        }
      }
      return {
        quitEarly,
        changes: result
      };
    }
    _pushTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
      if (this._mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
        return;
      }
      let charChanges = void 0;
      if (this.shouldComputeCharChanges) {
        charChanges = [new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
      }
      result.push(new LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
    }
    _mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
      const len = result.length;
      if (len === 0) {
        return false;
      }
      const prevChange = result[len - 1];
      if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
        return false;
      }
      if (prevChange.originalEndLineNumber === originalLineNumber && prevChange.modifiedEndLineNumber === modifiedLineNumber) {
        if (this.shouldComputeCharChanges && prevChange.charChanges) {
          prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
        }
        return true;
      }
      if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
        prevChange.originalEndLineNumber = originalLineNumber;
        prevChange.modifiedEndLineNumber = modifiedLineNumber;
        if (this.shouldComputeCharChanges && prevChange.charChanges) {
          prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
        }
        return true;
      }
      return false;
    }
  }
  function getFirstNonBlankColumn(txt, defaultValue) {
    const r = firstNonWhitespaceIndex(txt);
    if (r === -1) {
      return defaultValue;
    }
    return r + 1;
  }
  function getLastNonBlankColumn(txt, defaultValue) {
    const r = lastNonWhitespaceIndex(txt);
    if (r === -1) {
      return defaultValue;
    }
    return r + 2;
  }
  function createContinueProcessingPredicate(maximumRuntime) {
    if (maximumRuntime === 0) {
      return () => true;
    }
    const startTime = Date.now();
    return () => {
      return Date.now() - startTime < maximumRuntime;
    };
  }
  class DiffAlgorithmResult {
    static trivial(seq1, seq2) {
      return new DiffAlgorithmResult([new SequenceDiff(OffsetRange.ofLength(seq1.length), OffsetRange.ofLength(seq2.length))], false);
    }
    static trivialTimedOut(seq1, seq2) {
      return new DiffAlgorithmResult([new SequenceDiff(OffsetRange.ofLength(seq1.length), OffsetRange.ofLength(seq2.length))], true);
    }
    constructor(diffs, hitTimeout) {
      this.diffs = diffs;
      this.hitTimeout = hitTimeout;
    }
  }
  class SequenceDiff {
    static invert(sequenceDiffs, doc1Length) {
      const result = [];
      forEachAdjacent(sequenceDiffs, (a2, b) => {
        result.push(SequenceDiff.fromOffsetPairs(a2 ? a2.getEndExclusives() : OffsetPair.zero, b ? b.getStarts() : new OffsetPair(doc1Length, (a2 ? a2.seq2Range.endExclusive - a2.seq1Range.endExclusive : 0) + doc1Length)));
      });
      return result;
    }
    static fromOffsetPairs(start2, endExclusive) {
      return new SequenceDiff(new OffsetRange(start2.offset1, endExclusive.offset1), new OffsetRange(start2.offset2, endExclusive.offset2));
    }
    static assertSorted(sequenceDiffs) {
      let last = void 0;
      for (const cur of sequenceDiffs) {
        if (last) {
          if (!(last.seq1Range.endExclusive <= cur.seq1Range.start && last.seq2Range.endExclusive <= cur.seq2Range.start)) {
            throw new BugIndicatingError("Sequence diffs must be sorted");
          }
        }
        last = cur;
      }
    }
    constructor(seq1Range, seq2Range) {
      this.seq1Range = seq1Range;
      this.seq2Range = seq2Range;
    }
    swap() {
      return new SequenceDiff(this.seq2Range, this.seq1Range);
    }
    toString() {
      return `${this.seq1Range} <-> ${this.seq2Range}`;
    }
    join(other) {
      return new SequenceDiff(this.seq1Range.join(other.seq1Range), this.seq2Range.join(other.seq2Range));
    }
    delta(offset) {
      if (offset === 0) {
        return this;
      }
      return new SequenceDiff(this.seq1Range.delta(offset), this.seq2Range.delta(offset));
    }
    deltaStart(offset) {
      if (offset === 0) {
        return this;
      }
      return new SequenceDiff(this.seq1Range.deltaStart(offset), this.seq2Range.deltaStart(offset));
    }
    deltaEnd(offset) {
      if (offset === 0) {
        return this;
      }
      return new SequenceDiff(this.seq1Range.deltaEnd(offset), this.seq2Range.deltaEnd(offset));
    }
    intersect(other) {
      const i1 = this.seq1Range.intersect(other.seq1Range);
      const i2 = this.seq2Range.intersect(other.seq2Range);
      if (!i1 || !i2) {
        return void 0;
      }
      return new SequenceDiff(i1, i2);
    }
    getStarts() {
      return new OffsetPair(this.seq1Range.start, this.seq2Range.start);
    }
    getEndExclusives() {
      return new OffsetPair(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
    }
  }
  const _OffsetPair = class _OffsetPair {
    constructor(offset1, offset2) {
      this.offset1 = offset1;
      this.offset2 = offset2;
    }
    toString() {
      return `${this.offset1} <-> ${this.offset2}`;
    }
    delta(offset) {
      if (offset === 0) {
        return this;
      }
      return new _OffsetPair(this.offset1 + offset, this.offset2 + offset);
    }
    equals(other) {
      return this.offset1 === other.offset1 && this.offset2 === other.offset2;
    }
  };
  _OffsetPair.zero = new _OffsetPair(0, 0);
  _OffsetPair.max = new _OffsetPair(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  let OffsetPair = _OffsetPair;
  const _InfiniteTimeout = class _InfiniteTimeout {
    isValid() {
      return true;
    }
  };
  _InfiniteTimeout.instance = new _InfiniteTimeout();
  let InfiniteTimeout = _InfiniteTimeout;
  class DateTimeout {
    constructor(timeout) {
      this.timeout = timeout;
      this.startTime = Date.now();
      this.valid = true;
      if (timeout <= 0) {
        throw new BugIndicatingError("timeout must be positive");
      }
    }
    // Recommendation: Set a log-point `{this.disable()}` in the body
    isValid() {
      const valid = Date.now() - this.startTime < this.timeout;
      if (!valid && this.valid) {
        this.valid = false;
      }
      return this.valid;
    }
  }
  class Array2D {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.array = [];
      this.array = new Array(width * height);
    }
    get(x, y) {
      return this.array[x + y * this.width];
    }
    set(x, y, value) {
      this.array[x + y * this.width] = value;
    }
  }
  function isSpace(charCode) {
    return charCode === 32 || charCode === 9;
  }
  const _LineRangeFragment = class _LineRangeFragment {
    static getKey(chr) {
      let key = this.chrKeys.get(chr);
      if (key === void 0) {
        key = this.chrKeys.size;
        this.chrKeys.set(chr, key);
      }
      return key;
    }
    constructor(range, lines, source) {
      this.range = range;
      this.lines = lines;
      this.source = source;
      this.histogram = [];
      let counter = 0;
      for (let i = range.startLineNumber - 1; i < range.endLineNumberExclusive - 1; i++) {
        const line = lines[i];
        for (let j = 0; j < line.length; j++) {
          counter++;
          const chr = line[j];
          const key2 = _LineRangeFragment.getKey(chr);
          this.histogram[key2] = (this.histogram[key2] || 0) + 1;
        }
        counter++;
        const key = _LineRangeFragment.getKey("\n");
        this.histogram[key] = (this.histogram[key] || 0) + 1;
      }
      this.totalCount = counter;
    }
    computeSimilarity(other) {
      let sumDifferences = 0;
      const maxLength = Math.max(this.histogram.length, other.histogram.length);
      for (let i = 0; i < maxLength; i++) {
        sumDifferences += Math.abs((this.histogram[i] ?? 0) - (other.histogram[i] ?? 0));
      }
      return 1 - sumDifferences / (this.totalCount + other.totalCount);
    }
  };
  _LineRangeFragment.chrKeys = /* @__PURE__ */ new Map();
  let LineRangeFragment = _LineRangeFragment;
  class DynamicProgrammingDiffing {
    compute(sequence1, sequence2, timeout = InfiniteTimeout.instance, equalityScore) {
      if (sequence1.length === 0 || sequence2.length === 0) {
        return DiffAlgorithmResult.trivial(sequence1, sequence2);
      }
      const lcsLengths = new Array2D(sequence1.length, sequence2.length);
      const directions = new Array2D(sequence1.length, sequence2.length);
      const lengths = new Array2D(sequence1.length, sequence2.length);
      for (let s12 = 0; s12 < sequence1.length; s12++) {
        for (let s22 = 0; s22 < sequence2.length; s22++) {
          if (!timeout.isValid()) {
            return DiffAlgorithmResult.trivialTimedOut(sequence1, sequence2);
          }
          const horizontalLen = s12 === 0 ? 0 : lcsLengths.get(s12 - 1, s22);
          const verticalLen = s22 === 0 ? 0 : lcsLengths.get(s12, s22 - 1);
          let extendedSeqScore;
          if (sequence1.getElement(s12) === sequence2.getElement(s22)) {
            if (s12 === 0 || s22 === 0) {
              extendedSeqScore = 0;
            } else {
              extendedSeqScore = lcsLengths.get(s12 - 1, s22 - 1);
            }
            if (s12 > 0 && s22 > 0 && directions.get(s12 - 1, s22 - 1) === 3) {
              extendedSeqScore += lengths.get(s12 - 1, s22 - 1);
            }
            extendedSeqScore += equalityScore ? equalityScore(s12, s22) : 1;
          } else {
            extendedSeqScore = -1;
          }
          const newValue = Math.max(horizontalLen, verticalLen, extendedSeqScore);
          if (newValue === extendedSeqScore) {
            const prevLen = s12 > 0 && s22 > 0 ? lengths.get(s12 - 1, s22 - 1) : 0;
            lengths.set(s12, s22, prevLen + 1);
            directions.set(s12, s22, 3);
          } else if (newValue === horizontalLen) {
            lengths.set(s12, s22, 0);
            directions.set(s12, s22, 1);
          } else if (newValue === verticalLen) {
            lengths.set(s12, s22, 0);
            directions.set(s12, s22, 2);
          }
          lcsLengths.set(s12, s22, newValue);
        }
      }
      const result = [];
      let lastAligningPosS1 = sequence1.length;
      let lastAligningPosS2 = sequence2.length;
      function reportDecreasingAligningPositions(s12, s22) {
        if (s12 + 1 !== lastAligningPosS1 || s22 + 1 !== lastAligningPosS2) {
          result.push(new SequenceDiff(new OffsetRange(s12 + 1, lastAligningPosS1), new OffsetRange(s22 + 1, lastAligningPosS2)));
        }
        lastAligningPosS1 = s12;
        lastAligningPosS2 = s22;
      }
      let s1 = sequence1.length - 1;
      let s2 = sequence2.length - 1;
      while (s1 >= 0 && s2 >= 0) {
        if (directions.get(s1, s2) === 3) {
          reportDecreasingAligningPositions(s1, s2);
          s1--;
          s2--;
        } else {
          if (directions.get(s1, s2) === 1) {
            s1--;
          } else {
            s2--;
          }
        }
      }
      reportDecreasingAligningPositions(-1, -1);
      result.reverse();
      return new DiffAlgorithmResult(result, false);
    }
  }
  class MyersDiffAlgorithm {
    compute(seq1, seq2, timeout = InfiniteTimeout.instance) {
      if (seq1.length === 0 || seq2.length === 0) {
        return DiffAlgorithmResult.trivial(seq1, seq2);
      }
      const seqX = seq1;
      const seqY = seq2;
      function getXAfterSnake(x, y) {
        while (x < seqX.length && y < seqY.length && seqX.getElement(x) === seqY.getElement(y)) {
          x++;
          y++;
        }
        return x;
      }
      let d = 0;
      const V = new FastInt32Array();
      V.set(0, getXAfterSnake(0, 0));
      const paths = new FastArrayNegativeIndices();
      paths.set(0, V.get(0) === 0 ? null : new SnakePath(null, 0, 0, V.get(0)));
      let k = 0;
      loop: while (true) {
        d++;
        if (!timeout.isValid()) {
          return DiffAlgorithmResult.trivialTimedOut(seqX, seqY);
        }
        const lowerBound = -Math.min(d, seqY.length + d % 2);
        const upperBound = Math.min(d, seqX.length + d % 2);
        for (k = lowerBound; k <= upperBound; k += 2) {
          const maxXofDLineTop = k === upperBound ? -1 : V.get(k + 1);
          const maxXofDLineLeft = k === lowerBound ? -1 : V.get(k - 1) + 1;
          const x = Math.min(Math.max(maxXofDLineTop, maxXofDLineLeft), seqX.length);
          const y = x - k;
          if (x > seqX.length || y > seqY.length) {
            continue;
          }
          const newMaxX = getXAfterSnake(x, y);
          V.set(k, newMaxX);
          const lastPath = x === maxXofDLineTop ? paths.get(k + 1) : paths.get(k - 1);
          paths.set(k, newMaxX !== x ? new SnakePath(lastPath, x, y, newMaxX - x) : lastPath);
          if (V.get(k) === seqX.length && V.get(k) - k === seqY.length) {
            break loop;
          }
        }
      }
      let path = paths.get(k);
      const result = [];
      let lastAligningPosS1 = seqX.length;
      let lastAligningPosS2 = seqY.length;
      while (true) {
        const endX = path ? path.x + path.length : 0;
        const endY = path ? path.y + path.length : 0;
        if (endX !== lastAligningPosS1 || endY !== lastAligningPosS2) {
          result.push(new SequenceDiff(new OffsetRange(endX, lastAligningPosS1), new OffsetRange(endY, lastAligningPosS2)));
        }
        if (!path) {
          break;
        }
        lastAligningPosS1 = path.x;
        lastAligningPosS2 = path.y;
        path = path.prev;
      }
      result.reverse();
      return new DiffAlgorithmResult(result, false);
    }
  }
  class SnakePath {
    constructor(prev, x, y, length) {
      this.prev = prev;
      this.x = x;
      this.y = y;
      this.length = length;
    }
  }
  class FastInt32Array {
    constructor() {
      this.positiveArr = new Int32Array(10);
      this.negativeArr = new Int32Array(10);
    }
    get(idx) {
      if (idx < 0) {
        idx = -idx - 1;
        return this.negativeArr[idx];
      } else {
        return this.positiveArr[idx];
      }
    }
    set(idx, value) {
      if (idx < 0) {
        idx = -idx - 1;
        if (idx >= this.negativeArr.length) {
          const arr = this.negativeArr;
          this.negativeArr = new Int32Array(arr.length * 2);
          this.negativeArr.set(arr);
        }
        this.negativeArr[idx] = value;
      } else {
        if (idx >= this.positiveArr.length) {
          const arr = this.positiveArr;
          this.positiveArr = new Int32Array(arr.length * 2);
          this.positiveArr.set(arr);
        }
        this.positiveArr[idx] = value;
      }
    }
  }
  class FastArrayNegativeIndices {
    constructor() {
      this.positiveArr = [];
      this.negativeArr = [];
    }
    get(idx) {
      if (idx < 0) {
        idx = -idx - 1;
        return this.negativeArr[idx];
      } else {
        return this.positiveArr[idx];
      }
    }
    set(idx, value) {
      if (idx < 0) {
        idx = -idx - 1;
        this.negativeArr[idx] = value;
      } else {
        this.positiveArr[idx] = value;
      }
    }
  }
  class LinesSliceCharSequence {
    constructor(lines, range, considerWhitespaceChanges) {
      this.lines = lines;
      this.range = range;
      this.considerWhitespaceChanges = considerWhitespaceChanges;
      this.elements = [];
      this.firstElementOffsetByLineIdx = [];
      this.lineStartOffsets = [];
      this.trimmedWsLengthsByLineIdx = [];
      this.firstElementOffsetByLineIdx.push(0);
      for (let lineNumber = this.range.startLineNumber; lineNumber <= this.range.endLineNumber; lineNumber++) {
        let line = lines[lineNumber - 1];
        let lineStartOffset = 0;
        if (lineNumber === this.range.startLineNumber && this.range.startColumn > 1) {
          lineStartOffset = this.range.startColumn - 1;
          line = line.substring(lineStartOffset);
        }
        this.lineStartOffsets.push(lineStartOffset);
        let trimmedWsLength = 0;
        if (!considerWhitespaceChanges) {
          const trimmedStartLine = line.trimStart();
          trimmedWsLength = line.length - trimmedStartLine.length;
          line = trimmedStartLine.trimEnd();
        }
        this.trimmedWsLengthsByLineIdx.push(trimmedWsLength);
        const lineLength = lineNumber === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - lineStartOffset - trimmedWsLength, line.length) : line.length;
        for (let i = 0; i < lineLength; i++) {
          this.elements.push(line.charCodeAt(i));
        }
        if (lineNumber < this.range.endLineNumber) {
          this.elements.push("\n".charCodeAt(0));
          this.firstElementOffsetByLineIdx.push(this.elements.length);
        }
      }
    }
    toString() {
      return `Slice: "${this.text}"`;
    }
    get text() {
      return this.getText(new OffsetRange(0, this.length));
    }
    getText(range) {
      return this.elements.slice(range.start, range.endExclusive).map((e) => String.fromCharCode(e)).join("");
    }
    getElement(offset) {
      return this.elements[offset];
    }
    get length() {
      return this.elements.length;
    }
    getBoundaryScore(length) {
      const prevCategory = getCategory(length > 0 ? this.elements[length - 1] : -1);
      const nextCategory = getCategory(length < this.elements.length ? this.elements[length] : -1);
      if (prevCategory === 7 && nextCategory === 8) {
        return 0;
      }
      if (prevCategory === 8) {
        return 150;
      }
      let score2 = 0;
      if (prevCategory !== nextCategory) {
        score2 += 10;
        if (prevCategory === 0 && nextCategory === 1) {
          score2 += 1;
        }
      }
      score2 += getCategoryBoundaryScore(prevCategory);
      score2 += getCategoryBoundaryScore(nextCategory);
      return score2;
    }
    translateOffset(offset, preference = "right") {
      const i = findLastIdxMonotonous(this.firstElementOffsetByLineIdx, (value) => value <= offset);
      const lineOffset = offset - this.firstElementOffsetByLineIdx[i];
      return new Position$1(this.range.startLineNumber + i, 1 + this.lineStartOffsets[i] + lineOffset + (lineOffset === 0 && preference === "left" ? 0 : this.trimmedWsLengthsByLineIdx[i]));
    }
    translateRange(range) {
      const pos1 = this.translateOffset(range.start, "right");
      const pos2 = this.translateOffset(range.endExclusive, "left");
      if (pos2.isBefore(pos1)) {
        return Range$1.fromPositions(pos2, pos2);
      }
      return Range$1.fromPositions(pos1, pos2);
    }
    /**
     * Finds the word that contains the character at the given offset
     */
    findWordContaining(offset) {
      if (offset < 0 || offset >= this.elements.length) {
        return void 0;
      }
      if (!isWordChar(this.elements[offset])) {
        return void 0;
      }
      let start2 = offset;
      while (start2 > 0 && isWordChar(this.elements[start2 - 1])) {
        start2--;
      }
      let end = offset;
      while (end < this.elements.length && isWordChar(this.elements[end])) {
        end++;
      }
      return new OffsetRange(start2, end);
    }
    /** fooBar has the two sub-words foo and bar */
    findSubWordContaining(offset) {
      if (offset < 0 || offset >= this.elements.length) {
        return void 0;
      }
      if (!isWordChar(this.elements[offset])) {
        return void 0;
      }
      let start2 = offset;
      while (start2 > 0 && isWordChar(this.elements[start2 - 1]) && !isUpperCase(this.elements[start2])) {
        start2--;
      }
      let end = offset;
      while (end < this.elements.length && isWordChar(this.elements[end]) && !isUpperCase(this.elements[end])) {
        end++;
      }
      return new OffsetRange(start2, end);
    }
    countLinesIn(range) {
      return this.translateOffset(range.endExclusive).lineNumber - this.translateOffset(range.start).lineNumber;
    }
    isStronglyEqual(offset1, offset2) {
      return this.elements[offset1] === this.elements[offset2];
    }
    extendToFullLines(range) {
      const start2 = findLastMonotonous(this.firstElementOffsetByLineIdx, (x) => x <= range.start) ?? 0;
      const end = findFirstMonotonous(this.firstElementOffsetByLineIdx, (x) => range.endExclusive <= x) ?? this.elements.length;
      return new OffsetRange(start2, end);
    }
  }
  function isWordChar(charCode) {
    return charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90 || charCode >= 48 && charCode <= 57;
  }
  function isUpperCase(charCode) {
    return charCode >= 65 && charCode <= 90;
  }
  const score = {
    [
      0
      /* CharBoundaryCategory.WordLower */
    ]: 0,
    [
      1
      /* CharBoundaryCategory.WordUpper */
    ]: 0,
    [
      2
      /* CharBoundaryCategory.WordNumber */
    ]: 0,
    [
      3
      /* CharBoundaryCategory.End */
    ]: 10,
    [
      4
      /* CharBoundaryCategory.Other */
    ]: 2,
    [
      5
      /* CharBoundaryCategory.Separator */
    ]: 30,
    [
      6
      /* CharBoundaryCategory.Space */
    ]: 3,
    [
      7
      /* CharBoundaryCategory.LineBreakCR */
    ]: 10,
    [
      8
      /* CharBoundaryCategory.LineBreakLF */
    ]: 10
  };
  function getCategoryBoundaryScore(category) {
    return score[category];
  }
  function getCategory(charCode) {
    if (charCode === 10) {
      return 8;
    } else if (charCode === 13) {
      return 7;
    } else if (isSpace(charCode)) {
      return 6;
    } else if (charCode >= 97 && charCode <= 122) {
      return 0;
    } else if (charCode >= 65 && charCode <= 90) {
      return 1;
    } else if (charCode >= 48 && charCode <= 57) {
      return 2;
    } else if (charCode === -1) {
      return 3;
    } else if (charCode === 44 || charCode === 59) {
      return 5;
    } else {
      return 4;
    }
  }
  function computeMovedLines(changes, originalLines, modifiedLines, hashedOriginalLines, hashedModifiedLines, timeout) {
    let { moves, excludedChanges } = computeMovesFromSimpleDeletionsToSimpleInsertions(changes, originalLines, modifiedLines, timeout);
    if (!timeout.isValid()) {
      return [];
    }
    const filteredChanges = changes.filter((c) => !excludedChanges.has(c));
    const unchangedMoves = computeUnchangedMoves(filteredChanges, hashedOriginalLines, hashedModifiedLines, originalLines, modifiedLines, timeout);
    pushMany(moves, unchangedMoves);
    moves = joinCloseConsecutiveMoves(moves);
    moves = moves.filter((current) => {
      const lines = current.original.toOffsetRange().slice(originalLines).map((l) => l.trim());
      const originalText = lines.join("\n");
      return originalText.length >= 15 && countWhere(lines, (l) => l.length >= 2) >= 2;
    });
    moves = removeMovesInSameDiff(changes, moves);
    return moves;
  }
  function countWhere(arr, predicate) {
    let count = 0;
    for (const t2 of arr) {
      if (predicate(t2)) {
        count++;
      }
    }
    return count;
  }
  function computeMovesFromSimpleDeletionsToSimpleInsertions(changes, originalLines, modifiedLines, timeout) {
    const moves = [];
    const deletions = changes.filter((c) => c.modified.isEmpty && c.original.length >= 3).map((d) => new LineRangeFragment(d.original, originalLines, d));
    const insertions = new Set(changes.filter((c) => c.original.isEmpty && c.modified.length >= 3).map((d) => new LineRangeFragment(d.modified, modifiedLines, d)));
    const excludedChanges = /* @__PURE__ */ new Set();
    for (const deletion of deletions) {
      let highestSimilarity = -1;
      let best;
      for (const insertion of insertions) {
        const similarity = deletion.computeSimilarity(insertion);
        if (similarity > highestSimilarity) {
          highestSimilarity = similarity;
          best = insertion;
        }
      }
      if (highestSimilarity > 0.9 && best) {
        insertions.delete(best);
        moves.push(new LineRangeMapping(deletion.range, best.range));
        excludedChanges.add(deletion.source);
        excludedChanges.add(best.source);
      }
      if (!timeout.isValid()) {
        return { moves, excludedChanges };
      }
    }
    return { moves, excludedChanges };
  }
  function computeUnchangedMoves(changes, hashedOriginalLines, hashedModifiedLines, originalLines, modifiedLines, timeout) {
    const moves = [];
    const original3LineHashes = new SetMap();
    for (const change of changes) {
      for (let i = change.original.startLineNumber; i < change.original.endLineNumberExclusive - 2; i++) {
        const key = `${hashedOriginalLines[i - 1]}:${hashedOriginalLines[i + 1 - 1]}:${hashedOriginalLines[i + 2 - 1]}`;
        original3LineHashes.add(key, { range: new LineRange(i, i + 3) });
      }
    }
    const possibleMappings = [];
    changes.sort(compareBy((c) => c.modified.startLineNumber, numberComparator));
    for (const change of changes) {
      let lastMappings = [];
      for (let i = change.modified.startLineNumber; i < change.modified.endLineNumberExclusive - 2; i++) {
        const key = `${hashedModifiedLines[i - 1]}:${hashedModifiedLines[i + 1 - 1]}:${hashedModifiedLines[i + 2 - 1]}`;
        const currentModifiedRange = new LineRange(i, i + 3);
        const nextMappings = [];
        original3LineHashes.forEach(key, ({ range }) => {
          for (const lastMapping of lastMappings) {
            if (lastMapping.originalLineRange.endLineNumberExclusive + 1 === range.endLineNumberExclusive && lastMapping.modifiedLineRange.endLineNumberExclusive + 1 === currentModifiedRange.endLineNumberExclusive) {
              lastMapping.originalLineRange = new LineRange(lastMapping.originalLineRange.startLineNumber, range.endLineNumberExclusive);
              lastMapping.modifiedLineRange = new LineRange(lastMapping.modifiedLineRange.startLineNumber, currentModifiedRange.endLineNumberExclusive);
              nextMappings.push(lastMapping);
              return;
            }
          }
          const mapping = {
            modifiedLineRange: currentModifiedRange,
            originalLineRange: range
          };
          possibleMappings.push(mapping);
          nextMappings.push(mapping);
        });
        lastMappings = nextMappings;
      }
      if (!timeout.isValid()) {
        return [];
      }
    }
    possibleMappings.sort(reverseOrder(compareBy((m) => m.modifiedLineRange.length, numberComparator)));
    const modifiedSet = new LineRangeSet();
    const originalSet = new LineRangeSet();
    for (const mapping of possibleMappings) {
      const diffOrigToMod = mapping.modifiedLineRange.startLineNumber - mapping.originalLineRange.startLineNumber;
      const modifiedSections = modifiedSet.subtractFrom(mapping.modifiedLineRange);
      const originalTranslatedSections = originalSet.subtractFrom(mapping.originalLineRange).getWithDelta(diffOrigToMod);
      const modifiedIntersectedSections = modifiedSections.getIntersection(originalTranslatedSections);
      for (const s of modifiedIntersectedSections.ranges) {
        if (s.length < 3) {
          continue;
        }
        const modifiedLineRange = s;
        const originalLineRange = s.delta(-diffOrigToMod);
        moves.push(new LineRangeMapping(originalLineRange, modifiedLineRange));
        modifiedSet.addRange(modifiedLineRange);
        originalSet.addRange(originalLineRange);
      }
    }
    moves.sort(compareBy((m) => m.original.startLineNumber, numberComparator));
    const monotonousChanges = new MonotonousArray(changes);
    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      const firstTouchingChangeOrig = monotonousChanges.findLastMonotonous((c) => c.original.startLineNumber <= move.original.startLineNumber);
      const firstTouchingChangeMod = findLastMonotonous(changes, (c) => c.modified.startLineNumber <= move.modified.startLineNumber);
      const linesAbove = Math.max(move.original.startLineNumber - firstTouchingChangeOrig.original.startLineNumber, move.modified.startLineNumber - firstTouchingChangeMod.modified.startLineNumber);
      const lastTouchingChangeOrig = monotonousChanges.findLastMonotonous((c) => c.original.startLineNumber < move.original.endLineNumberExclusive);
      const lastTouchingChangeMod = findLastMonotonous(changes, (c) => c.modified.startLineNumber < move.modified.endLineNumberExclusive);
      const linesBelow = Math.max(lastTouchingChangeOrig.original.endLineNumberExclusive - move.original.endLineNumberExclusive, lastTouchingChangeMod.modified.endLineNumberExclusive - move.modified.endLineNumberExclusive);
      let extendToTop;
      for (extendToTop = 0; extendToTop < linesAbove; extendToTop++) {
        const origLine = move.original.startLineNumber - extendToTop - 1;
        const modLine = move.modified.startLineNumber - extendToTop - 1;
        if (origLine > originalLines.length || modLine > modifiedLines.length) {
          break;
        }
        if (modifiedSet.contains(modLine) || originalSet.contains(origLine)) {
          break;
        }
        if (!areLinesSimilar(originalLines[origLine - 1], modifiedLines[modLine - 1], timeout)) {
          break;
        }
      }
      if (extendToTop > 0) {
        originalSet.addRange(new LineRange(move.original.startLineNumber - extendToTop, move.original.startLineNumber));
        modifiedSet.addRange(new LineRange(move.modified.startLineNumber - extendToTop, move.modified.startLineNumber));
      }
      let extendToBottom;
      for (extendToBottom = 0; extendToBottom < linesBelow; extendToBottom++) {
        const origLine = move.original.endLineNumberExclusive + extendToBottom;
        const modLine = move.modified.endLineNumberExclusive + extendToBottom;
        if (origLine > originalLines.length || modLine > modifiedLines.length) {
          break;
        }
        if (modifiedSet.contains(modLine) || originalSet.contains(origLine)) {
          break;
        }
        if (!areLinesSimilar(originalLines[origLine - 1], modifiedLines[modLine - 1], timeout)) {
          break;
        }
      }
      if (extendToBottom > 0) {
        originalSet.addRange(new LineRange(move.original.endLineNumberExclusive, move.original.endLineNumberExclusive + extendToBottom));
        modifiedSet.addRange(new LineRange(move.modified.endLineNumberExclusive, move.modified.endLineNumberExclusive + extendToBottom));
      }
      if (extendToTop > 0 || extendToBottom > 0) {
        moves[i] = new LineRangeMapping(new LineRange(move.original.startLineNumber - extendToTop, move.original.endLineNumberExclusive + extendToBottom), new LineRange(move.modified.startLineNumber - extendToTop, move.modified.endLineNumberExclusive + extendToBottom));
      }
    }
    return moves;
  }
  function areLinesSimilar(line1, line2, timeout) {
    if (line1.trim() === line2.trim()) {
      return true;
    }
    if (line1.length > 300 && line2.length > 300) {
      return false;
    }
    const myersDiffingAlgorithm = new MyersDiffAlgorithm();
    const result = myersDiffingAlgorithm.compute(new LinesSliceCharSequence([line1], new Range$1(1, 1, 1, line1.length), false), new LinesSliceCharSequence([line2], new Range$1(1, 1, 1, line2.length), false), timeout);
    let commonNonSpaceCharCount = 0;
    const inverted = SequenceDiff.invert(result.diffs, line1.length);
    for (const seq of inverted) {
      seq.seq1Range.forEach((idx) => {
        if (!isSpace(line1.charCodeAt(idx))) {
          commonNonSpaceCharCount++;
        }
      });
    }
    function countNonWsChars(str) {
      let count = 0;
      for (let i = 0; i < line1.length; i++) {
        if (!isSpace(str.charCodeAt(i))) {
          count++;
        }
      }
      return count;
    }
    const longerLineLength = countNonWsChars(line1.length > line2.length ? line1 : line2);
    const r = commonNonSpaceCharCount / longerLineLength > 0.6 && longerLineLength > 10;
    return r;
  }
  function joinCloseConsecutiveMoves(moves) {
    if (moves.length === 0) {
      return moves;
    }
    moves.sort(compareBy((m) => m.original.startLineNumber, numberComparator));
    const result = [moves[0]];
    for (let i = 1; i < moves.length; i++) {
      const last = result[result.length - 1];
      const current = moves[i];
      const originalDist = current.original.startLineNumber - last.original.endLineNumberExclusive;
      const modifiedDist = current.modified.startLineNumber - last.modified.endLineNumberExclusive;
      const currentMoveAfterLast = originalDist >= 0 && modifiedDist >= 0;
      if (currentMoveAfterLast && originalDist + modifiedDist <= 2) {
        result[result.length - 1] = last.join(current);
        continue;
      }
      result.push(current);
    }
    return result;
  }
  function removeMovesInSameDiff(changes, moves) {
    const changesMonotonous = new MonotonousArray(changes);
    moves = moves.filter((m) => {
      const diffBeforeEndOfMoveOriginal = changesMonotonous.findLastMonotonous((c) => c.original.startLineNumber < m.original.endLineNumberExclusive) || new LineRangeMapping(new LineRange(1, 1), new LineRange(1, 1));
      const diffBeforeEndOfMoveModified = findLastMonotonous(changes, (c) => c.modified.startLineNumber < m.modified.endLineNumberExclusive);
      const differentDiffs = diffBeforeEndOfMoveOriginal !== diffBeforeEndOfMoveModified;
      return differentDiffs;
    });
    return moves;
  }
  function optimizeSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
    let result = sequenceDiffs;
    result = joinSequenceDiffsByShifting(sequence1, sequence2, result);
    result = joinSequenceDiffsByShifting(sequence1, sequence2, result);
    result = shiftSequenceDiffs(sequence1, sequence2, result);
    return result;
  }
  function joinSequenceDiffsByShifting(sequence1, sequence2, sequenceDiffs) {
    if (sequenceDiffs.length === 0) {
      return sequenceDiffs;
    }
    const result = [];
    result.push(sequenceDiffs[0]);
    for (let i = 1; i < sequenceDiffs.length; i++) {
      const prevResult = result[result.length - 1];
      let cur = sequenceDiffs[i];
      if (cur.seq1Range.isEmpty || cur.seq2Range.isEmpty) {
        const length = cur.seq1Range.start - prevResult.seq1Range.endExclusive;
        let d;
        for (d = 1; d <= length; d++) {
          if (sequence1.getElement(cur.seq1Range.start - d) !== sequence1.getElement(cur.seq1Range.endExclusive - d) || sequence2.getElement(cur.seq2Range.start - d) !== sequence2.getElement(cur.seq2Range.endExclusive - d)) {
            break;
          }
        }
        d--;
        if (d === length) {
          result[result.length - 1] = new SequenceDiff(new OffsetRange(prevResult.seq1Range.start, cur.seq1Range.endExclusive - length), new OffsetRange(prevResult.seq2Range.start, cur.seq2Range.endExclusive - length));
          continue;
        }
        cur = cur.delta(-d);
      }
      result.push(cur);
    }
    const result2 = [];
    for (let i = 0; i < result.length - 1; i++) {
      const nextResult = result[i + 1];
      let cur = result[i];
      if (cur.seq1Range.isEmpty || cur.seq2Range.isEmpty) {
        const length = nextResult.seq1Range.start - cur.seq1Range.endExclusive;
        let d;
        for (d = 0; d < length; d++) {
          if (!sequence1.isStronglyEqual(cur.seq1Range.start + d, cur.seq1Range.endExclusive + d) || !sequence2.isStronglyEqual(cur.seq2Range.start + d, cur.seq2Range.endExclusive + d)) {
            break;
          }
        }
        if (d === length) {
          result[i + 1] = new SequenceDiff(new OffsetRange(cur.seq1Range.start + length, nextResult.seq1Range.endExclusive), new OffsetRange(cur.seq2Range.start + length, nextResult.seq2Range.endExclusive));
          continue;
        }
        if (d > 0) {
          cur = cur.delta(d);
        }
      }
      result2.push(cur);
    }
    if (result.length > 0) {
      result2.push(result[result.length - 1]);
    }
    return result2;
  }
  function shiftSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
    if (!sequence1.getBoundaryScore || !sequence2.getBoundaryScore) {
      return sequenceDiffs;
    }
    for (let i = 0; i < sequenceDiffs.length; i++) {
      const prevDiff = i > 0 ? sequenceDiffs[i - 1] : void 0;
      const diff = sequenceDiffs[i];
      const nextDiff = i + 1 < sequenceDiffs.length ? sequenceDiffs[i + 1] : void 0;
      const seq1ValidRange = new OffsetRange(prevDiff ? prevDiff.seq1Range.endExclusive + 1 : 0, nextDiff ? nextDiff.seq1Range.start - 1 : sequence1.length);
      const seq2ValidRange = new OffsetRange(prevDiff ? prevDiff.seq2Range.endExclusive + 1 : 0, nextDiff ? nextDiff.seq2Range.start - 1 : sequence2.length);
      if (diff.seq1Range.isEmpty) {
        sequenceDiffs[i] = shiftDiffToBetterPosition(diff, sequence1, sequence2, seq1ValidRange, seq2ValidRange);
      } else if (diff.seq2Range.isEmpty) {
        sequenceDiffs[i] = shiftDiffToBetterPosition(diff.swap(), sequence2, sequence1, seq2ValidRange, seq1ValidRange).swap();
      }
    }
    return sequenceDiffs;
  }
  function shiftDiffToBetterPosition(diff, sequence1, sequence2, seq1ValidRange, seq2ValidRange) {
    const maxShiftLimit = 100;
    let deltaBefore = 1;
    while (diff.seq1Range.start - deltaBefore >= seq1ValidRange.start && diff.seq2Range.start - deltaBefore >= seq2ValidRange.start && sequence2.isStronglyEqual(diff.seq2Range.start - deltaBefore, diff.seq2Range.endExclusive - deltaBefore) && deltaBefore < maxShiftLimit) {
      deltaBefore++;
    }
    deltaBefore--;
    let deltaAfter = 0;
    while (diff.seq1Range.start + deltaAfter < seq1ValidRange.endExclusive && diff.seq2Range.endExclusive + deltaAfter < seq2ValidRange.endExclusive && sequence2.isStronglyEqual(diff.seq2Range.start + deltaAfter, diff.seq2Range.endExclusive + deltaAfter) && deltaAfter < maxShiftLimit) {
      deltaAfter++;
    }
    if (deltaBefore === 0 && deltaAfter === 0) {
      return diff;
    }
    let bestDelta = 0;
    let bestScore = -1;
    for (let delta = -deltaBefore; delta <= deltaAfter; delta++) {
      const seq2OffsetStart = diff.seq2Range.start + delta;
      const seq2OffsetEndExclusive = diff.seq2Range.endExclusive + delta;
      const seq1Offset = diff.seq1Range.start + delta;
      const score2 = sequence1.getBoundaryScore(seq1Offset) + sequence2.getBoundaryScore(seq2OffsetStart) + sequence2.getBoundaryScore(seq2OffsetEndExclusive);
      if (score2 > bestScore) {
        bestScore = score2;
        bestDelta = delta;
      }
    }
    return diff.delta(bestDelta);
  }
  function removeShortMatches(sequence1, sequence2, sequenceDiffs) {
    const result = [];
    for (const s of sequenceDiffs) {
      const last = result[result.length - 1];
      if (!last) {
        result.push(s);
        continue;
      }
      if (s.seq1Range.start - last.seq1Range.endExclusive <= 2 || s.seq2Range.start - last.seq2Range.endExclusive <= 2) {
        result[result.length - 1] = new SequenceDiff(last.seq1Range.join(s.seq1Range), last.seq2Range.join(s.seq2Range));
      } else {
        result.push(s);
      }
    }
    return result;
  }
  function extendDiffsToEntireWordIfAppropriate(sequence1, sequence2, sequenceDiffs, findParent, force = false) {
    const equalMappings = SequenceDiff.invert(sequenceDiffs, sequence1.length);
    const additional = [];
    let lastPoint = new OffsetPair(0, 0);
    function scanWord(pair, equalMapping) {
      if (pair.offset1 < lastPoint.offset1 || pair.offset2 < lastPoint.offset2) {
        return;
      }
      const w1 = findParent(sequence1, pair.offset1);
      const w2 = findParent(sequence2, pair.offset2);
      if (!w1 || !w2) {
        return;
      }
      let w = new SequenceDiff(w1, w2);
      const equalPart = w.intersect(equalMapping);
      let equalChars1 = equalPart.seq1Range.length;
      let equalChars2 = equalPart.seq2Range.length;
      while (equalMappings.length > 0) {
        const next = equalMappings[0];
        const intersects = next.seq1Range.intersects(w.seq1Range) || next.seq2Range.intersects(w.seq2Range);
        if (!intersects) {
          break;
        }
        const v1 = findParent(sequence1, next.seq1Range.start);
        const v2 = findParent(sequence2, next.seq2Range.start);
        const v = new SequenceDiff(v1, v2);
        const equalPart2 = v.intersect(next);
        equalChars1 += equalPart2.seq1Range.length;
        equalChars2 += equalPart2.seq2Range.length;
        w = w.join(v);
        if (w.seq1Range.endExclusive >= next.seq1Range.endExclusive) {
          equalMappings.shift();
        } else {
          break;
        }
      }
      if (force && equalChars1 + equalChars2 < w.seq1Range.length + w.seq2Range.length || equalChars1 + equalChars2 < (w.seq1Range.length + w.seq2Range.length) * 2 / 3) {
        additional.push(w);
      }
      lastPoint = w.getEndExclusives();
    }
    while (equalMappings.length > 0) {
      const next = equalMappings.shift();
      if (next.seq1Range.isEmpty) {
        continue;
      }
      scanWord(next.getStarts(), next);
      scanWord(next.getEndExclusives().delta(-1), next);
    }
    const merged = mergeSequenceDiffs(sequenceDiffs, additional);
    return merged;
  }
  function mergeSequenceDiffs(sequenceDiffs1, sequenceDiffs2) {
    const result = [];
    while (sequenceDiffs1.length > 0 || sequenceDiffs2.length > 0) {
      const sd1 = sequenceDiffs1[0];
      const sd2 = sequenceDiffs2[0];
      let next;
      if (sd1 && (!sd2 || sd1.seq1Range.start < sd2.seq1Range.start)) {
        next = sequenceDiffs1.shift();
      } else {
        next = sequenceDiffs2.shift();
      }
      if (result.length > 0 && result[result.length - 1].seq1Range.endExclusive >= next.seq1Range.start) {
        result[result.length - 1] = result[result.length - 1].join(next);
      } else {
        result.push(next);
      }
    }
    return result;
  }
  function removeVeryShortMatchingLinesBetweenDiffs(sequence1, _sequence2, sequenceDiffs) {
    let diffs = sequenceDiffs;
    if (diffs.length === 0) {
      return diffs;
    }
    let counter = 0;
    let shouldRepeat;
    do {
      shouldRepeat = false;
      const result = [
        diffs[0]
      ];
      for (let i = 1; i < diffs.length; i++) {
        let shouldJoinDiffs = function(before, after) {
          const unchangedRange = new OffsetRange(lastResult.seq1Range.endExclusive, cur.seq1Range.start);
          const unchangedText = sequence1.getText(unchangedRange);
          const unchangedTextWithoutWs = unchangedText.replace(/\s/g, "");
          if (unchangedTextWithoutWs.length <= 4 && (before.seq1Range.length + before.seq2Range.length > 5 || after.seq1Range.length + after.seq2Range.length > 5)) {
            return true;
          }
          return false;
        };
        const cur = diffs[i];
        const lastResult = result[result.length - 1];
        const shouldJoin = shouldJoinDiffs(lastResult, cur);
        if (shouldJoin) {
          shouldRepeat = true;
          result[result.length - 1] = result[result.length - 1].join(cur);
        } else {
          result.push(cur);
        }
      }
      diffs = result;
    } while (counter++ < 10 && shouldRepeat);
    return diffs;
  }
  function removeVeryShortMatchingTextBetweenLongDiffs(sequence1, sequence2, sequenceDiffs) {
    let diffs = sequenceDiffs;
    if (diffs.length === 0) {
      return diffs;
    }
    let counter = 0;
    let shouldRepeat;
    do {
      shouldRepeat = false;
      const result = [
        diffs[0]
      ];
      for (let i = 1; i < diffs.length; i++) {
        let shouldJoinDiffs = function(before, after) {
          const unchangedRange = new OffsetRange(lastResult.seq1Range.endExclusive, cur.seq1Range.start);
          const unchangedLineCount = sequence1.countLinesIn(unchangedRange);
          if (unchangedLineCount > 5 || unchangedRange.length > 500) {
            return false;
          }
          const unchangedText = sequence1.getText(unchangedRange).trim();
          if (unchangedText.length > 20 || unchangedText.split(/\r\n|\r|\n/).length > 1) {
            return false;
          }
          const beforeLineCount1 = sequence1.countLinesIn(before.seq1Range);
          const beforeSeq1Length = before.seq1Range.length;
          const beforeLineCount2 = sequence2.countLinesIn(before.seq2Range);
          const beforeSeq2Length = before.seq2Range.length;
          const afterLineCount1 = sequence1.countLinesIn(after.seq1Range);
          const afterSeq1Length = after.seq1Range.length;
          const afterLineCount2 = sequence2.countLinesIn(after.seq2Range);
          const afterSeq2Length = after.seq2Range.length;
          const max = 2 * 40 + 50;
          function cap(v) {
            return Math.min(v, max);
          }
          if (Math.pow(Math.pow(cap(beforeLineCount1 * 40 + beforeSeq1Length), 1.5) + Math.pow(cap(beforeLineCount2 * 40 + beforeSeq2Length), 1.5), 1.5) + Math.pow(Math.pow(cap(afterLineCount1 * 40 + afterSeq1Length), 1.5) + Math.pow(cap(afterLineCount2 * 40 + afterSeq2Length), 1.5), 1.5) > (max ** 1.5) ** 1.5 * 1.3) {
            return true;
          }
          return false;
        };
        const cur = diffs[i];
        const lastResult = result[result.length - 1];
        const shouldJoin = shouldJoinDiffs(lastResult, cur);
        if (shouldJoin) {
          shouldRepeat = true;
          result[result.length - 1] = result[result.length - 1].join(cur);
        } else {
          result.push(cur);
        }
      }
      diffs = result;
    } while (counter++ < 10 && shouldRepeat);
    const newDiffs = [];
    forEachWithNeighbors(diffs, (prev, cur, next) => {
      let newDiff = cur;
      function shouldMarkAsChanged(text) {
        return text.length > 0 && text.trim().length <= 3 && cur.seq1Range.length + cur.seq2Range.length > 100;
      }
      const fullRange1 = sequence1.extendToFullLines(cur.seq1Range);
      const prefix = sequence1.getText(new OffsetRange(fullRange1.start, cur.seq1Range.start));
      if (shouldMarkAsChanged(prefix)) {
        newDiff = newDiff.deltaStart(-prefix.length);
      }
      const suffix = sequence1.getText(new OffsetRange(cur.seq1Range.endExclusive, fullRange1.endExclusive));
      if (shouldMarkAsChanged(suffix)) {
        newDiff = newDiff.deltaEnd(suffix.length);
      }
      const availableSpace = SequenceDiff.fromOffsetPairs(prev ? prev.getEndExclusives() : OffsetPair.zero, next ? next.getStarts() : OffsetPair.max);
      const result = newDiff.intersect(availableSpace);
      if (newDiffs.length > 0 && result.getStarts().equals(newDiffs[newDiffs.length - 1].getEndExclusives())) {
        newDiffs[newDiffs.length - 1] = newDiffs[newDiffs.length - 1].join(result);
      } else {
        newDiffs.push(result);
      }
    });
    return newDiffs;
  }
  class LineSequence {
    constructor(trimmedHash, lines) {
      this.trimmedHash = trimmedHash;
      this.lines = lines;
    }
    getElement(offset) {
      return this.trimmedHash[offset];
    }
    get length() {
      return this.trimmedHash.length;
    }
    getBoundaryScore(length) {
      const indentationBefore = length === 0 ? 0 : getIndentation(this.lines[length - 1]);
      const indentationAfter = length === this.lines.length ? 0 : getIndentation(this.lines[length]);
      return 1e3 - (indentationBefore + indentationAfter);
    }
    getText(range) {
      return this.lines.slice(range.start, range.endExclusive).join("\n");
    }
    isStronglyEqual(offset1, offset2) {
      return this.lines[offset1] === this.lines[offset2];
    }
  }
  function getIndentation(str) {
    let i = 0;
    while (i < str.length && (str.charCodeAt(i) === 32 || str.charCodeAt(i) === 9)) {
      i++;
    }
    return i;
  }
  class DefaultLinesDiffComputer {
    constructor() {
      this.dynamicProgrammingDiffing = new DynamicProgrammingDiffing();
      this.myersDiffingAlgorithm = new MyersDiffAlgorithm();
    }
    computeDiff(originalLines, modifiedLines, options) {
      if (originalLines.length <= 1 && equals$1(originalLines, modifiedLines, (a2, b) => a2 === b)) {
        return new LinesDiff([], [], false);
      }
      if (originalLines.length === 1 && originalLines[0].length === 0 || modifiedLines.length === 1 && modifiedLines[0].length === 0) {
        return new LinesDiff([
          new DetailedLineRangeMapping(new LineRange(1, originalLines.length + 1), new LineRange(1, modifiedLines.length + 1), [
            new RangeMapping(new Range$1(1, 1, originalLines.length, originalLines[originalLines.length - 1].length + 1), new Range$1(1, 1, modifiedLines.length, modifiedLines[modifiedLines.length - 1].length + 1))
          ])
        ], [], false);
      }
      const timeout = options.maxComputationTimeMs === 0 ? InfiniteTimeout.instance : new DateTimeout(options.maxComputationTimeMs);
      const considerWhitespaceChanges = !options.ignoreTrimWhitespace;
      const perfectHashes = /* @__PURE__ */ new Map();
      function getOrCreateHash(text) {
        let hash = perfectHashes.get(text);
        if (hash === void 0) {
          hash = perfectHashes.size;
          perfectHashes.set(text, hash);
        }
        return hash;
      }
      const originalLinesHashes = originalLines.map((l) => getOrCreateHash(l.trim()));
      const modifiedLinesHashes = modifiedLines.map((l) => getOrCreateHash(l.trim()));
      const sequence1 = new LineSequence(originalLinesHashes, originalLines);
      const sequence2 = new LineSequence(modifiedLinesHashes, modifiedLines);
      const lineAlignmentResult = (() => {
        if (sequence1.length + sequence2.length < 1700) {
          return this.dynamicProgrammingDiffing.compute(sequence1, sequence2, timeout, (offset1, offset2) => originalLines[offset1] === modifiedLines[offset2] ? modifiedLines[offset2].length === 0 ? 0.1 : 1 + Math.log(1 + modifiedLines[offset2].length) : 0.99);
        }
        return this.myersDiffingAlgorithm.compute(sequence1, sequence2, timeout);
      })();
      let lineAlignments = lineAlignmentResult.diffs;
      let hitTimeout = lineAlignmentResult.hitTimeout;
      lineAlignments = optimizeSequenceDiffs(sequence1, sequence2, lineAlignments);
      lineAlignments = removeVeryShortMatchingLinesBetweenDiffs(sequence1, sequence2, lineAlignments);
      const alignments = [];
      const scanForWhitespaceChanges = (equalLinesCount) => {
        if (!considerWhitespaceChanges) {
          return;
        }
        for (let i = 0; i < equalLinesCount; i++) {
          const seq1Offset = seq1LastStart + i;
          const seq2Offset = seq2LastStart + i;
          if (originalLines[seq1Offset] !== modifiedLines[seq2Offset]) {
            const characterDiffs = this.refineDiff(originalLines, modifiedLines, new SequenceDiff(new OffsetRange(seq1Offset, seq1Offset + 1), new OffsetRange(seq2Offset, seq2Offset + 1)), timeout, considerWhitespaceChanges, options);
            for (const a2 of characterDiffs.mappings) {
              alignments.push(a2);
            }
            if (characterDiffs.hitTimeout) {
              hitTimeout = true;
            }
          }
        }
      };
      let seq1LastStart = 0;
      let seq2LastStart = 0;
      for (const diff of lineAlignments) {
        assertFn(() => diff.seq1Range.start - seq1LastStart === diff.seq2Range.start - seq2LastStart);
        const equalLinesCount = diff.seq1Range.start - seq1LastStart;
        scanForWhitespaceChanges(equalLinesCount);
        seq1LastStart = diff.seq1Range.endExclusive;
        seq2LastStart = diff.seq2Range.endExclusive;
        const characterDiffs = this.refineDiff(originalLines, modifiedLines, diff, timeout, considerWhitespaceChanges, options);
        if (characterDiffs.hitTimeout) {
          hitTimeout = true;
        }
        for (const a2 of characterDiffs.mappings) {
          alignments.push(a2);
        }
      }
      scanForWhitespaceChanges(originalLines.length - seq1LastStart);
      const original = new ArrayText(originalLines);
      const modified = new ArrayText(modifiedLines);
      const changes = lineRangeMappingFromRangeMappings(alignments, original, modified);
      let moves = [];
      if (options.computeMoves) {
        moves = this.computeMoves(changes, originalLines, modifiedLines, originalLinesHashes, modifiedLinesHashes, timeout, considerWhitespaceChanges, options);
      }
      assertFn(() => {
        function validatePosition(pos, lines) {
          if (pos.lineNumber < 1 || pos.lineNumber > lines.length) {
            return false;
          }
          const line = lines[pos.lineNumber - 1];
          if (pos.column < 1 || pos.column > line.length + 1) {
            return false;
          }
          return true;
        }
        function validateRange(range, lines) {
          if (range.startLineNumber < 1 || range.startLineNumber > lines.length + 1) {
            return false;
          }
          if (range.endLineNumberExclusive < 1 || range.endLineNumberExclusive > lines.length + 1) {
            return false;
          }
          return true;
        }
        for (const c of changes) {
          if (!c.innerChanges) {
            return false;
          }
          for (const ic of c.innerChanges) {
            const valid = validatePosition(ic.modifiedRange.getStartPosition(), modifiedLines) && validatePosition(ic.modifiedRange.getEndPosition(), modifiedLines) && validatePosition(ic.originalRange.getStartPosition(), originalLines) && validatePosition(ic.originalRange.getEndPosition(), originalLines);
            if (!valid) {
              return false;
            }
          }
          if (!validateRange(c.modified, modifiedLines) || !validateRange(c.original, originalLines)) {
            return false;
          }
        }
        return true;
      });
      return new LinesDiff(changes, moves, hitTimeout);
    }
    computeMoves(changes, originalLines, modifiedLines, hashedOriginalLines, hashedModifiedLines, timeout, considerWhitespaceChanges, options) {
      const moves = computeMovedLines(changes, originalLines, modifiedLines, hashedOriginalLines, hashedModifiedLines, timeout);
      const movesWithDiffs = moves.map((m) => {
        const moveChanges = this.refineDiff(originalLines, modifiedLines, new SequenceDiff(m.original.toOffsetRange(), m.modified.toOffsetRange()), timeout, considerWhitespaceChanges, options);
        const mappings = lineRangeMappingFromRangeMappings(moveChanges.mappings, new ArrayText(originalLines), new ArrayText(modifiedLines), true);
        return new MovedText(m, mappings);
      });
      return movesWithDiffs;
    }
    refineDiff(originalLines, modifiedLines, diff, timeout, considerWhitespaceChanges, options) {
      const lineRangeMapping = toLineRangeMapping(diff);
      const rangeMapping = lineRangeMapping.toRangeMapping2(originalLines, modifiedLines);
      const slice1 = new LinesSliceCharSequence(originalLines, rangeMapping.originalRange, considerWhitespaceChanges);
      const slice2 = new LinesSliceCharSequence(modifiedLines, rangeMapping.modifiedRange, considerWhitespaceChanges);
      const diffResult = slice1.length + slice2.length < 500 ? this.dynamicProgrammingDiffing.compute(slice1, slice2, timeout) : this.myersDiffingAlgorithm.compute(slice1, slice2, timeout);
      let diffs = diffResult.diffs;
      diffs = optimizeSequenceDiffs(slice1, slice2, diffs);
      diffs = extendDiffsToEntireWordIfAppropriate(slice1, slice2, diffs, (seq, idx) => seq.findWordContaining(idx));
      if (options.extendToSubwords) {
        diffs = extendDiffsToEntireWordIfAppropriate(slice1, slice2, diffs, (seq, idx) => seq.findSubWordContaining(idx), true);
      }
      diffs = removeShortMatches(slice1, slice2, diffs);
      diffs = removeVeryShortMatchingTextBetweenLongDiffs(slice1, slice2, diffs);
      const result = diffs.map((d) => new RangeMapping(slice1.translateRange(d.seq1Range), slice2.translateRange(d.seq2Range)));
      return {
        mappings: result,
        hitTimeout: diffResult.hitTimeout
      };
    }
  }
  function toLineRangeMapping(sequenceDiff) {
    return new LineRangeMapping(new LineRange(sequenceDiff.seq1Range.start + 1, sequenceDiff.seq1Range.endExclusive + 1), new LineRange(sequenceDiff.seq2Range.start + 1, sequenceDiff.seq2Range.endExclusive + 1));
  }
  const linesDiffComputers = {
    getLegacy: () => new LegacyLinesDiffComputer(),
    getDefault: () => new DefaultLinesDiffComputer()
  };
  function roundFloat(number, decimalPoints) {
    const decimal = Math.pow(10, decimalPoints);
    return Math.round(number * decimal) / decimal;
  }
  class RGBA {
    constructor(r, g, b, a2 = 1) {
      this._rgbaBrand = void 0;
      this.r = Math.min(255, Math.max(0, r)) | 0;
      this.g = Math.min(255, Math.max(0, g)) | 0;
      this.b = Math.min(255, Math.max(0, b)) | 0;
      this.a = roundFloat(Math.max(Math.min(1, a2), 0), 3);
    }
    static equals(a2, b) {
      return a2.r === b.r && a2.g === b.g && a2.b === b.b && a2.a === b.a;
    }
  }
  class HSLA {
    constructor(h, s, l, a2) {
      this._hslaBrand = void 0;
      this.h = Math.max(Math.min(360, h), 0) | 0;
      this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
      this.l = roundFloat(Math.max(Math.min(1, l), 0), 3);
      this.a = roundFloat(Math.max(Math.min(1, a2), 0), 3);
    }
    static equals(a2, b) {
      return a2.h === b.h && a2.s === b.s && a2.l === b.l && a2.a === b.a;
    }
    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h in the set [0, 360], s, and l in the set [0, 1].
     */
    static fromRGBA(rgba) {
      const r = rgba.r / 255;
      const g = rgba.g / 255;
      const b = rgba.b / 255;
      const a2 = rgba.a;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0;
      let s = 0;
      const l = (min + max) / 2;
      const chroma = max - min;
      if (chroma > 0) {
        s = Math.min(l <= 0.5 ? chroma / (2 * l) : chroma / (2 - 2 * l), 1);
        switch (max) {
          case r:
            h = (g - b) / chroma + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / chroma + 2;
            break;
          case b:
            h = (r - g) / chroma + 4;
            break;
        }
        h *= 60;
        h = Math.round(h);
      }
      return new HSLA(h, s, l, a2);
    }
    static _hue2rgb(p, q, t2) {
      if (t2 < 0) {
        t2 += 1;
      }
      if (t2 > 1) {
        t2 -= 1;
      }
      if (t2 < 1 / 6) {
        return p + (q - p) * 6 * t2;
      }
      if (t2 < 1 / 2) {
        return q;
      }
      if (t2 < 2 / 3) {
        return p + (q - p) * (2 / 3 - t2) * 6;
      }
      return p;
    }
    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h in the set [0, 360] s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     */
    static toRGBA(hsla) {
      const h = hsla.h / 360;
      const { s, l, a: a2 } = hsla;
      let r, g, b;
      if (s === 0) {
        r = g = b = l;
      } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = HSLA._hue2rgb(p, q, h + 1 / 3);
        g = HSLA._hue2rgb(p, q, h);
        b = HSLA._hue2rgb(p, q, h - 1 / 3);
      }
      return new RGBA(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a2);
    }
  }
  class HSVA {
    constructor(h, s, v, a2) {
      this._hsvaBrand = void 0;
      this.h = Math.max(Math.min(360, h), 0) | 0;
      this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
      this.v = roundFloat(Math.max(Math.min(1, v), 0), 3);
      this.a = roundFloat(Math.max(Math.min(1, a2), 0), 3);
    }
    static equals(a2, b) {
      return a2.h === b.h && a2.s === b.s && a2.v === b.v && a2.a === b.a;
    }
    // from http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
    static fromRGBA(rgba) {
      const r = rgba.r / 255;
      const g = rgba.g / 255;
      const b = rgba.b / 255;
      const cmax = Math.max(r, g, b);
      const cmin = Math.min(r, g, b);
      const delta = cmax - cmin;
      const s = cmax === 0 ? 0 : delta / cmax;
      let m;
      if (delta === 0) {
        m = 0;
      } else if (cmax === r) {
        m = ((g - b) / delta % 6 + 6) % 6;
      } else if (cmax === g) {
        m = (b - r) / delta + 2;
      } else {
        m = (r - g) / delta + 4;
      }
      return new HSVA(Math.round(m * 60), s, cmax, rgba.a);
    }
    // from http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
    static toRGBA(hsva) {
      const { h, s, v, a: a2 } = hsva;
      const c = v * s;
      const x = c * (1 - Math.abs(h / 60 % 2 - 1));
      const m = v - c;
      let [r, g, b] = [0, 0, 0];
      if (h < 60) {
        r = c;
        g = x;
      } else if (h < 120) {
        r = x;
        g = c;
      } else if (h < 180) {
        g = c;
        b = x;
      } else if (h < 240) {
        g = x;
        b = c;
      } else if (h < 300) {
        r = x;
        b = c;
      } else if (h <= 360) {
        r = c;
        b = x;
      }
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      return new RGBA(r, g, b, a2);
    }
  }
  let Color$1 = (_b = class {
    static fromHex(hex) {
      return _b.Format.CSS.parseHex(hex) || _b.red;
    }
    static equals(a2, b) {
      if (!a2 && !b) {
        return true;
      }
      if (!a2 || !b) {
        return false;
      }
      return a2.equals(b);
    }
    get hsla() {
      if (this._hsla) {
        return this._hsla;
      } else {
        return HSLA.fromRGBA(this.rgba);
      }
    }
    get hsva() {
      if (this._hsva) {
        return this._hsva;
      }
      return HSVA.fromRGBA(this.rgba);
    }
    constructor(arg) {
      if (!arg) {
        throw new Error("Color needs a value");
      } else if (arg instanceof RGBA) {
        this.rgba = arg;
      } else if (arg instanceof HSLA) {
        this._hsla = arg;
        this.rgba = HSLA.toRGBA(arg);
      } else if (arg instanceof HSVA) {
        this._hsva = arg;
        this.rgba = HSVA.toRGBA(arg);
      } else {
        throw new Error("Invalid color ctor argument");
      }
    }
    equals(other) {
      return !!other && RGBA.equals(this.rgba, other.rgba) && HSLA.equals(this.hsla, other.hsla) && HSVA.equals(this.hsva, other.hsva);
    }
    /**
     * http://www.w3.org/TR/WCAG20/#relativeluminancedef
     * Returns the number in the set [0, 1]. O => Darkest Black. 1 => Lightest white.
     */
    getRelativeLuminance() {
      const R = _b._relativeLuminanceForComponent(this.rgba.r);
      const G = _b._relativeLuminanceForComponent(this.rgba.g);
      const B = _b._relativeLuminanceForComponent(this.rgba.b);
      const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
      return roundFloat(luminance, 4);
    }
    static _relativeLuminanceForComponent(color) {
      const c = color / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }
    /**
     *	http://24ways.org/2010/calculating-color-contrast
     *  Return 'true' if lighter color otherwise 'false'
     */
    isLighter() {
      const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3;
      return yiq >= 128;
    }
    isLighterThan(another) {
      const lum1 = this.getRelativeLuminance();
      const lum2 = another.getRelativeLuminance();
      return lum1 > lum2;
    }
    isDarkerThan(another) {
      const lum1 = this.getRelativeLuminance();
      const lum2 = another.getRelativeLuminance();
      return lum1 < lum2;
    }
    lighten(factor) {
      return new _b(new HSLA(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * factor, this.hsla.a));
    }
    darken(factor) {
      return new _b(new HSLA(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * factor, this.hsla.a));
    }
    transparent(factor) {
      const { r, g, b, a: a2 } = this.rgba;
      return new _b(new RGBA(r, g, b, a2 * factor));
    }
    isTransparent() {
      return this.rgba.a === 0;
    }
    isOpaque() {
      return this.rgba.a === 1;
    }
    opposite() {
      return new _b(new RGBA(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
    }
    /**
     * Mixes the current color with the provided color based on the given factor.
     * @param color The color to mix with
     * @param factor The factor of mixing (0 means this color, 1 means the input color, 0.5 means equal mix)
     * @returns A new color representing the mix
     */
    mix(color, factor = 0.5) {
      const normalize = Math.min(Math.max(factor, 0), 1);
      const thisRGBA = this.rgba;
      const otherRGBA = color.rgba;
      const r = thisRGBA.r + (otherRGBA.r - thisRGBA.r) * normalize;
      const g = thisRGBA.g + (otherRGBA.g - thisRGBA.g) * normalize;
      const b = thisRGBA.b + (otherRGBA.b - thisRGBA.b) * normalize;
      const a2 = thisRGBA.a + (otherRGBA.a - thisRGBA.a) * normalize;
      return new _b(new RGBA(r, g, b, a2));
    }
    makeOpaque(opaqueBackground) {
      if (this.isOpaque() || opaqueBackground.rgba.a !== 1) {
        return this;
      }
      const { r, g, b, a: a2 } = this.rgba;
      return new _b(new RGBA(opaqueBackground.rgba.r - a2 * (opaqueBackground.rgba.r - r), opaqueBackground.rgba.g - a2 * (opaqueBackground.rgba.g - g), opaqueBackground.rgba.b - a2 * (opaqueBackground.rgba.b - b), 1));
    }
    toString() {
      if (!this._toString) {
        this._toString = _b.Format.CSS.format(this);
      }
      return this._toString;
    }
    toNumber32Bit() {
      if (!this._toNumber32Bit) {
        this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0;
      }
      return this._toNumber32Bit;
    }
    static getLighterColor(of, relative, factor) {
      if (of.isLighterThan(relative)) {
        return of;
      }
      factor = factor ? factor : 0.5;
      const lum1 = of.getRelativeLuminance();
      const lum2 = relative.getRelativeLuminance();
      factor = factor * (lum2 - lum1) / lum2;
      return of.lighten(factor);
    }
    static getDarkerColor(of, relative, factor) {
      if (of.isDarkerThan(relative)) {
        return of;
      }
      factor = factor ? factor : 0.5;
      const lum1 = of.getRelativeLuminance();
      const lum2 = relative.getRelativeLuminance();
      factor = factor * (lum1 - lum2) / lum1;
      return of.darken(factor);
    }
  }, _b.white = new _b(new RGBA(255, 255, 255, 1)), _b.black = new _b(new RGBA(0, 0, 0, 1)), _b.red = new _b(new RGBA(255, 0, 0, 1)), _b.blue = new _b(new RGBA(0, 0, 255, 1)), _b.green = new _b(new RGBA(0, 255, 0, 1)), _b.cyan = new _b(new RGBA(0, 255, 255, 1)), _b.lightgrey = new _b(new RGBA(211, 211, 211, 1)), _b.transparent = new _b(new RGBA(0, 0, 0, 0)), _b);
  (function(Color2) {
    (function(Format) {
      (function(CSS) {
        function formatRGB(color) {
          if (color.rgba.a === 1) {
            return `rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`;
          }
          return Color2.Format.CSS.formatRGBA(color);
        }
        CSS.formatRGB = formatRGB;
        function formatRGBA(color) {
          return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${+color.rgba.a.toFixed(2)})`;
        }
        CSS.formatRGBA = formatRGBA;
        function formatHSL(color) {
          if (color.hsla.a === 1) {
            return `hsl(${color.hsla.h}, ${Math.round(color.hsla.s * 100)}%, ${Math.round(color.hsla.l * 100)}%)`;
          }
          return Color2.Format.CSS.formatHSLA(color);
        }
        CSS.formatHSL = formatHSL;
        function formatHSLA(color) {
          return `hsla(${color.hsla.h}, ${Math.round(color.hsla.s * 100)}%, ${Math.round(color.hsla.l * 100)}%, ${color.hsla.a.toFixed(2)})`;
        }
        CSS.formatHSLA = formatHSLA;
        function _toTwoDigitHex(n) {
          const r = n.toString(16);
          return r.length !== 2 ? "0" + r : r;
        }
        function formatHex(color) {
          return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}`;
        }
        CSS.formatHex = formatHex;
        function formatHexA(color, compact = false) {
          if (compact && color.rgba.a === 1) {
            return Color2.Format.CSS.formatHex(color);
          }
          return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}${_toTwoDigitHex(Math.round(color.rgba.a * 255))}`;
        }
        CSS.formatHexA = formatHexA;
        function format2(color) {
          if (color.isOpaque()) {
            return Color2.Format.CSS.formatHex(color);
          }
          return Color2.Format.CSS.formatRGBA(color);
        }
        CSS.format = format2;
        function parse2(css) {
          if (css === "transparent") {
            return Color2.transparent;
          }
          if (css.startsWith("#")) {
            return parseHex(css);
          }
          if (css.startsWith("rgba(")) {
            const color = css.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
            if (!color) {
              throw new Error("Invalid color format " + css);
            }
            const r = parseInt(color.groups?.r ?? "0");
            const g = parseInt(color.groups?.g ?? "0");
            const b = parseInt(color.groups?.b ?? "0");
            const a2 = parseFloat(color.groups?.a ?? "0");
            return new Color2(new RGBA(r, g, b, a2));
          }
          if (css.startsWith("rgb(")) {
            const color = css.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
            if (!color) {
              throw new Error("Invalid color format " + css);
            }
            const r = parseInt(color.groups?.r ?? "0");
            const g = parseInt(color.groups?.g ?? "0");
            const b = parseInt(color.groups?.b ?? "0");
            return new Color2(new RGBA(r, g, b));
          }
          return parseNamedKeyword(css);
        }
        CSS.parse = parse2;
        function parseNamedKeyword(css) {
          switch (css) {
            case "aliceblue":
              return new Color2(new RGBA(240, 248, 255, 1));
            case "antiquewhite":
              return new Color2(new RGBA(250, 235, 215, 1));
            case "aqua":
              return new Color2(new RGBA(0, 255, 255, 1));
            case "aquamarine":
              return new Color2(new RGBA(127, 255, 212, 1));
            case "azure":
              return new Color2(new RGBA(240, 255, 255, 1));
            case "beige":
              return new Color2(new RGBA(245, 245, 220, 1));
            case "bisque":
              return new Color2(new RGBA(255, 228, 196, 1));
            case "black":
              return new Color2(new RGBA(0, 0, 0, 1));
            case "blanchedalmond":
              return new Color2(new RGBA(255, 235, 205, 1));
            case "blue":
              return new Color2(new RGBA(0, 0, 255, 1));
            case "blueviolet":
              return new Color2(new RGBA(138, 43, 226, 1));
            case "brown":
              return new Color2(new RGBA(165, 42, 42, 1));
            case "burlywood":
              return new Color2(new RGBA(222, 184, 135, 1));
            case "cadetblue":
              return new Color2(new RGBA(95, 158, 160, 1));
            case "chartreuse":
              return new Color2(new RGBA(127, 255, 0, 1));
            case "chocolate":
              return new Color2(new RGBA(210, 105, 30, 1));
            case "coral":
              return new Color2(new RGBA(255, 127, 80, 1));
            case "cornflowerblue":
              return new Color2(new RGBA(100, 149, 237, 1));
            case "cornsilk":
              return new Color2(new RGBA(255, 248, 220, 1));
            case "crimson":
              return new Color2(new RGBA(220, 20, 60, 1));
            case "cyan":
              return new Color2(new RGBA(0, 255, 255, 1));
            case "darkblue":
              return new Color2(new RGBA(0, 0, 139, 1));
            case "darkcyan":
              return new Color2(new RGBA(0, 139, 139, 1));
            case "darkgoldenrod":
              return new Color2(new RGBA(184, 134, 11, 1));
            case "darkgray":
              return new Color2(new RGBA(169, 169, 169, 1));
            case "darkgreen":
              return new Color2(new RGBA(0, 100, 0, 1));
            case "darkgrey":
              return new Color2(new RGBA(169, 169, 169, 1));
            case "darkkhaki":
              return new Color2(new RGBA(189, 183, 107, 1));
            case "darkmagenta":
              return new Color2(new RGBA(139, 0, 139, 1));
            case "darkolivegreen":
              return new Color2(new RGBA(85, 107, 47, 1));
            case "darkorange":
              return new Color2(new RGBA(255, 140, 0, 1));
            case "darkorchid":
              return new Color2(new RGBA(153, 50, 204, 1));
            case "darkred":
              return new Color2(new RGBA(139, 0, 0, 1));
            case "darksalmon":
              return new Color2(new RGBA(233, 150, 122, 1));
            case "darkseagreen":
              return new Color2(new RGBA(143, 188, 143, 1));
            case "darkslateblue":
              return new Color2(new RGBA(72, 61, 139, 1));
            case "darkslategray":
              return new Color2(new RGBA(47, 79, 79, 1));
            case "darkslategrey":
              return new Color2(new RGBA(47, 79, 79, 1));
            case "darkturquoise":
              return new Color2(new RGBA(0, 206, 209, 1));
            case "darkviolet":
              return new Color2(new RGBA(148, 0, 211, 1));
            case "deeppink":
              return new Color2(new RGBA(255, 20, 147, 1));
            case "deepskyblue":
              return new Color2(new RGBA(0, 191, 255, 1));
            case "dimgray":
              return new Color2(new RGBA(105, 105, 105, 1));
            case "dimgrey":
              return new Color2(new RGBA(105, 105, 105, 1));
            case "dodgerblue":
              return new Color2(new RGBA(30, 144, 255, 1));
            case "firebrick":
              return new Color2(new RGBA(178, 34, 34, 1));
            case "floralwhite":
              return new Color2(new RGBA(255, 250, 240, 1));
            case "forestgreen":
              return new Color2(new RGBA(34, 139, 34, 1));
            case "fuchsia":
              return new Color2(new RGBA(255, 0, 255, 1));
            case "gainsboro":
              return new Color2(new RGBA(220, 220, 220, 1));
            case "ghostwhite":
              return new Color2(new RGBA(248, 248, 255, 1));
            case "gold":
              return new Color2(new RGBA(255, 215, 0, 1));
            case "goldenrod":
              return new Color2(new RGBA(218, 165, 32, 1));
            case "gray":
              return new Color2(new RGBA(128, 128, 128, 1));
            case "green":
              return new Color2(new RGBA(0, 128, 0, 1));
            case "greenyellow":
              return new Color2(new RGBA(173, 255, 47, 1));
            case "grey":
              return new Color2(new RGBA(128, 128, 128, 1));
            case "honeydew":
              return new Color2(new RGBA(240, 255, 240, 1));
            case "hotpink":
              return new Color2(new RGBA(255, 105, 180, 1));
            case "indianred":
              return new Color2(new RGBA(205, 92, 92, 1));
            case "indigo":
              return new Color2(new RGBA(75, 0, 130, 1));
            case "ivory":
              return new Color2(new RGBA(255, 255, 240, 1));
            case "khaki":
              return new Color2(new RGBA(240, 230, 140, 1));
            case "lavender":
              return new Color2(new RGBA(230, 230, 250, 1));
            case "lavenderblush":
              return new Color2(new RGBA(255, 240, 245, 1));
            case "lawngreen":
              return new Color2(new RGBA(124, 252, 0, 1));
            case "lemonchiffon":
              return new Color2(new RGBA(255, 250, 205, 1));
            case "lightblue":
              return new Color2(new RGBA(173, 216, 230, 1));
            case "lightcoral":
              return new Color2(new RGBA(240, 128, 128, 1));
            case "lightcyan":
              return new Color2(new RGBA(224, 255, 255, 1));
            case "lightgoldenrodyellow":
              return new Color2(new RGBA(250, 250, 210, 1));
            case "lightgray":
              return new Color2(new RGBA(211, 211, 211, 1));
            case "lightgreen":
              return new Color2(new RGBA(144, 238, 144, 1));
            case "lightgrey":
              return new Color2(new RGBA(211, 211, 211, 1));
            case "lightpink":
              return new Color2(new RGBA(255, 182, 193, 1));
            case "lightsalmon":
              return new Color2(new RGBA(255, 160, 122, 1));
            case "lightseagreen":
              return new Color2(new RGBA(32, 178, 170, 1));
            case "lightskyblue":
              return new Color2(new RGBA(135, 206, 250, 1));
            case "lightslategray":
              return new Color2(new RGBA(119, 136, 153, 1));
            case "lightslategrey":
              return new Color2(new RGBA(119, 136, 153, 1));
            case "lightsteelblue":
              return new Color2(new RGBA(176, 196, 222, 1));
            case "lightyellow":
              return new Color2(new RGBA(255, 255, 224, 1));
            case "lime":
              return new Color2(new RGBA(0, 255, 0, 1));
            case "limegreen":
              return new Color2(new RGBA(50, 205, 50, 1));
            case "linen":
              return new Color2(new RGBA(250, 240, 230, 1));
            case "magenta":
              return new Color2(new RGBA(255, 0, 255, 1));
            case "maroon":
              return new Color2(new RGBA(128, 0, 0, 1));
            case "mediumaquamarine":
              return new Color2(new RGBA(102, 205, 170, 1));
            case "mediumblue":
              return new Color2(new RGBA(0, 0, 205, 1));
            case "mediumorchid":
              return new Color2(new RGBA(186, 85, 211, 1));
            case "mediumpurple":
              return new Color2(new RGBA(147, 112, 219, 1));
            case "mediumseagreen":
              return new Color2(new RGBA(60, 179, 113, 1));
            case "mediumslateblue":
              return new Color2(new RGBA(123, 104, 238, 1));
            case "mediumspringgreen":
              return new Color2(new RGBA(0, 250, 154, 1));
            case "mediumturquoise":
              return new Color2(new RGBA(72, 209, 204, 1));
            case "mediumvioletred":
              return new Color2(new RGBA(199, 21, 133, 1));
            case "midnightblue":
              return new Color2(new RGBA(25, 25, 112, 1));
            case "mintcream":
              return new Color2(new RGBA(245, 255, 250, 1));
            case "mistyrose":
              return new Color2(new RGBA(255, 228, 225, 1));
            case "moccasin":
              return new Color2(new RGBA(255, 228, 181, 1));
            case "navajowhite":
              return new Color2(new RGBA(255, 222, 173, 1));
            case "navy":
              return new Color2(new RGBA(0, 0, 128, 1));
            case "oldlace":
              return new Color2(new RGBA(253, 245, 230, 1));
            case "olive":
              return new Color2(new RGBA(128, 128, 0, 1));
            case "olivedrab":
              return new Color2(new RGBA(107, 142, 35, 1));
            case "orange":
              return new Color2(new RGBA(255, 165, 0, 1));
            case "orangered":
              return new Color2(new RGBA(255, 69, 0, 1));
            case "orchid":
              return new Color2(new RGBA(218, 112, 214, 1));
            case "palegoldenrod":
              return new Color2(new RGBA(238, 232, 170, 1));
            case "palegreen":
              return new Color2(new RGBA(152, 251, 152, 1));
            case "paleturquoise":
              return new Color2(new RGBA(175, 238, 238, 1));
            case "palevioletred":
              return new Color2(new RGBA(219, 112, 147, 1));
            case "papayawhip":
              return new Color2(new RGBA(255, 239, 213, 1));
            case "peachpuff":
              return new Color2(new RGBA(255, 218, 185, 1));
            case "peru":
              return new Color2(new RGBA(205, 133, 63, 1));
            case "pink":
              return new Color2(new RGBA(255, 192, 203, 1));
            case "plum":
              return new Color2(new RGBA(221, 160, 221, 1));
            case "powderblue":
              return new Color2(new RGBA(176, 224, 230, 1));
            case "purple":
              return new Color2(new RGBA(128, 0, 128, 1));
            case "rebeccapurple":
              return new Color2(new RGBA(102, 51, 153, 1));
            case "red":
              return new Color2(new RGBA(255, 0, 0, 1));
            case "rosybrown":
              return new Color2(new RGBA(188, 143, 143, 1));
            case "royalblue":
              return new Color2(new RGBA(65, 105, 225, 1));
            case "saddlebrown":
              return new Color2(new RGBA(139, 69, 19, 1));
            case "salmon":
              return new Color2(new RGBA(250, 128, 114, 1));
            case "sandybrown":
              return new Color2(new RGBA(244, 164, 96, 1));
            case "seagreen":
              return new Color2(new RGBA(46, 139, 87, 1));
            case "seashell":
              return new Color2(new RGBA(255, 245, 238, 1));
            case "sienna":
              return new Color2(new RGBA(160, 82, 45, 1));
            case "silver":
              return new Color2(new RGBA(192, 192, 192, 1));
            case "skyblue":
              return new Color2(new RGBA(135, 206, 235, 1));
            case "slateblue":
              return new Color2(new RGBA(106, 90, 205, 1));
            case "slategray":
              return new Color2(new RGBA(112, 128, 144, 1));
            case "slategrey":
              return new Color2(new RGBA(112, 128, 144, 1));
            case "snow":
              return new Color2(new RGBA(255, 250, 250, 1));
            case "springgreen":
              return new Color2(new RGBA(0, 255, 127, 1));
            case "steelblue":
              return new Color2(new RGBA(70, 130, 180, 1));
            case "tan":
              return new Color2(new RGBA(210, 180, 140, 1));
            case "teal":
              return new Color2(new RGBA(0, 128, 128, 1));
            case "thistle":
              return new Color2(new RGBA(216, 191, 216, 1));
            case "tomato":
              return new Color2(new RGBA(255, 99, 71, 1));
            case "turquoise":
              return new Color2(new RGBA(64, 224, 208, 1));
            case "violet":
              return new Color2(new RGBA(238, 130, 238, 1));
            case "wheat":
              return new Color2(new RGBA(245, 222, 179, 1));
            case "white":
              return new Color2(new RGBA(255, 255, 255, 1));
            case "whitesmoke":
              return new Color2(new RGBA(245, 245, 245, 1));
            case "yellow":
              return new Color2(new RGBA(255, 255, 0, 1));
            case "yellowgreen":
              return new Color2(new RGBA(154, 205, 50, 1));
            default:
              return null;
          }
        }
        function parseHex(hex) {
          const length = hex.length;
          if (length === 0) {
            return null;
          }
          if (hex.charCodeAt(0) !== 35) {
            return null;
          }
          if (length === 7) {
            const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
            const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
            const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
            return new Color2(new RGBA(r, g, b, 1));
          }
          if (length === 9) {
            const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
            const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
            const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
            const a2 = 16 * _parseHexDigit(hex.charCodeAt(7)) + _parseHexDigit(hex.charCodeAt(8));
            return new Color2(new RGBA(r, g, b, a2 / 255));
          }
          if (length === 4) {
            const r = _parseHexDigit(hex.charCodeAt(1));
            const g = _parseHexDigit(hex.charCodeAt(2));
            const b = _parseHexDigit(hex.charCodeAt(3));
            return new Color2(new RGBA(16 * r + r, 16 * g + g, 16 * b + b));
          }
          if (length === 5) {
            const r = _parseHexDigit(hex.charCodeAt(1));
            const g = _parseHexDigit(hex.charCodeAt(2));
            const b = _parseHexDigit(hex.charCodeAt(3));
            const a2 = _parseHexDigit(hex.charCodeAt(4));
            return new Color2(new RGBA(16 * r + r, 16 * g + g, 16 * b + b, (16 * a2 + a2) / 255));
          }
          return null;
        }
        CSS.parseHex = parseHex;
        function _parseHexDigit(charCode) {
          switch (charCode) {
            case 48:
              return 0;
            case 49:
              return 1;
            case 50:
              return 2;
            case 51:
              return 3;
            case 52:
              return 4;
            case 53:
              return 5;
            case 54:
              return 6;
            case 55:
              return 7;
            case 56:
              return 8;
            case 57:
              return 9;
            case 97:
              return 10;
            case 65:
              return 10;
            case 98:
              return 11;
            case 66:
              return 11;
            case 99:
              return 12;
            case 67:
              return 12;
            case 100:
              return 13;
            case 68:
              return 13;
            case 101:
              return 14;
            case 69:
              return 14;
            case 102:
              return 15;
            case 70:
              return 15;
          }
          return 0;
        }
      })(Format.CSS || (Format.CSS = {}));
    })(Color2.Format || (Color2.Format = {}));
  })(Color$1 || (Color$1 = {}));
  function _parseCaptureGroups(captureGroups) {
    const values = [];
    for (const captureGroup of captureGroups) {
      const parsedNumber = Number(captureGroup);
      if (parsedNumber || parsedNumber === 0 && captureGroup.replace(/\s/g, "") !== "") {
        values.push(parsedNumber);
      }
    }
    return values;
  }
  function _toIColor(r, g, b, a2) {
    return {
      red: r / 255,
      blue: b / 255,
      green: g / 255,
      alpha: a2
    };
  }
  function _findRange(model, match) {
    const index = match.index;
    const length = match[0].length;
    if (index === void 0) {
      return;
    }
    const startPosition = model.positionAt(index);
    const range = {
      startLineNumber: startPosition.lineNumber,
      startColumn: startPosition.column,
      endLineNumber: startPosition.lineNumber,
      endColumn: startPosition.column + length
    };
    return range;
  }
  function _findHexColorInformation(range, hexValue) {
    if (!range) {
      return;
    }
    const parsedHexColor = Color$1.Format.CSS.parseHex(hexValue);
    if (!parsedHexColor) {
      return;
    }
    return {
      range,
      color: _toIColor(parsedHexColor.rgba.r, parsedHexColor.rgba.g, parsedHexColor.rgba.b, parsedHexColor.rgba.a)
    };
  }
  function _findRGBColorInformation(range, matches, isAlpha) {
    if (!range || matches.length !== 1) {
      return;
    }
    const match = matches[0];
    const captureGroups = match.values();
    const parsedRegex = _parseCaptureGroups(captureGroups);
    return {
      range,
      color: _toIColor(parsedRegex[0], parsedRegex[1], parsedRegex[2], isAlpha ? parsedRegex[3] : 1)
    };
  }
  function _findHSLColorInformation(range, matches, isAlpha) {
    if (!range || matches.length !== 1) {
      return;
    }
    const match = matches[0];
    const captureGroups = match.values();
    const parsedRegex = _parseCaptureGroups(captureGroups);
    const colorEquivalent = new Color$1(new HSLA(parsedRegex[0], parsedRegex[1] / 100, parsedRegex[2] / 100, isAlpha ? parsedRegex[3] : 1));
    return {
      range,
      color: _toIColor(colorEquivalent.rgba.r, colorEquivalent.rgba.g, colorEquivalent.rgba.b, colorEquivalent.rgba.a)
    };
  }
  function _findMatches(model, regex) {
    if (typeof model === "string") {
      return [...model.matchAll(regex)];
    } else {
      return model.findMatches(regex);
    }
  }
  function computeColors(model) {
    const result = [];
    const initialValidationRegex = new RegExp(`\\b(rgb|rgba|hsl|hsla)(\\([0-9\\s,.\\%]*\\))|^(#)([A-Fa-f0-9]{3})\\b|^(#)([A-Fa-f0-9]{4})\\b|^(#)([A-Fa-f0-9]{6})\\b|^(#)([A-Fa-f0-9]{8})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{3})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{4})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{6})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{8})\\b`, "gm");
    const initialValidationMatches = _findMatches(model, initialValidationRegex);
    if (initialValidationMatches.length > 0) {
      for (const initialMatch of initialValidationMatches) {
        const initialCaptureGroups = initialMatch.filter((captureGroup) => captureGroup !== void 0);
        const colorScheme = initialCaptureGroups[1];
        const colorParameters = initialCaptureGroups[2];
        if (!colorParameters) {
          continue;
        }
        let colorInformation;
        if (colorScheme === "rgb") {
          const regexParameters = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
          colorInformation = _findRGBColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), false);
        } else if (colorScheme === "rgba") {
          const regexParameters = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
          colorInformation = _findRGBColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), true);
        } else if (colorScheme === "hsl") {
          const regexParameters = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
          colorInformation = _findHSLColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), false);
        } else if (colorScheme === "hsla") {
          const regexParameters = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(0[.][0-9]+|[.][0-9]+|[01][.]0*|[01])\s*\)$/gm;
          colorInformation = _findHSLColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), true);
        } else if (colorScheme === "#") {
          colorInformation = _findHexColorInformation(_findRange(model, initialMatch), colorScheme + colorParameters);
        }
        if (colorInformation) {
          result.push(colorInformation);
        }
      }
    }
    return result;
  }
  function computeDefaultDocumentColors(model) {
    if (!model || typeof model.getValue !== "function" || typeof model.positionAt !== "function") {
      return [];
    }
    return computeColors(model);
  }
  const trimDashesRegex = /^-+|-+$/g;
  const CHUNK_SIZE = 100;
  const MAX_SECTION_LINES = 5;
  function findSectionHeaders(model, options) {
    let headers = [];
    if (options.findRegionSectionHeaders && options.foldingRules?.markers) {
      const regionHeaders = collectRegionHeaders(model, options);
      headers = headers.concat(regionHeaders);
    }
    if (options.findMarkSectionHeaders) {
      const markHeaders = collectMarkHeaders(model, options);
      headers = headers.concat(markHeaders);
    }
    return headers;
  }
  function collectRegionHeaders(model, options) {
    const regionHeaders = [];
    const endLineNumber = model.getLineCount();
    for (let lineNumber = 1; lineNumber <= endLineNumber; lineNumber++) {
      const lineContent = model.getLineContent(lineNumber);
      const match = lineContent.match(options.foldingRules.markers.start);
      if (match) {
        const range = { startLineNumber: lineNumber, startColumn: match[0].length + 1, endLineNumber: lineNumber, endColumn: lineContent.length + 1 };
        if (range.endColumn > range.startColumn) {
          const sectionHeader = {
            range,
            ...getHeaderText(lineContent.substring(match[0].length)),
            shouldBeInComments: false
          };
          if (sectionHeader.text || sectionHeader.hasSeparatorLine) {
            regionHeaders.push(sectionHeader);
          }
        }
      }
    }
    return regionHeaders;
  }
  function collectMarkHeaders(model, options) {
    const markHeaders = [];
    const endLineNumber = model.getLineCount();
    if (!options.markSectionHeaderRegex || options.markSectionHeaderRegex.trim() === "") {
      return markHeaders;
    }
    const multiline = isMultilineRegexSource(options.markSectionHeaderRegex);
    const regex = new RegExp(options.markSectionHeaderRegex, `gdm${multiline ? "s" : ""}`);
    if (regExpLeadsToEndlessLoop(regex)) {
      return markHeaders;
    }
    for (let startLine = 1; startLine <= endLineNumber; startLine += CHUNK_SIZE - MAX_SECTION_LINES) {
      const endLine = Math.min(startLine + CHUNK_SIZE - 1, endLineNumber);
      const lines = [];
      for (let i = startLine; i <= endLine; i++) {
        lines.push(model.getLineContent(i));
      }
      const text = lines.join("\n");
      regex.lastIndex = 0;
      let match;
      while ((match = regex.exec(text)) !== null) {
        const precedingText = text.substring(0, match.index);
        const lineOffset = (precedingText.match(/\n/g) || []).length;
        const lineNumber = startLine + lineOffset;
        const matchLines = match[0].split("\n");
        const matchHeight = matchLines.length;
        const matchEndLine = lineNumber + matchHeight - 1;
        const lineStartIndex = precedingText.lastIndexOf("\n") + 1;
        const startColumn = match.index - lineStartIndex + 1;
        const lastMatchLine = matchLines[matchLines.length - 1];
        const endColumn = matchHeight === 1 ? startColumn + match[0].length : lastMatchLine.length + 1;
        const range = {
          startLineNumber: lineNumber,
          startColumn,
          endLineNumber: matchEndLine,
          endColumn
        };
        const text2 = (match.groups ?? {})["label"] ?? "";
        const hasSeparatorLine = ((match.groups ?? {})["separator"] ?? "") !== "";
        const sectionHeader = {
          range,
          text: text2,
          hasSeparatorLine,
          shouldBeInComments: true
        };
        if (sectionHeader.text || sectionHeader.hasSeparatorLine) {
          if (markHeaders.length === 0 || markHeaders[markHeaders.length - 1].range.endLineNumber < sectionHeader.range.startLineNumber) {
            markHeaders.push(sectionHeader);
          }
        }
        regex.lastIndex = match.index + match[0].length;
      }
    }
    return markHeaders;
  }
  function getHeaderText(text) {
    text = text.trim();
    const hasSeparatorLine = text.startsWith("-");
    text = text.replace(trimDashesRegex, "");
    return { text, hasSeparatorLine };
  }
  class DeferredPromise {
    get isRejected() {
      return this.outcome?.outcome === 1;
    }
    get isSettled() {
      return !!this.outcome;
    }
    constructor() {
      this.p = new Promise((c, e) => {
        this.completeCallback = c;
        this.errorCallback = e;
      });
    }
    complete(value) {
      if (this.isSettled) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        this.completeCallback(value);
        this.outcome = { outcome: 0, value };
        resolve();
      });
    }
    error(err) {
      if (this.isSettled) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        this.errorCallback(err);
        this.outcome = { outcome: 1, value: err };
        resolve();
      });
    }
    cancel() {
      return this.error(new CancellationError());
    }
  }
  var Promises;
  (function(Promises2) {
    async function settled(promises) {
      let firstError = void 0;
      const result = await Promise.all(promises.map((promise) => promise.then((value) => value, (error) => {
        if (!firstError) {
          firstError = error;
        }
        return void 0;
      })));
      if (typeof firstError !== "undefined") {
        throw firstError;
      }
      return result;
    }
    Promises2.settled = settled;
    function withAsyncBody(bodyFn) {
      return new Promise(async (resolve, reject) => {
        try {
          await bodyFn(resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }
    Promises2.withAsyncBody = withAsyncBody;
  })(Promises || (Promises = {}));
  class ProducerConsumer {
    constructor() {
      this._unsatisfiedConsumers = [];
      this._unconsumedValues = [];
    }
    get hasFinalValue() {
      return !!this._finalValue;
    }
    produce(value) {
      this._ensureNoFinalValue();
      if (this._unsatisfiedConsumers.length > 0) {
        const deferred = this._unsatisfiedConsumers.shift();
        this._resolveOrRejectDeferred(deferred, value);
      } else {
        this._unconsumedValues.push(value);
      }
    }
    produceFinal(value) {
      this._ensureNoFinalValue();
      this._finalValue = value;
      for (const deferred of this._unsatisfiedConsumers) {
        this._resolveOrRejectDeferred(deferred, value);
      }
      this._unsatisfiedConsumers.length = 0;
    }
    _ensureNoFinalValue() {
      if (this._finalValue) {
        throw new BugIndicatingError("ProducerConsumer: cannot produce after final value has been set");
      }
    }
    _resolveOrRejectDeferred(deferred, value) {
      if (value.ok) {
        deferred.complete(value.value);
      } else {
        deferred.error(value.error);
      }
    }
    consume() {
      if (this._unconsumedValues.length > 0 || this._finalValue) {
        const value = this._unconsumedValues.length > 0 ? this._unconsumedValues.shift() : this._finalValue;
        if (value.ok) {
          return Promise.resolve(value.value);
        } else {
          return Promise.reject(value.error);
        }
      } else {
        const deferred = new DeferredPromise();
        this._unsatisfiedConsumers.push(deferred);
        return deferred.p;
      }
    }
  }
  const _AsyncIterableProducer = class _AsyncIterableProducer {
    constructor(executor, _onReturn) {
      this._onReturn = _onReturn;
      this._producerConsumer = new ProducerConsumer();
      this._iterator = {
        next: () => this._producerConsumer.consume(),
        return: () => {
          this._onReturn?.();
          return Promise.resolve({ done: true, value: void 0 });
        },
        throw: async (e) => {
          this._finishError(e);
          return { done: true, value: void 0 };
        }
      };
      queueMicrotask(async () => {
        const p = executor({
          emitOne: (value) => this._producerConsumer.produce({ ok: true, value: { done: false, value } }),
          emitMany: (values) => {
            for (const value of values) {
              this._producerConsumer.produce({ ok: true, value: { done: false, value } });
            }
          },
          reject: (error) => this._finishError(error)
        });
        if (!this._producerConsumer.hasFinalValue) {
          try {
            await p;
            this._finishOk();
          } catch (error) {
            this._finishError(error);
          }
        }
      });
    }
    static fromArray(items) {
      return new _AsyncIterableProducer((writer) => {
        writer.emitMany(items);
      });
    }
    static fromPromise(promise) {
      return new _AsyncIterableProducer(async (emitter) => {
        emitter.emitMany(await promise);
      });
    }
    static fromPromisesResolveOrder(promises) {
      return new _AsyncIterableProducer(async (emitter) => {
        await Promise.all(promises.map(async (p) => emitter.emitOne(await p)));
      });
    }
    static merge(iterables) {
      return new _AsyncIterableProducer(async (emitter) => {
        await Promise.all(iterables.map(async (iterable) => {
          for await (const item of iterable) {
            emitter.emitOne(item);
          }
        }));
      });
    }
    static map(iterable, mapFn) {
      return new _AsyncIterableProducer(async (emitter) => {
        for await (const item of iterable) {
          emitter.emitOne(mapFn(item));
        }
      });
    }
    map(mapFn) {
      return _AsyncIterableProducer.map(this, mapFn);
    }
    static coalesce(iterable) {
      return _AsyncIterableProducer.filter(iterable, (item) => !!item);
    }
    coalesce() {
      return _AsyncIterableProducer.coalesce(this);
    }
    static filter(iterable, filterFn) {
      return new _AsyncIterableProducer(async (emitter) => {
        for await (const item of iterable) {
          if (filterFn(item)) {
            emitter.emitOne(item);
          }
        }
      });
    }
    filter(filterFn) {
      return _AsyncIterableProducer.filter(this, filterFn);
    }
    _finishOk() {
      if (!this._producerConsumer.hasFinalValue) {
        this._producerConsumer.produceFinal({ ok: true, value: { done: true, value: void 0 } });
      }
    }
    _finishError(error) {
      if (!this._producerConsumer.hasFinalValue) {
        this._producerConsumer.produceFinal({ ok: false, error });
      }
    }
    [Symbol.asyncIterator]() {
      return this._iterator;
    }
  };
  _AsyncIterableProducer.EMPTY = _AsyncIterableProducer.fromArray([]);
  let AsyncIterableProducer = _AsyncIterableProducer;
  class PrefixSumComputer {
    constructor(values) {
      this.values = values;
      this.prefixSum = new Uint32Array(values.length);
      this.prefixSumValidIndex = new Int32Array(1);
      this.prefixSumValidIndex[0] = -1;
    }
    insertValues(insertIndex, insertValues) {
      insertIndex = toUint32(insertIndex);
      const oldValues = this.values;
      const oldPrefixSum = this.prefixSum;
      const insertValuesLen = insertValues.length;
      if (insertValuesLen === 0) {
        return false;
      }
      this.values = new Uint32Array(oldValues.length + insertValuesLen);
      this.values.set(oldValues.subarray(0, insertIndex), 0);
      this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
      this.values.set(insertValues, insertIndex);
      if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = insertIndex - 1;
      }
      this.prefixSum = new Uint32Array(this.values.length);
      if (this.prefixSumValidIndex[0] >= 0) {
        this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
      }
      return true;
    }
    setValue(index, value) {
      index = toUint32(index);
      value = toUint32(value);
      if (this.values[index] === value) {
        return false;
      }
      this.values[index] = value;
      if (index - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = index - 1;
      }
      return true;
    }
    removeValues(startIndex, count) {
      startIndex = toUint32(startIndex);
      count = toUint32(count);
      const oldValues = this.values;
      const oldPrefixSum = this.prefixSum;
      if (startIndex >= oldValues.length) {
        return false;
      }
      const maxCount = oldValues.length - startIndex;
      if (count >= maxCount) {
        count = maxCount;
      }
      if (count === 0) {
        return false;
      }
      this.values = new Uint32Array(oldValues.length - count);
      this.values.set(oldValues.subarray(0, startIndex), 0);
      this.values.set(oldValues.subarray(startIndex + count), startIndex);
      this.prefixSum = new Uint32Array(this.values.length);
      if (startIndex - 1 < this.prefixSumValidIndex[0]) {
        this.prefixSumValidIndex[0] = startIndex - 1;
      }
      if (this.prefixSumValidIndex[0] >= 0) {
        this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
      }
      return true;
    }
    getTotalSum() {
      if (this.values.length === 0) {
        return 0;
      }
      return this._getPrefixSum(this.values.length - 1);
    }
    /**
     * Returns the sum of the first `index + 1` many items.
     * @returns `SUM(0 <= j <= index, values[j])`.
     */
    getPrefixSum(index) {
      if (index < 0) {
        return 0;
      }
      index = toUint32(index);
      return this._getPrefixSum(index);
    }
    _getPrefixSum(index) {
      if (index <= this.prefixSumValidIndex[0]) {
        return this.prefixSum[index];
      }
      let startIndex = this.prefixSumValidIndex[0] + 1;
      if (startIndex === 0) {
        this.prefixSum[0] = this.values[0];
        startIndex++;
      }
      if (index >= this.values.length) {
        index = this.values.length - 1;
      }
      for (let i = startIndex; i <= index; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
      }
      this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
      return this.prefixSum[index];
    }
    getIndexOf(sum) {
      sum = Math.floor(sum);
      this.getTotalSum();
      let low = 0;
      let high = this.values.length - 1;
      let mid = 0;
      let midStop = 0;
      let midStart = 0;
      while (low <= high) {
        mid = low + (high - low) / 2 | 0;
        midStop = this.prefixSum[mid];
        midStart = midStop - this.values[mid];
        if (sum < midStart) {
          high = mid - 1;
        } else if (sum >= midStop) {
          low = mid + 1;
        } else {
          break;
        }
      }
      return new PrefixSumIndexOfResult(mid, sum - midStart);
    }
  }
  class PrefixSumIndexOfResult {
    constructor(index, remainder) {
      this.index = index;
      this.remainder = remainder;
      this._prefixSumIndexOfResultBrand = void 0;
      this.index = index;
      this.remainder = remainder;
    }
  }
  class MirrorTextModel {
    constructor(uri, lines, eol, versionId) {
      this._uri = uri;
      this._lines = lines;
      this._eol = eol;
      this._versionId = versionId;
      this._lineStarts = null;
      this._cachedTextValue = null;
    }
    dispose() {
      this._lines.length = 0;
    }
    get version() {
      return this._versionId;
    }
    getText() {
      if (this._cachedTextValue === null) {
        this._cachedTextValue = this._lines.join(this._eol);
      }
      return this._cachedTextValue;
    }
    onEvents(e) {
      if (e.eol && e.eol !== this._eol) {
        this._eol = e.eol;
        this._lineStarts = null;
      }
      const changes = e.changes;
      for (const change of changes) {
        this._acceptDeleteRange(change.range);
        this._acceptInsertText(new Position$1(change.range.startLineNumber, change.range.startColumn), change.text);
      }
      this._versionId = e.versionId;
      this._cachedTextValue = null;
    }
    _ensureLineStarts() {
      if (!this._lineStarts) {
        const eolLength = this._eol.length;
        const linesLength = this._lines.length;
        const lineStartValues = new Uint32Array(linesLength);
        for (let i = 0; i < linesLength; i++) {
          lineStartValues[i] = this._lines[i].length + eolLength;
        }
        this._lineStarts = new PrefixSumComputer(lineStartValues);
      }
    }
    /**
     * All changes to a line's text go through this method
     */
    _setLineText(lineIndex, newValue) {
      this._lines[lineIndex] = newValue;
      if (this._lineStarts) {
        this._lineStarts.setValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
      }
    }
    _acceptDeleteRange(range) {
      if (range.startLineNumber === range.endLineNumber) {
        if (range.startColumn === range.endColumn) {
          return;
        }
        this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));
        return;
      }
      this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1));
      this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);
      if (this._lineStarts) {
        this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
      }
    }
    _acceptInsertText(position, insertText) {
      if (insertText.length === 0) {
        return;
      }
      const insertLines = splitLines(insertText);
      if (insertLines.length === 1) {
        this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0] + this._lines[position.lineNumber - 1].substring(position.column - 1));
        return;
      }
      insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1);
      this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0]);
      const newLengths = new Uint32Array(insertLines.length - 1);
      for (let i = 1; i < insertLines.length; i++) {
        this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);
        newLengths[i - 1] = insertLines[i].length + this._eol.length;
      }
      if (this._lineStarts) {
        this._lineStarts.insertValues(position.lineNumber, newLengths);
      }
    }
  }
  class WorkerTextModelSyncServer {
    constructor() {
      this._models = /* @__PURE__ */ Object.create(null);
    }
    getModel(uri) {
      return this._models[uri];
    }
    getModels() {
      const all = [];
      Object.keys(this._models).forEach((key) => all.push(this._models[key]));
      return all;
    }
    $acceptNewModel(data) {
      this._models[data.url] = new MirrorModel(URI$2.parse(data.url), data.lines, data.EOL, data.versionId);
    }
    $acceptModelChanged(uri, e) {
      if (!this._models[uri]) {
        return;
      }
      const model = this._models[uri];
      model.onEvents(e);
    }
    $acceptRemovedModel(uri) {
      if (!this._models[uri]) {
        return;
      }
      delete this._models[uri];
    }
  }
  class MirrorModel extends MirrorTextModel {
    get uri() {
      return this._uri;
    }
    get eol() {
      return this._eol;
    }
    getValue() {
      return this.getText();
    }
    findMatches(regex) {
      const matches = [];
      for (let i = 0; i < this._lines.length; i++) {
        const line = this._lines[i];
        const offsetToAdd = this.offsetAt(new Position$1(i + 1, 1));
        const iteratorOverMatches = line.matchAll(regex);
        for (const match of iteratorOverMatches) {
          if (match.index || match.index === 0) {
            match.index = match.index + offsetToAdd;
          }
          matches.push(match);
        }
      }
      return matches;
    }
    getLinesContent() {
      return this._lines.slice(0);
    }
    getLineCount() {
      return this._lines.length;
    }
    getLineContent(lineNumber) {
      return this._lines[lineNumber - 1];
    }
    getWordAtPosition(position, wordDefinition) {
      const wordAtText = getWordAtText(position.column, ensureValidWordDefinition(wordDefinition), this._lines[position.lineNumber - 1], 0);
      if (wordAtText) {
        return new Range$1(position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
      }
      return null;
    }
    words(wordDefinition) {
      const lines = this._lines;
      const wordenize = this._wordenize.bind(this);
      let lineNumber = 0;
      let lineText = "";
      let wordRangesIdx = 0;
      let wordRanges = [];
      return {
        *[Symbol.iterator]() {
          while (true) {
            if (wordRangesIdx < wordRanges.length) {
              const value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
              wordRangesIdx += 1;
              yield value;
            } else {
              if (lineNumber < lines.length) {
                lineText = lines[lineNumber];
                wordRanges = wordenize(lineText, wordDefinition);
                wordRangesIdx = 0;
                lineNumber += 1;
              } else {
                break;
              }
            }
          }
        }
      };
    }
    getLineWords(lineNumber, wordDefinition) {
      const content = this._lines[lineNumber - 1];
      const ranges = this._wordenize(content, wordDefinition);
      const words = [];
      for (const range of ranges) {
        words.push({
          word: content.substring(range.start, range.end),
          startColumn: range.start + 1,
          endColumn: range.end + 1
        });
      }
      return words;
    }
    _wordenize(content, wordDefinition) {
      const result = [];
      let match;
      wordDefinition.lastIndex = 0;
      while (match = wordDefinition.exec(content)) {
        if (match[0].length === 0) {
          break;
        }
        result.push({ start: match.index, end: match.index + match[0].length });
      }
      return result;
    }
    getValueInRange(range) {
      range = this._validateRange(range);
      if (range.startLineNumber === range.endLineNumber) {
        return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
      }
      const lineEnding = this._eol;
      const startLineIndex = range.startLineNumber - 1;
      const endLineIndex = range.endLineNumber - 1;
      const resultLines = [];
      resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));
      for (let i = startLineIndex + 1; i < endLineIndex; i++) {
        resultLines.push(this._lines[i]);
      }
      resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
      return resultLines.join(lineEnding);
    }
    offsetAt(position) {
      position = this._validatePosition(position);
      this._ensureLineStarts();
      return this._lineStarts.getPrefixSum(position.lineNumber - 2) + (position.column - 1);
    }
    positionAt(offset) {
      offset = Math.floor(offset);
      offset = Math.max(0, offset);
      this._ensureLineStarts();
      const out = this._lineStarts.getIndexOf(offset);
      const lineLength = this._lines[out.index].length;
      return {
        lineNumber: 1 + out.index,
        column: 1 + Math.min(out.remainder, lineLength)
      };
    }
    _validateRange(range) {
      const start2 = this._validatePosition({ lineNumber: range.startLineNumber, column: range.startColumn });
      const end = this._validatePosition({ lineNumber: range.endLineNumber, column: range.endColumn });
      if (start2.lineNumber !== range.startLineNumber || start2.column !== range.startColumn || end.lineNumber !== range.endLineNumber || end.column !== range.endColumn) {
        return {
          startLineNumber: start2.lineNumber,
          startColumn: start2.column,
          endLineNumber: end.lineNumber,
          endColumn: end.column
        };
      }
      return range;
    }
    _validatePosition(position) {
      if (!Position$1.isIPosition(position)) {
        throw new Error("bad position");
      }
      let { lineNumber, column } = position;
      let hasChanged = false;
      if (lineNumber < 1) {
        lineNumber = 1;
        column = 1;
        hasChanged = true;
      } else if (lineNumber > this._lines.length) {
        lineNumber = this._lines.length;
        column = this._lines[lineNumber - 1].length + 1;
        hasChanged = true;
      } else {
        const maxCharacter = this._lines[lineNumber - 1].length + 1;
        if (column < 1) {
          column = 1;
          hasChanged = true;
        } else if (column > maxCharacter) {
          column = maxCharacter;
          hasChanged = true;
        }
      }
      if (!hasChanged) {
        return position;
      } else {
        return { lineNumber, column };
      }
    }
  }
  const _EditorWorker = class _EditorWorker {
    constructor(_foreignModule = null) {
      this._foreignModule = _foreignModule;
      this._requestHandlerBrand = void 0;
      this._workerTextModelSyncServer = new WorkerTextModelSyncServer();
    }
    dispose() {
    }
    async $ping() {
      return "pong";
    }
    _getModel(uri) {
      return this._workerTextModelSyncServer.getModel(uri);
    }
    getModels() {
      return this._workerTextModelSyncServer.getModels();
    }
    $acceptNewModel(data) {
      this._workerTextModelSyncServer.$acceptNewModel(data);
    }
    $acceptModelChanged(uri, e) {
      this._workerTextModelSyncServer.$acceptModelChanged(uri, e);
    }
    $acceptRemovedModel(uri) {
      this._workerTextModelSyncServer.$acceptRemovedModel(uri);
    }
    async $computeUnicodeHighlights(url, options, range) {
      const model = this._getModel(url);
      if (!model) {
        return { ranges: [], hasMore: false, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
      }
      return UnicodeTextModelHighlighter.computeUnicodeHighlights(model, options, range);
    }
    async $findSectionHeaders(url, options) {
      const model = this._getModel(url);
      if (!model) {
        return [];
      }
      return findSectionHeaders(model, options);
    }
    // ---- BEGIN diff --------------------------------------------------------------------------
    async $computeDiff(originalUrl, modifiedUrl, options, algorithm) {
      const original = this._getModel(originalUrl);
      const modified = this._getModel(modifiedUrl);
      if (!original || !modified) {
        return null;
      }
      const result = _EditorWorker.computeDiff(original, modified, options, algorithm);
      return result;
    }
    static computeDiff(originalTextModel, modifiedTextModel, options, algorithm) {
      const diffAlgorithm = algorithm === "advanced" ? linesDiffComputers.getDefault() : linesDiffComputers.getLegacy();
      const originalLines = originalTextModel.getLinesContent();
      const modifiedLines = modifiedTextModel.getLinesContent();
      const result = diffAlgorithm.computeDiff(originalLines, modifiedLines, options);
      const identical = result.changes.length > 0 ? false : this._modelsAreIdentical(originalTextModel, modifiedTextModel);
      function getLineChanges(changes) {
        return changes.map((m) => [m.original.startLineNumber, m.original.endLineNumberExclusive, m.modified.startLineNumber, m.modified.endLineNumberExclusive, m.innerChanges?.map((m2) => [
          m2.originalRange.startLineNumber,
          m2.originalRange.startColumn,
          m2.originalRange.endLineNumber,
          m2.originalRange.endColumn,
          m2.modifiedRange.startLineNumber,
          m2.modifiedRange.startColumn,
          m2.modifiedRange.endLineNumber,
          m2.modifiedRange.endColumn
        ])]);
      }
      return {
        identical,
        quitEarly: result.hitTimeout,
        changes: getLineChanges(result.changes),
        moves: result.moves.map((m) => [
          m.lineRangeMapping.original.startLineNumber,
          m.lineRangeMapping.original.endLineNumberExclusive,
          m.lineRangeMapping.modified.startLineNumber,
          m.lineRangeMapping.modified.endLineNumberExclusive,
          getLineChanges(m.changes)
        ])
      };
    }
    static _modelsAreIdentical(original, modified) {
      const originalLineCount = original.getLineCount();
      const modifiedLineCount = modified.getLineCount();
      if (originalLineCount !== modifiedLineCount) {
        return false;
      }
      for (let line = 1; line <= originalLineCount; line++) {
        const originalLine = original.getLineContent(line);
        const modifiedLine = modified.getLineContent(line);
        if (originalLine !== modifiedLine) {
          return false;
        }
      }
      return true;
    }
    async $computeMoreMinimalEdits(modelUrl, edits, pretty) {
      const model = this._getModel(modelUrl);
      if (!model) {
        return edits;
      }
      const result = [];
      let lastEol = void 0;
      edits = edits.slice(0).sort((a2, b) => {
        if (a2.range && b.range) {
          return Range$1.compareRangesUsingStarts(a2.range, b.range);
        }
        const aRng = a2.range ? 0 : 1;
        const bRng = b.range ? 0 : 1;
        return aRng - bRng;
      });
      let writeIndex = 0;
      for (let readIndex = 1; readIndex < edits.length; readIndex++) {
        if (Range$1.getEndPosition(edits[writeIndex].range).equals(Range$1.getStartPosition(edits[readIndex].range))) {
          edits[writeIndex].range = Range$1.fromPositions(Range$1.getStartPosition(edits[writeIndex].range), Range$1.getEndPosition(edits[readIndex].range));
          edits[writeIndex].text += edits[readIndex].text;
        } else {
          writeIndex++;
          edits[writeIndex] = edits[readIndex];
        }
      }
      edits.length = writeIndex + 1;
      for (let { range, text, eol } of edits) {
        if (typeof eol === "number") {
          lastEol = eol;
        }
        if (Range$1.isEmpty(range) && !text) {
          continue;
        }
        const original = model.getValueInRange(range);
        text = text.replace(/\r\n|\n|\r/g, model.eol);
        if (original === text) {
          continue;
        }
        if (Math.max(text.length, original.length) > _EditorWorker._diffLimit) {
          result.push({ range, text });
          continue;
        }
        const changes = stringDiff(original, text, pretty);
        const editOffset = model.offsetAt(Range$1.lift(range).getStartPosition());
        for (const change of changes) {
          const start2 = model.positionAt(editOffset + change.originalStart);
          const end = model.positionAt(editOffset + change.originalStart + change.originalLength);
          const newEdit = {
            text: text.substr(change.modifiedStart, change.modifiedLength),
            range: { startLineNumber: start2.lineNumber, startColumn: start2.column, endLineNumber: end.lineNumber, endColumn: end.column }
          };
          if (model.getValueInRange(newEdit.range) !== newEdit.text) {
            result.push(newEdit);
          }
        }
      }
      if (typeof lastEol === "number") {
        result.push({ eol: lastEol, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } });
      }
      return result;
    }
    // ---- END minimal edits ---------------------------------------------------------------
    async $computeLinks(modelUrl) {
      const model = this._getModel(modelUrl);
      if (!model) {
        return null;
      }
      return computeLinks(model);
    }
    // --- BEGIN default document colors -----------------------------------------------------------
    async $computeDefaultDocumentColors(modelUrl) {
      const model = this._getModel(modelUrl);
      if (!model) {
        return null;
      }
      return computeDefaultDocumentColors(model);
    }
    async $textualSuggest(modelUrls, leadingWord, wordDef, wordDefFlags) {
      const sw = new StopWatch();
      const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
      const seen = /* @__PURE__ */ new Set();
      outer: for (const url of modelUrls) {
        const model = this._getModel(url);
        if (!model) {
          continue;
        }
        for (const word of model.words(wordDefRegExp)) {
          if (word === leadingWord || !isNaN(Number(word))) {
            continue;
          }
          seen.add(word);
          if (seen.size > _EditorWorker._suggestionsLimit) {
            break outer;
          }
        }
      }
      return { words: Array.from(seen), duration: sw.elapsed() };
    }
    // ---- END suggest --------------------------------------------------------------------------
    //#region -- word ranges --
    async $computeWordRanges(modelUrl, range, wordDef, wordDefFlags) {
      const model = this._getModel(modelUrl);
      if (!model) {
        return /* @__PURE__ */ Object.create(null);
      }
      const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
      const result = /* @__PURE__ */ Object.create(null);
      for (let line = range.startLineNumber; line < range.endLineNumber; line++) {
        const words = model.getLineWords(line, wordDefRegExp);
        for (const word of words) {
          if (!isNaN(Number(word.word))) {
            continue;
          }
          let array = result[word.word];
          if (!array) {
            array = [];
            result[word.word] = array;
          }
          array.push({
            startLineNumber: line,
            startColumn: word.startColumn,
            endLineNumber: line,
            endColumn: word.endColumn
          });
        }
      }
      return result;
    }
    //#endregion
    async $navigateValueSet(modelUrl, range, up, wordDef, wordDefFlags) {
      const model = this._getModel(modelUrl);
      if (!model) {
        return null;
      }
      const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
      if (range.startColumn === range.endColumn) {
        range = {
          startLineNumber: range.startLineNumber,
          startColumn: range.startColumn,
          endLineNumber: range.endLineNumber,
          endColumn: range.endColumn + 1
        };
      }
      const selectionText = model.getValueInRange(range);
      const wordRange = model.getWordAtPosition({ lineNumber: range.startLineNumber, column: range.startColumn }, wordDefRegExp);
      if (!wordRange) {
        return null;
      }
      const word = model.getValueInRange(wordRange);
      const result = BasicInplaceReplace.INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
      return result;
    }
    // ---- BEGIN foreign module support --------------------------------------------------------------------------
    // foreign method request
    $fmr(method, args) {
      if (!this._foreignModule || typeof this._foreignModule[method] !== "function") {
        return Promise.reject(new Error("Missing requestHandler or method: " + method));
      }
      try {
        return Promise.resolve(this._foreignModule[method].apply(this._foreignModule, args));
      } catch (e) {
        return Promise.reject(e);
      }
    }
  };
  _EditorWorker._diffLimit = 1e5;
  _EditorWorker._suggestionsLimit = 1e4;
  let EditorWorker = _EditorWorker;
  if (typeof importScripts === "function") {
    globalThis.monaco = createMonacoBaseAPI();
  }
  const _EditorWorkerHost = class _EditorWorkerHost {
    static getChannel(workerServer) {
      return workerServer.getChannel(_EditorWorkerHost.CHANNEL_NAME);
    }
    static setChannel(workerClient, obj) {
      workerClient.setChannel(_EditorWorkerHost.CHANNEL_NAME, obj);
    }
  };
  _EditorWorkerHost.CHANNEL_NAME = "editorWorkerHost";
  let EditorWorkerHost = _EditorWorkerHost;
  function start(createClient) {
    let client;
    const webWorkerServer = initialize$1((workerServer) => {
      const editorWorkerHost = EditorWorkerHost.getChannel(workerServer);
      const host = new Proxy({}, {
        get(target, prop, receiver) {
          if (prop === "then") {
            return void 0;
          }
          if (typeof prop !== "string") {
            throw new Error(`Not supported`);
          }
          return (...args) => {
            return editorWorkerHost.$fhr(prop, args);
          };
        }
      });
      const ctx = {
        host,
        getMirrorModels: () => {
          return webWorkerServer.requestHandler.getModels();
        }
      };
      client = createClient(ctx);
      return new EditorWorker(client);
    });
    return client;
  }
  function initialize(callback) {
    self.onmessage = (m) => {
      start((ctx) => {
        return callback(ctx, m.data);
      });
    };
  }
  function createScanner$1(text, ignoreTrivia = false) {
    const len = text.length;
    let pos = 0, value = "", tokenOffset = 0, token = 16, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0;
    function scanHexDigits(count, exact) {
      let digits = 0;
      let value2 = 0;
      while (digits < count || false) {
        let ch = text.charCodeAt(pos);
        if (ch >= 48 && ch <= 57) {
          value2 = value2 * 16 + ch - 48;
        } else if (ch >= 65 && ch <= 70) {
          value2 = value2 * 16 + ch - 65 + 10;
        } else if (ch >= 97 && ch <= 102) {
          value2 = value2 * 16 + ch - 97 + 10;
        } else {
          break;
        }
        pos++;
        digits++;
      }
      if (digits < count) {
        value2 = -1;
      }
      return value2;
    }
    function setPosition(newPosition) {
      pos = newPosition;
      value = "";
      tokenOffset = 0;
      token = 16;
      scanError = 0;
    }
    function scanNumber() {
      let start2 = pos;
      if (text.charCodeAt(pos) === 48) {
        pos++;
      } else {
        pos++;
        while (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
        }
      }
      if (pos < text.length && text.charCodeAt(pos) === 46) {
        pos++;
        if (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
          while (pos < text.length && isDigit(text.charCodeAt(pos))) {
            pos++;
          }
        } else {
          scanError = 3;
          return text.substring(start2, pos);
        }
      }
      let end = pos;
      if (pos < text.length && (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101)) {
        pos++;
        if (pos < text.length && text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45) {
          pos++;
        }
        if (pos < text.length && isDigit(text.charCodeAt(pos))) {
          pos++;
          while (pos < text.length && isDigit(text.charCodeAt(pos))) {
            pos++;
          }
          end = pos;
        } else {
          scanError = 3;
        }
      }
      return text.substring(start2, end);
    }
    function scanString() {
      let result = "", start2 = pos;
      while (true) {
        if (pos >= len) {
          result += text.substring(start2, pos);
          scanError = 2;
          break;
        }
        const ch = text.charCodeAt(pos);
        if (ch === 34) {
          result += text.substring(start2, pos);
          pos++;
          break;
        }
        if (ch === 92) {
          result += text.substring(start2, pos);
          pos++;
          if (pos >= len) {
            scanError = 2;
            break;
          }
          const ch2 = text.charCodeAt(pos++);
          switch (ch2) {
            case 34:
              result += '"';
              break;
            case 92:
              result += "\\";
              break;
            case 47:
              result += "/";
              break;
            case 98:
              result += "\b";
              break;
            case 102:
              result += "\f";
              break;
            case 110:
              result += "\n";
              break;
            case 114:
              result += "\r";
              break;
            case 116:
              result += "	";
              break;
            case 117:
              const ch3 = scanHexDigits(4);
              if (ch3 >= 0) {
                result += String.fromCharCode(ch3);
              } else {
                scanError = 4;
              }
              break;
            default:
              scanError = 5;
          }
          start2 = pos;
          continue;
        }
        if (ch >= 0 && ch <= 31) {
          if (isLineBreak(ch)) {
            result += text.substring(start2, pos);
            scanError = 2;
            break;
          } else {
            scanError = 6;
          }
        }
        pos++;
      }
      return result;
    }
    function scanNext() {
      value = "";
      scanError = 0;
      tokenOffset = pos;
      lineStartOffset = lineNumber;
      prevTokenLineStartOffset = tokenLineStartOffset;
      if (pos >= len) {
        tokenOffset = len;
        return token = 17;
      }
      let code = text.charCodeAt(pos);
      if (isWhiteSpace(code)) {
        do {
          pos++;
          value += String.fromCharCode(code);
          code = text.charCodeAt(pos);
        } while (isWhiteSpace(code));
        return token = 15;
      }
      if (isLineBreak(code)) {
        pos++;
        value += String.fromCharCode(code);
        if (code === 13 && text.charCodeAt(pos) === 10) {
          pos++;
          value += "\n";
        }
        lineNumber++;
        tokenLineStartOffset = pos;
        return token = 14;
      }
      switch (code) {
        // tokens: []{}:,
        case 123:
          pos++;
          return token = 1;
        case 125:
          pos++;
          return token = 2;
        case 91:
          pos++;
          return token = 3;
        case 93:
          pos++;
          return token = 4;
        case 58:
          pos++;
          return token = 6;
        case 44:
          pos++;
          return token = 5;
        // strings
        case 34:
          pos++;
          value = scanString();
          return token = 10;
        // comments
        case 47:
          const start2 = pos - 1;
          if (text.charCodeAt(pos + 1) === 47) {
            pos += 2;
            while (pos < len) {
              if (isLineBreak(text.charCodeAt(pos))) {
                break;
              }
              pos++;
            }
            value = text.substring(start2, pos);
            return token = 12;
          }
          if (text.charCodeAt(pos + 1) === 42) {
            pos += 2;
            const safeLength = len - 1;
            let commentClosed = false;
            while (pos < safeLength) {
              const ch = text.charCodeAt(pos);
              if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
                pos += 2;
                commentClosed = true;
                break;
              }
              pos++;
              if (isLineBreak(ch)) {
                if (ch === 13 && text.charCodeAt(pos) === 10) {
                  pos++;
                }
                lineNumber++;
                tokenLineStartOffset = pos;
              }
            }
            if (!commentClosed) {
              pos++;
              scanError = 1;
            }
            value = text.substring(start2, pos);
            return token = 13;
          }
          value += String.fromCharCode(code);
          pos++;
          return token = 16;
        // numbers
        case 45:
          value += String.fromCharCode(code);
          pos++;
          if (pos === len || !isDigit(text.charCodeAt(pos))) {
            return token = 16;
          }
        // found a minus, followed by a number so
        // we fall through to proceed with scanning
        // numbers
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          value += scanNumber();
          return token = 11;
        // literals and unknown symbols
        default:
          while (pos < len && isUnknownContentCharacter(code)) {
            pos++;
            code = text.charCodeAt(pos);
          }
          if (tokenOffset !== pos) {
            value = text.substring(tokenOffset, pos);
            switch (value) {
              case "true":
                return token = 8;
              case "false":
                return token = 9;
              case "null":
                return token = 7;
            }
            return token = 16;
          }
          value += String.fromCharCode(code);
          pos++;
          return token = 16;
      }
    }
    function isUnknownContentCharacter(code) {
      if (isWhiteSpace(code) || isLineBreak(code)) {
        return false;
      }
      switch (code) {
        case 125:
        case 93:
        case 123:
        case 91:
        case 34:
        case 58:
        case 44:
        case 47:
          return false;
      }
      return true;
    }
    function scanNextNonTrivia() {
      let result;
      do {
        result = scanNext();
      } while (result >= 12 && result <= 15);
      return result;
    }
    return {
      setPosition,
      getPosition: () => pos,
      scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
      getToken: () => token,
      getTokenValue: () => value,
      getTokenOffset: () => tokenOffset,
      getTokenLength: () => pos - tokenOffset,
      getTokenStartLine: () => lineStartOffset,
      getTokenStartCharacter: () => tokenOffset - prevTokenLineStartOffset,
      getTokenError: () => scanError
    };
  }
  function isWhiteSpace(ch) {
    return ch === 32 || ch === 9;
  }
  function isLineBreak(ch) {
    return ch === 10 || ch === 13;
  }
  function isDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  var CharacterCodes;
  (function(CharacterCodes2) {
    CharacterCodes2[CharacterCodes2["lineFeed"] = 10] = "lineFeed";
    CharacterCodes2[CharacterCodes2["carriageReturn"] = 13] = "carriageReturn";
    CharacterCodes2[CharacterCodes2["space"] = 32] = "space";
    CharacterCodes2[CharacterCodes2["_0"] = 48] = "_0";
    CharacterCodes2[CharacterCodes2["_1"] = 49] = "_1";
    CharacterCodes2[CharacterCodes2["_2"] = 50] = "_2";
    CharacterCodes2[CharacterCodes2["_3"] = 51] = "_3";
    CharacterCodes2[CharacterCodes2["_4"] = 52] = "_4";
    CharacterCodes2[CharacterCodes2["_5"] = 53] = "_5";
    CharacterCodes2[CharacterCodes2["_6"] = 54] = "_6";
    CharacterCodes2[CharacterCodes2["_7"] = 55] = "_7";
    CharacterCodes2[CharacterCodes2["_8"] = 56] = "_8";
    CharacterCodes2[CharacterCodes2["_9"] = 57] = "_9";
    CharacterCodes2[CharacterCodes2["a"] = 97] = "a";
    CharacterCodes2[CharacterCodes2["b"] = 98] = "b";
    CharacterCodes2[CharacterCodes2["c"] = 99] = "c";
    CharacterCodes2[CharacterCodes2["d"] = 100] = "d";
    CharacterCodes2[CharacterCodes2["e"] = 101] = "e";
    CharacterCodes2[CharacterCodes2["f"] = 102] = "f";
    CharacterCodes2[CharacterCodes2["g"] = 103] = "g";
    CharacterCodes2[CharacterCodes2["h"] = 104] = "h";
    CharacterCodes2[CharacterCodes2["i"] = 105] = "i";
    CharacterCodes2[CharacterCodes2["j"] = 106] = "j";
    CharacterCodes2[CharacterCodes2["k"] = 107] = "k";
    CharacterCodes2[CharacterCodes2["l"] = 108] = "l";
    CharacterCodes2[CharacterCodes2["m"] = 109] = "m";
    CharacterCodes2[CharacterCodes2["n"] = 110] = "n";
    CharacterCodes2[CharacterCodes2["o"] = 111] = "o";
    CharacterCodes2[CharacterCodes2["p"] = 112] = "p";
    CharacterCodes2[CharacterCodes2["q"] = 113] = "q";
    CharacterCodes2[CharacterCodes2["r"] = 114] = "r";
    CharacterCodes2[CharacterCodes2["s"] = 115] = "s";
    CharacterCodes2[CharacterCodes2["t"] = 116] = "t";
    CharacterCodes2[CharacterCodes2["u"] = 117] = "u";
    CharacterCodes2[CharacterCodes2["v"] = 118] = "v";
    CharacterCodes2[CharacterCodes2["w"] = 119] = "w";
    CharacterCodes2[CharacterCodes2["x"] = 120] = "x";
    CharacterCodes2[CharacterCodes2["y"] = 121] = "y";
    CharacterCodes2[CharacterCodes2["z"] = 122] = "z";
    CharacterCodes2[CharacterCodes2["A"] = 65] = "A";
    CharacterCodes2[CharacterCodes2["B"] = 66] = "B";
    CharacterCodes2[CharacterCodes2["C"] = 67] = "C";
    CharacterCodes2[CharacterCodes2["D"] = 68] = "D";
    CharacterCodes2[CharacterCodes2["E"] = 69] = "E";
    CharacterCodes2[CharacterCodes2["F"] = 70] = "F";
    CharacterCodes2[CharacterCodes2["G"] = 71] = "G";
    CharacterCodes2[CharacterCodes2["H"] = 72] = "H";
    CharacterCodes2[CharacterCodes2["I"] = 73] = "I";
    CharacterCodes2[CharacterCodes2["J"] = 74] = "J";
    CharacterCodes2[CharacterCodes2["K"] = 75] = "K";
    CharacterCodes2[CharacterCodes2["L"] = 76] = "L";
    CharacterCodes2[CharacterCodes2["M"] = 77] = "M";
    CharacterCodes2[CharacterCodes2["N"] = 78] = "N";
    CharacterCodes2[CharacterCodes2["O"] = 79] = "O";
    CharacterCodes2[CharacterCodes2["P"] = 80] = "P";
    CharacterCodes2[CharacterCodes2["Q"] = 81] = "Q";
    CharacterCodes2[CharacterCodes2["R"] = 82] = "R";
    CharacterCodes2[CharacterCodes2["S"] = 83] = "S";
    CharacterCodes2[CharacterCodes2["T"] = 84] = "T";
    CharacterCodes2[CharacterCodes2["U"] = 85] = "U";
    CharacterCodes2[CharacterCodes2["V"] = 86] = "V";
    CharacterCodes2[CharacterCodes2["W"] = 87] = "W";
    CharacterCodes2[CharacterCodes2["X"] = 88] = "X";
    CharacterCodes2[CharacterCodes2["Y"] = 89] = "Y";
    CharacterCodes2[CharacterCodes2["Z"] = 90] = "Z";
    CharacterCodes2[CharacterCodes2["asterisk"] = 42] = "asterisk";
    CharacterCodes2[CharacterCodes2["backslash"] = 92] = "backslash";
    CharacterCodes2[CharacterCodes2["closeBrace"] = 125] = "closeBrace";
    CharacterCodes2[CharacterCodes2["closeBracket"] = 93] = "closeBracket";
    CharacterCodes2[CharacterCodes2["colon"] = 58] = "colon";
    CharacterCodes2[CharacterCodes2["comma"] = 44] = "comma";
    CharacterCodes2[CharacterCodes2["dot"] = 46] = "dot";
    CharacterCodes2[CharacterCodes2["doubleQuote"] = 34] = "doubleQuote";
    CharacterCodes2[CharacterCodes2["minus"] = 45] = "minus";
    CharacterCodes2[CharacterCodes2["openBrace"] = 123] = "openBrace";
    CharacterCodes2[CharacterCodes2["openBracket"] = 91] = "openBracket";
    CharacterCodes2[CharacterCodes2["plus"] = 43] = "plus";
    CharacterCodes2[CharacterCodes2["slash"] = 47] = "slash";
    CharacterCodes2[CharacterCodes2["formFeed"] = 12] = "formFeed";
    CharacterCodes2[CharacterCodes2["tab"] = 9] = "tab";
  })(CharacterCodes || (CharacterCodes = {}));
  const cachedSpaces = new Array(20).fill(0).map((_, index) => {
    return " ".repeat(index);
  });
  const maxCachedValues = 200;
  const cachedBreakLinesWithSpaces = {
    " ": {
      "\n": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\n" + " ".repeat(index);
      }),
      "\r": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\r" + " ".repeat(index);
      }),
      "\r\n": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\r\n" + " ".repeat(index);
      })
    },
    "	": {
      "\n": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\n" + "	".repeat(index);
      }),
      "\r": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\r" + "	".repeat(index);
      }),
      "\r\n": new Array(maxCachedValues).fill(0).map((_, index) => {
        return "\r\n" + "	".repeat(index);
      })
    }
  };
  const supportedEols = ["\n", "\r", "\r\n"];
  function format$3(documentText, range, options) {
    let initialIndentLevel;
    let formatText;
    let formatTextStart;
    let rangeStart;
    let rangeEnd;
    if (range) {
      rangeStart = range.offset;
      rangeEnd = rangeStart + range.length;
      formatTextStart = rangeStart;
      while (formatTextStart > 0 && !isEOL(documentText, formatTextStart - 1)) {
        formatTextStart--;
      }
      let endOffset = rangeEnd;
      while (endOffset < documentText.length && !isEOL(documentText, endOffset)) {
        endOffset++;
      }
      formatText = documentText.substring(formatTextStart, endOffset);
      initialIndentLevel = computeIndentLevel(formatText, options);
    } else {
      formatText = documentText;
      initialIndentLevel = 0;
      formatTextStart = 0;
      rangeStart = 0;
      rangeEnd = documentText.length;
    }
    const eol = getEOL(options, documentText);
    const eolFastPathSupported = supportedEols.includes(eol);
    let numberLineBreaks = 0;
    let indentLevel = 0;
    let indentValue;
    if (options.insertSpaces) {
      indentValue = cachedSpaces[options.tabSize || 4] ?? repeat(cachedSpaces[1], options.tabSize || 4);
    } else {
      indentValue = "	";
    }
    const indentType = indentValue === "	" ? "	" : " ";
    let scanner = createScanner$1(formatText, false);
    let hasError = false;
    function newLinesAndIndent() {
      if (numberLineBreaks > 1) {
        return repeat(eol, numberLineBreaks) + repeat(indentValue, initialIndentLevel + indentLevel);
      }
      const amountOfSpaces = indentValue.length * (initialIndentLevel + indentLevel);
      if (!eolFastPathSupported || amountOfSpaces > cachedBreakLinesWithSpaces[indentType][eol].length) {
        return eol + repeat(indentValue, initialIndentLevel + indentLevel);
      }
      if (amountOfSpaces <= 0) {
        return eol;
      }
      return cachedBreakLinesWithSpaces[indentType][eol][amountOfSpaces];
    }
    function scanNext() {
      let token = scanner.scan();
      numberLineBreaks = 0;
      while (token === 15 || token === 14) {
        if (token === 14 && options.keepLines) {
          numberLineBreaks += 1;
        } else if (token === 14) {
          numberLineBreaks = 1;
        }
        token = scanner.scan();
      }
      hasError = token === 16 || scanner.getTokenError() !== 0;
      return token;
    }
    const editOperations = [];
    function addEdit(text, startOffset, endOffset) {
      if (!hasError && (!range || startOffset < rangeEnd && endOffset > rangeStart) && documentText.substring(startOffset, endOffset) !== text) {
        editOperations.push({ offset: startOffset, length: endOffset - startOffset, content: text });
      }
    }
    let firstToken = scanNext();
    if (options.keepLines && numberLineBreaks > 0) {
      addEdit(repeat(eol, numberLineBreaks), 0, 0);
    }
    if (firstToken !== 17) {
      let firstTokenStart = scanner.getTokenOffset() + formatTextStart;
      let initialIndent = indentValue.length * initialIndentLevel < 20 && options.insertSpaces ? cachedSpaces[indentValue.length * initialIndentLevel] : repeat(indentValue, initialIndentLevel);
      addEdit(initialIndent, formatTextStart, firstTokenStart);
    }
    while (firstToken !== 17) {
      let firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
      let secondToken = scanNext();
      let replaceContent = "";
      let needsLineBreak = false;
      while (numberLineBreaks === 0 && (secondToken === 12 || secondToken === 13)) {
        let commentTokenStart = scanner.getTokenOffset() + formatTextStart;
        addEdit(cachedSpaces[1], firstTokenEnd, commentTokenStart);
        firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
        needsLineBreak = secondToken === 12;
        replaceContent = needsLineBreak ? newLinesAndIndent() : "";
        secondToken = scanNext();
      }
      if (secondToken === 2) {
        if (firstToken !== 1) {
          indentLevel--;
        }
        if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 1) {
          replaceContent = newLinesAndIndent();
        } else if (options.keepLines) {
          replaceContent = cachedSpaces[1];
        }
      } else if (secondToken === 4) {
        if (firstToken !== 3) {
          indentLevel--;
        }
        if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 3) {
          replaceContent = newLinesAndIndent();
        } else if (options.keepLines) {
          replaceContent = cachedSpaces[1];
        }
      } else {
        switch (firstToken) {
          case 3:
          case 1:
            indentLevel++;
            if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) {
              replaceContent = newLinesAndIndent();
            } else {
              replaceContent = cachedSpaces[1];
            }
            break;
          case 5:
            if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) {
              replaceContent = newLinesAndIndent();
            } else {
              replaceContent = cachedSpaces[1];
            }
            break;
          case 12:
            replaceContent = newLinesAndIndent();
            break;
          case 13:
            if (numberLineBreaks > 0) {
              replaceContent = newLinesAndIndent();
            } else if (!needsLineBreak) {
              replaceContent = cachedSpaces[1];
            }
            break;
          case 6:
            if (options.keepLines && numberLineBreaks > 0) {
              replaceContent = newLinesAndIndent();
            } else if (!needsLineBreak) {
              replaceContent = cachedSpaces[1];
            }
            break;
          case 10:
            if (options.keepLines && numberLineBreaks > 0) {
              replaceContent = newLinesAndIndent();
            } else if (secondToken === 6 && !needsLineBreak) {
              replaceContent = "";
            }
            break;
          case 7:
          case 8:
          case 9:
          case 11:
          case 2:
          case 4:
            if (options.keepLines && numberLineBreaks > 0) {
              replaceContent = newLinesAndIndent();
            } else {
              if ((secondToken === 12 || secondToken === 13) && !needsLineBreak) {
                replaceContent = cachedSpaces[1];
              } else if (secondToken !== 5 && secondToken !== 17) {
                hasError = true;
              }
            }
            break;
          case 16:
            hasError = true;
            break;
        }
        if (numberLineBreaks > 0 && (secondToken === 12 || secondToken === 13)) {
          replaceContent = newLinesAndIndent();
        }
      }
      if (secondToken === 17) {
        if (options.keepLines && numberLineBreaks > 0) {
          replaceContent = newLinesAndIndent();
        } else {
          replaceContent = options.insertFinalNewline ? eol : "";
        }
      }
      const secondTokenStart = scanner.getTokenOffset() + formatTextStart;
      addEdit(replaceContent, firstTokenEnd, secondTokenStart);
      firstToken = secondToken;
    }
    return editOperations;
  }
  function repeat(s, count) {
    let result = "";
    for (let i = 0; i < count; i++) {
      result += s;
    }
    return result;
  }
  function computeIndentLevel(content, options) {
    let i = 0;
    let nChars = 0;
    const tabSize = options.tabSize || 4;
    while (i < content.length) {
      let ch = content.charAt(i);
      if (ch === cachedSpaces[1]) {
        nChars++;
      } else if (ch === "	") {
        nChars += tabSize;
      } else {
        break;
      }
      i++;
    }
    return Math.floor(nChars / tabSize);
  }
  function getEOL(options, text) {
    for (let i = 0; i < text.length; i++) {
      const ch = text.charAt(i);
      if (ch === "\r") {
        if (i + 1 < text.length && text.charAt(i + 1) === "\n") {
          return "\r\n";
        }
        return "\r";
      } else if (ch === "\n") {
        return "\n";
      }
    }
    return options && options.eol || "\n";
  }
  function isEOL(text, offset) {
    return "\r\n".indexOf(text.charAt(offset)) !== -1;
  }
  var ParseOptions;
  (function(ParseOptions2) {
    ParseOptions2.DEFAULT = {
      allowTrailingComma: false
    };
  })(ParseOptions || (ParseOptions = {}));
  function parse$2(text, errors = [], options = ParseOptions.DEFAULT) {
    let currentProperty = null;
    let currentParent = [];
    const previousParents = [];
    function onValue(value) {
      if (Array.isArray(currentParent)) {
        currentParent.push(value);
      } else if (currentProperty !== null) {
        currentParent[currentProperty] = value;
      }
    }
    const visitor = {
      onObjectBegin: () => {
        const object = {};
        onValue(object);
        previousParents.push(currentParent);
        currentParent = object;
        currentProperty = null;
      },
      onObjectProperty: (name) => {
        currentProperty = name;
      },
      onObjectEnd: () => {
        currentParent = previousParents.pop();
      },
      onArrayBegin: () => {
        const array = [];
        onValue(array);
        previousParents.push(currentParent);
        currentParent = array;
        currentProperty = null;
      },
      onArrayEnd: () => {
        currentParent = previousParents.pop();
      },
      onLiteralValue: onValue,
      onError: (error, offset, length) => {
        errors.push({ error, offset, length });
      }
    };
    visit(text, visitor, options);
    return currentParent[0];
  }
  function getNodePath$2(node) {
    if (!node.parent || !node.parent.children) {
      return [];
    }
    const path = getNodePath$2(node.parent);
    if (node.parent.type === "property") {
      const key = node.parent.children[0].value;
      path.push(key);
    } else if (node.parent.type === "array") {
      const index = node.parent.children.indexOf(node);
      if (index !== -1) {
        path.push(index);
      }
    }
    return path;
  }
  function getNodeValue$2(node) {
    switch (node.type) {
      case "array":
        return node.children.map(getNodeValue$2);
      case "object":
        const obj = /* @__PURE__ */ Object.create(null);
        for (let prop of node.children) {
          const valueNode = prop.children[1];
          if (valueNode) {
            obj[prop.children[0].value] = getNodeValue$2(valueNode);
          }
        }
        return obj;
      case "null":
      case "string":
      case "number":
      case "boolean":
        return node.value;
      default:
        return void 0;
    }
  }
  function contains$1(node, offset, includeRightBound = false) {
    return offset >= node.offset && offset < node.offset + node.length || includeRightBound && offset === node.offset + node.length;
  }
  function findNodeAtOffset$1(node, offset, includeRightBound = false) {
    if (contains$1(node, offset, includeRightBound)) {
      const children = node.children;
      if (Array.isArray(children)) {
        for (let i = 0; i < children.length && children[i].offset <= offset; i++) {
          const item = findNodeAtOffset$1(children[i], offset, includeRightBound);
          if (item) {
            return item;
          }
        }
      }
      return node;
    }
    return void 0;
  }
  function visit(text, visitor, options = ParseOptions.DEFAULT) {
    const _scanner = createScanner$1(text, false);
    const _jsonPath = [];
    function toNoArgVisit(visitFunction) {
      return visitFunction ? () => visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()) : () => true;
    }
    function toNoArgVisitWithPath(visitFunction) {
      return visitFunction ? () => visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), () => _jsonPath.slice()) : () => true;
    }
    function toOneArgVisit(visitFunction) {
      return visitFunction ? (arg) => visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()) : () => true;
    }
    function toOneArgVisitWithPath(visitFunction) {
      return visitFunction ? (arg) => visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), () => _jsonPath.slice()) : () => true;
    }
    const onObjectBegin = toNoArgVisitWithPath(visitor.onObjectBegin), onObjectProperty = toOneArgVisitWithPath(visitor.onObjectProperty), onObjectEnd = toNoArgVisit(visitor.onObjectEnd), onArrayBegin = toNoArgVisitWithPath(visitor.onArrayBegin), onArrayEnd = toNoArgVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisitWithPath(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
    const disallowComments = options && options.disallowComments;
    const allowTrailingComma = options && options.allowTrailingComma;
    function scanNext() {
      while (true) {
        const token = _scanner.scan();
        switch (_scanner.getTokenError()) {
          case 4:
            handleError(
              14
              /* ParseErrorCode.InvalidUnicode */
            );
            break;
          case 5:
            handleError(
              15
              /* ParseErrorCode.InvalidEscapeCharacter */
            );
            break;
          case 3:
            handleError(
              13
              /* ParseErrorCode.UnexpectedEndOfNumber */
            );
            break;
          case 1:
            if (!disallowComments) {
              handleError(
                11
                /* ParseErrorCode.UnexpectedEndOfComment */
              );
            }
            break;
          case 2:
            handleError(
              12
              /* ParseErrorCode.UnexpectedEndOfString */
            );
            break;
          case 6:
            handleError(
              16
              /* ParseErrorCode.InvalidCharacter */
            );
            break;
        }
        switch (token) {
          case 12:
          case 13:
            if (disallowComments) {
              handleError(
                10
                /* ParseErrorCode.InvalidCommentToken */
              );
            } else {
              onComment();
            }
            break;
          case 16:
            handleError(
              1
              /* ParseErrorCode.InvalidSymbol */
            );
            break;
          case 15:
          case 14:
            break;
          default:
            return token;
        }
      }
    }
    function handleError(error, skipUntilAfter = [], skipUntil = []) {
      onError(error);
      if (skipUntilAfter.length + skipUntil.length > 0) {
        let token = _scanner.getToken();
        while (token !== 17) {
          if (skipUntilAfter.indexOf(token) !== -1) {
            scanNext();
            break;
          } else if (skipUntil.indexOf(token) !== -1) {
            break;
          }
          token = scanNext();
        }
      }
    }
    function parseString(isValue) {
      const value = _scanner.getTokenValue();
      if (isValue) {
        onLiteralValue(value);
      } else {
        onObjectProperty(value);
        _jsonPath.push(value);
      }
      scanNext();
      return true;
    }
    function parseLiteral() {
      switch (_scanner.getToken()) {
        case 11:
          const tokenValue = _scanner.getTokenValue();
          let value = Number(tokenValue);
          if (isNaN(value)) {
            handleError(
              2
              /* ParseErrorCode.InvalidNumberFormat */
            );
            value = 0;
          }
          onLiteralValue(value);
          break;
        case 7:
          onLiteralValue(null);
          break;
        case 8:
          onLiteralValue(true);
          break;
        case 9:
          onLiteralValue(false);
          break;
        default:
          return false;
      }
      scanNext();
      return true;
    }
    function parseProperty() {
      if (_scanner.getToken() !== 10) {
        handleError(3, [], [
          2,
          5
          /* SyntaxKind.CommaToken */
        ]);
        return false;
      }
      parseString(false);
      if (_scanner.getToken() === 6) {
        onSeparator(":");
        scanNext();
        if (!parseValue()) {
          handleError(4, [], [
            2,
            5
            /* SyntaxKind.CommaToken */
          ]);
        }
      } else {
        handleError(5, [], [
          2,
          5
          /* SyntaxKind.CommaToken */
        ]);
      }
      _jsonPath.pop();
      return true;
    }
    function parseObject() {
      onObjectBegin();
      scanNext();
      let needsComma = false;
      while (_scanner.getToken() !== 2 && _scanner.getToken() !== 17) {
        if (_scanner.getToken() === 5) {
          if (!needsComma) {
            handleError(4, [], []);
          }
          onSeparator(",");
          scanNext();
          if (_scanner.getToken() === 2 && allowTrailingComma) {
            break;
          }
        } else if (needsComma) {
          handleError(6, [], []);
        }
        if (!parseProperty()) {
          handleError(4, [], [
            2,
            5
            /* SyntaxKind.CommaToken */
          ]);
        }
        needsComma = true;
      }
      onObjectEnd();
      if (_scanner.getToken() !== 2) {
        handleError(7, [
          2
          /* SyntaxKind.CloseBraceToken */
        ], []);
      } else {
        scanNext();
      }
      return true;
    }
    function parseArray() {
      onArrayBegin();
      scanNext();
      let isFirstElement = true;
      let needsComma = false;
      while (_scanner.getToken() !== 4 && _scanner.getToken() !== 17) {
        if (_scanner.getToken() === 5) {
          if (!needsComma) {
            handleError(4, [], []);
          }
          onSeparator(",");
          scanNext();
          if (_scanner.getToken() === 4 && allowTrailingComma) {
            break;
          }
        } else if (needsComma) {
          handleError(6, [], []);
        }
        if (isFirstElement) {
          _jsonPath.push(0);
          isFirstElement = false;
        } else {
          _jsonPath[_jsonPath.length - 1]++;
        }
        if (!parseValue()) {
          handleError(4, [], [
            4,
            5
            /* SyntaxKind.CommaToken */
          ]);
        }
        needsComma = true;
      }
      onArrayEnd();
      if (!isFirstElement) {
        _jsonPath.pop();
      }
      if (_scanner.getToken() !== 4) {
        handleError(8, [
          4
          /* SyntaxKind.CloseBracketToken */
        ], []);
      } else {
        scanNext();
      }
      return true;
    }
    function parseValue() {
      switch (_scanner.getToken()) {
        case 3:
          return parseArray();
        case 1:
          return parseObject();
        case 10:
          return parseString(true);
        default:
          return parseLiteral();
      }
    }
    scanNext();
    if (_scanner.getToken() === 17) {
      if (options.allowEmptyContent) {
        return true;
      }
      handleError(4, [], []);
      return false;
    }
    if (!parseValue()) {
      handleError(4, [], []);
      return false;
    }
    if (_scanner.getToken() !== 17) {
      handleError(9, [], []);
    }
    return true;
  }
  const createScanner = createScanner$1;
  var ScanError;
  (function(ScanError2) {
    ScanError2[ScanError2["None"] = 0] = "None";
    ScanError2[ScanError2["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
    ScanError2[ScanError2["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
    ScanError2[ScanError2["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
    ScanError2[ScanError2["InvalidUnicode"] = 4] = "InvalidUnicode";
    ScanError2[ScanError2["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
    ScanError2[ScanError2["InvalidCharacter"] = 6] = "InvalidCharacter";
  })(ScanError || (ScanError = {}));
  var SyntaxKind;
  (function(SyntaxKind2) {
    SyntaxKind2[SyntaxKind2["OpenBraceToken"] = 1] = "OpenBraceToken";
    SyntaxKind2[SyntaxKind2["CloseBraceToken"] = 2] = "CloseBraceToken";
    SyntaxKind2[SyntaxKind2["OpenBracketToken"] = 3] = "OpenBracketToken";
    SyntaxKind2[SyntaxKind2["CloseBracketToken"] = 4] = "CloseBracketToken";
    SyntaxKind2[SyntaxKind2["CommaToken"] = 5] = "CommaToken";
    SyntaxKind2[SyntaxKind2["ColonToken"] = 6] = "ColonToken";
    SyntaxKind2[SyntaxKind2["NullKeyword"] = 7] = "NullKeyword";
    SyntaxKind2[SyntaxKind2["TrueKeyword"] = 8] = "TrueKeyword";
    SyntaxKind2[SyntaxKind2["FalseKeyword"] = 9] = "FalseKeyword";
    SyntaxKind2[SyntaxKind2["StringLiteral"] = 10] = "StringLiteral";
    SyntaxKind2[SyntaxKind2["NumericLiteral"] = 11] = "NumericLiteral";
    SyntaxKind2[SyntaxKind2["LineCommentTrivia"] = 12] = "LineCommentTrivia";
    SyntaxKind2[SyntaxKind2["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
    SyntaxKind2[SyntaxKind2["LineBreakTrivia"] = 14] = "LineBreakTrivia";
    SyntaxKind2[SyntaxKind2["Trivia"] = 15] = "Trivia";
    SyntaxKind2[SyntaxKind2["Unknown"] = 16] = "Unknown";
    SyntaxKind2[SyntaxKind2["EOF"] = 17] = "EOF";
  })(SyntaxKind || (SyntaxKind = {}));
  const parse$1 = parse$2;
  const findNodeAtOffset = findNodeAtOffset$1;
  const getNodePath$1 = getNodePath$2;
  const getNodeValue$1 = getNodeValue$2;
  var ParseErrorCode;
  (function(ParseErrorCode2) {
    ParseErrorCode2[ParseErrorCode2["InvalidSymbol"] = 1] = "InvalidSymbol";
    ParseErrorCode2[ParseErrorCode2["InvalidNumberFormat"] = 2] = "InvalidNumberFormat";
    ParseErrorCode2[ParseErrorCode2["PropertyNameExpected"] = 3] = "PropertyNameExpected";
    ParseErrorCode2[ParseErrorCode2["ValueExpected"] = 4] = "ValueExpected";
    ParseErrorCode2[ParseErrorCode2["ColonExpected"] = 5] = "ColonExpected";
    ParseErrorCode2[ParseErrorCode2["CommaExpected"] = 6] = "CommaExpected";
    ParseErrorCode2[ParseErrorCode2["CloseBraceExpected"] = 7] = "CloseBraceExpected";
    ParseErrorCode2[ParseErrorCode2["CloseBracketExpected"] = 8] = "CloseBracketExpected";
    ParseErrorCode2[ParseErrorCode2["EndOfFileExpected"] = 9] = "EndOfFileExpected";
    ParseErrorCode2[ParseErrorCode2["InvalidCommentToken"] = 10] = "InvalidCommentToken";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfComment"] = 11] = "UnexpectedEndOfComment";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfString"] = 12] = "UnexpectedEndOfString";
    ParseErrorCode2[ParseErrorCode2["UnexpectedEndOfNumber"] = 13] = "UnexpectedEndOfNumber";
    ParseErrorCode2[ParseErrorCode2["InvalidUnicode"] = 14] = "InvalidUnicode";
    ParseErrorCode2[ParseErrorCode2["InvalidEscapeCharacter"] = 15] = "InvalidEscapeCharacter";
    ParseErrorCode2[ParseErrorCode2["InvalidCharacter"] = 16] = "InvalidCharacter";
  })(ParseErrorCode || (ParseErrorCode = {}));
  function format$2(documentText, range, options) {
    return format$3(documentText, range, options);
  }
  function equals(one, other) {
    if (one === other) {
      return true;
    }
    if (one === null || one === void 0 || other === null || other === void 0) {
      return false;
    }
    if (typeof one !== typeof other) {
      return false;
    }
    if (typeof one !== "object") {
      return false;
    }
    if (Array.isArray(one) !== Array.isArray(other)) {
      return false;
    }
    let i, key;
    if (Array.isArray(one)) {
      if (one.length !== other.length) {
        return false;
      }
      for (i = 0; i < one.length; i++) {
        if (!equals(one[i], other[i])) {
          return false;
        }
      }
    } else {
      const oneKeys = [];
      for (key in one) {
        oneKeys.push(key);
      }
      oneKeys.sort();
      const otherKeys = [];
      for (key in other) {
        otherKeys.push(key);
      }
      otherKeys.sort();
      if (!equals(oneKeys, otherKeys)) {
        return false;
      }
      for (i = 0; i < oneKeys.length; i++) {
        if (!equals(one[oneKeys[i]], other[oneKeys[i]])) {
          return false;
        }
      }
    }
    return true;
  }
  function isNumber(val) {
    return typeof val === "number";
  }
  function isDefined(val) {
    return typeof val !== "undefined";
  }
  function isBoolean(val) {
    return typeof val === "boolean";
  }
  function isString(val) {
    return typeof val === "string";
  }
  function isObject(val) {
    return typeof val === "object" && val !== null && !Array.isArray(val);
  }
  function startsWith(haystack, needle) {
    if (haystack.length < needle.length) {
      return false;
    }
    for (let i = 0; i < needle.length; i++) {
      if (haystack[i] !== needle[i]) {
        return false;
      }
    }
    return true;
  }
  function endsWith(haystack, needle) {
    const diff = haystack.length - needle.length;
    if (diff > 0) {
      return haystack.lastIndexOf(needle) === diff;
    } else if (diff === 0) {
      return haystack === needle;
    } else {
      return false;
    }
  }
  function extendedRegExp(pattern) {
    let flags = "";
    if (startsWith(pattern, "(?i)")) {
      pattern = pattern.substring(4);
      flags = "i";
    }
    try {
      return new RegExp(pattern, flags + "u");
    } catch (e) {
      try {
        return new RegExp(pattern, flags);
      } catch (e2) {
        return void 0;
      }
    }
  }
  function stringLength(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
      const code = str.charCodeAt(i);
      if (55296 <= code && code <= 56319) {
        i++;
      }
    }
    return count;
  }
  var DocumentUri;
  (function(DocumentUri2) {
    function is(value) {
      return typeof value === "string";
    }
    DocumentUri2.is = is;
  })(DocumentUri || (DocumentUri = {}));
  var URI$1;
  (function(URI2) {
    function is(value) {
      return typeof value === "string";
    }
    URI2.is = is;
  })(URI$1 || (URI$1 = {}));
  var integer;
  (function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
    function is(value) {
      return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
    }
    integer2.is = is;
  })(integer || (integer = {}));
  var uinteger;
  (function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
    function is(value) {
      return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
    }
    uinteger2.is = is;
  })(uinteger || (uinteger = {}));
  var Position;
  (function(Position2) {
    function create(line, character) {
      if (line === Number.MAX_VALUE) {
        line = uinteger.MAX_VALUE;
      }
      if (character === Number.MAX_VALUE) {
        character = uinteger.MAX_VALUE;
      }
      return { line, character };
    }
    Position2.create = create;
    function is(value) {
      let candidate = value;
      return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
    }
    Position2.is = is;
  })(Position || (Position = {}));
  var Range;
  (function(Range2) {
    function create(one, two, three, four) {
      if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
        return { start: Position.create(one, two), end: Position.create(three, four) };
      } else if (Position.is(one) && Position.is(two)) {
        return { start: one, end: two };
      } else {
        throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
      }
    }
    Range2.create = create;
    function is(value) {
      let candidate = value;
      return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
    }
    Range2.is = is;
  })(Range || (Range = {}));
  var Location;
  (function(Location2) {
    function create(uri, range) {
      return { uri, range };
    }
    Location2.create = create;
    function is(value) {
      let candidate = value;
      return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
    }
    Location2.is = is;
  })(Location || (Location = {}));
  var LocationLink;
  (function(LocationLink2) {
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
      return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
    }
    LocationLink2.create = create;
    function is(value) {
      let candidate = value;
      return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
  })(LocationLink || (LocationLink = {}));
  var Color;
  (function(Color2) {
    function create(red, green, blue, alpha) {
      return {
        red,
        green,
        blue,
        alpha
      };
    }
    Color2.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
  })(Color || (Color = {}));
  var ColorInformation;
  (function(ColorInformation2) {
    function create(range, color) {
      return {
        range,
        color
      };
    }
    ColorInformation2.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
    }
    ColorInformation2.is = is;
  })(ColorInformation || (ColorInformation = {}));
  var ColorPresentation;
  (function(ColorPresentation2) {
    function create(label, textEdit, additionalTextEdits) {
      return {
        label,
        textEdit,
        additionalTextEdits
      };
    }
    ColorPresentation2.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
    }
    ColorPresentation2.is = is;
  })(ColorPresentation || (ColorPresentation = {}));
  var FoldingRangeKind;
  (function(FoldingRangeKind2) {
    FoldingRangeKind2.Comment = "comment";
    FoldingRangeKind2.Imports = "imports";
    FoldingRangeKind2.Region = "region";
  })(FoldingRangeKind || (FoldingRangeKind = {}));
  var FoldingRange;
  (function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
      const result = {
        startLine,
        endLine
      };
      if (Is.defined(startCharacter)) {
        result.startCharacter = startCharacter;
      }
      if (Is.defined(endCharacter)) {
        result.endCharacter = endCharacter;
      }
      if (Is.defined(kind)) {
        result.kind = kind;
      }
      if (Is.defined(collapsedText)) {
        result.collapsedText = collapsedText;
      }
      return result;
    }
    FoldingRange2.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
  })(FoldingRange || (FoldingRange = {}));
  var DiagnosticRelatedInformation;
  (function(DiagnosticRelatedInformation2) {
    function create(location, message) {
      return {
        location,
        message
      };
    }
    DiagnosticRelatedInformation2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
  })(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
  var DiagnosticSeverity;
  (function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
  })(DiagnosticSeverity || (DiagnosticSeverity = {}));
  var DiagnosticTag;
  (function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
  })(DiagnosticTag || (DiagnosticTag = {}));
  var CodeDescription;
  (function(CodeDescription2) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Is.string(candidate.href);
    }
    CodeDescription2.is = is;
  })(CodeDescription || (CodeDescription = {}));
  var Diagnostic;
  (function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
      let result = { range, message };
      if (Is.defined(severity)) {
        result.severity = severity;
      }
      if (Is.defined(code)) {
        result.code = code;
      }
      if (Is.defined(source)) {
        result.source = source;
      }
      if (Is.defined(relatedInformation)) {
        result.relatedInformation = relatedInformation;
      }
      return result;
    }
    Diagnostic2.create = create;
    function is(value) {
      var _a2;
      let candidate = value;
      return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a2 = candidate.codeDescription) === null || _a2 === void 0 ? void 0 : _a2.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
  })(Diagnostic || (Diagnostic = {}));
  var Command;
  (function(Command2) {
    function create(title, command, ...args) {
      let result = { title, command };
      if (Is.defined(args) && args.length > 0) {
        result.arguments = args;
      }
      return result;
    }
    Command2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
    }
    Command2.is = is;
  })(Command || (Command = {}));
  var TextEdit;
  (function(TextEdit2) {
    function replace(range, newText) {
      return { range, newText };
    }
    TextEdit2.replace = replace;
    function insert(position, newText) {
      return { range: { start: position, end: position }, newText };
    }
    TextEdit2.insert = insert;
    function del(range) {
      return { range, newText: "" };
    }
    TextEdit2.del = del;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
    }
    TextEdit2.is = is;
  })(TextEdit || (TextEdit = {}));
  var ChangeAnnotation;
  (function(ChangeAnnotation2) {
    function create(label, needsConfirmation, description) {
      const result = { label };
      if (needsConfirmation !== void 0) {
        result.needsConfirmation = needsConfirmation;
      }
      if (description !== void 0) {
        result.description = description;
      }
      return result;
    }
    ChangeAnnotation2.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
  })(ChangeAnnotation || (ChangeAnnotation = {}));
  var ChangeAnnotationIdentifier;
  (function(ChangeAnnotationIdentifier2) {
    function is(value) {
      const candidate = value;
      return Is.string(candidate);
    }
    ChangeAnnotationIdentifier2.is = is;
  })(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
  var AnnotatedTextEdit;
  (function(AnnotatedTextEdit2) {
    function replace(range, newText, annotation) {
      return { range, newText, annotationId: annotation };
    }
    AnnotatedTextEdit2.replace = replace;
    function insert(position, newText, annotation) {
      return { range: { start: position, end: position }, newText, annotationId: annotation };
    }
    AnnotatedTextEdit2.insert = insert;
    function del(range, annotation) {
      return { range, newText: "", annotationId: annotation };
    }
    AnnotatedTextEdit2.del = del;
    function is(value) {
      const candidate = value;
      return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
  })(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
  var TextDocumentEdit;
  (function(TextDocumentEdit2) {
    function create(textDocument, edits) {
      return { textDocument, edits };
    }
    TextDocumentEdit2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
  })(TextDocumentEdit || (TextDocumentEdit = {}));
  var CreateFile;
  (function(CreateFile2) {
    function create(uri, options, annotation) {
      let result = {
        kind: "create",
        uri
      };
      if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
        result.options = options;
      }
      if (annotation !== void 0) {
        result.annotationId = annotation;
      }
      return result;
    }
    CreateFile2.create = create;
    function is(value) {
      let candidate = value;
      return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
  })(CreateFile || (CreateFile = {}));
  var RenameFile;
  (function(RenameFile2) {
    function create(oldUri, newUri, options, annotation) {
      let result = {
        kind: "rename",
        oldUri,
        newUri
      };
      if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
        result.options = options;
      }
      if (annotation !== void 0) {
        result.annotationId = annotation;
      }
      return result;
    }
    RenameFile2.create = create;
    function is(value) {
      let candidate = value;
      return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
  })(RenameFile || (RenameFile = {}));
  var DeleteFile;
  (function(DeleteFile2) {
    function create(uri, options, annotation) {
      let result = {
        kind: "delete",
        uri
      };
      if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
        result.options = options;
      }
      if (annotation !== void 0) {
        result.annotationId = annotation;
      }
      return result;
    }
    DeleteFile2.create = create;
    function is(value) {
      let candidate = value;
      return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
  })(DeleteFile || (DeleteFile = {}));
  var WorkspaceEdit;
  (function(WorkspaceEdit2) {
    function is(value) {
      let candidate = value;
      return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change) => {
        if (Is.string(change.kind)) {
          return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
        } else {
          return TextDocumentEdit.is(change);
        }
      }));
    }
    WorkspaceEdit2.is = is;
  })(WorkspaceEdit || (WorkspaceEdit = {}));
  var TextDocumentIdentifier;
  (function(TextDocumentIdentifier2) {
    function create(uri) {
      return { uri };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
  })(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
  var VersionedTextDocumentIdentifier;
  (function(VersionedTextDocumentIdentifier2) {
    function create(uri, version) {
      return { uri, version };
    }
    VersionedTextDocumentIdentifier2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
  })(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
  var OptionalVersionedTextDocumentIdentifier;
  (function(OptionalVersionedTextDocumentIdentifier2) {
    function create(uri, version) {
      return { uri, version };
    }
    OptionalVersionedTextDocumentIdentifier2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
  })(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
  var TextDocumentItem;
  (function(TextDocumentItem2) {
    function create(uri, languageId, version, text) {
      return { uri, languageId, version, text };
    }
    TextDocumentItem2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
  })(TextDocumentItem || (TextDocumentItem = {}));
  var MarkupKind;
  (function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
    function is(value) {
      const candidate = value;
      return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
  })(MarkupKind || (MarkupKind = {}));
  var MarkupContent;
  (function(MarkupContent2) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
    }
    MarkupContent2.is = is;
  })(MarkupContent || (MarkupContent = {}));
  var CompletionItemKind;
  (function(CompletionItemKind2) {
    CompletionItemKind2.Text = 1;
    CompletionItemKind2.Method = 2;
    CompletionItemKind2.Function = 3;
    CompletionItemKind2.Constructor = 4;
    CompletionItemKind2.Field = 5;
    CompletionItemKind2.Variable = 6;
    CompletionItemKind2.Class = 7;
    CompletionItemKind2.Interface = 8;
    CompletionItemKind2.Module = 9;
    CompletionItemKind2.Property = 10;
    CompletionItemKind2.Unit = 11;
    CompletionItemKind2.Value = 12;
    CompletionItemKind2.Enum = 13;
    CompletionItemKind2.Keyword = 14;
    CompletionItemKind2.Snippet = 15;
    CompletionItemKind2.Color = 16;
    CompletionItemKind2.File = 17;
    CompletionItemKind2.Reference = 18;
    CompletionItemKind2.Folder = 19;
    CompletionItemKind2.EnumMember = 20;
    CompletionItemKind2.Constant = 21;
    CompletionItemKind2.Struct = 22;
    CompletionItemKind2.Event = 23;
    CompletionItemKind2.Operator = 24;
    CompletionItemKind2.TypeParameter = 25;
  })(CompletionItemKind || (CompletionItemKind = {}));
  var InsertTextFormat;
  (function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
  })(InsertTextFormat || (InsertTextFormat = {}));
  var CompletionItemTag;
  (function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
  })(CompletionItemTag || (CompletionItemTag = {}));
  var InsertReplaceEdit;
  (function(InsertReplaceEdit2) {
    function create(newText, insert, replace) {
      return { newText, insert, replace };
    }
    InsertReplaceEdit2.create = create;
    function is(value) {
      const candidate = value;
      return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
  })(InsertReplaceEdit || (InsertReplaceEdit = {}));
  var InsertTextMode;
  (function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
  })(InsertTextMode || (InsertTextMode = {}));
  var CompletionItemLabelDetails;
  (function(CompletionItemLabelDetails2) {
    function is(value) {
      const candidate = value;
      return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
    }
    CompletionItemLabelDetails2.is = is;
  })(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
  var CompletionItem;
  (function(CompletionItem2) {
    function create(label) {
      return { label };
    }
    CompletionItem2.create = create;
  })(CompletionItem || (CompletionItem = {}));
  var CompletionList;
  (function(CompletionList2) {
    function create(items, isIncomplete) {
      return { items: items ? items : [], isIncomplete: !!isIncomplete };
    }
    CompletionList2.create = create;
  })(CompletionList || (CompletionList = {}));
  var MarkedString;
  (function(MarkedString2) {
    function fromPlainText(plainText) {
      return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
      const candidate = value;
      return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
    }
    MarkedString2.is = is;
  })(MarkedString || (MarkedString = {}));
  var Hover;
  (function(Hover2) {
    function is(value) {
      let candidate = value;
      return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
    }
    Hover2.is = is;
  })(Hover || (Hover = {}));
  var ParameterInformation;
  (function(ParameterInformation2) {
    function create(label, documentation) {
      return documentation ? { label, documentation } : { label };
    }
    ParameterInformation2.create = create;
  })(ParameterInformation || (ParameterInformation = {}));
  var SignatureInformation;
  (function(SignatureInformation2) {
    function create(label, documentation, ...parameters) {
      let result = { label };
      if (Is.defined(documentation)) {
        result.documentation = documentation;
      }
      if (Is.defined(parameters)) {
        result.parameters = parameters;
      } else {
        result.parameters = [];
      }
      return result;
    }
    SignatureInformation2.create = create;
  })(SignatureInformation || (SignatureInformation = {}));
  var DocumentHighlightKind;
  (function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
  })(DocumentHighlightKind || (DocumentHighlightKind = {}));
  var DocumentHighlight;
  (function(DocumentHighlight2) {
    function create(range, kind) {
      let result = { range };
      if (Is.number(kind)) {
        result.kind = kind;
      }
      return result;
    }
    DocumentHighlight2.create = create;
  })(DocumentHighlight || (DocumentHighlight = {}));
  var SymbolKind;
  (function(SymbolKind2) {
    SymbolKind2.File = 1;
    SymbolKind2.Module = 2;
    SymbolKind2.Namespace = 3;
    SymbolKind2.Package = 4;
    SymbolKind2.Class = 5;
    SymbolKind2.Method = 6;
    SymbolKind2.Property = 7;
    SymbolKind2.Field = 8;
    SymbolKind2.Constructor = 9;
    SymbolKind2.Enum = 10;
    SymbolKind2.Interface = 11;
    SymbolKind2.Function = 12;
    SymbolKind2.Variable = 13;
    SymbolKind2.Constant = 14;
    SymbolKind2.String = 15;
    SymbolKind2.Number = 16;
    SymbolKind2.Boolean = 17;
    SymbolKind2.Array = 18;
    SymbolKind2.Object = 19;
    SymbolKind2.Key = 20;
    SymbolKind2.Null = 21;
    SymbolKind2.EnumMember = 22;
    SymbolKind2.Struct = 23;
    SymbolKind2.Event = 24;
    SymbolKind2.Operator = 25;
    SymbolKind2.TypeParameter = 26;
  })(SymbolKind || (SymbolKind = {}));
  var SymbolTag;
  (function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
  })(SymbolTag || (SymbolTag = {}));
  var SymbolInformation;
  (function(SymbolInformation2) {
    function create(name, kind, range, uri, containerName) {
      let result = {
        name,
        kind,
        location: { uri, range }
      };
      if (containerName) {
        result.containerName = containerName;
      }
      return result;
    }
    SymbolInformation2.create = create;
  })(SymbolInformation || (SymbolInformation = {}));
  var WorkspaceSymbol;
  (function(WorkspaceSymbol2) {
    function create(name, kind, uri, range) {
      return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
    }
    WorkspaceSymbol2.create = create;
  })(WorkspaceSymbol || (WorkspaceSymbol = {}));
  var DocumentSymbol;
  (function(DocumentSymbol2) {
    function create(name, detail, kind, range, selectionRange, children) {
      let result = {
        name,
        detail,
        kind,
        range,
        selectionRange
      };
      if (children !== void 0) {
        result.children = children;
      }
      return result;
    }
    DocumentSymbol2.create = create;
    function is(value) {
      let candidate = value;
      return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
  })(DocumentSymbol || (DocumentSymbol = {}));
  var CodeActionKind;
  (function(CodeActionKind2) {
    CodeActionKind2.Empty = "";
    CodeActionKind2.QuickFix = "quickfix";
    CodeActionKind2.Refactor = "refactor";
    CodeActionKind2.RefactorExtract = "refactor.extract";
    CodeActionKind2.RefactorInline = "refactor.inline";
    CodeActionKind2.RefactorRewrite = "refactor.rewrite";
    CodeActionKind2.Source = "source";
    CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
    CodeActionKind2.SourceFixAll = "source.fixAll";
  })(CodeActionKind || (CodeActionKind = {}));
  var CodeActionTriggerKind;
  (function(CodeActionTriggerKind2) {
    CodeActionTriggerKind2.Invoked = 1;
    CodeActionTriggerKind2.Automatic = 2;
  })(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
  var CodeActionContext;
  (function(CodeActionContext2) {
    function create(diagnostics, only, triggerKind) {
      let result = { diagnostics };
      if (only !== void 0 && only !== null) {
        result.only = only;
      }
      if (triggerKind !== void 0 && triggerKind !== null) {
        result.triggerKind = triggerKind;
      }
      return result;
    }
    CodeActionContext2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
    }
    CodeActionContext2.is = is;
  })(CodeActionContext || (CodeActionContext = {}));
  var CodeAction;
  (function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
      let result = { title };
      let checkKind = true;
      if (typeof kindOrCommandOrEdit === "string") {
        checkKind = false;
        result.kind = kindOrCommandOrEdit;
      } else if (Command.is(kindOrCommandOrEdit)) {
        result.command = kindOrCommandOrEdit;
      } else {
        result.edit = kindOrCommandOrEdit;
      }
      if (checkKind && kind !== void 0) {
        result.kind = kind;
      }
      return result;
    }
    CodeAction2.create = create;
    function is(value) {
      let candidate = value;
      return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
  })(CodeAction || (CodeAction = {}));
  var CodeLens;
  (function(CodeLens2) {
    function create(range, data) {
      let result = { range };
      if (Is.defined(data)) {
        result.data = data;
      }
      return result;
    }
    CodeLens2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
    }
    CodeLens2.is = is;
  })(CodeLens || (CodeLens = {}));
  var FormattingOptions;
  (function(FormattingOptions2) {
    function create(tabSize, insertSpaces) {
      return { tabSize, insertSpaces };
    }
    FormattingOptions2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
  })(FormattingOptions || (FormattingOptions = {}));
  var DocumentLink;
  (function(DocumentLink2) {
    function create(range, target, data) {
      return { range, target, data };
    }
    DocumentLink2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
    }
    DocumentLink2.is = is;
  })(DocumentLink || (DocumentLink = {}));
  var SelectionRange;
  (function(SelectionRange2) {
    function create(range, parent) {
      return { range, parent };
    }
    SelectionRange2.create = create;
    function is(value) {
      let candidate = value;
      return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
  })(SelectionRange || (SelectionRange = {}));
  var SemanticTokenTypes;
  (function(SemanticTokenTypes2) {
    SemanticTokenTypes2["namespace"] = "namespace";
    SemanticTokenTypes2["type"] = "type";
    SemanticTokenTypes2["class"] = "class";
    SemanticTokenTypes2["enum"] = "enum";
    SemanticTokenTypes2["interface"] = "interface";
    SemanticTokenTypes2["struct"] = "struct";
    SemanticTokenTypes2["typeParameter"] = "typeParameter";
    SemanticTokenTypes2["parameter"] = "parameter";
    SemanticTokenTypes2["variable"] = "variable";
    SemanticTokenTypes2["property"] = "property";
    SemanticTokenTypes2["enumMember"] = "enumMember";
    SemanticTokenTypes2["event"] = "event";
    SemanticTokenTypes2["function"] = "function";
    SemanticTokenTypes2["method"] = "method";
    SemanticTokenTypes2["macro"] = "macro";
    SemanticTokenTypes2["keyword"] = "keyword";
    SemanticTokenTypes2["modifier"] = "modifier";
    SemanticTokenTypes2["comment"] = "comment";
    SemanticTokenTypes2["string"] = "string";
    SemanticTokenTypes2["number"] = "number";
    SemanticTokenTypes2["regexp"] = "regexp";
    SemanticTokenTypes2["operator"] = "operator";
    SemanticTokenTypes2["decorator"] = "decorator";
  })(SemanticTokenTypes || (SemanticTokenTypes = {}));
  var SemanticTokenModifiers;
  (function(SemanticTokenModifiers2) {
    SemanticTokenModifiers2["declaration"] = "declaration";
    SemanticTokenModifiers2["definition"] = "definition";
    SemanticTokenModifiers2["readonly"] = "readonly";
    SemanticTokenModifiers2["static"] = "static";
    SemanticTokenModifiers2["deprecated"] = "deprecated";
    SemanticTokenModifiers2["abstract"] = "abstract";
    SemanticTokenModifiers2["async"] = "async";
    SemanticTokenModifiers2["modification"] = "modification";
    SemanticTokenModifiers2["documentation"] = "documentation";
    SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
  })(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
  var SemanticTokens;
  (function(SemanticTokens2) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
    }
    SemanticTokens2.is = is;
  })(SemanticTokens || (SemanticTokens = {}));
  var InlineValueText;
  (function(InlineValueText2) {
    function create(range, text) {
      return { range, text };
    }
    InlineValueText2.create = create;
    function is(value) {
      const candidate = value;
      return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
    }
    InlineValueText2.is = is;
  })(InlineValueText || (InlineValueText = {}));
  var InlineValueVariableLookup;
  (function(InlineValueVariableLookup2) {
    function create(range, variableName, caseSensitiveLookup) {
      return { range, variableName, caseSensitiveLookup };
    }
    InlineValueVariableLookup2.create = create;
    function is(value) {
      const candidate = value;
      return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
    }
    InlineValueVariableLookup2.is = is;
  })(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
  var InlineValueEvaluatableExpression;
  (function(InlineValueEvaluatableExpression2) {
    function create(range, expression) {
      return { range, expression };
    }
    InlineValueEvaluatableExpression2.create = create;
    function is(value) {
      const candidate = value;
      return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
    }
    InlineValueEvaluatableExpression2.is = is;
  })(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
  var InlineValueContext;
  (function(InlineValueContext2) {
    function create(frameId, stoppedLocation) {
      return { frameId, stoppedLocation };
    }
    InlineValueContext2.create = create;
    function is(value) {
      const candidate = value;
      return Is.defined(candidate) && Range.is(value.stoppedLocation);
    }
    InlineValueContext2.is = is;
  })(InlineValueContext || (InlineValueContext = {}));
  var InlayHintKind;
  (function(InlayHintKind2) {
    InlayHintKind2.Type = 1;
    InlayHintKind2.Parameter = 2;
    function is(value) {
      return value === 1 || value === 2;
    }
    InlayHintKind2.is = is;
  })(InlayHintKind || (InlayHintKind = {}));
  var InlayHintLabelPart;
  (function(InlayHintLabelPart2) {
    function create(value) {
      return { value };
    }
    InlayHintLabelPart2.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
    }
    InlayHintLabelPart2.is = is;
  })(InlayHintLabelPart || (InlayHintLabelPart = {}));
  var InlayHint;
  (function(InlayHint2) {
    function create(position, label, kind) {
      const result = { position, label };
      if (kind !== void 0) {
        result.kind = kind;
      }
      return result;
    }
    InlayHint2.create = create;
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
    }
    InlayHint2.is = is;
  })(InlayHint || (InlayHint = {}));
  var StringValue;
  (function(StringValue2) {
    function createSnippet(value) {
      return { kind: "snippet", value };
    }
    StringValue2.createSnippet = createSnippet;
  })(StringValue || (StringValue = {}));
  var InlineCompletionItem;
  (function(InlineCompletionItem2) {
    function create(insertText, filterText, range, command) {
      return { insertText, filterText, range, command };
    }
    InlineCompletionItem2.create = create;
  })(InlineCompletionItem || (InlineCompletionItem = {}));
  var InlineCompletionList;
  (function(InlineCompletionList2) {
    function create(items) {
      return { items };
    }
    InlineCompletionList2.create = create;
  })(InlineCompletionList || (InlineCompletionList = {}));
  var InlineCompletionTriggerKind;
  (function(InlineCompletionTriggerKind2) {
    InlineCompletionTriggerKind2.Invoked = 0;
    InlineCompletionTriggerKind2.Automatic = 1;
  })(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
  var SelectedCompletionInfo;
  (function(SelectedCompletionInfo2) {
    function create(range, text) {
      return { range, text };
    }
    SelectedCompletionInfo2.create = create;
  })(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
  var InlineCompletionContext;
  (function(InlineCompletionContext2) {
    function create(triggerKind, selectedCompletionInfo) {
      return { triggerKind, selectedCompletionInfo };
    }
    InlineCompletionContext2.create = create;
  })(InlineCompletionContext || (InlineCompletionContext = {}));
  var WorkspaceFolder;
  (function(WorkspaceFolder2) {
    function is(value) {
      const candidate = value;
      return Is.objectLiteral(candidate) && URI$1.is(candidate.uri) && Is.string(candidate.name);
    }
    WorkspaceFolder2.is = is;
  })(WorkspaceFolder || (WorkspaceFolder = {}));
  var TextDocument$1;
  (function(TextDocument2) {
    function create(uri, languageId, version, content) {
      return new FullTextDocument$1(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
      let candidate = value;
      return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument2.is = is;
    function applyEdits(document2, edits) {
      let text = document2.getText();
      let sortedEdits = mergeSort2(edits, (a2, b) => {
        let diff = a2.range.start.line - b.range.start.line;
        if (diff === 0) {
          return a2.range.start.character - b.range.start.character;
        }
        return diff;
      });
      let lastModifiedOffset = text.length;
      for (let i = sortedEdits.length - 1; i >= 0; i--) {
        let e = sortedEdits[i];
        let startOffset = document2.offsetAt(e.range.start);
        let endOffset = document2.offsetAt(e.range.end);
        if (endOffset <= lastModifiedOffset) {
          text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
        } else {
          throw new Error("Overlapping edit");
        }
        lastModifiedOffset = startOffset;
      }
      return text;
    }
    TextDocument2.applyEdits = applyEdits;
    function mergeSort2(data, compare) {
      if (data.length <= 1) {
        return data;
      }
      const p = data.length / 2 | 0;
      const left = data.slice(0, p);
      const right = data.slice(p);
      mergeSort2(left, compare);
      mergeSort2(right, compare);
      let leftIdx = 0;
      let rightIdx = 0;
      let i = 0;
      while (leftIdx < left.length && rightIdx < right.length) {
        let ret = compare(left[leftIdx], right[rightIdx]);
        if (ret <= 0) {
          data[i++] = left[leftIdx++];
        } else {
          data[i++] = right[rightIdx++];
        }
      }
      while (leftIdx < left.length) {
        data[i++] = left[leftIdx++];
      }
      while (rightIdx < right.length) {
        data[i++] = right[rightIdx++];
      }
      return data;
    }
  })(TextDocument$1 || (TextDocument$1 = {}));
  let FullTextDocument$1 = class FullTextDocument {
    constructor(uri, languageId, version, content) {
      this._uri = uri;
      this._languageId = languageId;
      this._version = version;
      this._content = content;
      this._lineOffsets = void 0;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(range) {
      if (range) {
        let start2 = this.offsetAt(range.start);
        let end = this.offsetAt(range.end);
        return this._content.substring(start2, end);
      }
      return this._content;
    }
    update(event, version) {
      this._content = event.text;
      this._version = version;
      this._lineOffsets = void 0;
    }
    getLineOffsets() {
      if (this._lineOffsets === void 0) {
        let lineOffsets = [];
        let text = this._content;
        let isLineStart = true;
        for (let i = 0; i < text.length; i++) {
          if (isLineStart) {
            lineOffsets.push(i);
            isLineStart = false;
          }
          let ch = text.charAt(i);
          isLineStart = ch === "\r" || ch === "\n";
          if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
            i++;
          }
        }
        if (isLineStart && text.length > 0) {
          lineOffsets.push(text.length);
        }
        this._lineOffsets = lineOffsets;
      }
      return this._lineOffsets;
    }
    positionAt(offset) {
      offset = Math.max(Math.min(offset, this._content.length), 0);
      let lineOffsets = this.getLineOffsets();
      let low = 0, high = lineOffsets.length;
      if (high === 0) {
        return Position.create(0, offset);
      }
      while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (lineOffsets[mid] > offset) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }
      let line = low - 1;
      return Position.create(line, offset - lineOffsets[line]);
    }
    offsetAt(position) {
      let lineOffsets = this.getLineOffsets();
      if (position.line >= lineOffsets.length) {
        return this._content.length;
      } else if (position.line < 0) {
        return 0;
      }
      let lineOffset = lineOffsets[position.line];
      let nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
      return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
  };
  var Is;
  (function(Is2) {
    const toString = Object.prototype.toString;
    function defined(value) {
      return typeof value !== "undefined";
    }
    Is2.defined = defined;
    function undefined$1(value) {
      return typeof value === "undefined";
    }
    Is2.undefined = undefined$1;
    function boolean(value) {
      return value === true || value === false;
    }
    Is2.boolean = boolean;
    function string(value) {
      return toString.call(value) === "[object String]";
    }
    Is2.string = string;
    function number(value) {
      return toString.call(value) === "[object Number]";
    }
    Is2.number = number;
    function numberRange(value, min, max) {
      return toString.call(value) === "[object Number]" && min <= value && value <= max;
    }
    Is2.numberRange = numberRange;
    function integer2(value) {
      return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
    }
    Is2.integer = integer2;
    function uinteger2(value) {
      return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
    }
    Is2.uinteger = uinteger2;
    function func(value) {
      return toString.call(value) === "[object Function]";
    }
    Is2.func = func;
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
    Is2.objectLiteral = objectLiteral;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    Is2.typedArray = typedArray;
  })(Is || (Is = {}));
  class FullTextDocument {
    constructor(uri, languageId, version, content) {
      this._uri = uri;
      this._languageId = languageId;
      this._version = version;
      this._content = content;
      this._lineOffsets = void 0;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(range) {
      if (range) {
        const start2 = this.offsetAt(range.start);
        const end = this.offsetAt(range.end);
        return this._content.substring(start2, end);
      }
      return this._content;
    }
    update(changes, version) {
      for (let change of changes) {
        if (FullTextDocument.isIncremental(change)) {
          const range = getWellformedRange(change.range);
          const startOffset = this.offsetAt(range.start);
          const endOffset = this.offsetAt(range.end);
          this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
          const startLine = Math.max(range.start.line, 0);
          const endLine = Math.max(range.end.line, 0);
          let lineOffsets = this._lineOffsets;
          const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
          if (endLine - startLine === addedLineOffsets.length) {
            for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
              lineOffsets[i + startLine + 1] = addedLineOffsets[i];
            }
          } else {
            if (addedLineOffsets.length < 1e4) {
              lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
            } else {
              this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
            }
          }
          const diff = change.text.length - (endOffset - startOffset);
          if (diff !== 0) {
            for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
              lineOffsets[i] = lineOffsets[i] + diff;
            }
          }
        } else if (FullTextDocument.isFull(change)) {
          this._content = change.text;
          this._lineOffsets = void 0;
        } else {
          throw new Error("Unknown change event received");
        }
      }
      this._version = version;
    }
    getLineOffsets() {
      if (this._lineOffsets === void 0) {
        this._lineOffsets = computeLineOffsets(this._content, true);
      }
      return this._lineOffsets;
    }
    positionAt(offset) {
      offset = Math.max(Math.min(offset, this._content.length), 0);
      let lineOffsets = this.getLineOffsets();
      let low = 0, high = lineOffsets.length;
      if (high === 0) {
        return { line: 0, character: offset };
      }
      while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (lineOffsets[mid] > offset) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }
      let line = low - 1;
      return { line, character: offset - lineOffsets[line] };
    }
    offsetAt(position) {
      let lineOffsets = this.getLineOffsets();
      if (position.line >= lineOffsets.length) {
        return this._content.length;
      } else if (position.line < 0) {
        return 0;
      }
      let lineOffset = lineOffsets[position.line];
      let nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
      return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
    static isIncremental(event) {
      let candidate = event;
      return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
    }
    static isFull(event) {
      let candidate = event;
      return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
    }
  }
  var TextDocument;
  (function(TextDocument2) {
    function create(uri, languageId, version, content) {
      return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function update(document2, changes, version) {
      if (document2 instanceof FullTextDocument) {
        document2.update(changes, version);
        return document2;
      } else {
        throw new Error("TextDocument.update: document must be created by TextDocument.create");
      }
    }
    TextDocument2.update = update;
    function applyEdits(document2, edits) {
      let text = document2.getText();
      let sortedEdits = mergeSort(edits.map(getWellformedEdit), (a2, b) => {
        let diff = a2.range.start.line - b.range.start.line;
        if (diff === 0) {
          return a2.range.start.character - b.range.start.character;
        }
        return diff;
      });
      let lastModifiedOffset = 0;
      const spans = [];
      for (const e of sortedEdits) {
        let startOffset = document2.offsetAt(e.range.start);
        if (startOffset < lastModifiedOffset) {
          throw new Error("Overlapping edit");
        } else if (startOffset > lastModifiedOffset) {
          spans.push(text.substring(lastModifiedOffset, startOffset));
        }
        if (e.newText.length) {
          spans.push(e.newText);
        }
        lastModifiedOffset = document2.offsetAt(e.range.end);
      }
      spans.push(text.substr(lastModifiedOffset));
      return spans.join("");
    }
    TextDocument2.applyEdits = applyEdits;
  })(TextDocument || (TextDocument = {}));
  function mergeSort(data, compare) {
    if (data.length <= 1) {
      return data;
    }
    const p = data.length / 2 | 0;
    const left = data.slice(0, p);
    const right = data.slice(p);
    mergeSort(left, compare);
    mergeSort(right, compare);
    let leftIdx = 0;
    let rightIdx = 0;
    let i = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      let ret = compare(left[leftIdx], right[rightIdx]);
      if (ret <= 0) {
        data[i++] = left[leftIdx++];
      } else {
        data[i++] = right[rightIdx++];
      }
    }
    while (leftIdx < left.length) {
      data[i++] = left[leftIdx++];
    }
    while (rightIdx < right.length) {
      data[i++] = right[rightIdx++];
    }
    return data;
  }
  function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
    const result = isAtLineStart ? [textOffset] : [];
    for (let i = 0; i < text.length; i++) {
      let ch = text.charCodeAt(i);
      if (ch === 13 || ch === 10) {
        if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
          i++;
        }
        result.push(textOffset + i + 1);
      }
    }
    return result;
  }
  function getWellformedRange(range) {
    const start2 = range.start;
    const end = range.end;
    if (start2.line > end.line || start2.line === end.line && start2.character > end.character) {
      return { start: end, end: start2 };
    }
    return range;
  }
  function getWellformedEdit(textEdit) {
    const range = getWellformedRange(textEdit.range);
    if (range !== textEdit.range) {
      return { newText: textEdit.newText, range };
    }
    return textEdit;
  }
  var ErrorCode;
  (function(ErrorCode2) {
    ErrorCode2[ErrorCode2["Undefined"] = 0] = "Undefined";
    ErrorCode2[ErrorCode2["EnumValueMismatch"] = 1] = "EnumValueMismatch";
    ErrorCode2[ErrorCode2["Deprecated"] = 2] = "Deprecated";
    ErrorCode2[ErrorCode2["UnexpectedEndOfComment"] = 257] = "UnexpectedEndOfComment";
    ErrorCode2[ErrorCode2["UnexpectedEndOfString"] = 258] = "UnexpectedEndOfString";
    ErrorCode2[ErrorCode2["UnexpectedEndOfNumber"] = 259] = "UnexpectedEndOfNumber";
    ErrorCode2[ErrorCode2["InvalidUnicode"] = 260] = "InvalidUnicode";
    ErrorCode2[ErrorCode2["InvalidEscapeCharacter"] = 261] = "InvalidEscapeCharacter";
    ErrorCode2[ErrorCode2["InvalidCharacter"] = 262] = "InvalidCharacter";
    ErrorCode2[ErrorCode2["PropertyExpected"] = 513] = "PropertyExpected";
    ErrorCode2[ErrorCode2["CommaExpected"] = 514] = "CommaExpected";
    ErrorCode2[ErrorCode2["ColonExpected"] = 515] = "ColonExpected";
    ErrorCode2[ErrorCode2["ValueExpected"] = 516] = "ValueExpected";
    ErrorCode2[ErrorCode2["CommaOrCloseBacketExpected"] = 517] = "CommaOrCloseBacketExpected";
    ErrorCode2[ErrorCode2["CommaOrCloseBraceExpected"] = 518] = "CommaOrCloseBraceExpected";
    ErrorCode2[ErrorCode2["TrailingComma"] = 519] = "TrailingComma";
    ErrorCode2[ErrorCode2["DuplicateKey"] = 520] = "DuplicateKey";
    ErrorCode2[ErrorCode2["CommentNotPermitted"] = 521] = "CommentNotPermitted";
    ErrorCode2[ErrorCode2["PropertyKeysMustBeDoublequoted"] = 528] = "PropertyKeysMustBeDoublequoted";
    ErrorCode2[ErrorCode2["SchemaResolveError"] = 768] = "SchemaResolveError";
    ErrorCode2[ErrorCode2["SchemaUnsupportedFeature"] = 769] = "SchemaUnsupportedFeature";
  })(ErrorCode || (ErrorCode = {}));
  var SchemaDraft;
  (function(SchemaDraft2) {
    SchemaDraft2[SchemaDraft2["v3"] = 3] = "v3";
    SchemaDraft2[SchemaDraft2["v4"] = 4] = "v4";
    SchemaDraft2[SchemaDraft2["v6"] = 6] = "v6";
    SchemaDraft2[SchemaDraft2["v7"] = 7] = "v7";
    SchemaDraft2[SchemaDraft2["v2019_09"] = 19] = "v2019_09";
    SchemaDraft2[SchemaDraft2["v2020_12"] = 20] = "v2020_12";
  })(SchemaDraft || (SchemaDraft = {}));
  var ClientCapabilities;
  (function(ClientCapabilities2) {
    ClientCapabilities2.LATEST = {
      textDocument: {
        completion: {
          completionItem: {
            documentationFormat: [MarkupKind.Markdown, MarkupKind.PlainText],
            commitCharactersSupport: true,
            labelDetailsSupport: true
          }
        }
      }
    };
  })(ClientCapabilities || (ClientCapabilities = {}));
  function t(...args) {
    const firstArg = args[0];
    let key;
    let message;
    let formatArgs;
    if (typeof firstArg === "string") {
      key = firstArg;
      message = firstArg;
      args.splice(0, 1);
      formatArgs = !args || typeof args[0] !== "object" ? args : args[0];
    } else if (firstArg instanceof Array) {
      const replacements = args.slice(1);
      if (firstArg.length !== replacements.length + 1) {
        throw new Error("expected a string as the first argument to l10n.t");
      }
      let str = firstArg[0];
      for (let i = 1; i < firstArg.length; i++) {
        str += `{${i - 1}}` + firstArg[i];
      }
      return t(str, ...replacements);
    } else {
      message = firstArg.message;
      key = message;
      if (firstArg.comment && firstArg.comment.length > 0) {
        key += `/${Array.isArray(firstArg.comment) ? firstArg.comment.join("") : firstArg.comment}`;
      }
      formatArgs = firstArg.args ?? {};
    }
    {
      return format$1(message, formatArgs);
    }
  }
  var _format2Regexp = /{([^}]+)}/g;
  function format$1(template, values) {
    if (Object.keys(values).length === 0) {
      return template;
    }
    return template.replace(_format2Regexp, (match, group) => values[group] ?? match);
  }
  const formats = {
    "color-hex": { errorMessage: t("Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."), pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/ },
    "date-time": { errorMessage: t("String is not a RFC3339 date-time."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
    "date": { errorMessage: t("String is not a RFC3339 date."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i },
    "time": { errorMessage: t("String is not a RFC3339 time."), pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
    "email": { errorMessage: t("String is not an e-mail address."), pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/ },
    "hostname": { errorMessage: t("String is not a hostname."), pattern: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i },
    "ipv4": { errorMessage: t("String is not an IPv4 address."), pattern: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/ },
    "ipv6": { errorMessage: t("String is not an IPv6 address."), pattern: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i }
  };
  class ASTNodeImpl {
    constructor(parent, offset, length = 0) {
      this.offset = offset;
      this.length = length;
      this.parent = parent;
    }
    get children() {
      return [];
    }
    toString() {
      return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
    }
  }
  class NullASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset) {
      super(parent, offset);
      this.type = "null";
      this.value = null;
    }
  }
  class BooleanASTNodeImpl extends ASTNodeImpl {
    constructor(parent, boolValue, offset) {
      super(parent, offset);
      this.type = "boolean";
      this.value = boolValue;
    }
  }
  class ArrayASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset) {
      super(parent, offset);
      this.type = "array";
      this.items = [];
    }
    get children() {
      return this.items;
    }
  }
  class NumberASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset) {
      super(parent, offset);
      this.type = "number";
      this.isInteger = true;
      this.value = Number.NaN;
    }
  }
  class StringASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset, length) {
      super(parent, offset, length);
      this.type = "string";
      this.value = "";
    }
  }
  class PropertyASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset, keyNode) {
      super(parent, offset);
      this.type = "property";
      this.colonOffset = -1;
      this.keyNode = keyNode;
    }
    get children() {
      return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
    }
  }
  class ObjectASTNodeImpl extends ASTNodeImpl {
    constructor(parent, offset) {
      super(parent, offset);
      this.type = "object";
      this.properties = [];
    }
    get children() {
      return this.properties;
    }
  }
  function asSchema(schema) {
    if (isBoolean(schema)) {
      return schema ? {} : { "not": {} };
    }
    return schema;
  }
  var EnumMatch;
  (function(EnumMatch2) {
    EnumMatch2[EnumMatch2["Key"] = 0] = "Key";
    EnumMatch2[EnumMatch2["Enum"] = 1] = "Enum";
  })(EnumMatch || (EnumMatch = {}));
  const schemaDraftFromId = {
    "http://json-schema.org/draft-03/schema#": SchemaDraft.v3,
    "http://json-schema.org/draft-04/schema#": SchemaDraft.v4,
    "http://json-schema.org/draft-06/schema#": SchemaDraft.v6,
    "http://json-schema.org/draft-07/schema#": SchemaDraft.v7,
    "https://json-schema.org/draft/2019-09/schema": SchemaDraft.v2019_09,
    "https://json-schema.org/draft/2020-12/schema": SchemaDraft.v2020_12
  };
  class EvaluationContext {
    constructor(schemaDraft) {
      this.schemaDraft = schemaDraft;
    }
  }
  class SchemaCollector {
    constructor(focusOffset = -1, exclude) {
      this.focusOffset = focusOffset;
      this.exclude = exclude;
      this.schemas = [];
    }
    add(schema) {
      this.schemas.push(schema);
    }
    merge(other) {
      Array.prototype.push.apply(this.schemas, other.schemas);
    }
    include(node) {
      return (this.focusOffset === -1 || contains(node, this.focusOffset)) && node !== this.exclude;
    }
    newSub() {
      return new SchemaCollector(-1, this.exclude);
    }
  }
  class NoOpSchemaCollector {
    constructor() {
    }
    get schemas() {
      return [];
    }
    add(_schema) {
    }
    merge(_other) {
    }
    include(_node) {
      return true;
    }
    newSub() {
      return this;
    }
  }
  NoOpSchemaCollector.instance = new NoOpSchemaCollector();
  class ValidationResult {
    constructor() {
      this.problems = [];
      this.propertiesMatches = 0;
      this.processedProperties = /* @__PURE__ */ new Set();
      this.propertiesValueMatches = 0;
      this.primaryValueMatches = 0;
      this.enumValueMatch = false;
      this.enumValues = void 0;
    }
    hasProblems() {
      return !!this.problems.length;
    }
    merge(validationResult) {
      this.problems = this.problems.concat(validationResult.problems);
      this.propertiesMatches += validationResult.propertiesMatches;
      this.propertiesValueMatches += validationResult.propertiesValueMatches;
      this.mergeProcessedProperties(validationResult);
    }
    mergeEnumValues(validationResult) {
      if (!this.enumValueMatch && !validationResult.enumValueMatch && this.enumValues && validationResult.enumValues) {
        this.enumValues = this.enumValues.concat(validationResult.enumValues);
        for (const error of this.problems) {
          if (error.code === ErrorCode.EnumValueMismatch) {
            error.message = t("Value is not accepted. Valid values: {0}.", this.enumValues.map((v) => JSON.stringify(v)).join(", "));
          }
        }
      }
    }
    mergePropertyMatch(propertyValidationResult) {
      this.problems = this.problems.concat(propertyValidationResult.problems);
      this.propertiesMatches++;
      if (propertyValidationResult.enumValueMatch || !propertyValidationResult.hasProblems() && propertyValidationResult.propertiesMatches) {
        this.propertiesValueMatches++;
      }
      if (propertyValidationResult.enumValueMatch && propertyValidationResult.enumValues && propertyValidationResult.enumValues.length === 1) {
        this.primaryValueMatches++;
      }
    }
    mergeProcessedProperties(validationResult) {
      validationResult.processedProperties.forEach((p) => this.processedProperties.add(p));
    }
    compare(other) {
      const hasProblems = this.hasProblems();
      if (hasProblems !== other.hasProblems()) {
        return hasProblems ? -1 : 1;
      }
      if (this.enumValueMatch !== other.enumValueMatch) {
        return other.enumValueMatch ? -1 : 1;
      }
      if (this.primaryValueMatches !== other.primaryValueMatches) {
        return this.primaryValueMatches - other.primaryValueMatches;
      }
      if (this.propertiesValueMatches !== other.propertiesValueMatches) {
        return this.propertiesValueMatches - other.propertiesValueMatches;
      }
      return this.propertiesMatches - other.propertiesMatches;
    }
  }
  function newJSONDocument(root, diagnostics = []) {
    return new JSONDocument(root, diagnostics, []);
  }
  function getNodeValue(node) {
    return getNodeValue$1(node);
  }
  function getNodePath(node) {
    return getNodePath$1(node);
  }
  function contains(node, offset, includeRightBound = false) {
    return offset >= node.offset && offset < node.offset + node.length || includeRightBound && offset === node.offset + node.length;
  }
  class JSONDocument {
    constructor(root, syntaxErrors = [], comments = []) {
      this.root = root;
      this.syntaxErrors = syntaxErrors;
      this.comments = comments;
    }
    getNodeFromOffset(offset, includeRightBound = false) {
      if (this.root) {
        return findNodeAtOffset(this.root, offset, includeRightBound);
      }
      return void 0;
    }
    visit(visitor) {
      if (this.root) {
        const doVisit = (node) => {
          let ctn = visitor(node);
          const children = node.children;
          if (Array.isArray(children)) {
            for (let i = 0; i < children.length && ctn; i++) {
              ctn = doVisit(children[i]);
            }
          }
          return ctn;
        };
        doVisit(this.root);
      }
    }
    validate(textDocument, schema, severity = DiagnosticSeverity.Warning, schemaDraft) {
      if (this.root && schema) {
        const validationResult = new ValidationResult();
        validate(this.root, schema, validationResult, NoOpSchemaCollector.instance, new EvaluationContext(schemaDraft ?? getSchemaDraft(schema)));
        return validationResult.problems.map((p) => {
          const range = Range.create(textDocument.positionAt(p.location.offset), textDocument.positionAt(p.location.offset + p.location.length));
          return Diagnostic.create(range, p.message, p.severity ?? severity, p.code);
        });
      }
      return void 0;
    }
    getMatchingSchemas(schema, focusOffset = -1, exclude) {
      if (this.root && schema) {
        const matchingSchemas = new SchemaCollector(focusOffset, exclude);
        const schemaDraft = getSchemaDraft(schema);
        const context = new EvaluationContext(schemaDraft);
        validate(this.root, schema, new ValidationResult(), matchingSchemas, context);
        return matchingSchemas.schemas;
      }
      return [];
    }
  }
  function getSchemaDraft(schema, fallBack = SchemaDraft.v2020_12) {
    let schemaId = schema.$schema;
    if (schemaId) {
      return schemaDraftFromId[schemaId] ?? fallBack;
    }
    return fallBack;
  }
  function validate(n, schema, validationResult, matchingSchemas, context) {
    if (!n || !matchingSchemas.include(n)) {
      return;
    }
    if (n.type === "property") {
      return validate(n.valueNode, schema, validationResult, matchingSchemas, context);
    }
    const node = n;
    _validateNode();
    switch (node.type) {
      case "object":
        _validateObjectNode(node);
        break;
      case "array":
        _validateArrayNode(node);
        break;
      case "string":
        _validateStringNode(node);
        break;
      case "number":
        _validateNumberNode(node);
        break;
    }
    matchingSchemas.add({ node, schema });
    function _validateNode() {
      function matchesType(type) {
        return node.type === type || type === "integer" && node.type === "number" && node.isInteger;
      }
      if (Array.isArray(schema.type)) {
        if (!schema.type.some(matchesType)) {
          validationResult.problems.push({
            location: { offset: node.offset, length: node.length },
            message: schema.errorMessage || t("Incorrect type. Expected one of {0}.", schema.type.join(", "))
          });
        }
      } else if (schema.type) {
        if (!matchesType(schema.type)) {
          validationResult.problems.push({
            location: { offset: node.offset, length: node.length },
            message: schema.errorMessage || t('Incorrect type. Expected "{0}".', schema.type)
          });
        }
      }
      if (Array.isArray(schema.allOf)) {
        for (const subSchemaRef of schema.allOf) {
          const subValidationResult = new ValidationResult();
          const subMatchingSchemas = matchingSchemas.newSub();
          validate(node, asSchema(subSchemaRef), subValidationResult, subMatchingSchemas, context);
          validationResult.merge(subValidationResult);
          matchingSchemas.merge(subMatchingSchemas);
        }
      }
      const notSchema = asSchema(schema.not);
      if (notSchema) {
        const subValidationResult = new ValidationResult();
        const subMatchingSchemas = matchingSchemas.newSub();
        validate(node, notSchema, subValidationResult, subMatchingSchemas, context);
        if (!subValidationResult.hasProblems()) {
          validationResult.problems.push({
            location: { offset: node.offset, length: node.length },
            message: schema.errorMessage || t("Matches a schema that is not allowed.")
          });
        }
        for (const ms of subMatchingSchemas.schemas) {
          ms.inverted = !ms.inverted;
          matchingSchemas.add(ms);
        }
      }
      const testAlternatives = (alternatives, maxOneMatch) => {
        const matches = [];
        let bestMatch = void 0;
        for (const subSchemaRef of alternatives) {
          const subSchema = asSchema(subSchemaRef);
          const subValidationResult = new ValidationResult();
          const subMatchingSchemas = matchingSchemas.newSub();
          validate(node, subSchema, subValidationResult, subMatchingSchemas, context);
          if (!subValidationResult.hasProblems()) {
            matches.push(subSchema);
          }
          if (!bestMatch) {
            bestMatch = { schema: subSchema, validationResult: subValidationResult, matchingSchemas: subMatchingSchemas };
          } else {
            if (!maxOneMatch && !subValidationResult.hasProblems() && !bestMatch.validationResult.hasProblems()) {
              bestMatch.matchingSchemas.merge(subMatchingSchemas);
              bestMatch.validationResult.propertiesMatches += subValidationResult.propertiesMatches;
              bestMatch.validationResult.propertiesValueMatches += subValidationResult.propertiesValueMatches;
              bestMatch.validationResult.mergeProcessedProperties(subValidationResult);
            } else {
              const compareResult = subValidationResult.compare(bestMatch.validationResult);
              if (compareResult > 0) {
                bestMatch = { schema: subSchema, validationResult: subValidationResult, matchingSchemas: subMatchingSchemas };
              } else if (compareResult === 0) {
                bestMatch.matchingSchemas.merge(subMatchingSchemas);
                bestMatch.validationResult.mergeEnumValues(subValidationResult);
              }
            }
          }
        }
        if (matches.length > 1 && maxOneMatch) {
          validationResult.problems.push({
            location: { offset: node.offset, length: 1 },
            message: t("Matches multiple schemas when only one must validate.")
          });
        }
        if (bestMatch) {
          validationResult.merge(bestMatch.validationResult);
          matchingSchemas.merge(bestMatch.matchingSchemas);
        }
        return matches.length;
      };
      if (Array.isArray(schema.anyOf)) {
        testAlternatives(schema.anyOf, false);
      }
      if (Array.isArray(schema.oneOf)) {
        testAlternatives(schema.oneOf, true);
      }
      const testBranch = (schema2) => {
        const subValidationResult = new ValidationResult();
        const subMatchingSchemas = matchingSchemas.newSub();
        validate(node, asSchema(schema2), subValidationResult, subMatchingSchemas, context);
        validationResult.merge(subValidationResult);
        matchingSchemas.merge(subMatchingSchemas);
      };
      const testCondition = (ifSchema2, thenSchema, elseSchema) => {
        const subSchema = asSchema(ifSchema2);
        const subValidationResult = new ValidationResult();
        const subMatchingSchemas = matchingSchemas.newSub();
        validate(node, subSchema, subValidationResult, subMatchingSchemas, context);
        matchingSchemas.merge(subMatchingSchemas);
        validationResult.mergeProcessedProperties(subValidationResult);
        if (!subValidationResult.hasProblems()) {
          if (thenSchema) {
            testBranch(thenSchema);
          }
        } else if (elseSchema) {
          testBranch(elseSchema);
        }
      };
      const ifSchema = asSchema(schema.if);
      if (ifSchema) {
        testCondition(ifSchema, asSchema(schema.then), asSchema(schema.else));
      }
      if (Array.isArray(schema.enum)) {
        const val = getNodeValue(node);
        let enumValueMatch = false;
        for (const e of schema.enum) {
          if (equals(val, e)) {
            enumValueMatch = true;
            break;
          }
        }
        validationResult.enumValues = schema.enum;
        validationResult.enumValueMatch = enumValueMatch;
        if (!enumValueMatch) {
          validationResult.problems.push({
            location: { offset: node.offset, length: node.length },
            code: ErrorCode.EnumValueMismatch,
            message: schema.errorMessage || t("Value is not accepted. Valid values: {0}.", schema.enum.map((v) => JSON.stringify(v)).join(", "))
          });
        }
      }
      if (isDefined(schema.const)) {
        const val = getNodeValue(node);
        if (!equals(val, schema.const)) {
          validationResult.problems.push({
            location: { offset: node.offset, length: node.length },
            code: ErrorCode.EnumValueMismatch,
            message: schema.errorMessage || t("Value must be {0}.", JSON.stringify(schema.const))
          });
          validationResult.enumValueMatch = false;
        } else {
          validationResult.enumValueMatch = true;
        }
        validationResult.enumValues = [schema.const];
      }
      let deprecationMessage = schema.deprecationMessage;
      if (deprecationMessage || schema.deprecated) {
        deprecationMessage = deprecationMessage || t("Value is deprecated");
        let targetNode = node.parent?.type === "property" ? node.parent : node;
        validationResult.problems.push({
          location: { offset: targetNode.offset, length: targetNode.length },
          severity: DiagnosticSeverity.Warning,
          message: deprecationMessage,
          code: ErrorCode.Deprecated
        });
      }
    }
    function _validateNumberNode(node2) {
      const val = node2.value;
      function normalizeFloats(float) {
        const parts = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(float.toString());
        return parts && {
          value: Number(parts[1] + (parts[2] || "")),
          multiplier: (parts[2]?.length || 0) - (parseInt(parts[3]) || 0)
        };
      }
      if (isNumber(schema.multipleOf)) {
        let remainder = -1;
        if (Number.isInteger(schema.multipleOf)) {
          remainder = val % schema.multipleOf;
        } else {
          let normMultipleOf = normalizeFloats(schema.multipleOf);
          let normValue = normalizeFloats(val);
          if (normMultipleOf && normValue) {
            const multiplier = 10 ** Math.abs(normValue.multiplier - normMultipleOf.multiplier);
            if (normValue.multiplier < normMultipleOf.multiplier) {
              normValue.value *= multiplier;
            } else {
              normMultipleOf.value *= multiplier;
            }
            remainder = normValue.value % normMultipleOf.value;
          }
        }
        if (remainder !== 0) {
          validationResult.problems.push({
            location: { offset: node2.offset, length: node2.length },
            message: t("Value is not divisible by {0}.", schema.multipleOf)
          });
        }
      }
      function getExclusiveLimit(limit, exclusive) {
        if (isNumber(exclusive)) {
          return exclusive;
        }
        if (isBoolean(exclusive) && exclusive) {
          return limit;
        }
        return void 0;
      }
      function getLimit(limit, exclusive) {
        if (!isBoolean(exclusive) || !exclusive) {
          return limit;
        }
        return void 0;
      }
      const exclusiveMinimum = getExclusiveLimit(schema.minimum, schema.exclusiveMinimum);
      if (isNumber(exclusiveMinimum) && val <= exclusiveMinimum) {
        validationResult.problems.push({
          location: { offset: node2.offset, length: node2.length },
          message: t("Value is below the exclusive minimum of {0}.", exclusiveMinimum)
        });
      }
      const exclusiveMaximum = getExclusiveLimit(schema.maximum, schema.exclusiveMaximum);
      if (isNumber(exclusiveMaximum) && val >= exclusiveMaximum) {
        validationResult.problems.push({
          location: { offset: node2.offset, length: node2.length },
          message: t("Value is above the exclusive maximum of {0}.", exclusiveMaximum)
        });
      }
      const minimum = getLimit(schema.minimum, schema.exclusiveMinimum);
      if (isNumber(minimum) && val < minimum) {
        validationResult.problems.push({
          location: { offset: node2.offset, length: node2.length },
          message: t("Value is below the minimum of {0}.", minimum)
        });
      }
      const maximum = getLimit(schema.maximum, schema.exclusiveMaximum);
      if (isNumber(maximum) && val > maximum) {
        validationResult.problems.push({
          location: { offset: node2.offset, length: node2.length },
          message: t("Value is above the maximum of {0}.", maximum)
        });
      }
    }
    function _validateStringNode(node2) {
      if (isNumber(schema.minLength) && stringLength(node2.value) < schema.minLength) {
        validationResult.problems.push({
          location: { offset: node2.offset, length: node2.length },
          message: t("String is shorter than the minimum length of {0}.", schema.minLength)
        });
      }
      if (isNumber(schema.maxLength) && stringLength(node2.value) > schema.maxLength) {
        validationResult.problems.push({
          location: { offset: node2.offset, length: node2.length },
          message: t("String is longer than the maximum length of {0}.", schema.maxLength)
        });
      }
      if (isString(schema.pattern)) {
        const regex = extendedRegExp(schema.pattern);
        if (!regex?.test(node2.value)) {
          validationResult.problems.push({
            location: { offset: node2.offset, length: node2.length },
            message: schema.patternErrorMessage || schema.errorMessage || t('String does not match the pattern of "{0}".', schema.pattern)
          });
        }
      }
      if (schema.format) {
        switch (schema.format) {
          case "uri":
          case "uri-reference":
            {
              let errorMessage;
              if (!node2.value) {
                errorMessage = t("URI expected.");
              } else {
                const match = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(node2.value);
                if (!match) {
                  errorMessage = t("URI is expected.");
                } else if (!match[2] && schema.format === "uri") {
                  errorMessage = t("URI with a scheme is expected.");
                }
              }
              if (errorMessage) {
                validationResult.problems.push({
                  location: { offset: node2.offset, length: node2.length },
                  message: schema.patternErrorMessage || schema.errorMessage || t("String is not a URI: {0}", errorMessage)
                });
              }
            }
            break;
          case "color-hex":
          case "date-time":
          case "date":
          case "time":
          case "email":
          case "hostname":
          case "ipv4":
          case "ipv6":
            const format2 = formats[schema.format];
            if (!node2.value || !format2.pattern.exec(node2.value)) {
              validationResult.problems.push({
                location: { offset: node2.offset, length: node2.length },
                message: schema.patternErrorMessage || schema.errorMessage || format2.errorMessage
              });
            }
        }
      }
    }
    function _validateArrayNode(node2) {
      let prefixItemsSchemas;
      let additionalItemSchema;
      if (context.schemaDraft >= SchemaDraft.v2020_12) {
        prefixItemsSchemas = schema.prefixItems;
        additionalItemSchema = !Array.isArray(schema.items) ? schema.items : void 0;
      } else {
        prefixItemsSchemas = Array.isArray(schema.items) ? schema.items : void 0;
        additionalItemSchema = !Array.isArray(schema.items) ? schema.items : schema.additionalItems;
      }
      let index = 0;
      if (prefixItemsSchemas !== void 0) {
        const max = Math.min(prefixItemsSchemas.length, node2.items.length);
        for (; index < max; index++) {
          const subSchemaRef = prefixItemsSchemas[index];
          const subSchema = asSchema(subSchemaRef);
          const itemValidationResult = new ValidationResult();
          const item = node2.items[index];
          if (item) {
            validate(item, subSchema, itemValidationResult, matchingSchemas, context);
            validationResult.mergePropertyMatch(itemValidationResult);
          }
          validationResult.processedProperties.add(String(index));
        }
      }
      if (additionalItemSchema !== void 0 && index < node2.items.length) {
        if (typeof additionalItemSchema === "boolean") {
          if (additionalItemSchema === false) {
            validationResult.problems.push({
              location: { offset: node2.offset, length: node2.length },
              message: t("Array has too many items according to schema. Expected {0} or fewer.", index)
            });
          }
          for (; index < node2.items.length; index++) {
            validationResult.processedProperties.add(String(index));
            validationResult.propertiesValueMatches++;
          }
        } else {
          for (; index < node2.items.length; index++) {
            const itemValidationResult = new ValidationResult();
            validate(node2.items[index], additionalItemSchema, itemValidationResult, matchingSchemas, context);
            validationResult.mergePropertyMatch(itemValidationResult);
            validationResult.processedProperties.add(String(index));
          }
        }
      }
      const containsSchema = asSchema(schema.contains);
      if (containsSchema) {
        let containsCount = 0;
        for (let index2 = 0; index2 < node2.items.length; index2++) {
          const item = node2.items[index2];
          const itemValidationResult = new ValidationResult();
          validate(item, containsSchema, itemValidationResult, NoOpSchemaCollector.instance, context);
          if (!itemValidationResult.hasProblems()) {
            containsCount++;
            if (context.schemaDraft >= SchemaDraft.v2020_12) {
              validationResult.processedProperties.add(String(index2));
            }
          }
        }
        if (containsCount === 0 && !isNumber(schema.minContains)) {
          validationResult.problems.push({
            location: { offset: node2.offset, length: node2.length },
            message: schema.errorMessage || t("Array does not contain required item.")
          });
        }
        if (isNumber(schema.minContains) && containsCount < schema.minContains) {
          validationResult.problems.push({
            location: { offset: node2.offset, length: node2.length },
            message: schema.errorMessage || t("Array has too few items that match the contains contraint. Expected {0} or more.", schema.minContains)
          });
        }
        if (isNumber(schema.maxContains) && containsCount > schema.maxContains) {
          validationResult.problems.push({
            location: { offset: node2.offset, length: node2.length },
            message: schema.errorMessage || t("Array has too many items that match the contains contraint. Expected {0} or less.", schema.maxContains)
          });
        }
      }
      const unevaluatedItems = schema.unevaluatedItems;
      if (unevaluatedItems !== void 0) {
        for (let i = 0; i < node2.items.length; i++) {
          if (!validationResult.processedProperties.has(String(i))) {
            if (unevaluatedItems === false) {
              validationResult.problems.push({
                location: { offset: node2.offset, length: node2.length },
                message: t("Item does not match any validation rule from the array.")
              });
            } else {
              const itemValidationResult = new ValidationResult();
              validate(node2.items[i], schema.unevaluatedItems, itemValidationResult, matchingSchemas, context);
              validationResult.mergePropertyMatch(itemValidationResult);
            }
          }
          validationResult.processedProperties.add(String(i));
          validationResult.propertiesValueMatches++;
        }
      }
      if (isNumber(schema.minItems) && node2.items.length < schema.minItems) {
        validationResult.problems.push({
          location: { offset: node2.offset, length: node2.length },
          message: t("Array has too few items. Expected {0} or more.", schema.minItems)
        });
      }
      if (isNumber(schema.maxItems) && node2.items.length > schema.maxItems) {
        validationResult.problems.push({
          location: { offset: node2.offset, length: node2.length },
          message: t("Array has too many items. Expected {0} or fewer.", schema.maxItems)
        });
      }
      if (schema.uniqueItems === true) {
        let hasDuplicates = function() {
          for (let i = 0; i < values.length - 1; i++) {
            const value = values[i];
            for (let j = i + 1; j < values.length; j++) {
              if (equals(value, values[j])) {
                return true;
              }
            }
          }
          return false;
        };
        const values = getNodeValue(node2);
        if (hasDuplicates()) {
          validationResult.problems.push({
            location: { offset: node2.offset, length: node2.length },
            message: t("Array has duplicate items.")
          });
        }
      }
    }
    function _validateObjectNode(node2) {
      const seenKeys = /* @__PURE__ */ Object.create(null);
      const unprocessedProperties = /* @__PURE__ */ new Set();
      for (const propertyNode of node2.properties) {
        const key = propertyNode.keyNode.value;
        seenKeys[key] = propertyNode.valueNode;
        unprocessedProperties.add(key);
      }
      if (Array.isArray(schema.required)) {
        for (const propertyName of schema.required) {
          if (!seenKeys[propertyName]) {
            const keyNode = node2.parent && node2.parent.type === "property" && node2.parent.keyNode;
            const location = keyNode ? { offset: keyNode.offset, length: keyNode.length } : { offset: node2.offset, length: 1 };
            validationResult.problems.push({
              location,
              message: t('Missing property "{0}".', propertyName)
            });
          }
        }
      }
      const propertyProcessed = (prop) => {
        unprocessedProperties.delete(prop);
        validationResult.processedProperties.add(prop);
      };
      if (schema.properties) {
        for (const propertyName of Object.keys(schema.properties)) {
          propertyProcessed(propertyName);
          const propertySchema = schema.properties[propertyName];
          const child = seenKeys[propertyName];
          if (child) {
            if (isBoolean(propertySchema)) {
              if (!propertySchema) {
                const propertyNode = child.parent;
                validationResult.problems.push({
                  location: { offset: propertyNode.keyNode.offset, length: propertyNode.keyNode.length },
                  message: schema.errorMessage || t("Property {0} is not allowed.", propertyName)
                });
              } else {
                validationResult.propertiesMatches++;
                validationResult.propertiesValueMatches++;
              }
            } else {
              const propertyValidationResult = new ValidationResult();
              validate(child, propertySchema, propertyValidationResult, matchingSchemas, context);
              validationResult.mergePropertyMatch(propertyValidationResult);
            }
          }
        }
      }
      if (schema.patternProperties) {
        for (const propertyPattern of Object.keys(schema.patternProperties)) {
          const regex = extendedRegExp(propertyPattern);
          if (regex) {
            const processed = [];
            for (const propertyName of unprocessedProperties) {
              if (regex.test(propertyName)) {
                processed.push(propertyName);
                const child = seenKeys[propertyName];
                if (child) {
                  const propertySchema = schema.patternProperties[propertyPattern];
                  if (isBoolean(propertySchema)) {
                    if (!propertySchema) {
                      const propertyNode = child.parent;
                      validationResult.problems.push({
                        location: { offset: propertyNode.keyNode.offset, length: propertyNode.keyNode.length },
                        message: schema.errorMessage || t("Property {0} is not allowed.", propertyName)
                      });
                    } else {
                      validationResult.propertiesMatches++;
                      validationResult.propertiesValueMatches++;
                    }
                  } else {
                    const propertyValidationResult = new ValidationResult();
                    validate(child, propertySchema, propertyValidationResult, matchingSchemas, context);
                    validationResult.mergePropertyMatch(propertyValidationResult);
                  }
                }
              }
            }
            processed.forEach(propertyProcessed);
          }
        }
      }
      const additionalProperties = schema.additionalProperties;
      if (additionalProperties !== void 0) {
        for (const propertyName of unprocessedProperties) {
          propertyProcessed(propertyName);
          const child = seenKeys[propertyName];
          if (child) {
            if (additionalProperties === false) {
              const propertyNode = child.parent;
              validationResult.problems.push({
                location: { offset: propertyNode.keyNode.offset, length: propertyNode.keyNode.length },
                message: schema.errorMessage || t("Property {0} is not allowed.", propertyName)
              });
            } else if (additionalProperties !== true) {
              const propertyValidationResult = new ValidationResult();
              validate(child, additionalProperties, propertyValidationResult, matchingSchemas, context);
              validationResult.mergePropertyMatch(propertyValidationResult);
            }
          }
        }
      }
      const unevaluatedProperties = schema.unevaluatedProperties;
      if (unevaluatedProperties !== void 0) {
        const processed = [];
        for (const propertyName of unprocessedProperties) {
          if (!validationResult.processedProperties.has(propertyName)) {
            processed.push(propertyName);
            const child = seenKeys[propertyName];
            if (child) {
              if (unevaluatedProperties === false) {
                const propertyNode = child.parent;
                validationResult.problems.push({
                  location: { offset: propertyNode.keyNode.offset, length: propertyNode.keyNode.length },
                  message: schema.errorMessage || t("Property {0} is not allowed.", propertyName)
                });
              } else if (unevaluatedProperties !== true) {
                const propertyValidationResult = new ValidationResult();
                validate(child, unevaluatedProperties, propertyValidationResult, matchingSchemas, context);
                validationResult.mergePropertyMatch(propertyValidationResult);
              }
            }
          }
        }
        processed.forEach(propertyProcessed);
      }
      if (isNumber(schema.maxProperties)) {
        if (node2.properties.length > schema.maxProperties) {
          validationResult.problems.push({
            location: { offset: node2.offset, length: node2.length },
            message: t("Object has more properties than limit of {0}.", schema.maxProperties)
          });
        }
      }
      if (isNumber(schema.minProperties)) {
        if (node2.properties.length < schema.minProperties) {
          validationResult.problems.push({
            location: { offset: node2.offset, length: node2.length },
            message: t("Object has fewer properties than the required number of {0}", schema.minProperties)
          });
        }
      }
      if (schema.dependentRequired) {
        for (const key in schema.dependentRequired) {
          const prop = seenKeys[key];
          const propertyDeps = schema.dependentRequired[key];
          if (prop && Array.isArray(propertyDeps)) {
            _validatePropertyDependencies(key, propertyDeps);
          }
        }
      }
      if (schema.dependentSchemas) {
        for (const key in schema.dependentSchemas) {
          const prop = seenKeys[key];
          const propertyDeps = schema.dependentSchemas[key];
          if (prop && isObject(propertyDeps)) {
            _validatePropertyDependencies(key, propertyDeps);
          }
        }
      }
      if (schema.dependencies) {
        for (const key in schema.dependencies) {
          const prop = seenKeys[key];
          if (prop) {
            _validatePropertyDependencies(key, schema.dependencies[key]);
          }
        }
      }
      const propertyNames = asSchema(schema.propertyNames);
      if (propertyNames) {
        for (const f2 of node2.properties) {
          const key = f2.keyNode;
          if (key) {
            validate(key, propertyNames, validationResult, NoOpSchemaCollector.instance, context);
          }
        }
      }
      function _validatePropertyDependencies(key, propertyDep) {
        if (Array.isArray(propertyDep)) {
          for (const requiredProp of propertyDep) {
            if (!seenKeys[requiredProp]) {
              validationResult.problems.push({
                location: { offset: node2.offset, length: node2.length },
                message: t("Object is missing property {0} required by property {1}.", requiredProp, key)
              });
            } else {
              validationResult.propertiesValueMatches++;
            }
          }
        } else {
          const propertySchema = asSchema(propertyDep);
          if (propertySchema) {
            const propertyValidationResult = new ValidationResult();
            validate(node2, propertySchema, propertyValidationResult, matchingSchemas, context);
            validationResult.mergePropertyMatch(propertyValidationResult);
          }
        }
      }
    }
  }
  function parse(textDocument, config) {
    const problems = [];
    let lastProblemOffset = -1;
    const text = textDocument.getText();
    const scanner = createScanner(text, false);
    const commentRanges = config && config.collectComments ? [] : void 0;
    function _scanNext() {
      while (true) {
        const token2 = scanner.scan();
        _checkScanError();
        switch (token2) {
          case 12:
          case 13:
            if (Array.isArray(commentRanges)) {
              commentRanges.push(Range.create(textDocument.positionAt(scanner.getTokenOffset()), textDocument.positionAt(scanner.getTokenOffset() + scanner.getTokenLength())));
            }
            break;
          case 15:
          case 14:
            break;
          default:
            return token2;
        }
      }
    }
    function _errorAtRange(message, code, startOffset, endOffset, severity = DiagnosticSeverity.Error) {
      if (problems.length === 0 || startOffset !== lastProblemOffset) {
        const range = Range.create(textDocument.positionAt(startOffset), textDocument.positionAt(endOffset));
        problems.push(Diagnostic.create(range, message, severity, code, textDocument.languageId));
        lastProblemOffset = startOffset;
      }
    }
    function _error(message, code, node = void 0, skipUntilAfter = [], skipUntil = []) {
      let start2 = scanner.getTokenOffset();
      let end = scanner.getTokenOffset() + scanner.getTokenLength();
      if (start2 === end && start2 > 0) {
        start2--;
        while (start2 > 0 && /\s/.test(text.charAt(start2))) {
          start2--;
        }
        end = start2 + 1;
      }
      _errorAtRange(message, code, start2, end);
      if (node) {
        _finalize(node, false);
      }
      if (skipUntilAfter.length + skipUntil.length > 0) {
        let token2 = scanner.getToken();
        while (token2 !== 17) {
          if (skipUntilAfter.indexOf(token2) !== -1) {
            _scanNext();
            break;
          } else if (skipUntil.indexOf(token2) !== -1) {
            break;
          }
          token2 = _scanNext();
        }
      }
      return node;
    }
    function _checkScanError() {
      switch (scanner.getTokenError()) {
        case 4:
          _error(t("Invalid unicode sequence in string."), ErrorCode.InvalidUnicode);
          return true;
        case 5:
          _error(t("Invalid escape character in string."), ErrorCode.InvalidEscapeCharacter);
          return true;
        case 3:
          _error(t("Unexpected end of number."), ErrorCode.UnexpectedEndOfNumber);
          return true;
        case 1:
          _error(t("Unexpected end of comment."), ErrorCode.UnexpectedEndOfComment);
          return true;
        case 2:
          _error(t("Unexpected end of string."), ErrorCode.UnexpectedEndOfString);
          return true;
        case 6:
          _error(t("Invalid characters in string. Control characters must be escaped."), ErrorCode.InvalidCharacter);
          return true;
      }
      return false;
    }
    function _finalize(node, scanNext) {
      node.length = scanner.getTokenOffset() + scanner.getTokenLength() - node.offset;
      if (scanNext) {
        _scanNext();
      }
      return node;
    }
    function _parseArray(parent) {
      if (scanner.getToken() !== 3) {
        return void 0;
      }
      const node = new ArrayASTNodeImpl(parent, scanner.getTokenOffset());
      _scanNext();
      let needsComma = false;
      while (scanner.getToken() !== 4 && scanner.getToken() !== 17) {
        if (scanner.getToken() === 5) {
          if (!needsComma) {
            _error(t("Value expected"), ErrorCode.ValueExpected);
          }
          const commaOffset = scanner.getTokenOffset();
          _scanNext();
          if (scanner.getToken() === 4) {
            if (needsComma) {
              _errorAtRange(t("Trailing comma"), ErrorCode.TrailingComma, commaOffset, commaOffset + 1);
            }
            continue;
          }
        } else if (needsComma) {
          _error(t("Expected comma"), ErrorCode.CommaExpected);
        }
        const item = _parseValue(node);
        if (!item) {
          _error(t("Value expected"), ErrorCode.ValueExpected, void 0, [], [
            4,
            5
            /* Json.SyntaxKind.CommaToken */
          ]);
        } else {
          node.items.push(item);
        }
        needsComma = true;
      }
      if (scanner.getToken() !== 4) {
        return _error(t("Expected comma or closing bracket"), ErrorCode.CommaOrCloseBacketExpected, node);
      }
      return _finalize(node, true);
    }
    const keyPlaceholder = new StringASTNodeImpl(void 0, 0, 0);
    function _parseProperty(parent, keysSeen) {
      const node = new PropertyASTNodeImpl(parent, scanner.getTokenOffset(), keyPlaceholder);
      let key = _parseString(node);
      if (!key) {
        if (scanner.getToken() === 16) {
          _error(t("Property keys must be doublequoted"), ErrorCode.PropertyKeysMustBeDoublequoted);
          const keyNode = new StringASTNodeImpl(node, scanner.getTokenOffset(), scanner.getTokenLength());
          keyNode.value = scanner.getTokenValue();
          key = keyNode;
          _scanNext();
        } else {
          return void 0;
        }
      }
      node.keyNode = key;
      if (key.value !== "//") {
        const seen = keysSeen[key.value];
        if (seen) {
          _errorAtRange(t("Duplicate object key"), ErrorCode.DuplicateKey, node.keyNode.offset, node.keyNode.offset + node.keyNode.length, DiagnosticSeverity.Warning);
          if (isObject(seen)) {
            _errorAtRange(t("Duplicate object key"), ErrorCode.DuplicateKey, seen.keyNode.offset, seen.keyNode.offset + seen.keyNode.length, DiagnosticSeverity.Warning);
          }
          keysSeen[key.value] = true;
        } else {
          keysSeen[key.value] = node;
        }
      }
      if (scanner.getToken() === 6) {
        node.colonOffset = scanner.getTokenOffset();
        _scanNext();
      } else {
        _error(t("Colon expected"), ErrorCode.ColonExpected);
        if (scanner.getToken() === 10 && textDocument.positionAt(key.offset + key.length).line < textDocument.positionAt(scanner.getTokenOffset()).line) {
          node.length = key.length;
          return node;
        }
      }
      const value = _parseValue(node);
      if (!value) {
        return _error(t("Value expected"), ErrorCode.ValueExpected, node, [], [
          2,
          5
          /* Json.SyntaxKind.CommaToken */
        ]);
      }
      node.valueNode = value;
      node.length = value.offset + value.length - node.offset;
      return node;
    }
    function _parseObject(parent) {
      if (scanner.getToken() !== 1) {
        return void 0;
      }
      const node = new ObjectASTNodeImpl(parent, scanner.getTokenOffset());
      const keysSeen = /* @__PURE__ */ Object.create(null);
      _scanNext();
      let needsComma = false;
      while (scanner.getToken() !== 2 && scanner.getToken() !== 17) {
        if (scanner.getToken() === 5) {
          if (!needsComma) {
            _error(t("Property expected"), ErrorCode.PropertyExpected);
          }
          const commaOffset = scanner.getTokenOffset();
          _scanNext();
          if (scanner.getToken() === 2) {
            if (needsComma) {
              _errorAtRange(t("Trailing comma"), ErrorCode.TrailingComma, commaOffset, commaOffset + 1);
            }
            continue;
          }
        } else if (needsComma) {
          _error(t("Expected comma"), ErrorCode.CommaExpected);
        }
        const property = _parseProperty(node, keysSeen);
        if (!property) {
          _error(t("Property expected"), ErrorCode.PropertyExpected, void 0, [], [
            2,
            5
            /* Json.SyntaxKind.CommaToken */
          ]);
        } else {
          node.properties.push(property);
        }
        needsComma = true;
      }
      if (scanner.getToken() !== 2) {
        return _error(t("Expected comma or closing brace"), ErrorCode.CommaOrCloseBraceExpected, node);
      }
      return _finalize(node, true);
    }
    function _parseString(parent) {
      if (scanner.getToken() !== 10) {
        return void 0;
      }
      const node = new StringASTNodeImpl(parent, scanner.getTokenOffset());
      node.value = scanner.getTokenValue();
      return _finalize(node, true);
    }
    function _parseNumber(parent) {
      if (scanner.getToken() !== 11) {
        return void 0;
      }
      const node = new NumberASTNodeImpl(parent, scanner.getTokenOffset());
      if (scanner.getTokenError() === 0) {
        const tokenValue = scanner.getTokenValue();
        try {
          const numberValue = JSON.parse(tokenValue);
          if (!isNumber(numberValue)) {
            return _error(t("Invalid number format."), ErrorCode.Undefined, node);
          }
          node.value = numberValue;
        } catch (e) {
          return _error(t("Invalid number format."), ErrorCode.Undefined, node);
        }
        node.isInteger = tokenValue.indexOf(".") === -1;
      }
      return _finalize(node, true);
    }
    function _parseLiteral(parent) {
      switch (scanner.getToken()) {
        case 7:
          return _finalize(new NullASTNodeImpl(parent, scanner.getTokenOffset()), true);
        case 8:
          return _finalize(new BooleanASTNodeImpl(parent, true, scanner.getTokenOffset()), true);
        case 9:
          return _finalize(new BooleanASTNodeImpl(parent, false, scanner.getTokenOffset()), true);
        default:
          return void 0;
      }
    }
    function _parseValue(parent) {
      return _parseArray(parent) || _parseObject(parent) || _parseString(parent) || _parseNumber(parent) || _parseLiteral(parent);
    }
    let _root = void 0;
    const token = _scanNext();
    if (token !== 17) {
      _root = _parseValue(_root);
      if (!_root) {
        _error(t("Expected a JSON object, array or literal."), ErrorCode.Undefined);
      } else if (scanner.getToken() !== 17) {
        _error(t("End of file expected."), ErrorCode.Undefined);
      }
    }
    return new JSONDocument(_root, problems, commentRanges);
  }
  function stringifyObject(obj, indent, stringifyLiteral) {
    if (obj !== null && typeof obj === "object") {
      const newIndent = indent + "	";
      if (Array.isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        let result = "[\n";
        for (let i = 0; i < obj.length; i++) {
          result += newIndent + stringifyObject(obj[i], newIndent, stringifyLiteral);
          if (i < obj.length - 1) {
            result += ",";
          }
          result += "\n";
        }
        result += indent + "]";
        return result;
      } else {
        const keys = Object.keys(obj);
        if (keys.length === 0) {
          return "{}";
        }
        let result = "{\n";
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          result += newIndent + JSON.stringify(key) + ": " + stringifyObject(obj[key], newIndent, stringifyLiteral);
          if (i < keys.length - 1) {
            result += ",";
          }
          result += "\n";
        }
        result += indent + "}";
        return result;
      }
    }
    return stringifyLiteral(obj);
  }
  class JSONCompletion {
    constructor(schemaService, contributions = [], promiseConstructor = Promise, clientCapabilities = {}) {
      this.schemaService = schemaService;
      this.contributions = contributions;
      this.promiseConstructor = promiseConstructor;
      this.clientCapabilities = clientCapabilities;
    }
    doResolve(item) {
      for (let i = this.contributions.length - 1; i >= 0; i--) {
        const resolveCompletion = this.contributions[i].resolveCompletion;
        if (resolveCompletion) {
          const resolver = resolveCompletion(item);
          if (resolver) {
            return resolver;
          }
        }
      }
      return this.promiseConstructor.resolve(item);
    }
    doComplete(document2, position, doc) {
      const result = {
        items: [],
        isIncomplete: false
      };
      const text = document2.getText();
      const offset = document2.offsetAt(position);
      let node = doc.getNodeFromOffset(offset, true);
      if (this.isInComment(document2, node ? node.offset : 0, offset)) {
        return Promise.resolve(result);
      }
      if (node && offset === node.offset + node.length && offset > 0) {
        const ch = text[offset - 1];
        if (node.type === "object" && ch === "}" || node.type === "array" && ch === "]") {
          node = node.parent;
        }
      }
      const currentWord = this.getCurrentWord(document2, offset);
      let overwriteRange;
      if (node && (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null")) {
        overwriteRange = Range.create(document2.positionAt(node.offset), document2.positionAt(node.offset + node.length));
      } else {
        let overwriteStart = offset - currentWord.length;
        if (overwriteStart > 0 && text[overwriteStart - 1] === '"') {
          overwriteStart--;
        }
        overwriteRange = Range.create(document2.positionAt(overwriteStart), position);
      }
      const proposed = /* @__PURE__ */ new Map();
      const collector = {
        add: (suggestion) => {
          let label = suggestion.label;
          const existing = proposed.get(label);
          if (!existing) {
            label = label.replace(/[\n]/g, "↵");
            if (label.length > 60) {
              const shortendedLabel = label.substr(0, 57).trim() + "...";
              if (!proposed.has(shortendedLabel)) {
                label = shortendedLabel;
              }
            }
            suggestion.textEdit = TextEdit.replace(overwriteRange, suggestion.insertText);
            suggestion.label = label;
            proposed.set(label, suggestion);
            result.items.push(suggestion);
          } else {
            if (!existing.documentation) {
              existing.documentation = suggestion.documentation;
            }
            if (!existing.detail) {
              existing.detail = suggestion.detail;
            }
            if (!existing.labelDetails) {
              existing.labelDetails = suggestion.labelDetails;
            }
          }
        },
        setAsIncomplete: () => {
          result.isIncomplete = true;
        },
        error: (message) => {
          console.error(message);
        },
        getNumberOfProposals: () => {
          return result.items.length;
        }
      };
      return this.schemaService.getSchemaForResource(document2.uri, doc).then((schema) => {
        const collectionPromises = [];
        let addValue = true;
        let currentKey = "";
        let currentProperty = void 0;
        if (node) {
          if (node.type === "string") {
            const parent = node.parent;
            if (parent && parent.type === "property" && parent.keyNode === node) {
              addValue = !parent.valueNode;
              currentProperty = parent;
              currentKey = text.substr(node.offset + 1, node.length - 2);
              if (parent) {
                node = parent.parent;
              }
            }
          }
        }
        if (node && node.type === "object") {
          if (node.offset === offset) {
            return result;
          }
          const properties = node.properties;
          properties.forEach((p) => {
            if (!currentProperty || currentProperty !== p) {
              proposed.set(p.keyNode.value, CompletionItem.create("__"));
            }
          });
          let separatorAfter = "";
          if (addValue) {
            separatorAfter = this.evaluateSeparatorAfter(document2, document2.offsetAt(overwriteRange.end));
          }
          if (schema) {
            this.getPropertyCompletions(schema, doc, node, addValue, separatorAfter, collector);
          } else {
            this.getSchemaLessPropertyCompletions(doc, node, currentKey, collector);
          }
          const location = getNodePath(node);
          this.contributions.forEach((contribution) => {
            const collectPromise = contribution.collectPropertyCompletions(document2.uri, location, currentWord, addValue, separatorAfter === "", collector);
            if (collectPromise) {
              collectionPromises.push(collectPromise);
            }
          });
          if (!schema && currentWord.length > 0 && text.charAt(offset - currentWord.length - 1) !== '"') {
            collector.add({
              kind: CompletionItemKind.Property,
              label: this.getLabelForValue(currentWord),
              insertText: this.getInsertTextForProperty(currentWord, void 0, false, separatorAfter),
              insertTextFormat: InsertTextFormat.Snippet,
              documentation: ""
            });
            collector.setAsIncomplete();
          }
        }
        const types = {};
        if (schema) {
          this.getValueCompletions(schema, doc, node, offset, document2, collector, types);
        } else {
          this.getSchemaLessValueCompletions(doc, node, offset, document2, collector);
        }
        if (this.contributions.length > 0) {
          this.getContributedValueCompletions(doc, node, offset, document2, collector, collectionPromises);
        }
        return this.promiseConstructor.all(collectionPromises).then(() => {
          if (collector.getNumberOfProposals() === 0) {
            let offsetForSeparator = offset;
            if (node && (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null")) {
              offsetForSeparator = node.offset + node.length;
            }
            const separatorAfter = this.evaluateSeparatorAfter(document2, offsetForSeparator);
            this.addFillerValueCompletions(types, separatorAfter, collector);
          }
          return result;
        });
      });
    }
    getPropertyCompletions(schema, doc, node, addValue, separatorAfter, collector) {
      const matchingSchemas = doc.getMatchingSchemas(schema.schema, node.offset);
      matchingSchemas.forEach((s) => {
        if (s.node === node && !s.inverted) {
          const schemaProperties = s.schema.properties;
          if (schemaProperties) {
            Object.keys(schemaProperties).forEach((key) => {
              const propertySchema = schemaProperties[key];
              if (typeof propertySchema === "object" && !propertySchema.deprecationMessage && !propertySchema.doNotSuggest) {
                const proposal = {
                  kind: CompletionItemKind.Property,
                  label: key,
                  insertText: this.getInsertTextForProperty(key, propertySchema, addValue, separatorAfter),
                  insertTextFormat: InsertTextFormat.Snippet,
                  filterText: this.getFilterTextForValue(key),
                  documentation: this.fromMarkup(propertySchema.markdownDescription) || propertySchema.description || ""
                };
                if (propertySchema.suggestSortText !== void 0) {
                  proposal.sortText = propertySchema.suggestSortText;
                }
                if (proposal.insertText && endsWith(proposal.insertText, `$1${separatorAfter}`)) {
                  proposal.command = {
                    title: "Suggest",
                    command: "editor.action.triggerSuggest"
                  };
                }
                collector.add(proposal);
              }
            });
          }
          const schemaPropertyNames = s.schema.propertyNames;
          if (typeof schemaPropertyNames === "object" && !schemaPropertyNames.deprecationMessage && !schemaPropertyNames.doNotSuggest) {
            const propertyNameCompletionItem = (name, enumDescription = void 0) => {
              const proposal = {
                kind: CompletionItemKind.Property,
                label: name,
                insertText: this.getInsertTextForProperty(name, void 0, addValue, separatorAfter),
                insertTextFormat: InsertTextFormat.Snippet,
                filterText: this.getFilterTextForValue(name),
                documentation: enumDescription || this.fromMarkup(schemaPropertyNames.markdownDescription) || schemaPropertyNames.description || ""
              };
              if (schemaPropertyNames.suggestSortText !== void 0) {
                proposal.sortText = schemaPropertyNames.suggestSortText;
              }
              if (proposal.insertText && endsWith(proposal.insertText, `$1${separatorAfter}`)) {
                proposal.command = {
                  title: "Suggest",
                  command: "editor.action.triggerSuggest"
                };
              }
              collector.add(proposal);
            };
            if (schemaPropertyNames.enum) {
              for (let i = 0; i < schemaPropertyNames.enum.length; i++) {
                let enumDescription = void 0;
                if (schemaPropertyNames.markdownEnumDescriptions && i < schemaPropertyNames.markdownEnumDescriptions.length) {
                  enumDescription = this.fromMarkup(schemaPropertyNames.markdownEnumDescriptions[i]);
                } else if (schemaPropertyNames.enumDescriptions && i < schemaPropertyNames.enumDescriptions.length) {
                  enumDescription = schemaPropertyNames.enumDescriptions[i];
                }
                propertyNameCompletionItem(schemaPropertyNames.enum[i], enumDescription);
              }
            }
            if (schemaPropertyNames.const) {
              propertyNameCompletionItem(schemaPropertyNames.const);
            }
          }
        }
      });
    }
    getSchemaLessPropertyCompletions(doc, node, currentKey, collector) {
      const collectCompletionsForSimilarObject = (obj) => {
        obj.properties.forEach((p) => {
          const key = p.keyNode.value;
          collector.add({
            kind: CompletionItemKind.Property,
            label: key,
            insertText: this.getInsertTextForValue(key, ""),
            insertTextFormat: InsertTextFormat.Snippet,
            filterText: this.getFilterTextForValue(key),
            documentation: ""
          });
        });
      };
      if (node.parent) {
        if (node.parent.type === "property") {
          const parentKey = node.parent.keyNode.value;
          doc.visit((n) => {
            if (n.type === "property" && n !== node.parent && n.keyNode.value === parentKey && n.valueNode && n.valueNode.type === "object") {
              collectCompletionsForSimilarObject(n.valueNode);
            }
            return true;
          });
        } else if (node.parent.type === "array") {
          node.parent.items.forEach((n) => {
            if (n.type === "object" && n !== node) {
              collectCompletionsForSimilarObject(n);
            }
          });
        }
      } else if (node.type === "object") {
        collector.add({
          kind: CompletionItemKind.Property,
          label: "$schema",
          insertText: this.getInsertTextForProperty("$schema", void 0, true, ""),
          insertTextFormat: InsertTextFormat.Snippet,
          documentation: "",
          filterText: this.getFilterTextForValue("$schema")
        });
      }
    }
    getSchemaLessValueCompletions(doc, node, offset, document2, collector) {
      let offsetForSeparator = offset;
      if (node && (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null")) {
        offsetForSeparator = node.offset + node.length;
        node = node.parent;
      }
      if (!node) {
        collector.add({
          kind: this.getSuggestionKind("object"),
          label: "Empty object",
          insertText: this.getInsertTextForValue({}, ""),
          insertTextFormat: InsertTextFormat.Snippet,
          documentation: ""
        });
        collector.add({
          kind: this.getSuggestionKind("array"),
          label: "Empty array",
          insertText: this.getInsertTextForValue([], ""),
          insertTextFormat: InsertTextFormat.Snippet,
          documentation: ""
        });
        return;
      }
      const separatorAfter = this.evaluateSeparatorAfter(document2, offsetForSeparator);
      const collectSuggestionsForValues = (value) => {
        if (value.parent && !contains(value.parent, offset, true)) {
          collector.add({
            kind: this.getSuggestionKind(value.type),
            label: this.getLabelTextForMatchingNode(value, document2),
            insertText: this.getInsertTextForMatchingNode(value, document2, separatorAfter),
            insertTextFormat: InsertTextFormat.Snippet,
            documentation: ""
          });
        }
        if (value.type === "boolean") {
          this.addBooleanValueCompletion(!value.value, separatorAfter, collector);
        }
      };
      if (node.type === "property") {
        if (offset > (node.colonOffset || 0)) {
          const valueNode = node.valueNode;
          if (valueNode && (offset > valueNode.offset + valueNode.length || valueNode.type === "object" || valueNode.type === "array")) {
            return;
          }
          const parentKey = node.keyNode.value;
          doc.visit((n) => {
            if (n.type === "property" && n.keyNode.value === parentKey && n.valueNode) {
              collectSuggestionsForValues(n.valueNode);
            }
            return true;
          });
          if (parentKey === "$schema" && node.parent && !node.parent.parent) {
            this.addDollarSchemaCompletions(separatorAfter, collector);
          }
        }
      }
      if (node.type === "array") {
        if (node.parent && node.parent.type === "property") {
          const parentKey = node.parent.keyNode.value;
          doc.visit((n) => {
            if (n.type === "property" && n.keyNode.value === parentKey && n.valueNode && n.valueNode.type === "array") {
              n.valueNode.items.forEach(collectSuggestionsForValues);
            }
            return true;
          });
        } else {
          node.items.forEach(collectSuggestionsForValues);
        }
      }
    }
    getValueCompletions(schema, doc, node, offset, document2, collector, types) {
      let offsetForSeparator = offset;
      let parentKey = void 0;
      let valueNode = void 0;
      if (node && (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null")) {
        offsetForSeparator = node.offset + node.length;
        valueNode = node;
        node = node.parent;
      }
      if (!node) {
        this.addSchemaValueCompletions(schema.schema, "", collector, types);
        return;
      }
      if (node.type === "property" && offset > (node.colonOffset || 0)) {
        const valueNode2 = node.valueNode;
        if (valueNode2 && offset > valueNode2.offset + valueNode2.length) {
          return;
        }
        parentKey = node.keyNode.value;
        node = node.parent;
      }
      if (node && (parentKey !== void 0 || node.type === "array")) {
        const separatorAfter = this.evaluateSeparatorAfter(document2, offsetForSeparator);
        const matchingSchemas = doc.getMatchingSchemas(schema.schema, node.offset, valueNode);
        for (const s of matchingSchemas) {
          if (s.node === node && !s.inverted && s.schema) {
            if (node.type === "array" && s.schema.items) {
              let c = collector;
              if (s.schema.uniqueItems) {
                const existingValues = /* @__PURE__ */ new Set();
                node.children.forEach((n) => {
                  if (n.type !== "array" && n.type !== "object") {
                    existingValues.add(this.getLabelForValue(getNodeValue(n)));
                  }
                });
                c = {
                  ...collector,
                  add(suggestion) {
                    if (!existingValues.has(suggestion.label)) {
                      collector.add(suggestion);
                    }
                  }
                };
              }
              if (Array.isArray(s.schema.items)) {
                const index = this.findItemAtOffset(node, document2, offset);
                if (index < s.schema.items.length) {
                  this.addSchemaValueCompletions(s.schema.items[index], separatorAfter, c, types);
                }
              } else {
                this.addSchemaValueCompletions(s.schema.items, separatorAfter, c, types);
              }
            }
            if (parentKey !== void 0) {
              let propertyMatched = false;
              if (s.schema.properties) {
                const propertySchema = s.schema.properties[parentKey];
                if (propertySchema) {
                  propertyMatched = true;
                  this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
                }
              }
              if (s.schema.patternProperties && !propertyMatched) {
                for (const pattern of Object.keys(s.schema.patternProperties)) {
                  const regex = extendedRegExp(pattern);
                  if (regex?.test(parentKey)) {
                    propertyMatched = true;
                    const propertySchema = s.schema.patternProperties[pattern];
                    this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
                  }
                }
              }
              if (s.schema.additionalProperties && !propertyMatched) {
                const propertySchema = s.schema.additionalProperties;
                this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
              }
            }
          }
        }
        if (parentKey === "$schema" && !node.parent) {
          this.addDollarSchemaCompletions(separatorAfter, collector);
        }
        if (types["boolean"]) {
          this.addBooleanValueCompletion(true, separatorAfter, collector);
          this.addBooleanValueCompletion(false, separatorAfter, collector);
        }
        if (types["null"]) {
          this.addNullValueCompletion(separatorAfter, collector);
        }
      }
    }
    getContributedValueCompletions(doc, node, offset, document2, collector, collectionPromises) {
      if (!node) {
        this.contributions.forEach((contribution) => {
          const collectPromise = contribution.collectDefaultCompletions(document2.uri, collector);
          if (collectPromise) {
            collectionPromises.push(collectPromise);
          }
        });
      } else {
        if (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null") {
          node = node.parent;
        }
        if (node && node.type === "property" && offset > (node.colonOffset || 0)) {
          const parentKey = node.keyNode.value;
          const valueNode = node.valueNode;
          if ((!valueNode || offset <= valueNode.offset + valueNode.length) && node.parent) {
            const location = getNodePath(node.parent);
            this.contributions.forEach((contribution) => {
              const collectPromise = contribution.collectValueCompletions(document2.uri, location, parentKey, collector);
              if (collectPromise) {
                collectionPromises.push(collectPromise);
              }
            });
          }
        }
      }
    }
    addSchemaValueCompletions(schema, separatorAfter, collector, types) {
      if (typeof schema === "object") {
        this.addEnumValueCompletions(schema, separatorAfter, collector);
        this.addDefaultValueCompletions(schema, separatorAfter, collector);
        this.collectTypes(schema, types);
        if (Array.isArray(schema.allOf)) {
          schema.allOf.forEach((s) => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
        }
        if (Array.isArray(schema.anyOf)) {
          schema.anyOf.forEach((s) => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
        }
        if (Array.isArray(schema.oneOf)) {
          schema.oneOf.forEach((s) => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
        }
      }
    }
    addDefaultValueCompletions(schema, separatorAfter, collector, arrayDepth = 0) {
      let hasProposals = false;
      if (isDefined(schema.default)) {
        let type = schema.type;
        let value = schema.default;
        for (let i = arrayDepth; i > 0; i--) {
          value = [value];
          type = "array";
        }
        const completionItem = {
          kind: this.getSuggestionKind(type),
          label: this.getLabelForValue(value),
          insertText: this.getInsertTextForValue(value, separatorAfter),
          insertTextFormat: InsertTextFormat.Snippet
        };
        if (this.doesSupportsLabelDetails()) {
          completionItem.labelDetails = { description: t("Default value") };
        } else {
          completionItem.detail = t("Default value");
        }
        collector.add(completionItem);
        hasProposals = true;
      }
      if (Array.isArray(schema.examples)) {
        schema.examples.forEach((example) => {
          let type = schema.type;
          let value = example;
          for (let i = arrayDepth; i > 0; i--) {
            value = [value];
            type = "array";
          }
          collector.add({
            kind: this.getSuggestionKind(type),
            label: this.getLabelForValue(value),
            insertText: this.getInsertTextForValue(value, separatorAfter),
            insertTextFormat: InsertTextFormat.Snippet
          });
          hasProposals = true;
        });
      }
      if (Array.isArray(schema.defaultSnippets)) {
        schema.defaultSnippets.forEach((s) => {
          let type = schema.type;
          let value = s.body;
          let label = s.label;
          let insertText;
          let filterText;
          if (isDefined(value)) {
            schema.type;
            for (let i = arrayDepth; i > 0; i--) {
              value = [value];
            }
            insertText = this.getInsertTextForSnippetValue(value, separatorAfter);
            filterText = this.getFilterTextForSnippetValue(value);
            label = label || this.getLabelForSnippetValue(value);
          } else if (typeof s.bodyText === "string") {
            let prefix = "", suffix = "", indent = "";
            for (let i = arrayDepth; i > 0; i--) {
              prefix = prefix + indent + "[\n";
              suffix = suffix + "\n" + indent + "]";
              indent += "	";
              type = "array";
            }
            insertText = prefix + indent + s.bodyText.split("\n").join("\n" + indent) + suffix + separatorAfter;
            label = label || insertText, filterText = insertText.replace(/[\n]/g, "");
          } else {
            return;
          }
          collector.add({
            kind: this.getSuggestionKind(type),
            label,
            documentation: this.fromMarkup(s.markdownDescription) || s.description,
            insertText,
            insertTextFormat: InsertTextFormat.Snippet,
            filterText
          });
          hasProposals = true;
        });
      }
      if (!hasProposals && typeof schema.items === "object" && !Array.isArray(schema.items) && arrayDepth < 5) {
        this.addDefaultValueCompletions(schema.items, separatorAfter, collector, arrayDepth + 1);
      }
    }
    addEnumValueCompletions(schema, separatorAfter, collector) {
      if (isDefined(schema.const)) {
        collector.add({
          kind: this.getSuggestionKind(schema.type),
          label: this.getLabelForValue(schema.const),
          insertText: this.getInsertTextForValue(schema.const, separatorAfter),
          insertTextFormat: InsertTextFormat.Snippet,
          documentation: this.fromMarkup(schema.markdownDescription) || schema.description
        });
      }
      if (Array.isArray(schema.enum)) {
        for (let i = 0, length = schema.enum.length; i < length; i++) {
          const enm = schema.enum[i];
          let documentation = this.fromMarkup(schema.markdownDescription) || schema.description;
          if (schema.markdownEnumDescriptions && i < schema.markdownEnumDescriptions.length && this.doesSupportMarkdown()) {
            documentation = this.fromMarkup(schema.markdownEnumDescriptions[i]);
          } else if (schema.enumDescriptions && i < schema.enumDescriptions.length) {
            documentation = schema.enumDescriptions[i];
          }
          collector.add({
            kind: this.getSuggestionKind(schema.type),
            label: this.getLabelForValue(enm),
            insertText: this.getInsertTextForValue(enm, separatorAfter),
            insertTextFormat: InsertTextFormat.Snippet,
            documentation
          });
        }
      }
    }
    collectTypes(schema, types) {
      if (Array.isArray(schema.enum) || isDefined(schema.const)) {
        return;
      }
      const type = schema.type;
      if (Array.isArray(type)) {
        type.forEach((t2) => types[t2] = true);
      } else if (type) {
        types[type] = true;
      }
    }
    addFillerValueCompletions(types, separatorAfter, collector) {
      if (types["object"]) {
        collector.add({
          kind: this.getSuggestionKind("object"),
          label: "{}",
          insertText: this.getInsertTextForGuessedValue({}, separatorAfter),
          insertTextFormat: InsertTextFormat.Snippet,
          detail: t("New object"),
          documentation: ""
        });
      }
      if (types["array"]) {
        collector.add({
          kind: this.getSuggestionKind("array"),
          label: "[]",
          insertText: this.getInsertTextForGuessedValue([], separatorAfter),
          insertTextFormat: InsertTextFormat.Snippet,
          detail: t("New array"),
          documentation: ""
        });
      }
    }
    addBooleanValueCompletion(value, separatorAfter, collector) {
      collector.add({
        kind: this.getSuggestionKind("boolean"),
        label: value ? "true" : "false",
        insertText: this.getInsertTextForValue(value, separatorAfter),
        insertTextFormat: InsertTextFormat.Snippet,
        documentation: ""
      });
    }
    addNullValueCompletion(separatorAfter, collector) {
      collector.add({
        kind: this.getSuggestionKind("null"),
        label: "null",
        insertText: "null" + separatorAfter,
        insertTextFormat: InsertTextFormat.Snippet,
        documentation: ""
      });
    }
    addDollarSchemaCompletions(separatorAfter, collector) {
      const schemaIds = this.schemaService.getRegisteredSchemaIds((schema) => schema === "http" || schema === "https");
      schemaIds.forEach((schemaId) => {
        if (schemaId.startsWith("http://json-schema.org/draft-")) {
          schemaId = schemaId + "#";
        }
        collector.add({
          kind: CompletionItemKind.Module,
          label: this.getLabelForValue(schemaId),
          filterText: this.getFilterTextForValue(schemaId),
          insertText: this.getInsertTextForValue(schemaId, separatorAfter),
          insertTextFormat: InsertTextFormat.Snippet,
          documentation: ""
        });
      });
    }
    getLabelForValue(value) {
      return JSON.stringify(value);
    }
    getValueFromLabel(value) {
      return JSON.parse(value);
    }
    getFilterTextForValue(value) {
      return JSON.stringify(value);
    }
    getFilterTextForSnippetValue(value) {
      return JSON.stringify(value).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
    }
    getLabelForSnippetValue(value) {
      const label = JSON.stringify(value);
      return label.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
    }
    getInsertTextForPlainText(text) {
      return text.replace(/[\\\$\}]/g, "\\$&");
    }
    getInsertTextForValue(value, separatorAfter) {
      const text = JSON.stringify(value, null, "	");
      if (text === "{}") {
        return "{$1}" + separatorAfter;
      } else if (text === "[]") {
        return "[$1]" + separatorAfter;
      }
      return this.getInsertTextForPlainText(text + separatorAfter);
    }
    getInsertTextForSnippetValue(value, separatorAfter) {
      const replacer = (value2) => {
        if (typeof value2 === "string") {
          if (value2[0] === "^") {
            return value2.substr(1);
          }
        }
        return JSON.stringify(value2);
      };
      return stringifyObject(value, "", replacer) + separatorAfter;
    }
    getInsertTextForGuessedValue(value, separatorAfter) {
      switch (typeof value) {
        case "object":
          if (value === null) {
            return "${1:null}" + separatorAfter;
          }
          return this.getInsertTextForValue(value, separatorAfter);
        case "string":
          let snippetValue = JSON.stringify(value);
          snippetValue = snippetValue.substr(1, snippetValue.length - 2);
          snippetValue = this.getInsertTextForPlainText(snippetValue);
          return '"${1:' + snippetValue + '}"' + separatorAfter;
        case "number":
        case "boolean":
          return "${1:" + JSON.stringify(value) + "}" + separatorAfter;
      }
      return this.getInsertTextForValue(value, separatorAfter);
    }
    getSuggestionKind(type) {
      if (Array.isArray(type)) {
        const array = type;
        type = array.length > 0 ? array[0] : void 0;
      }
      if (!type) {
        return CompletionItemKind.Value;
      }
      switch (type) {
        case "string":
          return CompletionItemKind.Value;
        case "object":
          return CompletionItemKind.Module;
        case "property":
          return CompletionItemKind.Property;
        default:
          return CompletionItemKind.Value;
      }
    }
    getLabelTextForMatchingNode(node, document2) {
      switch (node.type) {
        case "array":
          return "[]";
        case "object":
          return "{}";
        default:
          const content = document2.getText().substr(node.offset, node.length);
          return content;
      }
    }
    getInsertTextForMatchingNode(node, document2, separatorAfter) {
      switch (node.type) {
        case "array":
          return this.getInsertTextForValue([], separatorAfter);
        case "object":
          return this.getInsertTextForValue({}, separatorAfter);
        default:
          const content = document2.getText().substr(node.offset, node.length) + separatorAfter;
          return this.getInsertTextForPlainText(content);
      }
    }
    getInsertTextForProperty(key, propertySchema, addValue, separatorAfter) {
      const propertyText = this.getInsertTextForValue(key, "");
      if (!addValue) {
        return propertyText;
      }
      const resultText = propertyText + ": ";
      let value;
      let nValueProposals = 0;
      if (propertySchema) {
        if (Array.isArray(propertySchema.defaultSnippets)) {
          if (propertySchema.defaultSnippets.length === 1) {
            const body = propertySchema.defaultSnippets[0].body;
            if (isDefined(body)) {
              value = this.getInsertTextForSnippetValue(body, "");
            }
          }
          nValueProposals += propertySchema.defaultSnippets.length;
        }
        if (propertySchema.enum) {
          if (!value && propertySchema.enum.length === 1) {
            value = this.getInsertTextForGuessedValue(propertySchema.enum[0], "");
          }
          nValueProposals += propertySchema.enum.length;
        }
        if (isDefined(propertySchema.const)) {
          if (!value) {
            value = this.getInsertTextForGuessedValue(propertySchema.const, "");
          }
          nValueProposals++;
        }
        if (isDefined(propertySchema.default)) {
          if (!value) {
            value = this.getInsertTextForGuessedValue(propertySchema.default, "");
          }
          nValueProposals++;
        }
        if (Array.isArray(propertySchema.examples) && propertySchema.examples.length) {
          if (!value) {
            value = this.getInsertTextForGuessedValue(propertySchema.examples[0], "");
          }
          nValueProposals += propertySchema.examples.length;
        }
        if (nValueProposals === 0) {
          let type = Array.isArray(propertySchema.type) ? propertySchema.type[0] : propertySchema.type;
          if (!type) {
            if (propertySchema.properties) {
              type = "object";
            } else if (propertySchema.items) {
              type = "array";
            }
          }
          switch (type) {
            case "boolean":
              value = "$1";
              break;
            case "string":
              value = '"$1"';
              break;
            case "object":
              value = "{$1}";
              break;
            case "array":
              value = "[$1]";
              break;
            case "number":
            case "integer":
              value = "${1:0}";
              break;
            case "null":
              value = "${1:null}";
              break;
            default:
              return propertyText;
          }
        }
      }
      if (!value || nValueProposals > 1) {
        value = "$1";
      }
      return resultText + value + separatorAfter;
    }
    getCurrentWord(document2, offset) {
      let i = offset - 1;
      const text = document2.getText();
      while (i >= 0 && ' 	\n\r\v":{[,]}'.indexOf(text.charAt(i)) === -1) {
        i--;
      }
      return text.substring(i + 1, offset);
    }
    evaluateSeparatorAfter(document2, offset) {
      const scanner = createScanner(document2.getText(), true);
      scanner.setPosition(offset);
      const token = scanner.scan();
      switch (token) {
        case 5:
        case 2:
        case 4:
        case 17:
          return "";
        default:
          return ",";
      }
    }
    findItemAtOffset(node, document2, offset) {
      const scanner = createScanner(document2.getText(), true);
      const children = node.items;
      for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        if (offset > child.offset + child.length) {
          scanner.setPosition(child.offset + child.length);
          const token = scanner.scan();
          if (token === 5 && offset >= scanner.getTokenOffset() + scanner.getTokenLength()) {
            return i + 1;
          }
          return i;
        } else if (offset >= child.offset) {
          return i;
        }
      }
      return 0;
    }
    isInComment(document2, start2, offset) {
      const scanner = createScanner(document2.getText(), false);
      scanner.setPosition(start2);
      let token = scanner.scan();
      while (token !== 17 && scanner.getTokenOffset() + scanner.getTokenLength() < offset) {
        token = scanner.scan();
      }
      return (token === 12 || token === 13) && scanner.getTokenOffset() <= offset;
    }
    fromMarkup(markupString) {
      if (markupString && this.doesSupportMarkdown()) {
        return {
          kind: MarkupKind.Markdown,
          value: markupString
        };
      }
      return void 0;
    }
    doesSupportMarkdown() {
      if (!isDefined(this.supportsMarkdown)) {
        const documentationFormat = this.clientCapabilities.textDocument?.completion?.completionItem?.documentationFormat;
        this.supportsMarkdown = Array.isArray(documentationFormat) && documentationFormat.indexOf(MarkupKind.Markdown) !== -1;
      }
      return this.supportsMarkdown;
    }
    doesSupportsCommitCharacters() {
      if (!isDefined(this.supportsCommitCharacters)) {
        this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.commitCharactersSupport;
      }
      return this.supportsCommitCharacters;
    }
    doesSupportsLabelDetails() {
      if (!isDefined(this.labelDetailsSupport)) {
        this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.labelDetailsSupport;
      }
      return this.labelDetailsSupport;
    }
  }
  class JSONHover {
    constructor(schemaService, contributions = [], promiseConstructor) {
      this.schemaService = schemaService;
      this.contributions = contributions;
      this.promise = promiseConstructor || Promise;
    }
    doHover(document2, position, doc) {
      const offset = document2.offsetAt(position);
      let node = doc.getNodeFromOffset(offset);
      if (!node || (node.type === "object" || node.type === "array") && offset > node.offset + 1 && offset < node.offset + node.length - 1) {
        return this.promise.resolve(null);
      }
      const hoverRangeNode = node;
      if (node.type === "string") {
        const parent = node.parent;
        if (parent && parent.type === "property" && parent.keyNode === node) {
          node = parent.valueNode;
          if (!node) {
            return this.promise.resolve(null);
          }
        }
      }
      const hoverRange = Range.create(document2.positionAt(hoverRangeNode.offset), document2.positionAt(hoverRangeNode.offset + hoverRangeNode.length));
      const createHover = (contents) => {
        const result = {
          contents,
          range: hoverRange
        };
        return result;
      };
      const location = getNodePath(node);
      for (let i = this.contributions.length - 1; i >= 0; i--) {
        const contribution = this.contributions[i];
        const promise = contribution.getInfoContribution(document2.uri, location);
        if (promise) {
          return promise.then((htmlContent) => createHover(htmlContent));
        }
      }
      return this.schemaService.getSchemaForResource(document2.uri, doc).then((schema) => {
        if (schema && node) {
          const matchingSchemas = doc.getMatchingSchemas(schema.schema, node.offset);
          let title = void 0;
          let markdownDescription = void 0;
          let markdownEnumValueDescription = void 0, enumValue = void 0;
          matchingSchemas.every((s) => {
            if (s.node === node && !s.inverted && s.schema) {
              title = title || s.schema.title;
              markdownDescription = markdownDescription || s.schema.markdownDescription || toMarkdown(s.schema.description);
              if (s.schema.enum) {
                const idx = s.schema.enum.indexOf(getNodeValue(node));
                if (s.schema.markdownEnumDescriptions) {
                  markdownEnumValueDescription = s.schema.markdownEnumDescriptions[idx];
                } else if (s.schema.enumDescriptions) {
                  markdownEnumValueDescription = toMarkdown(s.schema.enumDescriptions[idx]);
                }
                if (markdownEnumValueDescription) {
                  enumValue = s.schema.enum[idx];
                  if (typeof enumValue !== "string") {
                    enumValue = JSON.stringify(enumValue);
                  }
                }
              }
            }
            return true;
          });
          let result = "";
          if (title) {
            result = toMarkdown(title);
          }
          if (markdownDescription) {
            if (result.length > 0) {
              result += "\n\n";
            }
            result += markdownDescription;
          }
          if (markdownEnumValueDescription) {
            if (result.length > 0) {
              result += "\n\n";
            }
            result += `\`${toMarkdownCodeBlock(enumValue)}\`: ${markdownEnumValueDescription}`;
          }
          return createHover([result]);
        }
        return null;
      });
    }
  }
  function toMarkdown(plain) {
    if (plain) {
      const res = plain.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, "$1\n\n$3");
      return res.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    return void 0;
  }
  function toMarkdownCodeBlock(content) {
    if (content.indexOf("`") !== -1) {
      return "`` " + content + " ``";
    }
    return content;
  }
  class JSONValidation {
    constructor(jsonSchemaService, promiseConstructor) {
      this.jsonSchemaService = jsonSchemaService;
      this.promise = promiseConstructor;
      this.validationEnabled = true;
    }
    configure(raw) {
      if (raw) {
        this.validationEnabled = raw.validate !== false;
        this.commentSeverity = raw.allowComments ? void 0 : DiagnosticSeverity.Error;
      }
    }
    doValidation(textDocument, jsonDocument, documentSettings, schema) {
      if (!this.validationEnabled) {
        return this.promise.resolve([]);
      }
      const diagnostics = [];
      const added = {};
      const addProblem = (problem) => {
        const signature = problem.range.start.line + " " + problem.range.start.character + " " + problem.message;
        if (!added[signature]) {
          added[signature] = true;
          diagnostics.push(problem);
        }
      };
      const getDiagnostics = (schema2) => {
        let trailingCommaSeverity = documentSettings?.trailingCommas ? toDiagnosticSeverity(documentSettings.trailingCommas) : DiagnosticSeverity.Error;
        let commentSeverity = documentSettings?.comments ? toDiagnosticSeverity(documentSettings.comments) : this.commentSeverity;
        let schemaValidation = documentSettings?.schemaValidation ? toDiagnosticSeverity(documentSettings.schemaValidation) : DiagnosticSeverity.Warning;
        let schemaRequest = documentSettings?.schemaRequest ? toDiagnosticSeverity(documentSettings.schemaRequest) : DiagnosticSeverity.Warning;
        if (schema2) {
          const addSchemaProblem = (errorMessage, errorCode) => {
            if (jsonDocument.root && schemaRequest) {
              const astRoot = jsonDocument.root;
              const property = astRoot.type === "object" ? astRoot.properties[0] : void 0;
              if (property && property.keyNode.value === "$schema") {
                const node = property.valueNode || property;
                const range = Range.create(textDocument.positionAt(node.offset), textDocument.positionAt(node.offset + node.length));
                addProblem(Diagnostic.create(range, errorMessage, schemaRequest, errorCode));
              } else {
                const range = Range.create(textDocument.positionAt(astRoot.offset), textDocument.positionAt(astRoot.offset + 1));
                addProblem(Diagnostic.create(range, errorMessage, schemaRequest, errorCode));
              }
            }
          };
          if (schema2.errors.length) {
            addSchemaProblem(schema2.errors[0], ErrorCode.SchemaResolveError);
          } else if (schemaValidation) {
            for (const warning of schema2.warnings) {
              addSchemaProblem(warning, ErrorCode.SchemaUnsupportedFeature);
            }
            const semanticErrors = jsonDocument.validate(textDocument, schema2.schema, schemaValidation, documentSettings?.schemaDraft);
            if (semanticErrors) {
              semanticErrors.forEach(addProblem);
            }
          }
          if (schemaAllowsComments(schema2.schema)) {
            commentSeverity = void 0;
          }
          if (schemaAllowsTrailingCommas(schema2.schema)) {
            trailingCommaSeverity = void 0;
          }
        }
        for (const p of jsonDocument.syntaxErrors) {
          if (p.code === ErrorCode.TrailingComma) {
            if (typeof trailingCommaSeverity !== "number") {
              continue;
            }
            p.severity = trailingCommaSeverity;
          }
          addProblem(p);
        }
        if (typeof commentSeverity === "number") {
          const message = t("Comments are not permitted in JSON.");
          jsonDocument.comments.forEach((c) => {
            addProblem(Diagnostic.create(c, message, commentSeverity, ErrorCode.CommentNotPermitted));
          });
        }
        return diagnostics;
      };
      if (schema) {
        const uri = schema.id || "schemaservice://untitled/" + idCounter$1++;
        const handle = this.jsonSchemaService.registerExternalSchema({ uri, schema });
        return handle.getResolvedSchema().then((resolvedSchema) => {
          return getDiagnostics(resolvedSchema);
        });
      }
      return this.jsonSchemaService.getSchemaForResource(textDocument.uri, jsonDocument).then((schema2) => {
        return getDiagnostics(schema2);
      });
    }
    getLanguageStatus(textDocument, jsonDocument) {
      return { schemas: this.jsonSchemaService.getSchemaURIsForResource(textDocument.uri, jsonDocument) };
    }
  }
  let idCounter$1 = 0;
  function schemaAllowsComments(schemaRef) {
    if (schemaRef && typeof schemaRef === "object") {
      if (isBoolean(schemaRef.allowComments)) {
        return schemaRef.allowComments;
      }
      if (schemaRef.allOf) {
        for (const schema of schemaRef.allOf) {
          const allow = schemaAllowsComments(schema);
          if (isBoolean(allow)) {
            return allow;
          }
        }
      }
    }
    return void 0;
  }
  function schemaAllowsTrailingCommas(schemaRef) {
    if (schemaRef && typeof schemaRef === "object") {
      if (isBoolean(schemaRef.allowTrailingCommas)) {
        return schemaRef.allowTrailingCommas;
      }
      const deprSchemaRef = schemaRef;
      if (isBoolean(deprSchemaRef["allowsTrailingCommas"])) {
        return deprSchemaRef["allowsTrailingCommas"];
      }
      if (schemaRef.allOf) {
        for (const schema of schemaRef.allOf) {
          const allow = schemaAllowsTrailingCommas(schema);
          if (isBoolean(allow)) {
            return allow;
          }
        }
      }
    }
    return void 0;
  }
  function toDiagnosticSeverity(severityLevel) {
    switch (severityLevel) {
      case "error":
        return DiagnosticSeverity.Error;
      case "warning":
        return DiagnosticSeverity.Warning;
      case "ignore":
        return void 0;
    }
    return void 0;
  }
  const Digit0 = 48;
  const Digit9 = 57;
  const A = 65;
  const a = 97;
  const f = 102;
  function hexDigit(charCode) {
    if (charCode < Digit0) {
      return 0;
    }
    if (charCode <= Digit9) {
      return charCode - Digit0;
    }
    if (charCode < a) {
      charCode += a - A;
    }
    if (charCode >= a && charCode <= f) {
      return charCode - a + 10;
    }
    return 0;
  }
  function colorFromHex(text) {
    if (text[0] !== "#") {
      return void 0;
    }
    switch (text.length) {
      case 4:
        return {
          red: hexDigit(text.charCodeAt(1)) * 17 / 255,
          green: hexDigit(text.charCodeAt(2)) * 17 / 255,
          blue: hexDigit(text.charCodeAt(3)) * 17 / 255,
          alpha: 1
        };
      case 5:
        return {
          red: hexDigit(text.charCodeAt(1)) * 17 / 255,
          green: hexDigit(text.charCodeAt(2)) * 17 / 255,
          blue: hexDigit(text.charCodeAt(3)) * 17 / 255,
          alpha: hexDigit(text.charCodeAt(4)) * 17 / 255
        };
      case 7:
        return {
          red: (hexDigit(text.charCodeAt(1)) * 16 + hexDigit(text.charCodeAt(2))) / 255,
          green: (hexDigit(text.charCodeAt(3)) * 16 + hexDigit(text.charCodeAt(4))) / 255,
          blue: (hexDigit(text.charCodeAt(5)) * 16 + hexDigit(text.charCodeAt(6))) / 255,
          alpha: 1
        };
      case 9:
        return {
          red: (hexDigit(text.charCodeAt(1)) * 16 + hexDigit(text.charCodeAt(2))) / 255,
          green: (hexDigit(text.charCodeAt(3)) * 16 + hexDigit(text.charCodeAt(4))) / 255,
          blue: (hexDigit(text.charCodeAt(5)) * 16 + hexDigit(text.charCodeAt(6))) / 255,
          alpha: (hexDigit(text.charCodeAt(7)) * 16 + hexDigit(text.charCodeAt(8))) / 255
        };
    }
    return void 0;
  }
  class JSONDocumentSymbols {
    constructor(schemaService) {
      this.schemaService = schemaService;
    }
    findDocumentSymbols(document2, doc, context = { resultLimit: Number.MAX_VALUE }) {
      const root = doc.root;
      if (!root) {
        return [];
      }
      let limit = context.resultLimit || Number.MAX_VALUE;
      const resourceString = document2.uri;
      if (resourceString === "vscode://defaultsettings/keybindings.json" || endsWith(resourceString.toLowerCase(), "/user/keybindings.json")) {
        if (root.type === "array") {
          const result2 = [];
          for (const item of root.items) {
            if (item.type === "object") {
              for (const property of item.properties) {
                if (property.keyNode.value === "key" && property.valueNode) {
                  const location = Location.create(document2.uri, getRange(document2, item));
                  result2.push({ name: getName(property.valueNode), kind: SymbolKind.Function, location });
                  limit--;
                  if (limit <= 0) {
                    if (context && context.onResultLimitExceeded) {
                      context.onResultLimitExceeded(resourceString);
                    }
                    return result2;
                  }
                }
              }
            }
          }
          return result2;
        }
      }
      const toVisit = [
        { node: root, containerName: "" }
      ];
      let nextToVisit = 0;
      let limitExceeded = false;
      const result = [];
      const collectOutlineEntries = (node, containerName) => {
        if (node.type === "array") {
          node.items.forEach((node2) => {
            if (node2) {
              toVisit.push({ node: node2, containerName });
            }
          });
        } else if (node.type === "object") {
          node.properties.forEach((property) => {
            const valueNode = property.valueNode;
            if (valueNode) {
              if (limit > 0) {
                limit--;
                const location = Location.create(document2.uri, getRange(document2, property));
                const childContainerName = containerName ? containerName + "." + property.keyNode.value : property.keyNode.value;
                result.push({ name: this.getKeyLabel(property), kind: this.getSymbolKind(valueNode.type), location, containerName });
                toVisit.push({ node: valueNode, containerName: childContainerName });
              } else {
                limitExceeded = true;
              }
            }
          });
        }
      };
      while (nextToVisit < toVisit.length) {
        const next = toVisit[nextToVisit++];
        collectOutlineEntries(next.node, next.containerName);
      }
      if (limitExceeded && context && context.onResultLimitExceeded) {
        context.onResultLimitExceeded(resourceString);
      }
      return result;
    }
    findDocumentSymbols2(document2, doc, context = { resultLimit: Number.MAX_VALUE }) {
      const root = doc.root;
      if (!root) {
        return [];
      }
      let limit = context.resultLimit || Number.MAX_VALUE;
      const resourceString = document2.uri;
      if (resourceString === "vscode://defaultsettings/keybindings.json" || endsWith(resourceString.toLowerCase(), "/user/keybindings.json")) {
        if (root.type === "array") {
          const result2 = [];
          for (const item of root.items) {
            if (item.type === "object") {
              for (const property of item.properties) {
                if (property.keyNode.value === "key" && property.valueNode) {
                  const range = getRange(document2, item);
                  const selectionRange = getRange(document2, property.keyNode);
                  result2.push({ name: getName(property.valueNode), kind: SymbolKind.Function, range, selectionRange });
                  limit--;
                  if (limit <= 0) {
                    if (context && context.onResultLimitExceeded) {
                      context.onResultLimitExceeded(resourceString);
                    }
                    return result2;
                  }
                }
              }
            }
          }
          return result2;
        }
      }
      const result = [];
      const toVisit = [
        { node: root, result }
      ];
      let nextToVisit = 0;
      let limitExceeded = false;
      const collectOutlineEntries = (node, result2) => {
        if (node.type === "array") {
          node.items.forEach((node2, index) => {
            if (node2) {
              if (limit > 0) {
                limit--;
                const range = getRange(document2, node2);
                const selectionRange = range;
                const name = String(index);
                const symbol = { name, kind: this.getSymbolKind(node2.type), range, selectionRange, children: [] };
                result2.push(symbol);
                toVisit.push({ result: symbol.children, node: node2 });
              } else {
                limitExceeded = true;
              }
            }
          });
        } else if (node.type === "object") {
          node.properties.forEach((property) => {
            const valueNode = property.valueNode;
            if (valueNode) {
              if (limit > 0) {
                limit--;
                const range = getRange(document2, property);
                const selectionRange = getRange(document2, property.keyNode);
                const children = [];
                const symbol = { name: this.getKeyLabel(property), kind: this.getSymbolKind(valueNode.type), range, selectionRange, children, detail: this.getDetail(valueNode) };
                result2.push(symbol);
                toVisit.push({ result: children, node: valueNode });
              } else {
                limitExceeded = true;
              }
            }
          });
        }
      };
      while (nextToVisit < toVisit.length) {
        const next = toVisit[nextToVisit++];
        collectOutlineEntries(next.node, next.result);
      }
      if (limitExceeded && context && context.onResultLimitExceeded) {
        context.onResultLimitExceeded(resourceString);
      }
      return result;
    }
    getSymbolKind(nodeType) {
      switch (nodeType) {
        case "object":
          return SymbolKind.Module;
        case "string":
          return SymbolKind.String;
        case "number":
          return SymbolKind.Number;
        case "array":
          return SymbolKind.Array;
        case "boolean":
          return SymbolKind.Boolean;
        default:
          return SymbolKind.Variable;
      }
    }
    getKeyLabel(property) {
      let name = property.keyNode.value;
      if (name) {
        name = name.replace(/[\n]/g, "↵");
      }
      if (name && name.trim()) {
        return name;
      }
      return `"${name}"`;
    }
    getDetail(node) {
      if (!node) {
        return void 0;
      }
      if (node.type === "boolean" || node.type === "number" || node.type === "null" || node.type === "string") {
        return String(node.value);
      } else {
        if (node.type === "array") {
          return node.children.length ? void 0 : "[]";
        } else if (node.type === "object") {
          return node.children.length ? void 0 : "{}";
        }
      }
      return void 0;
    }
    findDocumentColors(document2, doc, context) {
      return this.schemaService.getSchemaForResource(document2.uri, doc).then((schema) => {
        const result = [];
        if (schema) {
          let limit = context && typeof context.resultLimit === "number" ? context.resultLimit : Number.MAX_VALUE;
          const matchingSchemas = doc.getMatchingSchemas(schema.schema);
          const visitedNode = {};
          for (const s of matchingSchemas) {
            if (!s.inverted && s.schema && (s.schema.format === "color" || s.schema.format === "color-hex") && s.node && s.node.type === "string") {
              const nodeId = String(s.node.offset);
              if (!visitedNode[nodeId]) {
                const color = colorFromHex(getNodeValue(s.node));
                if (color) {
                  const range = getRange(document2, s.node);
                  result.push({ color, range });
                }
                visitedNode[nodeId] = true;
                limit--;
                if (limit <= 0) {
                  if (context && context.onResultLimitExceeded) {
                    context.onResultLimitExceeded(document2.uri);
                  }
                  return result;
                }
              }
            }
          }
        }
        return result;
      });
    }
    getColorPresentations(document2, doc, color, range) {
      const result = [];
      const red256 = Math.round(color.red * 255), green256 = Math.round(color.green * 255), blue256 = Math.round(color.blue * 255);
      function toTwoDigitHex(n) {
        const r = n.toString(16);
        return r.length !== 2 ? "0" + r : r;
      }
      let label;
      if (color.alpha === 1) {
        label = `#${toTwoDigitHex(red256)}${toTwoDigitHex(green256)}${toTwoDigitHex(blue256)}`;
      } else {
        label = `#${toTwoDigitHex(red256)}${toTwoDigitHex(green256)}${toTwoDigitHex(blue256)}${toTwoDigitHex(Math.round(color.alpha * 255))}`;
      }
      result.push({ label, textEdit: TextEdit.replace(range, JSON.stringify(label)) });
      return result;
    }
  }
  function getRange(document2, node) {
    return Range.create(document2.positionAt(node.offset), document2.positionAt(node.offset + node.length));
  }
  function getName(node) {
    return getNodeValue(node) || t("<empty>");
  }
  const schemaContributions = {
    schemaAssociations: [],
    schemas: {
      // bundle the schema-schema to include (localized) descriptions
      "http://json-schema.org/draft-04/schema#": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "definitions": {
          "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": {
              "$ref": "#"
            }
          },
          "positiveInteger": {
            "type": "integer",
            "minimum": 0
          },
          "positiveIntegerDefault0": {
            "allOf": [
              {
                "$ref": "#/definitions/positiveInteger"
              },
              {
                "default": 0
              }
            ]
          },
          "simpleTypes": {
            "type": "string",
            "enum": [
              "array",
              "boolean",
              "integer",
              "null",
              "number",
              "object",
              "string"
            ]
          },
          "stringArray": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
          }
        },
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uri"
          },
          "$schema": {
            "type": "string",
            "format": "uri"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "default": {},
          "multipleOf": {
            "type": "number",
            "minimum": 0,
            "exclusiveMinimum": true
          },
          "maximum": {
            "type": "number"
          },
          "exclusiveMaximum": {
            "type": "boolean",
            "default": false
          },
          "minimum": {
            "type": "number"
          },
          "exclusiveMinimum": {
            "type": "boolean",
            "default": false
          },
          "maxLength": {
            "allOf": [
              {
                "$ref": "#/definitions/positiveInteger"
              }
            ]
          },
          "minLength": {
            "allOf": [
              {
                "$ref": "#/definitions/positiveIntegerDefault0"
              }
            ]
          },
          "pattern": {
            "type": "string",
            "format": "regex"
          },
          "additionalItems": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#"
              }
            ],
            "default": {}
          },
          "items": {
            "anyOf": [
              {
                "$ref": "#"
              },
              {
                "$ref": "#/definitions/schemaArray"
              }
            ],
            "default": {}
          },
          "maxItems": {
            "allOf": [
              {
                "$ref": "#/definitions/positiveInteger"
              }
            ]
          },
          "minItems": {
            "allOf": [
              {
                "$ref": "#/definitions/positiveIntegerDefault0"
              }
            ]
          },
          "uniqueItems": {
            "type": "boolean",
            "default": false
          },
          "maxProperties": {
            "allOf": [
              {
                "$ref": "#/definitions/positiveInteger"
              }
            ]
          },
          "minProperties": {
            "allOf": [
              {
                "$ref": "#/definitions/positiveIntegerDefault0"
              }
            ]
          },
          "required": {
            "allOf": [
              {
                "$ref": "#/definitions/stringArray"
              }
            ]
          },
          "additionalProperties": {
            "anyOf": [
              {
                "type": "boolean"
              },
              {
                "$ref": "#"
              }
            ],
            "default": {}
          },
          "definitions": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#"
            },
            "default": {}
          },
          "properties": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#"
            },
            "default": {}
          },
          "patternProperties": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#"
            },
            "default": {}
          },
          "dependencies": {
            "type": "object",
            "additionalProperties": {
              "anyOf": [
                {
                  "$ref": "#"
                },
                {
                  "$ref": "#/definitions/stringArray"
                }
              ]
            }
          },
          "enum": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true
          },
          "type": {
            "anyOf": [
              {
                "$ref": "#/definitions/simpleTypes"
              },
              {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/simpleTypes"
                },
                "minItems": 1,
                "uniqueItems": true
              }
            ]
          },
          "format": {
            "anyOf": [
              {
                "type": "string",
                "enum": [
                  "date-time",
                  "uri",
                  "email",
                  "hostname",
                  "ipv4",
                  "ipv6",
                  "regex"
                ]
              },
              {
                "type": "string"
              }
            ]
          },
          "allOf": {
            "allOf": [
              {
                "$ref": "#/definitions/schemaArray"
              }
            ]
          },
          "anyOf": {
            "allOf": [
              {
                "$ref": "#/definitions/schemaArray"
              }
            ]
          },
          "oneOf": {
            "allOf": [
              {
                "$ref": "#/definitions/schemaArray"
              }
            ]
          },
          "not": {
            "allOf": [
              {
                "$ref": "#"
              }
            ]
          }
        },
        "dependencies": {
          "exclusiveMaximum": [
            "maximum"
          ],
          "exclusiveMinimum": [
            "minimum"
          ]
        },
        "default": {}
      },
      "http://json-schema.org/draft-07/schema#": {
        "definitions": {
          "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$ref": "#" }
          },
          "nonNegativeInteger": {
            "type": "integer",
            "minimum": 0
          },
          "nonNegativeIntegerDefault0": {
            "allOf": [
              { "$ref": "#/definitions/nonNegativeInteger" },
              { "default": 0 }
            ]
          },
          "simpleTypes": {
            "enum": [
              "array",
              "boolean",
              "integer",
              "null",
              "number",
              "object",
              "string"
            ]
          },
          "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "uniqueItems": true,
            "default": []
          }
        },
        "type": ["object", "boolean"],
        "properties": {
          "$id": {
            "type": "string",
            "format": "uri-reference"
          },
          "$schema": {
            "type": "string",
            "format": "uri"
          },
          "$ref": {
            "type": "string",
            "format": "uri-reference"
          },
          "$comment": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "default": true,
          "readOnly": {
            "type": "boolean",
            "default": false
          },
          "examples": {
            "type": "array",
            "items": true
          },
          "multipleOf": {
            "type": "number",
            "exclusiveMinimum": 0
          },
          "maximum": {
            "type": "number"
          },
          "exclusiveMaximum": {
            "type": "number"
          },
          "minimum": {
            "type": "number"
          },
          "exclusiveMinimum": {
            "type": "number"
          },
          "maxLength": { "$ref": "#/definitions/nonNegativeInteger" },
          "minLength": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
          "pattern": {
            "type": "string",
            "format": "regex"
          },
          "additionalItems": { "$ref": "#" },
          "items": {
            "anyOf": [
              { "$ref": "#" },
              { "$ref": "#/definitions/schemaArray" }
            ],
            "default": true
          },
          "maxItems": { "$ref": "#/definitions/nonNegativeInteger" },
          "minItems": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
          "uniqueItems": {
            "type": "boolean",
            "default": false
          },
          "contains": { "$ref": "#" },
          "maxProperties": { "$ref": "#/definitions/nonNegativeInteger" },
          "minProperties": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
          "required": { "$ref": "#/definitions/stringArray" },
          "additionalProperties": { "$ref": "#" },
          "definitions": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
          },
          "properties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
          },
          "patternProperties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "propertyNames": { "format": "regex" },
            "default": {}
          },
          "dependencies": {
            "type": "object",
            "additionalProperties": {
              "anyOf": [
                { "$ref": "#" },
                { "$ref": "#/definitions/stringArray" }
              ]
            }
          },
          "propertyNames": { "$ref": "#" },
          "const": true,
          "enum": {
            "type": "array",
            "items": true,
            "minItems": 1,
            "uniqueItems": true
          },
          "type": {
            "anyOf": [
              { "$ref": "#/definitions/simpleTypes" },
              {
                "type": "array",
                "items": { "$ref": "#/definitions/simpleTypes" },
                "minItems": 1,
                "uniqueItems": true
              }
            ]
          },
          "format": { "type": "string" },
          "contentMediaType": { "type": "string" },
          "contentEncoding": { "type": "string" },
          "if": { "$ref": "#" },
          "then": { "$ref": "#" },
          "else": { "$ref": "#" },
          "allOf": { "$ref": "#/definitions/schemaArray" },
          "anyOf": { "$ref": "#/definitions/schemaArray" },
          "oneOf": { "$ref": "#/definitions/schemaArray" },
          "not": { "$ref": "#" }
        },
        "default": true
      }
    }
  };
  const descriptions = {
    id: t("A unique identifier for the schema."),
    $schema: t("The schema to verify this document against."),
    title: t("A descriptive title of the element."),
    description: t("A long description of the element. Used in hover menus and suggestions."),
    default: t("A default value. Used by suggestions."),
    multipleOf: t("A number that should cleanly divide the current value (i.e. have no remainder)."),
    maximum: t("The maximum numerical value, inclusive by default."),
    exclusiveMaximum: t("Makes the maximum property exclusive."),
    minimum: t("The minimum numerical value, inclusive by default."),
    exclusiveMinimum: t("Makes the minimum property exclusive."),
    maxLength: t("The maximum length of a string."),
    minLength: t("The minimum length of a string."),
    pattern: t("A regular expression to match the string against. It is not implicitly anchored."),
    additionalItems: t("For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail."),
    items: t("For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."),
    maxItems: t("The maximum number of items that can be inside an array. Inclusive."),
    minItems: t("The minimum number of items that can be inside an array. Inclusive."),
    uniqueItems: t("If all of the items in the array must be unique. Defaults to false."),
    maxProperties: t("The maximum number of properties an object can have. Inclusive."),
    minProperties: t("The minimum number of properties an object can have. Inclusive."),
    required: t("An array of strings that lists the names of all properties required on this object."),
    additionalProperties: t("Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."),
    definitions: t("Not used for validation. Place subschemas here that you wish to reference inline with $ref."),
    properties: t("A map of property names to schemas for each property."),
    patternProperties: t("A map of regular expressions on property names to schemas for matching properties."),
    dependencies: t("A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."),
    enum: t("The set of literal values that are valid."),
    type: t("Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."),
    format: t("Describes the format expected for the value."),
    allOf: t("An array of schemas, all of which must match."),
    anyOf: t("An array of schemas, where at least one must match."),
    oneOf: t("An array of schemas, exactly one of which must match."),
    not: t("A schema which must not match."),
    $id: t("A unique identifier for the schema."),
    $ref: t("Reference a definition hosted on any location."),
    $comment: t("Comments from schema authors to readers or maintainers of the schema."),
    readOnly: t("Indicates that the value of the instance is managed exclusively by the owning authority."),
    examples: t("Sample JSON values associated with a particular schema, for the purpose of illustrating usage."),
    contains: t('An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'),
    propertyNames: t("If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."),
    const: t("An instance validates successfully against this keyword if its value is equal to the value of the keyword."),
    contentMediaType: t("Describes the media type of a string property."),
    contentEncoding: t("Describes the content encoding of a string property."),
    if: t('The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'),
    then: t('The "if" subschema is used for validation when the "if" subschema succeeds.'),
    else: t('The "else" subschema is used for validation when the "if" subschema fails.')
  };
  for (const schemaName in schemaContributions.schemas) {
    const schema = schemaContributions.schemas[schemaName];
    for (const property in schema.properties) {
      let propertyObject = schema.properties[property];
      if (typeof propertyObject === "boolean") {
        propertyObject = schema.properties[property] = {};
      }
      const description = descriptions[property];
      if (description) {
        propertyObject["description"] = description;
      }
    }
  }
  var LIB;
  (() => {
    var t2 = { 470: (t3) => {
      function e2(t4) {
        if ("string" != typeof t4) throw new TypeError("Path must be a string. Received " + JSON.stringify(t4));
      }
      function r2(t4, e3) {
        for (var r3, n3 = "", i = 0, o = -1, s = 0, h = 0; h <= t4.length; ++h) {
          if (h < t4.length) r3 = t4.charCodeAt(h);
          else {
            if (47 === r3) break;
            r3 = 47;
          }
          if (47 === r3) {
            if (o === h - 1 || 1 === s) ;
            else if (o !== h - 1 && 2 === s) {
              if (n3.length < 2 || 2 !== i || 46 !== n3.charCodeAt(n3.length - 1) || 46 !== n3.charCodeAt(n3.length - 2)) {
                if (n3.length > 2) {
                  var a2 = n3.lastIndexOf("/");
                  if (a2 !== n3.length - 1) {
                    -1 === a2 ? (n3 = "", i = 0) : i = (n3 = n3.slice(0, a2)).length - 1 - n3.lastIndexOf("/"), o = h, s = 0;
                    continue;
                  }
                } else if (2 === n3.length || 1 === n3.length) {
                  n3 = "", i = 0, o = h, s = 0;
                  continue;
                }
              }
              e3 && (n3.length > 0 ? n3 += "/.." : n3 = "..", i = 2);
            } else n3.length > 0 ? n3 += "/" + t4.slice(o + 1, h) : n3 = t4.slice(o + 1, h), i = h - o - 1;
            o = h, s = 0;
          } else 46 === r3 && -1 !== s ? ++s : s = -1;
        }
        return n3;
      }
      var n2 = { resolve: function() {
        for (var t4, n3 = "", i = false, o = arguments.length - 1; o >= -1 && !i; o--) {
          var s;
          o >= 0 ? s = arguments[o] : (void 0 === t4 && (t4 = process.cwd()), s = t4), e2(s), 0 !== s.length && (n3 = s + "/" + n3, i = 47 === s.charCodeAt(0));
        }
        return n3 = r2(n3, !i), i ? n3.length > 0 ? "/" + n3 : "/" : n3.length > 0 ? n3 : ".";
      }, normalize: function(t4) {
        if (e2(t4), 0 === t4.length) return ".";
        var n3 = 47 === t4.charCodeAt(0), i = 47 === t4.charCodeAt(t4.length - 1);
        return 0 !== (t4 = r2(t4, !n3)).length || n3 || (t4 = "."), t4.length > 0 && i && (t4 += "/"), n3 ? "/" + t4 : t4;
      }, isAbsolute: function(t4) {
        return e2(t4), t4.length > 0 && 47 === t4.charCodeAt(0);
      }, join: function() {
        if (0 === arguments.length) return ".";
        for (var t4, r3 = 0; r3 < arguments.length; ++r3) {
          var i = arguments[r3];
          e2(i), i.length > 0 && (void 0 === t4 ? t4 = i : t4 += "/" + i);
        }
        return void 0 === t4 ? "." : n2.normalize(t4);
      }, relative: function(t4, r3) {
        if (e2(t4), e2(r3), t4 === r3) return "";
        if ((t4 = n2.resolve(t4)) === (r3 = n2.resolve(r3))) return "";
        for (var i = 1; i < t4.length && 47 === t4.charCodeAt(i); ++i) ;
        for (var o = t4.length, s = o - i, h = 1; h < r3.length && 47 === r3.charCodeAt(h); ++h) ;
        for (var a2 = r3.length - h, c = s < a2 ? s : a2, f2 = -1, u = 0; u <= c; ++u) {
          if (u === c) {
            if (a2 > c) {
              if (47 === r3.charCodeAt(h + u)) return r3.slice(h + u + 1);
              if (0 === u) return r3.slice(h + u);
            } else s > c && (47 === t4.charCodeAt(i + u) ? f2 = u : 0 === u && (f2 = 0));
            break;
          }
          var l = t4.charCodeAt(i + u);
          if (l !== r3.charCodeAt(h + u)) break;
          47 === l && (f2 = u);
        }
        var g = "";
        for (u = i + f2 + 1; u <= o; ++u) u !== o && 47 !== t4.charCodeAt(u) || (0 === g.length ? g += ".." : g += "/..");
        return g.length > 0 ? g + r3.slice(h + f2) : (h += f2, 47 === r3.charCodeAt(h) && ++h, r3.slice(h));
      }, _makeLong: function(t4) {
        return t4;
      }, dirname: function(t4) {
        if (e2(t4), 0 === t4.length) return ".";
        for (var r3 = t4.charCodeAt(0), n3 = 47 === r3, i = -1, o = true, s = t4.length - 1; s >= 1; --s) if (47 === (r3 = t4.charCodeAt(s))) {
          if (!o) {
            i = s;
            break;
          }
        } else o = false;
        return -1 === i ? n3 ? "/" : "." : n3 && 1 === i ? "//" : t4.slice(0, i);
      }, basename: function(t4, r3) {
        if (void 0 !== r3 && "string" != typeof r3) throw new TypeError('"ext" argument must be a string');
        e2(t4);
        var n3, i = 0, o = -1, s = true;
        if (void 0 !== r3 && r3.length > 0 && r3.length <= t4.length) {
          if (r3.length === t4.length && r3 === t4) return "";
          var h = r3.length - 1, a2 = -1;
          for (n3 = t4.length - 1; n3 >= 0; --n3) {
            var c = t4.charCodeAt(n3);
            if (47 === c) {
              if (!s) {
                i = n3 + 1;
                break;
              }
            } else -1 === a2 && (s = false, a2 = n3 + 1), h >= 0 && (c === r3.charCodeAt(h) ? -1 == --h && (o = n3) : (h = -1, o = a2));
          }
          return i === o ? o = a2 : -1 === o && (o = t4.length), t4.slice(i, o);
        }
        for (n3 = t4.length - 1; n3 >= 0; --n3) if (47 === t4.charCodeAt(n3)) {
          if (!s) {
            i = n3 + 1;
            break;
          }
        } else -1 === o && (s = false, o = n3 + 1);
        return -1 === o ? "" : t4.slice(i, o);
      }, extname: function(t4) {
        e2(t4);
        for (var r3 = -1, n3 = 0, i = -1, o = true, s = 0, h = t4.length - 1; h >= 0; --h) {
          var a2 = t4.charCodeAt(h);
          if (47 !== a2) -1 === i && (o = false, i = h + 1), 46 === a2 ? -1 === r3 ? r3 = h : 1 !== s && (s = 1) : -1 !== r3 && (s = -1);
          else if (!o) {
            n3 = h + 1;
            break;
          }
        }
        return -1 === r3 || -1 === i || 0 === s || 1 === s && r3 === i - 1 && r3 === n3 + 1 ? "" : t4.slice(r3, i);
      }, format: function(t4) {
        if (null === t4 || "object" != typeof t4) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof t4);
        return (function(t5, e3) {
          var r3 = e3.dir || e3.root, n3 = e3.base || (e3.name || "") + (e3.ext || "");
          return r3 ? r3 === e3.root ? r3 + n3 : r3 + "/" + n3 : n3;
        })(0, t4);
      }, parse: function(t4) {
        e2(t4);
        var r3 = { root: "", dir: "", base: "", ext: "", name: "" };
        if (0 === t4.length) return r3;
        var n3, i = t4.charCodeAt(0), o = 47 === i;
        o ? (r3.root = "/", n3 = 1) : n3 = 0;
        for (var s = -1, h = 0, a2 = -1, c = true, f2 = t4.length - 1, u = 0; f2 >= n3; --f2) if (47 !== (i = t4.charCodeAt(f2))) -1 === a2 && (c = false, a2 = f2 + 1), 46 === i ? -1 === s ? s = f2 : 1 !== u && (u = 1) : -1 !== s && (u = -1);
        else if (!c) {
          h = f2 + 1;
          break;
        }
        return -1 === s || -1 === a2 || 0 === u || 1 === u && s === a2 - 1 && s === h + 1 ? -1 !== a2 && (r3.base = r3.name = 0 === h && o ? t4.slice(1, a2) : t4.slice(h, a2)) : (0 === h && o ? (r3.name = t4.slice(1, s), r3.base = t4.slice(1, a2)) : (r3.name = t4.slice(h, s), r3.base = t4.slice(h, a2)), r3.ext = t4.slice(s, a2)), h > 0 ? r3.dir = t4.slice(0, h - 1) : o && (r3.dir = "/"), r3;
      }, sep: "/", delimiter: ":", win32: null, posix: null };
      n2.posix = n2, t3.exports = n2;
    } }, e = {};
    function r(n2) {
      var i = e[n2];
      if (void 0 !== i) return i.exports;
      var o = e[n2] = { exports: {} };
      return t2[n2](o, o.exports, r), o.exports;
    }
    r.d = (t3, e2) => {
      for (var n2 in e2) r.o(e2, n2) && !r.o(t3, n2) && Object.defineProperty(t3, n2, { enumerable: true, get: e2[n2] });
    }, r.o = (t3, e2) => Object.prototype.hasOwnProperty.call(t3, e2), r.r = (t3) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
    };
    var n = {};
    (() => {
      let t3;
      if (r.r(n), r.d(n, { URI: () => f2, Utils: () => P }), "object" == typeof process) t3 = "win32" === process.platform;
      else if ("object" == typeof navigator) {
        let e3 = navigator.userAgent;
        t3 = e3.indexOf("Windows") >= 0;
      }
      const e2 = /^\w[\w\d+.-]*$/, i = /^\//, o = /^\/\//;
      function s(t4, r2) {
        if (!t4.scheme && r2) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t4.authority}", path: "${t4.path}", query: "${t4.query}", fragment: "${t4.fragment}"}`);
        if (t4.scheme && !e2.test(t4.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
        if (t4.path) {
          if (t4.authority) {
            if (!i.test(t4.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
          } else if (o.test(t4.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
        }
      }
      const h = "", a2 = "/", c = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
      class f2 {
        static isUri(t4) {
          return t4 instanceof f2 || !!t4 && "string" == typeof t4.authority && "string" == typeof t4.fragment && "string" == typeof t4.path && "string" == typeof t4.query && "string" == typeof t4.scheme && "string" == typeof t4.fsPath && "function" == typeof t4.with && "function" == typeof t4.toString;
        }
        scheme;
        authority;
        path;
        query;
        fragment;
        constructor(t4, e3, r2, n2, i2, o2 = false) {
          "object" == typeof t4 ? (this.scheme = t4.scheme || h, this.authority = t4.authority || h, this.path = t4.path || h, this.query = t4.query || h, this.fragment = t4.fragment || h) : (this.scheme = /* @__PURE__ */ (function(t5, e4) {
            return t5 || e4 ? t5 : "file";
          })(t4, o2), this.authority = e3 || h, this.path = (function(t5, e4) {
            switch (t5) {
              case "https":
              case "http":
              case "file":
                e4 ? e4[0] !== a2 && (e4 = a2 + e4) : e4 = a2;
            }
            return e4;
          })(this.scheme, r2 || h), this.query = n2 || h, this.fragment = i2 || h, s(this, o2));
        }
        get fsPath() {
          return m(this);
        }
        with(t4) {
          if (!t4) return this;
          let { scheme: e3, authority: r2, path: n2, query: i2, fragment: o2 } = t4;
          return void 0 === e3 ? e3 = this.scheme : null === e3 && (e3 = h), void 0 === r2 ? r2 = this.authority : null === r2 && (r2 = h), void 0 === n2 ? n2 = this.path : null === n2 && (n2 = h), void 0 === i2 ? i2 = this.query : null === i2 && (i2 = h), void 0 === o2 ? o2 = this.fragment : null === o2 && (o2 = h), e3 === this.scheme && r2 === this.authority && n2 === this.path && i2 === this.query && o2 === this.fragment ? this : new l(e3, r2, n2, i2, o2);
        }
        static parse(t4, e3 = false) {
          const r2 = c.exec(t4);
          return r2 ? new l(r2[2] || h, C(r2[4] || h), C(r2[5] || h), C(r2[7] || h), C(r2[9] || h), e3) : new l(h, h, h, h, h);
        }
        static file(e3) {
          let r2 = h;
          if (t3 && (e3 = e3.replace(/\\/g, a2)), e3[0] === a2 && e3[1] === a2) {
            const t4 = e3.indexOf(a2, 2);
            -1 === t4 ? (r2 = e3.substring(2), e3 = a2) : (r2 = e3.substring(2, t4), e3 = e3.substring(t4) || a2);
          }
          return new l("file", r2, e3, h, h);
        }
        static from(t4) {
          const e3 = new l(t4.scheme, t4.authority, t4.path, t4.query, t4.fragment);
          return s(e3, true), e3;
        }
        toString(t4 = false) {
          return y(this, t4);
        }
        toJSON() {
          return this;
        }
        static revive(t4) {
          if (t4) {
            if (t4 instanceof f2) return t4;
            {
              const e3 = new l(t4);
              return e3._formatted = t4.external, e3._fsPath = t4._sep === u ? t4.fsPath : null, e3;
            }
          }
          return t4;
        }
      }
      const u = t3 ? 1 : void 0;
      class l extends f2 {
        _formatted = null;
        _fsPath = null;
        get fsPath() {
          return this._fsPath || (this._fsPath = m(this)), this._fsPath;
        }
        toString(t4 = false) {
          return t4 ? y(this, true) : (this._formatted || (this._formatted = y(this, false)), this._formatted);
        }
        toJSON() {
          const t4 = { $mid: 1 };
          return this._fsPath && (t4.fsPath = this._fsPath, t4._sep = u), this._formatted && (t4.external = this._formatted), this.path && (t4.path = this.path), this.scheme && (t4.scheme = this.scheme), this.authority && (t4.authority = this.authority), this.query && (t4.query = this.query), this.fragment && (t4.fragment = this.fragment), t4;
        }
      }
      const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
      function d(t4, e3, r2) {
        let n2, i2 = -1;
        for (let o2 = 0; o2 < t4.length; o2++) {
          const s2 = t4.charCodeAt(o2);
          if (s2 >= 97 && s2 <= 122 || s2 >= 65 && s2 <= 90 || s2 >= 48 && s2 <= 57 || 45 === s2 || 46 === s2 || 95 === s2 || 126 === s2 || e3 && 47 === s2 || r2 && 91 === s2 || r2 && 93 === s2 || r2 && 58 === s2) -1 !== i2 && (n2 += encodeURIComponent(t4.substring(i2, o2)), i2 = -1), void 0 !== n2 && (n2 += t4.charAt(o2));
          else {
            void 0 === n2 && (n2 = t4.substr(0, o2));
            const e4 = g[s2];
            void 0 !== e4 ? (-1 !== i2 && (n2 += encodeURIComponent(t4.substring(i2, o2)), i2 = -1), n2 += e4) : -1 === i2 && (i2 = o2);
          }
        }
        return -1 !== i2 && (n2 += encodeURIComponent(t4.substring(i2))), void 0 !== n2 ? n2 : t4;
      }
      function p(t4) {
        let e3;
        for (let r2 = 0; r2 < t4.length; r2++) {
          const n2 = t4.charCodeAt(r2);
          35 === n2 || 63 === n2 ? (void 0 === e3 && (e3 = t4.substr(0, r2)), e3 += g[n2]) : void 0 !== e3 && (e3 += t4[r2]);
        }
        return void 0 !== e3 ? e3 : t4;
      }
      function m(e3, r2) {
        let n2;
        return n2 = e3.authority && e3.path.length > 1 && "file" === e3.scheme ? `//${e3.authority}${e3.path}` : 47 === e3.path.charCodeAt(0) && (e3.path.charCodeAt(1) >= 65 && e3.path.charCodeAt(1) <= 90 || e3.path.charCodeAt(1) >= 97 && e3.path.charCodeAt(1) <= 122) && 58 === e3.path.charCodeAt(2) ? e3.path[1].toLowerCase() + e3.path.substr(2) : e3.path, t3 && (n2 = n2.replace(/\//g, "\\")), n2;
      }
      function y(t4, e3) {
        const r2 = e3 ? p : d;
        let n2 = "", { scheme: i2, authority: o2, path: s2, query: h2, fragment: c2 } = t4;
        if (i2 && (n2 += i2, n2 += ":"), (o2 || "file" === i2) && (n2 += a2, n2 += a2), o2) {
          let t5 = o2.indexOf("@");
          if (-1 !== t5) {
            const e4 = o2.substr(0, t5);
            o2 = o2.substr(t5 + 1), t5 = e4.lastIndexOf(":"), -1 === t5 ? n2 += r2(e4, false, false) : (n2 += r2(e4.substr(0, t5), false, false), n2 += ":", n2 += r2(e4.substr(t5 + 1), false, true)), n2 += "@";
          }
          o2 = o2.toLowerCase(), t5 = o2.lastIndexOf(":"), -1 === t5 ? n2 += r2(o2, false, true) : (n2 += r2(o2.substr(0, t5), false, true), n2 += o2.substr(t5));
        }
        if (s2) {
          if (s2.length >= 3 && 47 === s2.charCodeAt(0) && 58 === s2.charCodeAt(2)) {
            const t5 = s2.charCodeAt(1);
            t5 >= 65 && t5 <= 90 && (s2 = `/${String.fromCharCode(t5 + 32)}:${s2.substr(3)}`);
          } else if (s2.length >= 2 && 58 === s2.charCodeAt(1)) {
            const t5 = s2.charCodeAt(0);
            t5 >= 65 && t5 <= 90 && (s2 = `${String.fromCharCode(t5 + 32)}:${s2.substr(2)}`);
          }
          n2 += r2(s2, true, false);
        }
        return h2 && (n2 += "?", n2 += r2(h2, false, false)), c2 && (n2 += "#", n2 += e3 ? c2 : d(c2, false, false)), n2;
      }
      function v(t4) {
        try {
          return decodeURIComponent(t4);
        } catch {
          return t4.length > 3 ? t4.substr(0, 3) + v(t4.substr(3)) : t4;
        }
      }
      const b = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
      function C(t4) {
        return t4.match(b) ? t4.replace(b, ((t5) => v(t5))) : t4;
      }
      var A2 = r(470);
      const w = A2.posix || A2, x = "/";
      var P;
      !(function(t4) {
        t4.joinPath = function(t5, ...e3) {
          return t5.with({ path: w.join(t5.path, ...e3) });
        }, t4.resolvePath = function(t5, ...e3) {
          let r2 = t5.path, n2 = false;
          r2[0] !== x && (r2 = x + r2, n2 = true);
          let i2 = w.resolve(r2, ...e3);
          return n2 && i2[0] === x && !t5.authority && (i2 = i2.substring(1)), t5.with({ path: i2 });
        }, t4.dirname = function(t5) {
          if (0 === t5.path.length || t5.path === x) return t5;
          let e3 = w.dirname(t5.path);
          return 1 === e3.length && 46 === e3.charCodeAt(0) && (e3 = ""), t5.with({ path: e3 });
        }, t4.basename = function(t5) {
          return w.basename(t5.path);
        }, t4.extname = function(t5) {
          return w.extname(t5.path);
        };
      })(P || (P = {}));
    })(), LIB = n;
  })();
  const { URI, Utils } = LIB;
  function createRegex(glob, opts) {
    if (typeof glob !== "string") {
      throw new TypeError("Expected a string");
    }
    const str = String(glob);
    let reStr = "";
    const extended = opts ? true : false;
    const globstar = opts ? true : false;
    let inGroup = false;
    const flags = opts && typeof opts.flags === "string" ? opts.flags : "";
    let c;
    for (let i = 0, len = str.length; i < len; i++) {
      c = str[i];
      switch (c) {
        case "/":
        case "$":
        case "^":
        case "+":
        case ".":
        case "(":
        case ")":
        case "=":
        case "!":
        case "|":
          reStr += "\\" + c;
          break;
        case "?":
          if (extended) {
            reStr += ".";
            break;
          }
        case "[":
        case "]":
          if (extended) {
            reStr += c;
            break;
          }
        case "{":
          if (extended) {
            inGroup = true;
            reStr += "(";
            break;
          }
        case "}":
          if (extended) {
            inGroup = false;
            reStr += ")";
            break;
          }
        case ",":
          if (inGroup) {
            reStr += "|";
            break;
          }
          reStr += "\\" + c;
          break;
        case "*":
          const prevChar = str[i - 1];
          let starCount = 1;
          while (str[i + 1] === "*") {
            starCount++;
            i++;
          }
          const nextChar = str[i + 1];
          if (!globstar) {
            reStr += ".*";
          } else {
            const isGlobstar = starCount > 1 && (prevChar === "/" || prevChar === void 0 || prevChar === "{" || prevChar === ",") && (nextChar === "/" || nextChar === void 0 || nextChar === "," || nextChar === "}");
            if (isGlobstar) {
              if (nextChar === "/") {
                i++;
              } else if (prevChar === "/" && reStr.endsWith("\\/")) {
                reStr = reStr.substr(0, reStr.length - 2);
              }
              reStr += "((?:[^/]*(?:/|$))*)";
            } else {
              reStr += "([^/]*)";
            }
          }
          break;
        default:
          reStr += c;
      }
    }
    if (!flags || !~flags.indexOf("g")) {
      reStr = "^" + reStr + "$";
    }
    return new RegExp(reStr, flags);
  }
  const BANG = "!";
  const PATH_SEP = "/";
  class FilePatternAssociation {
    constructor(pattern, folderUri, uris) {
      this.folderUri = folderUri;
      this.uris = uris;
      this.globWrappers = [];
      try {
        for (let patternString of pattern) {
          const include = patternString[0] !== BANG;
          if (!include) {
            patternString = patternString.substring(1);
          }
          if (patternString.length > 0) {
            if (patternString[0] === PATH_SEP) {
              patternString = patternString.substring(1);
            }
            this.globWrappers.push({
              regexp: createRegex("**/" + patternString, { extended: true, globstar: true }),
              include
            });
          }
        }
        ;
        if (folderUri) {
          folderUri = normalizeResourceForMatching(folderUri);
          if (!folderUri.endsWith("/")) {
            folderUri = folderUri + "/";
          }
          this.folderUri = folderUri;
        }
      } catch (e) {
        this.globWrappers.length = 0;
        this.uris = [];
      }
    }
    matchesPattern(fileName) {
      if (this.folderUri && !fileName.startsWith(this.folderUri)) {
        return false;
      }
      let match = false;
      for (const { regexp, include } of this.globWrappers) {
        if (regexp.test(fileName)) {
          match = include;
        }
      }
      return match;
    }
    getURIs() {
      return this.uris;
    }
  }
  class SchemaHandle {
    constructor(service, uri, unresolvedSchemaContent) {
      this.service = service;
      this.uri = uri;
      this.dependencies = /* @__PURE__ */ new Set();
      this.anchors = void 0;
      if (unresolvedSchemaContent) {
        this.unresolvedSchema = this.service.promise.resolve(new UnresolvedSchema(unresolvedSchemaContent));
      }
    }
    getUnresolvedSchema() {
      if (!this.unresolvedSchema) {
        this.unresolvedSchema = this.service.loadSchema(this.uri);
      }
      return this.unresolvedSchema;
    }
    getResolvedSchema() {
      if (!this.resolvedSchema) {
        this.resolvedSchema = this.getUnresolvedSchema().then((unresolved) => {
          return this.service.resolveSchemaContent(unresolved, this);
        });
      }
      return this.resolvedSchema;
    }
    clearSchema() {
      const hasChanges = !!this.unresolvedSchema;
      this.resolvedSchema = void 0;
      this.unresolvedSchema = void 0;
      this.dependencies.clear();
      this.anchors = void 0;
      return hasChanges;
    }
  }
  class UnresolvedSchema {
    constructor(schema, errors = []) {
      this.schema = schema;
      this.errors = errors;
    }
  }
  class ResolvedSchema {
    constructor(schema, errors = [], warnings = [], schemaDraft) {
      this.schema = schema;
      this.errors = errors;
      this.warnings = warnings;
      this.schemaDraft = schemaDraft;
    }
    getSection(path) {
      const schemaRef = this.getSectionRecursive(path, this.schema);
      if (schemaRef) {
        return asSchema(schemaRef);
      }
      return void 0;
    }
    getSectionRecursive(path, schema) {
      if (!schema || typeof schema === "boolean" || path.length === 0) {
        return schema;
      }
      const next = path.shift();
      if (schema.properties && typeof schema.properties[next]) {
        return this.getSectionRecursive(path, schema.properties[next]);
      } else if (schema.patternProperties) {
        for (const pattern of Object.keys(schema.patternProperties)) {
          const regex = extendedRegExp(pattern);
          if (regex?.test(next)) {
            return this.getSectionRecursive(path, schema.patternProperties[pattern]);
          }
        }
      } else if (typeof schema.additionalProperties === "object") {
        return this.getSectionRecursive(path, schema.additionalProperties);
      } else if (next.match("[0-9]+")) {
        if (Array.isArray(schema.items)) {
          const index = parseInt(next, 10);
          if (!isNaN(index) && schema.items[index]) {
            return this.getSectionRecursive(path, schema.items[index]);
          }
        } else if (schema.items) {
          return this.getSectionRecursive(path, schema.items);
        }
      }
      return void 0;
    }
  }
  class JSONSchemaService {
    constructor(requestService, contextService, promiseConstructor) {
      this.contextService = contextService;
      this.requestService = requestService;
      this.promiseConstructor = promiseConstructor || Promise;
      this.callOnDispose = [];
      this.contributionSchemas = {};
      this.contributionAssociations = [];
      this.schemasById = {};
      this.filePatternAssociations = [];
      this.registeredSchemasIds = {};
    }
    getRegisteredSchemaIds(filter) {
      return Object.keys(this.registeredSchemasIds).filter((id) => {
        const scheme = URI.parse(id).scheme;
        return scheme !== "schemaservice" && (!filter || filter(scheme));
      });
    }
    get promise() {
      return this.promiseConstructor;
    }
    dispose() {
      while (this.callOnDispose.length > 0) {
        this.callOnDispose.pop()();
      }
    }
    onResourceChange(uri) {
      this.cachedSchemaForResource = void 0;
      let hasChanges = false;
      uri = normalizeId(uri);
      const toWalk = [uri];
      const all = Object.keys(this.schemasById).map((key) => this.schemasById[key]);
      while (toWalk.length) {
        const curr = toWalk.pop();
        for (let i = 0; i < all.length; i++) {
          const handle = all[i];
          if (handle && (handle.uri === curr || handle.dependencies.has(curr))) {
            if (handle.uri !== curr) {
              toWalk.push(handle.uri);
            }
            if (handle.clearSchema()) {
              hasChanges = true;
            }
            all[i] = void 0;
          }
        }
      }
      return hasChanges;
    }
    setSchemaContributions(schemaContributions2) {
      if (schemaContributions2.schemas) {
        const schemas = schemaContributions2.schemas;
        for (const id in schemas) {
          const normalizedId = normalizeId(id);
          this.contributionSchemas[normalizedId] = this.addSchemaHandle(normalizedId, schemas[id]);
        }
      }
      if (Array.isArray(schemaContributions2.schemaAssociations)) {
        const schemaAssociations = schemaContributions2.schemaAssociations;
        for (let schemaAssociation of schemaAssociations) {
          const uris = schemaAssociation.uris.map(normalizeId);
          const association = this.addFilePatternAssociation(schemaAssociation.pattern, schemaAssociation.folderUri, uris);
          this.contributionAssociations.push(association);
        }
      }
    }
    addSchemaHandle(id, unresolvedSchemaContent) {
      const schemaHandle = new SchemaHandle(this, id, unresolvedSchemaContent);
      this.schemasById[id] = schemaHandle;
      return schemaHandle;
    }
    getOrAddSchemaHandle(id, unresolvedSchemaContent) {
      return this.schemasById[id] || this.addSchemaHandle(id, unresolvedSchemaContent);
    }
    addFilePatternAssociation(pattern, folderUri, uris) {
      const fpa = new FilePatternAssociation(pattern, folderUri, uris);
      this.filePatternAssociations.push(fpa);
      return fpa;
    }
    registerExternalSchema(config) {
      const id = normalizeId(config.uri);
      this.registeredSchemasIds[id] = true;
      this.cachedSchemaForResource = void 0;
      if (config.fileMatch && config.fileMatch.length) {
        this.addFilePatternAssociation(config.fileMatch, config.folderUri, [id]);
      }
      return config.schema ? this.addSchemaHandle(id, config.schema) : this.getOrAddSchemaHandle(id);
    }
    clearExternalSchemas() {
      this.schemasById = {};
      this.filePatternAssociations = [];
      this.registeredSchemasIds = {};
      this.cachedSchemaForResource = void 0;
      for (const id in this.contributionSchemas) {
        this.schemasById[id] = this.contributionSchemas[id];
        this.registeredSchemasIds[id] = true;
      }
      for (const contributionAssociation of this.contributionAssociations) {
        this.filePatternAssociations.push(contributionAssociation);
      }
    }
    getResolvedSchema(schemaId) {
      const id = normalizeId(schemaId);
      const schemaHandle = this.schemasById[id];
      if (schemaHandle) {
        return schemaHandle.getResolvedSchema();
      }
      return this.promise.resolve(void 0);
    }
    loadSchema(url) {
      if (!this.requestService) {
        const errorMessage = t("Unable to load schema from '{0}'. No schema request service available", toDisplayString(url));
        return this.promise.resolve(new UnresolvedSchema({}, [errorMessage]));
      }
      if (url.startsWith("http://json-schema.org/")) {
        url = "https" + url.substring(4);
      }
      return this.requestService(url).then((content) => {
        if (!content) {
          const errorMessage = t("Unable to load schema from '{0}': No content.", toDisplayString(url));
          return new UnresolvedSchema({}, [errorMessage]);
        }
        const errors = [];
        if (content.charCodeAt(0) === 65279) {
          errors.push(t("Problem reading content from '{0}': UTF-8 with BOM detected, only UTF 8 is allowed.", toDisplayString(url)));
          content = content.trimStart();
        }
        let schemaContent = {};
        const jsonErrors = [];
        schemaContent = parse$1(content, jsonErrors);
        if (jsonErrors.length) {
          errors.push(t("Unable to parse content from '{0}': Parse error at offset {1}.", toDisplayString(url), jsonErrors[0].offset));
        }
        return new UnresolvedSchema(schemaContent, errors);
      }, (error) => {
        let errorMessage = error.toString();
        const errorSplit = error.toString().split("Error: ");
        if (errorSplit.length > 1) {
          errorMessage = errorSplit[1];
        }
        if (endsWith(errorMessage, ".")) {
          errorMessage = errorMessage.substr(0, errorMessage.length - 1);
        }
        return new UnresolvedSchema({}, [t("Unable to load schema from '{0}': {1}.", toDisplayString(url), errorMessage)]);
      });
    }
    resolveSchemaContent(schemaToResolve, handle) {
      const resolveErrors = schemaToResolve.errors.slice(0);
      const schema = schemaToResolve.schema;
      let schemaDraft = schema.$schema ? normalizeId(schema.$schema) : void 0;
      if (schemaDraft === "http://json-schema.org/draft-03/schema") {
        return this.promise.resolve(new ResolvedSchema({}, [t("Draft-03 schemas are not supported.")], [], schemaDraft));
      }
      let usesUnsupportedFeatures = /* @__PURE__ */ new Set();
      const contextService = this.contextService;
      const findSectionByJSONPointer = (schema2, path) => {
        path = decodeURIComponent(path);
        let current = schema2;
        if (path[0] === "/") {
          path = path.substring(1);
        }
        path.split("/").some((part) => {
          part = part.replace(/~1/g, "/").replace(/~0/g, "~");
          current = current[part];
          return !current;
        });
        return current;
      };
      const findSchemaById = (schema2, handle2, id) => {
        if (!handle2.anchors) {
          handle2.anchors = collectAnchors(schema2);
        }
        return handle2.anchors.get(id);
      };
      const merge = (target, section) => {
        for (const key in section) {
          if (section.hasOwnProperty(key) && key !== "id" && key !== "$id") {
            target[key] = section[key];
          }
        }
      };
      const mergeRef = (target, sourceRoot, sourceHandle, refSegment) => {
        let section;
        if (refSegment === void 0 || refSegment.length === 0) {
          section = sourceRoot;
        } else if (refSegment.charAt(0) === "/") {
          section = findSectionByJSONPointer(sourceRoot, refSegment);
        } else {
          section = findSchemaById(sourceRoot, sourceHandle, refSegment);
        }
        if (section) {
          merge(target, section);
        } else {
          resolveErrors.push(t("$ref '{0}' in '{1}' can not be resolved.", refSegment || "", sourceHandle.uri));
        }
      };
      const resolveExternalLink = (node, uri, refSegment, parentHandle) => {
        if (contextService && !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(uri)) {
          uri = contextService.resolveRelativePath(uri, parentHandle.uri);
        }
        uri = normalizeId(uri);
        const referencedHandle = this.getOrAddSchemaHandle(uri);
        return referencedHandle.getUnresolvedSchema().then((unresolvedSchema) => {
          parentHandle.dependencies.add(uri);
          if (unresolvedSchema.errors.length) {
            const loc = refSegment ? uri + "#" + refSegment : uri;
            resolveErrors.push(t("Problems loading reference '{0}': {1}", loc, unresolvedSchema.errors[0]));
          }
          mergeRef(node, unresolvedSchema.schema, referencedHandle, refSegment);
          return resolveRefs(node, unresolvedSchema.schema, referencedHandle);
        });
      };
      const resolveRefs = (node, parentSchema, parentHandle) => {
        const openPromises = [];
        this.traverseNodes(node, (next) => {
          const seenRefs = /* @__PURE__ */ new Set();
          while (next.$ref) {
            const ref = next.$ref;
            const segments = ref.split("#", 2);
            delete next.$ref;
            if (segments[0].length > 0) {
              openPromises.push(resolveExternalLink(next, segments[0], segments[1], parentHandle));
              return;
            } else {
              if (!seenRefs.has(ref)) {
                const id = segments[1];
                mergeRef(next, parentSchema, parentHandle, id);
                seenRefs.add(ref);
              }
            }
          }
          if (next.$recursiveRef) {
            usesUnsupportedFeatures.add("$recursiveRef");
          }
          if (next.$dynamicRef) {
            usesUnsupportedFeatures.add("$dynamicRef");
          }
        });
        return this.promise.all(openPromises);
      };
      const collectAnchors = (root) => {
        const result = /* @__PURE__ */ new Map();
        this.traverseNodes(root, (next) => {
          const id = next.$id || next.id;
          const anchor = isString(id) && id.charAt(0) === "#" ? id.substring(1) : next.$anchor;
          if (anchor) {
            if (result.has(anchor)) {
              resolveErrors.push(t("Duplicate anchor declaration: '{0}'", anchor));
            } else {
              result.set(anchor, next);
            }
          }
          if (next.$recursiveAnchor) {
            usesUnsupportedFeatures.add("$recursiveAnchor");
          }
          if (next.$dynamicAnchor) {
            usesUnsupportedFeatures.add("$dynamicAnchor");
          }
        });
        return result;
      };
      return resolveRefs(schema, schema, handle).then((_) => {
        let resolveWarnings = [];
        if (usesUnsupportedFeatures.size) {
          resolveWarnings.push(t("The schema uses meta-schema features ({0}) that are not yet supported by the validator.", Array.from(usesUnsupportedFeatures.keys()).join(", ")));
        }
        return new ResolvedSchema(schema, resolveErrors, resolveWarnings, schemaDraft);
      });
    }
    traverseNodes(root, handle) {
      if (!root || typeof root !== "object") {
        return Promise.resolve(null);
      }
      const seen = /* @__PURE__ */ new Set();
      const collectEntries = (...entries) => {
        for (const entry of entries) {
          if (isObject(entry)) {
            toWalk.push(entry);
          }
        }
      };
      const collectMapEntries = (...maps) => {
        for (const map of maps) {
          if (isObject(map)) {
            for (const k in map) {
              const key = k;
              const entry = map[key];
              if (isObject(entry)) {
                toWalk.push(entry);
              }
            }
          }
        }
      };
      const collectArrayEntries = (...arrays) => {
        for (const array of arrays) {
          if (Array.isArray(array)) {
            for (const entry of array) {
              if (isObject(entry)) {
                toWalk.push(entry);
              }
            }
          }
        }
      };
      const collectEntryOrArrayEntries = (items) => {
        if (Array.isArray(items)) {
          for (const entry of items) {
            if (isObject(entry)) {
              toWalk.push(entry);
            }
          }
        } else if (isObject(items)) {
          toWalk.push(items);
        }
      };
      const toWalk = [root];
      let next = toWalk.pop();
      while (next) {
        if (!seen.has(next)) {
          seen.add(next);
          handle(next);
          collectEntries(next.additionalItems, next.additionalProperties, next.not, next.contains, next.propertyNames, next.if, next.then, next.else, next.unevaluatedItems, next.unevaluatedProperties);
          collectMapEntries(next.definitions, next.$defs, next.properties, next.patternProperties, next.dependencies, next.dependentSchemas);
          collectArrayEntries(next.anyOf, next.allOf, next.oneOf, next.prefixItems);
          collectEntryOrArrayEntries(next.items);
        }
        next = toWalk.pop();
      }
    }
    getSchemaFromProperty(resource, document2) {
      if (document2.root?.type === "object") {
        for (const p of document2.root.properties) {
          if (p.keyNode.value === "$schema" && p.valueNode?.type === "string") {
            let schemaId = p.valueNode.value;
            if (this.contextService && !/^\w[\w\d+.-]*:/.test(schemaId)) {
              schemaId = this.contextService.resolveRelativePath(schemaId, resource);
            }
            return schemaId;
          }
        }
      }
      return void 0;
    }
    getAssociatedSchemas(resource) {
      const seen = /* @__PURE__ */ Object.create(null);
      const schemas = [];
      const normalizedResource = normalizeResourceForMatching(resource);
      for (const entry of this.filePatternAssociations) {
        if (entry.matchesPattern(normalizedResource)) {
          for (const schemaId of entry.getURIs()) {
            if (!seen[schemaId]) {
              schemas.push(schemaId);
              seen[schemaId] = true;
            }
          }
        }
      }
      return schemas;
    }
    getSchemaURIsForResource(resource, document2) {
      let schemeId = document2 && this.getSchemaFromProperty(resource, document2);
      if (schemeId) {
        return [schemeId];
      }
      return this.getAssociatedSchemas(resource);
    }
    getSchemaForResource(resource, document2) {
      if (document2) {
        let schemeId = this.getSchemaFromProperty(resource, document2);
        if (schemeId) {
          const id = normalizeId(schemeId);
          return this.getOrAddSchemaHandle(id).getResolvedSchema();
        }
      }
      if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === resource) {
        return this.cachedSchemaForResource.resolvedSchema;
      }
      const schemas = this.getAssociatedSchemas(resource);
      const resolvedSchema = schemas.length > 0 ? this.createCombinedSchema(resource, schemas).getResolvedSchema() : this.promise.resolve(void 0);
      this.cachedSchemaForResource = { resource, resolvedSchema };
      return resolvedSchema;
    }
    createCombinedSchema(resource, schemaIds) {
      if (schemaIds.length === 1) {
        return this.getOrAddSchemaHandle(schemaIds[0]);
      } else {
        const combinedSchemaId = "schemaservice://combinedSchema/" + encodeURIComponent(resource);
        const combinedSchema = {
          allOf: schemaIds.map((schemaId) => ({ $ref: schemaId }))
        };
        return this.addSchemaHandle(combinedSchemaId, combinedSchema);
      }
    }
    getMatchingSchemas(document2, jsonDocument, schema) {
      if (schema) {
        const id = schema.id || "schemaservice://untitled/matchingSchemas/" + idCounter++;
        const handle = this.addSchemaHandle(id, schema);
        return handle.getResolvedSchema().then((resolvedSchema) => {
          return jsonDocument.getMatchingSchemas(resolvedSchema.schema).filter((s) => !s.inverted);
        });
      }
      return this.getSchemaForResource(document2.uri, jsonDocument).then((schema2) => {
        if (schema2) {
          return jsonDocument.getMatchingSchemas(schema2.schema).filter((s) => !s.inverted);
        }
        return [];
      });
    }
  }
  let idCounter = 0;
  function normalizeId(id) {
    try {
      return URI.parse(id).toString(true);
    } catch (e) {
      return id;
    }
  }
  function normalizeResourceForMatching(resource) {
    try {
      return URI.parse(resource).with({ fragment: null, query: null }).toString(true);
    } catch (e) {
      return resource;
    }
  }
  function toDisplayString(url) {
    try {
      const uri = URI.parse(url);
      if (uri.scheme === "file") {
        return uri.fsPath;
      }
    } catch (e) {
    }
    return url;
  }
  function getFoldingRanges(document2, context) {
    const ranges = [];
    const nestingLevels = [];
    const stack = [];
    let prevStart = -1;
    const scanner = createScanner(document2.getText(), false);
    let token = scanner.scan();
    function addRange(range) {
      ranges.push(range);
      nestingLevels.push(stack.length);
    }
    while (token !== 17) {
      switch (token) {
        case 1:
        case 3: {
          const startLine = document2.positionAt(scanner.getTokenOffset()).line;
          const range = { startLine, endLine: startLine, kind: token === 1 ? "object" : "array" };
          stack.push(range);
          break;
        }
        case 2:
        case 4: {
          const kind = token === 2 ? "object" : "array";
          if (stack.length > 0 && stack[stack.length - 1].kind === kind) {
            const range = stack.pop();
            const line = document2.positionAt(scanner.getTokenOffset()).line;
            if (range && line > range.startLine + 1 && prevStart !== range.startLine) {
              range.endLine = line - 1;
              addRange(range);
              prevStart = range.startLine;
            }
          }
          break;
        }
        case 13: {
          const startLine = document2.positionAt(scanner.getTokenOffset()).line;
          const endLine = document2.positionAt(scanner.getTokenOffset() + scanner.getTokenLength()).line;
          if (scanner.getTokenError() === 1 && startLine + 1 < document2.lineCount) {
            scanner.setPosition(document2.offsetAt(Position.create(startLine + 1, 0)));
          } else {
            if (startLine < endLine) {
              addRange({ startLine, endLine, kind: FoldingRangeKind.Comment });
              prevStart = startLine;
            }
          }
          break;
        }
        case 12: {
          const text = document2.getText().substr(scanner.getTokenOffset(), scanner.getTokenLength());
          const m = text.match(/^\/\/\s*#(region\b)|(endregion\b)/);
          if (m) {
            const line = document2.positionAt(scanner.getTokenOffset()).line;
            if (m[1]) {
              const range = { startLine: line, endLine: line, kind: FoldingRangeKind.Region };
              stack.push(range);
            } else {
              let i = stack.length - 1;
              while (i >= 0 && stack[i].kind !== FoldingRangeKind.Region) {
                i--;
              }
              if (i >= 0) {
                const range = stack[i];
                stack.length = i;
                if (line > range.startLine && prevStart !== range.startLine) {
                  range.endLine = line;
                  addRange(range);
                  prevStart = range.startLine;
                }
              }
            }
          }
          break;
        }
      }
      token = scanner.scan();
    }
    const rangeLimit = context && context.rangeLimit;
    if (typeof rangeLimit !== "number" || ranges.length <= rangeLimit) {
      return ranges;
    }
    if (context && context.onRangeLimitExceeded) {
      context.onRangeLimitExceeded(document2.uri);
    }
    const counts = [];
    for (let level of nestingLevels) {
      if (level < 30) {
        counts[level] = (counts[level] || 0) + 1;
      }
    }
    let entries = 0;
    let maxLevel = 0;
    for (let i = 0; i < counts.length; i++) {
      const n = counts[i];
      if (n) {
        if (n + entries > rangeLimit) {
          maxLevel = i;
          break;
        }
        entries += n;
      }
    }
    const result = [];
    for (let i = 0; i < ranges.length; i++) {
      const level = nestingLevels[i];
      if (typeof level === "number") {
        if (level < maxLevel || level === maxLevel && entries++ < rangeLimit) {
          result.push(ranges[i]);
        }
      }
    }
    return result;
  }
  function getSelectionRanges(document2, positions, doc) {
    function getSelectionRange(position) {
      let offset = document2.offsetAt(position);
      let node = doc.getNodeFromOffset(offset, true);
      const result = [];
      while (node) {
        switch (node.type) {
          case "string":
          case "object":
          case "array":
            const cStart = node.offset + 1, cEnd = node.offset + node.length - 1;
            if (cStart < cEnd && offset >= cStart && offset <= cEnd) {
              result.push(newRange(cStart, cEnd));
            }
            result.push(newRange(node.offset, node.offset + node.length));
            break;
          case "number":
          case "boolean":
          case "null":
          case "property":
            result.push(newRange(node.offset, node.offset + node.length));
            break;
        }
        if (node.type === "property" || node.parent && node.parent.type === "array") {
          const afterCommaOffset = getOffsetAfterNextToken(
            node.offset + node.length,
            5
            /* SyntaxKind.CommaToken */
          );
          if (afterCommaOffset !== -1) {
            result.push(newRange(node.offset, afterCommaOffset));
          }
        }
        node = node.parent;
      }
      let current = void 0;
      for (let index = result.length - 1; index >= 0; index--) {
        current = SelectionRange.create(result[index], current);
      }
      if (!current) {
        current = SelectionRange.create(Range.create(position, position));
      }
      return current;
    }
    function newRange(start2, end) {
      return Range.create(document2.positionAt(start2), document2.positionAt(end));
    }
    const scanner = createScanner(document2.getText(), true);
    function getOffsetAfterNextToken(offset, expectedToken) {
      scanner.setPosition(offset);
      let token = scanner.scan();
      if (token === expectedToken) {
        return scanner.getTokenOffset() + scanner.getTokenLength();
      }
      return -1;
    }
    return positions.map(getSelectionRange);
  }
  function format(documentToFormat, formattingOptions, formattingRange) {
    let range = void 0;
    if (formattingRange) {
      const offset = documentToFormat.offsetAt(formattingRange.start);
      const length = documentToFormat.offsetAt(formattingRange.end) - offset;
      range = { offset, length };
    }
    const options = {
      tabSize: formattingOptions ? formattingOptions.tabSize : 4,
      insertSpaces: formattingOptions?.insertSpaces === true,
      insertFinalNewline: formattingOptions?.insertFinalNewline === true,
      eol: "\n",
      keepLines: formattingOptions?.keepLines === true
    };
    return format$2(documentToFormat.getText(), range, options).map((edit) => {
      return TextEdit.replace(Range.create(documentToFormat.positionAt(edit.offset), documentToFormat.positionAt(edit.offset + edit.length)), edit.content);
    });
  }
  var Container;
  (function(Container2) {
    Container2[Container2["Object"] = 0] = "Object";
    Container2[Container2["Array"] = 1] = "Array";
  })(Container || (Container = {}));
  class PropertyTree {
    constructor(propertyName, beginningLineNumber) {
      this.propertyName = propertyName ?? "";
      this.beginningLineNumber = beginningLineNumber;
      this.childrenProperties = [];
      this.lastProperty = false;
      this.noKeyName = false;
    }
    addChildProperty(childProperty) {
      childProperty.parent = this;
      if (this.childrenProperties.length > 0) {
        let insertionIndex = 0;
        if (childProperty.noKeyName) {
          insertionIndex = this.childrenProperties.length;
        } else {
          insertionIndex = binarySearchOnPropertyArray(this.childrenProperties, childProperty, compareProperties);
        }
        if (insertionIndex < 0) {
          insertionIndex = insertionIndex * -1 - 1;
        }
        this.childrenProperties.splice(insertionIndex, 0, childProperty);
      } else {
        this.childrenProperties.push(childProperty);
      }
      return childProperty;
    }
  }
  function compareProperties(propertyTree1, propertyTree2) {
    const propertyName1 = propertyTree1.propertyName.toLowerCase();
    const propertyName2 = propertyTree2.propertyName.toLowerCase();
    if (propertyName1 < propertyName2) {
      return -1;
    } else if (propertyName1 > propertyName2) {
      return 1;
    }
    return 0;
  }
  function binarySearchOnPropertyArray(propertyTreeArray, propertyTree, compare_fn) {
    const propertyName = propertyTree.propertyName.toLowerCase();
    const firstPropertyInArrayName = propertyTreeArray[0].propertyName.toLowerCase();
    const lastPropertyInArrayName = propertyTreeArray[propertyTreeArray.length - 1].propertyName.toLowerCase();
    if (propertyName < firstPropertyInArrayName) {
      return 0;
    }
    if (propertyName > lastPropertyInArrayName) {
      return propertyTreeArray.length;
    }
    let m = 0;
    let n = propertyTreeArray.length - 1;
    while (m <= n) {
      let k = n + m >> 1;
      let cmp = compare_fn(propertyTree, propertyTreeArray[k]);
      if (cmp > 0) {
        m = k + 1;
      } else if (cmp < 0) {
        n = k - 1;
      } else {
        return k;
      }
    }
    return -m - 1;
  }
  function sort(documentToSort, formattingOptions) {
    const options = {
      ...formattingOptions,
      keepLines: false
      // keepLines must be false so that the properties are on separate lines for the sorting
    };
    const formattedJsonString = TextDocument.applyEdits(documentToSort, format(documentToSort, options, void 0));
    const formattedJsonDocument = TextDocument.create("test://test.json", "json", 0, formattedJsonString);
    const jsonPropertyTree = findJsoncPropertyTree(formattedJsonDocument);
    const sortedJsonDocument = sortJsoncDocument(formattedJsonDocument, jsonPropertyTree);
    const edits = format(sortedJsonDocument, options, void 0);
    const sortedAndFormattedJsonDocument = TextDocument.applyEdits(sortedJsonDocument, edits);
    return [TextEdit.replace(Range.create(Position.create(0, 0), documentToSort.positionAt(documentToSort.getText().length)), sortedAndFormattedJsonDocument)];
  }
  function findJsoncPropertyTree(formattedDocument) {
    const formattedString = formattedDocument.getText();
    const scanner = createScanner(formattedString, false);
    let rootTree = new PropertyTree();
    let currentTree = rootTree;
    let currentProperty = rootTree;
    let lastProperty = rootTree;
    let token = void 0;
    let lastTokenLine = 0;
    let numberOfCharactersOnPreviousLines = 0;
    let lastNonTriviaNonCommentToken = void 0;
    let secondToLastNonTriviaNonCommentToken = void 0;
    let lineOfLastNonTriviaNonCommentToken = -1;
    let endIndexOfLastNonTriviaNonCommentToken = -1;
    let beginningLineNumber = 0;
    let endLineNumber = 0;
    let currentContainerStack = [];
    let updateLastPropertyEndLineNumber = false;
    let updateBeginningLineNumber = false;
    while ((token = scanner.scan()) !== 17) {
      if (updateLastPropertyEndLineNumber === true && token !== 14 && token !== 15 && token !== 12 && token !== 13 && currentProperty.endLineNumber === void 0) {
        let endLineNumber2 = scanner.getTokenStartLine();
        if (secondToLastNonTriviaNonCommentToken === 2 || secondToLastNonTriviaNonCommentToken === 4) {
          lastProperty.endLineNumber = endLineNumber2 - 1;
        } else {
          currentProperty.endLineNumber = endLineNumber2 - 1;
        }
        beginningLineNumber = endLineNumber2;
        updateLastPropertyEndLineNumber = false;
      }
      if (updateBeginningLineNumber === true && token !== 14 && token !== 15 && token !== 12 && token !== 13) {
        beginningLineNumber = scanner.getTokenStartLine();
        updateBeginningLineNumber = false;
      }
      if (scanner.getTokenStartLine() !== lastTokenLine) {
        for (let i = lastTokenLine; i < scanner.getTokenStartLine(); i++) {
          const lengthOfLine = formattedDocument.getText(Range.create(Position.create(i, 0), Position.create(i + 1, 0))).length;
          numberOfCharactersOnPreviousLines = numberOfCharactersOnPreviousLines + lengthOfLine;
        }
        lastTokenLine = scanner.getTokenStartLine();
      }
      switch (token) {
        // When a string is found, if it follows an open brace or a comma token and it is within an object, then it corresponds to a key name, not a simple string
        case 10: {
          if (lastNonTriviaNonCommentToken === void 0 || lastNonTriviaNonCommentToken === 1 || lastNonTriviaNonCommentToken === 5 && currentContainerStack[currentContainerStack.length - 1] === Container.Object) {
            const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
            lastProperty = currentProperty;
            currentProperty = currentTree.addChildProperty(childProperty);
          }
          break;
        }
        // When the token is an open bracket, then we enter into an array
        case 3: {
          if (rootTree.beginningLineNumber === void 0) {
            rootTree.beginningLineNumber = scanner.getTokenStartLine();
          }
          if (currentContainerStack[currentContainerStack.length - 1] === Container.Object) {
            currentTree = currentProperty;
          } else if (currentContainerStack[currentContainerStack.length - 1] === Container.Array) {
            const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
            childProperty.noKeyName = true;
            lastProperty = currentProperty;
            currentProperty = currentTree.addChildProperty(childProperty);
            currentTree = currentProperty;
          }
          currentContainerStack.push(Container.Array);
          currentProperty.type = Container.Array;
          beginningLineNumber = scanner.getTokenStartLine();
          beginningLineNumber++;
          break;
        }
        // When the token is an open brace, then we enter into an object
        case 1: {
          if (rootTree.beginningLineNumber === void 0) {
            rootTree.beginningLineNumber = scanner.getTokenStartLine();
          } else if (currentContainerStack[currentContainerStack.length - 1] === Container.Array) {
            const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
            childProperty.noKeyName = true;
            lastProperty = currentProperty;
            currentProperty = currentTree.addChildProperty(childProperty);
          }
          currentProperty.type = Container.Object;
          currentContainerStack.push(Container.Object);
          currentTree = currentProperty;
          beginningLineNumber = scanner.getTokenStartLine();
          beginningLineNumber++;
          break;
        }
        case 4: {
          endLineNumber = scanner.getTokenStartLine();
          currentContainerStack.pop();
          if (currentProperty.endLineNumber === void 0 && (lastNonTriviaNonCommentToken === 2 || lastNonTriviaNonCommentToken === 4)) {
            currentProperty.endLineNumber = endLineNumber - 1;
            currentProperty.lastProperty = true;
            currentProperty.lineWhereToAddComma = lineOfLastNonTriviaNonCommentToken;
            currentProperty.indexWhereToAddComa = endIndexOfLastNonTriviaNonCommentToken;
            lastProperty = currentProperty;
            currentProperty = currentProperty ? currentProperty.parent : void 0;
            currentTree = currentProperty;
          }
          rootTree.endLineNumber = endLineNumber;
          beginningLineNumber = endLineNumber + 1;
          break;
        }
        case 2: {
          endLineNumber = scanner.getTokenStartLine();
          currentContainerStack.pop();
          if (lastNonTriviaNonCommentToken !== 1) {
            if (currentProperty.endLineNumber === void 0) {
              currentProperty.endLineNumber = endLineNumber - 1;
              currentProperty.lastProperty = true;
              currentProperty.lineWhereToAddComma = lineOfLastNonTriviaNonCommentToken;
              currentProperty.indexWhereToAddComa = endIndexOfLastNonTriviaNonCommentToken;
            }
            lastProperty = currentProperty;
            currentProperty = currentProperty ? currentProperty.parent : void 0;
            currentTree = currentProperty;
          }
          rootTree.endLineNumber = scanner.getTokenStartLine();
          beginningLineNumber = endLineNumber + 1;
          break;
        }
        case 5: {
          endLineNumber = scanner.getTokenStartLine();
          if (currentProperty.endLineNumber === void 0 && (currentContainerStack[currentContainerStack.length - 1] === Container.Object || currentContainerStack[currentContainerStack.length - 1] === Container.Array && (lastNonTriviaNonCommentToken === 2 || lastNonTriviaNonCommentToken === 4))) {
            currentProperty.endLineNumber = endLineNumber;
            currentProperty.commaIndex = scanner.getTokenOffset() - numberOfCharactersOnPreviousLines;
            currentProperty.commaLine = endLineNumber;
          }
          if (lastNonTriviaNonCommentToken === 2 || lastNonTriviaNonCommentToken === 4) {
            lastProperty = currentProperty;
            currentProperty = currentProperty ? currentProperty.parent : void 0;
            currentTree = currentProperty;
          }
          beginningLineNumber = endLineNumber + 1;
          break;
        }
        case 13: {
          if (lastNonTriviaNonCommentToken === 5 && lineOfLastNonTriviaNonCommentToken === scanner.getTokenStartLine() && (currentContainerStack[currentContainerStack.length - 1] === Container.Array && (secondToLastNonTriviaNonCommentToken === 2 || secondToLastNonTriviaNonCommentToken === 4) || currentContainerStack[currentContainerStack.length - 1] === Container.Object)) {
            if (currentContainerStack[currentContainerStack.length - 1] === Container.Array && (secondToLastNonTriviaNonCommentToken === 2 || secondToLastNonTriviaNonCommentToken === 4) || currentContainerStack[currentContainerStack.length - 1] === Container.Object) {
              currentProperty.endLineNumber = void 0;
              updateLastPropertyEndLineNumber = true;
            }
          }
          if ((lastNonTriviaNonCommentToken === 1 || lastNonTriviaNonCommentToken === 3) && lineOfLastNonTriviaNonCommentToken === scanner.getTokenStartLine()) {
            updateBeginningLineNumber = true;
          }
          break;
        }
      }
      if (token !== 14 && token !== 13 && token !== 12 && token !== 15) {
        secondToLastNonTriviaNonCommentToken = lastNonTriviaNonCommentToken;
        lastNonTriviaNonCommentToken = token;
        lineOfLastNonTriviaNonCommentToken = scanner.getTokenStartLine();
        endIndexOfLastNonTriviaNonCommentToken = scanner.getTokenOffset() + scanner.getTokenLength() - numberOfCharactersOnPreviousLines;
      }
    }
    return rootTree;
  }
  function sortJsoncDocument(jsonDocument, propertyTree) {
    if (propertyTree.childrenProperties.length === 0) {
      return jsonDocument;
    }
    const sortedJsonDocument = TextDocument.create("test://test.json", "json", 0, jsonDocument.getText());
    const queueToSort = [];
    updateSortingQueue(queueToSort, propertyTree, propertyTree.beginningLineNumber);
    while (queueToSort.length > 0) {
      const dataToSort = queueToSort.shift();
      const propertyTreeArray = dataToSort.propertyTreeArray;
      let beginningLineNumber = dataToSort.beginningLineNumber;
      for (let i = 0; i < propertyTreeArray.length; i++) {
        const propertyTree2 = propertyTreeArray[i];
        const range = Range.create(Position.create(propertyTree2.beginningLineNumber, 0), Position.create(propertyTree2.endLineNumber + 1, 0));
        const jsonContentToReplace = jsonDocument.getText(range);
        const jsonDocumentToReplace = TextDocument.create("test://test.json", "json", 0, jsonContentToReplace);
        if (propertyTree2.lastProperty === true && i !== propertyTreeArray.length - 1) {
          const lineWhereToAddComma = propertyTree2.lineWhereToAddComma - propertyTree2.beginningLineNumber;
          const indexWhereToAddComma = propertyTree2.indexWhereToAddComa;
          const edit2 = {
            range: Range.create(Position.create(lineWhereToAddComma, indexWhereToAddComma), Position.create(lineWhereToAddComma, indexWhereToAddComma)),
            text: ","
          };
          TextDocument.update(jsonDocumentToReplace, [edit2], 1);
        } else if (propertyTree2.lastProperty === false && i === propertyTreeArray.length - 1) {
          const commaIndex = propertyTree2.commaIndex;
          const commaLine = propertyTree2.commaLine;
          const lineWhereToRemoveComma = commaLine - propertyTree2.beginningLineNumber;
          const edit2 = {
            range: Range.create(Position.create(lineWhereToRemoveComma, commaIndex), Position.create(lineWhereToRemoveComma, commaIndex + 1)),
            text: ""
          };
          TextDocument.update(jsonDocumentToReplace, [edit2], 1);
        }
        const length = propertyTree2.endLineNumber - propertyTree2.beginningLineNumber + 1;
        const edit = {
          range: Range.create(Position.create(beginningLineNumber, 0), Position.create(beginningLineNumber + length, 0)),
          text: jsonDocumentToReplace.getText()
        };
        TextDocument.update(sortedJsonDocument, [edit], 1);
        updateSortingQueue(queueToSort, propertyTree2, beginningLineNumber);
        beginningLineNumber = beginningLineNumber + length;
      }
    }
    return sortedJsonDocument;
  }
  function updateSortingQueue(queue, propertyTree, beginningLineNumber) {
    if (propertyTree.childrenProperties.length === 0) {
      return;
    }
    if (propertyTree.type === Container.Object) {
      let minimumBeginningLineNumber = Infinity;
      for (const childProperty of propertyTree.childrenProperties) {
        if (childProperty.beginningLineNumber < minimumBeginningLineNumber) {
          minimumBeginningLineNumber = childProperty.beginningLineNumber;
        }
      }
      const diff = minimumBeginningLineNumber - propertyTree.beginningLineNumber;
      beginningLineNumber = beginningLineNumber + diff;
      queue.push(new SortingRange(beginningLineNumber, propertyTree.childrenProperties));
    } else if (propertyTree.type === Container.Array) {
      updateSortingQueueForArrayProperties(queue, propertyTree, beginningLineNumber);
    }
  }
  function updateSortingQueueForArrayProperties(queue, propertyTree, beginningLineNumber) {
    for (const subObject of propertyTree.childrenProperties) {
      if (subObject.type === Container.Object) {
        let minimumBeginningLineNumber = Infinity;
        for (const childProperty of subObject.childrenProperties) {
          if (childProperty.beginningLineNumber < minimumBeginningLineNumber) {
            minimumBeginningLineNumber = childProperty.beginningLineNumber;
          }
        }
        const diff = minimumBeginningLineNumber - subObject.beginningLineNumber;
        queue.push(new SortingRange(beginningLineNumber + subObject.beginningLineNumber - propertyTree.beginningLineNumber + diff, subObject.childrenProperties));
      }
      if (subObject.type === Container.Array) {
        updateSortingQueueForArrayProperties(queue, subObject, beginningLineNumber + subObject.beginningLineNumber - propertyTree.beginningLineNumber);
      }
    }
  }
  class SortingRange {
    constructor(beginningLineNumber, propertyTreeArray) {
      this.beginningLineNumber = beginningLineNumber;
      this.propertyTreeArray = propertyTreeArray;
    }
  }
  function findLinks(document2, doc) {
    const links = [];
    doc.visit((node) => {
      if (node.type === "property" && node.keyNode.value === "$ref" && node.valueNode?.type === "string") {
        const path = node.valueNode.value;
        const targetNode = findTargetNode(doc, path);
        if (targetNode) {
          const targetPos = document2.positionAt(targetNode.offset);
          links.push({
            target: `${document2.uri}#${targetPos.line + 1},${targetPos.character + 1}`,
            range: createRange(document2, node.valueNode)
          });
        }
      }
      return true;
    });
    return Promise.resolve(links);
  }
  function createRange(document2, node) {
    return Range.create(document2.positionAt(node.offset + 1), document2.positionAt(node.offset + node.length - 1));
  }
  function findTargetNode(doc, path) {
    const tokens = parseJSONPointer(path);
    if (!tokens) {
      return null;
    }
    return findNode(tokens, doc.root);
  }
  function findNode(pointer, node) {
    if (!node) {
      return null;
    }
    if (pointer.length === 0) {
      return node;
    }
    const token = pointer.shift();
    if (node && node.type === "object") {
      const propertyNode = node.properties.find((propertyNode2) => propertyNode2.keyNode.value === token);
      if (!propertyNode) {
        return null;
      }
      return findNode(pointer, propertyNode.valueNode);
    } else if (node && node.type === "array") {
      if (token.match(/^(0|[1-9][0-9]*)$/)) {
        const index = Number.parseInt(token);
        const arrayItem = node.items[index];
        if (!arrayItem) {
          return null;
        }
        return findNode(pointer, arrayItem);
      }
    }
    return null;
  }
  function parseJSONPointer(path) {
    if (path === "#") {
      return [];
    }
    if (path[0] !== "#" || path[1] !== "/") {
      return null;
    }
    return path.substring(2).split(/\//).map(unescape);
  }
  function unescape(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  function getLanguageService(params) {
    const promise = params.promiseConstructor || Promise;
    const jsonSchemaService = new JSONSchemaService(params.schemaRequestService, params.workspaceContext, promise);
    jsonSchemaService.setSchemaContributions(schemaContributions);
    const jsonCompletion = new JSONCompletion(jsonSchemaService, params.contributions, promise, params.clientCapabilities);
    const jsonHover = new JSONHover(jsonSchemaService, params.contributions, promise);
    const jsonDocumentSymbols = new JSONDocumentSymbols(jsonSchemaService);
    const jsonValidation = new JSONValidation(jsonSchemaService, promise);
    return {
      configure: (settings) => {
        jsonSchemaService.clearExternalSchemas();
        settings.schemas?.forEach(jsonSchemaService.registerExternalSchema.bind(jsonSchemaService));
        jsonValidation.configure(settings);
      },
      resetSchema: (uri) => jsonSchemaService.onResourceChange(uri),
      doValidation: jsonValidation.doValidation.bind(jsonValidation),
      getLanguageStatus: jsonValidation.getLanguageStatus.bind(jsonValidation),
      parseJSONDocument: (document2) => parse(document2, { collectComments: true }),
      newJSONDocument: (root, diagnostics) => newJSONDocument(root, diagnostics),
      getMatchingSchemas: jsonSchemaService.getMatchingSchemas.bind(jsonSchemaService),
      doResolve: jsonCompletion.doResolve.bind(jsonCompletion),
      doComplete: jsonCompletion.doComplete.bind(jsonCompletion),
      findDocumentSymbols: jsonDocumentSymbols.findDocumentSymbols.bind(jsonDocumentSymbols),
      findDocumentSymbols2: jsonDocumentSymbols.findDocumentSymbols2.bind(jsonDocumentSymbols),
      findDocumentColors: jsonDocumentSymbols.findDocumentColors.bind(jsonDocumentSymbols),
      getColorPresentations: jsonDocumentSymbols.getColorPresentations.bind(jsonDocumentSymbols),
      doHover: jsonHover.doHover.bind(jsonHover),
      getFoldingRanges,
      getSelectionRanges,
      findDefinition: () => Promise.resolve([]),
      findLinks,
      format: (document2, range, options) => format(document2, options, range),
      sort: (document2, options) => sort(document2, options)
    };
  }
  let defaultSchemaRequestService;
  if (typeof fetch !== "undefined") {
    defaultSchemaRequestService = function(url) {
      return fetch(url).then((response) => response.text());
    };
  }
  class JSONWorker {
    constructor(ctx, createData) {
      this._ctx = ctx;
      this._languageSettings = createData.languageSettings;
      this._languageId = createData.languageId;
      this._languageService = getLanguageService({
        workspaceContext: {
          resolveRelativePath: (relativePath, resource) => {
            const base = resource.substr(0, resource.lastIndexOf("/") + 1);
            return resolvePath(base, relativePath);
          }
        },
        schemaRequestService: createData.enableSchemaRequest ? defaultSchemaRequestService : void 0,
        clientCapabilities: ClientCapabilities.LATEST
      });
      this._languageService.configure(this._languageSettings);
    }
    async doValidation(uri) {
      let document2 = this._getTextDocument(uri);
      if (document2) {
        let jsonDocument = this._languageService.parseJSONDocument(document2);
        return this._languageService.doValidation(document2, jsonDocument, this._languageSettings);
      }
      return Promise.resolve([]);
    }
    async doComplete(uri, position) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return null;
      }
      let jsonDocument = this._languageService.parseJSONDocument(document2);
      return this._languageService.doComplete(document2, position, jsonDocument);
    }
    async doResolve(item) {
      return this._languageService.doResolve(item);
    }
    async doHover(uri, position) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return null;
      }
      let jsonDocument = this._languageService.parseJSONDocument(document2);
      return this._languageService.doHover(document2, position, jsonDocument);
    }
    async format(uri, range, options) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return [];
      }
      let textEdits = this._languageService.format(document2, range, options);
      return Promise.resolve(textEdits);
    }
    async resetSchema(uri) {
      return Promise.resolve(this._languageService.resetSchema(uri));
    }
    async findDocumentSymbols(uri) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return [];
      }
      let jsonDocument = this._languageService.parseJSONDocument(document2);
      let symbols = this._languageService.findDocumentSymbols2(document2, jsonDocument);
      return Promise.resolve(symbols);
    }
    async findDocumentColors(uri) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return [];
      }
      let jsonDocument = this._languageService.parseJSONDocument(document2);
      let colorSymbols = this._languageService.findDocumentColors(document2, jsonDocument);
      return Promise.resolve(colorSymbols);
    }
    async getColorPresentations(uri, color, range) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return [];
      }
      let jsonDocument = this._languageService.parseJSONDocument(document2);
      let colorPresentations = this._languageService.getColorPresentations(
        document2,
        jsonDocument,
        color,
        range
      );
      return Promise.resolve(colorPresentations);
    }
    async getFoldingRanges(uri, context) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return [];
      }
      let ranges = this._languageService.getFoldingRanges(document2, context);
      return Promise.resolve(ranges);
    }
    async getSelectionRanges(uri, positions) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return [];
      }
      let jsonDocument = this._languageService.parseJSONDocument(document2);
      let ranges = this._languageService.getSelectionRanges(document2, positions, jsonDocument);
      return Promise.resolve(ranges);
    }
    async parseJSONDocument(uri) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return null;
      }
      let jsonDocument = this._languageService.parseJSONDocument(document2);
      return Promise.resolve(jsonDocument);
    }
    async getMatchingSchemas(uri) {
      let document2 = this._getTextDocument(uri);
      if (!document2) {
        return [];
      }
      let jsonDocument = this._languageService.parseJSONDocument(document2);
      return Promise.resolve(this._languageService.getMatchingSchemas(document2, jsonDocument));
    }
    _getTextDocument(uri) {
      let models = this._ctx.getMirrorModels();
      for (let model of models) {
        if (model.uri.toString() === uri) {
          return TextDocument.create(
            uri,
            this._languageId,
            model.version,
            model.getValue()
          );
        }
      }
      return null;
    }
  }
  const Slash = "/".charCodeAt(0);
  const Dot = ".".charCodeAt(0);
  function isAbsolutePath(path) {
    return path.charCodeAt(0) === Slash;
  }
  function resolvePath(uriString, path) {
    if (isAbsolutePath(path)) {
      const uri = URI.parse(uriString);
      const parts = path.split("/");
      return uri.with({ path: normalizePath(parts) }).toString();
    }
    return joinPath(uriString, path);
  }
  function normalizePath(parts) {
    const newParts = [];
    for (const part of parts) {
      if (part.length === 0 || part.length === 1 && part.charCodeAt(0) === Dot) ;
      else if (part.length === 2 && part.charCodeAt(0) === Dot && part.charCodeAt(1) === Dot) {
        newParts.pop();
      } else {
        newParts.push(part);
      }
    }
    if (parts.length > 1 && parts[parts.length - 1].length === 0) {
      newParts.push("");
    }
    let res = newParts.join("/");
    if (parts[0].length === 0) {
      res = "/" + res;
    }
    return res;
  }
  function joinPath(uriString, ...paths) {
    const uri = URI.parse(uriString);
    const parts = uri.path.split("/");
    for (let path of paths) {
      parts.push(...path.split("/"));
    }
    return uri.with({ path: normalizePath(parts) }).toString();
  }
  self.onmessage = () => {
    initialize((ctx, createData) => {
      return new JSONWorker(ctx, createData);
    });
  };
})();
