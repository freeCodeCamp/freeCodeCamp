"use strict";

exports.__esModule = true;
exports.runMutationBatch = void 0;
var _callDeferredApi = require("../utils/call-deferred-api");
// Consume the entire batch and run actions
const runMutationBatch = async ({
  runningBatch = [],
  store
}) => Promise.all(runningBatch.map(payload => (0, _callDeferredApi.callRealApi)(payload, store)));
exports.runMutationBatch = runMutationBatch;
//# sourceMappingURL=run-mutation-batch.js.map