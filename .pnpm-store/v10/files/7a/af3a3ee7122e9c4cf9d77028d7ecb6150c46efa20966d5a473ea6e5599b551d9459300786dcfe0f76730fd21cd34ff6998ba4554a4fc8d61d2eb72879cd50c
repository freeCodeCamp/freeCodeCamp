/**
 * workerpool.js
 * https://github.com/josdejong/workerpool
 *
 * Offload tasks to a pool of workers on node.js and in the browser.
 *
 * @version 6.5.1
 * @date    2023-10-11
 *
 * @license
 * Copyright (C) 2014-2022 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("workerpool", [], factory);
	else if(typeof exports === 'object')
		exports["workerpool"] = factory();
	else
		root["workerpool"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 345:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Promise = __webpack_require__(219);
var WorkerHandler = __webpack_require__(751);
var environment = __webpack_require__(828);
var DebugPortAllocator = __webpack_require__(833);
var DEBUG_PORT_ALLOCATOR = new DebugPortAllocator();
/**
 * A pool to manage workers
 * @param {String} [script]   Optional worker script
 * @param {WorkerPoolOptions} [options]  See docs
 * @constructor
 */
function Pool(script, options) {
  if (typeof script === 'string') {
    this.script = script || null;
  } else {
    this.script = null;
    options = script;
  }
  this.workers = []; // queue with all workers
  this.tasks = []; // queue with tasks awaiting execution

  options = options || {};
  this.forkArgs = Object.freeze(options.forkArgs || []);
  this.forkOpts = Object.freeze(options.forkOpts || {});
  this.workerOpts = Object.freeze(options.workerOpts || {});
  this.workerThreadOpts = Object.freeze(options.workerThreadOpts || {});
  this.debugPortStart = options.debugPortStart || 43210;
  this.nodeWorker = options.nodeWorker;
  this.workerType = options.workerType || options.nodeWorker || 'auto';
  this.maxQueueSize = options.maxQueueSize || Infinity;
  this.workerTerminateTimeout = options.workerTerminateTimeout || 1000;
  this.onCreateWorker = options.onCreateWorker || function () {
    return null;
  };
  this.onTerminateWorker = options.onTerminateWorker || function () {
    return null;
  };

  // configuration
  if (options && 'maxWorkers' in options) {
    validateMaxWorkers(options.maxWorkers);
    this.maxWorkers = options.maxWorkers;
  } else {
    this.maxWorkers = Math.max((environment.cpus || 4) - 1, 1);
  }
  if (options && 'minWorkers' in options) {
    if (options.minWorkers === 'max') {
      this.minWorkers = this.maxWorkers;
    } else {
      validateMinWorkers(options.minWorkers);
      this.minWorkers = options.minWorkers;
      this.maxWorkers = Math.max(this.minWorkers, this.maxWorkers); // in case minWorkers is higher than maxWorkers
    }

    this._ensureMinWorkers();
  }
  this._boundNext = this._next.bind(this);
  if (this.workerType === 'thread') {
    WorkerHandler.ensureWorkerThreads();
  }
}

/**
 * Execute a function on a worker.
 *
 * Example usage:
 *
 *   var pool = new Pool()
 *
 *   // call a function available on the worker
 *   pool.exec('fibonacci', [6])
 *
 *   // offload a function
 *   function add(a, b) {
 *     return a + b
 *   };
 *   pool.exec(add, [2, 4])
 *       .then(function (result) {
 *         console.log(result); // outputs 6
 *       })
 *       .catch(function(error) {
 *         console.log(error);
 *       });
 *
 * @param {String | Function} method  Function name or function.
 *                                    If `method` is a string, the corresponding
 *                                    method on the worker will be executed
 *                                    If `method` is a Function, the function
 *                                    will be stringified and executed via the
 *                                    workers built-in function `run(fn, args)`.
 * @param {Array} [params]  Function arguments applied when calling the function
 * @param {ExecOptions} [options]  Options object
 * @return {Promise.<*, Error>} result
 */
Pool.prototype.exec = function (method, params, options) {
  // validate type of arguments
  if (params && !Array.isArray(params)) {
    throw new TypeError('Array expected as argument "params"');
  }
  if (typeof method === 'string') {
    var resolver = Promise.defer();
    if (this.tasks.length >= this.maxQueueSize) {
      throw new Error('Max queue size of ' + this.maxQueueSize + ' reached');
    }

    // add a new task to the queue
    var tasks = this.tasks;
    var task = {
      method: method,
      params: params,
      resolver: resolver,
      timeout: null,
      options: options
    };
    tasks.push(task);

    // replace the timeout method of the Promise with our own,
    // which starts the timer as soon as the task is actually started
    var originalTimeout = resolver.promise.timeout;
    resolver.promise.timeout = function timeout(delay) {
      if (tasks.indexOf(task) !== -1) {
        // task is still queued -> start the timer later on
        task.timeout = delay;
        return resolver.promise;
      } else {
        // task is already being executed -> start timer immediately
        return originalTimeout.call(resolver.promise, delay);
      }
    };

    // trigger task execution
    this._next();
    return resolver.promise;
  } else if (typeof method === 'function') {
    // send stringified function and function arguments to worker
    return this.exec('run', [String(method), params]);
  } else {
    throw new TypeError('Function or string expected as argument "method"');
  }
};

/**
 * Create a proxy for current worker. Returns an object containing all
 * methods available on the worker. The methods always return a promise.
 *
 * @return {Promise.<Object, Error>} proxy
 */
Pool.prototype.proxy = function () {
  if (arguments.length > 0) {
    throw new Error('No arguments expected');
  }
  var pool = this;
  return this.exec('methods').then(function (methods) {
    var proxy = {};
    methods.forEach(function (method) {
      proxy[method] = function () {
        return pool.exec(method, Array.prototype.slice.call(arguments));
      };
    });
    return proxy;
  });
};

/**
 * Creates new array with the results of calling a provided callback function
 * on every element in this array.
 * @param {Array} array
 * @param {function} callback  Function taking two arguments:
 *                             `callback(currentValue, index)`
 * @return {Promise.<Array>} Returns a promise which resolves  with an Array
 *                           containing the results of the callback function
 *                           executed for each of the array elements.
 */
/* TODO: implement map
Pool.prototype.map = function (array, callback) {
};
*/

/**
 * Grab the first task from the queue, find a free worker, and assign the
 * worker to the task.
 * @protected
 */
Pool.prototype._next = function () {
  if (this.tasks.length > 0) {
    // there are tasks in the queue

    // find an available worker
    var worker = this._getWorker();
    if (worker) {
      // get the first task from the queue
      var me = this;
      var task = this.tasks.shift();

      // check if the task is still pending (and not cancelled -> promise rejected)
      if (task.resolver.promise.pending) {
        // send the request to the worker
        var promise = worker.exec(task.method, task.params, task.resolver, task.options).then(me._boundNext)["catch"](function () {
          // if the worker crashed and terminated, remove it from the pool
          if (worker.terminated) {
            return me._removeWorker(worker);
          }
        }).then(function () {
          me._next(); // trigger next task in the queue
        });

        // start queued timer now
        if (typeof task.timeout === 'number') {
          promise.timeout(task.timeout);
        }
      } else {
        // The task taken was already complete (either rejected or resolved), so just trigger next task in the queue
        me._next();
      }
    }
  }
};

/**
 * Get an available worker. If no worker is available and the maximum number
 * of workers isn't yet reached, a new worker will be created and returned.
 * If no worker is available and the maximum number of workers is reached,
 * null will be returned.
 *
 * @return {WorkerHandler | null} worker
 * @private
 */
Pool.prototype._getWorker = function () {
  // find a non-busy worker
  var workers = this.workers;
  for (var i = 0; i < workers.length; i++) {
    var worker = workers[i];
    if (worker.busy() === false) {
      return worker;
    }
  }
  if (workers.length < this.maxWorkers) {
    // create a new worker
    worker = this._createWorkerHandler();
    workers.push(worker);
    return worker;
  }
  return null;
};

/**
 * Remove a worker from the pool.
 * Attempts to terminate worker if not already terminated, and ensures the minimum
 * pool size is met.
 * @param {WorkerHandler} worker
 * @return {Promise<WorkerHandler>}
 * @protected
 */
Pool.prototype._removeWorker = function (worker) {
  var me = this;
  DEBUG_PORT_ALLOCATOR.releasePort(worker.debugPort);
  // _removeWorker will call this, but we need it to be removed synchronously
  this._removeWorkerFromList(worker);
  // If minWorkers set, spin up new workers to replace the crashed ones
  this._ensureMinWorkers();
  // terminate the worker (if not already terminated)
  return new Promise(function (resolve, reject) {
    worker.terminate(false, function (err) {
      me.onTerminateWorker({
        forkArgs: worker.forkArgs,
        forkOpts: worker.forkOpts,
        workerThreadOpts: worker.workerThreadOpts,
        script: worker.script
      });
      if (err) {
        reject(err);
      } else {
        resolve(worker);
      }
    });
  });
};

/**
 * Remove a worker from the pool list.
 * @param {WorkerHandler} worker
 * @protected
 */
Pool.prototype._removeWorkerFromList = function (worker) {
  // remove from the list with workers
  var index = this.workers.indexOf(worker);
  if (index !== -1) {
    this.workers.splice(index, 1);
  }
};

/**
 * Close all active workers. Tasks currently being executed will be finished first.
 * @param {boolean} [force=false]   If false (default), the workers are terminated
 *                                  after finishing all tasks currently in
 *                                  progress. If true, the workers will be
 *                                  terminated immediately.
 * @param {number} [timeout]        If provided and non-zero, worker termination promise will be rejected
 *                                  after timeout if worker process has not been terminated.
 * @return {Promise.<void, Error>}
 */
Pool.prototype.terminate = function (force, timeout) {
  var me = this;

  // cancel any pending tasks
  this.tasks.forEach(function (task) {
    task.resolver.reject(new Error('Pool terminated'));
  });
  this.tasks.length = 0;
  var f = function f(worker) {
    DEBUG_PORT_ALLOCATOR.releasePort(worker.debugPort);
    this._removeWorkerFromList(worker);
  };
  var removeWorker = f.bind(this);
  var promises = [];
  var workers = this.workers.slice();
  workers.forEach(function (worker) {
    var termPromise = worker.terminateAndNotify(force, timeout).then(removeWorker).always(function () {
      me.onTerminateWorker({
        forkArgs: worker.forkArgs,
        forkOpts: worker.forkOpts,
        workerThreadOpts: worker.workerThreadOpts,
        script: worker.script
      });
    });
    promises.push(termPromise);
  });
  return Promise.all(promises);
};

/**
 * Retrieve statistics on tasks and workers.
 * @return {{totalWorkers: number, busyWorkers: number, idleWorkers: number, pendingTasks: number, activeTasks: number}} Returns an object with statistics
 */
Pool.prototype.stats = function () {
  var totalWorkers = this.workers.length;
  var busyWorkers = this.workers.filter(function (worker) {
    return worker.busy();
  }).length;
  return {
    totalWorkers: totalWorkers,
    busyWorkers: busyWorkers,
    idleWorkers: totalWorkers - busyWorkers,
    pendingTasks: this.tasks.length,
    activeTasks: busyWorkers
  };
};

/**
 * Ensures that a minimum of minWorkers is up and running
 * @protected
 */
Pool.prototype._ensureMinWorkers = function () {
  if (this.minWorkers) {
    for (var i = this.workers.length; i < this.minWorkers; i++) {
      this.workers.push(this._createWorkerHandler());
    }
  }
};

/**
 * Helper function to create a new WorkerHandler and pass all options.
 * @return {WorkerHandler}
 * @private
 */
Pool.prototype._createWorkerHandler = function () {
  var overriddenParams = this.onCreateWorker({
    forkArgs: this.forkArgs,
    forkOpts: this.forkOpts,
    workerOpts: this.workerOpts,
    workerThreadOpts: this.workerThreadOpts,
    script: this.script
  }) || {};
  return new WorkerHandler(overriddenParams.script || this.script, {
    forkArgs: overriddenParams.forkArgs || this.forkArgs,
    forkOpts: overriddenParams.forkOpts || this.forkOpts,
    workerOpts: overriddenParams.workerOpts || this.workerOpts,
    workerThreadOpts: overriddenParams.workerThreadOpts || this.workerThreadOpts,
    debugPort: DEBUG_PORT_ALLOCATOR.nextAvailableStartingAt(this.debugPortStart),
    workerType: this.workerType,
    workerTerminateTimeout: this.workerTerminateTimeout
  });
};

/**
 * Ensure that the maxWorkers option is an integer >= 1
 * @param {*} maxWorkers
 * @returns {boolean} returns true maxWorkers has a valid value
 */
function validateMaxWorkers(maxWorkers) {
  if (!isNumber(maxWorkers) || !isInteger(maxWorkers) || maxWorkers < 1) {
    throw new TypeError('Option maxWorkers must be an integer number >= 1');
  }
}

/**
 * Ensure that the minWorkers option is an integer >= 0
 * @param {*} minWorkers
 * @returns {boolean} returns true when minWorkers has a valid value
 */
function validateMinWorkers(minWorkers) {
  if (!isNumber(minWorkers) || !isInteger(minWorkers) || minWorkers < 0) {
    throw new TypeError('Option minWorkers must be an integer number >= 0');
  }
}

/**
 * Test whether a variable is a number
 * @param {*} value
 * @returns {boolean} returns true when value is a number
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Test whether a number is an integer
 * @param {number} value
 * @returns {boolean} Returns true if value is an integer
 */
function isInteger(value) {
  return Math.round(value) == value;
}
module.exports = Pool;

/***/ }),

/***/ 219:
/***/ (function(module) {

"use strict";


/**
 * Promise
 *
 * Inspired by https://gist.github.com/RubaXa/8501359 from RubaXa <trash@rubaxa.org>
 *
 * @param {Function} handler   Called as handler(resolve: Function, reject: Function)
 * @param {Promise} [parent]   Parent promise for propagation of cancel and timeout
 */
function Promise(handler, parent) {
  var me = this;
  if (!(this instanceof Promise)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }
  if (typeof handler !== 'function') {
    throw new SyntaxError('Function parameter handler(resolve, reject) missing');
  }
  var _onSuccess = [];
  var _onFail = [];

  // status
  this.resolved = false;
  this.rejected = false;
  this.pending = true;

  /**
   * Process onSuccess and onFail callbacks: add them to the queue.
   * Once the promise is resolve, the function _promise is replace.
   * @param {Function} onSuccess
   * @param {Function} onFail
   * @private
   */
  var _process = function _process(onSuccess, onFail) {
    _onSuccess.push(onSuccess);
    _onFail.push(onFail);
  };

  /**
   * Add an onSuccess callback and optionally an onFail callback to the Promise
   * @param {Function} onSuccess
   * @param {Function} [onFail]
   * @returns {Promise} promise
   */
  this.then = function (onSuccess, onFail) {
    return new Promise(function (resolve, reject) {
      var s = onSuccess ? _then(onSuccess, resolve, reject) : resolve;
      var f = onFail ? _then(onFail, resolve, reject) : reject;
      _process(s, f);
    }, me);
  };

  /**
   * Resolve the promise
   * @param {*} result
   * @type {Function}
   */
  var _resolve2 = function _resolve(result) {
    // update status
    me.resolved = true;
    me.rejected = false;
    me.pending = false;
    _onSuccess.forEach(function (fn) {
      fn(result);
    });
    _process = function _process(onSuccess, onFail) {
      onSuccess(result);
    };
    _resolve2 = _reject2 = function _reject() {};
    return me;
  };

  /**
   * Reject the promise
   * @param {Error} error
   * @type {Function}
   */
  var _reject2 = function _reject(error) {
    // update status
    me.resolved = false;
    me.rejected = true;
    me.pending = false;
    _onFail.forEach(function (fn) {
      fn(error);
    });
    _process = function _process(onSuccess, onFail) {
      onFail(error);
    };
    _resolve2 = _reject2 = function _reject() {};
    return me;
  };

  /**
   * Cancel te promise. This will reject the promise with a CancellationError
   * @returns {Promise} self
   */
  this.cancel = function () {
    if (parent) {
      parent.cancel();
    } else {
      _reject2(new CancellationError());
    }
    return me;
  };

  /**
   * Set a timeout for the promise. If the promise is not resolved within
   * the time, the promise will be cancelled and a TimeoutError is thrown.
   * If the promise is resolved in time, the timeout is removed.
   * @param {number} delay     Delay in milliseconds
   * @returns {Promise} self
   */
  this.timeout = function (delay) {
    if (parent) {
      parent.timeout(delay);
    } else {
      var timer = setTimeout(function () {
        _reject2(new TimeoutError('Promise timed out after ' + delay + ' ms'));
      }, delay);
      me.always(function () {
        clearTimeout(timer);
      });
    }
    return me;
  };

  // attach handler passing the resolve and reject functions
  handler(function (result) {
    _resolve2(result);
  }, function (error) {
    _reject2(error);
  });
}

/**
 * Execute given callback, then call resolve/reject based on the returned result
 * @param {Function} callback
 * @param {Function} resolve
 * @param {Function} reject
 * @returns {Function}
 * @private
 */
function _then(callback, resolve, reject) {
  return function (result) {
    try {
      var res = callback(result);
      if (res && typeof res.then === 'function' && typeof res['catch'] === 'function') {
        // method returned a promise
        res.then(resolve, reject);
      } else {
        resolve(res);
      }
    } catch (error) {
      reject(error);
    }
  };
}

/**
 * Add an onFail callback to the Promise
 * @param {Function} onFail
 * @returns {Promise} promise
 */
Promise.prototype['catch'] = function (onFail) {
  return this.then(null, onFail);
};

// TODO: add support for Promise.catch(Error, callback)
// TODO: add support for Promise.catch(Error, Error, callback)

/**
 * Execute given callback when the promise either resolves or rejects.
 * @param {Function} fn
 * @returns {Promise} promise
 */
Promise.prototype.always = function (fn) {
  return this.then(fn, fn);
};

/**
 * Create a promise which resolves when all provided promises are resolved,
 * and fails when any of the promises resolves.
 * @param {Promise[]} promises
 * @returns {Promise} promise
 */
Promise.all = function (promises) {
  return new Promise(function (resolve, reject) {
    var remaining = promises.length,
      results = [];
    if (remaining) {
      promises.forEach(function (p, i) {
        p.then(function (result) {
          results[i] = result;
          remaining--;
          if (remaining == 0) {
            resolve(results);
          }
        }, function (error) {
          remaining = 0;
          reject(error);
        });
      });
    } else {
      resolve(results);
    }
  });
};

/**
 * Create a promise resolver
 * @returns {{promise: Promise, resolve: Function, reject: Function}} resolver
 */
Promise.defer = function () {
  var resolver = {};
  resolver.promise = new Promise(function (resolve, reject) {
    resolver.resolve = resolve;
    resolver.reject = reject;
  });
  return resolver;
};

/**
 * Create a cancellation error
 * @param {String} [message]
 * @extends Error
 */
function CancellationError(message) {
  this.message = message || 'promise cancelled';
  this.stack = new Error().stack;
}
CancellationError.prototype = new Error();
CancellationError.prototype.constructor = Error;
CancellationError.prototype.name = 'CancellationError';
Promise.CancellationError = CancellationError;

/**
 * Create a timeout error
 * @param {String} [message]
 * @extends Error
 */
function TimeoutError(message) {
  this.message = message || 'timeout exceeded';
  this.stack = new Error().stack;
}
TimeoutError.prototype = new Error();
TimeoutError.prototype.constructor = Error;
TimeoutError.prototype.name = 'TimeoutError';
Promise.TimeoutError = TimeoutError;
module.exports = Promise;

/***/ }),

/***/ 751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var Promise = __webpack_require__(219);
var environment = __webpack_require__(828);
var requireFoolWebpack = __webpack_require__(397);

/**
 * Special message sent by parent which causes a child process worker to terminate itself.
 * Not a "message object"; this string is the entire message.
 */
var TERMINATE_METHOD_ID = '__workerpool-terminate__';
function ensureWorkerThreads() {
  var WorkerThreads = tryRequireWorkerThreads();
  if (!WorkerThreads) {
    throw new Error('WorkerPool: workerType = \'thread\' is not supported, Node >= 11.7.0 required');
  }
  return WorkerThreads;
}

// check whether Worker is supported by the browser
function ensureWebWorker() {
  // Workaround for a bug in PhantomJS (Or QtWebkit): https://github.com/ariya/phantomjs/issues/14534
  if (typeof Worker !== 'function' && ((typeof Worker === "undefined" ? "undefined" : _typeof(Worker)) !== 'object' || typeof Worker.prototype.constructor !== 'function')) {
    throw new Error('WorkerPool: Web Workers not supported');
  }
}
function tryRequireWorkerThreads() {
  try {
    return requireFoolWebpack('worker_threads');
  } catch (error) {
    if (_typeof(error) === 'object' && error !== null && error.code === 'MODULE_NOT_FOUND') {
      // no worker_threads available (old version of node.js)
      return null;
    } else {
      throw error;
    }
  }
}

// get the default worker script
function getDefaultWorker() {
  if (environment.platform === 'browser') {
    // test whether the browser supports all features that we need
    if (typeof Blob === 'undefined') {
      throw new Error('Blob not supported by the browser');
    }
    if (!window.URL || typeof window.URL.createObjectURL !== 'function') {
      throw new Error('URL.createObjectURL not supported by the browser');
    }

    // use embedded worker.js
    var blob = new Blob([__webpack_require__(670)], {
      type: 'text/javascript'
    });
    return window.URL.createObjectURL(blob);
  } else {
    // use external worker.js in current directory
    return __dirname + '/worker.js';
  }
}
function setupWorker(script, options) {
  if (options.workerType === 'web') {
    // browser only
    ensureWebWorker();
    return setupBrowserWorker(script, options.workerOpts, Worker);
  } else if (options.workerType === 'thread') {
    // node.js only
    WorkerThreads = ensureWorkerThreads();
    return setupWorkerThreadWorker(script, WorkerThreads, options.workerThreadOpts);
  } else if (options.workerType === 'process' || !options.workerType) {
    // node.js only
    return setupProcessWorker(script, resolveForkOptions(options), requireFoolWebpack('child_process'));
  } else {
    // options.workerType === 'auto' or undefined
    if (environment.platform === 'browser') {
      ensureWebWorker();
      return setupBrowserWorker(script, options.workerOpts, Worker);
    } else {
      // environment.platform === 'node'
      var WorkerThreads = tryRequireWorkerThreads();
      if (WorkerThreads) {
        return setupWorkerThreadWorker(script, WorkerThreads, options.workerThreadOpts);
      } else {
        return setupProcessWorker(script, resolveForkOptions(options), requireFoolWebpack('child_process'));
      }
    }
  }
}
function setupBrowserWorker(script, workerOpts, Worker) {
  // create the web worker
  var worker = new Worker(script, workerOpts);
  worker.isBrowserWorker = true;
  // add node.js API to the web worker
  worker.on = function (event, callback) {
    this.addEventListener(event, function (message) {
      callback(message.data);
    });
  };
  worker.send = function (message, transfer) {
    this.postMessage(message, transfer);
  };
  return worker;
}
function setupWorkerThreadWorker(script, WorkerThreads, workerThreadOptions) {
  var worker = new WorkerThreads.Worker(script, _objectSpread({
    stdout: false,
    // automatically pipe worker.STDOUT to process.STDOUT
    stderr: false
  }, workerThreadOptions));
  worker.isWorkerThread = true;
  worker.send = function (message, transfer) {
    this.postMessage(message, transfer);
  };
  worker.kill = function () {
    this.terminate();
    return true;
  };
  worker.disconnect = function () {
    this.terminate();
  };
  return worker;
}
function setupProcessWorker(script, options, child_process) {
  // no WorkerThreads, fallback to sub-process based workers
  var worker = child_process.fork(script, options.forkArgs, options.forkOpts);

  // ignore transfer argument since it is not supported by process
  var send = worker.send;
  worker.send = function (message) {
    return send.call(worker, message);
  };
  worker.isChildProcess = true;
  return worker;
}

// add debug flags to child processes if the node inspector is active
function resolveForkOptions(opts) {
  opts = opts || {};
  var processExecArgv = process.execArgv.join(' ');
  var inspectorActive = processExecArgv.indexOf('--inspect') !== -1;
  var debugBrk = processExecArgv.indexOf('--debug-brk') !== -1;
  var execArgv = [];
  if (inspectorActive) {
    execArgv.push('--inspect=' + opts.debugPort);
    if (debugBrk) {
      execArgv.push('--debug-brk');
    }
  }
  process.execArgv.forEach(function (arg) {
    if (arg.indexOf('--max-old-space-size') > -1) {
      execArgv.push(arg);
    }
  });
  return Object.assign({}, opts, {
    forkArgs: opts.forkArgs,
    forkOpts: Object.assign({}, opts.forkOpts, {
      execArgv: (opts.forkOpts && opts.forkOpts.execArgv || []).concat(execArgv)
    })
  });
}

/**
 * Converts a serialized error to Error
 * @param {Object} obj Error that has been serialized and parsed to object
 * @return {Error} The equivalent Error.
 */
function objectToError(obj) {
  var temp = new Error('');
  var props = Object.keys(obj);
  for (var i = 0; i < props.length; i++) {
    temp[props[i]] = obj[props[i]];
  }
  return temp;
}

/**
 * A WorkerHandler controls a single worker. This worker can be a child process
 * on node.js or a WebWorker in a browser environment.
 * @param {String} [script] If no script is provided, a default worker with a
 *                          function run will be created.
 * @param {WorkerPoolOptions} _options See docs
 * @constructor
 */
function WorkerHandler(script, _options) {
  var me = this;
  var options = _options || {};
  this.script = script || getDefaultWorker();
  this.worker = setupWorker(this.script, options);
  this.debugPort = options.debugPort;
  this.forkOpts = options.forkOpts;
  this.forkArgs = options.forkArgs;
  this.workerOpts = options.workerOpts;
  this.workerThreadOpts = options.workerThreadOpts;
  this.workerTerminateTimeout = options.workerTerminateTimeout;

  // The ready message is only sent if the worker.add method is called (And the default script is not used)
  if (!script) {
    this.worker.ready = true;
  }

  // queue for requests that are received before the worker is ready
  this.requestQueue = [];
  this.worker.on('message', function (response) {
    if (me.terminated) {
      return;
    }
    if (typeof response === 'string' && response === 'ready') {
      me.worker.ready = true;
      dispatchQueuedRequests();
    } else {
      // find the task from the processing queue, and run the tasks callback
      var id = response.id;
      var task = me.processing[id];
      if (task !== undefined) {
        if (response.isEvent) {
          if (task.options && typeof task.options.on === 'function') {
            task.options.on(response.payload);
          }
        } else {
          // remove the task from the queue
          delete me.processing[id];

          // test if we need to terminate
          if (me.terminating === true) {
            // complete worker termination if all tasks are finished
            me.terminate();
          }

          // resolve the task's promise
          if (response.error) {
            task.resolver.reject(objectToError(response.error));
          } else {
            task.resolver.resolve(response.result);
          }
        }
      }
    }
  });

  // reject all running tasks on worker error
  function onError(error) {
    me.terminated = true;
    for (var id in me.processing) {
      if (me.processing[id] !== undefined) {
        me.processing[id].resolver.reject(error);
      }
    }
    me.processing = Object.create(null);
  }

  // send all queued requests to worker
  function dispatchQueuedRequests() {
    var _iterator = _createForOfIteratorHelper(me.requestQueue.splice(0)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var request = _step.value;
        me.worker.send(request.message, request.transfer);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  var worker = this.worker;
  // listen for worker messages error and exit
  this.worker.on('error', onError);
  this.worker.on('exit', function (exitCode, signalCode) {
    var message = 'Workerpool Worker terminated Unexpectedly\n';
    message += '    exitCode: `' + exitCode + '`\n';
    message += '    signalCode: `' + signalCode + '`\n';
    message += '    workerpool.script: `' + me.script + '`\n';
    message += '    spawnArgs: `' + worker.spawnargs + '`\n';
    message += '    spawnfile: `' + worker.spawnfile + '`\n';
    message += '    stdout: `' + worker.stdout + '`\n';
    message += '    stderr: `' + worker.stderr + '`\n';
    onError(new Error(message));
  });
  this.processing = Object.create(null); // queue with tasks currently in progress

  this.terminating = false;
  this.terminated = false;
  this.cleaning = false;
  this.terminationHandler = null;
  this.lastId = 0;
}

/**
 * Get a list with methods available on the worker.
 * @return {Promise.<String[], Error>} methods
 */
WorkerHandler.prototype.methods = function () {
  return this.exec('methods');
};

/**
 * Execute a method with given parameters on the worker
 * @param {String} method
 * @param {Array} [params]
 * @param {{resolve: Function, reject: Function}} [resolver]
 * @param {ExecOptions}  [options]
 * @return {Promise.<*, Error>} result
 */
WorkerHandler.prototype.exec = function (method, params, resolver, options) {
  if (!resolver) {
    resolver = Promise.defer();
  }

  // generate a unique id for the task
  var id = ++this.lastId;

  // register a new task as being in progress
  this.processing[id] = {
    id: id,
    resolver: resolver,
    options: options
  };

  // build a JSON-RPC request
  var request = {
    message: {
      id: id,
      method: method,
      params: params
    },
    transfer: options && options.transfer
  };
  if (this.terminated) {
    resolver.reject(new Error('Worker is terminated'));
  } else if (this.worker.ready) {
    // send the request to the worker
    this.worker.send(request.message, request.transfer);
  } else {
    this.requestQueue.push(request);
  }

  // on cancellation, force the worker to terminate
  var me = this;
  return resolver.promise["catch"](function (error) {
    if (error instanceof Promise.CancellationError || error instanceof Promise.TimeoutError) {
      // remove this task from the queue. It is already rejected (hence this
      // catch event), and else it will be rejected again when terminating
      delete me.processing[id];

      // terminate worker
      return me.terminateAndNotify(true).then(function () {
        throw error;
      }, function (err) {
        throw err;
      });
    } else {
      throw error;
    }
  });
};

/**
 * Test whether the worker is processing any tasks or cleaning up before termination.
 * @return {boolean} Returns true if the worker is busy
 */
WorkerHandler.prototype.busy = function () {
  return this.cleaning || Object.keys(this.processing).length > 0;
};

/**
 * Terminate the worker.
 * @param {boolean} [force=false]   If false (default), the worker is terminated
 *                                  after finishing all tasks currently in
 *                                  progress. If true, the worker will be
 *                                  terminated immediately.
 * @param {function} [callback=null] If provided, will be called when process terminates.
 */
WorkerHandler.prototype.terminate = function (force, callback) {
  var me = this;
  if (force) {
    // cancel all tasks in progress
    for (var id in this.processing) {
      if (this.processing[id] !== undefined) {
        this.processing[id].resolver.reject(new Error('Worker terminated'));
      }
    }
    this.processing = Object.create(null);
  }
  if (typeof callback === 'function') {
    this.terminationHandler = callback;
  }
  if (!this.busy()) {
    // all tasks are finished. kill the worker
    var cleanup = function cleanup(err) {
      me.terminated = true;
      me.cleaning = false;
      if (me.worker != null && me.worker.removeAllListeners) {
        // removeAllListeners is only available for child_process
        me.worker.removeAllListeners('message');
      }
      me.worker = null;
      me.terminating = false;
      if (me.terminationHandler) {
        me.terminationHandler(err, me);
      } else if (err) {
        throw err;
      }
    };
    if (this.worker) {
      if (typeof this.worker.kill === 'function') {
        if (this.worker.killed) {
          cleanup(new Error('worker already killed!'));
          return;
        }

        // child process and worker threads
        var cleanExitTimeout = setTimeout(function () {
          if (me.worker) {
            me.worker.kill();
          }
        }, this.workerTerminateTimeout);
        this.worker.once('exit', function () {
          clearTimeout(cleanExitTimeout);
          if (me.worker) {
            me.worker.killed = true;
          }
          cleanup();
        });
        if (this.worker.ready) {
          this.worker.send(TERMINATE_METHOD_ID);
        } else {
          this.requestQueue.push({
            message: TERMINATE_METHOD_ID
          });
        }

        // mark that the worker is cleaning up resources
        // to prevent new tasks from being executed
        this.cleaning = true;
        return;
      } else if (typeof this.worker.terminate === 'function') {
        this.worker.terminate(); // web worker
        this.worker.killed = true;
      } else {
        throw new Error('Failed to terminate worker');
      }
    }
    cleanup();
  } else {
    // we can't terminate immediately, there are still tasks being executed
    this.terminating = true;
  }
};

/**
 * Terminate the worker, returning a Promise that resolves when the termination has been done.
 * @param {boolean} [force=false]   If false (default), the worker is terminated
 *                                  after finishing all tasks currently in
 *                                  progress. If true, the worker will be
 *                                  terminated immediately.
 * @param {number} [timeout]        If provided and non-zero, worker termination promise will be rejected
 *                                  after timeout if worker process has not been terminated.
 * @return {Promise.<WorkerHandler, Error>}
 */
WorkerHandler.prototype.terminateAndNotify = function (force, timeout) {
  var resolver = Promise.defer();
  if (timeout) {
    resolver.promise.timeout(timeout);
  }
  this.terminate(force, function (err, worker) {
    if (err) {
      resolver.reject(err);
    } else {
      resolver.resolve(worker);
    }
  });
  return resolver.promise;
};
module.exports = WorkerHandler;
module.exports._tryRequireWorkerThreads = tryRequireWorkerThreads;
module.exports._setupProcessWorker = setupProcessWorker;
module.exports._setupBrowserWorker = setupBrowserWorker;
module.exports._setupWorkerThreadWorker = setupWorkerThreadWorker;
module.exports.ensureWorkerThreads = ensureWorkerThreads;

/***/ }),

/***/ 833:
/***/ (function(module) {

"use strict";


var MAX_PORTS = 65535;
module.exports = DebugPortAllocator;
function DebugPortAllocator() {
  this.ports = Object.create(null);
  this.length = 0;
}
DebugPortAllocator.prototype.nextAvailableStartingAt = function (starting) {
  while (this.ports[starting] === true) {
    starting++;
  }
  if (starting >= MAX_PORTS) {
    throw new Error('WorkerPool debug port limit reached: ' + starting + '>= ' + MAX_PORTS);
  }
  this.ports[starting] = true;
  this.length++;
  return starting;
};
DebugPortAllocator.prototype.releasePort = function (port) {
  delete this.ports[port];
  this.length--;
};

/***/ }),

/***/ 828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireFoolWebpack = __webpack_require__(397);

// source: https://github.com/flexdinesh/browser-or-node
var isNode = function isNode(nodeProcess) {
  return typeof nodeProcess !== 'undefined' && nodeProcess.versions != null && nodeProcess.versions.node != null;
};
module.exports.isNode = isNode;

// determines the JavaScript platform: browser or node
module.exports.platform = typeof process !== 'undefined' && isNode(process) ? 'node' : 'browser';

// determines whether the code is running in main thread or not
// note that in node.js we have to check both worker_thread and child_process
var worker_threads = tryRequireFoolWebpack('worker_threads');
module.exports.isMainThread = module.exports.platform === 'node' ? (!worker_threads || worker_threads.isMainThread) && !process.connected : typeof Window !== 'undefined';

// determines the number of cpus available
module.exports.cpus = module.exports.platform === 'browser' ? self.navigator.hardwareConcurrency : requireFoolWebpack('os').cpus().length;
function tryRequireFoolWebpack(module) {
  try {
    return requireFoolWebpack(module);
  } catch (err) {
    return null;
  }
}

/***/ }),

/***/ 670:
/***/ (function(module) {

/**
 * embeddedWorker.js contains an embedded version of worker.js.
 * This file is automatically generated,
 * changes made in this file will be overwritten.
 */
module.exports = "!function(){var __webpack_modules__={577:function(e){e.exports=function(e,r){this.message=e,this.transfer=r}}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];return void 0!==r||(r=__webpack_module_cache__[e]={exports:{}},__webpack_modules__[e](r,r.exports,__webpack_require__)),r.exports}var __webpack_exports__={};!function(){var exports=__webpack_exports__,__webpack_unused_export__;function _typeof(e){return(_typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}var Transfer=__webpack_require__(577),requireFoolWebpack=eval(\"typeof require !== 'undefined' ? require : function (module) { throw new Error('Module \\\" + module + \\\" not found.') }\"),TERMINATE_METHOD_ID=\"__workerpool-terminate__\",worker={exit:function(){}},WorkerThreads,parentPort;if(\"undefined\"!=typeof self&&\"function\"==typeof postMessage&&\"function\"==typeof addEventListener)worker.on=function(e,r){addEventListener(e,function(e){r(e.data)})},worker.send=function(e){postMessage(e)};else{if(\"undefined\"==typeof process)throw new Error(\"Script must be executed as a worker\");try{WorkerThreads=requireFoolWebpack(\"worker_threads\")}catch(error){if(\"object\"!==_typeof(error)||null===error||\"MODULE_NOT_FOUND\"!==error.code)throw error}WorkerThreads&&null!==WorkerThreads.parentPort?(parentPort=WorkerThreads.parentPort,worker.send=parentPort.postMessage.bind(parentPort),worker.on=parentPort.on.bind(parentPort)):(worker.on=process.on.bind(process),worker.send=function(e){process.send(e)},worker.on(\"disconnect\",function(){process.exit(1)})),worker.exit=process.exit.bind(process)}function convertError(o){return Object.getOwnPropertyNames(o).reduce(function(e,r){return Object.defineProperty(e,r,{value:o[r],enumerable:!0})},{})}function isPromise(e){return e&&\"function\"==typeof e.then&&\"function\"==typeof e.catch}worker.methods={},worker.methods.run=function(e,r){e=new Function(\"return (\"+e+\").apply(null, arguments);\");return e.apply(e,r)},worker.methods.methods=function(){return Object.keys(worker.methods)},worker.terminationHandler=void 0,worker.cleanupAndExit=function(e){function r(){worker.exit(e)}if(!worker.terminationHandler)return r();var o=worker.terminationHandler(e);isPromise(o)?o.then(r,r):r()};var currentRequestId=null;worker.on(\"message\",function(r){if(r===TERMINATE_METHOD_ID)return worker.cleanupAndExit(0);try{var e=worker.methods[r.method];if(!e)throw new Error('Unknown method \"'+r.method+'\"');currentRequestId=r.id;var o=e.apply(e,r.params);isPromise(o)?o.then(function(e){e instanceof Transfer?worker.send({id:r.id,result:e.message,error:null},e.transfer):worker.send({id:r.id,result:e,error:null}),currentRequestId=null}).catch(function(e){worker.send({id:r.id,result:null,error:convertError(e)}),currentRequestId=null}):(o instanceof Transfer?worker.send({id:r.id,result:o.message,error:null},o.transfer):worker.send({id:r.id,result:o,error:null}),currentRequestId=null)}catch(e){worker.send({id:r.id,result:null,error:convertError(e)})}}),worker.register=function(e,r){if(e)for(var o in e)e.hasOwnProperty(o)&&(worker.methods[o]=e[o]);r&&(worker.terminationHandler=r.onTerminate),worker.send(\"ready\")},worker.emit=function(e){currentRequestId&&(e instanceof Transfer?worker.send({id:currentRequestId,isEvent:!0,payload:e.message},e.transfer):worker.send({id:currentRequestId,isEvent:!0,payload:e}))},__webpack_unused_export__=worker.register,worker.emit}()}();";

/***/ }),

/***/ 397:
/***/ (function(module) {

// source of inspiration: https://github.com/sindresorhus/require-fool-webpack
var requireFoolWebpack = eval('typeof require !== \'undefined\' ' + '? require ' + ': function (module) { throw new Error(\'Module " + module + " not found.\') }');
module.exports = requireFoolWebpack;

/***/ }),

/***/ 577:
/***/ (function(module) {

/**
 * The helper class for transferring data from the worker to the main thread.
 *
 * @param {Object} message The object to deliver to the main thread.
 * @param {Object[]} transfer An array of transferable Objects to transfer ownership of.
 */
function Transfer(message, transfer) {
  this.message = message;
  this.transfer = transfer;
}
module.exports = Transfer;

/***/ }),

/***/ 744:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * worker must be started as a child process or a web worker.
 * It listens for RPC messages from the parent process.
 */
var Transfer = __webpack_require__(577);

// source of inspiration: https://github.com/sindresorhus/require-fool-webpack
var requireFoolWebpack = eval('typeof require !== \'undefined\'' + ' ? require' + ' : function (module) { throw new Error(\'Module " + module + " not found.\') }');

/**
 * Special message sent by parent which causes the worker to terminate itself.
 * Not a "message object"; this string is the entire message.
 */
var TERMINATE_METHOD_ID = '__workerpool-terminate__';

// var nodeOSPlatform = require('./environment').nodeOSPlatform;

// create a worker API for sending and receiving messages which works both on
// node.js and in the browser
var worker = {
  exit: function exit() {}
};
if (typeof self !== 'undefined' && typeof postMessage === 'function' && typeof addEventListener === 'function') {
  // worker in the browser
  worker.on = function (event, callback) {
    addEventListener(event, function (message) {
      callback(message.data);
    });
  };
  worker.send = function (message) {
    postMessage(message);
  };
} else if (typeof process !== 'undefined') {
  // node.js

  var WorkerThreads;
  try {
    WorkerThreads = requireFoolWebpack('worker_threads');
  } catch (error) {
    if (_typeof(error) === 'object' && error !== null && error.code === 'MODULE_NOT_FOUND') {
      // no worker_threads, fallback to sub-process based workers
    } else {
      throw error;
    }
  }
  if (WorkerThreads && /* if there is a parentPort, we are in a WorkerThread */
  WorkerThreads.parentPort !== null) {
    var parentPort = WorkerThreads.parentPort;
    worker.send = parentPort.postMessage.bind(parentPort);
    worker.on = parentPort.on.bind(parentPort);
    worker.exit = process.exit.bind(process);
  } else {
    worker.on = process.on.bind(process);
    // ignore transfer argument since it is not supported by process
    worker.send = function (message) {
      process.send(message);
    };
    // register disconnect handler only for subprocess worker to exit when parent is killed unexpectedly
    worker.on('disconnect', function () {
      process.exit(1);
    });
    worker.exit = process.exit.bind(process);
  }
} else {
  throw new Error('Script must be executed as a worker');
}
function convertError(error) {
  return Object.getOwnPropertyNames(error).reduce(function (product, name) {
    return Object.defineProperty(product, name, {
      value: error[name],
      enumerable: true
    });
  }, {});
}

/**
 * Test whether a value is a Promise via duck typing.
 * @param {*} value
 * @returns {boolean} Returns true when given value is an object
 *                    having functions `then` and `catch`.
 */
function isPromise(value) {
  return value && typeof value.then === 'function' && typeof value["catch"] === 'function';
}

// functions available externally
worker.methods = {};

/**
 * Execute a function with provided arguments
 * @param {String} fn     Stringified function
 * @param {Array} [args]  Function arguments
 * @returns {*}
 */
worker.methods.run = function run(fn, args) {
  var f = new Function('return (' + fn + ').apply(null, arguments);');
  return f.apply(f, args);
};

/**
 * Get a list with methods available on this worker
 * @return {String[]} methods
 */
worker.methods.methods = function methods() {
  return Object.keys(worker.methods);
};

/**
 * Custom handler for when the worker is terminated.
 */
worker.terminationHandler = undefined;

/**
 * Cleanup and exit the worker.
 * @param {Number} code 
 * @returns 
 */
worker.cleanupAndExit = function (code) {
  var _exit = function _exit() {
    worker.exit(code);
  };
  if (!worker.terminationHandler) {
    return _exit();
  }
  var result = worker.terminationHandler(code);
  if (isPromise(result)) {
    result.then(_exit, _exit);
  } else {
    _exit();
  }
};
var currentRequestId = null;
worker.on('message', function (request) {
  if (request === TERMINATE_METHOD_ID) {
    return worker.cleanupAndExit(0);
  }
  try {
    var method = worker.methods[request.method];
    if (method) {
      currentRequestId = request.id;

      // execute the function
      var result = method.apply(method, request.params);
      if (isPromise(result)) {
        // promise returned, resolve this and then return
        result.then(function (result) {
          if (result instanceof Transfer) {
            worker.send({
              id: request.id,
              result: result.message,
              error: null
            }, result.transfer);
          } else {
            worker.send({
              id: request.id,
              result: result,
              error: null
            });
          }
          currentRequestId = null;
        })["catch"](function (err) {
          worker.send({
            id: request.id,
            result: null,
            error: convertError(err)
          });
          currentRequestId = null;
        });
      } else {
        // immediate result
        if (result instanceof Transfer) {
          worker.send({
            id: request.id,
            result: result.message,
            error: null
          }, result.transfer);
        } else {
          worker.send({
            id: request.id,
            result: result,
            error: null
          });
        }
        currentRequestId = null;
      }
    } else {
      throw new Error('Unknown method "' + request.method + '"');
    }
  } catch (err) {
    worker.send({
      id: request.id,
      result: null,
      error: convertError(err)
    });
  }
});

/**
 * Register methods to the worker
 * @param {Object} [methods]
 * @param {WorkerRegisterOptions} [options]
 */
worker.register = function (methods, options) {
  if (methods) {
    for (var name in methods) {
      if (methods.hasOwnProperty(name)) {
        worker.methods[name] = methods[name];
      }
    }
  }
  if (options) {
    worker.terminationHandler = options.onTerminate;
  }
  worker.send('ready');
};
worker.emit = function (payload) {
  if (currentRequestId) {
    if (payload instanceof Transfer) {
      worker.send({
        id: currentRequestId,
        isEvent: true,
        payload: payload.message
      }, payload.transfer);
      return;
    }
    worker.send({
      id: currentRequestId,
      isEvent: true,
      payload: payload
    });
  }
};
if (true) {
  exports.add = worker.register;
  exports.emit = worker.emit;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
var environment = __webpack_require__(828);

/**
 * Create a new worker pool
 * @param {string} [script]
 * @param {WorkerPoolOptions} [options]
 * @returns {Pool} pool
 */
exports.pool = function pool(script, options) {
  var Pool = __webpack_require__(345);
  return new Pool(script, options);
};

/**
 * Create a worker and optionally register a set of methods to the worker.
 * @param {Object} [methods]
 * @param {WorkerRegisterOptions} [options]
 */
exports.worker = function worker(methods, options) {
  var worker = __webpack_require__(744);
  worker.add(methods, options);
};

/**
 * Sends an event to the parent worker pool.
 * @param {any} payload 
 */
exports.workerEmit = function workerEmit(payload) {
  var worker = __webpack_require__(744);
  worker.emit(payload);
};

/**
 * Create a promise.
 * @type {Promise} promise
 */
exports.Promise = __webpack_require__(219);

/**
 * Create a transfer object.
 * @type {Transfer} transfer
 */
exports.Transfer = __webpack_require__(577);
exports.platform = environment.platform;
exports.isMainThread = environment.isMainThread;
exports.cpus = environment.cpus;
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=workerpool.js.map