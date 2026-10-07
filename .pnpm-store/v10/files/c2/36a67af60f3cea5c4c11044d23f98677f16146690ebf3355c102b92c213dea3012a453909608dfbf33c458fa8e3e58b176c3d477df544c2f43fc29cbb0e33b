"use strict";

exports.__esModule = true;
exports.waitingActions = exports.extractQueries = exports.callApi = exports.addNodeMutation = void 0;
var _xstate = require("xstate");
var _callDeferredApi = require("../../utils/call-deferred-api");
const callApi = ({
  store
}, event) => (0, _callDeferredApi.callRealApi)(event.payload, store);

/**
 * Event handler used when we're not ready to process node mutations.
 * Instead we add it to a batch to process when we're next idle
 */
exports.callApi = callApi;
const addNodeMutation = (0, _xstate.assign)({
  nodeMutationBatch: ({
    nodeMutationBatch = []
  }, {
    payload
  }) => {
    // It's not pretty, but it's much quicker than concat
    nodeMutationBatch.push(payload);
    return nodeMutationBatch;
  }
});
exports.addNodeMutation = addNodeMutation;
const extractQueries = (0, _xstate.sendParent)(`EXTRACT_QUERIES_NOW`);
exports.extractQueries = extractQueries;
const waitingActions = {
  addNodeMutation,
  extractQueries,
  callApi
};
exports.waitingActions = waitingActions;
//# sourceMappingURL=actions.js.map