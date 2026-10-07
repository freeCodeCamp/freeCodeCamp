Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugLogger = require('../../utils/debug-logger.js');
const debugBuild = require('../../debug-build.js');
const timer = require('../../utils/timer.js');

const clientToRequestSessionAggregatesMap = /* @__PURE__ */ new WeakMap();
function recordRequestSession(client, {
  requestIsolationScope,
  response,
  sessionFlushingDelayMS
}) {
  requestIsolationScope.setSDKProcessingMetadata({
    requestSession: { status: "ok" }
  });
  response.once("close", () => {
    const requestSession = requestIsolationScope.getScopeData().sdkProcessingMetadata.requestSession;
    if (client && requestSession) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(`Recorded request session with status: ${requestSession.status}`);
      const roundedDate = /* @__PURE__ */ new Date();
      roundedDate.setSeconds(0, 0);
      const dateBucketKey = roundedDate.toISOString();
      const existingClientAggregate = clientToRequestSessionAggregatesMap.get(client);
      const bucket = existingClientAggregate?.[dateBucketKey] || { exited: 0, crashed: 0, errored: 0 };
      bucket[{ ok: "exited", crashed: "crashed", errored: "errored" }[requestSession.status]]++;
      if (existingClientAggregate) {
        existingClientAggregate[dateBucketKey] = bucket;
      } else {
        debugBuild.DEBUG_BUILD && debugLogger.debug.log("Opened new request session aggregate.");
        const newClientAggregate = { [dateBucketKey]: bucket };
        clientToRequestSessionAggregatesMap.set(client, newClientAggregate);
        const flushPendingClientAggregates = () => {
          clearTimeout(timeout);
          unregisterClientFlushHook();
          clientToRequestSessionAggregatesMap.delete(client);
          const aggregatePayload = Object.entries(newClientAggregate).map(
            ([timestamp, value]) => ({
              started: timestamp,
              exited: value.exited,
              errored: value.errored,
              crashed: value.crashed
            })
          );
          client.sendSession({ aggregates: aggregatePayload });
        };
        const unregisterClientFlushHook = client.on("flush", () => {
          debugBuild.DEBUG_BUILD && debugLogger.debug.log("Sending request session aggregate due to client flush");
          flushPendingClientAggregates();
        });
        const timeout = setTimeout(() => {
          debugBuild.DEBUG_BUILD && debugLogger.debug.log("Sending request session aggregate due to flushing schedule");
          flushPendingClientAggregates();
        }, sessionFlushingDelayMS);
        timer.safeUnref(timeout);
      }
    }
  });
}

exports.recordRequestSession = recordRequestSession;
//# sourceMappingURL=record-request-session.js.map
