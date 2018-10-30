'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpyRegistry;

var _call_tracker = require('./call_tracker');

var _call_tracker2 = _interopRequireDefault(_call_tracker);

var _create_spy = require('./create_spy');

var _create_spy2 = _interopRequireDefault(_create_spy);

var _spy_strategy = require('./spy_strategy');

var _spy_strategy2 = _interopRequireDefault(_spy_strategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formatErrorMsg = (domain, usage) => {
  const usageDefinition = usage ? '\nUsage: ' + usage : '';
  return msg => domain + ' : ' + msg + usageDefinition;
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    */
// This file is a heavily modified fork of Jasmine. Original license:
/*
Copyright (c) 2008-2016 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


function isSpy(putativeSpy) {
  if (!putativeSpy) {
    return false;
  }
  return putativeSpy.and instanceof _spy_strategy2.default && putativeSpy.calls instanceof _call_tracker2.default;
}

const getErrorMsg = formatErrorMsg('<spyOn>', 'spyOn(<object>, <methodName>)');

function SpyRegistry(options) {
  options = options || {};
  const currentSpies = options.currentSpies || function () {
    return [];
  };

  this.allowRespy = function (allow) {
    this.respy = allow;
  };

  this.spyOn = function (obj, methodName, accessType) {
    if (accessType) {
      return this._spyOnProperty(obj, methodName, accessType);
    }

    if (obj === void 0) {
      throw new Error(getErrorMsg('could not find an object to spy upon for ' + methodName + '()'));
    }

    if (methodName === void 0) {
      throw new Error(getErrorMsg('No method name supplied'));
    }

    if (obj[methodName] === void 0) {
      throw new Error(getErrorMsg(methodName + '() method does not exist'));
    }

    if (obj[methodName] && isSpy(obj[methodName])) {
      if (this.respy) {
        return obj[methodName];
      } else {
        throw new Error(getErrorMsg(methodName + ' has already been spied upon'));
      }
    }

    let descriptor;
    try {
      descriptor = Object.getOwnPropertyDescriptor(obj, methodName);
    } catch (e) {
      // IE 8 doesn't support `definePropery` on non-DOM nodes
    }

    if (descriptor && !(descriptor.writable || descriptor.set)) {
      throw new Error(getErrorMsg(methodName + ' is not declared writable or has no setter'));
    }

    const originalMethod = obj[methodName];
    const spiedMethod = (0, _create_spy2.default)(methodName, originalMethod);
    let restoreStrategy;

    if (Object.prototype.hasOwnProperty.call(obj, methodName)) {
      restoreStrategy = function () {
        obj[methodName] = originalMethod;
      };
    } else {
      restoreStrategy = function () {
        if (!delete obj[methodName]) {
          obj[methodName] = originalMethod;
        }
      };
    }

    currentSpies().push({
      restoreObjectToOriginalState: restoreStrategy
    });

    obj[methodName] = spiedMethod;

    return spiedMethod;
  };

  this._spyOnProperty = function (obj, propertyName) {
    let accessType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';

    if (!obj) {
      throw new Error(getErrorMsg('could not find an object to spy upon for ' + propertyName));
    }

    if (!propertyName) {
      throw new Error(getErrorMsg('No property name supplied'));
    }

    let descriptor;
    try {
      descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
    } catch (e) {
      // IE 8 doesn't support `definePropery` on non-DOM nodes
    }

    if (!descriptor) {
      throw new Error(getErrorMsg(propertyName + ' property does not exist'));
    }

    if (!descriptor.configurable) {
      throw new Error(getErrorMsg(propertyName + ' is not declared configurable'));
    }

    if (!descriptor[accessType]) {
      throw new Error(getErrorMsg('Property ' + propertyName + ' does not have access type ' + accessType));
    }

    if (obj[propertyName] && isSpy(obj[propertyName])) {
      if (this.respy) {
        return obj[propertyName];
      } else {
        throw new Error(getErrorMsg(propertyName + ' has already been spied upon'));
      }
    }

    const originalDescriptor = descriptor;
    const spiedProperty = (0, _create_spy2.default)(propertyName, descriptor[accessType]);
    let restoreStrategy;

    if (Object.prototype.hasOwnProperty.call(obj, propertyName)) {
      restoreStrategy = function () {
        Object.defineProperty(obj, propertyName, originalDescriptor);
      };
    } else {
      restoreStrategy = function () {
        delete obj[propertyName];
      };
    }

    currentSpies().push({
      restoreObjectToOriginalState: restoreStrategy
    });

    const spiedDescriptor = Object.assign({}, descriptor, {
      [accessType]: spiedProperty
    });

    Object.defineProperty(obj, propertyName, spiedDescriptor);

    return spiedProperty;
  };

  this.clearSpies = function () {
    const spies = currentSpies();
    for (let i = spies.length - 1; i >= 0; i--) {
      const spyEntry = spies[i];
      spyEntry.restoreObjectToOriginalState();
    }
  };
}