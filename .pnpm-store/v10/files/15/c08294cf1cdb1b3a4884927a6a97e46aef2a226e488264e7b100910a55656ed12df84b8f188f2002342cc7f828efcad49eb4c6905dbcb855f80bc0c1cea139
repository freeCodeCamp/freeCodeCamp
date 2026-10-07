"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.findOriginalSourcePositionAndContent = findOriginalSourcePositionAndContent;
exports.getNonGatsbyCodeFrameFormatted = exports.getNonGatsbyCodeFrame = void 0;
var _stackTrace = _interopRequireDefault(require("stack-trace"));
var _url = _interopRequireDefault(require("url"));
var _codeFrame = require("@babel/code-frame");
var _traceMapping = require("@jridgewell/trace-mapping");
const fs = require(`fs-extra`);
const path = require(`path`);
const chalk = require(`chalk`);
const {
  isNodeInternalModulePath
} = require(`gatsby-core-utils`);
const getDirName = arg => {
  // Caveat related to executing in engines:
  // After webpack bundling we would get number here (webpack module id) and that would crash when doing
  // path.dirname(number).
  if (typeof arg === `string`) {
    return path.dirname(arg);
  }
  return `-cant-resolve-`;
};
const gatsbyLocation = getDirName(require.resolve(`gatsby/package.json`));
const reduxThunkLocation = getDirName(require.resolve(`redux-thunk/package.json`));
const reduxLocation = getDirName(require.resolve(`redux/package.json`));
const getNonGatsbyCallSite = () => _stackTrace.default.get().find(callSite => callSite && callSite.getFileName() && !callSite.getFileName().includes(gatsbyLocation) && !callSite.getFileName().includes(reduxLocation) && !callSite.getFileName().includes(reduxThunkLocation) && !isNodeInternalModulePath(callSite.getFileName()));
const getNonGatsbyCodeFrame = ({
  highlightCode = true,
  stack
} = {}) => {
  let callSite;
  if (stack) {
    callSite = _stackTrace.default.parse({
      stack,
      name: ``,
      message: ``
    })[0];
  } else {
    callSite = getNonGatsbyCallSite();
  }
  if (!callSite) {
    return null;
  }
  const fileName = callSite.getFileName();
  const line = callSite.getLineNumber();
  const column = callSite.getColumnNumber();
  const normalizedFileName = fileName.startsWith(`file://`) ? _url.default.fileURLToPath(fileName) : fileName;
  try {
    const code = fs.readFileSync(normalizedFileName, {
      encoding: `utf-8`
    });
    return {
      fileName,
      line,
      column,
      codeFrame: (0, _codeFrame.codeFrameColumns)(code, {
        start: {
          line,
          column
        }
      }, {
        highlightCode
      })
    };
  } catch (e) {
    console.error(`Errored getting code frame: ${e.stack}`);
    return null;
  }
};
exports.getNonGatsbyCodeFrame = getNonGatsbyCodeFrame;
const getNonGatsbyCodeFrameFormatted = ({
  highlightCode = true,
  stack
} = {}) => {
  const possibleCodeFrame = getNonGatsbyCodeFrame({
    highlightCode,
    stack
  });
  if (!possibleCodeFrame) {
    return null;
  }
  const {
    fileName,
    line,
    column,
    codeFrame
  } = possibleCodeFrame;
  return `File ${chalk.bold(`${fileName}:${line}:${column}`)}\n${codeFrame}`;
};
exports.getNonGatsbyCodeFrameFormatted = getNonGatsbyCodeFrameFormatted;
function findOriginalSourcePositionAndContent(webpackSource, position) {
  var _position$column;
  const tracer = new _traceMapping.TraceMap(webpackSource);
  const sourcePosition = (0, _traceMapping.originalPositionFor)(tracer, {
    line: position.line,
    column: (_position$column = position.column) !== null && _position$column !== void 0 ? _position$column : 0
  });
  if (!sourcePosition.source) {
    return {
      sourcePosition: null,
      sourceContent: null
    };
  }
  const sourceContent = (0, _traceMapping.sourceContentFor)(tracer, sourcePosition.source);
  return {
    sourcePosition,
    sourceContent
  };
}
//# sourceMappingURL=stack-trace-utils.js.map