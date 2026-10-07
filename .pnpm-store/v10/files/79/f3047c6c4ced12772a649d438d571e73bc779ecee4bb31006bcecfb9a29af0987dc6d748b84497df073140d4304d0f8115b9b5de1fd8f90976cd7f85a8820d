"use strict";

// Initial file from https://github.com/rolandstarke/node-cache-manager-fs-hash @ af52d2d
/* !
The MIT License (MIT)

Copyright (c) 2017 Roland Starke

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/**
 * adds an callback param to the original function
 * @param {function} fn
 * @returns {function}
 */
module.exports = function wrapCallback(fn) {
  return function (...args) {
    let cb;
    if (typeof args[args.length - 1] === `function`) {
      cb = args.pop();
    }

    // @ts-ignore - unsure if fixing this introduces problems
    const promise = fn.apply(this, args); // eslint-disable-line @babel/no-invalid-this

    if (typeof cb === `function`) {
      promise.then(value => setImmediate(cb, null, value), err => setImmediate(cb, err));
    }
    return promise;
  };
};
//# sourceMappingURL=wrap-callback.js.map