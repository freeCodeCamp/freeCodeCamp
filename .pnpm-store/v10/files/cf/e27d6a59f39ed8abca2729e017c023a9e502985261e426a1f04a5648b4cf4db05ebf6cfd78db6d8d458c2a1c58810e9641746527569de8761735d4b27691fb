var environment = require('./environment');

/**
 * Create a new worker pool
 * @param {string} [script]
 * @param {WorkerPoolOptions} [options]
 * @returns {Pool} pool
 */
exports.pool = function pool(script, options) {
  var Pool = require('./Pool');

  return new Pool(script, options);
};

/**
 * Create a worker and optionally register a set of methods to the worker.
 * @param {Object} [methods]
 * @param {WorkerRegisterOptions} [options]
 */
exports.worker = function worker(methods, options) {
  var worker = require('./worker');
  worker.add(methods, options);
};

/**
 * Sends an event to the parent worker pool.
 * @param {any} payload 
 */
exports.workerEmit = function workerEmit(payload) {
  var worker = require('./worker');
  worker.emit(payload);
};

/**
 * Create a promise.
 * @type {Promise} promise
 */
exports.Promise = require('./Promise');

/**
 * Create a transfer object.
 * @type {Transfer} transfer
 */
exports.Transfer = require('./transfer');

exports.platform = environment.platform;
exports.isMainThread = environment.isMainThread;
exports.cpus = environment.cpus;