"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReplacement = getReplacement;
exports.requireFromString = requireFromString;

var _path = _interopRequireDefault(require("path"));

var _requireFromString = _interopRequireDefault(require("require-from-string"));

var _objectToAst = _interopRequireDefault(require("./object-to-ast"));

function isCompiledESModule(module) {
  return typeof module === 'object' && module !== null && '__esModule' in module;
} // istanbul ignore next because I don't know how to reproduce a situation
// where the filename doesn't exist, but TypeScript gets mad when I don't handle that case.


const getFilename = fileOpts => {
  var _fileOpts$filename;

  return (_fileOpts$filename = fileOpts.filename) != null ? _fileOpts$filename : '"unknown"';
};

function requireFromString({
  string: stringToPreval,
  fileOpts,
  args = []
}) {
  const filename = getFilename(fileOpts);
  let module = (0, _requireFromString.default)(String(stringToPreval), filename);

  if (isCompiledESModule(module)) {
    // Allow for es modules (default export)
    module = module.default;
  }

  if (typeof module === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    module = module(...args);
  } else if (args.length) {
    throw new Error(`\`preval.require\`-ed module (${_path.default.relative(process.cwd(), filename)}) cannot accept arguments because it does not export a function. You passed the arguments: ${args.join(', ')}`);
  }

  return module;
}

function getReplacement({
  string,
  fileOpts,
  args,
  babel
}) {
  const module = requireFromString({
    string,
    fileOpts,
    args
  });
  return (0, _objectToAst.default)(module, {
    babel,
    fileOptions: fileOpts
  });
}
/*
eslint
  @typescript-eslint/no-explicit-any: "off",
*/