'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var StateNode = require('./StateNode.js');
var environment = require('./environment.js');

var warned = false;
function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }

  return new StateNode.StateNode(config, options, initialContext);
}
function createMachine(config, options) {
  if (!environment.IS_PRODUCTION && !('predictableActionArguments' in config) && !warned) {
    warned = true;
    console.warn('It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html');
  }

  return new StateNode.StateNode(config, options);
}

exports.Machine = Machine;
exports.createMachine = createMachine;
