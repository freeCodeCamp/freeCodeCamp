import { safeDateNow, withRandomSafeContext } from './randomSafeContext.js';
import { GLOBAL_OBJ } from './worldwide.js';

const ONE_SECOND_IN_MS = 1e3;
function dateTimestampInSeconds() {
  return safeDateNow() / ONE_SECOND_IN_MS;
}
function createUnixTimestampInSecondsFunc() {
  const { performance } = GLOBAL_OBJ;
  if (!performance?.now || !performance.timeOrigin) {
    return dateTimestampInSeconds;
  }
  const timeOrigin = performance.timeOrigin;
  return () => {
    return (timeOrigin + withRandomSafeContext(() => performance.now())) / ONE_SECOND_IN_MS;
  };
}
let _cachedTimestampInSeconds;
function timestampInSeconds() {
  const func = _cachedTimestampInSeconds ?? (_cachedTimestampInSeconds = createUnixTimestampInSecondsFunc());
  return func();
}
let cachedTimeOrigin = null;
function getBrowserTimeOrigin() {
  const { performance } = GLOBAL_OBJ;
  if (!performance?.now) {
    return void 0;
  }
  const threshold = 3e5;
  const performanceNow = withRandomSafeContext(() => performance.now());
  const dateNow = safeDateNow();
  const timeOrigin = performance.timeOrigin;
  if (typeof timeOrigin === "number") {
    const timeOriginDelta = Math.abs(timeOrigin + performanceNow - dateNow);
    if (timeOriginDelta < threshold) {
      return timeOrigin;
    }
  }
  const navigationStart = performance.timing?.navigationStart;
  if (typeof navigationStart === "number") {
    const navigationStartDelta = Math.abs(navigationStart + performanceNow - dateNow);
    if (navigationStartDelta < threshold) {
      return navigationStart;
    }
  }
  return dateNow - performanceNow;
}
function browserPerformanceTimeOrigin() {
  if (cachedTimeOrigin === null) {
    cachedTimeOrigin = getBrowserTimeOrigin();
  }
  return cachedTimeOrigin;
}

export { browserPerformanceTimeOrigin, dateTimestampInSeconds, timestampInSeconds };
//# sourceMappingURL=time.js.map
