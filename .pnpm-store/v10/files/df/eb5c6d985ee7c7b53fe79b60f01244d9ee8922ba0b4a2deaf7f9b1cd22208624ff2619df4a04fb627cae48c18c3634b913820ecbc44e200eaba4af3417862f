import { __assign, __spreadArray, __read } from './_virtual/_tslib.js';
import { assign } from './actions.js';
import { createMachine } from './Machine.js';
import { mapValues } from './utils.js';

function createModel(initialContext, creators) {
  var eventCreators = creators === null || creators === void 0 ? void 0 : creators.events;
  var actionCreators = creators === null || creators === void 0 ? void 0 : creators.actions;
  var model = {
    initialContext: initialContext,
    assign: assign,
    events: eventCreators ? mapValues(eventCreators, function (fn, eventType) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return __assign(__assign({}, fn.apply(void 0, __spreadArray([], __read(args), false))), {
          type: eventType
        });
      };
    }) : undefined,
    actions: actionCreators ? mapValues(actionCreators, function (fn, actionType) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return __assign(__assign({}, fn.apply(void 0, __spreadArray([], __read(args), false))), {
          type: actionType
        });
      };
    }) : undefined,
    reset: function () {
      return assign(initialContext);
    },
    createMachine: function (config, implementations) {
      return createMachine('context' in config ? config : __assign(__assign({}, config), {
        context: initialContext
      }), implementations);
    }
  };
  return model;
}

export { createModel };
