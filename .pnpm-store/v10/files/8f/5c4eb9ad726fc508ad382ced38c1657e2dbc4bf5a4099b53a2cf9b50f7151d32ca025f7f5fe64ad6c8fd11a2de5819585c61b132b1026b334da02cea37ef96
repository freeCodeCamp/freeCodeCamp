"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createErrorFromString = createErrorFromString;
exports.getErrorFormatter = getErrorFormatter;
exports.sanitizeStructuredStackTrace = void 0;
var _prettyError = _interopRequireDefault(require("pretty-error"));
var _prepareStackTrace = require("./prepare-stack-trace");
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _fsExtra = require("fs-extra");
var _codeFrame = require("@babel/code-frame");
const packagesToSkip = [`core-js`, `bluebird`, `regenerator-runtime`, `graphql`];
const packagesToSkipTest = new RegExp(`node_modules[\\/](${packagesToSkip.join(`|`)})`);

// TO-DO: move this this out of this file (and probably delete this file completely)
// it's here because it re-implements similar thing as `pretty-error` already does
const sanitizeStructuredStackTrace = stack => {
  // first filter out not useful call sites
  stack = stack.filter(callSite => {
    if (!callSite.getFileName()) {
      return false;
    }
    if (packagesToSkipTest.test(callSite.getFileName())) {
      return false;
    }
    if (callSite.getFileName().includes(`asyncToGenerator.js`)) {
      return false;
    }
    if ((0, _gatsbyCoreUtils.isNodeInternalModulePath)(callSite.getFileName())) {
      return false;
    }
    return true;
  });

  // then sanitize individual call site objects to make sure we don't
  // emit objects with extra fields that won't be handled by consumers
  return stack.map(callSite => {
    return {
      fileName: callSite.getFileName(),
      functionName: callSite.getFunctionName(),
      columnNumber: callSite.getColumnNumber(),
      lineNumber: callSite.getLineNumber()
    };
  });
};
exports.sanitizeStructuredStackTrace = sanitizeStructuredStackTrace;
function getErrorFormatter() {
  const prettyError = new _prettyError.default();
  const baseRender = prettyError.render;
  prettyError.skipNodeFiles();
  prettyError.skipPackage(`regenerator-runtime`, `graphql`, `core-js`
  // `static-site-generator-webpack-plugin`,
  // `tapable`, // webpack
  );

  // @ts-ignore the type defs in prettyError are wrong
  prettyError.skip(traceLine => {
    if (traceLine && traceLine.file === `asyncToGenerator.js`) return true;
    return false;
  });
  prettyError.appendStyle({
    "pretty-error": {
      marginTop: 1
    },
    "pretty-error > header": {
      background: `red`
    },
    "pretty-error > header > colon": {
      color: `white`
    }
  });
  if (process.env.FORCE_COLOR === `0`) {
    prettyError.withoutColors();
  }
  prettyError.render = err => {
    if (Array.isArray(err)) {
      return err.map(e => prettyError.render(e)).join(`\n`);
    }
    let rendered = baseRender.call(prettyError, err);
    if (`codeFrame` in err) rendered = `\n${err.codeFrame}\n${rendered}`;
    return rendered;
  };
  return prettyError;
}
/**
 * Convert a stringified webpack compilation error back into
 * an Error instance so it can be formatted properly
 */
function createErrorFromString(errorOrErrorStack = ``, sourceMapFile) {
  if (typeof errorOrErrorStack === `string`) {
    const errorStr = errorOrErrorStack;
    let [message, ...rest] = errorStr.split(/\r\n|[\n\r]/g);
    // pull the message from the first line then remove the `Error:` prefix
    // FIXME: when https://github.com/AriaMinaei/pretty-error/pull/49 is merged

    message = message.replace(/^(Error:)/, ``);
    const error = new Error(message);
    error.stack = [message, rest.join(`\n`)].join(`\n`);
    error.name = `WebpackError`;
    try {
      if (sourceMapFile) {
        return (0, _prepareStackTrace.prepareStackTrace)(error, sourceMapFile);
      }
    } catch (err) {
      // don't shadow a real error because of a parsing issue
    }
    return error;
  } else {
    if (errorOrErrorStack.forcedLocation) {
      var _forcedLocation$funct;
      const forcedLocation = errorOrErrorStack.forcedLocation;
      const error = new Error(errorOrErrorStack.message);
      error.stack = `${errorOrErrorStack.message}
  at ${(_forcedLocation$funct = forcedLocation.functionName) !== null && _forcedLocation$funct !== void 0 ? _forcedLocation$funct : `<anonymous>`} (${forcedLocation.fileName}${forcedLocation.lineNumber ? `:${forcedLocation.lineNumber}${forcedLocation.columnNumber ? `:${forcedLocation.columnNumber}` : ``}` : ``})`;
      try {
        var _forcedLocation$lineN, _forcedLocation$colum, _forcedLocation$endLi, _forcedLocation$endCo;
        const source = (0, _fsExtra.readFileSync)(forcedLocation.fileName, `utf8`);
        error.codeFrame = (0, _codeFrame.codeFrameColumns)(source, {
          start: {
            line: (_forcedLocation$lineN = forcedLocation.lineNumber) !== null && _forcedLocation$lineN !== void 0 ? _forcedLocation$lineN : 0,
            column: (_forcedLocation$colum = forcedLocation.columnNumber) !== null && _forcedLocation$colum !== void 0 ? _forcedLocation$colum : 0
          },
          end: forcedLocation.endColumnNumber ? {
            line: (_forcedLocation$endLi = forcedLocation.endLineNumber) !== null && _forcedLocation$endLi !== void 0 ? _forcedLocation$endLi : 0,
            column: (_forcedLocation$endCo = forcedLocation.endColumnNumber) !== null && _forcedLocation$endCo !== void 0 ? _forcedLocation$endCo : 0
          } : undefined
        }, {
          highlightCode: true
        });
      } catch (e) {
        // failed to generate codeframe, we still should show an error so we keep going
      }
      return error;
    } else {
      return createErrorFromString(errorOrErrorStack.stack, sourceMapFile);
    }
  }
}