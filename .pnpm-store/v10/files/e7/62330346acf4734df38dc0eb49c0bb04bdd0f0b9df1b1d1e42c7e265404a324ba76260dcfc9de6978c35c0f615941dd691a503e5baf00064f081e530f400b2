'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('./utils.js');

function stringifyFunction(fn) {
  return {
    $function: fn.toString()
  };
}

function getStateNodeId(stateNode) {
  return "#".concat(stateNode.id);
} // derive config from machine


function machineToJSON(stateNode) {
  var config = {
    type: stateNode.type,
    initial: stateNode.initial === undefined ? undefined : String(stateNode.initial),
    id: stateNode.id,
    key: stateNode.key,
    entry: stateNode.onEntry,
    exit: stateNode.onExit,
    on: utils.mapValues(stateNode.on, function (transition) {
      return transition.map(function (t) {
        return {
          target: t.target ? t.target.map(getStateNodeId) : [],
          source: getStateNodeId(t.source),
          actions: t.actions,
          cond: t.cond,
          eventType: t.eventType
        };
      });
    }),
    invoke: stateNode.invoke,
    states: {}
  };
  Object.values(stateNode.states).forEach(function (sn) {
    config.states[sn.key] = machineToJSON(sn);
  });
  return config;
}
function stringify(machine) {
  return JSON.stringify(machineToJSON(machine), function (_, value) {
    if (utils.isFunction(value)) {
      return {
        $function: value.toString()
      };
    }

    return value;
  });
}
function parse(machineString) {
  var config = JSON.parse(machineString, function (_, value) {
    if (typeof value === 'object' && '$function' in value) {
      return new Function(value.value);
    }

    return value;
  });
  return config;
}
function jsonify(value) {
  Object.defineProperty(value, 'toJSON', {
    value: function () {
      return utils.mapValues(value, function (subValue) {
        if (utils.isFunction(subValue)) {
          return stringifyFunction(subValue);
        } else if (typeof subValue === 'object' && !Array.isArray(subValue)) {
          // mostly for assignments
          return utils.mapValues(subValue, function (subSubValue) {
            if (utils.isFunction(subSubValue)) {
              return stringifyFunction(subSubValue);
            }

            return subSubValue;
          });
        }

        return subValue;
      });
    }
  });
  return value;
}

exports.jsonify = jsonify;
exports.machineToJSON = machineToJSON;
exports.parse = parse;
exports.stringify = stringify;
exports.stringifyFunction = stringifyFunction;
