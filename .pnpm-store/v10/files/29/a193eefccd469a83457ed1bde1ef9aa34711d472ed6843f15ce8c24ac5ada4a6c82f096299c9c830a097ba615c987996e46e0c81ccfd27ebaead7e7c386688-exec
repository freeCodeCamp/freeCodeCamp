// @flow
import fsmIterator from 'fsm-iterator';

const INIT = 'INIT';
const REFINE = 'REFINE';
const NEXT = 'NEXT';
const LOOP = 'LOOP';

const FALSY = '@@redux-saga-test-plan/falsy';
const SAGA_WRAPPER = '@@redux-saga-test-plan/saga-wrapper';

// Tagging falsy values that aren't null or undefined because
// redux-saga blocks when they are yielded.
// https://github.com/jfairbank/redux-saga-test-plan/issues/94
function wrapFalsy(value) {
  if (!value && value != null) {
    return { [FALSY]: true, value };
  }

  return value;
}

function unwrapFalsy(value) {
  if (value && typeof value === 'object' && value[FALSY]) {
    return value.value;
  }

  return value;
}

export function isSagaWrapper(saga: Function): boolean {
  return saga[SAGA_WRAPPER];
}

export default function createSagaWrapper(
  name: string = 'sagaWrapper',
): Function {
  function sagaWrapper(
    wrappedIterator: Generator<*, *, *>,
    refineYieldedValue: Function,
    onReturn: ?Function,
    onError: ?Function,
  ): Generator<*, *, *> {
    let result;

    function getNext(...args) {
      try {
        return wrappedIterator.next(...args);
      } catch (e) {
        if (typeof onError === 'function') {
          onError(e);
        }
        throw e;
      }
    }

    function complete() {
      if (typeof onReturn === 'function') {
        onReturn(result.value);
      }

      return {
        value: result.value,
        done: true,
      };
    }

    return fsmIterator(INIT, {
      [INIT](_, fsm) {
        result = getNext();
        return fsm[REFINE](undefined, fsm);
      },

      [REFINE](_, fsm) {
        try {
          if (result.done) {
            return complete();
          }

          let value = refineYieldedValue(result.value);

          value = Array.isArray(value)
            ? value.map(wrapFalsy)
            : wrapFalsy(value);

          return {
            value,
            next: NEXT,
          };
        } catch (e) {
          return fsm.throw(e, fsm);
        }
      },

      [NEXT](response, fsm) {
        const finalResponse = Array.isArray(response)
          ? response.map(unwrapFalsy)
          : unwrapFalsy(response);

        result = getNext(finalResponse);
        return fsm[LOOP](undefined, fsm);
      },

      [LOOP](_, fsm) {
        if (result.done) {
          return complete();
        }

        return fsm[REFINE](undefined, fsm);
      },

      return(value, fsm) {
        result = wrappedIterator.return(value);
        return fsm[LOOP](undefined, fsm);
      },

      throw(e, fsm) {
        try {
          result = wrappedIterator.throw(e);
        } catch (innerError) {
          if (typeof onError === 'function') {
            onError(innerError);
          }
          throw innerError;
        }
        return fsm[LOOP](undefined, fsm);
      },
    });
  }

  sagaWrapper[SAGA_WRAPPER] = true;

  try {
    Object.defineProperty(sagaWrapper, 'name', { value: name });
    // eslint-disable-next-line no-empty
  } catch (e) {}

  return sagaWrapper;
}
