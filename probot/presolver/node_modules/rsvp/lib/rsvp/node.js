import Promise from './promise';
import {
  noop,
  resolve,
  reject
} from './-internal';
import { isArray } from './utils';

function Result() {
  this.value = undefined;
}

const ERROR = new Result();
const GET_THEN_ERROR = new Result();

function getThen(obj) {
  try {
   return obj.then;
  } catch(error) {
    ERROR.value= error;
    return ERROR;
  }
}


function tryApply(f, s, a) {
  try {
    f.apply(s, a);
  } catch(error) {
    ERROR.value = error;
    return ERROR;
  }
}

function makeObject(_, argumentNames) {
  let obj = {};
  let length = _.length;
  let args = new Array(length);

  for (let x = 0; x < length; x++) {
    args[x] = _[x];
  }

  for (let i = 0; i < argumentNames.length; i++) {
    let name = argumentNames[i];
    obj[name] = args[i + 1];
  }

  return obj;
}

function arrayResult(_) {
  let length = _.length;
  let args = new Array(length - 1);

  for (let i = 1; i < length; i++) {
    args[i - 1] = _[i];
  }

  return args;
}

function wrapThenable(then, promise) {
  return {
    then: function(onFulFillment, onRejection) {
      return then.call(promise, onFulFillment, onRejection);
    }
  };
}

/**
  `RSVP.denodeify` takes a 'node-style' function and returns a function that
  will return an `RSVP.Promise`. You can use `denodeify` in Node.js or the
  browser when you'd prefer to use promises over using callbacks. For example,
  `denodeify` transforms the following:

  ```javascript
  let fs = require('fs');

  fs.readFile('myfile.txt', function(err, data){
    if (err) return handleError(err);
    handleData(data);
  });
  ```

  into:

  ```javascript
  let fs = require('fs');
  let readFile = RSVP.denodeify(fs.readFile);

  readFile('myfile.txt').then(handleData, handleError);
  ```

  If the node function has multiple success parameters, then `denodeify`
  just returns the first one:

  ```javascript
  let request = RSVP.denodeify(require('request'));

  request('http://example.com').then(function(res) {
    // ...
  });
  ```

  However, if you need all success parameters, setting `denodeify`'s
  second parameter to `true` causes it to return all success parameters
  as an array:

  ```javascript
  let request = RSVP.denodeify(require('request'), true);

  request('http://example.com').then(function(result) {
    // result[0] -> res
    // result[1] -> body
  });
  ```

  Or if you pass it an array with names it returns the parameters as a hash:

  ```javascript
  let request = RSVP.denodeify(require('request'), ['res', 'body']);

  request('http://example.com').then(function(result) {
    // result.res
    // result.body
  });
  ```

  Sometimes you need to retain the `this`:

  ```javascript
  let app = require('express')();
  let render = RSVP.denodeify(app.render.bind(app));
  ```

  The denodified function inherits from the original function. It works in all
  environments, except IE 10 and below. Consequently all properties of the original
  function are available to you. However, any properties you change on the
  denodeified function won't be changed on the original function. Example:

  ```javascript
  let request = RSVP.denodeify(require('request')),
      cookieJar = request.jar(); // <- Inheritance is used here

  request('http://example.com', {jar: cookieJar}).then(function(res) {
    // cookieJar.cookies holds now the cookies returned by example.com
  });
  ```

  Using `denodeify` makes it easier to compose asynchronous operations instead
  of using callbacks. For example, instead of:

  ```javascript
  let fs = require('fs');

  fs.readFile('myfile.txt', function(err, data){
    if (err) { ... } // Handle error
    fs.writeFile('myfile2.txt', data, function(err){
      if (err) { ... } // Handle error
      console.log('done')
    });
  });
  ```

  you can chain the operations together using `then` from the returned promise:

  ```javascript
  let fs = require('fs');
  let readFile = RSVP.denodeify(fs.readFile);
  let writeFile = RSVP.denodeify(fs.writeFile);

  readFile('myfile.txt').then(function(data){
    return writeFile('myfile2.txt', data);
  }).then(function(){
    console.log('done')
  }).catch(function(error){
    // Handle error
  });
  ```

  @method denodeify
  @static
  @for RSVP
  @param {Function} nodeFunc a 'node-style' function that takes a callback as
  its last argument. The callback expects an error to be passed as its first
  argument (if an error occurred, otherwise null), and the value from the
  operation as its second argument ('function(err, value){ }').
  @param {Boolean|Array} [options] An optional paramter that if set
  to `true` causes the promise to fulfill with the callback's success arguments
  as an array. This is useful if the node function has multiple success
  paramters. If you set this paramter to an array with names, the promise will
  fulfill with a hash with these names as keys and the success parameters as
  values.
  @return {Function} a function that wraps `nodeFunc` to return an
  `RSVP.Promise`
  @static
*/
export default function denodeify(nodeFunc, options) {
  let fn = function() {
    let self = this;
    let l = arguments.length;
    let args = new Array(l + 1);
    let promiseInput = false;

    for (let i = 0; i < l; ++i) {
      let arg = arguments[i];

      if (!promiseInput) {
        // TODO: clean this up
        promiseInput = needsPromiseInput(arg);
        if (promiseInput === GET_THEN_ERROR) {
          let p = new Promise(noop);
          reject(p, GET_THEN_ERROR.value);
          return p;
        } else if (promiseInput && promiseInput !== true) {
          arg = wrapThenable(promiseInput, arg);
        }
      }
      args[i] = arg;
    }

    let promise = new Promise(noop);

    args[l] = function(err, val) {
      if (err)
        reject(promise, err);
      else if (options === undefined)
        resolve(promise, val);
      else if (options === true)
        resolve(promise, arrayResult(arguments));
      else if (isArray(options))
        resolve(promise, makeObject(arguments, options));
      else
        resolve(promise, val);
    };

    if (promiseInput) {
      return handlePromiseInput(promise, args, nodeFunc, self);
    } else {
      return handleValueInput(promise, args, nodeFunc, self);
    }
  };

  fn.__proto__ = nodeFunc;

  return fn;
}

function handleValueInput(promise, args, nodeFunc, self) {
  let result = tryApply(nodeFunc, self, args);
  if (result === ERROR) {
    reject(promise, result.value);
  }
  return promise;
}

function handlePromiseInput(promise, args, nodeFunc, self){
  return Promise.all(args).then(args => {
    let result = tryApply(nodeFunc, self, args);
    if (result === ERROR) {
      reject(promise, result.value);
    }
    return promise;
  });
}

function needsPromiseInput(arg) {
  if (arg && typeof arg === 'object') {
    if (arg.constructor === Promise) {
      return true;
    } else {
      return getThen(arg);
    }
  } else {
    return false;
  }
}
