/**
 * @fileoverview Enforce curly braces or disallow unnecessary curly brace in JSX
 * @author Jacky Ho
 * @author Simon Lydell
 */

'use strict';

const arrayIncludes = require('array-includes');

const docsUrl = require('../util/docsUrl');
const jsxUtil = require('../util/jsx');
const report = require('../util/report');
const eslintUtil = require('../util/eslint');

const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

const OPTION_ALWAYS = 'always';
const OPTION_NEVER = 'never';
const OPTION_IGNORE = 'ignore';

const OPTION_VALUES = [
  OPTION_ALWAYS,
  OPTION_NEVER,
  OPTION_IGNORE,
];
const DEFAULT_CONFIG = { props: OPTION_NEVER, children: OPTION_NEVER, propElementValues: OPTION_IGNORE };

const HTML_ENTITY_REGEX = () => /&[A-Za-z\d#]+;/g;

function containsLineTerminators(rawStringValue) {
  return /[\n\r\u2028\u2029]/.test(rawStringValue);
}

function containsBackslash(rawStringValue) {
  return arrayIncludes(rawStringValue, '\\');
}

function containsHTMLEntity(rawStringValue) {
  return HTML_ENTITY_REGEX().test(rawStringValue);
}

function containsOnlyHtmlEntities(rawStringValue) {
  return rawStringValue.replace(HTML_ENTITY_REGEX(), '').trim() === '';
}

function containsDisallowedJSXTextChars(rawStringValue) {
  return /[{<>}]/.test(rawStringValue);
}

function containsQuoteCharacters(value) {
  return /['"]/.test(value);
}

function containsMultilineComment(value) {
  return /\/\*/.test(value);
}

function escapeDoubleQuotes(rawStringValue) {
  return rawStringValue.replace(/\\"/g, '"').replace(/"/g, '\\"');
}

function escapeBackslashes(rawStringValue) {
  return rawStringValue.replace(/\\/g, '\\\\');
}

function needToEscapeCharacterForJSX(raw, node) {
  return (
    containsBackslash(raw)
    || containsHTMLEntity(raw)
    || (node.parent.type !== 'JSXAttribute' && containsDisallowedJSXTextChars(raw))
  );
}

function containsWhitespaceExpression(child) {
  if (child.type === 'JSXExpressionContainer') {
    const value = child.expression.value;
    return value ? jsxUtil.isWhiteSpaces(value) : false;
  }
  return false;
}

function isLineBreak(text) {
  return containsLineTerminators(text) && text.trim() === '';
}

function wrapNonHTMLEntities(text) {
  const HTML_ENTITY = '<HTML_ENTITY>';
  const withCurlyBraces = text.split(HTML_ENTITY_REGEX()).map((word) => (
    word === '' ? '' : `{${JSON.stringify(word)}}`
  )).join(HTML_ENTITY);

  const htmlEntities = text.match(HTML_ENTITY_REGEX());
  return htmlEntities.reduce((acc, htmlEntity) => (
    acc.replace(HTML_ENTITY, htmlEntity)
  ), withCurlyBraces);
}

function wrapWithCurlyBraces(rawText) {
  if (!containsLineTerminators(rawText)) {
    return `{${JSON.stringify(rawText)}}`;
  }

  return rawText.split('\n').map((line) => {
    if (line.trim() === '') {
      return line;
    }
    const firstCharIndex = line.search(/[^\s]/);
    const leftWhitespace = line.slice(0, firstCharIndex);
    const text = line.slice(firstCharIndex);

    if (containsHTMLEntity(line)) {
      return `${leftWhitespace}${wrapNonHTMLEntities(text)}`;
    }
    return `${leftWhitespace}{${JSON.stringify(text)}}`;
  }).join('\n');
}

function isWhiteSpaceLiteral(node) {
  return node.type && node.type === 'Literal' && node.value && jsxUtil.isWhiteSpaces(node.value);
}

function isStringWithTrailingWhiteSpaces(value) {
  return /^\s|\s$/.test(value);
}

function isLiteralWithTrailingWhiteSpaces(node) {
  return node.type && node.type === 'Literal' && node.value && isStringWithTrailingWhiteSpaces(node.value);
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  unnecessaryCurly: 'Curly braces are unnecessary here.',
  missingCurly: 'Need to wrap this literal in a JSX expression.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-curly-brace-presence'),
    },
    fixable: 'code',

    messages,

    schema: [
      {
        anyOf: [
          {
            type: 'object',
            properties: {
              props: { enum: OPTION_VALUES },
              children: { enum: OPTION_VALUES },
              propElementValues: { enum: OPTION_VALUES },
            },
            additionalProperties: false,
          },
          {
            enum: OPTION_VALUES,
          },
        ],
      },
    ],
  },

  create(context) {
    const ruleOptions = context.options[0];
    const userConfig = typeof ruleOptions === 'string'
      ? { props: ruleOptions, children: ruleOptions, propElementValues: OPTION_IGNORE }
      : Object.assign({}, DEFAULT_CONFIG, ruleOptions);

    /**
     * Report and fix an unnecessary curly brace violation on a node
     * @param {ASTNode} JSXExpressionNode - The AST node with an unnecessary JSX expression
     */
    function reportUnnecessaryCurly(JSXExpressionNode) {
      report(context, messages.unnecessaryCurly, 'unnecessaryCurly', {
        node: JSXExpressionNode,
        fix(fixer) {
          const expression = JSXExpressionNode.expression;

          let textToReplace;
          if (jsxUtil.isJSX(expression)) {
            textToReplace = getText(context, expression);
          } else {
            const expressionType = expression && expression.type;
            const parentType = JSXExpressionNode.parent.type;

            if (parentType === 'JSXAttribute') {
              if (expressionType !== 'TemplateLiteral' && /["]/.test(expression.raw.slice(1, -1))) {
                textToReplace = expression.raw;
              } else {
                textToReplace = `"${expressionType === 'TemplateLiteral'
                  ? expression.quasis[0].value.raw
                  : expression.raw.slice(1, -1)
                }"`;
              }
            } else if (jsxUtil.isJSX(expression)) {
              textToReplace = getText(context, expression);
            } else {
              textToReplace = expressionType === 'TemplateLiteral'
                ? expression.quasis[0].value.cooked : expression.value;
            }
          }

          return fixer.replaceText(JSXExpressionNode, textToReplace);
        },
      });
    }

    function reportMissingCurly(literalNode) {
      report(context, messages.missingCurly, 'missingCurly', {
        node: literalNode,
        fix(fixer) {
          if (jsxUtil.isJSX(literalNode)) {
            return fixer.replaceText(literalNode, `{${getText(context, literalNode)}}`);
          }

          // If a HTML entity name is found, bail out because it can be fixed
          // by either using the real character or the unicode equivalent.
          // If it contains any line terminator character, bail out as well.
          if (
            containsOnlyHtmlEntities(literalNode.raw)
            || (literalNode.parent.type === 'JSXAttribute' && containsLineTerminators(literalNode.raw))
            || isLineBreak(literalNode.raw)
          ) {
            return null;
          }

          const expression = literalNode.parent.type === 'JSXAttribute'
            ? `{"${escapeDoubleQuotes(escapeBackslashes(
              literalNode.raw.slice(1, -1)
            ))}"}`
            : wrapWithCurlyBraces(literalNode.raw);

          return fixer.replaceText(literalNode, expression);
        },
      });
    }

    // Bail out if there is any character that needs to be escaped in JSX
    // because escaping decreases readability and the original code may be more
    // readable anyway or intentional for other specific reasons
    function lintUnnecessaryCurly(JSXExpressionNode) {
      const expression = JSXExpressionNode.expression;
      const expressionType = expression.type;

      const sourceCode = getSourceCode(context);
      // Curly braces containing comments are necessary
      if (sourceCode.getCommentsInside && sourceCode.getCommentsInside(JSXExpressionNode).length > 0) {
        return;
      }

      if (
        (expressionType === 'Literal' || expressionType === 'JSXText')
          && typeof expression.value === 'string'
          && (
            (JSXExpressionNode.parent.type === 'JSXAttribute' && !isWhiteSpaceLiteral(expression))
            || !isLiteralWithTrailingWhiteSpaces(expression)
          )
          && !containsMultilineComment(expression.value)
          && !needToEscapeCharacterForJSX(expression.raw, JSXExpressionNode) && (
          jsxUtil.isJSX(JSXExpressionNode.parent)
          || (!containsQuoteCharacters(expression.value) || typeof expression.value === 'string')
        )
      ) {
        reportUnnecessaryCurly(JSXExpressionNode);
      } else if (
        expressionType === 'TemplateLiteral'
        && expression.expressions.length === 0
        && expression.quasis[0].value.raw.indexOf('\n') === -1
        && !isStringWithTrailingWhiteSpaces(expression.quasis[0].value.raw)
        && !needToEscapeCharacterForJSX(expression.quasis[0].value.raw, JSXExpressionNode)
        && !containsQuoteCharacters(expression.quasis[0].value.cooked)
      ) {
        reportUnnecessaryCurly(JSXExpressionNode);
      } else if (jsxUtil.isJSX(expression)) {
        reportUnnecessaryCurly(JSXExpressionNode);
      }
    }

    function areRuleConditionsSatisfied(parent, config, ruleCondition) {
      return (
        parent.type === 'JSXAttribute'
          && typeof config.props === 'string'
          && config.props === ruleCondition
      ) || (
        jsxUtil.isJSX(parent)
          && typeof config.children === 'string'
          && config.children === ruleCondition
      );
    }

    function getAdjacentSiblings(node, children) {
      for (let i = 1; i < children.length - 1; i++) {
        const child = children[i];
        if (node === child) {
          return [children[i - 1], children[i + 1]];
        }
      }
      if (node === children[0] && children[1]) {
        return [children[1]];
      }
      if (node === children[children.length - 1] && children[children.length - 2]) {
        return [children[children.length - 2]];
      }
      return [];
    }

    function hasAdjacentJsxExpressionContainers(node, children) {
      if (!children) {
        return false;
      }
      const childrenExcludingWhitespaceLiteral = children.filter((child) => !isWhiteSpaceLiteral(child));
      const adjSiblings = getAdjacentSiblings(node, childrenExcludingWhitespaceLiteral);

      return adjSiblings.some((x) => x.type && x.type === 'JSXExpressionContainer');
    }
    function hasAdjacentJsx(node, children) {
      if (!children) {
        return false;
      }
      const childrenExcludingWhitespaceLiteral = children.filter((child) => !isWhiteSpaceLiteral(child));
      const adjSiblings = getAdjacentSiblings(node, childrenExcludingWhitespaceLiteral);

      return adjSiblings.some((x) => x.type && arrayIncludes(['JSXExpressionContainer', 'JSXElement'], x.type));
    }
    function shouldCheckForUnnecessaryCurly(node, config) {
      const parent = node.parent;
      // Bail out if the parent is a JSXAttribute & its contents aren't
      // StringLiteral or TemplateLiteral since e.g
      // <App prop1={<CustomEl />} prop2={<CustomEl>...</CustomEl>} />

      if (
        parent.type && parent.type === 'JSXAttribute'
        && (node.expression && node.expression.type
          && node.expression.type !== 'Literal'
          && node.expression.type !== 'StringLiteral'
          && node.expression.type !== 'TemplateLiteral')
      ) {
        return false;
      }

      // If there are adjacent `JsxExpressionContainer` then there is no need,
      // to check for unnecessary curly braces.
      if (jsxUtil.isJSX(parent) && hasAdjacentJsxExpressionContainers(node, parent.children)) {
        return false;
      }
      if (containsWhitespaceExpression(node) && hasAdjacentJsx(node, parent.children)) {
        return false;
      }
      if (
        parent.children
        && parent.children.length === 1
        && containsWhitespaceExpression(node)
      ) {
        return false;
      }

      return areRuleConditionsSatisfied(parent, config, OPTION_NEVER);
    }

    function shouldCheckForMissingCurly(node, config) {
      if (jsxUtil.isJSX(node)) {
        return config.propElementValues !== OPTION_IGNORE;
      }
      if (
        isLineBreak(node.raw)
        || containsOnlyHtmlEntities(node.raw)
      ) {
        return false;
      }
      const parent = node.parent;
      if (
        parent.children
        && parent.children.length === 1
        && containsWhitespaceExpression(parent.children[0])
      ) {
        return false;
      }

      return areRuleConditionsSatisfied(parent, config, OPTION_ALWAYS);
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      'JSXAttribute > JSXExpressionContainer > JSXElement'(node) {
        if (userConfig.propElementValues === OPTION_NEVER) {
          reportUnnecessaryCurly(node.parent);
        }
      },

      JSXExpressionContainer(node) {
        if (shouldCheckForUnnecessaryCurly(node, userConfig)) {
          lintUnnecessaryCurly(node);
        }
      },

      'JSXAttribute > JSXElement, Literal, JSXText'(node) {
        if (shouldCheckForMissingCurly(node, userConfig)) {
          reportMissingCurly(node);
        }
      },
    };
  },
};
