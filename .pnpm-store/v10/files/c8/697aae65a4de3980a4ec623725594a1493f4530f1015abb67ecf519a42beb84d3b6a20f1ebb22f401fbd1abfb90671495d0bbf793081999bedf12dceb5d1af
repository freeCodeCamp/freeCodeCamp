import { defineIntegration } from '../integration.js';
import { relative, basename } from '../utils/path.js';
import { GLOBAL_OBJ } from '../utils/worldwide.js';

const INTEGRATION_NAME = "RewriteFrames";
const rewriteFramesIntegration = defineIntegration((options = {}) => {
  const root = options.root;
  const prefix = options.prefix || "app:///";
  const isBrowser = "window" in GLOBAL_OBJ && !!GLOBAL_OBJ.window;
  const iteratee = options.iteratee || generateIteratee({ isBrowser, root, prefix });
  function _processExceptionsEvent(event) {
    try {
      return {
        ...event,
        exception: {
          ...event.exception,
          // The check for this is performed inside `process` call itself, safe to skip here
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          values: event.exception.values.map((value) => ({
            ...value,
            ...value.stacktrace && { stacktrace: _processStacktrace(value.stacktrace) }
          }))
        }
      };
    } catch {
      return event;
    }
  }
  function _processStacktrace(stacktrace) {
    return {
      ...stacktrace,
      frames: stacktrace?.frames?.map((f) => iteratee(f))
    };
  }
  return {
    name: INTEGRATION_NAME,
    processEvent(originalEvent) {
      let processedEvent = originalEvent;
      if (originalEvent.exception && Array.isArray(originalEvent.exception.values)) {
        processedEvent = _processExceptionsEvent(processedEvent);
      }
      return processedEvent;
    }
  };
});
function generateIteratee({
  isBrowser,
  root,
  prefix
}) {
  return (frame) => {
    if (!frame.filename) {
      return frame;
    }
    const isWindowsFrame = /^[a-zA-Z]:\\/.test(frame.filename) || // or the presence of a backslash without a forward slash (which are not allowed on Windows)
    frame.filename.includes("\\") && !frame.filename.includes("/");
    const startsWithSlash = /^\//.test(frame.filename);
    if (isBrowser) {
      if (root) {
        const oldFilename = frame.filename;
        if (oldFilename.indexOf(root) === 0) {
          frame.filename = oldFilename.replace(root, prefix);
        }
      }
    } else {
      if (isWindowsFrame || startsWithSlash) {
        const filename = isWindowsFrame ? frame.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : frame.filename;
        const base = root ? relative(root, filename) : basename(filename);
        frame.filename = `${prefix}${base}`;
      }
    }
    return frame;
  };
}

export { generateIteratee, rewriteFramesIntegration };
//# sourceMappingURL=rewriteframes.js.map
