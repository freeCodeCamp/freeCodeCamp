"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _babelPluginMacros = require("babel-plugin-macros");

var _helpers = require("./helpers");

// const printAST = require('ast-pretty-print')
const prevalMacros = function prevalMacros({
  references,
  state,
  babel
}) {
  const fileOpts = state.file.opts;
  references.default.forEach(referencePath => {
    const path = referencePath;
    const targetPath = path.parentPath;

    if (targetPath.type === 'TaggedTemplateExpression') {
      asTag(targetPath, fileOpts, babel);
    } else if (targetPath.type === 'CallExpression') {
      asFunction(targetPath, fileOpts, babel);
    } else if (targetPath.type === 'JSXOpeningElement') {
      const jsxElement = targetPath.parentPath;
      asJSX(jsxElement, fileOpts, babel);
    } else if (targetPath.type === 'JSXClosingElement') {// That's okay, we already prevaled this one on its opening element.
    } else {
      throw new Error(`babel-plugin-preval/macro can only be used as tagged template expression, function call or JSX element. You tried ${targetPath.type}.`);
    }
  });
};

function asTag(path, fileOpts, babel) {
  const string = path.get('quasi').evaluate().value;
  const replacement = (0, _helpers.getReplacement)({
    string,
    fileOpts,
    babel
  }); // istanbul ignore next because this should never happen, but TypeScript needs me to handle it

  if (!replacement) return;
  path.replaceWith(replacement);
}

function asFunction(path, fileOpts, babel) {
  const argumentsPaths = path.get('arguments');
  const string = argumentsPaths[0].evaluate().value;
  const replacement = (0, _helpers.getReplacement)({
    string,
    fileOpts,
    babel
  }); // istanbul ignore next because this should never happen, but TypeScript needs me to handle it

  if (!replacement) return;
  argumentsPaths[0].parentPath.replaceWith(replacement);
} // eslint-disable-next-line no-unused-vars


function asJSX(path, fileOpts, babel) {
  const children = path.get('children'); // It's a shame you cannot use evaluate() with JSX
  // @ts-expect-error value isn't on all nodes

  const string = children[0].node.value;
  const replacement = (0, _helpers.getReplacement)({
    string,
    fileOpts,
    babel
  }); // istanbul ignore next because this should never happen, but TypeScript needs me to handle it

  if (!replacement) return;
  children[0].replaceWith(replacement);
  const {
    parentPath: {
      // @ts-expect-error OpeningElement and ClosingElement not present on all nodes
      node: {
        openingElement,
        closingElement
      }
    }
  } = children[0];
  openingElement.name.name = 'div';
  closingElement.name.name = 'div';
}

var _default = (0, _babelPluginMacros.createMacro)(prevalMacros);
/*
eslint
  @typescript-eslint/no-explicit-any: "off",
  @typescript-eslint/no-unsafe-member-access: "off",
*/


exports.default = _default;