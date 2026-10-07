"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = objectToAST;

function objectToAST(object, {
  babel,
  fileOptions
}) {
  const stringified = stringify(object);
  const variableDeclarationNode = babel.template(`var x = ${stringified}`, {
    preserveComments: true,
    placeholderPattern: false,
    ...fileOptions.parserOpts,
    sourceType: 'module'
  })();
  return variableDeclarationNode.declarations[0].init;
}

function stringify(object) {
  var _JSON$stringify;

  // This check is necessary as `JSON.stringify` can return undefined,
  // however the TypeScript definition for it does not include it.
  // See https://github.com/microsoft/TypeScript/issues/18879 for details.
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const str = (_JSON$stringify = JSON.stringify(object, stringifyReplacer)) != null ? _JSON$stringify : 'undefined';
  return str.replace(/"__FUNCTION_START__(.*?)__FUNCTION_END__"/g, functionReplacer);

  function stringifyReplacer(_key, value) {
    if (typeof value === 'function') {
      return `__FUNCTION_START__${value.toString()}__FUNCTION_END__`;
    }

    return value;
  }

  function functionReplacer(match, p1) {
    return p1.replace(/\\"/g, '"').replace(/\\n/g, '\n');
  }
}