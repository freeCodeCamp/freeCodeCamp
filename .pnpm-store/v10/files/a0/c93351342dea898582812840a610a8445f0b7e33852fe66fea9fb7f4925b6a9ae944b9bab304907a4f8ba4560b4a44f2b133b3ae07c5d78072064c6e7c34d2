/**
 * worker must be started as a child process or a web worker.
 * It listens for RPC messages from the parent process.
 */
var Transfer = require('./transfer');

// source of inspiration: https://github.com/sindresorhus/require-fool-webpack
var requireFoolWebpack = eval(
    'typeof require !== \'undefined\'' +
    ' ? require' +
    ' : function (module) { throw new Error(\'Module " + module + " not found.\') }'
);

/**
 * Special message sent by parent which causes the worker to terminate itself.
 * Not a "message object"; this string is the entire message.
 */
var TERMINATE_METHOD_ID = '__workerpool-terminate__';

// var nodeOSPlatform = require('./environment').nodeOSPlatform;

// create a worker API for sending and receiving messages which works both on
// node.js and in the browser
var worker = {
  exit: function() {}
};
if (typeof self !== 'undefined' && typeof postMessage === 'function' && typeof addEventListener === 'function') {
  // worker in the browser
  worker.on = function (event, callback) {
    addEventListener(event, function (message) {
      callback(message.data);
    })
  };
  worker.send = function (message) {
    postMessage(message);
  };
}
else if (typeof process !== 'undefined') {
  // node.js

  var WorkerThreads;
  try {
    WorkerThreads = requireFoolWebpack('worker_threads');
  } catch(error) {
    if (typeof error === 'object' && error !== null && error.code === 'MODULE_NOT_FOUND') {
      // no worker_threads, fallback to sub-process based workers
    } else {
      throw error;
    }
  }

  if (WorkerThreads &&
    /* if there is a parentPort, we are in a WorkerThread */
    WorkerThreads.parentPort !== null) {
    var parentPort  = WorkerThreads.parentPort;
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
}
else {
  throw new Error('Script must be executed as a worker');
}

function convertError(error) {
  return Object.getOwnPropertyNames(error).reduce(function(product, name) {
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
  return value && (typeof value.then === 'function') && (typeof value.catch === 'function');
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
worker.cleanupAndExit = function(code) {
  var _exit = function() {
    worker.exit(code);
  }

  if(!worker.terminationHandler) {
    return _exit();
  }

  var result = worker.terminationHandler(code);
  if (isPromise(result)) {
    result.then(_exit, _exit);
  } else {
    _exit();
  }
}

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
        result
            .then(function (result) {
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
            })
            .catch(function (err) {
              worker.send({
                id: request.id,
                result: null,
                error: convertError(err)
              });
              currentRequestId = null;
            });
      }
      else {
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
    }
    else {
      throw new Error('Unknown method "' + request.method + '"');
    }
  }
  catch (err) {
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
      payload
    });
  }
};

if (typeof exports !== 'undefined') {
  exports.add = worker.register;
  exports.emit = worker.emit;
}
