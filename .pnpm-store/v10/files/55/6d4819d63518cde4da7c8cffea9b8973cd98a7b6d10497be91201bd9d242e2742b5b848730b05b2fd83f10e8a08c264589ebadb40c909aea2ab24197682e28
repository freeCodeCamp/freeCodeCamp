import { defineIntegration } from '../integration.js';
import { stripMetadataFromStackFrames, addMetadataToStackFrames } from '../metadata.js';
import { forEachEnvelopeItem } from '../utils/envelope.js';
import { getFramesFromEvent } from '../utils/stacktrace.js';
import { GLOBAL_OBJ } from '../utils/worldwide.js';

const thirdPartyErrorFilterIntegration = defineIntegration((options) => {
  return {
    name: "ThirdPartyErrorsFilter",
    setup(client) {
      client.on("beforeEnvelope", (envelope) => {
        forEachEnvelopeItem(envelope, (item, type) => {
          if (type === "event") {
            const event = Array.isArray(item) ? item[1] : void 0;
            if (event) {
              stripMetadataFromStackFrames(event);
              item[1] = event;
            }
          }
        });
      });
      client.on("applyFrameMetadata", (event) => {
        if (event.type) {
          return;
        }
        const stackParser = client.getOptions().stackParser;
        addMetadataToStackFrames(stackParser, event);
      });
    },
    preprocessEvent(event) {
      if (options.ignoreSentryInternalFrames && (GLOBAL_OBJ._sentryWrappedDepth ?? 0) > 0) {
        event.sdkProcessingMetadata = {
          ...event.sdkProcessingMetadata,
          insideSentryWrapped: true
        };
      }
    },
    processEvent(event) {
      const insideSentryWrapped = options.ignoreSentryInternalFrames ? event.sdkProcessingMetadata?.insideSentryWrapped === true && event.exception?.values?.length === 1 : false;
      const frameKeys = getBundleKeysForAllFramesWithFilenames(
        event,
        options.ignoreSentryInternalFrames,
        insideSentryWrapped
      );
      if (frameKeys) {
        const arrayMethod = options.behaviour === "drop-error-if-contains-third-party-frames" || options.behaviour === "apply-tag-if-contains-third-party-frames" ? "some" : "every";
        const behaviourApplies = frameKeys[arrayMethod]((keys) => !keys.some((key) => options.filterKeys.includes(key)));
        if (behaviourApplies) {
          const shouldDrop = options.behaviour === "drop-error-if-contains-third-party-frames" || options.behaviour === "drop-error-if-exclusively-contains-third-party-frames";
          if (shouldDrop) {
            return null;
          } else {
            event.tags = {
              ...event.tags,
              third_party_code: true
            };
          }
        }
      }
      return event;
    }
  };
});
function isSentryInternalFrame(frame, frameIndex, insideSentryWrapped) {
  if (frameIndex !== 0) {
    return false;
  }
  if (insideSentryWrapped && isLikelyMinifiedSentryWrappedFrame(frame)) {
    return true;
  }
  if (frame.function === "sentryWrapped") {
    return true;
  }
  if (!frame.context_line || !frame.filename) {
    return false;
  }
  if (!frame.filename.includes("sentry") || !frame.filename.includes("helpers") || // Filename would look something like this: 'node_modules/@sentry/browser/build/npm/esm/helpers.js'
  !frame.context_line.includes(SENTRY_INTERNAL_FN_APPLY)) {
    return false;
  }
  if (frame.pre_context) {
    const len = frame.pre_context.length;
    for (let i = 0; i < len; i++) {
      if (frame.pre_context[i]?.includes(SENTRY_INTERNAL_COMMENT)) {
        return true;
      }
    }
  }
  return false;
}
function getBundleKeysForAllFramesWithFilenames(event, ignoreSentryInternalFrames, insideSentryWrapped) {
  const frames = getFramesFromEvent(event);
  if (!frames) {
    return void 0;
  }
  return frames.filter((frame, index) => {
    if (!frame.filename) {
      return false;
    }
    if (frame.lineno == null && frame.colno == null && frame.instruction_addr == null) {
      return false;
    }
    return !ignoreSentryInternalFrames || !isSentryInternalFrame(frame, index, !!insideSentryWrapped);
  }).map((frame) => {
    if (!frame.module_metadata) {
      return [];
    }
    return Object.keys(frame.module_metadata).filter((key) => key.startsWith(BUNDLER_PLUGIN_APP_KEY_PREFIX)).map((key) => key.slice(BUNDLER_PLUGIN_APP_KEY_PREFIX.length));
  });
}
function isLikelyMinifiedSentryWrappedFrame(frame) {
  return !frame.context_line && !frame.pre_context && !!frame.function && frame.function.length <= 2;
}
const BUNDLER_PLUGIN_APP_KEY_PREFIX = "_sentryBundlerPluginAppKey:";
const SENTRY_INTERNAL_COMMENT = "Attempt to invoke user-land function";
const SENTRY_INTERNAL_FN_APPLY = "fn.apply(this, wrappedArguments)";

export { thirdPartyErrorFilterIntegration };
//# sourceMappingURL=third-party-errors-filter.js.map
