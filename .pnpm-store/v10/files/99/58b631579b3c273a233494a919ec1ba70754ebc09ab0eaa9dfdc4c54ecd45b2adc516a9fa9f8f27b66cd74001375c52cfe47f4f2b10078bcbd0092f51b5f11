import { error, doneInvoke } from './actions.js';
import { toActorRef } from './Actor.js';
import { toObserver } from './utils.js';

/**
 * Returns an actor behavior from a reducer and its initial state.
 *
 * @param transition The pure reducer that returns the next state given the current state and event.
 * @param initialState The initial state of the reducer.
 * @returns An actor behavior
 */

function fromReducer(transition, initialState) {
  return {
    transition: transition,
    initialState: initialState
  };
}
function fromPromise(promiseFn) {
  var initialState = {
    error: undefined,
    data: undefined,
    status: 'pending'
  };
  return {
    transition: function (state, event, _a) {
      var parent = _a.parent,
          id = _a.id,
          observers = _a.observers;

      switch (event.type) {
        case 'fulfill':
          parent === null || parent === void 0 ? void 0 : parent.send(doneInvoke(id, event.data));
          return {
            error: undefined,
            data: event.data,
            status: 'fulfilled'
          };

        case 'reject':
          parent === null || parent === void 0 ? void 0 : parent.send(error(id, event.error));
          observers.forEach(function (observer) {
            observer.error(event.error);
          });
          return {
            error: event.error,
            data: undefined,
            status: 'rejected'
          };

        default:
          return state;
      }
    },
    initialState: initialState,
    start: function (_a) {
      var self = _a.self;
      promiseFn().then(function (data) {
        self.send({
          type: 'fulfill',
          data: data
        });
      }, function (reason) {
        self.send({
          type: 'reject',
          error: reason
        });
      });
      return initialState;
    }
  };
}
function spawnBehavior(behavior, options) {
  if (options === void 0) {
    options = {};
  }

  var state = behavior.initialState;
  var observers = new Set();
  var mailbox = [];
  var flushing = false;

  var flush = function () {
    if (flushing) {
      return;
    }

    flushing = true;

    while (mailbox.length > 0) {
      var event_1 = mailbox.shift();
      state = behavior.transition(state, event_1, actorCtx);
      observers.forEach(function (observer) {
        return observer.next(state);
      });
    }

    flushing = false;
  };

  var actor = toActorRef({
    id: options.id,
    send: function (event) {
      mailbox.push(event);
      flush();
    },
    getSnapshot: function () {
      return state;
    },
    subscribe: function (next, handleError, complete) {
      var observer = toObserver(next, handleError, complete);
      observers.add(observer);
      observer.next(state);
      return {
        unsubscribe: function () {
          observers.delete(observer);
        }
      };
    }
  });
  var actorCtx = {
    parent: options.parent,
    self: actor,
    id: options.id || 'anonymous',
    observers: observers
  };
  state = behavior.start ? behavior.start(actorCtx) : state;
  return actor;
}

export { fromPromise, fromReducer, spawnBehavior };
