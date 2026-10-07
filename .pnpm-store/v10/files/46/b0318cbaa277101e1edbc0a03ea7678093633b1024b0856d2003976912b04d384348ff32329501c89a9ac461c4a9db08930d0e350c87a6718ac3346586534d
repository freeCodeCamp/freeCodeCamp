"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anyToDiagnostic = anyToDiagnostic;
exports.default = void 0;
exports.encodeJSONKeyComponent = encodeJSONKeyComponent;
exports.errorToDiagnostic = errorToDiagnostic;
exports.escapeMarkdown = escapeMarkdown;
exports.generateJSONCodeHighlights = generateJSONCodeHighlights;
exports.getJSONSourceLocation = getJSONSourceLocation;
exports.md = md;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _jsonSourcemap() {
  const data = require("@mischnic/json-sourcemap");

  _jsonSourcemap = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Normalize the given value into a diagnostic. */
function anyToDiagnostic(input) {
  if (Array.isArray(input)) {
    return input;
  } else if (input instanceof ThrowableDiagnostic) {
    return input.diagnostics;
  } else if (input instanceof Error) {
    return errorToDiagnostic(input);
  } else if (typeof input === 'string') {
    return [{
      message: input
    }];
  } else if (typeof input === 'object') {
    return [input];
  } else {
    return errorToDiagnostic(input);
  }
}
/** Normalize the given error into a diagnostic. */


function errorToDiagnostic(error, defaultValues) {
  var _defaultValues$origin2, _ref4, _error$highlightedCod;

  let codeFrames = undefined;

  if (typeof error === 'string') {
    var _defaultValues$origin;

    return [{
      origin: (_defaultValues$origin = defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.origin) !== null && _defaultValues$origin !== void 0 ? _defaultValues$origin : 'Error',
      message: escapeMarkdown(error)
    }];
  }

  if (error instanceof ThrowableDiagnostic) {
    return error.diagnostics.map(d => {
      var _ref, _d$origin;

      return { ...d,
        origin: (_ref = (_d$origin = d.origin) !== null && _d$origin !== void 0 ? _d$origin : defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.origin) !== null && _ref !== void 0 ? _ref : 'unknown'
      };
    });
  }

  if (error.loc && error.source != null) {
    var _ref2, _ref3, _error$filePath;

    codeFrames = [{
      filePath: (_ref2 = (_ref3 = (_error$filePath = error.filePath) !== null && _error$filePath !== void 0 ? _error$filePath : error.fileName) !== null && _ref3 !== void 0 ? _ref3 : defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.filePath) !== null && _ref2 !== void 0 ? _ref2 : undefined,
      code: error.source,
      codeHighlights: [{
        start: {
          line: error.loc.line,
          column: error.loc.column
        },
        end: {
          line: error.loc.line,
          column: error.loc.column
        }
      }]
    }];
  }

  return [{
    origin: (_defaultValues$origin2 = defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.origin) !== null && _defaultValues$origin2 !== void 0 ? _defaultValues$origin2 : 'Error',
    message: escapeMarkdown(error.message),
    name: error.name,
    stack: codeFrames == null ? (_ref4 = (_error$highlightedCod = error.highlightedCodeFrame) !== null && _error$highlightedCod !== void 0 ? _error$highlightedCod : error.codeFrame) !== null && _ref4 !== void 0 ? _ref4 : error.stack : undefined,
    codeFrames
  }];
}

/**
 * An error wrapper around a diagnostic that can be <code>throw</code>n (e.g. to signal a
 * build error).
 */
class ThrowableDiagnostic extends Error {
  constructor(opts) {
    var _diagnostics$0$stack, _diagnostics$0$name;

    let diagnostics = Array.isArray(opts.diagnostic) ? opts.diagnostic : [opts.diagnostic]; // Construct error from diagnostics

    super(diagnostics[0].message); // @ts-ignore

    this.stack = (_diagnostics$0$stack = diagnostics[0].stack) !== null && _diagnostics$0$stack !== void 0 ? _diagnostics$0$stack : super.stack; // @ts-ignore

    this.name = (_diagnostics$0$name = diagnostics[0].name) !== null && _diagnostics$0$name !== void 0 ? _diagnostics$0$name : super.name;
    this.diagnostics = diagnostics;
  }

}
/**
 * Turns a list of positions in a JSON5 file with messages into a list of diagnostics.
 * Uses <a href="https://github.com/mischnic/json-sourcemap">@mischnic/json-sourcemap</a>.
 *
 * @param code the JSON code
 * @param ids A list of JSON keypaths (<code>key: "/some/parent/child"</code>) with corresponding messages, \
 * <code>type</code> signifies whether the key of the value in a JSON object should be highlighted.
 */


exports.default = ThrowableDiagnostic;

function generateJSONCodeHighlights(data, ids) {
  let map = typeof data == 'string' ? (0, _jsonSourcemap().parse)(data, undefined, {
    dialect: 'JSON5',
    tabWidth: 1
  }) : data;
  return ids.map(({
    key,
    type,
    message
  }) => {
    let pos = (0, _nullthrows().default)(map.pointers[key]);
    return { ...getJSONSourceLocation(pos, type),
      message
    };
  });
}
/**
 * Converts entries in <a href="https://github.com/mischnic/json-sourcemap">@mischnic/json-sourcemap</a>'s
 * <code>result.pointers</code> array.
 */


function getJSONSourceLocation(pos, type) {
  let key = 'key' in pos ? pos.key : undefined;
  let keyEnd = 'keyEnd' in pos ? pos.keyEnd : undefined;

  if (!type && key && pos.value) {
    // key and value
    return {
      start: {
        line: key.line + 1,
        column: key.column + 1
      },
      end: {
        line: pos.valueEnd.line + 1,
        column: pos.valueEnd.column
      }
    };
  } else if (type == 'key' || !pos.value) {
    (0, _assert().default)(key && keyEnd);
    return {
      start: {
        line: key.line + 1,
        column: key.column + 1
      },
      end: {
        line: keyEnd.line + 1,
        column: keyEnd.column
      }
    };
  } else {
    return {
      start: {
        line: pos.value.line + 1,
        column: pos.value.column + 1
      },
      end: {
        line: pos.valueEnd.line + 1,
        column: pos.valueEnd.column
      }
    };
  }
}
/** Sanitizes object keys before using them as <code>key</code> in generateJSONCodeHighlights */


function encodeJSONKeyComponent(component) {
  return component.replace(/~/g, '~0').replace(/\//g, '~1');
}

const escapeCharacters = ['\\', '*', '_', '~'];

function escapeMarkdown(s) {
  let result = s;

  for (const char of escapeCharacters) {
    result = result.replace(new RegExp(`\\${char}`, 'g'), `\\${char}`);
  }

  return result;
}

const mdVerbatim = Symbol();

function md(strings, ...params) {
  let result = [];

  for (let i = 0; i < params.length; i++) {
    result.push(strings[i]);
    let param = params[i];

    if (Array.isArray(param)) {
      for (let j = 0; j < param.length; j++) {
        var _param$j$mdVerbatim, _param$j;

        result.push((_param$j$mdVerbatim = (_param$j = param[j]) === null || _param$j === void 0 ? void 0 : _param$j[mdVerbatim]) !== null && _param$j$mdVerbatim !== void 0 ? _param$j$mdVerbatim : escapeMarkdown(`${param[j]}`));

        if (j < param.length - 1) {
          result.push(', ');
        }
      }
    } else {
      var _param$mdVerbatim;

      result.push((_param$mdVerbatim = param === null || param === void 0 ? void 0 : param[mdVerbatim]) !== null && _param$mdVerbatim !== void 0 ? _param$mdVerbatim : escapeMarkdown(`${param}`));
    }
  }

  return result.join('') + strings[strings.length - 1];
}

md.bold = function (s) {
  // $FlowFixMe[invalid-computed-prop]
  return {
    [mdVerbatim]: '**' + escapeMarkdown(`${s}`) + '**'
  };
};

md.italic = function (s) {
  // $FlowFixMe[invalid-computed-prop]
  return {
    [mdVerbatim]: '_' + escapeMarkdown(`${s}`) + '_'
  };
};

md.underline = function (s) {
  // $FlowFixMe[invalid-computed-prop]
  return {
    [mdVerbatim]: '__' + escapeMarkdown(`${s}`) + '__'
  };
};

md.strikethrough = function (s) {
  // $FlowFixMe[invalid-computed-prop]
  return {
    [mdVerbatim]: '~~' + escapeMarkdown(`${s}`) + '~~'
  };
};