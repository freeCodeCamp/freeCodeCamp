"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.callRealApi = void 0;
var _assertStore = require("./assert-store");
var _actions = require("../redux/actions");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
/**
 * These are the deferred redux actions sent from api-runner-node
 * They may include a `resolve` prop (if they are createNode actions).
 * If so, we resolve the promise when we're done
 */
const callRealApi = (event, store) => {
  (0, _assertStore.assertStore)(store);
  const {
    type,
    payload,
    resolve
  } = event;
  if (type in _actions.actions) {
    // If this is a createNode action then this will be a thunk.
    // No worries, we just dispatch it like any other
    const action = _actions.actions[type](...payload);
    const result = store.dispatch(action);
    // Somebody may be waiting for this
    if (resolve) {
      resolve(result);
    }
  } else {
    _reporter.default.log(`Could not dispatch unknown action "${type}`);
  }
};
exports.callRealApi = callRealApi;
//# sourceMappingURL=call-deferred-api.js.map