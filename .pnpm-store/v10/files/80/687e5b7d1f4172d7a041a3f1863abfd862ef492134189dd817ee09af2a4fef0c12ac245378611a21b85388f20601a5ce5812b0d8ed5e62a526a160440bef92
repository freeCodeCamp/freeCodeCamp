Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const stacktrace = require('./stacktrace.js');
const worldwide = require('./worldwide.js');

let parsedStackResults;
let lastSentryKeysCount;
let lastNativeKeysCount;
let cachedFilenameDebugIds;
function getFilenameToDebugIdMap(stackParser) {
  const sentryDebugIdMap = worldwide.GLOBAL_OBJ._sentryDebugIds;
  const nativeDebugIdMap = worldwide.GLOBAL_OBJ._debugIds;
  if (!sentryDebugIdMap && !nativeDebugIdMap) {
    return {};
  }
  const sentryDebugIdKeys = sentryDebugIdMap ? Object.keys(sentryDebugIdMap) : [];
  const nativeDebugIdKeys = nativeDebugIdMap ? Object.keys(nativeDebugIdMap) : [];
  if (cachedFilenameDebugIds && sentryDebugIdKeys.length === lastSentryKeysCount && nativeDebugIdKeys.length === lastNativeKeysCount) {
    return cachedFilenameDebugIds;
  }
  lastSentryKeysCount = sentryDebugIdKeys.length;
  lastNativeKeysCount = nativeDebugIdKeys.length;
  cachedFilenameDebugIds = {};
  if (!parsedStackResults) {
    parsedStackResults = {};
  }
  const processDebugIds = (debugIdKeys, debugIdMap) => {
    for (const key of debugIdKeys) {
      const debugId = debugIdMap[key];
      const result = parsedStackResults?.[key];
      if (result && cachedFilenameDebugIds && debugId) {
        cachedFilenameDebugIds[result[0]] = debugId;
        if (parsedStackResults) {
          parsedStackResults[key] = [result[0], debugId];
        }
      } else if (debugId) {
        const parsedStack = stackParser(key);
        for (let i = parsedStack.length - 1; i >= 0; i--) {
          const stackFrame = parsedStack[i];
          const filename = stackFrame?.filename;
          if (filename && cachedFilenameDebugIds && parsedStackResults) {
            cachedFilenameDebugIds[filename] = debugId;
            parsedStackResults[key] = [filename, debugId];
            break;
          }
        }
      }
    }
  };
  if (sentryDebugIdMap) {
    processDebugIds(sentryDebugIdKeys, sentryDebugIdMap);
  }
  if (nativeDebugIdMap) {
    processDebugIds(nativeDebugIdKeys, nativeDebugIdMap);
  }
  return cachedFilenameDebugIds;
}
function getDebugImagesForResources(stackParser, resource_paths) {
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
  if (!filenameDebugIdMap) {
    return [];
  }
  const images = [];
  for (const path of resource_paths) {
    const normalizedPath = stacktrace.normalizeStackTracePath(path);
    if (normalizedPath && filenameDebugIdMap[normalizedPath]) {
      images.push({
        type: "sourcemap",
        code_file: path,
        debug_id: filenameDebugIdMap[normalizedPath]
      });
    }
  }
  return images;
}

exports.getDebugImagesForResources = getDebugImagesForResources;
exports.getFilenameToDebugIdMap = getFilenameToDebugIdMap;
//# sourceMappingURL=debug-ids.js.map
