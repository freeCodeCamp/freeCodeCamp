/* eslint-disable no-eval */
/* global importScripts, application */
// executes the given code and handles the result

function importScript(url, error) {
  try {
    importScripts(url);
  } catch (e) {
    error = e;
  }
  return error;
}

function run(code, cb) {
  var err = null;
  var result = {};

  try {
    var codeExec = runHidden(code);
    result.type = typeof codeExec;
    result.output = stringify(codeExec);
  } catch (e) {
    err = e.message;
  }

  if (err) {
    cb(err, null);
  } else {
    cb(null, result);
  }

  self.close();
}


// protects even the worker scope from being accessed
function runHidden(code) {

  /* eslint-disable no-unused-vars */
  var indexedDB = null;
  var location = null;
  var navigator = null;
  var onerror = null;
  var onmessage = null;
  var performance = null;
  var self = null;
  var webkitIndexedDB = null;
  var postMessage = null;
  var close = null;
  var openDatabase = null;
  var openDatabaseSync = null;
  var webkitRequestFileSystem = null;
  var webkitRequestFileSystemSync = null;
  var webkitResolveLocalFileSystemSyncURL = null;
  var webkitResolveLocalFileSystemURL = null;
  var addEventListener = null;
  var dispatchEvent = null;
  var removeEventListener = null;
  var dump = null;
  var onoffline = null;
  var ononline = null;
  /* eslint-enable no-unused-vars */

  var error = null;
  error = importScript(
    'https://cdnjs.cloudflare.com/ajax/libs/chai/2.2.0/chai.min.js'
  );


  /* eslint-disable*/
  var assert = chai.assert;
  /* eslint-enable */

  if (error) {
    return error;
  }

  return eval(code);
}


// converts the output into a string
function stringify(output) {
  var result;

  if (typeof output === 'undefined') {
    result = 'undefined';
  } else if (output === null) {
    result = 'null';
  } else {
    result = JSON.stringify(output) || output.toString();
  }

  return result;
}

application.setInterface({ run: run });
