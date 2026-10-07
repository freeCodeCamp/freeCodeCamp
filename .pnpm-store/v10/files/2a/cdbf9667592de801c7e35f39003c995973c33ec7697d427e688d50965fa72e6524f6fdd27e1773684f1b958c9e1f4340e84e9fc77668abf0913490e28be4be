Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

function getSpotlightConfig(optionsSpotlight) {
  if (optionsSpotlight === false) {
    return false;
  }
  if (typeof optionsSpotlight === "string") {
    return optionsSpotlight;
  }
  const envBool = core.envToBool(process.env.SENTRY_SPOTLIGHT, { strict: true });
  const envUrl = envBool === null && process.env.SENTRY_SPOTLIGHT ? process.env.SENTRY_SPOTLIGHT : void 0;
  return optionsSpotlight === true ? envUrl ?? true : envBool ?? envUrl;
}

exports.getSpotlightConfig = getSpotlightConfig;
//# sourceMappingURL=spotlight.js.map
