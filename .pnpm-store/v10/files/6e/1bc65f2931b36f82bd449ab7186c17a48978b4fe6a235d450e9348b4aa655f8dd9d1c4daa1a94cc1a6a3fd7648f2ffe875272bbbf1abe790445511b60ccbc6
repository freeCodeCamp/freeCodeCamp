const STACKTRACE_FRAME_LIMIT = 50;
const UNKNOWN_FUNCTION = "?";
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
const STRIP_FRAME_REGEXP = /captureMessage|captureException/;
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
  return (stack, skipFirstLines = 0, framesToPop = 0) => {
    const frames = [];
    const lines = stack.split("\n");
    for (let i = skipFirstLines; i < lines.length; i++) {
      let line = lines[i];
      if (line.length > 1024) {
        line = line.slice(0, 1024);
      }
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
      if (cleanedLine.includes("Error: ")) {
        continue;
      }
      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);
        if (frame) {
          frames.push(frame);
          break;
        }
      }
      if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
        break;
      }
    }
    return stripSentryFramesAndReverse(frames.slice(framesToPop));
  };
}
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }
  const localStack = Array.from(stack);
  if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
  }
  localStack.reverse();
  if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
      localStack.pop();
    }
  }
  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
    ...frame,
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION
  }));
}
function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}
const defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== "function") {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch {
    return defaultFunctionName;
  }
}
function getFramesFromEvent(event) {
  const exception = event.exception;
  if (exception) {
    const frames = [];
    try {
      exception.values.forEach((value) => {
        if (value.stacktrace.frames) {
          frames.push(...value.stacktrace.frames);
        }
      });
      return frames;
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function normalizeStackTracePath(path) {
  let filename = path?.startsWith("file://") ? path.slice(7) : path;
  if (filename?.match(/\/[A-Z]:/)) {
    filename = filename.slice(1);
  }
  return filename;
}

export { UNKNOWN_FUNCTION, createStackParser, getFramesFromEvent, getFunctionName, normalizeStackTracePath, stackParserFromStackParserOptions, stripSentryFramesAndReverse };
//# sourceMappingURL=stacktrace.js.map
