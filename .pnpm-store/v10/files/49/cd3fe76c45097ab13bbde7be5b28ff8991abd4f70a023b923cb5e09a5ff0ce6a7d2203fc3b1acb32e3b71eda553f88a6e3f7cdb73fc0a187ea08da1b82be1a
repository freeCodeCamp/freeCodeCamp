import { DEBUG_BUILD } from '../debug-build.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT, SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE } from '../semanticAttributes.js';
import { debug } from '../utils/debug-logger.js';
import { getRootSpan, getActiveSpan } from '../utils/spanUtils.js';

function setMeasurement(name, value, unit, activeSpan = getActiveSpan()) {
  const rootSpan = activeSpan && getRootSpan(activeSpan);
  if (rootSpan) {
    DEBUG_BUILD && debug.log(`[Measurement] Setting measurement on root span: ${name} = ${value} ${unit}`);
    rootSpan.addEvent(name, {
      [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: value,
      [SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: unit
    });
  }
}
function timedEventsToMeasurements(events) {
  if (!events || events.length === 0) {
    return void 0;
  }
  const measurements = {};
  events.forEach((event) => {
    const attributes = event.attributes || {};
    const unit = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
    const value = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
    if (typeof unit === "string" && typeof value === "number") {
      measurements[event.name] = { value, unit };
    }
  });
  return measurements;
}

export { setMeasurement, timedEventsToMeasurements };
//# sourceMappingURL=measurement.js.map
