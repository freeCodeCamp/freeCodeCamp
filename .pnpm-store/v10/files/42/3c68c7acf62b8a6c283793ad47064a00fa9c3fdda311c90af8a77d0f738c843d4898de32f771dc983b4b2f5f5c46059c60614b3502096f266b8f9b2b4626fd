import { StateNode } from './StateNode.js';
import { IS_PRODUCTION } from './environment.js';

var warned = false;
function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }

  return new StateNode(config, options, initialContext);
}
function createMachine(config, options) {
  if (!IS_PRODUCTION && !('predictableActionArguments' in config) && !warned) {
    warned = true;
    console.warn('It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html');
  }

  return new StateNode(config, options);
}

export { Machine, createMachine };
