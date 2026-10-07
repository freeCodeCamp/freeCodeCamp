/**
 * @fileoverview Disallow useless fragments
 */

'use strict';

const arrayIncludes = require('array-includes');

const pragmaUtil = require('../util/pragma');
const astUtil = require('../util/ast');
const jsxUtil = require('../util/jsx');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');
const getText = require('../util/eslint').getText;

function isJSXText(node) {
  return !!node && (node.type === 'JSXText' || node.type === 'Literal');
}

/**
 * @param {string} text
 * @returns {boolean}
 */
function isOnlyWhitespace(text) {
  return text.trim().length === 0;
}

/**
 * @param {ASTNode} node
 * @returns {boolean}
 */
function isNonspaceJSXTextOrJSXCurly(node) {
  return (isJSXText(node) && !isOnlyWhitespace(node.raw)) || node.type === 'JSXExpressionContainer';
}

/**
 * Somehow fragment like this is useful: <Foo content={<>ee eeee eeee ...</>} />
 * @param {ASTNode} node
 * @returns {boolean}
 */
function isFragmentWithOnlyTextAndIsNotChild(node) {
  return node.children.length === 1
    && isJSXText(node.children[0])
    && !(node.parent.type === 'JSXElement' || node.parent.type === 'JSXFragment');
}

/**
 * @param {string} text
 * @returns {string}
 */
function trimLikeReact(text) {
  const leadingSpaces = /^\s*/.exec(text)[0];
  const trailingSpaces = /\s*$/.exec(text)[0];

  const start = arrayIncludes(leadingSpaces, '\n') ? leadingSpaces.length : 0;
  const end = arrayIncludes(trailingSpaces, '\n') ? text.length - trailingSpaces.length : text.length;

  return text.slice(start, end);
}

/**
 * Test if node is like `<Fragment key={_}>_</Fragment>`
 * @param {JSXElement} node
 * @returns {boolean}
 */
function isKeyedElement(node) {
  return node.type === 'JSXElement'
    && node.openingElement.attributes
    && node.openingElement.attributes.some(jsxUtil.isJSXAttributeKey);
}

/**
 * @param {ASTNode} node
 * @returns {boolean}
 */
function containsCallExpression(node) {
  return node
    && node.type === 'JSXExpressionContainer'
    && astUtil.isCallExpression(node.expression);
}

const messages = {
  NeedsMoreChildren: 'Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.',
  ChildOfHtmlElement: 'Passing a fragment to an HTML element is useless.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    docs: {
      description: 'Disallow unnecessary fragments',
      category: 'Possible Errors',
      recommended: false,
      url: docsUrl('jsx-no-useless-fragment'),
    },
    messages,
    schema: [{
      type: 'object',
      properties: {
        allowExpressions: {
          type: 'boolean',
        },
      },
    }],
  },

  create(context) {
    const config = context.options[0] || {};
    const allowExpressions = config.allowExpressions || false;

    const reactPragma = pragmaUtil.getFromContext(context);
    const fragmentPragma = pragmaUtil.getFragmentFromContext(context);

    /**
     * Test whether a node is an padding spaces trimmed by react runtime.
     * @param {ASTNode} node
     * @returns {boolean}
     */
    function isPaddingSpaces(node) {
      return isJSXText(node)
        && isOnlyWhitespace(node.raw)
        && arrayIncludes(node.raw, '\n');
    }

    function isFragmentWithSingleExpression(node) {
      const children = node && node.children.filter((child) => !isPaddingSpaces(child));
      return (
        children
        && children.length === 1
        && children[0].type === 'JSXExpressionContainer'
      );
    }

    /**
     * Test whether a JSXElement has less than two children, excluding paddings spaces.
     * @param {JSXElement|JSXFragment} node
     * @returns {boolean}
     */
    function hasLessThanTwoChildren(node) {
      if (!node || !node.children) {
        return true;
      }

      /** @type {ASTNode[]} */
      const nonPaddingChildren = node.children.filter(
        (child) => !isPaddingSpaces(child)
      );

      if (nonPaddingChildren.length < 2) {
        return !containsCallExpression(nonPaddingChildren[0]);
      }
    }

    /**
     * @param {JSXElement|JSXFragment} node
     * @returns {boolean}
     */
    function isChildOfHtmlElement(node) {
      return node.parent.type === 'JSXElement'
        && node.parent.openingElement.name.type === 'JSXIdentifier'
        && /^[a-z]+$/.test(node.parent.openingElement.name.name);
    }

    /**
     * @param {JSXElement|JSXFragment} node
     * @return {boolean}
     */
    function isChildOfComponentElement(node) {
      return node.parent.type === 'JSXElement'
        && !isChildOfHtmlElement(node)
        && !jsxUtil.isFragment(node.parent, reactPragma, fragmentPragma);
    }

    /**
     * @param {ASTNode} node
     * @returns {boolean}
     */
    function canFix(node) {
      // Not safe to fix fragments without a jsx parent.
      if (!(node.parent.type === 'JSXElement' || node.parent.type === 'JSXFragment')) {
        // const a = <></>
        if (node.children.length === 0) {
          return false;
        }

        // const a = <>cat {meow}</>
        if (node.children.some(isNonspaceJSXTextOrJSXCurly)) {
          return false;
        }
      }

      // Not safe to fix `<Eeee><>foo</></Eeee>` because `Eeee` might require its children be a ReactElement.
      if (isChildOfComponentElement(node)) {
        return false;
      }

      // old TS parser can't handle this one
      if (node.type === 'JSXFragment' && (!node.openingFragment || !node.closingFragment)) {
        return false;
      }

      return true;
    }

    /**
     * @param {ASTNode} node
     * @returns {Function | undefined}
     */
    function getFix(node) {
      if (!canFix(node)) {
        return undefined;
      }

      return function fix(fixer) {
        const opener = node.type === 'JSXFragment' ? node.openingFragment : node.openingElement;
        const closer = node.type === 'JSXFragment' ? node.closingFragment : node.closingElement;

        const childrenText = opener.selfClosing ? '' : getText(context).slice(opener.range[1], closer.range[0]);

        return fixer.replaceText(node, trimLikeReact(childrenText));
      };
    }

    function checkNode(node) {
      if (isKeyedElement(node)) {
        return;
      }

      if (
        hasLessThanTwoChildren(node)
        && !isFragmentWithOnlyTextAndIsNotChild(node)
        && !(allowExpressions && isFragmentWithSingleExpression(node))
      ) {
        report(context, messages.NeedsMoreChildren, 'NeedsMoreChildren', {
          node,
          fix: getFix(node),
        });
      }

      if (isChildOfHtmlElement(node)) {
        report(context, messages.ChildOfHtmlElement, 'ChildOfHtmlElement', {
          node,
          fix: getFix(node),
        });
      }
    }

    return {
      JSXElement(node) {
        if (jsxUtil.isFragment(node, reactPragma, fragmentPragma)) {
          checkNode(node);
        }
      },
      JSXFragment: checkNode,
    };
  },
};
