"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.logTransitions = logTransitions;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
const isInterpreter = actor => `machine` in actor;
function logTransitions(service) {
  const listeners = new WeakSet();
  let last;
  service.onTransition(state => {
    var _service$children;
    if (!last) {
      last = state;
    } else if (!state.changed || last.matches(state)) {
      return;
    }
    last = state;
    if (process.env.gatsby_log_level === `verbose`) {
      _reporter.default.verbose(`Transition to ${JSON.stringify(state.value)}`);
    }
    // eslint-disable-next-line no-unused-expressions
    (_service$children = service.children) === null || _service$children === void 0 ? void 0 : _service$children.forEach(child => {
      // We want to ensure we don't attach a listener to the same
      // actor. We don't need to worry about detaching the listener
      // because xstate handles that for us when the actor is stopped.

      // @ts-ignore - TODO: Fix it
      if (isInterpreter(child) && !listeners.has(child)) {
        let sublast = child.state;
        child.onTransition(substate => {
          if (!sublast) {
            sublast = substate;
          } else if (!substate.changed || sublast.matches(substate)) {
            return;
          }
          sublast = substate;
          if (process.env.gatsby_log_level === `verbose`) {
            _reporter.default.verbose(`Transition to ${JSON.stringify(state.value)} > ${JSON.stringify(substate.value)}`);
          }
        });
        listeners.add(child);
      }
    });
  });
}
//# sourceMappingURL=state-machine-logging.js.map