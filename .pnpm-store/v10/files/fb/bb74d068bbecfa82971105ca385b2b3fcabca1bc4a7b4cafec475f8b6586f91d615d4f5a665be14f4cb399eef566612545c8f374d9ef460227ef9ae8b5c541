"use strict";

exports.__esModule = true;
exports.parseError = void 0;
var _errors = require("gatsby-cli/lib/reporter/errors");
var sysPath = _interopRequireWildcard(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _path2 = require("gatsby-core-utils/path");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const getPosition = function (stackObject) {
  let filename = ``;
  let line = 0;
  let column = 0;
  // Because the JavaScript error stack has not yet been standardized,
  // wrap the stack parsing in a try/catch for a soft fail if an
  // unexpected stack is encountered.
  try {
    for (const stackLine of stackObject) {
      {
        // testing for following format:
        // "    at Component (/Users/misiek/dev/gatsby/integration-tests/ssr/.cache/page-ssr/routes/render-page.js:4088:13)"
        const splitLine = stackLine.match(/(?:\()(.+):([0-9]+):([0-9]+)(?:\))$/);
        if (splitLine) {
          filename = splitLine[1];
          line = Number(splitLine[2]);
          column = Number(splitLine[3]);
          break;
        }
      }
      {
        // testing for following format:
        // "    at ssr/src/pages/bad-page.js:4:13"
        const splitLine = stackLine.match(/at (.+):([0-9]+):([0-9]+)$/);
        if (splitLine) {
          filename = splitLine[1];
          line = Number(splitLine[2]);
          column = Number(splitLine[3]);
          break;
        }
      }
      {
        // trying to extract generic:
        // "<filepath>:<line>:<column>"
        const splitLine = stackLine.match(/(.+):([0-9]+):([0-9]+)/);
        if (splitLine) {
          filename = splitLine[1];
          line = Number(splitLine[2]);
          column = Number(splitLine[3]);
          break;
        }
      }
    }
  } catch (err) {
    filename = ``;
    line = 0;
    column = 0;
  }
  return {
    filename,
    line,
    column
  };
};
// Code borrowed and modified from https://github.com/watilde/parse-error
const parseError = function ({
  err,
  directory,
  componentPath,
  htmlComponentRendererPath
}) {
  // convert stack trace to use source file locations and not compiled ones
  err = (0, _errors.createErrorFromString)(err, `${htmlComponentRendererPath}.map`);
  const stack = err.stack ? err.stack : ``;
  const stackObject = stack.split(`\n`);
  const position = getPosition(stackObject);
  let relativeFileName = position.filename;
  while (relativeFileName.startsWith(`/`)) {
    relativeFileName = relativeFileName.substring(1);
  }
  let filename = sysPath.join(directory, relativeFileName);

  // webpack tends to inject project name as first segment in stack traces
  // so the filename / relativeFileName might not be correct - so we are checking
  // if it points to existing file and try to remove project name if it's first segment
  if (!fs.existsSync(filename)) {
    try {
      const projectName = fs.readJsonSync(sysPath.join(directory, `package.json`), `utf8`).name;
      if (relativeFileName.startsWith(projectName + sysPath.sep)) {
        relativeFileName = relativeFileName.substring((projectName + sysPath.sep).length);
      }
      filename = sysPath.join(directory, relativeFileName);
    } catch (e) {
      // nothing more we can do here
    }
  }
  let sourceContent;
  try {
    sourceContent = fs.readFileSync(filename, `utf-8`);
  } catch (e) {
    sourceContent = null;
  }

  // We prefer the file path from the stack trace as the error might not be in the
  // component — but if source-maps fail and we just get public/render-page.js as
  // the file, we fall back on the component filepath as at least the user
  // will have that.
  const trueFileName = filename.includes(`render-page`) ? componentPath : filename;
  return {
    filename: (0, _path2.slash)(sysPath.relative(directory, trueFileName)),
    sourceContent,
    message: err.message,
    stack: stack,
    line: position.line,
    column: position.column
  };
};
exports.parseError = parseError;
//# sourceMappingURL=parse-error.js.map