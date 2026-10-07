"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.formatFilename = formatFilename;
exports.getCodeFrameInformationFromStackTrace = getCodeFrameInformationFromStackTrace;
exports.getLineNumber = getLineNumber;
exports.openInEditor = openInEditor;
exports.prettifyStack = prettifyStack;
exports.reloadPage = reloadPage;
exports.skipSSR = skipSSR;
var _anser = _interopRequireDefault(require("anser"));
function prettifyStack(errorInformation) {
  let txt;
  if (Array.isArray(errorInformation)) {
    txt = errorInformation.join(`\n`);
  } else {
    txt = errorInformation;
  }
  return _anser.default.ansiToJson(txt, {
    remove_empty: true,
    use_classes: true,
    json: true
  });
}
function openInEditor(file, lineNumber = 1) {
  fetch(`/__open-stack-frame-in-editor?fileName=` + window.encodeURIComponent(file) + `&lineNumber=` + window.encodeURIComponent(lineNumber));
}
function reloadPage() {
  window.location.reload();
}
function skipSSR() {
  if (`URLSearchParams` in window) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(`skip-ssr`, `true`);
    window.location.search = searchParams.toString();
  }
}
function getCodeFrameInformationFromStackTrace(stackTrace) {
  const stackFrame = stackTrace.find(stackFrame => {
    const fileName = stackFrame.getFileName();
    return fileName && fileName !== `[native code]`; // Quirk of Safari error stack frames
  });

  if (!stackFrame) {
    return null;
  }
  const moduleId = formatFilename(stackFrame.getFileName());
  const lineNumber = stackFrame.getLineNumber();
  const columnNumber = stackFrame.getColumnNumber();
  const functionName = stackFrame.getFunctionName();
  return {
    moduleId,
    lineNumber,
    columnNumber,
    functionName
  };
}
const lineNumberRegex = /^[0-9]*:[0-9]*$/g;
function getLineNumber(error) {
  const match = error.match(lineNumberRegex);
  return match === null || match === void 0 ? void 0 : match[1];
}
function formatFilename(filename) {
  const htmlMatch = /^https?:\/\/(.*)\/(.*)/.exec(filename);
  if (htmlMatch && htmlMatch[1] && htmlMatch[2]) {
    return htmlMatch[2];
  }
  const sourceMatch = /^webpack-internal:\/\/\/(.*)$/.exec(filename);
  if (sourceMatch && sourceMatch[1]) {
    return sourceMatch[1];
  }
  return filename;
}
//# sourceMappingURL=utils.js.map