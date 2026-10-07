import { debug } from '../../utils/debug-logger.js';
import { DEBUG_BUILD } from '../../debug-build.js';
import { safeUnref } from '../../utils/timer.js';

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
      DEBUG_BUILD && debug.log(`Recorded request session with status: ${requestSession.status}`);
      const roundedDate = /* @__PURE__ */ new Date();
      roundedDate.setSeconds(0, 0);
      const dateBucketKey = roundedDate.toISOString();
      const existingClientAggregate = clientToRequestSessionAggregatesMap.get(client);
      const bucket = existingClientAggregate?.[dateBucketKey] || { exited: 0, crashed: 0, errored: 0 };
      bucket[{ ok: "exited", crashed: "crashed", errored: "errored" }[requestSession.status]]++;
      if (existingClientAggregate) {
        existingClientAggregate[dateBucketKey] = bucket;
      } else {
        DEBUG_BUILD && debug.log("Opened new request session aggregate.");
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
          DEBUG_BUILD && debug.log("Sending request session aggregate due to client flush");
          flushPendingClientAggregates();
        });
        const timeout = setTimeout(() => {
          DEBUG_BUILD && debug.log("Sending request session aggregate due to flushing schedule");
          flushPendingClientAggregates();
        }, sessionFlushingDelayMS);
        safeUnref(timeout);
      }
    }
  });
}

export { recordRequestSession };
//# sourceMappingURL=record-request-session.js.map
