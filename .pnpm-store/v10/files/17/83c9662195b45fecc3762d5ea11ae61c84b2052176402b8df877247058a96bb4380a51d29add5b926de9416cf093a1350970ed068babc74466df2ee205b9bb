import { debug } from '../../utils/debug-logger.js';
import { DEBUG_BUILD } from '../../debug-build.js';
import { getMaxBodyByteLength } from '../../utils/request.js';

function patchRequestToCaptureBody(req, isolationScope, maxIncomingRequestBodySize, integrationName) {
  let bodyByteLength = 0;
  const chunks = [];
  DEBUG_BUILD && debug.log(integrationName, "Patching request.on");
  const callbackMap = /* @__PURE__ */ new WeakMap();
  const maxBodySize = getMaxBodyByteLength(maxIncomingRequestBodySize);
  try {
    req.on = req.addListener = new Proxy(req.on, {
      apply: (target, thisArg, args) => {
        const [event, listener, ...restArgs] = args;
        if (event === "data") {
          DEBUG_BUILD && debug.log(integrationName, `Handling request.on("data") with maximum body size of ${maxBodySize}b`);
          const callback = new Proxy(listener, {
            apply: (target2, thisArg2, args2) => {
              try {
                const chunk = args2[0];
                const bufferifiedChunk = Buffer.from(chunk);
                if (bodyByteLength < maxBodySize) {
                  chunks.push(bufferifiedChunk);
                  bodyByteLength += bufferifiedChunk.byteLength;
                } else if (DEBUG_BUILD) {
                  debug.log(
                    integrationName,
                    `Dropping request body chunk because maximum body length of ${maxBodySize}b is exceeded.`
                  );
                }
              } catch (_err) {
                DEBUG_BUILD && debug.error(integrationName, "Encountered error while storing body chunk.");
              }
              return Reflect.apply(target2, thisArg2, args2);
            }
          });
          callbackMap.set(listener, callback);
          return Reflect.apply(target, thisArg, [event, callback, ...restArgs]);
        }
        return Reflect.apply(target, thisArg, args);
      }
    });
    req.off = req.removeListener = new Proxy(req.off, {
      apply: (target, thisArg, args) => {
        const [, listener] = args;
        const callback = callbackMap.get(listener);
        if (callback) {
          callbackMap.delete(listener);
          const modifiedArgs = args.slice();
          modifiedArgs[1] = callback;
          return Reflect.apply(target, thisArg, modifiedArgs);
        }
        return Reflect.apply(target, thisArg, args);
      }
    });
    req.on("end", () => {
      try {
        const body = Buffer.concat(chunks).toString("utf-8");
        if (body) {
          const bodyByteLength2 = Buffer.byteLength(body, "utf-8");
          const truncatedBody = bodyByteLength2 > maxBodySize ? `${Buffer.from(body).subarray(0, maxBodySize - 3).toString("utf-8")}...` : body;
          isolationScope.setSDKProcessingMetadata({ normalizedRequest: { data: truncatedBody } });
        }
      } catch (error) {
        if (DEBUG_BUILD) {
          debug.error(integrationName, "Error building captured request body", error);
        }
      }
    });
  } catch (error) {
    if (DEBUG_BUILD) {
      debug.error(integrationName, "Error patching request to capture body", error);
    }
  }
}

export { patchRequestToCaptureBody };
//# sourceMappingURL=patch-request-to-capture-body.js.map
