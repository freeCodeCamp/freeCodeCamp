import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';
import { LRUMap, defineIntegration, debug, snipLine } from '@sentry/core';
import { DEBUG_BUILD } from '../debug-build.js';

const LRU_FILE_CONTENTS_CACHE = new LRUMap(10);
const LRU_FILE_CONTENTS_FS_READ_FAILED = new LRUMap(20);
const DEFAULT_LINES_OF_CONTEXT = 7;
const INTEGRATION_NAME = "ContextLines";
const MAX_CONTEXTLINES_COLNO = 1e3;
const MAX_CONTEXTLINES_LINENO = 1e4;
function emplace(map, key, contents) {
  const value = map.get(key);
  if (value === void 0) {
    map.set(key, contents);
    return contents;
  }
  return value;
}
function shouldSkipContextLinesForFile(path) {
  if (path.startsWith("node:")) return true;
  if (path.endsWith(".min.js")) return true;
  if (path.endsWith(".min.cjs")) return true;
  if (path.endsWith(".min.mjs")) return true;
  if (path.startsWith("data:")) return true;
  return false;
}
function shouldSkipContextLinesForFrame(frame) {
  if (frame.lineno !== void 0 && frame.lineno > MAX_CONTEXTLINES_LINENO) return true;
  if (frame.colno !== void 0 && frame.colno > MAX_CONTEXTLINES_COLNO) return true;
  return false;
}
function rangeExistsInContentCache(file, range) {
  const contents = LRU_FILE_CONTENTS_CACHE.get(file);
  if (contents === void 0) return false;
  for (let i = range[0]; i <= range[1]; i++) {
    if (contents[i] === void 0) {
      return false;
    }
  }
  return true;
}
function makeLineReaderRanges(lines, linecontext) {
  if (!lines.length) {
    return [];
  }
  let i = 0;
  const line = lines[0];
  if (typeof line !== "number") {
    return [];
  }
  let current = makeContextRange(line, linecontext);
  const out = [];
  while (true) {
    if (i === lines.length - 1) {
      out.push(current);
      break;
    }
    const next = lines[i + 1];
    if (typeof next !== "number") {
      break;
    }
    if (next <= current[1]) {
      current[1] = next + linecontext;
    } else {
      out.push(current);
      current = makeContextRange(next, linecontext);
    }
    i++;
  }
  return out;
}
function getContextLinesFromFile(path, ranges, output) {
  return new Promise((resolve, _reject) => {
    const stream = createReadStream(path);
    const lineReaded = createInterface({
      input: stream
    });
    function destroyStreamAndResolve() {
      stream.destroy();
      resolve();
    }
    let lineNumber = 0;
    let currentRangeIndex = 0;
    const range = ranges[currentRangeIndex];
    if (range === void 0) {
      destroyStreamAndResolve();
      return;
    }
    let rangeStart = range[0];
    let rangeEnd = range[1];
    function onStreamError(e) {
      LRU_FILE_CONTENTS_FS_READ_FAILED.set(path, 1);
      DEBUG_BUILD && debug.error(`Failed to read file: ${path}. Error: ${e}`);
      lineReaded.close();
      lineReaded.removeAllListeners();
      destroyStreamAndResolve();
    }
    stream.on("error", onStreamError);
    lineReaded.on("error", onStreamError);
    lineReaded.on("close", destroyStreamAndResolve);
    lineReaded.on("line", (line) => {
      lineNumber++;
      if (lineNumber < rangeStart) return;
      output[lineNumber] = snipLine(line, 0);
      if (lineNumber >= rangeEnd) {
        if (currentRangeIndex === ranges.length - 1) {
          lineReaded.close();
          lineReaded.removeAllListeners();
          return;
        }
        currentRangeIndex++;
        const range2 = ranges[currentRangeIndex];
        if (range2 === void 0) {
          lineReaded.close();
          lineReaded.removeAllListeners();
          return;
        }
        rangeStart = range2[0];
        rangeEnd = range2[1];
      }
    });
  });
}
async function addSourceContext(event, contextLines) {
  const filesToLines = {};
  if (contextLines > 0 && event.exception?.values) {
    for (const exception of event.exception.values) {
      if (!exception.stacktrace?.frames?.length) {
        continue;
      }
      for (let i = exception.stacktrace.frames.length - 1; i >= 0; i--) {
        const frame = exception.stacktrace.frames[i];
        const filename = frame?.filename;
        if (!frame || typeof filename !== "string" || typeof frame.lineno !== "number" || shouldSkipContextLinesForFile(filename) || shouldSkipContextLinesForFrame(frame)) {
          continue;
        }
        const filesToLinesOutput = filesToLines[filename];
        if (!filesToLinesOutput) filesToLines[filename] = [];
        filesToLines[filename].push(frame.lineno);
      }
    }
  }
  const files = Object.keys(filesToLines);
  if (files.length == 0) {
    return event;
  }
  const readlinePromises = [];
  for (const file of files) {
    if (LRU_FILE_CONTENTS_FS_READ_FAILED.get(file)) {
      continue;
    }
    const filesToLineRanges = filesToLines[file];
    if (!filesToLineRanges) {
      continue;
    }
    filesToLineRanges.sort((a, b) => a - b);
    const ranges = makeLineReaderRanges(filesToLineRanges, contextLines);
    if (ranges.every((r) => rangeExistsInContentCache(file, r))) {
      continue;
    }
    const cache = emplace(LRU_FILE_CONTENTS_CACHE, file, {});
    readlinePromises.push(getContextLinesFromFile(file, ranges, cache));
  }
  await Promise.all(readlinePromises).catch(() => {
    DEBUG_BUILD && debug.log("Failed to read one or more source files and resolve context lines");
  });
  if (contextLines > 0 && event.exception?.values) {
    for (const exception of event.exception.values) {
      if (exception.stacktrace?.frames && exception.stacktrace.frames.length > 0) {
        addSourceContextToFrames(exception.stacktrace.frames, contextLines, LRU_FILE_CONTENTS_CACHE);
      }
    }
  }
  return event;
}
function addSourceContextToFrames(frames, contextLines, cache) {
  for (const frame of frames) {
    if (frame.filename && frame.context_line === void 0 && typeof frame.lineno === "number") {
      const contents = cache.get(frame.filename);
      if (contents === void 0) {
        continue;
      }
      addContextToFrame(frame.lineno, frame, contextLines, contents);
    }
  }
}
function clearLineContext(frame) {
  delete frame.pre_context;
  delete frame.context_line;
  delete frame.post_context;
}
function addContextToFrame(lineno, frame, contextLines, contents) {
  if (frame.lineno === void 0 || contents === void 0) {
    DEBUG_BUILD && debug.error("Cannot resolve context for frame with no lineno or file contents");
    return;
  }
  frame.pre_context = [];
  for (let i = makeRangeStart(lineno, contextLines); i < lineno; i++) {
    const line = contents[i];
    if (line === void 0) {
      clearLineContext(frame);
      DEBUG_BUILD && debug.error(`Could not find line ${i} in file ${frame.filename}`);
      return;
    }
    frame.pre_context.push(line);
  }
  if (contents[lineno] === void 0) {
    clearLineContext(frame);
    DEBUG_BUILD && debug.error(`Could not find line ${lineno} in file ${frame.filename}`);
    return;
  }
  frame.context_line = contents[lineno];
  const end = makeRangeEnd(lineno, contextLines);
  frame.post_context = [];
  for (let i = lineno + 1; i <= end; i++) {
    const line = contents[i];
    if (line === void 0) {
      break;
    }
    frame.post_context.push(line);
  }
}
function makeRangeStart(line, linecontext) {
  return Math.max(1, line - linecontext);
}
function makeRangeEnd(line, linecontext) {
  return line + linecontext;
}
function makeContextRange(line, linecontext) {
  return [makeRangeStart(line, linecontext), makeRangeEnd(line, linecontext)];
}
const _contextLinesIntegration = ((options = {}) => {
  const contextLines = options.frameContextLines !== void 0 ? options.frameContextLines : DEFAULT_LINES_OF_CONTEXT;
  return {
    name: INTEGRATION_NAME,
    processEvent(event) {
      return addSourceContext(event, contextLines);
    }
  };
});
const contextLinesIntegration = defineIntegration(_contextLinesIntegration);

export { MAX_CONTEXTLINES_COLNO, MAX_CONTEXTLINES_LINENO, _contextLinesIntegration, addContextToFrame, contextLinesIntegration };
//# sourceMappingURL=contextlines.js.map
