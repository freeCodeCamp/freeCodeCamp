'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = fsmIterator;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function fsmIterator(initialState, definition) {
  var fsm = _extends({}, definition);

  var currentState = initialState;
  var done = false;
  var returnValue = void 0;
  var handledReturn = false;

  function setReturnValue(value) {
    returnValue = { value: value };
  }

  function consumeReturnValue() {
    if (returnValue) {
      var _returnValue = returnValue,
          value = _returnValue.value;

      returnValue = undefined;

      return value;
    }

    return undefined;
  }

  function processResult(result, handlerName) {
    if (done) {
      if (returnValue) {
        return {
          value: consumeReturnValue(),
          done: true
        };
      }

      return {
        value: undefined,
        done: true
      };
    }

    if (result.next && result.done) {
      var errorMessage = 'You supplied a next state while specifying to end ' + 'the iterator. This is more than likely an accident. ' + ('Please check your "' + handlerName + '" handler.');

      throw new Error(errorMessage);
    }

    fsm.previousState = currentState;
    currentState = result.next || currentState;
    done = !!result.done;

    if (done && hasOwnProperty.call(result, 'value')) {
      consumeReturnValue();

      return {
        value: result.value,
        done: true
      };
    }

    if (done && returnValue) {
      return {
        value: consumeReturnValue(),
        done: true
      };
    }

    return {
      value: result.value,
      done: done
    };
  }

  var iterator = {
    next: function next(value) {
      if (!hasOwnProperty.call(fsm, currentState)) {
        return {
          value: undefined,
          done: true
        };
      }

      var result = fsm[currentState](value, fsm);
      return processResult(result, currentState);
    },
    throw: function _throw(e) {
      if (!hasOwnProperty.call(fsm, 'throw')) {
        throw e;
      }

      var result = fsm.throw(e, fsm);
      return processResult(result, 'throw');
    },
    return: function _return(value) {
      if (!returnValue) {
        setReturnValue(value);
      }

      if (!handledReturn && hasOwnProperty.call(fsm, 'return')) {
        handledReturn = true;

        var result = fsm.return(value, fsm);
        return processResult(result, 'return');
      }

      if (returnValue) {
        return {
          value: consumeReturnValue(),
          done: true
        };
      }

      return {
        value: value,
        done: true
      };
    }
  };

  if (typeof Symbol === 'function' && Symbol.iterator) {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}