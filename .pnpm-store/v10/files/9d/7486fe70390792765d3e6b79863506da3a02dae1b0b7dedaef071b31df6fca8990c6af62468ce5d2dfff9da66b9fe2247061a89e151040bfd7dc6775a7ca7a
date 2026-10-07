import { filenameIsInApp } from './node-stack-trace.js';
import { UNKNOWN_FUNCTION } from './stacktrace.js';

function watchdogTimer(createTimer, pollInterval, anrThreshold, callback) {
  const timer = createTimer();
  let triggered = false;
  let enabled = true;
  setInterval(() => {
    const diffMs = timer.getTimeMs();
    if (triggered === false && diffMs > pollInterval + anrThreshold) {
      triggered = true;
      if (enabled) {
        callback();
      }
    }
    if (diffMs < pollInterval + anrThreshold) {
      triggered = false;
    }
  }, 20);
  return {
    poll: () => {
      timer.reset();
    },
    enabled: (state) => {
      enabled = state;
    }
  };
}
function callFrameToStackFrame(frame, url, getModuleFromFilename) {
  const filename = url ? url.replace(/^file:\/\//, "") : void 0;
  const colno = frame.location.columnNumber ? frame.location.columnNumber + 1 : void 0;
  const lineno = frame.location.lineNumber ? frame.location.lineNumber + 1 : void 0;
  return {
    filename,
    module: getModuleFromFilename(filename),
    function: frame.functionName || UNKNOWN_FUNCTION,
    colno,
    lineno,
    in_app: filename ? filenameIsInApp(filename) : void 0
  };
}

export { callFrameToStackFrame, watchdogTimer };
//# sourceMappingURL=anr.js.map
