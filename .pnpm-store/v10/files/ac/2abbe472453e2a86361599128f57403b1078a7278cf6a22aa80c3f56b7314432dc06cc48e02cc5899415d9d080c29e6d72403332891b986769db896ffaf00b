Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const stacktrace = require('./stacktrace.js');

function filenameIsInApp(filename, isNative = false) {
  const isInternal = isNative || filename && // It's not internal if it's an absolute linux path
  !filename.startsWith("/") && // It's not internal if it's an absolute windows path
  !filename.match(/^[A-Z]:/) && // It's not internal if the path is starting with a dot
  !filename.startsWith(".") && // It's not internal if the frame has a protocol. In node, this is usually the case if the file got pre-processed with a bundler like webpack
  !filename.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
  return !isInternal && filename !== void 0 && !filename.includes("node_modules/");
}
function node(getModule) {
  const FILENAME_MATCH = /^\s*[-]{4,}$/;
  const FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const DATA_URI_MATCH = /at (?:async )?(.+?) \(data:(.*?),/;
  return (line) => {
    const dataUriMatch = line.match(DATA_URI_MATCH);
    if (dataUriMatch) {
      return {
        filename: `<data:${dataUriMatch[2]}>`,
        function: dataUriMatch[1]
      };
    }
    const lineMatch = line.match(FULL_MATCH);
    if (lineMatch) {
      let object;
      let method;
      let functionName;
      let typeName;
      let methodName;
      if (lineMatch[1]) {
        functionName = lineMatch[1];
        let methodStart = functionName.lastIndexOf(".");
        if (functionName[methodStart - 1] === ".") {
          methodStart--;
        }
        if (methodStart > 0) {
          object = functionName.slice(0, methodStart);
          method = functionName.slice(methodStart + 1);
          const objectEnd = object.indexOf(".Module");
          if (objectEnd > 0) {
            functionName = functionName.slice(objectEnd + 1);
            object = object.slice(0, objectEnd);
          }
        }
        typeName = void 0;
      }
      if (method) {
        typeName = object;
        methodName = method;
      }
      if (method === "<anonymous>") {
        methodName = void 0;
        functionName = void 0;
      }
      if (functionName === void 0) {
        methodName = methodName || stacktrace.UNKNOWN_FUNCTION;
        functionName = typeName ? `${typeName}.${methodName}` : methodName;
      }
      let filename = stacktrace.normalizeStackTracePath(lineMatch[2]);
      const isNative = lineMatch[5] === "native";
      if (!filename && lineMatch[5] && !isNative) {
        filename = lineMatch[5];
      }
      const maybeDecodedFilename = filename ? _safeDecodeURI(filename) : void 0;
      return {
        filename: maybeDecodedFilename ?? filename,
        module: maybeDecodedFilename && getModule?.(maybeDecodedFilename),
        function: functionName,
        lineno: _parseIntOrUndefined(lineMatch[3]),
        colno: _parseIntOrUndefined(lineMatch[4]),
        in_app: filenameIsInApp(filename || "", isNative)
      };
    }
    if (line.match(FILENAME_MATCH)) {
      return {
        filename: line
      };
    }
    return void 0;
  };
}
function nodeStackLineParser(getModule) {
  return [90, node(getModule)];
}
function _parseIntOrUndefined(input) {
  return parseInt(input || "", 10) || void 0;
}
function _safeDecodeURI(filename) {
  try {
    return decodeURI(filename);
  } catch {
    return void 0;
  }
}

exports.filenameIsInApp = filenameIsInApp;
exports.node = node;
exports.nodeStackLineParser = nodeStackLineParser;
//# sourceMappingURL=node-stack-trace.js.map
