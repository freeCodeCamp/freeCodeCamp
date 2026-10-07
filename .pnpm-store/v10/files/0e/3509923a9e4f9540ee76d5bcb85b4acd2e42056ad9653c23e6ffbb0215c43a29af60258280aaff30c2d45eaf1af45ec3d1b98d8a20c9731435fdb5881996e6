"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.functionMiddlewares = functionMiddlewares;
exports.printConfigWarnings = printConfigWarnings;
var _reachRouter = require("@gatsbyjs/reach-router");
var _cookie = _interopRequireDefault(require("cookie"));
var _express = require("express");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _multer = _interopRequireDefault(require("multer"));
var _config = require("./config");
const expressBuiltinMiddleware = {
  urlencoded: _express.urlencoded,
  text: _express.text,
  json: _express.json,
  raw: _express.raw
};
function printConfigWarnings(warnings, functionObj) {
  if (warnings.length) {
    for (const warning of warnings) {
      _reporter.default.warn(`${warning.property ? `\`${warning.property}\` property of exported config` : `Exported config`} in \`${functionObj.originalRelativeFilePath}\` is misconfigured.\nExpected object:\n\n${warning.expectedType}\n\nGot:\n\n${JSON.stringify(warning.original)}\n\nUsing default:\n\n${JSON.stringify(warning.replacedWith, null, 2)}`);
    }
  }
}
function createSetContextFunctionMiddleware({
  getFunctions,
  prepareFn,
  showDebugMessageInResponse
}) {
  return async function executeFunction(req, res, next) {
    const functions = getFunctions();
    const {
      "0": pathFragment
    } = req.params;

    // Check first for exact matches.
    let functionObj = functions.find(({
      functionRoute
    }) => functionRoute === pathFragment);
    if (!functionObj) {
      // Check if there's any matchPaths that match.
      // We loop until we find the first match.
      functions.some(f => {
        if (f.matchPath) {
          const matchResult = (0, _reachRouter.match)(f.matchPath, pathFragment);
          if (matchResult) {
            req.params = matchResult.params;
            if (req.params[`*`]) {
              // Backwards compatability for v3
              // TODO remove in v5
              req.params[`0`] = req.params[`*`];
            }
            functionObj = f;
            return true;
          }
        }
        return false;
      });
    }
    if (functionObj) {
      let userConfig;
      if (prepareFn) {
        await prepareFn(functionObj);
      }
      const pathToFunction = functionObj.absoluteCompiledFilePath;
      let fnToExecute;
      try {
        delete require.cache[require.resolve(pathToFunction)];
        const fn = require(pathToFunction);
        userConfig = fn === null || fn === void 0 ? void 0 : fn.config;
        fnToExecute = fn && fn.default || fn;
      } catch (e) {
        var _e$message;
        if (e !== null && e !== void 0 && (_e$message = e.message) !== null && _e$message !== void 0 && _e$message.includes(`fnToExecute is not a function`)) {
          e.message = `${functionObj.originalAbsoluteFilePath} does not export a function.`;
        }
        fnToExecute = undefined;
        _reporter.default.error(e);
        if (!res.headersSent) {
          if (showDebugMessageInResponse) {
            res.status(500).send(`Error when executing function "${functionObj.originalAbsoluteFilePath}":<br /><br />${e.message}`);
          } else {
            res.sendStatus(500);
          }
        }
        return;
      }
      if (fnToExecute) {
        const {
          config,
          warnings
        } = (0, _config.createConfig)(userConfig);
        printConfigWarnings(warnings, functionObj);
        req.context = {
          functionObj,
          fnToExecute,
          params: req.params,
          config,
          showDebugMessageInResponse: showDebugMessageInResponse !== null && showDebugMessageInResponse !== void 0 ? showDebugMessageInResponse : false
        };
      }
    }
    next();
  };
}
function setCookies(req, _res, next) {
  const cookies = req.headers.cookie;
  if (!cookies) {
    return next();
  }
  req.cookies = _cookie.default.parse(cookies);
  return next();
}
function bodyParserMiddlewareWithConfig(type) {
  return function (req, res, next) {
    if (req.context && req.context.config.bodyParser) {
      const bodyParserConfig = req.context.config.bodyParser[type];
      expressBuiltinMiddleware[type](bodyParserConfig)(req, res, next);
    } else {
      next();
    }
  };
}
async function executeFunction(req, res, next) {
  if (req.context) {
    _reporter.default.verbose(`Running ${req.context.functionObj.functionRoute}`);
    req.params = req.context.params;
    const start = Date.now();
    const context = req.context;
    // we don't want to leak internal context to actual request handler
    delete req.context;
    try {
      await Promise.resolve(context.fnToExecute(req, res));
    } catch (e) {
      var _e$message2;
      if (e !== null && e !== void 0 && (_e$message2 = e.message) !== null && _e$message2 !== void 0 && _e$message2.includes(`fnToExecute is not a function`)) {
        e.message = `${context.functionObj.originalAbsoluteFilePath} does not export a function.`;
      }
      _reporter.default.error(e);
      // Don't send the error if that would cause another error.
      if (!res.headersSent) {
        if (context.showDebugMessageInResponse) {
          res.status(500).send(`Error when executing function "${context.functionObj.originalAbsoluteFilePath}":<br /><br />${e.message}`);
        } else {
          res.sendStatus(500);
        }
      }
    }
    const end = Date.now();
    _reporter.default.log(`Executed function "/api/${context.functionObj.functionRoute}" in ${end - start}ms`);
  } else {
    next();
  }
}
function functionMiddlewares(middlewareConfig) {
  const setContext = createSetContextFunctionMiddleware(middlewareConfig);
  return [setCookies, setContext, (0, _multer.default)().any(), bodyParserMiddlewareWithConfig(`raw`), bodyParserMiddlewareWithConfig(`text`), bodyParserMiddlewareWithConfig(`urlencoded`), bodyParserMiddlewareWithConfig(`json`), executeFunction];
}
//# sourceMappingURL=middleware.js.map