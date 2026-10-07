const hasOwnProperty = Object.prototype.hasOwnProperty;

export default function fsmIterator(initialState, definition) {
  const fsm = { ...definition };

  let currentState = initialState;
  let done = false;
  let returnValue;
  let handledReturn = false;

  function setReturnValue(value) {
    returnValue = { value };
  }

  function consumeReturnValue() {
    if (returnValue) {
      const { value } = returnValue;
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
          done: true,
        };
      }

      return {
        value: undefined,
        done: true,
      };
    }

    if (result.next && result.done) {
      const errorMessage = 'You supplied a next state while specifying to end '
                         + 'the iterator. This is more than likely an accident. '
                         + `Please check your "${handlerName}" handler.`;

      throw new Error(errorMessage);
    }

    fsm.previousState = currentState;
    currentState = result.next || currentState;
    done = !!result.done;

    if (done && hasOwnProperty.call(result, 'value')) {
      consumeReturnValue();

      return {
        value: result.value,
        done: true,
      };
    }

    if (done && returnValue) {
      return {
        value: consumeReturnValue(),
        done: true,
      };
    }

    return {
      value: result.value,
      done,
    };
  }

  const iterator = {
    next(value) {
      if (!hasOwnProperty.call(fsm, currentState)) {
        return {
          value: undefined,
          done: true,
        };
      }

      const result = fsm[currentState](value, fsm);
      return processResult(result, currentState);
    },

    throw(e) {
      if (!hasOwnProperty.call(fsm, 'throw')) {
        throw e;
      }

      const result = fsm.throw(e, fsm);
      return processResult(result, 'throw');
    },

    return(value) {
      if (!returnValue) {
        setReturnValue(value);
      }

      if (!handledReturn && hasOwnProperty.call(fsm, 'return')) {
        handledReturn = true;

        const result = fsm.return(value, fsm);
        return processResult(result, 'return');
      }

      if (returnValue) {
        return {
          value: consumeReturnValue(),
          done: true,
        };
      }

      return {
        value,
        done: true,
      };
    },
  };

  if (typeof Symbol === 'function' && Symbol.iterator) {
    iterator[Symbol.iterator] = () => iterator;
  }

  return iterator;
}
