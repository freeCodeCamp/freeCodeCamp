import { loadSDKVersion } from "../util.mjs";
import { EVENT_EXPERIMENT_VIEWED, EVENT_FEATURE_EVALUATED } from "../core.mjs";
const SDK_VERSION = loadSDKVersion();
function parseString(value) {
  return typeof value === "string" ? value : null;
}
function parseAttributes(attributes) {
  const {
    user_id,
    device_id,
    anonymous_id,
    id,
    page_id,
    session_id,
    utmCampaign,
    utmContent,
    utmMedium,
    utmSource,
    utmTerm,
    pageTitle,
    ...nested
  } = attributes;
  return {
    nested,
    topLevel: {
      user_id: parseString(user_id),
      device_id: parseString(device_id || anonymous_id || id),
      page_id: parseString(page_id),
      session_id: parseString(session_id),
      utm_campaign: parseString(utmCampaign) || undefined,
      utm_content: parseString(utmContent) || undefined,
      utm_medium: parseString(utmMedium) || undefined,
      utm_source: parseString(utmSource) || undefined,
      utm_term: parseString(utmTerm) || undefined,
      page_title: parseString(pageTitle) || undefined
    }
  };
}
function getEventPayload({
  eventName,
  properties,
  attributes,
  url
}) {
  const {
    nested,
    topLevel
  } = parseAttributes(attributes || {});
  return {
    event_name: eventName,
    properties_json: properties || {},
    ...topLevel,
    sdk_language: "js",
    sdk_version: SDK_VERSION,
    url: url,
    context_json: nested
  };
}
async function track({
  clientKey,
  ingestorHost,
  events
}) {
  if (!events.length) return;
  const endpoint = `${ingestorHost || "https://us1.gb-ingest.com"}/track?client_key=${clientKey}`;
  const body = JSON.stringify(events);
  try {
    await fetch(endpoint, {
      method: "POST",
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain"
      },
      credentials: "omit"
    });
  } catch (e) {
    console.error("Failed to track event", e);
  }
}
export function growthbookTrackingPlugin({
  queueFlushInterval = 100,
  ingestorHost,
  enable = true,
  debug,
  dedupeCacheSize = 1000,
  dedupeKeyAttributes = [],
  eventFilter
} = {}) {
  return gb => {
    const clientKey = gb.getClientKey();
    if (!clientKey) {
      throw new Error("clientKey must be specified to use event logging");
    }

    // LRU cache for events to avoid duplicates
    const eventCache = new Set();
    if ("setEventLogger" in gb) {
      let _q = [];
      let timer = null;
      const flush = async () => {
        const events = _q;
        _q = [];
        timer && clearTimeout(timer);
        timer = null;
        events.length && (await track({
          clientKey,
          events,
          ingestorHost
        }));
      };
      let promise = null;
      gb.setEventLogger(async (eventName, properties, userContext) => {
        const data = {
          eventName,
          properties,
          attributes: userContext.attributes || {},
          url: userContext.url || ""
        };

        // Skip logging if the event is being filtered
        if (eventFilter && !eventFilter(data)) {
          return;
        }

        // De-dupe Feature Evaluated and Experiment Viewed events
        if (eventName === EVENT_FEATURE_EVALUATED || eventName === EVENT_EXPERIMENT_VIEWED) {
          // Build the key for de-duping
          const dedupeKeyData = {
            eventName,
            properties
          };
          for (const key of dedupeKeyAttributes) {
            dedupeKeyData["attr:" + key] = data.attributes[key];
          }
          const k = JSON.stringify(dedupeKeyData);
          // Duplicate event fired recently, move to end of LRU cache and skip
          if (eventCache.has(k)) {
            eventCache.delete(k);
            eventCache.add(k);
            return;
          }
          eventCache.add(k);

          // If the cache is too big, remove the oldest item
          if (eventCache.size > dedupeCacheSize) {
            const oldest = eventCache.values().next().value;
            oldest && eventCache.delete(oldest);
          }
        }
        const payload = getEventPayload(data);
        debug && console.log("Logging event to GrowthBook", JSON.parse(JSON.stringify(payload)));
        if (!enable) return;
        _q.push(payload);

        // Only one in-progress promise at a time
        if (!promise) {
          promise = new Promise((resolve, reject) => {
            // Flush the queue after a delay
            timer = setTimeout(() => {
              flush().then(resolve).catch(reject);
              promise = null;
            }, queueFlushInterval);
          });
        }
        await promise;
      });

      // Flush the queue on page unload
      if (typeof document !== "undefined" && document.visibilityState) {
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "hidden") {
            flush().catch(console.error);
          }
        });
      }

      // Flush the queue when the growthbook instance is destroyed
      "onDestroy" in gb && gb.onDestroy(() => {
        flush().catch(console.error);
      });
    }

    // Listen on window.gbEvents.push if in a browser
    // This makes it easier to integrate with Segment, GTM, etc.
    if (typeof window !== "undefined" && !("createScopedInstance" in gb)) {
      const prevEvents = Array.isArray(window.gbEvents) ? window.gbEvents : [];
      window.gbEvents = {
        push: event => {
          if ("isDestroyed" in gb && gb.isDestroyed()) {
            // If trying to log and the instance has been destroyed, switch back to just an array
            // This will let the next GrowthBook instance pick it up
            window.gbEvents = [event];
            return;
          }
          if (typeof event === "string") {
            gb.logEvent(event);
          } else if (event) {
            gb.logEvent(event.eventName, event.properties);
          }
        }
      };
      for (const event of prevEvents) {
        window.gbEvents.push(event);
      }
    }
  };
}
//# sourceMappingURL=growthbook-tracking.mjs.map