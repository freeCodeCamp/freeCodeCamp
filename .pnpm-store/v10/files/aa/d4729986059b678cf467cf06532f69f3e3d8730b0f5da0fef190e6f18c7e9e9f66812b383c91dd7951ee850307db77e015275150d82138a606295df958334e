"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.structureWebpackErrors = exports.reportWebpackWarnings = void 0;
var _types = require("../commands/types");
var _formatWebpackMessages = _interopRequireDefault(require("react-dev-utils/formatWebpackMessages"));
const stageCodeToReadableLabel = {
  [_types.Stage.BuildJavascript]: `Generating JavaScript bundles`,
  [_types.Stage.BuildHTML]: `Generating SSR bundle`,
  [_types.Stage.DevelopHTML]: `Generating development SSR bundle`,
  [_types.Stage.Develop]: `Generating development JavaScript bundle`
};
const transformWebpackError = (stage, webpackError) => {
  var _castedWebpackError$e, _castedWebpackError$e2, _castedWebpackError$e3, _resource, _castedWebpackError$m;
  const castedWebpackError = webpackError;
  let location;
  if (castedWebpackError.loc && castedWebpackError.loc.start) {
    location = {
      start: castedWebpackError.loc.start,
      end: castedWebpackError.loc.end
    };
  }
  if (!location && (_castedWebpackError$e = castedWebpackError.error) !== null && _castedWebpackError$e !== void 0 && _castedWebpackError$e.loc) {
    if (castedWebpackError.error.loc.start) {
      location = castedWebpackError.error.loc;
    } else {
      location = {
        start: castedWebpackError.error.loc
      };
    }
  }

  // try to get location out of stacktrace
  if (!location) {
    const matches = castedWebpackError.message.match(/\((\d+):(\d+)\)/);
    if (matches && matches[1] && matches[2]) {
      location = {
        start: {
          line: Number(matches[1]),
          column: Number(matches[2])
        }
      };
    }
  }
  let id = `98123`;
  const context = {
    stage,
    stageLabel: stageCodeToReadableLabel[stage],
    // TODO use formatWebpackMessages like in warnings
    sourceMessage: (_castedWebpackError$e2 = (_castedWebpackError$e3 = castedWebpackError.error) === null || _castedWebpackError$e3 === void 0 ? void 0 : _castedWebpackError$e3.message) !== null && _castedWebpackError$e2 !== void 0 ? _castedWebpackError$e2 : castedWebpackError.message
  };

  // When a module cannot be found we can short circuit
  if (castedWebpackError.name === `ModuleNotFoundError`) {
    var _castedWebpackError$e4, _castedWebpackError$e5;
    const matches = (_castedWebpackError$e4 = (_castedWebpackError$e5 = castedWebpackError.error) === null || _castedWebpackError$e5 === void 0 ? void 0 : _castedWebpackError$e5.message.match(/Can't resolve '(.*?)' in '(.*?)'/m)) !== null && _castedWebpackError$e4 !== void 0 ? _castedWebpackError$e4 : [];
    id = `98124`;
    context.packageName = matches === null || matches === void 0 ? void 0 : matches[1];
    context.sourceMessage = matches === null || matches === void 0 ? void 0 : matches[0];

    // get Breaking change message out of error
    // it shows extra information for things that changed with webpack
    const BreakingChangeRegex = /BREAKING CHANGE[\D\n\d]+$/;
    if (BreakingChangeRegex.test(castedWebpackError.message)) {
      const breakingMatch = castedWebpackError.message.match(BreakingChangeRegex);
      context.deprecationReason = breakingMatch === null || breakingMatch === void 0 ? void 0 : breakingMatch[0];
    }
  }
  return {
    id,
    filePath: (_resource = castedWebpackError === null || castedWebpackError === void 0 ? void 0 : (_castedWebpackError$m = castedWebpackError.module) === null || _castedWebpackError$m === void 0 ? void 0 : _castedWebpackError$m.resource) !== null && _resource !== void 0 ? _resource : castedWebpackError.file,
    location,
    context
    // We use original error to display stack trace for the most part.
    // In case of webpack error stack will include internals of webpack
    // or one of loaders (for example babel-loader) and doesn't provide
    // much value to user, so it's purposely omitted.

    // error: webpackError?.error || webpackError,
  };
};

// With the introduction of Head API, the modulePath can have a resourceQuery so this function can be used to remove it
const removeResourceQuery = moduleName => {
  const moduleNameWithoutQuery = moduleName === null || moduleName === void 0 ? void 0 : moduleName.replace(/(\?|&)export=(default|head)$/, ``);
  return moduleNameWithoutQuery;
};
const structureWebpackErrors = (stage, webpackError) => {
  if (Array.isArray(webpackError)) {
    return webpackError.map(e => transformWebpackError(stage, e));
  }
  return transformWebpackError(stage, webpackError);
};
exports.structureWebpackErrors = structureWebpackErrors;
const reportWebpackWarnings = (warnings = [], reporter) => {
  var _warnings$, _warnings$2, _warnings$3;
  let warningMessages = [];
  if (typeof warnings[0] === `string`) {
    warningMessages = warnings;
  } else if ((_warnings$ = warnings[0]) !== null && _warnings$ !== void 0 && _warnings$.message && removeResourceQuery((_warnings$2 = warnings[0]) === null || _warnings$2 === void 0 ? void 0 : _warnings$2.moduleName)) {
    warningMessages = warnings.map(warning => `${removeResourceQuery(warning.moduleName)}\n\n${warning.message}`);
  } else if ((_warnings$3 = warnings[0]) !== null && _warnings$3 !== void 0 && _warnings$3.message) {
    warningMessages = warnings.map(warning => warning.message);
  }
  (0, _formatWebpackMessages.default)({
    errors: [],
    warnings: warningMessages
  }).warnings.forEach(warning => reporter.warn(warning));
};
exports.reportWebpackWarnings = reportWebpackWarnings;
//# sourceMappingURL=webpack-error-utils.js.map