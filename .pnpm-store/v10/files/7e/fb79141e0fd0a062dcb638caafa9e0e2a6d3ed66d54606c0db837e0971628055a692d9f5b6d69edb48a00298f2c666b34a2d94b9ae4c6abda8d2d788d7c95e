/**
 * @fileoverview Limit to one expression per line in JSX
 * @author Mark Ivan Allen <Vydia.com>
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const eslintUtil = require('../util/eslint');
const jsxUtil = require('../util/jsx');
const report = require('../util/report');

const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const optionDefaults = {
  allow: 'none',
};

const messages = {
  moveToNewLine: '`{{descriptor}}` must be placed on a new line',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Require one JSX element per line',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-one-expression-per-line'),
    },
    fixable: 'whitespace',

    messages,

    schema: [
      {
        type: 'object',
        properties: {
          allow: {
            enum: ['none', 'literal', 'single-child', 'non-jsx'],
          },
        },
        default: optionDefaults,
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const options = Object.assign({}, optionDefaults, context.options[0]);

    function nodeKey(node) {
      return `${node.loc.start.line},${node.loc.start.column}`;
    }

    /**
     * @param {ASTNode} n
     * @returns {string}
     */
    function nodeDescriptor(n) {
      return n.openingElement ? n.openingElement.name.name : getText(context, n).replace(/\n/g, '');
    }

    function handleJSX(node) {
      const children = node.children;

      if (!children || !children.length) {
        return;
      }

      if (
        options.allow === 'non-jsx'
        && !children.find((child) => (child.type === 'JSXFragment' || child.type === 'JSXElement'))
      ) {
        return;
      }

      const openingElement = node.openingElement || node.openingFragment;
      const closingElement = node.closingElement || node.closingFragment;
      const openingElementStartLine = openingElement.loc.start.line;
      const openingElementEndLine = openingElement.loc.end.line;
      const closingElementStartLine = closingElement.loc.start.line;
      const closingElementEndLine = closingElement.loc.end.line;

      if (children.length === 1) {
        const child = children[0];
        if (
          openingElementStartLine === openingElementEndLine
          && openingElementEndLine === closingElementStartLine
          && closingElementStartLine === closingElementEndLine
          && closingElementEndLine === child.loc.start.line
          && child.loc.start.line === child.loc.end.line
        ) {
          if (
            options.allow === 'single-child'
            || (options.allow === 'literal' && (child.type === 'Literal' || child.type === 'JSXText'))
          ) {
            return;
          }
        }
      }

      const childrenGroupedByLine = {};
      const fixDetailsByNode = {};

      children.forEach((child) => {
        let countNewLinesBeforeContent = 0;
        let countNewLinesAfterContent = 0;

        if (child.type === 'Literal' || child.type === 'JSXText') {
          if (jsxUtil.isWhiteSpaces(child.raw)) {
            return;
          }

          countNewLinesBeforeContent = (child.raw.match(/^\s*\n/g) || []).length;
          countNewLinesAfterContent = (child.raw.match(/\n\s*$/g) || []).length;
        }

        const startLine = child.loc.start.line + countNewLinesBeforeContent;
        const endLine = child.loc.end.line - countNewLinesAfterContent;

        if (startLine === endLine) {
          if (!childrenGroupedByLine[startLine]) {
            childrenGroupedByLine[startLine] = [];
          }
          childrenGroupedByLine[startLine].push(child);
        } else {
          if (!childrenGroupedByLine[startLine]) {
            childrenGroupedByLine[startLine] = [];
          }
          childrenGroupedByLine[startLine].push(child);
          if (!childrenGroupedByLine[endLine]) {
            childrenGroupedByLine[endLine] = [];
          }
          childrenGroupedByLine[endLine].push(child);
        }
      });

      Object.keys(childrenGroupedByLine).forEach((_line) => {
        const line = parseInt(_line, 10);
        const firstIndex = 0;
        const lastIndex = childrenGroupedByLine[line].length - 1;

        childrenGroupedByLine[line].forEach((child, i) => {
          let prevChild;
          let nextChild;

          if (i === firstIndex) {
            if (line === openingElementEndLine) {
              prevChild = openingElement;
            }
          } else {
            prevChild = childrenGroupedByLine[line][i - 1];
          }

          if (i === lastIndex) {
            if (line === closingElementStartLine) {
              nextChild = closingElement;
            }
          } else {
            // We don't need to append a trailing because the next child will prepend a leading.
            // nextChild = childrenGroupedByLine[line][i + 1];
          }

          function spaceBetweenPrev() {
            return ((prevChild.type === 'Literal' || prevChild.type === 'JSXText') && / $/.test(prevChild.raw))
              || ((child.type === 'Literal' || child.type === 'JSXText') && /^ /.test(child.raw))
              || getSourceCode(context).isSpaceBetweenTokens(prevChild, child);
          }

          function spaceBetweenNext() {
            return ((nextChild.type === 'Literal' || nextChild.type === 'JSXText') && /^ /.test(nextChild.raw))
              || ((child.type === 'Literal' || child.type === 'JSXText') && / $/.test(child.raw))
              || getSourceCode(context).isSpaceBetweenTokens(child, nextChild);
          }

          if (!prevChild && !nextChild) {
            return;
          }

          const source = getText(context, child);
          const leadingSpace = !!(prevChild && spaceBetweenPrev());
          const trailingSpace = !!(nextChild && spaceBetweenNext());
          const leadingNewLine = !!prevChild;
          const trailingNewLine = !!nextChild;

          const key = nodeKey(child);

          if (!fixDetailsByNode[key]) {
            fixDetailsByNode[key] = {
              node: child,
              source,
              descriptor: nodeDescriptor(child),
            };
          }

          if (leadingSpace) {
            fixDetailsByNode[key].leadingSpace = true;
          }
          if (leadingNewLine) {
            fixDetailsByNode[key].leadingNewLine = true;
          }
          if (trailingNewLine) {
            fixDetailsByNode[key].trailingNewLine = true;
          }
          if (trailingSpace) {
            fixDetailsByNode[key].trailingSpace = true;
          }
        });
      });

      Object.keys(fixDetailsByNode).forEach((key) => {
        const details = fixDetailsByNode[key];

        const nodeToReport = details.node;
        const descriptor = details.descriptor;
        const source = details.source.replace(/(^ +| +(?=\n)*$)/g, '');

        const leadingSpaceString = details.leadingSpace ? '\n{\' \'}' : '';
        const trailingSpaceString = details.trailingSpace ? '{\' \'}\n' : '';
        const leadingNewLineString = details.leadingNewLine ? '\n' : '';
        const trailingNewLineString = details.trailingNewLine ? '\n' : '';

        const replaceText = `${leadingSpaceString}${leadingNewLineString}${source}${trailingNewLineString}${trailingSpaceString}`;

        report(context, messages.moveToNewLine, 'moveToNewLine', {
          node: nodeToReport,
          data: {
            descriptor,
          },
          fix(fixer) {
            return fixer.replaceText(nodeToReport, replaceText);
          },
        });
      });
    }

    return {
      JSXElement: handleJSX,
      JSXFragment: handleJSX,
    };
  },
};
