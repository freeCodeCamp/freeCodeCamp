'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var actions = require('./actions.js');
var Machine = require('./Machine.js');
var utils = require('./utils.js');

function createModel(initialContext, creators) {
  var eventCreators = creators === null || creators === void 0 ? void 0 : creators.events;
  var actionCreators = creators === null || creators === void 0 ? void 0 : creators.actions;
  var model = {
    initialContext: initialContext,
    assign: actions.assign,
    events: eventCreators ? utils.mapValues(eventCreators, function (fn, eventType) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return _tslib.__assign(_tslib.__assign({}, fn.apply(void 0, _tslib.__spreadArray([], _tslib.__read(args), false))), {
          type: eventType
        });
      };
    }) : undefined,
    actions: actionCreators ? utils.mapValues(actionCreators, function (fn, actionType) {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return _tslib.__assign(_tslib.__assign({}, fn.apply(void 0, _tslib.__spreadArray([], _tslib.__read(args), false))), {
          type: actionType
        });
      };
    }) : undefined,
    reset: function () {
      return actions.assign(initialContext);
    },
    createMachine: function (config, implementations) {
      return Machine.createMachine('context' in config ? config : _tslib.__assign(_tslib.__assign({}, config), {
        context: initialContext
      }), implementations);
    }
  };
  return model;
}

exports.createModel = createModel;
