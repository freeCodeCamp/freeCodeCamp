"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thirdPartyTrackingPlugin = thirdPartyTrackingPlugin;
function thirdPartyTrackingPlugin({
  additionalCallback,
  trackers = ["gtag", "gtm", "segment"]
} = {}) {
  // Browser only
  if (typeof window === "undefined") {
    throw new Error("thirdPartyTrackingPlugin only works in the browser");
  }
  return gb => {
    gb.setTrackingCallback(async (e, r) => {
      const promises = [];
      const eventParams = {
        experiment_id: e.key,
        variation_id: r.key
      };
      if (additionalCallback) {
        promises.push(Promise.resolve(additionalCallback(e, r)));
      }

      // GA4 - gtag
      if (trackers.includes("gtag") && window.gtag) {
        let gtagResolve;
        const gtagPromise = new Promise(resolve => {
          gtagResolve = resolve;
        });
        promises.push(gtagPromise);
        window.gtag("event", "experiment_viewed", {
          ...eventParams,
          event_callback: gtagResolve
        });
      }

      // GTM - dataLayer
      if (trackers.includes("gtm") && window.dataLayer) {
        let datalayerResolve;
        const datalayerPromise = new Promise(resolve => {
          datalayerResolve = resolve;
        });
        promises.push(datalayerPromise);
        window.dataLayer.push({
          event: "experiment_viewed",
          ...eventParams,
          eventCallback: datalayerResolve
        });
      }

      // Segment - analytics.js
      if (trackers.includes("segment") && window.analytics && window.analytics.track) {
        window.analytics.track("Experiment Viewed", eventParams);
        const segmentPromise = new Promise(resolve => window.setTimeout(resolve, 300));
        promises.push(segmentPromise);
      }
      await Promise.all(promises);
    });
  };
}
//# sourceMappingURL=third-party-tracking.js.map